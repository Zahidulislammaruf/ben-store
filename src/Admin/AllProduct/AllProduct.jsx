import toast, { Toaster } from "react-hot-toast";
import useProduct from "../../hooks/useProduct";
import { CiTrash } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";

const AllProduct = () => {
    const axiosPublic = useAxios()
    const [product, refetch] = useProduct()

    const handleDelete = id =>{

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
             axiosPublic.delete(`/product/${id}`)
             .then(res=>{
                console.log(res.data)
                if(res.data.deletedCount > 0){
                    refetch()
                    toast.success('Item Delete Successful')

                      
                    }
             })
             
             
                
            }
          });

    }
    const handleAdd = () =>{

    }

    return (
        <div>
            <div className=" min-h-screen">
            <div className="flex justify-around text-center text-3xl p-3 mb-4 font-serif bg-zinc-700  text-white">
              <h2>Product List</h2>
              <h2>Total Product : {product.length} </h2>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
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
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
      product.map((item,index)=> <tr key={item._id}>
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
        <td>BDT {item.price}</td>
        <td> {item.category}</td>
        <td> 
<button onClick={()=>handleAdd(item)}> <h2 className=" "> <FaEdit className=" text-2xl" ></FaEdit>  </h2>
</button>
        </td>
        <td> 
          <button onClick={()=> handleDelete(item._id)}><CiTrash className="text-2xl text-red-600"></CiTrash></button>
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

export default AllProduct;