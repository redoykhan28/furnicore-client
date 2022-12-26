import React from 'react';
import { FaDyalog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../../../Assets/upcoming collection/banner-1.jpg'
const UpcomingCollection = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2'>
                        <img src={img} alt="img" />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className='flex text-5xl lg:-ml-40 items-center'>
                            <FaDyalog className='hidden lg:block' />
                            <h1 className="text-5xl font-bold">Upcoming Collection</h1>
                        </div>
                        <div className='my-4'>
                            <p className=" text-grey-400 text-start">Explore our leatest upcomming products and get a big ammout of discount. so be ready for purchase our trendy, upcomming products. also get the new home decoration stuff in upcomming winter with a great deal and upto 40% discount and decorate your house as your desire.</p>
                        </div>
                        <div className='text-start font-semibold hover:underline'>
                            <Link className="mt-6">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingCollection;