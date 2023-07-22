import React from 'react';

const Practice2 = () => {
    return (
        <div>
            <div className='flex flex-row'>
                <div className='h-40 w-40 border border-red-500'>helllo </div>
                <div className='h-40 w-40 border border-green-500 grow'>helllo </div>
                <div className='h-40 w-40 border border-yellow-500'>helllo </div>
            </div>

            <div className='grid grid-cols-3 mt-16 gap-2'>
                <div className='h-40 w-40 border border-red-500'>helllo </div>
                <div className='h-40 w-40 border border-green-500 grow'>helllo </div>
                <div className='h-40 w-40 border border-yellow-500'>helllo </div>
                <div className='h-40 w-40 border border-pink-500 col-span-2'>helllo </div>
                <div className='h-40 w-40 border border-orange-500'>helllo </div>
                <div className='h-40 w-40 border border-gray-500'>helllo </div>
                <div className='h-40 w-40 border border-black-500'>helllo </div>
                <div className='h-40 w-40 border border-green-500'>helllo </div>
                <div className='h-40 w-40 border border-sky-500'>helllo </div>
            </div>

        </div>
    );
};

export default Practice2;