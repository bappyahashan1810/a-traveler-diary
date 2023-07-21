import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaGithub, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    }
    return (
        <div className='flex w-full justify-between items-center h-20 absolute z-10 text-white'>
            <div>
                <Link><h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>Traveler Dream</h1></Link>
            </div>
            <ul className='hidden md:flex'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/destinations'>Destinations</Link></li>
                <li><Link>Travel</Link></li>
                <li><Link to=''>View</Link></li>
                <li><Link to='/book'>Book</Link></li>

            </ul>
            <div className='hidden md:flex'>
                <BiSearch className='mr-2' size={20}></BiSearch>
                <BsPerson size={20}></BsPerson>
            </div>

            <div onClick={handleNav} className='md:hidden'>
                {nav ? <AiOutlineClose size={20}></AiOutlineClose>
                    :
                    <HiOutlineMenuAlt4 size={20}></HiOutlineMenuAlt4>}
            </div>

            {/* mobile or small device  */}
            <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
                <ul >
                    <h1>Traveler Dream</h1>
                    <li className='border-b'><Link to='/'>Home</Link></li>
                    <Link className='border-b' to='/destinations'>Destinations</Link>
                    <li className='border-b'><Link>Travel</Link></li>
                    <li className='border-b'><Link>View</Link></li>
                    <li className='border-b'><Link>Book</Link></li>
                    <div className='flex flex-col'>
                        <button className='my-6'>Search</button>
                        <button>Account</button>
                    </div>
                    <div className='flex justify-between my-6'>
                        <FaFacebook className='icon'></FaFacebook>
                        <FaGithub className='icon'></FaGithub>
                        <FaTwitter className='icon'></FaTwitter>
                        <FaYoutube className='icon'></FaYoutube>
                        <FaPinterest className='icon'></FaPinterest>
                        <FaInstagram className='icon'></FaInstagram>
                    </div>
                </ul>
            </div>



        </div>
    );
};

export default NavBar;