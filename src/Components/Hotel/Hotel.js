import React from 'react';
import { FaBath, FaBed, FaRestroom, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Hotel = ({ hotel }) => {
    const { hotelName, room, details, picture, rating, price, hotelId } = hotel;
    return (
        <div className='outline outline-offset-2 outline-cyan-500 shadow-2xl p-2 w-100% h-full'>
            <img className='w-68 mb-2' src={picture} alt="" />
            <p className='mb-2 text-2xl font-bold'>{hotelName}</p>
            <p className='overflow-auto h-36'><small>{
                details.length > 250 ? details.slice(0, 250) + '...' : details

            }</small></p>

            <div className='flex items-center w-full justify-between'>
                <div className='flex items-center mr-4'>

                    <FaRestroom></FaRestroom>
                    <p className='ml-2'><small>{room.bedRoom}</small></p>
                </div>
                <div className='flex items-center mr-4'>
                    <FaBed></FaBed>
                    <p className='ml-2'><small>{room.bed}</small></p>
                </div>
                <div className='flex items-center mr-4'>
                    <FaBath></FaBath>
                    <p className='ml-2'><small>{room.bath}</small></p>
                </div>
            </div>
            <div className='flex w-full justify-between mt-4'>
                <div>
                    <p className='inline font-bold'>Price: ${price}</p><small>/Night</small>
                </div>
                <div className='flex items-center'>
                    <FaStar className='text-blue-500 text-xl mr-2'></FaStar>
                    <p>{rating}</p>

                </div>
            </div>
            <Link to={`/hotels/${hotelId}`}><button className='btn p-2 w-full '>Booking</button></Link>
        </div>
    );
};

export default Hotel;