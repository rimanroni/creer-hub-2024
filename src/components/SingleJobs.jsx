import React from 'react';
import { FaLocationArrow ,FaDollarSign} from "react-icons/fa";
import { NavLink , Link} from 'react-router-dom';

const SingleJobs = ({job}) => {
     const {logo, job_title, id ,  company_name,remote_or_onsite, job_type,location,salary} = job
     
    return (
        <div className='px-8 border-2 py-4 space-y-2 '>
            <img src={logo} className='' alt="" />
            <h1 className='font-bold text-xl'>{job_title}</h1>
            <p className='text-[18px] font-bold text-gray-400'>{company_name}</p>
            <div className='mt-2 space-x-2'>
            <span className='ring-2 text-blue-500 px-2 rounded-sm'>{remote_or_onsite}</span>
            <span className='ring-2 px-2 text-blue-500 rounded-sm'>{job_type}</span>
            </div>
            <div className='flex items-center mt-2'>
            <div className='space-x-2'>
                <FaLocationArrow className='inline'/>
             <span className='pr-2'>{location}</span>
             </div>
             <div className='space-x-2'>
             <FaDollarSign className='inline' />
              <span>{salary}</span>
             </div>
            </div>
             
                <Link to={`/job/${id}`}>
                <button className='bg-blue-600 p-2 px-4 hover:bg-blue-400  hover:text-black text-white rounded-md'>View Details</button>
                </Link>              
        </div>
    );
};

export default SingleJobs;