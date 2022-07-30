import React from "react";
import { motion } from "framer-motion";

function OneFeature({ title, list, image, para, link, cName }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.8 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      className="flex flex-col-reverse lg:flex-row w-full h-full footer__bg mb-4"
    >
      <div
        className={`flex flex-col flex-initial justify-between w-full h-full py-10 px-12 ${cName}`}
      >
        <h1 className="text-white  text-2xl sm:text-4xl font-bold mb-6">
          {title}
        </h1>
        <p className="mb-6 text-sm lg:text-base text-blue-200">{para}</p>
        <ul className="text-blue-200 mb-6 list-disc flex flex-col lg:flex-wrap lg:h-64">
          {list.map((lists, i) => (
            <li
              className="mb-2 text-sm lg:text-base text-blue-200 w-32"
              key={i}
            >
              {lists}
            </li>
          ))}
        </ul>
        <a
          href={link && link}
          className={`bg-red-600 p-2 text-white cursor-pointer w-28 max-w-x ${
            link ? "" : "hidden"
          }`}
        >
          Read More{" >"}
        </a>
      </div>
      <div className={`w-full lg:w-80 min-h-max lg:max-h-screen flex-none`}>
        <img
          src={image}
          alt="blog"
          className="w-full h-[40vh] lg:h-full object-cover"
        />
      </div>
    </motion.div>
  );
}

export default OneFeature;
