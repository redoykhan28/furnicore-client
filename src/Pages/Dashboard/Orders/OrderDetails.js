import React, { useContext } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { authProvider } from '../../../Context/AuthContext';

const OrderDetails = () => {
    const order = useLoaderData()
    console.log(order)
    const { image, customer_email, customer_name, order_date, payment, phone, product_name, total } = order

    //use context
    const { logout } = useContext(authProvider);

    //confirm order
    const confirmOrder = (order) => {

        fetch(`https://furnicore-server.vercel.app/orderUpdate/${order._id}`, {

            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }


        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {

                    return logout()


                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                toast.success("order Confirmed")
                window.location.reload()
            })

    }

    return (
        <div data-aos="fade-up">
            <div className="hero bg-base-100 lg:mt-20 border border-gray-300 lg:w-9/12 shadow-md mx-auto">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <div className='lg:w-1/2'>
                        <img src={image} className="rounded-none border border-gray-300" alt="product" />
                    </div>
                    <div className='lg:w-1/2 text-start'>


                        <h4 className="text-2xl font-bold mb-4">{product_name}</h4>
                        <h4 className="text-md font-semi-bold">Customer Name: {customer_name}</h4>
                        <h4 className="text-md font-semi-bold">Customer Email: {customer_email}</h4>
                        <h4 className="text-md font-semi-bold">Phone: {phone}</h4>
                        <h4 className="text-md font-semi-bold">Price: {total}TK</h4>
                        <h4 className="text-md font-semi-bold">Payment Method: {payment}TK</h4>
                        <h4 className="text-md font-semi-bold">Order Date: {order_date}</h4>
                        {
                            order?.orderConfirm ?
                                <p className='text-md mt-6 font-bold text-green-600'>Order Confirmed</p>
                                :
                                <button onClick={() => confirmOrder(order)} className='btn mt-6 btn-secondary text-white rounded-none'>Confirm Order</button>
                        }
                    </div>

                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default OrderDetails;