import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

const Services = () => {
  const navigate = useNavigate();

  const handleNavigate = ()=>{
    navigate('/services')
  } 


  const services = [
    {
      title: "Start a Business",
      description:
        "Embark on your entrepreneurial journey with RK Realtors & Consultants! With an expert by our side, you can confidently manage your startup. Our “Start a Business” service guides you through everything, from idea conception to incorporation.  Our expert advisors ensure strategic planning while maintaining legal compliance thereby ensuring the long-term success of your venture. ",
      image: "/home-service-04.jpg", // Replace with the actual image path
    },
    {
      title: "Business Formation",
      description:
        "At RK Realtors & Consultants, our experts simplify the entire process for you when it comes to business formation. We provide tailored solutions whether you are setting up a sole proprietorship, corporation, or partnership.  ",
      image: "/home-service-02.jpg", // Replace with the actual image path
    },
    {
      title: "Specialized Entity Registration",
      description:
        "Our team helps you seamlessly navigate the specialized entity registration procedure effortlessly with RK Realtor & Consultants. Our team of experts facilitates registration for societies, trusts, NGOs, and other entities taking care of all regulatory and legal frameworks and requirements. ",
      image: "/home-service-03.jpg", // Replace with the actual image path
    },
  ];

  return (
    <section className="p-8 bg-white" id="services">
        <div className="text-black font-semibold justify-center items-center flex text-3xl ">What We Offer</div>
        <div className=" text-gray-500 font-normal justify-center items-center flex text-light mb-10 text-center ">Empowering you with innovative solutions, tailored to exceed your expectations!</div>
 <div className="max-w-screen-xl  px-4  justify-center items-center mx-auto">
        {
  services.map((service, index) => {
    const isEven = index % 2 === 0; // Check if the index is even
    return (
      <motion.div variants={
        fadeIn('up', 0.2)
        } initial="hidden" whileInView={"show"}viewport={{once:true,amount:0.1 }}    key={index} className={`container  grid mx-auto  mb-10 lg:grid-cols-2 items-center gap-8 ${isEven ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-white to-[#E0EDE5]  p-8 rounded-xl border border-[#E0EDE5] shadow-md duration-150 `} >
        {/* Conditional rendering to alternate image and text */}
        {isEven ? (
          <>
            <img
              src={service.image}
              alt="deliver instant answers"
              className="object-cover w-full max-h-80 rounded-xl hidden sm:block"
            />
            <div className="w-full py-4 md:py-5 lg:px-8">
              <p className="block antialiased font-sans text-2xl leading-relaxed text-inherit mb-10 font-normal sm:font-bold !text-black">
                {service.title}.
              </p>
              
                <p className=" font-normal text-gray-500 list-disc">{service.description}</p>
                <Link to="/services" >
                <a href="" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  text-green-800 border border-green-800 rounded-lg hover:bg-green-800 hover:text-white duration-150 focus:ring-4 focus:ring-gray-100 mt-3">
                       View all services
                    </a></ Link>
                
              
            </div>
          </>
        ) : (
          <>
            <div className="w-full py-4 md:py-5 lg:px-8">
              <p className="block antialiased font-sans text-2xl leading-relaxed text-inherit mb-10 font-semibold  sm:font-bold !text-black">
                {service.title}.
              </p>
              
              <p  className=" font-normal text-gray-500 list-disc">{service.description}</p>
              <Link to="/services" >
                <a href="" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  text-green-800 border border-green-800 rounded-lg hover:bg-green-800 hover:text-white duration-150 focus:ring-4 focus:ring-gray-100 mt-3">
                       View all services
                    </a></ Link>
                
              
            </div>
            <img
              src={service.image}
              alt="deliver instant answers"
              className="object-cover w-full max-h-80 rounded-xl hidden sm:block"
            />
          </>
        )}
        </motion.div>
      
    );
  })
}
</div>

  
</section>
  );
};

export default Services;
