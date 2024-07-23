import React from 'react';
import { ReactTyped } from "react-typed";
import backgroundImage from '../../assets/servicebanner.jpg';

function Banner() {
    const divStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.0)), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.0))  , url(${backgroundImage})`,
    };
    return (
        <div
            style={divStyle}
            className="w-full h-[300px] md:h-[90vh] bg-cover bg-no-repeat bg-center md:bg-center md:flex justify-center">
            <div className="max-w-[1240px] text-left font-bold h-full content-center w-full">
                <div className='mx-3 px-10'>
                    <div className="md:text-4xl w-full text-lg text-white-100 pl-4 md:py-3">
                        <h2>Web & Design</h2>
                    </div>
                    <div className="md:text-7xl text-2xl py-1 md:py-2 font-serif text-[#982aff]">
                        <h1>Experts</h1>
                    </div>
                    <div className="md:text-4xl w-full text-lg  text-white-100 pl-4 md:py-3">
                        <ReactTyped
                            className='md:text-4xl py-1 text-lg md:py-3'
                            strings={[
                                "Professional web designs and development",
                            ]}
                            typeSpeed={60}
                            backSpeed={50}
                            showCursor={false}
                        ></ReactTyped>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Banner;