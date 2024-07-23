import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import temp1 from '../../assets/PortfolioWeb/web2.png';
import temp2 from '../../assets/PortfolioWeb/web3.png';
import temp3 from '../../assets/PortfolioWeb/web4.png';
import temp4 from '../../assets/PortfolioWeb/web5.png';
import temp5 from '../../assets/PortfolioWeb/web6.png';
import temp6 from '../../assets/PortfolioWeb/web7.png';
import temp1jpg from '../../assets/PortfolioWeb/web2.jpg';
import temp2jpg from '../../assets/PortfolioWeb/web3.jpg';
import temp3jpg from '../../assets/PortfolioWeb/web4.jpg';
import temp4jpg from '../../assets/PortfolioWeb/web5.jpg';
import temp5jpg from '../../assets/PortfolioWeb/web6.jpg';
import temp6jpg from '../../assets/PortfolioWeb/web7.jpg';

import brand1 from '../../assets/PortfolioBrands/Banners.png';
import brand2 from '../../assets/PortfolioBrands/Standee.png';
import brand3 from '../../assets/PortfolioBrands/card2.png';
import brand4 from '../../assets/PortfolioBrands/card1.png';
import brand5 from '../../assets/PortfolioBrands/brochure1.png';
import brand1jpg from '../../assets/PortfolioBrands/Banners.jpg';
import brand2jpg from '../../assets/PortfolioBrands/Standee.jpg';
import brand3jpg from '../../assets/PortfolioBrands/card2.jpg';
import brand4jpg from '../../assets/PortfolioBrands/card1.jpg';
import brand5jpg from '../../assets/PortfolioBrands/brochure1.jpg';

import logo1 from '../../assets/PortfolioLogos/logotemp1.png';
import logo2 from '../../assets/PortfolioLogos/logotemp2.png';
import logo3 from '../../assets/PortfolioLogos/logotemp3.png';
import logo4 from '../../assets/PortfolioLogos/logotemp4.png';
import logo5 from '../../assets/PortfolioLogos/logotemp5.png';
import logo6 from '../../assets/PortfolioLogos/logotemp6.png';
import logo1jpg from '../../assets/PortfolioLogos/logotemp1.jpg';
import logo2jpg from '../../assets/PortfolioLogos/logotemp2.jpg';
import logo3jpg from '../../assets/PortfolioLogos/logotemp3.jpg';
import logo4jpg from '../../assets/PortfolioLogos/logotemp4.jpg';
import logo5jpg from '../../assets/PortfolioLogos/logotemp5.jpg';
import logo6jpg from '../../assets/PortfolioLogos/logotemp6.jpg';
import { TailSpin } from 'react-loader-spinner';

