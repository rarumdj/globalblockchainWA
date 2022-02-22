import React from "react";

function Banner() {
  return (
    <div className="gradient__bar p-8 mb-16 rounded-lg mx-8 md:mx-24 flex flex-col md:flex-row justify-between items-center">
      <div>
        <p className="text-white text-sm md:text-base">
          Wish to get into the blockchain world? We're eager to hear from you.
        </p>
        <h1 className="text-white text-lg md:text-3xl font-bold">Send us a whatsapp message today!</h1>
      </div>
      <div className="flex items-center justify-center md:m-0 md:ml-8 mx-0 mt-8 mb-0">
        <a href="/contact" className="px-8 py-3 bg-black text-white outline-none rounded-full">whatsapp</a>
      </div>
    </div>
  );
}

export default Banner;
