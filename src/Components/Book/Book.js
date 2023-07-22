import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Hotel from '../Hotel/Hotel';

const Book = () => {
    const hotels = useLoaderData();

    return (
        <div className='grid grid-cols-3 gap-5 container mx-auto pt-14'>
            {
                hotels.map(hotel => <Hotel key={hotel.hotelId}
                    hotel={hotel}
                >

                </Hotel>)
            }

        </div>
    );
};

export default Book;
