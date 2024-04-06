import React from 'react';

const CoverBanner = ({ coverImage, title, text }) => {
    return (
        <div>
            <div className="hero h-[400px] bg-fixed" style={{ backgroundImage: `url(${coverImage})` }}>
                <div className="hero-content text-center uppercase bg-black bg-opacity-50 md:w-2/3 md:h-1/2 text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 md:text-5xl text-2xl font-bold">{title}</h1>
                        <p className="mb-5">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoverBanner;