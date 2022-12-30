import React from 'react';
import { FaBackward, FaHome, FaUserCog, FaWallet } from 'react-icons/fa';

const Service = () => {
    return (
        <div data-aos="zoom-in" className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            <div>
                <h1><FaHome className='text-3xl w-32 mx-auto rounded-full' /></h1>
                <h5 className='text-2xl mt-2'>Free Shipping</h5>
                <p>Get free shipping on specific products and recived the product safely</p>
            </div>
            <div>
                <h1><FaWallet className='text-3xl w-32 mx-auto rounded-full' /></h1>
                <h5 className='text-2xl mt-2'>Securety Payments</h5>
                <p>Get Secure payment method with leatest payment system.</p>
            </div>
            <div>
                <h1><FaBackward className='text-3xl w-32 mx-auto rounded-full' /></h1>
                <h5 className='text-2xl mt-2'>14-Day Returns</h5>
                <p>You may return your product within 14 days if you face any issues.</p>
            </div>

            <div>
                <h1><FaUserCog className='text-3xl w-32 mx-auto rounded-full' /></h1>
                <h5 className='text-2xl mt-2'>24/7 Support</h5>
                <p>Get 24/7 Support for any product and services. we are always open</p>
            </div>
        </div>
    );
};

export default Service;