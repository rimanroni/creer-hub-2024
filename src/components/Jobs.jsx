import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getJobs } from '../Database/localStorage';
import Job from './Job';

const Jobs = () => {
    const jobs = useLoaderData();
    const [data, setData] = useState([])
    useEffect(()=>{
          const jobIds = getJobs();
          if(jobs.length>0){
            const applyJob = jobs.filter(job=>jobIds.includes(job.id))
             setData(applyJob)
          }
    },[])
    
    return (
        <div>
          <div className="text-center text-3xl mt-4">Applied Jobs</div>

          <div className='grid px-8 grid-cols-1 md:grid-cols-2'>
            {data.map(job=><Job key={job.id} job={job}/>)}
          </div>
        </div>
    );
};

export default Jobs;