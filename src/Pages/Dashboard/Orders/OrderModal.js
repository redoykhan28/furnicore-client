import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

const ProductModal = ({ deleteOrder, setDeleteOrder, message, refetch }) => {

    //handle Delete
    const handleDelete = (order) => {

        fetch(`https://furnicore-server.vercel.app/deleteOrder/${order?._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }

        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount > 0) {

                    console.log(data)
                    toast.success(`${order.product_name} Cancelled successfully`)
                    setDeleteOrder(null)
                    refetch()
                }
            })
    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="shared-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="shared-modal" className="btn btn-sm btn-circle bg-accent hover:bg-black text-white  absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{message}</h3>
                    <div className='my-4 flex justify-center'>

                        <button onClick={() => setDeleteOrder(null)} className='btn btn-accent mx-2 text-white'>Cancel</button>

                        <button onClick={() => handleDelete(deleteOrder)} className='btn btn-error mx-2 text-white'>Cancel</button>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default ProductModal;