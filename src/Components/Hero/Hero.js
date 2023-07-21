import React from 'react';
import beachVid from '../../assets/beachVid.mp4';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
    return (
        <div className='w-full h-full relative'>
            <video className='w-full h-full object-cover'
                src={beachVid}
                autoPlay
                loop
                muted

            ></video>
            <div className=' absolute w-full h-full top-0 left-0 bg-gray-900/30'>

            </div>
            <div className='absolute top-0 h-full w-full justify-center flex flex-col text-center text-white'>
                <h2>Jobs fill your pocket, </h2>
                <h1 className='py-4'>but adventures fill your soul.</h1>
                <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
                rounded-md text-black bg-gray-100/90'>
                    <div>
                        <input className='bg-transparent w-[300px] sm:w-[400px] font-[popping] focus:outline-none'
                            type="text" name="" id="" placeholder='Search Destination' />
                    </div>
                    <div>
                        <button><AiOutlineSearch size={20} className='icon' style={{ color: "#ffffff" }}></AiOutlineSearch></button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Hero;