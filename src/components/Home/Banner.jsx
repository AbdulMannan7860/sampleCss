import React, { useMemo } from 'react';
import { ReactTyped } from 'react-typed';
import backgroundImage from '../../assets/bannernew.jpg';
import LazyLoad from 'react-lazyload';

const Banner = React.memo(() => {
    const backgroundImageStyle = useMemo(() => ({
        backgroundImage: `url(${backgroundImage})`,
    }), []);

    return (
        <div
            style={backgroundImageStyle}
            className="md:w-full px-2 md:px-[60px] content-center bg-cover bg-no-repeat bg-center h-[300px] md:h-[90vh]"
        >
            <div className='text-left font-semibold md:max-w-[1240px] mx-auto'>
                <div className="md:text-4xl text-lg py-1 text-white-100 px-3 md:px-12 md:py-3">
                    We build
                </div>
                <div className="md:text-7xl text-2xl py-1 md:py-2 font-serif text-[#982aff]">
                    <h1>
                        Websites & much more.
                    </h1>
                </div>
                <div className="text-white-100 md:text-4xl text-lg py-1 px-3 md:px-12 md:py-3">
                    We are here to{' '}
                    <LazyLoad height={200} offset={100}>
                        <ReactTyped
                            className='text-[#982aff] md:text-4xl py-1 text-lg md:py-3'
                            strings={[
                                "get your ideas on track",
                                "solve your problems",
                                "grow your business",
                            ]}
                            typeSpeed={60}
                            backSpeed={50}
                            loop
                            showCursor={false}
                        />
                    </LazyLoad>
                </div>
                <div className="text-white-100 md:w-2/4 px-12 md:text-lg py-1 md:py-12">
                    <button className='border-2 border-white-100 px-2 md:px-2 py-2 md:py-1 mt-4 rounded-full text-white hover:text-white-100 hover:bg-[#662e9b] hover:border-[#662e9b] duration-300'>
                        <a href="#plan" className='px-4 md:px-6 py-4 md:py-1 font-semibold'>Get Started</a>
                    </button>
                </div>
            </div>
        </div>
    );
});

export default Banner;
