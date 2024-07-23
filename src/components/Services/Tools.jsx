import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { ReactTyped } from 'react-typed';
import bs from '../../assets/logos/bootstrap.png';
import ai from '../../assets/logos/ai.webp';
import tw from '../../assets/logos/tailwind.png';
import np from '../../assets/logos/numpy.png';
import xl from '../../assets/logos/openpyxl.png';
import css from '../../assets/logos/css.png';
import html from '../../assets/logos/html5.png';
import js from '../../assets/logos/javascript.png';
import py from '../../assets/logos/python.png';
import react from '../../assets/logos/react.png';
import figma from '../../assets/logos/figma.png';
import ps from '../../assets/logos/ps.webp';

const toolsData = [
    { src: bs, alt: "Bootstrap logo", label: "Bootstrap" },
    { src: ai, alt: "React logo", label: "React" },
    { src: tw, alt: "Tailwind logo", label: "Tailwind" },
    { src: np, alt: "Numpy logo", label: "Numpy" },
    { src: xl, alt: "Openpyxl logo", label: "Openpyxl" },
    { src: css, alt: "CSS logo", label: "CSS3" },
    { src: js, alt: "Javascript logo", label: "Javascript" },
    { src: html, alt: "HTML5 logo", label: "HTML5" },
    { src: py, alt: "Python logo", label: "Python" },
    { src: react, alt: "Adobe Illustrator logo", label: "Illustrator" },
    { src: figma, alt: "Figma logo", label: "Figma" },
    { src: ps, alt: "Photoshop logo", label: "Photoshop" },
];

const ToolItem = ({ src, alt, label }) => (
    <div className='flex flex-col items-center'>
        <div className='h-[60px] w-[60px]'>
            <img
                src={src}
                alt={alt}
                className='w-full h-full object-contain hover:scale-125 duration-200'
                style={{ aspectRatio: '1 / 1' }}
            />
        </div>
        <p className='text-sm text-gray-500 italic pt-2'>{label}</p>
    </div>
);

const ToolsSection = ({ title, tools }) => (
    <div className='font-semibold p-4 md:text-4xl py-1 text-lg md:py-3 max-w-[1024px] mx-auto'>
        <h1 className='pb-1 text-black'>{title}</h1>
        <div className='border-2 w-2/12 border-[#662e9b] my-1 mx-auto'></div>
        <div className='mx-auto flex flex-wrap justify-center md:justify-around py-10 my-6 md:my-10 gap-4'>
            {tools.map((tool, index) => (
                <ToolItem key={index} src={tool.src} alt={tool.alt} label={tool.label} />
            ))}
        </div>
    </div>
);

const Tools = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    return (
        <div className='px-4 py-10 md:mx-auto text-center' ref={ref}>
            <div
                className='text-white-100 bg-gradient-to-tl from-[#662e9b] to-[#982aff] font-bold md:text-4xl py-1 text-lg md:py-3 md:flex justify-center border'
            >
                <h1 className='text-lg md:text-4xl py-4 md:text-left text-white-100 font-semibold'>
                    Empowering Businesses with a
                </h1>
                {inView && (
                    <ReactTyped
                        strings={["multitude of tools..."]}
                        typeSpeed={50}
                        className='mx-4 pt-4'
                    />
                )}
            </div>
            <ToolsSection
                title="Frameworks"
                tools={toolsData.slice(0, 5)}
            />
            <ToolsSection
                title="Languages"
                tools={toolsData.slice(5, 9)}
            />
            <ToolsSection
                title="Design"
                tools={toolsData.slice(9, 12)}
            />
        </div>
    );
};

export default Tools;