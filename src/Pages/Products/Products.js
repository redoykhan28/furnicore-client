import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    const products = useLoaderData()
    // console.log(product)

    return (
        <div>
            <h1 className='text-3xl font-semibold mt-2'>Products</h1>
            <p className='font-semibold '>Total Items: {products.length}</p>
            <div className='flex justify-center items-center font-normal mb-10'>
                <Link className='' to={'/home'}>Home &gt;</Link>
                <Link to={'/categories'}>Categories &gt;</Link>
                <Link>Products</Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10'>
                {
                    products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;