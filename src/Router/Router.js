import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blogs from "../Pages/Blog/Blogs";
import Categories from "../Pages/Categories/Categories";
import Home from "../Pages/Home/Home/Home";
import ProductDetails from "../Pages/Products/ProductDetails";
import Products from "../Pages/Products/Products";

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
            },
        ]
    },

])