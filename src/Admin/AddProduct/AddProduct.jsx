
import { useForm } from "react-hook-form"
import useAxios from "../../hooks/useAxios";
import axios from "axios";
const image_API = "https://api.imgbb.com/1/upload?key=3e2708df8cc4fb8caa535a3d4a74d53c"


const AddProduct = () => {
    const axiosPublic = useAxios()

    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const imgFile = {image : data.image[0]}
        
    const res = await axios.post(image_API, imgFile,{
        headers : {
            'Content-Type' : 'multipart/form-data'
        }
    } )
    console.log(res.data)
    if(res.data.success){
        const menuItem ={
            name : data.name,
            price : parseFloat(data.price),
            description  : data.description,
            brand : data.brand,
            color : data.color,
            feature : data.features,
            view : data.view,
            stock : data.stock,
            category : data.category,
            image : res.data.data.display_url,
            title : data.title
        }
        const product = axiosPublic.post('/product', menuItem)
        console.log(product.data)
        if((await product).data.insertedId){
            alert('Take Rest Boy')
        }
    }
}
    return (
        <div>
           <div>
            <div>
            <h2 className=" text-2xl text-center pt-4 p-4 bg-teal-300 font-bold font-serif ">Add Product</h2>
            </div>
         
            
            <div className=' mx-auto w-[80%] flex justify-center items-center '>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <div className="label">
                         <span className="label-text">What is your Product Title?</span>
                       </div>
                        <input className='input input-bordered w-full max-w-xs' type="text" placeholder="title" {...register("title", {required: true})} />
                    </div>

                   <div className="flex flex-col md:flex-row gap-4">
                   <div>
                    <div className="label">
                         <span className="label-text">What is your Product Name?</span>
                       </div>
                        <input className='input input-bordered w-full max-w-xs' type="text" placeholder="name" {...register("name", {required: true})} />
                    </div>

                    <div>
                    <div className="label">
                         <span className="label-text">What is your Product Price?</span>
                       </div>
                        <input className='input input-bordered w-full max-w-xs' type="text" placeholder="price" {...register("price", {required: true})} />
                    </div>
                   </div>

                    <div>
                    <div className="label">
                         <span className="label-text">What is your Product Description?</span>
                       </div>
                        <input className='input input-bordered w-full max-w-xs' type="text" placeholder="description" {...register("description", {})} />
                    </div>

                   <div className="flex flex-col md:flex-row gap-4">
                   <div>
                    <div className="label">
                         <span className="label-text">What is your Product Brand?</span>
                       </div>
                        <input className='input input-bordered w-full max-w-xs' type="text" placeholder="brand" {...register("brand", {})} />
                    </div>

                    <div>
                    <div className="label">
                         <span className="label-text">What is your Product Color?</span>
                       </div>
                        <input className='input input-bordered w-full max-w-xs' type="text" placeholder="color" {...register("color", {})} />
                    </div>
                   </div>

                    <div>
                    <div className="label">
                         <span className="label-text">What is your Product Category?</span>
                       </div>
                        <select className="input input-bordered w-full max-w-xs" {...register("category", { required: true })}>
                            <option value="Electronics">Electronics</option>
                            <option value="Clothing">Clothing </option>
                            <option value="Kitchen">Home & Kitchen</option>
                            <option value="Beauty">Health & Beauty</option>
                            <option value="Toys & Games">Toys & Games</option>
                            <option value="Books">Books</option>
                        </select>
                    </div>

                    <div>
                    <div className="label">
                         <span className="label-text">What is your Product Feature?</span>
                       </div>
                        <textarea placeholder="Add Feature If have" className='input input-bordered w-full max-w-xs' {...register("features", {})} />
                    </div>

                    <div className=" flex flex-col md:flex-row gap-4">
                    <div>
                    <div className="label">
                         <span className="label-text">Is Product Available?</span>
                       </div>
                        <select className="input input-bordered w-full max-w-xs" {...register("stock")}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    <div>
                    <div className="label">
                         <span className="label-text">Select Where You Want To DIsplay?</span>
                       </div>
                    <select className="input input-bordered w-full max-w-xs" {...register("view")}>
        <option value="tranding">tranding</option>
        <option value="new">new</option>
        <option value="popular">popular</option>
        <option value="avg">avg</option>
      </select>
                    </div>

                    </div>

                    <div>
                    <div className="label">
                         <span className="label-text">Upload Your Product Image?</span>
                       </div>
                    <input {...register("image", {})} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" type="submit">Submit</button>
                </form>
            </div>
        </div>  
        </div> 
        
    );
};

export default AddProduct;