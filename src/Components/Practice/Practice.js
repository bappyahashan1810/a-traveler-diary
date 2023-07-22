import React from 'react';
import boabora from '../../assets/borabora.jpg'

const Practice = () => {
    return (
        <div className='container mx-auto'>
            <div className='isolate'>
                <img className='w-32 h-32  ' src={boabora} alt="" />
            </div>
            <div className='border border-red-500 container mx-auto'>
                <h1>hello i am bappy</h1>
                <p>hello who are you</p>
            </div>
            <div className='border border-red-500 container mx-auto'>
                <img className='aspect-square' src={boabora} alt="" />
            </div>
            <div className='columns-2 hover:columns-3'>
                <img src={boabora} alt="" />
                <img src={boabora} alt="" />
                <img src={boabora} alt="" />
            </div>


            <div className='border border-red-500 columns-3 '>
                <div>
                    <div className=' border-box border-4 p-4 h-32 w-32 '>
                        <img src={boabora} alt="" />
                        <p>Shundor ban</p>

                    </div>
                    <div className=' border-box border-4 p-4 h-32 w-32'>
                        <img src={boabora} alt="" />
                        <p>Bandarban</p>

                    </div>
                    <div className=' border-box border-4 p-4 h-50 w-32 '>
                        <img src={boabora} alt="" />
                        <p>Shoitan ban</p>
                        <button className=' bg-green-400 p-0'>submit</button>

                    </div>
                </div>

            </div>

            <div className=' items-center '>
                <img className='w-10 h-10 m-2 rounded-full inline' src={boabora} alt="" />
                <p className='inline'>Ahashan</p>
            </div>


            <div className='w-40 h-40 border border-red-500'>
                <img className='object-fill' src={boabora} alt="" />

            </div>
            <div className='overflow-auto h-40 w-80'>
                <div className='flex items-center'>
                    <img className='h-12 w-12 mx-3 rounded-full' src={boabora} alt="" />
                    <div className='gap-0'>
                        <p>Ahashan habib bappy</p>
                        <p><small>Software Engineer</small></p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img className='h-12 w-12 mx-3 rounded-full' src={boabora} alt="" />
                    <div className='gap-0'>
                        <p>Ahashan habib bappy</p>
                        <p><small>Software Engineer</small></p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img className='h-12 w-12 mx-3 rounded-full' src={boabora} alt="" />
                    <div className='gap-0'>
                        <p>Ahashan habib bappy</p>
                        <p><small>Software Engineer</small></p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img className='h-12 w-12 mx-3 rounded-full' src={boabora} alt="" />
                    <div className='gap-0'>
                        <p>Ahashan habib bappy</p>
                        <p><small>Software Engineer</small></p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img className='h-12 w-12 mx-3 rounded-full' src={boabora} alt="" />
                    <div className='gap-0'>
                        <p>Ahashan habib bappy</p>
                        <p><small>Software Engineer</small></p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Practice;