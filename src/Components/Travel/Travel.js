import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Place from '../Place/Place';

const Travel = () => {
    const travels = useLoaderData();
    return (
        <div className='grid grid-cols-3 gap-3 container mx-auto '>
            {
                travels.map(travel => <Place key={travel.placeId}
                    travel={travel}
                ></Place>)
            }
        </div>
    );
};

export default Travel;