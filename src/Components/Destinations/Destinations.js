import React from 'react';
import BoraBora from '../../assets/borabora.jpg';
import BoraBora2 from '../../assets/borabora2.jpg';
import Maldives from '../../assets/maldives.jpg';
import Maldives2 from '../../assets/maldives2.jpg';
import Keywest from '../../assets/keywest.jpg';
import { Link } from 'react-router-dom';

const Destinations = () => {
    return (
        <div className='w-full h-full relative'>
            <div className='bg-gray-400 h-full w-full object-cover'>
                <div className='mx-w-[1240px] mx-auto py-16 px-4 text-center'>
                    <h1>All inclusive Resorts</h1>
                    <p>On the Caribbean's Best Beaches </p>
                    <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
                        <img className='h-full w-full object-cover col-span-2 md:col-span-3 row-span-2 ' src={BoraBora} alt="/" />
                        <img className='h-full w-full object-cover' src={BoraBora2} alt="/" />
                        <img className='h-full w-full object-cover' src={Maldives} alt="/" />
                        <img className='h-full w-full object-cover' src={Maldives2} alt="/" />
                        <img className='h-full w-full object-cover' src={Keywest} alt="/" />

                    </div>
                </div>
            </div>
            <div className='w-full absolute my-10'>
                <Link to='/book'><button className='px-5 rounded-md btn mx-auto items-center  flex flex-col  justify-center'>Booking</button></Link>
            </div>

        </div>
    );
};

export default Destinations;