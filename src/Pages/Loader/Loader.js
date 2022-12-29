import React from 'react';

const Loader = () => {
    return (
        <div className='p-10 min-h-screen'>
            <progress className="progress w-56"></progress>
        </div>
    );
};

export default Loader;