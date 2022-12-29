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
import PrivateRoute from "./PrivateRoute"

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
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.name}`)
            },
            {
                path: '/productDetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/productDetails/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/productDetails/${params.id}`)
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
                element: <DashHome></DashHome>
            },
            {
                path: '/adminProducts',
                element: <AdminProducts></AdminProducts>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/adminProductDetails/:id',
                element: <AdminProductDetails></AdminProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/productDetails/${params.id}`)
            },
            {
                path: '/orders',
                element: <Orders></Orders>
            },

            {
                path: '/orderDetails/:id',
                element: <OrderDetails></OrderDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/orderDetails/${params.id}`)
            },

            {
                path: '/customers',
                element: <Customer></Customer>
            },
            {
                path: '/customerDetails/:id',
                element: <CustomerDetails></CustomerDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/orderDetails/${params.id}`)
            },
        ]
    }

])