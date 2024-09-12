import { NavLink, Outlet } from "react-router-dom";
import { IoStatsChart } from "react-icons/io5";
import { FaCartPlus, FaHome } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";



const DashBoard = () => {
    return (
        <div className="flex">
           <div className="w-44  min-h-screen bg-emerald-300">
            <ul className="menu p-4 gap-y-4">
                <li>
                    <NavLink to='statistics'><IoStatsChart />
Statistics</NavLink>
                </li>
                <li>
                    <NavLink to='allproduct'><BsFillCartCheckFill />

All Product</NavLink>
                </li>
                <li>
                    <NavLink to='alluser'><FaUsers />
All User</NavLink>
                </li>
                <li>
                    <NavLink to='addproduct'><FaCartPlus />

Add Item</NavLink>
                </li>
                <div className=" divider divider-neutral" />
                <li>
                    <NavLink to='/'><FaHome />

Home</NavLink>
                </li>
                <li>
                    <NavLink to='statistics'><FaCartPlus />

Add Item</NavLink>
                </li>
                <li>
                    <NavLink to='statistics'><FaCartPlus />

Add Item</NavLink>
                </li>
            </ul>
            </div> 
            <div className=" flex-1">
                
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;