import { CgMenuRightAlt } from "react-icons/cg";
import { HiX } from "react-icons/hi";

import { useState } from 'react';
import Menu from "./Menu";
import Body from "./Body";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView();
  };
  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block ml-[120px]">
        <nav className="flex justify-between items-center font-poppins-font w-[1200px] mt-[15px]">
          <img src="/images/PMC-logo.png" className="w-[107px] h-[46.05px]" alt="Logo" />
          <ul className="flex items-center gap-12 text-[16px] font-medium">
            <li><a href="#" className="hover:text-green-custom transition">Home</a></li>
            <li><a href="#about-us" className="hover:text-green-custom transition">About Us</a></li>
            <li><a href="#services" className="hover:text-green-custom transition">Services</a></li>
            <li><a href="#" className="hover:text-green-custom transition">Blog</a></li>
            <li>
              <button onClick={() => handleScroll("contact")} 
                className="bg-green-custom w-[98px] h-[36px] text-[16px] font-medium flex items-center justify-center text-white rounded-[4px] border border-green-custom hover:bg-green-700 transition">
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {toggleMenu ? (
          <>
            {/* Mobile Header with Close Button */}
            <nav className="flex justify-between h-[80px] items-center px-[25px] bg-[#0a2c44] text-white w-full max-w-[400px]">
              <img src='/images/PMC logo2.png' className="w-[107px] h-[46.05px]" />
              <button className='block md:hidden' onClick={() => setToggleMenu(!toggleMenu)}>
                <HiX className="h-[32px] w-[32px]" /> 
              </button>
            </nav>
            <Menu /> {/* Mobile Menu Component */}
          </>
        ) : (
          /* Mobile Header with Menu Button */
          <nav className="flex justify-between items-center px-[25px] h-[80px]  w-full max-w-[400px]">
            <img src='/images/PMC-logo.png' className="w-[107px] h-[46.05px] "/>
            <button className='block md:hidden' onClick={() => setToggleMenu(!toggleMenu)}>
              <CgMenuRightAlt className="h-[32px] w-[32px]"/> 
            </button>
          </nav>
        )}
      </div>

      {/* Body Component */}
      <Body/>
    </>
  );
}

export default Header