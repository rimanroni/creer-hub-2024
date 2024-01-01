import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AiTwotoneDollar } from "react-icons/ai";
import { MdOutlineEventNote, MdEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import {  setJob } from './Database/localStorage';
const JobsDetils = () => {
    const jobs = useLoaderData()
     const jobId = useParams()
    const jobIds = parseInt(jobId.id);
    const job = jobs.find(job=>job.id===jobIds);
    
    const {id , logo, job_title , company_name,remote_or_onsite,location , job_type,salary,job_description,job_responsibility,educational_requirements, experiences,contact_information} = job;
    const handleJobs = () =>{
         setJob(jobIds)
        // alert('apply job done ')
    }
    return (
        <div className=' px-8 mt-12'>
            <h1 className="text-center text-4xl font-bold">Job Details</h1>
            <div className='flex mt-8'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 '>
                <div className='ml-12 md:ml-0 space-y-2'>
                   <h1><span className='font-bold'>Job description :</span> {job_description}</h1>
                   <h1><span className='font-bold'>  Job Responsibility :</span> {job_responsibility}</h1> 
                   <p className='font-bold'>Educational Requirements:</p>
                   <p>{educational_requirements}</p>
                   <p className='font-bold'>Experiences:</p>
                   <p>{experiences}</p>
                </div>
                <div className=' ml-12 '>
                     <div className='p-2  bg-[#a4aff1] px-4 w-[350px]'>
                       <h1 className='text-xl font-bold mb-2'>Job Details : {id}</h1>
                       <hr />
                       <div className='mt-4 space-y-2'>
                       <div className='flex items-center'>
                        <AiTwotoneDollar className='pr-2 text-2xl' />
                        <h2><span className='font-bold'>Salary :</span> {salary} (Per Month)</h2>
                        </div>
                        <div className='flex items-center'>
                        <MdOutlineEventNote className='pr-2 text-2xl' />
                         <h1><span className='font-bold'>Job Title :</span> {job_title}</h1>
                        </div>
                        <h2 className='text-xl font-bold'>Contact Information</h2>
                        <hr />
                        <div className='flex items-center'>
                        <CiPhone  className='pr-2 text-2xl'/>
                        <h1>Phone : {contact_information.phone}</h1>
                        </div>
                        <div className='flex items-center'>
                         <MdEmail className='pr-2 text-2xl'/>
                         <h1>Email : {contact_information.email}</h1>
                        </div>
                        <div className='flex items-center'>
                        <FaLocationDot className='pr-2 text-2xl' />
                        <h1 >Address : {contact_information.address}</h1>
                        </div>
                       </div>
                     </div>
                     <div className='flex mt-4 justify-center  w-[350px]'>
                     <button onClick={handleJobs} className='bg-blue-500 text-white w-full p-2 rounded'>Apply Now</button>
                     </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default JobsDetils;