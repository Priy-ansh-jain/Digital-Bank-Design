import { useState } from 'react'

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (

    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="hoobank" className='"w-[164px] h-[42px] hover:py-[10px] cursor-pointer' />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          // this is key we have used because .map stores data in the form of keys.
          <li key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white hover:text-orange-500`}
          >
            {/*  */}
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center '>
        <img src={toggle ? close : menu} alt="menu"
          className='w-28px h-28px object-contain cursor-pointer '
          onClick={() => setToggle((prev) => !prev)}
        // In react you should no or never update the state using previous version of the state
        // chnage the sate using previous version of the same state than u have to create call back function
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
        // if toggle is turned on if it is than its is going to be flex container if not than it is hidden
        >
          <ul className="list-none flex justify-end items-center flex-1 flex-col ">
            {navLinks.map((nav, index) => (
              // this is key we have used because .map stores data in the form of keys.
              <li key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white hover:text-orange-500`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div >

      </div>
    </nav>
  )
}

export default Navbar
