import React from 'react';
import { ReactTyped } from "react-typed";
import backgroundImage from '../../assets/banner123.png';
import img from '../../assets/work-img.png';
import { motion } from 'framer-motion';

function Banner() {
    const divStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.7)) , url(${backgroundImage})`,
    };
    const floatingVariants = {
        animate: {
            y: [0, -10, 10, 0],
            transition: {
                duration: 6,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
            },
        },
    };

    return (
        <div style={divStyle} className="w-full content-center bg-cover bg-opacity-30 bg-no-repeat bg-center h-[300px] md:h-[90vh]">
            <div className='md:flex md:justify-between md:px-4'>
                <div className='text-left font-bold self-center mx-3 md:mx-auto md:w-6/12'>
                    <div className="md:text-4xl text-lg text-white-100 md:mx-5 mx-3 md:py-3">
                        Check Out
                    </div>
                    <div className="md:text-7xl text-2xl md:py-2 font-serif text-[#982aff]">
                        Our Work
                    </div>
                    <div className="text-white-100 md:text-4xl text-lg md:mx-5 mx-3 md:py-3">
                        We are here to
                        <ReactTyped
                            className='text-[#982aff] md:text-4xl py-1 px-2 text-lg md:py-3'
                            strings={[
                                "provide stable and sustainable solutions",
                            ]}
                            typeSpeed={60}
                            backSpeed={50}
                            showCursor={false}
                        ></ReactTyped>
                    </div>
                </div>
                <div className='p-2 hidden md:flex w-4/12 h-[70vh] mx-auto'>
                    <motion.img
                        src={img}
                        className='w-full h-full object-contain self-center'
                        alt="Portfolio Banner Img"
                        loading='lazy'
                        height={70}
                        width={70}
                        style={{ aspectRatio: '5/4' }}
                        variants={floatingVariants}
                        animate="animate" />
                </div>
            </div>
        </div>

    );
}

export default Banner;