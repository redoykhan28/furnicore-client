import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CatCard from './CatCard';

const Categories = () => {

    //use query
    const { data: category, isLoading } = useQuery({

        queryKey: ['category'],
        queryFn: () => fetch('categories.json')
            .then(res => res.json())

    })

    return (

        <div className='w-11/12 mx-auto'>
            <h1 className='text-3xl text-start font-semibold'>Categories</h1>
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    category?.map(cat => <CatCard key={cat._id} category={cat}></CatCard>)
                }
            </div>
        </div>
    );
};

export default Categories;