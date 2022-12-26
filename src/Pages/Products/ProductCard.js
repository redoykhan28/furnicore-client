import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";


const ProductCard = ({ product }) => {
    // console.log(product)
    const { product_name, image, price, _id } = product

    return (
        <div className=''>
            <div className="card  w-96 mx-auto bg-base-100 rounded-none">
                <figure><img className='border border-gray-300' src={image} alt="product" /></figure>
                <div className="card-body">

                    <div className="card-actions justify-between">
                        <div className='text-start'>
                            <h4 className='text-md font-semibold'>{product_name}</h4>
                            <h4 className='text-md'>Price: {price}TK</h4>
                        </div>
                        <Link to={`/productDetails/${_id}`}><FaArrowRight /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;