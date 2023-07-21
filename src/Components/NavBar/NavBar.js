import React from 'react';
import { Link } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaGithub, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
const NavBar = () => {
    return (
        <div className='flex justify-between items-center h-20'>
            <div>
                <Link><h1>Traveler Dream</h1></Link>
            </div>
            <ul className='hidden md:flex'>
                <li><Link>Home</Link></li>
                <li><Link>Destinations</Link></li>
                <li><Link>Travel</Link></li>
                <li><Link>View</Link></li>
                <li><Link>Book</Link></li>

            </ul>
            <div className='hidden md:flex'>
                <BiSearch size={20}></BiSearch>
                <BsPerson size={20}></BsPerson>
            </div>
            <div className='md:hidden'>
                <HiOutlineMenuAlt4 size={20}></HiOutlineMenuAlt4>
            </div>

            {/* mobile or small device  */}
            <div className='absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col'>
                <ul >
                    <h1>Traveler Dream</h1>
                    <li><Link>Home</Link></li>
                    <li><Link>Destinations</Link></li>
                    <li><Link>Travel</Link></li>
                    <li><Link>View</Link></li>
                    <li><Link>Book</Link></li>
                    <div>
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div>
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