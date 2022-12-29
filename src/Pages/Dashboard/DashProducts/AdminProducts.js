import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { authProvider } from '../../../Context/AuthContext';
import Loader from '../../Loader/Loader';
import ProductModal from './ProductModal';

const AdminProducts = () => {

    //use context
    const { user } = useContext(authProvider);

    //deleting product
    const [deleteProduct, setDeleteProduct] = useState(null)

    //use query to fetch categories
    const { data: adminProducts, isLoading, refetch } = useQuery({

        queryKey: ['adminProducts'],
        queryFn: () => fetch(`http://localhost:5000/adminProduct?email=${user.email}`)
            .then(res => res.json())

    })

    //use loader before render
    if (isLoading) {

        return <Loader></Loader>
    }



    return (
        <div>
            <h1 className='text-center text-2xl mt-3 font-semibold'>Products List</h1>
            <p className='mb-10 text-gray-500'>Total Products: {adminProducts.length}</p>

            <div>
                <div className="overflow-x-auto mt-8">
                    <table className="table p-4 mb-10 w-11/12 mx-auto rounded-2xl shadow-xl">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                adminProducts?.map((product, i) =>
                                    <tr key={product._id}>

                                        <td>{i + 1}</td>
                                        <td>
                                            <div className='flex items-center'>
                                                <div className="avatar mx-2">
                                                    <div className="w-10 rounded-full">
                                                        <img src={product.image} alt="product" />
                                                    </div>
                                                </div>
                                                {product.product_name}
                                            </div>
                                        </td>
                                        <td>{product.price}TK</td>

                                        <td>
                                            <label onClick={() => setDeleteProduct(product)} htmlFor="shared-modal" className="btn btn-xs bg-error text-white mx-1 cursor-pointer hover:text-red-700 border-0"><FaTrashAlt /></label>
                                        </td>

                                        <td>
                                            <Link to={`/adminProductDetails/${product._id}`} className='btn btn-xs btn-secondary mx-1'>Details</Link>
                                        </td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                {
                    deleteProduct &&
                    <ProductModal refetch={refetch} deleteProduct={deleteProduct} setDeleteProduct={setDeleteProduct} message={'Are you sure you wants to delete?'}></ProductModal>

                }
            </div>
            <Toaster />
        </div>
    );
};

export default AdminProducts;