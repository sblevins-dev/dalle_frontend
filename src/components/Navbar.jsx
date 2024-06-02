import React, { useEffect, useState } from 'react'
import { logo } from '../assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsMenuOpen(false);
        };

        const handleClickOutside = (event) => {
            if (!event.target.closest('.hamburger')) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <header
            className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 
      border-b border-b-[#e6ebf4] relative'>
            <NavLink to="/">
                <img src={logo} alt="logo" className='w-28 object-contain' />
            </NavLink>

            {/* Mobile Hamburger */}
            <div
                onClick={toggleMenu}
                className='sm:hidden cursor-pointer hamburger'
            >
                <svg
                    className=' hover:bg-[#f1f1f1] rounded' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 7L4 7" stroke="#6469ff" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M20 12L4 12" stroke="#6469ff" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M20 17L4 17" stroke="#6469ff" stroke-width="1.5" stroke-linecap="round" />
                </svg>

                {isMenuOpen && (
                    <div className='absolute top-15 right-0 z-30 bg-[#ffffff] flex flex-col mt-4 border-l border-b'>
                        <span className='w-full bg-[#e6e6e6] h-[1px]'></span>
                        <NavLink to="/" className='aria-[current=page]:underline decoration-[#6469ff] underline-offset-4 font-inter font-medium text-[#6469ff] px-5 py-2 rounded-md hover:bg-[#f1f1f1]'>
                            Home
                        </NavLink>
                        <span className='w-full bg-[#e6e6e6] h-[1px]'></span>
                        <NavLink to="/create-post" className='aria-[current=page]:underline decoration-[#6469ff] underline-offset-4 font-inter font-medium text-[#6469ff] px-5 py-2 rounded-md hover:bg-[#f1f1f1]'>
                            Create
                        </NavLink>
                        <span className='w-full bg-[#e6e6e6] h-[1px]'></span>
                        <NavLink to="/chat" className='aria-[current=page]:underline decoration-[#6469ff] underline-offset-4 font-inter font-medium text-[#6469ff] px-5 py-2 rounded-md hover:bg-[#f1f1f1]'>
                            Chat
                        </NavLink>
                    </div>
                )}
            </div>




            {/* Desktop Menu */}
            <div className='hidden sm:block'>
                <NavLink to="/" className='aria-[current=page]:underline decoration-[#6469ff] underline-offset-4 font-inter font-medium text-[#6469ff] px-4 py-2 rounded-md hover:bg-[#f1f1f1]'>
                    Home
                </NavLink>
                <NavLink to="/create-post" className='aria-[current=page]:underline decoration-[#6469ff] underline-offset-4 font-inter font-medium text-[#6469ff] px-4 py-2 rounded-md hover:bg-[#f1f1f1]'>
                    Create
                </NavLink>
                <NavLink to="/chat" className='aria-[current=page]:underline decoration-[#6469ff] underline-offset-4 font-inter font-medium text-[#6469ff] px-4 py-2 rounded-md hover:bg-[#f1f1f1]'>
                    Chat
                </NavLink>
            </div>


        </header>
    )
}

export default Navbar