import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import saskaLogo from '../../assets/saskalogo.png';

function Header() {
    const [toggle, setToggle] = useState(false);
    const location = useLocation();
    const links = [
        {
            id: 1,
            link: 'Home',
            path: '/'
        },
        {
            id: 3,
            link: 'Our Work',
            path: '/portfolio'
        },
        {
            id: 2,
            link: 'Services',
            path: '/services'
        },
        {
            id: 4,
            link: 'Contact',
            path: '/contact'
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    const logoVariant = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };

    const solutionVariant = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };

    return (
        <div className='fixed w-full md:py-2 z-50'>
            <div className='bg-slate-950 shadow max-w-[1400px] px-12 bg-opacity-30 backdrop-blur-sm rounded items-center md:py-2 flex justify-between mx-auto'>
                <motion.div
                    className='flex my-auto'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className='w-[50px] flex' variants={itemVariants}>
                        <motion.div className='w-[30px] mx-auto self-center md:w-[50px] h-[30px] md:h-[50px]' variants={logoVariant} transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror', repeatDelay: 2, yoyo: false }}>
                            <img src={saskaLogo} height={50} width={50} loading='lazy' style={{ aspectRatio: '1/1' }} alt="Logo" className='h-full w-full content-center' />
                        </motion.div>
                    </motion.div>
                    <motion.div className='h-[50px] border-x-2 hidden md:flex border-white-100 mx-2' variants={itemVariants} transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror', repeatDelay: 2, yoyo: false }}></motion.div>
                    <motion.div className='content-center text-sm md:text-3xl text-white-100 font-bold md:flex self-center' variants={solutionVariant} transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror', repeatDelay: 2, yoyo: false }}>
                        SASKA Solutions
                    </motion.div>
                </motion.div>
                {
                    toggle ?
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white-100 text-3xl md:hidden block' />
                        :
                        <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white-100 text-3xl md:hidden block' />
                }
                <ul className='hidden md:flex text-white-100 gap-12'>
                    {links.map((items, i) => (
                        <li key={i}>
                            <Link
                                className={`hover:border-b-4 border-[#b12aff] transition duration-200 ease-in-out ${location.pathname === items.path ? 'border-b-4 border-[#b12aff]' : 'border-transparent'
                                    }`}
                                to={items.path}
                            >
                                {items.link}
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* responsive menu */}
                <ul className={`duration-500 md:hidden w-full fixed h-screen bg-[#662e9b] text-white-100 gap-5 top-[45px] ${toggle ? 'left-[0]' : 'left-[-140%]'}`}>
                    {links.map((items, i) => (
                        <li key={i}>
                            <Link className='flex justify-center text-lg py-5' onClick={() => setToggle(!toggle)} to={items.path}>{items.link}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Header;
