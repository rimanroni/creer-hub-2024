import React from 'react';
import { AiTwotoneDollar } from "react-icons/ai";
const Job = ({job}) => {
    const {id , logo, job_title , company_name,remote_or_onsite,location , job_type,salary,job_description,job_responsibility,educational_requirements, experiences,contact_information} = job;
    return (
        <div className='m-2'>
            
            <div className='flex gap-4 '>
                <div className='border-2 py-4 px-3 w-[200px]'>
                    <img src={logo} className='mx-auto' alt="" />
                </div>
                <div>
                    <h1>{job_title}</h1>
                    <h1>{company_name}</h1>
                    <div className='mt-2 space-x-2'>
            <span className='ring-2 text-blue-500 px-2 rounded-sm'>{remote_or_onsite}</span>
            <span className='ring-2 px-2 text-blue-500 rounded-sm'>{job_type}</span>
            </div>
            <div className='flex items-center'>
                        <AiTwotoneDollar className='pr-2 text-2xl' />
                        <h2><span className='font-bold'>Salary :</span> {salary} (Per Month)</h2>
                        </div>

                </div>
            </div>
        </div>
    );
};

export default Job;