import { useState, useEffect } from "react";
import axios from "axios";

function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const base = import.meta.env.VITE_BASE_URL 
  const url =  base +"/api/service";
  const defaultCount = 8 ; 
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
      <section className="bg-white w-screen h-screen">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 bg-white ">
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
      <section className="bg-white w-screen h-screen">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 bg-white ">
        {services.map((service) => (
          
          <a key={service.id} href="#" className="block max-w-md  p-6 bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-50 hover:shadow-lg duration-150 hover:scale-105"> 

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center ">{service.name}</h5>
          <p className="font-light text-gray-700 text-sm text-center">{service.description}</p>
          </a>

        ))}
      </div>
      </div>
      
      </section>
    </>
  );
}

export default ServicesPage;
