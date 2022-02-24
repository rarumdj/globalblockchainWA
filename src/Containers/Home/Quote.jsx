import React from "react";
import { motion } from "framer-motion";

function Quote() {
  return (
    <div className="py-8 px-8 md:py-24 md:px-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        className="flex flex-col w-full justify-center items-center "
      >
        <h2 className="gradient__text text-2xl lg:text-5xl font-extrabold text-center md:mx-16">
          "It's Belief, Not Ability, That Makes Girls Think Blockchain Is Not
          For Them"
        </h2>
        <p className="text-center text-white text-sm md:text-xl font-bold mt-2">
          -Raj Kapoor
        </p>
      </motion.div>
    </div>
  );
}

export default Quote;
