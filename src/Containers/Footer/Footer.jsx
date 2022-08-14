import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/gb_logo.png";
import MenuItems from "../NavBar/MenuItems";

const selectInput = [
  "Collaboration",
  "Blockchain Career Counseling",
  "Partnership",
  "Others",
];
function Footer() {
  const success = () =>
    toast("Message Delivered", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const error = () =>
    toast.error("Message Delivery Failed", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_sf6tnoo",
        "template_8jdbm5w",
        toSend,
        "user_9TNYwIfklHc7RB3UrNHCj"
      )
      .then((response) => {
        success();
        setToSend({
          name: "",
          email: "",
          phone: "",
          service: "Select service",
          message: "",
        });
      })
      .catch((err) => error());
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  const date = new Date();
  return (
    <div id="contact" className="flex flex-col">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="gradient__bg flex flex-col py-16 justify-center items-center">
        <h1 className="text-white text-3xl sm:text-5xl mx-8 font-bold mb-8">
          Get in touch
        </h1>
        <div className="w-100 h-full mx-8">
          <form onSubmit={sendEmail}>
            <div className="flex justify-between items-center mb-2">
              <input
                className="w-full mr-4 p-2 outline-none bg-transparent border text-xs sm:text-sm text-white"
                type="text"
                name="name"
                placeholder="Name"
                value={toSend.name}
                onChange={handleChange}
                required
              />
              <input
                className="w-full p-2 outline-none bg-transparent border text-xs sm:text-sm text-white"
                type="email"
                name="email"
                placeholder="Email"
                value={toSend.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-between items-center mb-2">
              <input
                className="w-full mr-4 p-2 outline-none bg-transparent border text-xs sm:text-sm text-white"
                type="text"
                name="phone"
                placeholder="Phone"
                value={toSend.phone}
                onChange={handleChange}
                required
              />
              <select
                className="w-full cursor-pointer p-2 outline-none bg-transparent border text-xs sm:text-sm text-white"
                name="service"
                onChange={handleChange}>
                <option className="bg-white" value={toSend.service}>
                  Select service
                </option>
                {selectInput.map((val, i) => (
                  <option
                    key={i}
                    className="border-0 bg-white text-xs sm:text-sm capitalize text-black outline-none"
                    value={toSend.service}>
                    {val}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center justify-center mb-2">
              <textarea
                className="w-full p-2 outline-none bg-transparent border text-xs sm:text-sm text-white"
                type="text"
                placeholder="Message"
                rows={5}
                name="message"
                value={toSend.message}
                onChange={handleChange}
                required></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="w-full p-2 outline-none bg-transparent border  text-xs sm:text-sm text-white"
                type="submit">
                Submit
              </button>
            </div>
          </form>
          <div className="flex flex-col mt-8 mb-4 justify-center items-center">
            <h1 className="font-bold text-lg text-white mb-3">Contact info</h1>
            <p className="text-white text-sm md:text-base text-center mb-3">
              The Autograph Mall, 30/33 Sani Abacha Rd GRA, Port Harcourt
              Nigeria.
            </p>
            <p className="text-white text-sm md:text-base mb-3 flex gap-3">
            <a href="tel:+2349153115310">+234 915 311 5310</a>   <a href="tel:+2348072064317">+234 807 206 4317</a>
            </p>
            <p className="text-white text-sm md:text-base">
              <a href="mailto://info@globalblockchainwa.org">
                info@globalblockchainwa.org
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col px-24 py-6">
        <div className="flex justify-between ">
          <div className="flex justify-between items-center">
            {MenuItems.map((item, i) => (
              <p
                className="hidden md:block text-sm text-[#042c54] mr-3"
                key={i}>
                <a href={item.url}>{item.title}</a>
              </p>
            ))}
          </div>
          <div className="hidden md:block">
            <img className="w-12" src={logo} alt="logo" />
          </div>
        </div>
        <p className="sm:text-sm mt-4 text-xs text-[#042c54] text-center">
          © {date.getFullYear()} GBWA All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
