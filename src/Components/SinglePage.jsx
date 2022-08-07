import React from "react";
import { motion } from "framer-motion";
import Footer from "../Containers/Footer/Footer";
import parse from 'html-react-parser';

const SinglePage = ({ items }) => {
  return (
    <div className="mt-32">
      <div className="pb-8 px-8 md:pb-24 md:px-24">
        {items.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="flex flex-col w-full justify-center items-center"
            id={i}>
            <div class="container mx-auto flex md:flex-row flex-col items-center">
              <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h2 className="gradient__text text-2xl lg:text-6xl font-extrabold leading-tight md:mb-10 mb-5">
                  {item.title}
                </h2>
                <p class="leading-relaxed text-[#140D60] md:text-2xl md:mb-10 mb-5">
                  {item.text ? parse(item.text) : "Coming Soon"}
                </p>
                {item.sub && (
                  <ul className="mb-8 leading-relaxed lg:text-base text-sm space-y-2">
                    {item.sub.map((lists, i) => (
                      <li
                        key={i}
                        className="flex flex-nowrap text-[#140D60] items-center w-full p-4 bg-white rounded-md shadow-lg shadow-gray-200/50">
                        <span>
                          <div className="h-2.5 w-2.5 mr-3 rounded-full bg-[#042c54]" />
                        </span>
                        {lists}
                      </li>
                    ))}
                  </ul>
                )}
                {item.actionLink && (
                  <div className="flex justify-center">
                    <a
                      href={item.actionLink}
                      target="_blank"
                      className="bg-red-600 inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded-lg text-lg"
                      rel="noreferrer">
                      {`${item.action}  >`}
                    </a>
                  </div>
                )}
              </div>
              <div class="lg:max-w-lg lg:w-full md:w-1/2">
                <img
                  class="object-cover object-center rounded"
                  alt="hero"
                  src={item.img}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SinglePage;
