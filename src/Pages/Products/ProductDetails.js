import React from 'react';
import { FaFacebook, FaHeart, FaLinkedin, FaStar, FaTwitter } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import icon1 from '../../Assets/product details/logo1-removebg-preview.png'
import icon2 from '../../Assets/product details/logo2-removebg-preview.png'
import payment from '../../Assets/product details/payments-2.png'

const ProductDetails = () => {
    const product = useLoaderData()
    // console.log(product)
    //destructure the obeject
    const { category_name, product_name, description, image, price, ratings } = product
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-start items-center my-3'>
                <Link to={'/home'}>Home &gt;</Link>
                <Link to={'/categories'}>Categories &gt;</Link>
                <Link to={`/products/${category_name}`}>Product &gt;</Link>
                <Link>{product_name}</Link>
            </div>
            <div className='my-10'>
                <div className="hero bg-base-100">
                    <div className="hero-content flex-col lg:flex-row gap-20">
                        <div className='lg:w-1/2'>
                            <img src={image} className="rounded-none border border-gray-300" alt="product" />
                        </div>
                        <div className='lg:w-1/2 text-start'>
                            <div className='flex justify-between items-center'>
                                <h4 className="text-2xl font-bold">{product_name}</h4>
                                <div className='flex items-center'>
                                    <h4 className='mx-1 font-semibold'>Ratings:</h4>
                                    <FaStar className='text-yellow-500' />
                                    <span>{ratings}</span>
                                </div>
                            </div>
                            <h4 className="text-xl font-semi-bold">Price: {price}TK</h4>
                            <p className="py-6">{description}</p>
                            <div className='flex items-center justify-between'>
                                <button className='btn btn-dark my-4 text-white w-9/12 lg:w-10/12 rounded-none'>Add to Cart</button>
                                <button className='btn btn-outline w-2/12 lg:w-1/12 rounded-none'><FaHeart /></button>
                            </div>
                            <button className='btn btn-outline w-full rounded-none'>Buy Now</button>

                            <div className='mt-8'>
                                <h1 className='text-gray-500 my-2'>Safe and gureented Checkout</h1>
                                <img src={payment} alt="checkout" />
                            </div>

                            <div className='mt-8'>

                                <div className='flex items-center'>
                                    <img className='w-30' src={icon1} alt="icon" />
                                    <p>Free worldwide shipping on all orders over 20,000TK</p>
                                </div>

                                <div className='flex items-center ml-2'>
                                    <img className='w-30' src={icon2} alt="icon" />
                                    <p>Delivers in: 3-7 Working Days
                                    </p>
                                </div>
                            </div>

                            <div className='my-8'>
                                <p className='my-2 text-gray-500'>Category: {category_name}</p>
                                <p className='my-2 text-gray-500'>Tag: Hot</p>
                                <div className='flex items-center my-2'>
                                    <p className='text-gray-500'>Share:</p>
                                    <div className='flex mx-2'>
                                        <span className='mx-2'><FaFacebook /></span>
                                        <span className='mx-2'><FaTwitter /></span>
                                        <span className='mx-2'><FaLinkedin /></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;