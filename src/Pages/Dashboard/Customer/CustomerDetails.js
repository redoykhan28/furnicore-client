import React from 'react';
import { useLoaderData } from 'react-router-dom';
import profile from '../../../Assets/user profile/blank-profile-picture-g1cca60b8e_1280.png'

const CustomerDetails = () => {

    const customer = useLoaderData()
    console.log(customer)

    return (
        <div data-aos="fade-up">
            <div className="card w-96 mx-auto lg:mt-20 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={profile} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-start">
                    <h2 className="text-md font-semibold">Name: {customer?.customer_name}</h2>
                    <h2 className="text-md font-semibold">Email: {customer?.customer_email}</h2>
                    <h2 className="text-md font-semibold">Phone: {customer?.phone}</h2>
                    <h2 className="text-md font-semibold">Address: {customer?.address}</h2>


                </div>
            </div>
        </div>
    );
};

export default CustomerDetails;