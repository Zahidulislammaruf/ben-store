import { useContext } from "react";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";



const Navbar = () => {
   const {logOut,user} = useContext(AuthContext)
   
   const handleLogOut= () =>{
       logOut()
   }

    return (
        <div>
         <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li> <NavLink to='/'><a>Home</a></NavLink></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
        <li><NavLink to='/additems'>Add Item</NavLink></li>
      </ul>
    </div>
    <a className=" btn-ghost text-xl">Ben Store</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li> <NavLink to='/'><a>Home</a></NavLink></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
 
    </ul>
  </div>
  <div className="navbar-end flex gap-8">
    <Link to='/saved'><div className="tooltip tooltip-bottom" data-tip="Saved">
    <CiHeart  className="text-2xl md:text-4xl " />
    </div>
    </Link>
    <Link to='/cart'>
    <div className="tooltip tooltip-bottom" data-tip="Cart">
    <CiShoppingCart className="text-2xl md:text-4xl " />
    </div>
    </Link>
     { user ? <>
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <Link to='/profile'>
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        </Link>
        <Link to='/order'><li><a>Order</a></li></Link>
        <Link to='/dashboard/statistics'><li><a>Statistics</a></li></Link>
        <button onClick={handleLogOut}><li><a>Logout</a></li></button>
      </ul>
    </div>
  
     </>
      :
      <div className="tooltip tooltip-bottom" data-tip="User">
    <Link to='/singup'><CiUser className="text-2xl md:text-4xl " /></Link>
     </div>
     
     }

  </div>
</div>   
        </div>
    );
};

export default Navbar;