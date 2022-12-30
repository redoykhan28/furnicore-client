import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../Loader/Loader';
import ProductCard from '../../Products/ProductCard';

const LeatestProduct = () => {

    //use query to fetch products
    const { data: products, isLoading } = useQuery({

        queryKey: ['products'],
        queryFn: () => fetch('https://furnicore-server.vercel.app/allproduct')
            .then(res => res.json())

    })

    //use loader before render
    if (isLoading) {

        return <Loader></Loader>
    }

    return (
        <div data-aos="zoom-in" id='leatest' className='w-11/12 mx-auto'>
            <h1 className='text-3xl text-start font-semibold'>Leatest Products</h1>
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10'>
                {
                    products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default LeatestProduct;