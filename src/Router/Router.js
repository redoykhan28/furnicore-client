import { createBrowserRouter } from "react-router-dom";
import DashLayout from "../Layouts/DashLayout";
import Main from "../Layouts/Main";
import Blogs from "../Pages/Blog/Blogs";
import Categories from "../Pages/Categories/Categories";
import DashHome from "../Pages/Dashboard/DashHome/DashHome";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import PhoneLogin from "../Pages/Login/PhoneLogin";
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
            }
        ]
    }

])