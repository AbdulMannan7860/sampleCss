import React from 'react';
import { ReactTyped } from "react-typed";
import backgroundImage from '../../assets/banner123.png';
import img from '../../assets/work-img.png';

function Banner() {
    const divStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.7)) , url(${backgroundImage})`,
    };

    return (
        <div style={divStyle} className="w-full content-center bg-cover bg-opacity-30 bg-no-repeat bg-center h-[300px] md:h-[90vh]">
            <div className='md:flex md:justify-between md:px-4 md:w-[1240px] mx-auto'>
                <div className='text-left font-bold self-center mx-3 md:mx-1 md:w-2/4'>
                    <div className="md:text-4xl text-lg text-white-100 md:mx-5 mx-3 md:py-3">
                        check out
                    </div>
                    <div className="md:text-7xl text-2xl md:py-2 font-serif text-[#5b2a86]">
                        our work
                    </div>
                    <div className="text-white-100 md:text-4xl text-lg md:mx-5 mx-3 md:py-3">
                        We are here to
                        <ReactTyped
                            className='text-[#5b2a86] md:text-3xl py-1 text-lg md:py-3 mx-2'
                            strings={[
                                "Provide stable and sustainable solutions",
                            ]}
                            typeSpeed={60}
                            backSpeed={50}
                        ></ReactTyped>
                    </div>
                </div>
                <div className='p-2 hidden md:flex w-2/4 h-[70vh]'>
                    <img src={img} className='w-full h-full object-contain self-center' img alt="" />
                </div>
            </div>
        </div>

    );
}

export default Banner;