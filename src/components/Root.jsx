import React from 'react';
import { Outlet } from 'react-router-dom';
import Fotter from './Fotter';

const Root = () => {
    return (
        <div className='px-16 mx-auto py-2'>
             <h2>hello root js </h2>
             
            <div className='h-svh'><Outlet/></div>
            <Fotter/>
        </div>
    );
};

export default Root;