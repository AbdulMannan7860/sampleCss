import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import ai from '../../assets/logos/ai.webp';
import css from '../../assets/logos/css.png';
import html5 from '../../assets/logos/html5.png';
import mongo from '../../assets/logos/mongo.webp';
import node from '../../assets/logos/node.png';
import ps from '../../assets/logos/ps.webp';
import reactLogo from '../../assets/logos/react.png';
import tailwind from '../../assets/logos/tailwind.png';
import portfolio1 from '../../assets/PortfolioWeb/Dashboard.jpg';
import portfolio2 from '../../assets/PortfolioBrands/Standee.png';
import portfolio3 from '../../assets/PortfolioLogos/logotemp6.png';
import portfolio4 from '../../assets/PortfolioWeb/web3.png';

const logos = [
    { src: ai, alt: "React logo", label: "React" },
    { src: css, alt: "CSS logo", label: "CSS" },
    { src: html5, alt: "HTML5 logo", label: "HTML5" },
    { src: mongo, alt: "MongoDB logo", label: "MongoDB" },
    { src: node, alt: "Node.js logo", label: "Node JS" },
    { src: ps, alt: "Photoshop logo", label: "Photoshop" },
    { src: reactLogo, alt: "Adobe Illustrator logo", label: "Illustrator" },
    { src: tailwind, alt: "Tailwind CSS logo", label: "Tailwind CSS" },
];

const portfolioItems = [
    { src: portfolio1, alt: "Web Based Software", title: "Web Software", description: "Get fully customized web software. " },
    { src: portfolio2, alt: "Portfolio 2", title: "Standee Designs", description: "Increase brand awareness." },
    { src: portfolio3, alt: "Portfolio 3", title: "Professional Logo", description: "Craft Your Brand." },
    { src: portfolio4, alt: "Portfolio 4", title: "Business WebSite", description: "Web Excellence." },
];

const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 1.2,
            ease: [0.4, 0, 0.2, 1]
        }
    }
};

const LogoItem = React.memo(({ src, alt, label, inView }) => (
    <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInUpVariants}>
        <div className='flex flex-col items-center py-4'>
            <div className='h-[60px] w-[60px]'>
                <img src={src} height={60} width={60} loading="lazy" alt={alt} className='w-full h-full object-contain hover:scale-125 duration-200' />
            </div>
            <span className='text-sm text-white-100 italic font-semibold'>{label}</span>
        </div>
    </motion.div>
));

const PortfolioItem = React.memo(({ src, alt, title, description, inView }) => (
    <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInUpVariants}>
        <div className='flex flex-col items-center p-4'>
            <div className='h-[200px] w-[300px] overflow-hidden rounded-lg shadow-lg'>
                <img src={src} alt={alt} className='w-full h-full object-cover transition-transform duration-300 transform hover:scale-105' loading="lazy" />
            </div>
            <h3 className='text-lg font-semibold text-white mt-4'>{title}</h3>
            <p className='text-sm text-white-100 text-center'>{description}</p>
        </div>
    </motion.div>
));

const Logo = () => {
    const { ref: logoRef, inView: logoInView } = useInView({ triggerOnce: true });
    const { ref: portfolioRef, inView: portfolioInView } = useInView({ triggerOnce: true });

    const memoizedLogos = useMemo(() => logos, []);
    const memoizedPortfolioItems = useMemo(() => portfolioItems, []);

    return (
        <div className="bg-gradient-to-b from-[#662b9e] to-[#982aff] bg-opacity-60 overflow-hidden py-10">
            <div className='max-w-[1024px] text-xl md:text-4xl mx-auto'>
                <div ref={logoRef} className='my-[100px]'>
                    <h1 className='font-bold px-4 md:px-0 py-10 text-center text-white-100'>
                        Crafting <span className='text-white font-bold text-3xl md:text-5xl'>Solutions!</span> Not Just Products, for Your Business
                    </h1>
                    <div className='flex flex-wrap justify-center gap-x-6 md:justify-between p-4'>
                        {memoizedLogos.map((logo, index) => (
                            <LogoItem key={index} src={logo.src} alt={logo.alt} label={logo.label} inView={logoInView} />
                        ))}
                    </div>
                </div>
                <div ref={portfolioRef} className='my-[100px]'>
                    <h2 className='text-2xl md:text-3xl font-semibold px-4 md:px-0 py-6 text-white-100 text-center'>
                        Showcase of Our Expertise
                    </h2>
                    <div className='flex flex-wrap justify-center gap-6 md:justify-between p-4'>
                        {memoizedPortfolioItems.map((item, index) => (
                            <PortfolioItem key={index} src={item.src} alt={item.alt} title={item.title} description={item.description} inView={portfolioInView} />
                        ))}
                    </div>
                    <div className='text-center py-6'>
                        <Link to='/portfolio'>
                            <button className='text-sm md:text-base font-semibold border-2 border-white-100 px-4 py-2 rounded-full text-white-100 hover:text-[#662e9b] hover:bg-white-100 duration-300'>
                                View More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logo;
