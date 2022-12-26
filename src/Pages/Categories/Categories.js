import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import CatCard from '../Home/Categories/CatCard';
import Loader from '../Loader/Loader';

const Categories = () => {

    //use query to fetch categories
    const { data: cat, isLoading } = useQuery({

        queryKey: ['cat'],
        queryFn: () => fetch('http://localhost:5000/categories')
            .then(res => res.json())

    })

    //use loader before render
    if (isLoading) {

        return <Loader></Loader>
    }

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-2xl font-semibold mt-3'>Product Categories</h1>
            <h4 className='font-semibold'>Total Categories: {cat?.length}</h4>
            <div className='flex justify-center items-center font-normal mt-2 mb-10'>
                <Link className='' to={'/home'}>Home &gt;</Link>
                <Link>Categories</Link>
            </div>

            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    cat?.map(c => <CatCard key={c._id} category={c}></CatCard>)
                }
            </div>
        </div>
    );
};

export default Categories;