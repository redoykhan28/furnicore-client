
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, } from 'react-router-dom';
import { authProvider } from '../../Context/AuthContext';

const PhoneLogin = () => {

    //use context
    const { phone, recapcha } = useContext(authProvider)

    //use react hook form
    const { register, handleSubmit, formState: { errors } } = useForm();

    //use state for expand container
    const [expand, setExpand] = useState(false)



    //verify otp
    const otpVerify = (data) => {

        console.log(data.phone)
        setExpand(true)
        recapcha()
        let appVerifier = window.recaptchaVerifier
        phone(data?.phone, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                // ...
            }).catch((error) => {
                // Error; SMS not sent
                // ...
            });
    }

    //verify login
    const handleLogin = (data) => {

        console.log(data)

    }

    return (
        <div data-aos="fade-up" className=' w-96 mt-4 mb-10 mx-auto '>
            <div className="card w-96 p-8 bg-base-100 border border-gray-300 ">
                <h4 className='text-center text-2xl mt-4 mb-6'>Enter a Number</h4>
                <form onSubmit={handleSubmit(otpVerify)}>

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



                    {/* <p className='text-red-600 my-3'><small>{error}</small></p> */}
                    <input type="submit" className='btn btn-warning text-white mt-8 w-full rounded-sm' value={'Login'} />

                </form>

            </div>

            {
                expand === true &&
                <div className="card w-96 p-8 mt-6 bg-base-100 border border-gray-300 ">
                    <h4 className='text-center text-2xl mt-4 mb-6'>Login</h4>
                    <form id='sign-in-button' onSubmit={handleSubmit(handleLogin)}>

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
                            <label htmlFor="password">OTP</label>
                            <input  {...register('otp', { required: 'This field is required', minLength: { value: 6, message: 'OTP Should be 6 length long' } },
                            )} type="text" className="input input-bordered w-full rounded-sm mt-1" />

                            {errors.otp && <p className='text-red-600'><small>{errors.otp.message}</small></p>}

                        </div>

                        {/* <p className='text-red-600 my-3'><small>{error}</small></p> */}
                        <input type="submit" className='btn btn-warning text-white mt-8 w-full rounded-sm' value={'Login'} />

                    </form>

                    <p className='my-2'>Need an account? <Link className='text-blue-600' to={'/register'}>Register</Link></p>


                </div>
            }

        </div>
    );
};

export default PhoneLogin;