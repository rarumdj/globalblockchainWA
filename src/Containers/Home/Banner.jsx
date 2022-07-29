import React from "react";
import { motion } from "framer-motion";

function Banner() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      className="gradient__bg p-8 mb-16 rounded-lg mx-8 md:mx-24 flex flex-col md:flex-row justify-between items-center">
      <div className="space-y-4">
        <h1 className="text-white text-lg md:text-3xl font-bold">
          Send us a whatsapp message today!
        </h1>
        <p className="text-white text-xs md:text-sm">
          Wish to get into the blockchain world? We're eager to hear from you.
        </p>
        <div class="flex w-full md:justify-start justify-center items-end">
          <div class="relative mr-4 lg:w-10/12 w-2/4">
            <input
              type="text"
              id="hero-field"
              name="hero-field"
              placeholder="Send us a whatsapp message today!"
              class="w-full  bg-[#042c54] bg-opacity-50 rounded-3xl border border-white focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-white py-2 pl-3 pr-[9rem] leading-8 transition-colors duration-200 ease-in-out"
            />
            <div className="absolute right-0 top-0 mt-[1px] p-[2px]">
              <button class="rounded-3xl min-w-[9rem] inline-flex justify-center text-[#042c54] bg-white border-0 py-2.5 px-6 focus:outline-none text-md">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center md:m-0 md:ml-8 mx-0 mt-8 mb-0">
        <a
          href="/contact"
          className="px-8 py-3 bg-black text-white outline-none rounded-full">
          whatsapp
        </a>
      </div>
    </motion.div>
  );
}

export default Banner;
