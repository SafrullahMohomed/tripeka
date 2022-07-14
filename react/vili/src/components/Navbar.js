import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'


import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>TRAVEL.</h1>
          <ul className='hidden md:flex text-black cursor-pointer'>
            <li><Link to="Home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="DashBoard" smooth={true} offset={-200} duration={500}>DashBoard</Link></li>
            <li><Link to="Services" smooth={true} offset={-50} duration={500}>Services</Link></li>
            <li><Link to="Testomonials" smooth={true} offset={-50} duration={500}>Testomonials</Link></li>
            <li><Link to="Places" smooth={true} offset={-100} duration={500}>Places</Link></li>
            <li><Link to="ContactUs" smooth={true} offset={-50} duration={500}>ContactUs</Link></li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='border-none bg-transparent text-black mr-4'>
            Sign In
          </button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-slate-50 w-full px-8 cursor-pointer'}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="Home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="DashBoard" smooth={true} offset={-200} duration={500}>DashBoard</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="Services" smooth={true} offset={-50} duration={500}>Services</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="Testomonials" smooth={true} offset={-100} duration={500}>Testomonials</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="Places" smooth={true} offset={-100} duration={500}>Places</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="ContactUs" smooth={true} offset={-50} duration={500}>ContactUs</Link></li>

        <div className='flex flex-col my-4'>
            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
            <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;