import { createBrowserRouter } from "react-router-dom";
import DashLayout from "../Layouts/DashLayout";
import Main from "../Layouts/Main";
import Blogs from "../Pages/Blog/Blogs";
import Categories from "../Pages/Categories/Categories";
import Customer from "../Pages/Dashboard/Customer/Customer";
import CustomerDetails from "../Pages/Dashboard/Customer/CustomerDetails";
import DashHome from "../Pages/Dashboard/DashHome/DashHome";
import AddProduct from "../Pages/Dashboard/DashProducts/AddProduct";
import AdminProductDetails from "../Pages/Dashboard/DashProducts/AdminProductDetails";
import AdminProducts from "../Pages/Dashboard/DashProducts/AdminProducts";
import OrderDetails from "../Pages/Dashboard/Orders/OrderDetails";
import Orders from "../Pages/Dashboard/Orders/Orders";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import PhoneLogin from "../Pages/Login/PhoneLogin";
import Checkout from "../Pages/Products/Checkout";
import ProductDetails from "../Pages/Products/ProductDetails";
import Products from "../Pages/Products/Products";
import Register from "../Pages/Register/Register";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute"
import nofoundimg from '../Assets/404-removebg-preview.png'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/products/:name',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`https://furnicore-server.vercel.app/products/${params.name}`)
            },
            {
                path: '/productDetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`https://furnicore-server.vercel.app/productDetails/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://furnicore-server.vercel.app/productDetails/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/phonelogin',
                element: <PhoneLogin></PhoneLogin>
            },
        ]
    },

    {
        path: '/',
        element: <PrivateRoute><DashLayout></DashLayout></PrivateRoute>,
        children: [
            {
                path: '/dashHome',
                element: <AdminRoute><DashHome></DashHome></AdminRoute>
            },
            {
                path: '/adminProducts',
                element: <AdminRoute><AdminProducts></AdminProducts></AdminRoute>
            },
            {
                path: '/addProduct',
                element: <AdminRoute><AddProduct></AddProduct></AdminRoute>
            },
            {
                path: '/adminProductDetails/:id',
                element: <AdminRoute> <AdminProductDetails></AdminProductDetails></AdminRoute>,
                loader: ({ params }) => fetch(`https://furnicore-server.vercel.app/productDetails/${params.id}`, {

                    headers: {
                        authorization: `bearer ${localStorage.getItem('token')}`

                    }

                })
            },
            {
                path: '/orders',
                element: <AdminRoute><Orders></Orders></AdminRoute>
            },

            {
                path: '/orderDetails/:id',
                element: <AdminRoute><OrderDetails></OrderDetails></AdminRoute>,
                loader: ({ params }) => fetch(`https://furnicore-server.vercel.app/orderDetails/${params.id}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('token')}`
                    }
                })
            },

            {
                path: '/customers',
                element: <AdminRoute><Customer></Customer></AdminRoute>
            },
            {
                path: '/customerDetails/:id',
                element: <AdminRoute><CustomerDetails></CustomerDetails></AdminRoute>,
                loader: ({ params }) => fetch(`https://furnicore-server.vercel.app/orderDetails/${params.id}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('token')}`
                    }
                })
            },
        ]
    },
    {
        path: '*', element: <div className=' text-center'>
            <h1 className='mt-10 text-xl'>
                This page is not available.</h1>
            <p className='text-gray-500 text-md'>Sorry! 404. The page you are looking for is not available</p>
            <img className=' w-25 mx-auto' src={nofoundimg} alt="" />
        </div>

    }

])