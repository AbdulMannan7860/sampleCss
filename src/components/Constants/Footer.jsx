import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";


function Footer() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
    }

    return (
        <div className='bg-gradient-to-bl from-[#662e9b] to-[#982aff] p-4'>
            <div className='max-w-[1240px] items-center py-2 flex justify-between mx-auto'>
                <div className='text-white'>
                    <div className='flex text-2xl gap-x-4'>
                        <a target='_blank' href="https://www.facebook.com/SaskaSolution"><span><AiFillFacebook /></span></a>
                        <a target='_blank' href="https://www.instagram.com/saskasolutions/?hl=en"><span><AiFillInstagram /></span></a>
                        <a target='_blank' href="https://www.linkedin.com/company/94852425"><span><AiFillLinkedin /></span></a>
                    </div>
                    &copy; {new Date().getFullYear()} SASKA Solutions. All rights reserved.
                </div>
                <ul className='hidden md:flex text-white gap-5'>
                    <li>
                        <a href='#' className='text-white'>Privacy Policy</a>
                    </li>
                    <li>
                        <a href='#' className='text-white'>Terms of Service</a>
                    </li>
                    <li>
                        <a onClick={handleClick} href='#' className='text-white'>Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;