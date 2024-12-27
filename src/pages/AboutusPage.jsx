
import React from "react";
import { Link } from "react-router-dom";
Link
const AboutUs = () => {
  return (
    <>
    <div className="bg-white">

    
    <div className="bg-gradient-to-b from-green-300 to-green-500 text-white h-40">
      <header className="text-center pt-12 pb-1">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-2 text-lg">
          Read more about our vision, mission, success, and more!
        </p>
      </header>
      <main className=" mx-auto px-4 lg:px-20 py-12 bg-white text-gray-600">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">We help on creating Legal briefs</h2>
            <p className="text-lg mb-6">
            RK Realtors & Tax Consultants provide a comprehensive solution for all your real estate and business consulting needs. Our team has a decade of experience in seeking the best real estate deals. Choose us and we will ensure smooth business operations. Want to register your business? our comprehensive business registration and associated services will provide you with the firm ground to navigate through the corporate world.  
            </p>
            <p className="text-lg mb-6">
            When you rely on RK Realtors and Tax Consultants, you have a trusted business partner on your side. Having a strong foothold in the industry, we take pride in delivering top-notch solutions. We provide comprehensive business registration, tax consultation, real estate services, and more. Our years of experience help us bring integrity, professionalism, and reliability to our work. Whether you’re an individual, investor, or a business owner, our team is here to support you every step of the way. Explore our diverse range of services to succeed in your business!        
                </p>

                <Link to="/services" >
                <a href="" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  text-green-800 border border-green-800 rounded-lg hover:bg-green-800 hover:text-white duration-150 focus:ring-4 focus:ring-gray-100 mt-3">
                       View all services
                    </a></ Link>
            
          </div>
          {/* Right Section */}
          <div className="text-center ">
            <img
              src="/home-service-05.jpg"
              alt="Person"
              className="rounded-md mx-auto w-full h-full  md:block   hidden object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Application Working Section */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Take A Vital Look At Our Application Working
          </h2>
          <p className="text-lg">
            By accessing and using the legal briefs platform, you agree to the
            amazing features it has to offer.
          </p>
          
        </section>
      </main>
    </div>
    </div>
    </>
  );
};

export default AboutUs;
