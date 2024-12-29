import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {fadeIn} from '../variants'
import FooterComponent from "../components/footer";
function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const base = import.meta.env.VITE_BASE_URL 
  const url =  base +"/api/service";
  const defaultCount = 8 ; 
  
  const [general, setGeneral] = useState({});
  const getGeneralSettings = async()=>{
    const base = import.meta.env.VITE_BASE_URL;
    const url = base + "/api/general"; 
    const response = await axios.get(url); 
    setGeneral(response.data.general);
    return response.data.general; 
  }
  useEffect(()=>{
    // visitorUpdate();
    getGeneralSettings(); 
  },[]); 

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(url);
        setServices(response.data.services);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (loading) return (
    <>
      <section className="bg-white w-screen ">
      <header className=" text-black bg-white p-6 text-center ">
        <div className="container mx-auto">
          <img 
            src="/new_logo.svg" 
            alt="Logo" 
            className="mx-auto mb-4 w-24 h-24"
          />
          <h1 className="text-4xl font-bold">Welcome to Our Services Page</h1>
          <p className="text-lg mt-2">Discover the amazing services we offer to make your life easier.</p>
        </div>
      </header>
      <div className="container max-w-max bg-white mx-auto flex  justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 p-6 bg-white ">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index}
          className="flex flex-col bg-neutral-300 w-72 h-64 animate-pulse rounded-xl p-4 gap-4"
        >
          <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
          <div className="flex flex-col gap-2">
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
          </div>
        </div>
        ))}
      </div>
      </div>
      
      </section>
    </>
  );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <section className="bg-white w-auto h-auto overflow-x-hidden">
      <header className=" text-black bg-white p-6 text-center ">
        <div className="container mx-auto">
          <img 
            src="/new_logo.svg" 
            alt="Logo" 
            className="mx-auto mb-4 w-24 h-24"
          />
          <h1 className="text-4xl font-bold">Welcome to Our Services Page</h1>
          <p className="text-lg mt-2">Discover the amazing services we offer to make your life easier.</p>
        </div>
      </header>
      <div className="container max-w-screen bg-white mx-2  justify-center items-center">
      <div className=" gap-4 p-6 bg-white ">
      {services.map((service, index) => {
  const isEven = index % 2 === 0; // Check if the index is even
  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      key={index}
      className={`container grid mx-auto mb-10 lg:grid-cols-2 items-center gap-8 ${isEven ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-white to-[#E0EDE5] p-8 rounded-xl border border-[#E0EDE5] shadow-md duration-150`}
    >
      {/* Conditional rendering to alternate image and text */}
      {isEven ? (
        <>
          <img
            src={service.image}
            alt={service.name}
            className="object-cover w-full max-h-80 rounded-xl hidden sm:block"
          />
          <div className="w-full py-4 md:py-5 lg:px-8">
            <h5 className="block antialiased font-sans text-2xl leading-relaxed text-inherit mb-10 font-normal sm:font-bold !text-black">
              {service.name}
            </h5>
            <p className="font-normal text-gray-500 list-disc">{service.description}</p>
            <Link to="/services">
              <a
                href=""
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-green-800 border border-green-800 rounded-lg hover:bg-green-800 hover:text-white duration-150 focus:ring-4 focus:ring-gray-100 mt-3"
              >
                Contact us
              </a>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="w-full py-4 md:py-5 lg:px-8">
            <h5 className="block antialiased font-sans text-2xl leading-relaxed text-inherit mb-10 font-semibold sm:font-bold !text-black">
              {service.name}
            </h5>
            <p className="font-normal text-gray-500 list-disc">{service.description}</p>
            <Link to="/services">
              <a
                href=""
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-green-800 border border-green-800 rounded-lg hover:bg-green-800 hover:text-white duration-150 focus:ring-4 focus:ring-gray-100 mt-3"
              >
                Contact us
              </a>
            </Link>
          </div>
          <img
            src={service.image}
            alt={service.name}
            className="object-cover w-full max-h-80 rounded-xl hidden sm:block"
          />
        </>
      )}
    </motion.div>
  );
})}
      </div>
      </div>
      
      </section>
      <FooterComponent address={general.address} phone={general.phone} email={general.email} logo={general.logo} insta={general.instagram} fb={general.facebook}   linkedin={general.linkedin}   />
    
    </>
  );
}

export default ServicesPage;
