import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Await, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/Provider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';

const LoginPage = () => {
  const navi = useNavigate()
  const {loginUser} = useContext(AuthContext)
    const { register, handleSubmit,formState: { errors }} = useForm();
    const onSubmit = async (data) => {
        loginUser(data.email, data.password)
        .then(result=>{
         // console.log(result.user)
         toast.success('Login Successfully')
         setTimeout(() => { // Adding setTimeout for a 2-second delay
          navi('/');
          
        }, 2000);

         

        })
        
        
        
       // console.log(data)
      };
    return (
        <div>
          <div className="hero mt-24 mb-32  bg-white">
     
     <div className="card w-[75%] lg:w-[60%] shadow-2xl bg-base-100">
         <div className=' text-center mt-4'>
             <h2>Already Have Account? </h2>
             <p>Login Now</p>
         </div>
       <form onSubmit={handleSubmit(onSubmit)} className="card-body">
         <div className="form-control">
           <label className="label">
             <span className="label-text">Email</span>
           </label>
           <input type="email" placeholder="email" {...register("email", {required: true})} className="input input-bordered" required />
           {errors.email && <span className="text-red-400">This field is required, Please Enter Your Name</span>}
         </div>
         <Toaster
  position="top-right"
  reverseOrder={true}
/>
         <div className="form-control">
           <label className="label">
             <span className="label-text">Password</span>
           </label>
           <input type="password" placeholder="password" {...register("password",{
              required: true,
              minLength :5,
              maxLength: 10,
              pattern: /[A-Za-z]+$/ })} className="input input-bordered" required />
           {errors.password?.type === 'required' && <span className="text-red-400">Password Must Be required</span>}
           {errors.password?.type === 'minLength' &&<span className="text-red-400">Password Must Be 6 C required</span>}
           {errors.password?.type === 'maxLength' &&<span className="text-red-400">Password Must Less The 10 C required</span>}
           {errors.password?.type === 'pattern' &&<span className="text-red-400">Password have A Special Ch Or Number</span>} 
           <label className="label">
             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
           </label>
         </div>
         <div className="form-control mt-6">
         <input className='btn' type="submit" value='Sing Up' />
         </div>
       </form>
       <div className='text-center mb-2' >
        <h2>New Here? <Link to='/singup'>  <span className='text-red-400'>Singup Now</span></Link> </h2>
       </div>
       <ToastContainer />
     </div>
   </div>  
        </div>
    );
};

export default LoginPage;