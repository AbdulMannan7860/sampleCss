import React, { Suspense, lazy } from 'react';

const FaLaptopCode = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaLaptopCode })));
const FaMobileAlt = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaMobileAlt })));
const FaShoppingCart = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaShoppingCart })));
const FaCode = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaCode })));
const FaCogs = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaCogs })));
const FaPalette = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaPalette })));
const FaPencilRuler = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaPencilRuler })));
const FaPrint = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaPrint })));

const Provide = () => {
  const DesServices = [
    { title: "Web Design UI / UX", details: "Craft visually appealing and user-friendly interfaces for websites.", icon: FaPalette },
    { title: "Application Design", details: "Design intuitive and efficient user interfaces for various applications.", icon: FaPencilRuler },
    { title: "Logo", details: "Create unique and memorable logos that represent your brand identity.", icon: FaPencilRuler },
    { title: "Print Design", details: "Design printed materials such as brochures, flyers, and posters with creative flair.", icon: FaPrint },
  ];

  const DevServices = [
    { title: "Web Development", details: "Build responsive and dynamic websites using modern web technologies.", icon: FaLaptopCode },
    { title: "Mobile App Development", details: "Develop native or cross-platform mobile applications for iOS and Android devices.", icon: FaMobileAlt },
    { title: "E-Commerce", details: "Create robust and secure e-commerce platforms for online businesses.", icon: FaShoppingCart },
    { title: "Software Development", details: "Develop custom software solutions tailored to your specific business needs.", icon: FaCode },
    { title: "Functional Scripting", details: "Automate tasks and streamline workflows with efficient scripting solutions.", icon: FaCode },
    { title: "Maintenance", details: "Provide ongoing support and maintenance to ensure the smooth operation of your digital products.", icon: FaCogs },
  ];

  return (
    <div className='max-w-[1240px] px-4 py-10 mx-auto'>
      <h1 className='text-lg md:text-3xl py-4 text-center text-[#662e9b] font-bold'>Our Services</h1>
      <div className='w-full gap-8 md:flex flex-wrap justify-center'>
        <div className='w-full md:w-5/12 lg:w-4/12 py-3 md:mx-2 mx-auto'>
          <h1 className='text-lg md:text-2xl text-black font-semibold text-center'>Develop :</h1>
          <div className='border-2 w-1/12 border-[#662e9b] my-2 mx-auto'></div>
          <div className='mt-4'>
            {DevServices.map((service, index) => (
              <div key={index} className='bg-white shadow-md rounded-lg p-4 mb-6'>
                <div className='flex items-center mb-2'>
                  <Suspense fallback={<div>Loading...</div>}>
                    <service.icon className='text-[#662e9b] md:text-xl mr-3' />
                  </Suspense>
                  <h2 className='font-semibold md:text-xl text-black'>{service.title}</h2>
                </div>
                <p className='text-xs md:text-sm text-gray-600'>{service.details}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='w-full md:w-5/12 lg:w-4/12 py-3 md:mx-2 mx-auto'>
          <h1 className='text-lg md:text-2xl text-black font-semibold text-center'>Design :</h1>
          <div className='border-2 w-1/12 border-[#662e9b] my-2 mx-auto'></div>
          <div className='mt-4'>
            {DesServices.map((service, index) => (
              <div key={index} className='bg-white shadow-md rounded-lg p-4 mb-6'>
                <div className='flex items-center mb-2'>
                  <Suspense fallback={<div>Loading...</div>}>
                    <service.icon className='text-[#662e9b] md:text-xl mr-3' />
                  </Suspense>
                  <h2 className='font-semibold md:text-xl text-black'>{service.title}</h2>
                </div>
                <p className='text-xs md:text-sm text-gray-600'>{service.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
