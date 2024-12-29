import { Menu, X } from "lucide-react";
import { useState,useEffect } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const navItems = [
  
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  {label: 'Projects', href: '/projects'},
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#footer' },
];
export const HeroSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const images = [
        "/slider-img-01.jpg",
        "/slider-img-02.jpg",
        "/slider-img-03.jpg", // Add your image paths here
        "/slider-img-04.jpg", 
      ];
    const text =[
        "Quick and hassle free real estate solutions tailored to your needs",
        "Your one-stop solution for all your business needs.",
        "Navigate through the complex tax regulations with ease.",
        "Unlock access to the best deals in the market – List your property with us today! ", 
    ];   
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      const [fadeDirection, setFadeDirection] = useState('left');
  
      useEffect(() => {
        const interval = setInterval(() => {
            setFadeDirection('right'); // Start fading out the old image to the right
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFadeDirection('left'); 
            }, 400); // Wait for the old image to fade out before switching
        }, 6000); // Change image every 4 seconds

        // Clear interval when component unmounts
        return () => clearInterval(interval);
    }, []);
     
    
return (
    <><div className="absolute bg-transparent shadow-none w-full z-10 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
                <div className="flex items-center">
                    <img src="/new_logo_bg.png" alt=""className=" md:max-h-24 lg:max-h-56  max-h-20 overflow-y-hidden lg:mt-2 " />
                   
                    {/* <span className="font-medium text-xl text-black">RK Realtors & Consultants</span> */}
                </div>
                <div className="hidden md:flex  min-[1200px]:space-x-16 min-[1025px]:space-x-10 min-[1100px]:space-x-12 space-x-8 pr-4">
                    {navItems.map((item) => (
                        <div key={item.label} className="relative group">
                            <a href={item.href} className="  md:text-black md:hover:text-green-950 lg:text-white lg:hover:text-white text-gray-200 hover:text-white font-medium">
                                {item.label}
                            </a>
                            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
                            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
                        </div>
                    ))}
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-600 hover:text-black focus:outline-none"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </div>
        {isOpen && (
            <div className="md:hidden bg-white shadow-md">
                <div className="px-4 pt-4 pb-2 space-y-2">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="block text-gray-600 hover:text-black font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        )}
    </div>
    
    <section className="bg-white min-[100px]:pt-14  min-[400px]:pt-0">
            <div className=" grid max-w-screen-xl px-1 mx-auto lg:gap-4 xl:gap-0  lg:grid-cols-12 max-h-screen lg:h-screen lg:py-0 md:pt-10 min-[300px]:pt-12">
               
            

                <div className="mr-auto place-self-center lg:col-span-6 p-4 sm:pt-14">
                <div
                        className={`transition-all duration-1000 ease-in-out ${
                            fadeDirection === 'left' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-40'
                        }`}
                    >

                    <motion.p  variants={
                    fadeIn('up', 0.2)
                    } initial="hidden" whileInView={"show"}viewport={{once:true,amount:0.1 }}className="max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl text-black text-semibold ">{text[currentImageIndex]} </motion.p>
                    

                    <motion.p  variants={
                    fadeIn('up', 0.4)
                    } initial="hidden" whileInView={"show"}viewport={{once: true,amount:0.1 }}className="max-w-2xl mb-6 font-normal lg:mb-8 md:text-lg lg:text-xl  text-gray-400">RK Realtors & Tax Consultants provide a comprehensive solution for all your real estate and business consulting needs. </motion.p>
                
                    <motion.a  variants={
                    fadeIn('up', 0.4)
                    } initial="hidden" whileInView={"show"}viewport={{once:true,amount:0.1 }} href="#" className=  {` ${currentImageIndex == 0 ? "block":"hidden"}  inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-green-300 border border-green-300 hover:bg-green-400 duration-150  hover:shadow-lg focus:ring-4 focus:ring-primary-300`}>
                        Get started
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </motion.a>
                    
                </div>
                </div>
                <motion.div  variants={
                    fadeIn('up', 0.2)
                    } initial="hidden" whileInView={"show"}viewport={{once:true,amount:0.1 }}className="hidden lg:mt-0 lg:col-span-6 lg:flex h-full w-auto">
                    <div
                        className={`transition-all duration-1000 ease-in-out ${
                            fadeDirection === 'left' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-40'
                        }`}
                    >
                        <img
                            src={images[currentImageIndex]}
                            alt="mockup"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
        
        
        </>
);
};

