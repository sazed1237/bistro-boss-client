import React from 'react';
import chef from '../../../assets/home/chef-service.jpg';

const BistroBoss = () => {
    return (
        <section className='md:w-10/12 mx-auto'>
            <div style={{ backgroundImage: `url(${chef})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '450px' }} className=' flex items-center my-10'>
                <div className='bg-white rounded-md py-7  w-10/12 mx-auto flex items-center '>
                    <div className='md:px-20 px-2 text-center py-8'>
                        <h2 className='text-center mb-3 text-2xl md:text-3xl font-serif'>Bistro Boss</h2>
                        <p className='text-sm md:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aut labore similique facilis mollitia ab asperiores esse corrupti blanditiis iste? Aliquid ad aspernatur possimus hic! Temporibus magnam adipisci eaque ducimus!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BistroBoss;