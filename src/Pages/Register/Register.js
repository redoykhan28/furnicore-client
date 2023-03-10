import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authProvider } from '../../Context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import { getToken } from '../../Token/Token';


const Register = () => {

    //use location and navigate
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/home'

    const navigate = useNavigate();

    //use context
    const { signUp, updateUser } = useContext(authProvider)

    //state for error
    const [error, setError] = useState(null)


    //use react hook form
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const handlesignup = (data) => {

        console.log(data.phone)

        //handle register
        signUp(data?.email, data?.password)
            .then(res => {

                const user = res.user;
                console.log(user)
                handleProfile(data.username)
                postUser(data.username, data.email, data.phone)
                navigate(from, { replaced: true })
                reset()
                toast.success('Successfully SignUp')
            })
            .catch(err => {
                console.log(err)
                setError('Error! Email already used.');
            })
    }

    // post user
    const postUser = (name, email, phone) => {

        const currentUser = {

            name,
            email,
            phone
        }

        fetch('https://furnicore-server.vercel.app/user', {
            method: "POST",
            headers: {

                "content-type": "application/json"
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                getToken(email)
            })

    }


    //update profile
    const handleProfile = (name) => {

        updateUser(name)
            .then(() => console.log('Profile updated:', name))
            .catch(err => console.log(err))
    }


    return (
        <div data-aos="fade-up" className=' flex justify-center items-center w-96 mt-4 mb-10 mx-auto border border-gray-300'>
            <div className="card w-96 p-8 bg-base-100 ">
                <h4 className='text-center text-2xl mt-4 mb-6'>Signup</h4>
                <form onSubmit={handleSubmit(handlesignup)}>

                    <div className='mt-4 text-start'>
                        <label htmlFor="username">Username</label>
                        <input {...register('username', { required: 'This field is required' })} type="text" className="input   input-bordered w-full rounded-sm mt-1" />

                        {errors.username && <p className='text-red-600'><small>{errors.username.message}</small></p>}

                    </div>

                    <div className='mt-4 text-start'>
                        <label htmlFor="email">Email</label>
                        <input {...register('email', { required: 'This field is required' })} type="email" className="input         input-bordered w-full rounded-sm mt-1" />

                        {errors.email && <p className='text-red-600'><small>{errors.email.message}</small></p>}

                    </div>

                    <div className='mt-4 text-start'>
                        <label htmlFor="phone">Phone</label>
                        <input {...register('phone', {
                            required: 'This field is required', pattern: {

                                value: /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/,
                                message: "Invalid Phone number"
                            }
                        })} type="phone" className="input         input-bordered w-full rounded-sm mt-1" />

                        {errors.phone && <p className='text-red-600'><small>{errors.phone.message}</small></p>}

                    </div>

                    <div className='mt-4 text-start'>
                        <label htmlFor="password">Password</label>
                        <input  {...register('password', { required: 'This field is required', minLength: { value: 6, message: 'Password Should be 6 length long' } },
                        )} type="password" className="input input-bordered w-full rounded-sm mt-1" />

                        {errors.password && <p className='text-red-600'><small>{errors.password.message}</small></p>}

                    </div>

                    <p className='text-red-600 my-3 text-start'><small>{error}</small></p>
                    <input type="submit" className='btn btn-warning text-white mt-8 w-full rounded-sm' value={'Register'} />

                </form>

                <p className='my-2'>Need an account? <Link
                    className='text-blue-600' to={'/Login'}>Login</Link></p>
            </div>
            <Toaster />
        </div>
    );
};

export default Register;