import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { ReactTyped } from "react-typed";
import web from '../../assets/img1.webp';

function Welcome() {
    const typedRef = useRef();
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    return (
        <div className='max-w-[1240px] m-4 p-4 mx-auto md:py-10 md:grid grid-cols-2 bg-white-200 border border-neutral-100 shadow-[0_0_15px_0_rgba(0,0,0,0.2)] rounded'>
            <div className='col-span-1 md:w-[60%] h-full overflow-hidden md:overflow-visible mx-auto'>
                <img
                    src={web}
                    alt="Welcome Image"
                    width="400"
                    height="500"
                    className='object-cover object-center'
                    loading="lazy"
                    style={{ aspectRatio: '5/4' }}
                />
            </div>
            <div className='col-span-1 p-4 flex flex-col justify-center' ref={ref}>
                <div className='text-[#662e9b] font-bold md:text-3xl py-1 text-xl md:py-3 min-h-[2em]' ref={typedRef}>
                    {inView && (
                        <ReactTyped
                            strings={["Welcome to the next level !"]}
                            typeSpeed={60}
                        />
                    )}
                </div>
                <div className='py-4'>
                    <p className='text-sm md:text-base line-clamp-4'>
                        SASKA Solutions is a technology consultancy and solutions provider company, offering expert services in front-end and back-end development, UI and UX design, and automation solutions.
                    </p>
                    <p className='pt-5 text-sm md:text-base line-clamp-3'>
                        Our mission is to empower businesses to succeed in the digital age by providing innovative, effective, and efficient technology solutions.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Welcome;