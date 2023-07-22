import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Hotel from '../Hotel/Hotel';
import Calendar from 'react-calendar';


const Booking = () => {
    const hotel = useLoaderData();
    const [date, setDate] = useState(new Date());
    const onChange = (date) => {
        setDate(date)
    }



    return (
        <div className='grid grid-cols-2 gap-6 p-24 text-black'>
            <div>
                <Hotel
                    key={hotel.hotelId}
                    hotel={hotel}
                ></Hotel>
            </div>
            <div>
                <form >
                    <h1 className="">React Calendar</h1>
                    <div className="text-blue-500">
                        <Calendar onChange={onChange} value={date} />
                    </div>
                    <div className="text-center">
                        Selected date: {date.toDateString()}
                    </div>

                </form>
            </div>

        </div>
    );
};

export default Booking;