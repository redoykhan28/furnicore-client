import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const AdminProductDetails = () => {

    //load api data
    const product = useLoaderData();
    console.log(product)

    //distructure the object
    const { product_name, category, description, image, price, ratings, stock } = product

    return (
        <div data-aos="fade-up" className='w-11/12 mx-auto'>
            <div className="card lg:card-side p-4 lg:mt-20 bg-base-100 shadow-lg">
                <figure><img className='h-96' src={image} alt="Album" /></figure>
                <div className="card-body text-start">
                    <div className='flex justify-between items-center'>
                        <h2 className="text-3xl font-semibold">{product_name}</h2>
                        <div className='flex items-center'>
                            <FaStar className='text-md text-yellow-400'></FaStar>
                            <h2 className="text-md mx-2 font-semibold">{ratings}</h2>
                        </div>
                    </div>
                    <h2 className="text-md font-semibold">Price: {price}TK</h2>
                    <span className='text-gray-500 mb-4'>{description}</span>
                    <h1 className='text-md text-gray-500'>Available: <span className='text-black font-semibold'>YES</span></h1>
                    <h1 className='text-md text-gray-500'>In Stock: <span className='text-black font-semibold'>{stock}</span></h1>
                    <div className="flex justify-between">
                        <h1 className='text-md text-gray-500'>Categories: <span className='text-black font-semibold'>{category}</span></h1>
                    </div>
                    <div className='card-actions justify-end'>
                        <button className='btn btn-secondary'>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProductDetails;