import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import squareimg from '../../assets/squareimg.png';
import reactImg from '../../assets/ReactImg.jpg';
import responsiveImg from '../../assets/ResponsiveImg.jpg';
import performanceImg from '../../assets/PerformanceImg.jpg';

const Standout = () => {
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

    return (
        <div className='my-12'>
            <motion.div
                initial={{ opacity: 0, x: -250 }}
                animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : -250 }}
                transition={{ duration: 1.2 }}
                ref={ref1}
                className='max-w-[1240px] bg-white-100 md:flex my-8 md:my-[100px] mx-auto'
            >
                <div className='md:w-7/12 mr-auto md:p-2 p-4 md:pt-10'>
                    <h3 className='text-xl md:text-4xl font-semibold px-4 md:px-12 text-black'>No Reloads</h3>
                    <div className='text-[#662e9b] text-4xl md:text-7xl font-bold font-sans ease-in-out'> Just React!</div>
                    <p className='py-6 px-4 md:px-12 text-lg md:text-xl'>
                        Maintaining continuous interactivity without page reloads? You bet! With React, we keep the web experience
                        alive and dynamic, ensuring users are engaged and delighted every step of the way.
                        <span className='hidden sm:inline'>
                            From seamless transitions to interactive elements, our expertise in React ensures your business shines with modernity and sophistication.
                        </span>
                        <Link to='/services'>
                            <button className='text-sm md:text-base font-semibold border-2 border-[#662e9b] mt-3 md:px-2 px-4 flex flex-row md:py-2 py-3 rounded-full text-[#662e9b] hover:text-white-100 hover:bg-[#662e9b] duration-300 items-center'>
                                Learn More<span className='pl-2 text-base md:text-2xl'><AiFillCaretRight /></span>
                            </button>
                        </Link>
                    </p>
                </div>
                <div className='md:w-4/12 mx-auto p-4 self-center'>
                    <img
                        src={reactImg}
                        alt="React Image"
                        className='object-cover h-[250px]  md h-[250px]:md:h-[400px] md:md:w-[500px]'
                        height="400"
                        width="500"
                        style={{ aspectRatio: '4/5' }}
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 250 }}
                transition={{ duration: 1.2 }}
                ref={ref2}
                className='max-w-[1240px] bg-white-200 md:flex my-8 md:my-[100px] rounded mx-auto'
            >
                <div className='md:w-4/12 mx-auto p-4 self-center'>
                    <img
                        src={responsiveImg}
                        alt="Responsive Design Image"
                        className='object-cover h-[250px] md:h-[400px] md:w-[500px]'
                        height="400"
                        width="500"
                        style={{ aspectRatio: '4/5' }}
                    />
                </div>
                <div className='md:w-7/12 ml-auto md:p-2 p-4 md:pt-10'>
                    <h3 className='text-xl md:text-4xl font-semibold px-4 md:px-12 text-black'>Responsive Design</h3>
                    <div className='text-[#662e9b] text-4xl md:text-7xl font-bold font-sans ease-in-out'> Fluid & Flexible</div>
                    <p className='py-6 px-4 md:px-12 text-lg md:text-xl'>
                        Ensuring your website looks perfect on any device? Absolutely! Our responsive designs adapt seamlessly to any screen size, offering an optimal viewing experience.
                        <span className='hidden sm:inline'>
                            From mobile phones to large desktop screens, our layouts ensure your content is always accessible and aesthetically pleasing.
                        </span>
                        <Link to='/services'>
                            <button className='text-sm md:text-base font-semibold border-2 border-[#662e9b] mt-3 md:px-2 px-4 flex flex-row md:py-2 py-3 rounded-full text-[#662e9b] hover:text-white-100 hover:bg-[#662e9b] duration-300 items-center'>
                                Learn More<span className='pl-2 text-base md:text-2xl'><AiFillCaretRight /></span>
                            </button>
                        </Link>
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -250 }}
                animate={{ opacity: inView3 ? 1 : 0, x: inView3 ? 0 : -250 }}
                transition={{ duration: 1.2 }}
                ref={ref3}
                className='max-w-[1240px] bg-white-100 md:flex my-8 md:my-[100px] rounded mx-auto'
            >
                <div className='md:w-8/12 md:p-2 p-4 md:pt-10'>
                    <h3 className='text-xl md:text-4xl font-semibold px-4 md:px-12 text-black'>Performance Optimization</h3>
                    <div className='text-[#662e9b] text-4xl md:text-7xl font-bold font-sans ease-in-out'> Speed Matters</div>
                    <p className='py-6 px-4 md:px-12 text-lg md:text-xl'>
                        We ensure your website is lightning fast. With our performance optimization techniques, users enjoy a smooth and efficient browsing experience.
                        <span className='hidden sm:inline'>
                            Faster load times, optimized images, and streamlined code all contribute to keeping your audience engaged without any lag.
                        </span>
                        <Link to='/services'>
                            <button className='text-sm md:text-base font-semibold border-2 border-[#662e9b] mt-3 md:px-2 px-4 flex flex-row md:py-2 py-3 rounded-full text-[#662e9b] hover:text-white-100 hover:bg-[#662e9b] duration-300 items-center'>
                                Learn More<span className='pl-2 text-base md:text-2xl'><AiFillCaretRight /></span>
                            </button>
                        </Link>
                    </p>
                </div>
                <div className='md:w-4/12 mx-auto p-4 self-center'>
                    <img
                        src={performanceImg}
                        alt="Performance Optimization Image"
                        className='object-cover h-[200px] md:h-[300px] md:w-[500px]'
                        height="400"
                        width="500"
                        style={{ aspectRatio: '4/5' }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Standout;
