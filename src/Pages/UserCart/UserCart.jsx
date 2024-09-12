
import {  CiTrash } from "react-icons/ci";
import useCart from "../../hooks/useCart";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";

const UserCart = () => {
  const {user} = useContext(AuthContext)
   const axiosPublic = useAxios()
    const [cart, refetch] = useCart()
    const handleDelete = id => {
      console.log(id)
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
         axiosPublic.delete(`/cart/${id}`)
         .then(res=>{
            console.log(res.data)
            if(res.data.deletedCount > 0){
                refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Item has been deleted.",
                    icon: "success"
                  });
                }
         })
         
         
            
        }
      });
     }
     const handleAdd = item =>{
      const {_id,name,title,price,category,image} = item;
      const orderItem = {
        email : user.email,
        name,
        title,
        price,
        category,
        image
      }
      axiosPublic.post('/order',orderItem)
          .then(res=>{
            console.log(res.data)
             if(res.data.insertedId){
              axiosPublic.delete(`/cart/${item._id}`)
              .then(res=>{
                if(res.data.deletedCount > 0){
                  
                  toast.success('Order Placed Successfully')
                  refetch()
                }
              })
  
             }
          })
        
  
  
  
  
  
     }
    
    
    const totalPrice = cart.reduce((total, item)=> total + item.price,0)

   // console.log(matchValue)
    return (
        <div>
        <div className=" min-h-screen">
            <div className="text-center flex justify-around text-3xl mt-4 mb-4 font-serif bg-lime-400 p-2 text-black">
              <h2>Cart Item List</h2>
              <h2>Total Price : <span className="font-mono">BDT{totalPrice}</span> </h2>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
  <Toaster
  position="top-right"
  reverseOrder={false}
/>
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <h2>Total</h2>
          </label>
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Category</th>
        <th>Buy Now</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
      cart.map((item,index)=> <tr key={item._id}>
        <th>
          <label>
            <h2>{index + 1}</h2>
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="loading" />
              </div>
            </div>
           
          </div>
        </td>
        <td>
        {item.name}
          <br/>
        </td>
        <td>BDT <span>{item.price}</span> </td>
        <td> {item.category}</td>
        <td> 
        <button onClick={()=>handleAdd(item)}> <h2 className=" btn bg-orange-300">Order</h2>
</button>        </td>
        <td> 
         <button onClick={()=>handleDelete(item._id)}> <CiTrash className="text-2xl text-red-600"></CiTrash></button>
        </td>
        
      </tr>)
      }
      
      
     
      
    </tbody>
    
    
  </table>
</div>
        </div> 
        </div>
    );
};

export default UserCart;