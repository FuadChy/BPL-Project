import React from 'react';
import HeroLogo from '../assets/banner-main.png'
import BannerBG from '../assets/bg-shadow.png'
const Banner = () => {
    return (
        <div className='min-h-[400px] flex justify-center items-center flex-col space-y-3' style={{backgroundImage:`url(${BannerBG})`}}>
            <img src={HeroLogo} alt="" />
            <h1 className='text-4xl font-bold text-black'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h5>Beyond Boundaries Beyond Limits</h5>
            <button className='bg-[#E7FE29] text-black p-3 rounded-2xl hover:bg-sky-200 cursor-pointer'>Claim Free Credit</button>
            
        </div>
    );
};

export default Banner;