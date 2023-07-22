import React from 'react';
import { Link } from 'react-router-dom';

const Place = ({ travel }) => {
    const { img, placeName, placeId, pdetails } = travel;
    return (
        <div className='m-5 mt-20 ' >
            <div className='outline outline-offset-2 outline-cyan-500 shadow-2xl p-2 w-100% h-full '>
                <img className='h-44 w-56 object-cover ml-3 mb-2' src={img} alt="" />
                <p className='font-bold'>{placeName}</p>
                <div className='overflow-auto h-32'>
                    <p><small className='object-cover'>{pdetails}</small></p>
                </div>
                <Link to={`/places/${placeId}`}><button className=' mt-3 w-full'>See Hotel</button></Link>
            </div>
        </div>
    );
};

export default Place;