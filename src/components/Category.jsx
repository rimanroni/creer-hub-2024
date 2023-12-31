import React, { useEffect, useState } from 'react';

const Category = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('/categories.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    
    return (
        <div className='px-8 mb-4 mt-4 space-y-3 '>
            <h1 className="text-4xl text-center pt-4">Job Category List</h1>
            <p className='text-center '>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center'>
                {data.map(category=><div
                   className='p-8 rounded-md space-y-3 bg-blue-100'
                   key={category.id}>
                         <div>
                            <img src={category.logo} alt="img" />
                        </div>
                       <h2 className="text-2xl font-semibold">{category.category_name} </h2>
                       <h2 className='font-semibold text-gray-500'>{category.availability}</h2>
                        

                </div>)}
            </div>

        </div>
    );
};

export default Category;