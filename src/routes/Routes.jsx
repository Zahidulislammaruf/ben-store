import {createBrowserRouter} from "react-router-dom";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Singup from "../Pages/Singup/Singup";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Saved from "../Pages/Saved/Saved";
import Profile from "../Pages/Profile/Profile";
import UserCart from "../Pages/UserCart/UserCart";
import PrivateRoute from "./PrivateRoute";
import Cookies from "../Extra/Cookies/Cookies";
import Terms from "../Extra/Terms/Terms";
import Privacy from "../Extra/Privacy/Privacy";
import Order from "../Pages/Order/Order";
import DashBoard from "../DashBoard/DashBoard";
import Statistics from "../Admin/Statistics/Statistics";
import AllProduct from "../Admin/AllProduct/AllProduct";
import AllUser from "../Admin/AllUser/AllUser";
import AddProduct from "../Admin/AddProduct/AddProduct";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
       
        {
          path : '/product/:id',
          element : <ProductDetails></ProductDetails>,
        },
        {
          path : '/singup',
          element : <Singup></Singup>
        },
        {
          path : '/login',
          element : <LoginPage></LoginPage>
        },
        {
          path : '/saved',
          element : <PrivateRoute><Saved></Saved></PrivateRoute>
        },
        {
          path : 'profile',
          element : <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path : '/cart',
          element : <PrivateRoute><UserCart></UserCart></PrivateRoute>
        },
        {
          path : '/cookies',
          element : <Cookies></Cookies>
        },
        {
          path : '/terms',
          element : <Terms></Terms>
        },
        {
          path : '/privacy',
          element : <Privacy></Privacy>
        },
        {
          path : '/order',
          element : <PrivateRoute><Order></Order></PrivateRoute>
        }
      ]
    },
    {
      path : 'dashboard',
      element : <DashBoard></DashBoard>,
      children : [
        {
            path : 'statistics',
            element : <Statistics></Statistics>
        },
        {
          path : 'allproduct',
          element : <AllProduct></AllProduct>
        },
        {
          path : 'alluser',
          element : <AllUser></AllUser>
        },
        {
          path : 'addproduct',
          element : <AddProduct></AddProduct>
        }
      
      ]
    }
  ]);