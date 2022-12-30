import React from 'react';

const Loader = () => {
    return (

        <div className='my-40'>
            <progress className="progress bg-warning  w-56"></progress>
            <h1 className='text-md font-bold'>Loading...</h1>
        </div>

    );
};

export default Loader;