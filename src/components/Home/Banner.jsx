import React from 'react';
import { ReactTyped } from "react-typed";
import backgroundImage from '../../assets/bannernew.jpg';

function Banner() {
    const divStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0)), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0)) , url(${backgroundImage})`,
    };

    return (
        <div style={divStyle} className="w-full px-2 md:px-[60px] content-center bg-cover bg-no-repeat bg-center h-[300px] md:h-[90vh]">
            <div className='text-left font-semibold max-w-[1240px] mx-auto'>
                <div className="md:text-4xl text-lg py-1 text-white-100 px-3 md:px-12 md:py-3">
                    we build
                </div>
                <div className="md:text-7xl text-2xl py-1 md:py-2 font-serif text-[#662e9b]">
                    websites & much more.
                </div>
                <div className="text-white-100 md:text-4xl text-lg py-1 px-3 md:px-12 md:py-3">
                    We are here to <span> </span>
                    <ReactTyped
                        className='text-[#662e9b] md:text-4xl py-1 text-lg md:py-3'
                        strings={[
                            " get your ideas on track",
                            " solve your problems",
                            " grow your business",
                        ]}
                        typeSpeed={60}
                        backSpeed={50}
                        loop
                    ></ReactTyped>
                </div>
                <div className="text-white-100 md:w-2/4 px-12 md:text-lg py-1 md:py-12 ">
                    <button className='border-2 border-[#662e9b] mt-4 px-4 py-1 rounded-full text-[#662e9b] hover:text-white-100 hover:bg-[#662e9b] duration-300'> <a href="#plan">Get Started</a> </button>
                </div>
            </div>
        </div>

    );
}

export default Banner;