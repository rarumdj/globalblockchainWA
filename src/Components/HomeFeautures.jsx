import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function HomeFeatures({ title, list, image, link, cName, idn, position }) {
  const navigate = useNavigate();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      className="flex flex-col-reverse md:mb-24 mb-8 lg:flex-row w-full h-full"
      id={idn}>
      <div
        className={`container mx-auto flex pb-2 md:flex-row md:order-last items-center ${
          position === "left" ? "flex-col" : "flex-col-reverse"
        }  ${cName}`}>
        {position === "left" ? (
          <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
              <img
                className="object-cover object-center"
                alt="hero"
                src={image}
              />
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  mb-16 md:mb-0 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="gradient__text leading-1 text-2xl sm:text-4xl font-bold mb-6">
                {title}
              </h1>
              <ul className="mb-8 leading-relaxed lg:text-base text-sm space-y-2">
                {list.map((lists, i) => (
                  <li
                    key={i}
                    className="flex flex-nowrap items-center w-full p-4 bg-white rounded-md shadow-lg shadow-gray-200/50">
                    <span>
                      <div className="h-2.5 w-2.5 mr-3 rounded-full bg-[#042c54]" />
                    </span>
                    {lists}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <button
                  onClick={() => navigate(link)}
                  className="bg-red-600 inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded-lg text-lg">
                  Read More{" >"}
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="gradient__text leading-1 text-2xl sm:text-4xl font-bold mb-6">
                {title}
              </h1>
              <ul className="mb-8 leading-relaxed lg:text-base text-sm space-y-2">
                {list.map((lists, i) => (
                  <li
                    key={i}
                    className="flex flex-nowrap items-center w-full p-4 bg-white rounded-md shadow-lg shadow-gray-200/50">
                    <span>
                      <div className="h-2.5 w-2.5 mr-3 rounded-full bg-[#042c54]" />
                    </span>
                    {lists}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <button
                  onClick={() => navigate(link)}
                  className="bg-red-600 inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded-lg text-lg">
                  Read More{" >"}
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center"
                alt="hero"
                src={image}
              />
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default HomeFeatures;
