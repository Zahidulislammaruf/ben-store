import { FaEdit } from "react-icons/fa";
import useUsers from "../../hooks/useUsers";
import { CiTrash } from "react-icons/ci";
import { Toaster } from "react-hot-toast";

const AllUser = () => {
    const [totalusers] = useUsers()
    console.log(totalusers)
    return (
        <div>

<div className=" min-h-screen">
            <div className="flex justify-around text-center text-3xl p-3 mb-4 font-serif bg-zinc-700  text-white">
              <h2>Users List</h2>
              <h2>Total User : {totalusers.length} </h2>
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
        
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
      totalusers.map((item,index)=> <tr key={item._id}>
        <th>
          <label>
            <h2>{index + 1}</h2>
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.
photoUrl
} alt="loading" />
              </div>
            </div>
           
          </div>
        </td>
        <td>
        {item.name}
          <br/>
        </td>
       
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

export default AllUser;
