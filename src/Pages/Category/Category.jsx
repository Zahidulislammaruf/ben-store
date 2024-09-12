import { FaBook, FaTshirt } from "react-icons/fa";
import { FiWatch } from "react-icons/fi";
import { IoGameController } from "react-icons/io5";
import { FaKitchenSet } from "react-icons/fa6";
import { GiHealing } from "react-icons/gi";



const Category = () => {
    return (
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-12 p-4">
            <div className=" flex justify-center items-center hover:bg-black hover:text-white border-2 border-blue-200  gap-2 ">
                <div className=" text-3xl ">
                    <FaTshirt></FaTshirt>
                </div>
                <div className=" text-[20px] font-mono">
                    <h2>Tshirt</h2>

                </div>
            </div>
            <div className="hover:bg-black hover:text-white flex justify-center items-center border-2 border-blue-200 p-6 gap-2 ">
                <div className=" text-3xl ">
                <FiWatch />

                </div>
                <div className="text-[20px] font-mono">
                    <h2>Watch</h2>

                </div>
            </div>
            <div className="hover:bg-black hover:text-white flex justify-center items-center border-2 border-blue-200 p-6 gap-2 ">
                <div className=" text-3xl ">
                    <FaBook/>
                </div>
                <div className="text-[20px] font-mono">
                    <h2>Book</h2>

                </div>
            </div>
            <div className="hover:bg-black hover:text-white flex justify-center items-center border-2 border-blue-200 p-6 gap-2 ">
                <div className=" text-3xl ">
                <IoGameController />

                </div>
                <div className="text-[20px] font-mono">
                    <h2>Toy & Games</h2>

                </div>
            </div>
            <div className="hover:bg-black hover:text-white flex justify-center items-center border-2 border-blue-200 p-6 gap-2 ">
                <div className=" text-3xl ">
                <FaKitchenSet />

                </div>
                <div className="text-[20px] font-mono">
                    <h2>Kitchen</h2>

                </div>
            </div>
            <div className=" flex justify-center items-center  border-2 border-blue-200 hover:bg-black hover:text-white p-6 gap-2 ">
                <div className=" text-3xl ">
                <GiHealing />

                </div>
                <div className="text-[20px] font-mono">
                    <h2>Beauty</h2>

                </div>
            </div>
            
        </div>
    );
};

export default Category;