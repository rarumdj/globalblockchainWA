import React from "react";
import logo from "../../assets/gb_logo.png";
import MenuItems from "../NavBar/MenuItems";

function Footer() {
  return (
    <div id="contact" className="flex flex-col">
      <div className="footer__bg flex flex-col py-16 justify-center items-center">
        <h1 className="gradient__text text-3xl sm:text-5xl mx-8 font-bold mb-8">
          Get in touch
        </h1>
        <div className="w-100 h-full mx-8">
          <div className="flex justify-between items-center mb-2">
            <input
              className="w-full mr-4 p-2 outline-none bg-transparent border text-xs sm:text-sm text-white"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-full p-2 outline-none bg-transparent border text-xs sm:text-sm text-white"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex justify-between items-center mb-2">
            <input
              className="w-full mr-4 p-2 outline-none bg-transparent border text-xs sm:text-sm text-white"
              type="text"
              placeholder="Phone"
            />
            <select className="w-full cursor-pointer p-2 outline-none bg-transparent border text-xs sm:text-sm text-white">
              <option className="bg-white" value="">
                Select service
              </option>
              <option
                className="border-0 bg-white text-xs sm:text-sm capitalize text-black outline-none"
                value=""
              >
                Blockchain
              </option>
              <option
                className="border-0 bg-white text-xs sm:text-sm capitalize text-black outline-none"
                value=""
              >
                Blockchain
              </option>
            </select>
          </div>
          <div className="flex items-center justify-center mb-2">
            <textarea
              className="w-full p-2 outline-none bg-transparent border text-xs sm:text-sm text-white"
              type="text"
              placeholder="Message"
              rows={4}
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="w-full p-2 outline-none bg-transparent border  text-xs sm:text-sm text-white"
              type="button"
            >
              Submit
            </button>
          </div>
          <div className="flex flex-col mt-8 mb-4 justify-center items-center">
            <h1 className="font-bold text-lg text-white mb-3">Contact info</h1>
            <p className="text-white text-sm md:text-base text-center mb-3">
              The Autograph Mall, 22/23 Sani Abacha Rd GRA, Port Harcourt
              Nigeria.
            </p>
            <p className="text-white text-sm md:text-base mb-3">
              <a href="tel:+2348105571795">+234 810 557 1795</a>
            </p>
            <p className="text-white text-sm md:text-base">
              <a href="mailto://info@globalblockchainwa.org">
                info@globalblockchainwa.org
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-24 py-6">
        <div className="flex justify-between ">
          <div className="flex justify-between items-center">
            {MenuItems.map((item, i) => (
              <p className="hidden md:block text-sm text-white mr-3" key={i}>
                <a href={item.url}>{item.title}</a>
              </p>
            ))}
          </div>
          <div className="hidden md:block">
            <img className="w-12" src={logo} alt="logo" />
          </div>
        </div>
        <p className="sm:text-sm mt-4 text-xs text-gray-300 text-center">
          © 2021 GBWA All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
