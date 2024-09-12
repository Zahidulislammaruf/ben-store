import { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";
import toast, { Toaster } from "react-hot-toast";
import useAxios from "../hooks/useAxios";

const ItemCard = ({item}) => {
  const axiosPublic = useAxios()
    const {user} = useContext(AuthContext)
    const {_id,name,title,price,category,image} = item;
    const handlecart = item =>{
      console.log(item)
      if(user && user.email ){
        const cartItem = {
          email : user.email,
          name,
          title,
          price,
          category,
          image
        }
        
        axiosPublic.post('/cart',cartItem)
        .then(res=>{
          console.log(res.data)
           if(res.data.insertedId){
            toast.success('Added To Cart')
           }
        })
      }else{
        toast.error('Login First')
      }
      
    }
    const handleSaved = item =>{
      console.log(item)
      if(user && user.email ){
        const savedItem = {
          email : user.email,
          name,
          title,
          price,
          category,
          image
        }
        console.log(savedItem)
        axiosPublic.post('/saved',savedItem)
        .then(res=>{
          console.log(res.data)
           if(res.data.insertedId){
            toast.success('Item Saved')
           }
        })
      }else{
        toast.error('Login First')
      }
      
    }
    
    return (
      
          <div className="p-6 md:p-2">
            <div className="card bg-base-100 shadow-2xl min-h-[456px] max-h-[456px]">
  <figure className="px-10 pt-10">
    <img  src={image} alt="error" className="rounded-xl p-4 " />
  </figure>
  
  <div className="card-body">
    <h2 className=" text-red-500 uppercase font-serif">{category}</h2>
    <Link to={`/product/${_id}`}><p className=" text-slate-500 hover:underline">{name}</p>   </Link>
    <p> <span className="text-[14px]">BDT</span> {price}</p>
    <div className="flex justify-around ">
        <button onClick={()=> handleSaved(item)} data className="btn  tooltip bg-white hover:bg-black hover:text-blue-50" data-tip="Saved"><CiHeart className="text-3xl "></CiHeart></button>
        <button onClick={()=>handlecart(item)} className="btn tooltip bg-white hover:bg-black hover:text-blue-50" data-tip="Add To">< FaCartArrowDown className="text-3xl"></FaCartArrowDown></button>  
        <button className="btn  btn-primary bg-white text-green-500 hover:bg-black hover:text-blue-50">Buy Now</button>
        <Toaster
  position="top-right"
  reverseOrder={true}
/>
   </div>
  </div>
</div>
        </div>
       
        
    );
};

export default ItemCard;