import React, { useState } from 'react'
import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

function Plan() {
    const [plan, setPlan] = useState('logo');

    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
    };

    const logoPlanData = [{
        price: "$10",
        title: "LOGO STANDARD",
        design: "",
        concepts: "2 Orignal Logo Concepts",
        dedicated: "",
        revision: "2 Total Revision",
        formats: "Formats: JPG Only",
        time: "48 - 72 Hours Turnaround Time",
        owner: "100% Ownership",
        satisfaction: "100% Satisfaction",
        money: "",
    },
    {
        price: "$75",
        title: "LOGO SPECIAL",
        design: "",
        concepts: "6 Orignal Logo Concepts",
        dedicated: "",
        revision: "5 Revisions",
        formats: "Formats :JPG, PSD, PNG",
        time: "48 - 72 Hours Turnaround Time",
        owner: "100% Ownership",
        satisfaction: "100% Satisfaction",
        money: "",
    },
    {
        price: "$165",
        title: "LOGO PREMIUM",
        design: "Unlimited Orignal Logo Concepts",
        concepts: "Stationery Design (Business Cards, Letterheads, Envelopes)",
        dedicated: "Grayscale Formats",
        revision: "Unlimited Revisions",
        formats: "Formats :JPG, AI, PNG, SVG",
        time: "24 - 48 Hours Turnaround Time",
        owner: "100% Ownership",
        satisfaction: "100% Satisfaction",
        money: "",
    }
    ]

    const webPlanData = [{
        price: "$250",
        title: "BASIC WEBSITE",
        design: "3 Page Website Build",
        concepts: "Contact/Query Form",
        dedicated: "1 Banner Design",
        revision: "Additional Charges for Mobile Responsive",
        formats: "Complete Source Files Included",
        time: "Website Initial Concept in 48 Hours",
        owner: "100% Ownership",
        satisfaction: "Complete Design & Development",
        money: "",
    },
    {
        price: "$450",
        title: "STARTUP WEBSITE",
        design: "5 Page Website",
        concepts: "Contact/Query/Login Form",
        dedicated: "3 Banner Design",
        revision: "Additional Charges for Mobile Responsive",
        formats: "Complete Source Files Included",
        time: "Website Initial Concept in 48 Hours",
        owner: "100% Ownership",
        satisfaction: "Complete Design & Development",
        money: "",
    },
    {
        price: "$999",
        title: "PROFESSIONAL WEBSITE",
        design: "10 Page Website",
        concepts: "Contact/Query/Login Form & Admin Panel Integration",
        dedicated: "5+ Banner Design",
        revision: "Mobile Responsive",
        formats: "Complete Source Files Included",
        time: "Website Initial Concept in 48 Hours",
        owner: "100% Ownership",
        satisfaction: "Complete Design & Development",
        money: "",
    }
    ]
    const brandPlanData = [{
        price: "$50",
        title: "STARTUP PACKAGE",
        design: "2 Bussiness Card Concepts",
        concepts: "2 Letterhead Concepts",
        dedicated: "2 Envelope Concepts",
        revision: "3 Revisions",
        formats: "",
        owner: "",
        satisfaction: "100% Satisfaction",
        money: "",
    },
    {
        price: "$75",
        title: "PROFESSIONAL PACKAGE",
        design: "4 Bussiness Card Concepts",
        concepts: "2 Letterhead Concepts",
        dedicated: "2 Envelope Concepts",
        revision: "5 Revisions",
        formats: "",
        owner: "",
        satisfaction: "100% Satisfaction",
        money: "",
    },
    {
        price: "$100",
        title: "ELITE PACKAGE",
        design: "4 Bussiness Card Concepts",
        concepts: "2 Letterhead Concepts",
        dedicated: "2 Envelope Concepts",
        formats: "Invoice Design",
        owner: "T-Shirt Design",
        revision: "3 Revisions",
        satisfaction: "100% Satisfaction",
        money: "",
    }
    ]

    let planData;
    if (plan === "logo") {
        planData = logoPlanData;
    } else if (plan === "web") {
        planData = webPlanData;
    } else if (plan === "brand") {
        planData = brandPlanData;
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 250 }}
            transition={{ duration: 1 }}
            className='py-10 px-2 bg-gradient-to-t from-[#662e9b] to-[#982aff] text-white-100'
            ref={ref}
            id='plan'
        >
            <div className='max-w-[1240px] mx-auto md:text-lg py-1 text-center md:py-3 flex justify-evenly'>
                <button
                    onClick={() => setPlan('logo')}
                    className={`border-2 border-white-100 mt-4 px-4 py-1 rounded-full font-bold ${plan === 'logo' ? 'bg-white-100 text-[#662e9b] shadow-lg' : 'hover:bg-white-100 hover:text-[#662e9b] hover:shadow-md'
                        }`}
                >
                    Logo
                </button>
                <button
                    onClick={() => setPlan('web')}
                    className={`border-2 border-white-100 mt-4 px-4 py-1 rounded-full font-bold ${plan === 'web' ? 'bg-white-100 text-[#662e9b] shadow-lg' : 'hover:bg-white-100 hover:text-[#662e9b] hover:shadow-md'
                        }`}
                >
                    Web Design
                </button>
                <button
                    onClick={() => setPlan('brand')}
                    className={`border-2 border-white-100 mt-4 px-4 py-1 rounded-full font-bold ${plan === 'brand' ? 'bg-white-100 text-[#662e9b] shadow-lg' : 'hover:bg-white-100 hover:text-[#662e9b] hover:shadow-md'
                        }`}
                >
                    Branding
                </button>
            </div>
            <div className='max-w-[1240px] mx-auto p-4 md:grid grid-cols-3 gap-8'>
                {inView && planData.map((item, index) => (
                    <div key={index} className='flex flex-col sm:mx-2 h-full rounded-xl my-5 md:my-auto px-4 pt-12 pb-2 bg-white-100 shadow-md hover:shadow-lg transform hover:scale-105 transition duration-500'>
                        <span className='text-sm font-semibold text-[#662e9b]'>Starting From</span>
                        <span className='text-4xl md:text-4xl font-bold text-black'>{item.price}</span>
                        <div className='my-4 border-y-2 border-gray-300'>
                            <h2 className='text-base md:text-xl py-2 font-bold text-[#662e9b]'>{item.title}</h2>
                        </div>
                        <div className='flex-grow'>
                            <ul>
                                {Object.keys(item).map((key, index) => {
                                    if (key === 'price' || key === 'title') return null;
                                    return item[key] && (
                                        <li key={index} className='text-sm md:text-sm py-2 text-black font-semibold flex items-center'>
                                            <span className='mr-2'>
                                                <AiOutlineCheckCircle className='text-lg md:text-xl text-[#662e9b]' />
                                            </span>
                                            {item[key]}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className='text-center mt-auto'>
                            <button onClick={handleClick} className='border-2 border-[#662e9b] mt-4 px-4 py-1 rounded-full text-[#662e9b] font-semibold hover:text-white-100 hover:bg-[#662e9b] transition duration-300'>Get Quote</button>
                        </div>
                        <div className='px-4 pt-12 rounded-full text-black'>
                            <p className='md:text-sm text-xs text-center'>* All turnaround times are applicable on working days (Monday to Friday) only.</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default Plan;
