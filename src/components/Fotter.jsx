import React from 'react';
import { FaFacebookF , FaTwitter, FaInstagram } from "react-icons/fa";
const Fotter = () => {
    return (
       <div className='bg-black px-20 text-white py-4'>
         <div className='flex flex-col space-y-3 md:flex-row py-4 '>
            <div className='md:w-1/4 md:px-4 space-y-2'>
               <h1 className='text-2xl font-bold'>CareerHub</h1>
               <p>There are many variations of <br /> passages   of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
               <div className='flex    space-x-4 text-blue-500'>
               <FaFacebookF className='bg-white w-[40px] h-[40px] rounded-full p-1'/>
               <FaTwitter className='bg-white w-[40px] h-[40px] rounded-full p-1'></FaTwitter>
               <FaInstagram className='bg-white w-[40px] h-[40px] rounded-full p-1'></FaInstagram>
               </div>
            </div>
            <div className='w-9/12 flex flex-col md:flex-row justify-evenly'>
               <div className='space-y-2'>
                <h1 className='text-xl font-semibold'>Company</h1>
                <p className='hover:underline'> About Us</p>
                <p className='hover:underline'>Work</p>
                <p className='hover:underline'>Latest News</p>
                <p className='hover:underline'>Careers</p>
                </div>
               <div className='space-y-2'>
                <h1 className='text-xl font-semibold'>Product</h1>
                <p className='hover:underline'>Prototype</p>
                <p className='hover:underline'>Plans & Pricing</p>
                <p className='hover:underline'>Customers</p>
                <p className='hover:underline'>Integrations</p>
               </div>
               <div className='space-y-2'>
                <h1 className='text-xl font-semibold'>Support</h1>
                 <p className='hover:underline'>Help Desk</p>
                <p className='hover:underline'>Sales</p>
                <p className='hover:underline'>Become a Partner</p>
                <p className='hover:underline'>Developers</p>
               </div>
               <div className='space-y-2'>
                 <h1 className='text-xl font-semibold'>Contact</h1>
                 <p className='hover:underline'>524 Broadway , NYC</p>
                 <p className='hover:underline'>+1 777 - 978 - 5570</p>
               </div>
            </div>
        </div>
        <h2 className='my-8 px-4'>@2023 CareerHub. All Rights Reserved</h2>
       </div>
    );
};

export default Fotter;