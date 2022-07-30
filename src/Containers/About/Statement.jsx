import React from "react";
import { motion } from "framer-motion";
import { img_concerns } from "../../assets";

function Statement() {
  return (
    <div className="py-4 px-8 md:py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="flex flex-col w-full justify-center items-center ">
        <div class="container mx-auto flex md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p class="leading-relaxed text-[#140D60] md:text-3xl">
              At GBWA we envision a world where girls feel confident to pursue
              blockchain careers and are equally represented in the tech
              workforce. With programs designed to empower women through
              blockchain technologies
            </p>
           
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={img_concerns}
            />
          </div>
        </div>
        {/* <h2 className="gradient__text text-2xl lg:text-5xl font-extrabold text-center md:mx-16">
          At GBWA we envision a world where girls feel confident to pursue
          blockchain careers and are equally represented in the tech workforce.
        </h2>
        <p className="text-center text-blue-200 text-sm md:text-base  mt-2">
          We wish to empower women through blockchain technologies
        </p> */}
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        className="gradient__bg py-12 px-8 mt-20">
        <h1 className="text-white text-2xl sm:text-3xl font-bold">
          Our Vision & Approach
        </h1>
        <div className="grid sm:grid-cols-2 gap-4 mt-10">
          <div className="">
            <div className="gradient__bar h-1 w-12 mb-2" />
            <h2 className="font-bold text-white text-lg">Our Vision</h2>
            <p className="mt-6 text-left text-sm md:text-base text-blue-200">
              Inspiring girls to develop interest and conﬁdence in Blockchain
              through hands- on activities, community engagement, and positive
              female role models
            </p>
          </div>
          <div className="">
            <div className="gradient__bar h-1 w-12 mb-2" />
            <h2 className="font-bold text-white text-lg">Our Approach</h2>
            <p className="mt-6 text-left text-sm md:text-base text-blue-200">
              Inspiring girls to develop interest and conﬁdence in Blockchain
              through hands- on activities, community engagement, and positive
              female role models
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Statement;
