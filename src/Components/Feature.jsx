import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Feature({ title, list, image, link, cName, idn, linkName, linkType }) {
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
      className="flex flex-col-reverse lg:flex-row w-full h-full footer__bg mb-4"
      id={idn}>
      <div
        className={`flex flex-col flex-initial justify-between w-full h-full py-10 px-12 ${cName}`}>
        <h1 className="text-white leading-1 text-2xl sm:text-4xl font-bold mb-6">
          {title}
        </h1>
        <ul className="text-blue-200 mb-6 list-disc">
          {list.map((lists, i) => (
            <li className="mb-2" key={i}>
              {lists}
            </li>
          ))}
        </ul>
        {linkType === "anchor" ? (
          <a
            target="_blank"
            href={link}
            className={`bg-red-600 p-2 text-white cursor-pointer w-fit rounded-md max-w-x ${
              link ? "" : "hidden"
            }`}
            rel="noreferrer">
            {linkName ? linkName : "Read More"}
            {" >"}
          </a>
        ) : (
          <NavLink
            to={link}
            className={`bg-red-600 p-2 text-white cursor-pointer w-fit rounded-md max-w-x ${
              link ? "" : "hidden"
            }`}>
            {linkName ? linkName : "Read More"}
            {" >"}
          </NavLink>
        )}
      </div>
      <div className={`w-full lg:w-80 min-h-max lg:max-h-screen flex-none`}>
        <img
          src={image}
          alt="blog"
          className="w-full h-[42vh] lg:h-full object-cover object-center"
        />
      </div>
    </motion.div>
  );
}

export default Feature;
