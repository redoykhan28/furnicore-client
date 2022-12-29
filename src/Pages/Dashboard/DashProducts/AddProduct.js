import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { authProvider } from '../../../Context/AuthContext';
import Loader from '../../Loader/Loader';

const AddProduct = () => {

    //use context
    const { user, logout } = useContext(authProvider)

    //use navigate
    // const navigate = useNavigate()

    //set date
    const date = format(new Date(), 'PP')

    //using react hook form
    const { register, handleSubmit, formState: { errors } } = useForm()

    //use query to fetch categories
    const { data: addcategory, isLoading } = useQuery({

        queryKey: ['addcategory'],
        queryFn: () => fetch('http://localhost:5000/categories')
            .then(res => {
                if (res.status === 401 || res.status === 403) {

                    return logout()


                }
                return res.json()
            })

    })

    //post product
    const handlePost = (data) => {



        const currentProduct = {

            product_name: data.productName,
            price: data.price,
            location: data.location,
            ratings: data.ratings,
            image: data.image,
            stock: data.stock,
            seller_name: user?.displayName,
            seller_email: user?.email,
            category: data.category,
            details: data.details,
            published_date: date
        }

        fetch('http://localhost:5000/addproduct', {

            method: "POST",
            headers: {

                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('token')}`

            },
            body: JSON.stringify(currentProduct)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // navigate('/adminProducts')
                toast.success('Product successfully added!')
            })


    }


    //use loader before render
    if (isLoading) {

        return <Loader></Loader>
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handlePost)} className='bg-white w-8/12 mx-auto
             my-10 rounded-xl shadow-xl p-12 gap-10'>
                <h3 className='text-center text-3xl font-bold mt-6 mb-10'>Add Product</h3>
                <div className='grid lg:grid-cols-2'>

                    <div>
                        <input {...register('productName', { required: 'This field is required' })} type="text" placeholder="Product Name" className="input input-bordered border-accent w-11/12 my-4 mx-auto" />
                        {errors.productName && <p className='text-red-600'><small>{errors.productName.message}</small></p>}
                    </div>

                    <div>
                        <input {...register('price', { required: 'This field is required' })} type="text" placeholder=" Price" className="input input-bordered w-11/12 my-4 border-accent mx-auto" />
                        {errors.price && <p className='text-red-600'><small>{errors.price.message}</small></p>}
                    </div>


                    <div>
                        <input {...register('ratings', { required: 'This field is required' })} type="text" placeholder="Ratings" className="input input-bordered w-11/12 my-4 border-accent mx-auto" />
                        {errors.ratings && <p className='text-red-600'><small>{errors.ratings.message}</small></p>}
                    </div>

                    <div>
                        <input {...register('stock', { required: 'This field is required' })} type="text" placeholder="Total stock " className="input input-bordered w-11/12 my-4 border-accent mx-auto" />
                        {errors.year && <p className='text-red-600'><small>{errors.year.message}</small></p>}
                    </div>

                    <div>
                        <input {...register('image', { required: 'This field is required' })} type="text" placeholder="Image link " className="input input-bordered w-11/12 my-4 border-accent mx-auto" />
                        {errors.image && <p className='text-red-600'><small>{errors.image.message}</small></p>}
                    </div>

                    <div>
                        <div>
                            <select {...register('category', { required: 'This field is required' })} required placeholder='Categories' className="select select-bordered w-11/12 my-4 border-accent mx-auto ">
                                <option selected disabled value="">categories</option>
                                {
                                    addcategory?.map(category => <option key={category._id}>{category.name}</option>)
                                }
                            </select>
                        </div>
                        {errors.category && <p className='text-red-600'><small>{errors.category.message}</small></p>}
                    </div>

                    <div>
                        <input type="text" disabled defaultValue={user?.displayName} className="input input-bordered w-11/12 my-4 border-accent mx-auto" />

                    </div>

                    <div>
                        <input type="text" disabled defaultValue={user?.email} className="input input-bordered w-11/12 my-4 border-accent mx-auto" />

                    </div>



                </div>
                <div>
                    <textarea {...register('details', { required: 'This field is required' })} className="textarea mb-6 w-9/12 mx-auto textarea-bordered border-accent" placeholder="Write a details..."></textarea>
                    {errors.details && <p className='text-red-600'><small>{errors.details.message}</small></p>}
                </div>
                <button className="btn w-full btn-active bg-secondary text-white border-0 rounded-3 hover:bg-accent">Add Product</button>
            </form>
            <Toaster />
        </div>
    );
};

export default AddProduct;