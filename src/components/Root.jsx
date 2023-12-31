import React from 'react';
import { Outlet } from 'react-router-dom';
import Fotter from './Fotter';
import Header from './Header';
import Category from './Category';
import FeaturedJobs from './FeaturedJobs';

const Root = () => {
    return (
        <div className='  mx-auto py-2'>
              <Header/>
             <div className=' mb-2'><Outlet/></div>
              <Category/>
              <FeaturedJobs/>
            <Fotter/>
        </div>
    );
};

export default Root;