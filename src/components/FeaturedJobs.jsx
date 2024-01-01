import React, { useEffect, useState } from 'react';
import SingleJobs from './SingleJobs';
import { FaLocationArrow } from "react-icons/fa";
const FeaturedJobs = () => {
    const [data, setData] = useState([])
    const [dataLenght, setDataLenght] = useState(4)
    useEffect(()=>{
        fetch('/jobs.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    
    return (
        <div className='mb-4'>
          <div className='space-y-3'>
          <h1 className="text-center text-4xl">Featured Jobs</h1>
             <p className='text-center mb-4 '>Explore thousands of job opportunities with all the information you need. Its your future</p>
          </div>
            <div className='grid px-9 mt-4 justify-center items-center grid-cols-1 md:grid-cols-2 gap-4 '>
                {data.slice(0, dataLenght).map(job=><SingleJobs key={job.id} job={job}/>)}
            </div>
            <div className={`flex ${dataLenght===6 ? 'hidden' :''} justify-center m-4`}>
            <button onClick={()=>setDataLenght(data.length)} className=' bg-blue-500  px-4 py-2 text-xl font-serif text-white rounded'>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;