import React from 'react';

const Home = () => {
    return (
        <div className='flex flex-col   mt-4 md:flex-row px-8 items-center justify-between'>
           <div className='space-y-4'>
             <h1 className='md:text-5xl text-2xl font-semibold'>One Step Closer To Your <br /> 
             <span className='text-blue-500 mt-2'>Dream Job</span></h1>
             <p className='text-gray-400 text-[16px]'>Explore thousands of job opportunities with all the information you need. <br /> Its your future. Come find it. Manage all your job application from start to finish.</p>
             <button className='w-[140px] p-2  text-white rounded-lg bg-blue-500'>Get Started</button>
           </div>
           <div className='flex md:justify-end'>
             <img src="user.png" className='md:w-9/12 ' alt="" />
           </div>
        </div>
    );
};

export default Home;