import React from 'react'
import { AiOutlinePhone } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
    }

    return (
        <div className='md:w-max-[1240px] h-auto'>
            <div className='w-max-[1024px] py-10 md:grid justify-around md:grid-cols-2'>
                <div className='col-span-1 md:mx-auto p-4 flex flex-col justify-center'>
                    <p className='md:text-xl font-bold text-black'>Contact us</p>
                    <h3 className='text-xl md:text-3xl p-2 italic font-bold my-2  text-[#662e9b]'>Don't Wait, Create Your Success</h3>
                </div>
                <div className='md:p-4 mx-auto text-center col-span-1 w-3/4'>
                    <p className='text-sm md:text-lg'>We are here to help you.<br /> Feel free to contact us anytime. </p>
                    <button onClick={handleClick} className='text-sm md:text-base border-2 mx-auto md:px-12 md:py-1 border-[#662e9b] font-semibold mt-2 px-3 flex flex-row py-2 rounded-full text-[#662e9b] hover:text-white-100 hover:bg-[#662e9b] duration-300 items-center'>Contact<span className='pl-2 text-base md:text-2xl'><AiOutlinePhone /></span></button>
                </div>
            </div>
        </div >
    )
}

export default Contact