const Design = () => {
    const word = "Design";
    const letters = word.split("");

    const word1 = "Develop";
    const letters1 = word1.split("");

    const [project, setProject] = useState('logo');
    const [showModal, setShowModal] = useState(false);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    const logoProjects = [
        { urlPng: logo1, urlJpg: logo1jpg, alt: "Logo Template", description: "Unique and creative logo design." },
        { urlPng: logo2, urlJpg: logo2jpg, alt: "Logo Template", description: "Creative logo design for branding." },
        { urlPng: logo3, urlJpg: logo3jpg, alt: "Logo Template", description: "Modern and sleek logo template." },
        { urlPng: logo4, urlJpg: logo4jpg, alt: "Logo Template", description: "Colorful and vibrant logo." },
        { urlPng: logo5, urlJpg: logo5jpg, alt: "Logo Template", description: "Minimalistic logo design." },
        { urlPng: logo6, urlJpg: logo6jpg, alt: "Logo Template", description: "Professional logo for businesses." },
    ];

    const webProjects = [
        { urlPng: temp1, urlJpg: temp1jpg, alt: "Web Template", description: "Responsive website design." },
        { urlPng: temp2, urlJpg: temp2jpg, alt: "Web Template", description: "Landing page design." },
        { urlPng: temp3, urlJpg: temp3jpg, alt: "Web Template", description: "Corporate website template." },
        { urlPng: temp4, urlJpg: temp4jpg, alt: "Web Template", description: "E-commerce web template." },
        { urlPng: temp5, urlJpg: temp5jpg, alt: "Web Template", description: "Blog website layout." },
        { urlPng: temp6, urlJpg: temp6jpg, alt: "Web Template", description: "Portfolio website design." },
    ];

    const brandProjects = [
        { urlPng: brand1, urlJpg: brand1jpg, alt: "AD Banners", description: "Advertisement banners for campaigns." },
        { urlPng: brand2, urlJpg: brand2jpg, alt: "Standee", description: "Promotional standee designs." },
        { urlPng: brand3, urlJpg: brand3jpg, alt: "Business Card", description: "Professional business card design." },
        { urlPng: brand4, urlJpg: brand4jpg, alt: "Business Card", description: "Modern business card template." },
        { urlPng: brand5, urlJpg: brand5jpg, alt: "Brochure", description: "Informative brochure design." },
    ];

    let projectData;
    if (project === "logo") {
        projectData = logoProjects;
    } else if (project === "web") {
        projectData = webProjects;
    } else if (project === "brand") {
        projectData = brandProjects;
    }

    useEffect(() => {
        const preloadImages = (images) => {
            images.forEach((image) => {
                const img = new Image();
                img.src = image.urlPng;
            });
        };
        preloadImages(logoProjects);
        preloadImages(webProjects);
        preloadImages(brandProjects);
    }, []);

    const handleProjectClick = (index) => {
        setSelectedProjectIndex(index);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const imgLoadPromises = projectData.map(project => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = project.urlPng;
                img.onload = () => resolve();
            });
        });

        Promise.all(imgLoadPromises).then(() => setLoading(false));
    }, [projectData]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <TailSpin height={80} width={80} color="#ffffff" />
            </div>
        );
    }

    return (
        <div className='w-full border border-[#662e9b] bg-gradient-to-r from-[#662e9b] to-[#982aff]'>
            <div className="max-w-[1240px] text-center p-0 mx-auto md:my-10 md:flex">
                <div className="my-auto text-white-100 md:flex -rotate-[-90deg] text-6xl md:text-6xl font-serif font-bold col-span-1 w-1/4 md:h-[50px] overflow-visible hidden">
                    {letters1.map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.3, duration: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>
                <div className="text-center p-2 col-span-1 mx-auto w-4/4 md:w-10/12">
                    <h1 className="text-center py-4 md:text-4xl text-xl font-bold text-white-100">
                        Have a look at our work for our customers
                    </h1>
                    <p className="text-center text-white-100 py-4 md:text-lg">
                        We make sure to deliver high quality work for customers that is according to their demands. Catch a glimpse of our portfolio
                    </p>
                </div>
                <div className="my-auto text-white-100 pl-[60px] md:inline -rotate-90 text-6xl md:text-6xl font-serif font-bold col-span-1 w-1/4 md:h-[50px] overflow-visible hidden">
                    {letters.map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.4, duration: 0.3, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto md:text-lg py-1 text-white-100 text-center md:py-3 flex justify-evenly">
                <button
                    onClick={() => setProject('logo')}
                    className={`border-2 border-white-100 mt-4 px-4 py-1 rounded-full font-bold ${project === 'logo' ? 'bg-white-100 text-[#662e9b] shadow-lg' : 'hover:bg-white-100 hover:text-[#662e9b] hover:shadow-md'}`}
                >
                    Logo
                </button>
                <button
                    onClick={() => setProject('web')}
                    className={`border-2 border-white-100 mt-4 px-4 py-1 rounded-full font-bold ${project === 'web' ? 'bg-white-100 text-[#662e9b] shadow-lg' : 'hover:bg-white-100 hover:text-[#662e9b] hover:shadow-md'}`}
                >
                    Web Design
                </button>
                <button
                    onClick={() => setProject('brand')}
                    className={`border-2 border-white-100 mt-4 px-4 py-1 rounded-full font-bold ${project === 'brand' ? 'bg-white-100 text-[#662e9b] shadow-lg' : 'hover:bg-white-100 hover:text-[#662e9b] hover:shadow-md'}`}
                >
                    Branding
                </button>
            </div>
            <div className='w-full grid gap-4 md:grid-cols-3 md:gap-8 mt-8 px-4'>
                {projectData.map((project, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        key={index}
                        className='overflow-hidden rounded-md shadow-lg'>
                        <img
                            src={project.urlJpg}
                            alt={project.alt}
                            className='w-full h-full object-cover object-center cursor-pointer'
                            onClick={() => handleProjectClick(index)}
                            height={100}
                            width={100}
                            style={{ aspectRatio: "7/5" }}
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-sm opacity-0 hover:opacity-100 transition-opacity">
                            {project.description}
                        </div>

                    </motion.div>
                ))}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-4 right-4 bg-[#662e9b] text-white p-2 rounded-full shadow-lg hover:bg-[#982aff] transition-all"
                    title="Back to Top"
                >
                    ↑
                </button>
            </div>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="max-w-screen-lg overflow-hidden">
                        <button className="absolute top-4 right-4 text-white text-2xl focus:outline-none" onClick={closeModal}>
                            &times;
                        </button>
                        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl focus:outline-none" onClick={() => handleProjectClick((selectedProjectIndex - 1 + projectData.length) % projectData.length)}>
                            &#8592;
                        </button>
                        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl focus:outline-none" onClick={() => handleProjectClick((selectedProjectIndex + 1) % projectData.length)}>
                            &#8594;
                        </button>
                        <motion.img
                            src={projectData[selectedProjectIndex].urlPng}
                            alt={projectData[selectedProjectIndex].alt}
                            className="w-full h-full object-contain project-image"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Design;
