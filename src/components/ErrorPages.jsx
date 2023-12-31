import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const ErrorPages = () => {
    const navigate = useNavigate();
    const handleBack = () =>{
        navigate(-1)
    }
    return (
        <div className='flex justify-center items-center  '>
           <div className='relative'>
           <img className='relative' src="https://atlassianblog.wpengine.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-1560x760.png" alt="" />
           <h2 className="text-xl text-center left-[600px] absolute top-[100px] font-bold   md:text-4xl">Opps Pages 404...</h2>   
           <button onClick={handleBack} className='bg-white shadow-lg  absolute bottom-12 left-[620px] py-2 px-4 w-[200px]'>
            <NavLink>
                Go back
            </NavLink>
           </button>
           </div>

        </div>
    );
};

export default ErrorPages;