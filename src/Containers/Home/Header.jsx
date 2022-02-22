import React from "react";
import ai from "../../assets/ai.png";

function Header() {
  return (
    <div className="flex flex-col md:flex-row mt-0 mb-12 mx-0 lg:m-0 py-24 px-8 md:py-24 md:px-24">
      <div className="flex flex-1 flex-col justify-center items-start mr-2">
        <h1 className="gradient__text font-extrabold text-4xl lg:text-5xl tracking-wide leading-[40px]">
          Empowering Diversity in Africa’s Digital Future
        </h1>
        <p className="mt-4 text-blue-100 text-sm md:text-base">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="flex w-full mx-0 mt-8 mb-4">
          <a
            href="/contact"
            className="py-2 border-none outline-none px-4 bg-red-600 text-white rounded-md hover:bg-transparent hover:bg-red-500 hover:transition-all duration-200 ease-in-out"
          >
            Contact us
          </a>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <img src={ai} alt="ai" className="lg:w-100 lg:h-100 w-100" />
      </div>
    </div>
  );
}

export default Header;
