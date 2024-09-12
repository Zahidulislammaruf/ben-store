import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import useUser from "../../hooks/useUser";
import useCart from "../../hooks/useCart";
import useSaved from "../../hooks/useSaved";

const Profile = () => {
    const {user} =useContext(AuthContext)
    const [cart] = useCart()
    const [saveData] = useSaved()
    const [users] = useUser()
    
    
   

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 ">
        <div className=" items-start justify-start">
        <div className="bg-white p-8 rounded-lg shadow-xl">
            <div className="flex justify-center mb-6">
                <div className="w-96 h-96 overflow-hidden rounded-full border-4 border-gray-300">
                    <img className="object-cover w-full h-full" src={user?.photoURL} alt="Profile" />
                </div>
            </div>
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800">{user?.displayName}</h2>
                <p className="text-gray-600">{user?.email}</p>
                <div className="mt-4">
                    <p className="text-gray-700 flex items-center justify-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12 2a1 1 0 011 1v14a1 1 0 11-2 0V3a1 1 0 011-1zM8 7a1 1 0 011 1v9a1 1 0 11-2 0V8a1 1 0 011-1zM4 10a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        {users?.phoneNumber}
                    </p>
                    <p className="text-gray-700 flex items-center justify-center mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 1.75C4 .784 4.784 0 5.75 0h8.5c.966 0 1.75.784 1.75 1.75v16.5a1.75 1.75 0 01-1.75 1.75h-8.5A1.75 1.75 0 013 18.25V1.75zM5.75 1A.75.75 0 005 1v16h10V1a.75.75 0 00-.75-.75h-8.5z" clipRule="evenodd" />
                            <path d="M10 4a1 1 0 100-2 1 1 0 000 2zM8 7a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm3 8a1 1 0 100-2 1 1 0 000 2z" />
                        </svg>
                        {users?.address}
                    </p>
                </div>
            </div>
        </div>
        </div>
        <div className="flex  bg-slate-200">
            <div className=" p-6  bg-red-200 text-center w-[33%]">
                <div>
                    <h2 className="text-[16px] md:text-2xl font-serif">Total Order</h2>
                </div>
                <div>
                    <p className="text-[20px] md:text-3xl font-serif">00</p>
                </div>
            </div>
            <div className="p-6 text-center bg-blue-200 w-[33%]">
            <div>
                    <h2 className="text-[16px] md:text-2xl   font-serif">Item In Cart</h2>
                </div>
                <div>
                    <p className="text-[20px] md:text-3xl font-serif">{cart.length}</p>
                </div>
            </div>
            <div className="p-6 text-center bg-emerald-200 w-[34%]">
            <div>
                    <h2 className="text-[16px] md:text-2xl font-serif">Saved Item</h2>
                </div>
                <div>
                    <p className="text-[20px] md:text-3xl font-serif">{saveData.length}</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Profile;