import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authProvider } from '../../../Context/AuthContext';
import Loader from '../../Loader/Loader';

const Customer = () => {

    //use context
    const { user } = useContext(authProvider);

    //use query to fetch user
    const { data: customers, isLoading, } = useQuery({

        queryKey: ['customers'],
        queryFn: () => fetch(`http://localhost:5000/orderlist?email=${user?.email}`)
            .then(res => res.json())

    })

    //use loader before render
    if (isLoading) {

        return <Loader></Loader>
    }


    return (
        <div>
            <h1 className='text-center text-2xl mt-3 font-semibold'>Customer List</h1>
            <p className='mb-10 text-gray-500'>Total Customer:{customers.length}</p>
            <div>
                <div className="overflow-x-auto mt-8">
                    <table className="table p-4 mb-10 w-11/12 mx-auto rounded-2xl shadow-xl">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Customer Name</th>
                                <th>Address</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                customers?.map((customer, i) =>
                                    <tr key={customer._id}>

                                        <td>{i + 1}</td>
                                        <td>

                                            {customer.customer_name}

                                        </td>
                                        <td>{customer.address}</td>



                                        <td>

                                            <Link to={`/customerDetails/${customer._id}`} className='btn btn-xs btn-secondary mx-1'>Details</Link>
                                        </td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Customer;