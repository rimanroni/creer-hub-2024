import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAlignJustify ,  FaTimes } from "react-icons/fa";

const Header = () => {
     
    const [navbar, setNavbar] = useState(true)
    const handleNavbar = () =>{
        setNavbar(navbar === !true)
          
    }
    
    return (
        <div className='px-8'>
            <nav className='flex  justify-between  items-center'>
                <div>
                    <NavLink to={'/'}>
                     <h1 className="text-2xl careear">CareerHub</h1>
                     </NavLink>
                </div>
                <div className={`text-xl hidden md:block space-x-4`}>

                   <NavLink to={'/'}>Statistics</NavLink>
                   <NavLink to={'/applied'}>Applied Jobs</NavLink>
                   <NavLink to={'/blog'}>Blog</NavLink>
                </div>
                <div>
                    <button className='md:hidden' onClick={handleNavbar}>
                        {navbar?<FaAlignJustify 
                      className='md:hidden text-2xl' />   :  <FaTimes className='text-2xl '/>  }
                    </button>
                   
                  
                   <NavLink>
                   <button className={`bg-blue-500 hidden md:block rounded-lg p-2 text-white`}>Star Applying</button>
                   </NavLink>
                </div>
            </nav>
           {navbar ? '' :  <div className={`md:hidden `}>
                 <h1 className='text-xl'><NavLink to={'/'}>Statistics</NavLink></h1>
                <h1 className='text-xl'><NavLink to={'/applied'}>Applied Jobs</NavLink></h1>
                <h1 className='text-xl'> <NavLink to={'/blog'}>Blog</NavLink></h1>
                <h1>
                <NavLink>
                   <button className={`bg-blue-500 mt-1  md:block rounded-lg p-2 text-white`}>Star Applying</button>
                </NavLink> 
                </h1>
             </div>}
        </div>
    );
};

export default Header;