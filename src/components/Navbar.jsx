import React, { useEffect, useState } from 'react'
import { darkLogo, lightLogo } from '../assets'
import { NavLink } from 'react-router-dom'

const Navbar = ({ mode }) => {
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
            className={`${mode == "light" ? "bg-white border-b-b-light" : "bg-nav-dark border-b-b-dark text-[#ffffff]"} w-full flex justify-between items-center sm:px-8 px-4 py-4 border-b relative`}>
            <NavLink to="/">
                <img src={mode == 'light' ? lightLogo : darkLogo} alt="logo" className='w-28 object-contain' />
            </NavLink>

            {/* Mobile Hamburger */}
            <div
                onClick={toggleMenu}
                className='sm:hidden cursor-pointer hamburger'
            >
                <svg
                    className={`${mode == 'light' ? 'hover:bg-[#f1f1f1]' : 'hover:bg-main-dark'}  rounded`} width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 7L4 7" stroke="#6469ff" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M20 12L4 12" stroke="#6469ff" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M20 17L4 17" stroke="#6469ff" strokeWidth="1.5" strokeLinecap="round" />
                </svg>

                {isMenuOpen && (
                    <div className={`${mode == 'light' ? 'bg-white' : 'bg-nav-dark border-l border-b-dark'} border-l border-b absolute top-15 right-0 z-30 flex flex-col mt-4`}>
                        <span className={`${mode == 'light' ? 'bg-[#363636]' : 'bg-b-dark'} w-full bg-[#e6e6e6] h-[1px]`}></span>
                        <NavLink to="/" className={`${mode == "light" ? "text-accent hover:bg-[#f1f1f1]" : "text-text-dark hover:bg-main-dark"} aria-[current=page]:underline decoration-[#6469ff] underline-offset-4 font-inter font-medium  px-5 py-2 rounded-md `}>
                            Home
                        </NavLink>
                        <span className={`${mode == 'light' ? 'bg-[#363636]' : 'bg-b-dark'} w-full bg-[#e6e6e6] h-[1px]`}></span>
                        <NavLink to="/create-post" className={`${mode == "light" ? "text-accent hover:bg-[#f1f1f1]" : "text-text-dark hover:bg-main-dark"} aria-[current=page]:underline decoration-[#6469ff] underline-offset-4 font-inter font-medium  px-5 py-2 rounded-md `}>
                            Create
                        </NavLink>
                        <span className={`${mode == 'light' ? 'bg-[#363636]' : 'bg-b-dark'} w-full bg-[#e6e6e6] h-[1px]`}></span>
                        <NavLink to="/chat" className={`${mode == "light" ? "text-accent hover:bg-[#f1f1f1]" : "text-text-dark hover:bg-main-dark"} aria-[current=page]:underline decoration-[#6469ff] underline-offset-4 font-inter font-medium  px-5 py-2 rounded-md `}>
                            Chat
                        </NavLink>
                    </div>
                )}
            </div>




            {/* Desktop Menu */}
            <div className='hidden sm:block'>
                <NavLink to="/" className={`aria-[current=page]:underline decoration-[#6469ff] underline-offset-4 font-inter font-medium px-4 py-2 rounded-md ${mode == "light" ? 'hover:bg-[#f1f1f1] text-accent' : 'hover:bg-main-dark text-text-dark'}`}>
                    Home
                </NavLink>
                <NavLink to="/create-post" className={`aria-[current=page]:underline decoration-[#6469ff] underline-offset-4 font-inter font-medium px-4 py-2 rounded-md ${mode == "light" ? 'hover:bg-[#f1f1f1] text-accent' : 'hover:bg-main-dark text-text-dark'}`}>
                    Create
                </NavLink>
                <NavLink to="/chat" className={`aria-[current=page]:underline decoration-[#6469ff] underline-offset-4 font-inter font-medium px-4 py-2 rounded-md ${mode == "light" ? 'hover:bg-[#f1f1f1] text-accent text-accent' : 'hover:bg-main-dark text-text-dark'}`}>
                    Chat
                </NavLink>
            </div>


        </header>
    )
}

export default Navbar