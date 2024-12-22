import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const WhyChooseUs = () => {
  return (
    <section className="bg-[#E0EDE5]"id='about'>
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-4 lg:px-6">
    <motion.div variants={
                    fadeIn('right', 0.1)
                    } initial="hidden" whileInView={"show"}viewport={{once:false,amount:0.01 }} className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
        </motion.div>
        <motion.div variants={
                    fadeIn('left', 0.1)
                    } initial="hidden" whileInView={"show"}viewport={{once:true,amount:0}} className="font-light text-black">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Why Choose us?</h2>
            <p className="mb-4">When you rely on RK Realtors and Tax Consultants, you have a trusted business partner on your side. Having a strong foothold in the industry, we take pride in delivering top-notch solutions. We provide comprehensive business registration, tax consultation, real estate services, and more. Our years of experience help us bring integrity, professionalism, and reliability to our work. Whether you’re an individual, investor, or a business owner, our team is here to support you every step of the way. Explore our diverse range of services to succeed in your business!        </p>
            <p>Your one-stop solution for all your business needs.</p>
            

        </motion.div>
        
    </div>
</section>
  );
};

export default WhyChooseUs;
