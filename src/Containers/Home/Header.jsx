import React from "react";
import { motion } from "framer-motion";
import ai from "../../assets/ai.png";
import { useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col md:flex-row mt-0 mb-12 mx-0 lg:m-0 py-24 px-8 md:py-24 md:px-24">
      <div className="flex flex-1 flex-col justify-center items-start mr-2">
        <motion.h1
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, type: "tween", when: "beforeChildren" }}
          className="gradient__text font-extrabold text-4xl lg:text-5xl tracking-wide leading-[40px]"
        >
          Empowering Diversity in Africa’s Digital Future
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mt-4 text-blue-100 text-sm md:text-base"
        >
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </motion.p>
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.6, duration: 0.5, type: "tween" }}
          className="flex w-full mx-0 mt-8 mb-4"
        >
          <a
            href={`${pathname}#contact`}
            className="py-2 border-none outline-none px-4 bg-red-600 text-white rounded-md hover:bg-transparent hover:bg-red-500 hover:transition-all duration-200 ease-in-out"
          >
            Contact us
          </a>
        </motion.div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <img src={ai} alt="ai" className="lg:w-100 lg:h-100 w-100" />
      </div>
    </div>
  );
}

export default Header;
