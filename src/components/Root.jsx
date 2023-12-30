import React from 'react';
import { Outlet } from 'react-router-dom';
import Fotter from './Fotter';
import Header from './Header';

const Root = () => {
    return (
        <div className='  mx-auto py-2'>
              <Header/>
             <div className='h-svh'><Outlet/></div>
            <Fotter/>
        </div>
    );
};

export default Root;