import React from 'react';

const Loading = () => {
    return (
        <div className='w-10/12 mx-auto flex items-center justify-center '>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    );
};

export default Loading;