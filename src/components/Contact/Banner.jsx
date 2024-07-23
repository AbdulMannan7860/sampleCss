import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from "react-typed";
import backgroundImage from '../../assets/banner2.jpg';
import img from '../../assets/bannerImg.png';

function Banner() {
    const divStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0)), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0)) , url(${backgroundImage})`,
    };
    const floatingVariants = {
        animate: {
            y: [0, 10, -10, 0],
            transition: {
                duration: 6,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
            },
        },
    };

    return (
        <div
            style={divStyle}
            className="w-full h-[300px] md:h-[90vh] bg-cover bg-no-repeat bg-center flex"
            id='contact'>
            <div className="md:px-12 text-left font-bold self-center w-full mx-auto flex md:justify-between">
                <div className='p-2 hidden md:block md:w-4/12'>
                    <motion.img
                        src={img}
                        className='w-full h-full object-contain'
                        alt="Contact Us Img"
                        variants={floatingVariants}
                        animate="animate"
                        style={{ aspectRatio: '1 / 1' }}
                        height={300}
                        width={300}
                        loading="lazy"
                    />
                </div>
                <div className='md:w-8/12 px-4 md:px-10 self-center'>
                    <div className="md:text-7xl text-2xl py-1 md:py-2 font-serif text-[#982aff]">
                        Contact Us Today...!
                    </div>
                    <div className=" text-white-100 md:text-3xl text-lg pl-3 md:pl-6 md:py-4">
                        <ReactTyped
                            className='md:text-4xl py-2 text-lg md:py-4 inherit'
                            strings={[
                                "Need a stunning new website, a redesign, or custom development ?",
                            ]}
                            typeSpeed={30}
                            showCursor={false}
                        ></ReactTyped>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Banner;