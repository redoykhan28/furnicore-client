import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { authProvider } from '../../Context/AuthContext';

const Checkout = () => {
    const product = useLoaderData()
    const { category, product_name, image, price, _id, seller_email } = product

    //use context
    const { user } = useContext(authProvider);

    //set date
    const date = format(new Date(), 'PP')

    //use react hook form
    const { register, handleSubmit, formState: { errors } } = useForm();

    //handlePost
    const handlePost = (data) => {

        console.log(data)

        const currentOrder = {

            customer_name: user?.displayName,
            customer_email: user?.email,
            address: data.address,
            phone: data.phone,
            payment: data.payment,
            product_name: product_name,
            product_category: category,
            image: image,
            total: price,
            seller_email: seller_email,
            order_date: date

        }

        //post order
        fetch('http://localhost:5000/orders', {

            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(currentOrder)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                toast.success('Your order has been Placed')
            })
    }


    return (
        <div>
            <h1 className='mt-4  text-2xl font-semibold'>checkout</h1>
            <div className='flex justify-center items-center mt-3 mb-10'>
                <Link to={'/home'}>Home &gt;</Link>
                <Link to={'/categories'}>Categories &gt;</Link>
                <Link to={`/products/${category}`}>Product &gt;</Link>
                <Link to={`/productDetails/${_id}`}>{product_name} &gt;</Link>
                <Link>Checkouts</Link>
            </div>

            <div className="hero my-4">
                <form onSubmit={handleSubmit(handlePost)}>
                    <div className="hero-content flex-col lg:flex-row-reverse gap-32">
                        <div className='w-2/5'>
                            <div className="card w-96 bg-base-100 border border-gray-400">
                                <div className="card-body text-start">
                                    <h3 className='text-2xl font-semibold mt-3 mb-5'>Product</h3>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center'>
                                            <div className="avatar">
                                                <div className="w-20 rounded">
                                                    <img src={image} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                            <h2 className="text-xl font-semibold">{product_name}</h2>
                                        </div>
                                        <h3 className='text-xl font-semibold'>{price}TK</h3>
                                    </div>
                                    <hr />

                                    <div className='my-4 flex items-center justify-between'>
                                        <h1 className='text-md font-semibold'>Subtotal:</h1>
                                        <h1 className='text-md font-bold'>{price}.00TK</h1>
                                    </div>
                                    <hr />

                                    <div className='my-4 flex items-center justify-between'>
                                        <h1 className='text-md font-semibold'>Shipping:</h1>
                                        <h1 className='text-md font-bold'>Free</h1>
                                    </div>
                                    <hr />

                                    <div className='my-4 flex items-center justify-between'>
                                        <h1 className='text-md font-semibold'>Total:</h1>
                                        <h1 className='text-md font-bold'>{price}.00TK</h1>
                                    </div>
                                    <hr />
                                    <div>
                                        <select {...register('payment', { required: 'This field is required' })} required className="select select-bordered w-full max-w-xs">
                                            <option disabled selected>Payment</option>
                                            <option>Cash on Delivery</option>
                                            <option>Stripe</option>
                                            <option>Bkash</option>
                                        </select>
                                        {errors.payment && <p className='text-red-600'><small>{errors.payment.message}</small></p>}

                                    </div>

                                    <button className="btn mt-4 w-full btn-active bg-warning text-white border-0 rounded-3 ">Place Order</button>
                                </div>
                            </div>
                        </div>
                        <div className='w-3/5'>
                            <div className='mt-4 text-start'>
                                <label htmlFor="username">Username</label>
                                <input type="text" disabled defaultValue={user?.displayName} className="input   input-bordered w-full rounded-sm mt-1" />
                            </div>
                            <div className='mt-4 text-start'>
                                <label htmlFor="email">Email</label>
                                <input type="email" disabled defaultValue={user?.email} className="input   input-bordered w-full rounded-sm mt-1" />
                            </div>

                            <div className='mt-4 text-start'>
                                <label htmlFor="address">Address</label>
                                <input {...register('address', { required: 'This field is required' })} type="text" className="input   input-bordered w-full rounded-sm mt-1" />

                                {errors.address && <p className='text-red-600'><small>{errors.address.message}</small></p>}
                            </div>

                            <div className='mt-4 text-start'>
                                <label htmlFor="phone">Phone</label>
                                <input {...register('phone', { required: 'This field is required' })} type="text" className="input   input-bordered w-full rounded-sm mt-1" />

                                {errors.phone && <p className='text-red-600'><small>{errors.phone.message}</small></p>}
                            </div>

                        </div>
                    </div>
                </form>
            </div>
            <Toaster />
        </div>
    );
};

export default Checkout;