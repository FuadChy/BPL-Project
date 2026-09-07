import React from 'react';
import Logo from '../assets/logo.png'

const navbar = () => {
    return (
        <>
            <nav >
                <div className='flex justify-between container mx-auto '>
      <img src={Logo} alt=""  className='pt-2'/>
      <ul className='flex gap-4 items-center cursor-pointer'>
        <li>Home</li>
        <li>Fixtures</li>
        <li>Teams</li>
        <li>Schedules</li>
      </ul>
      </div>
    </nav> 
        </>
    );
};

export default navbar;