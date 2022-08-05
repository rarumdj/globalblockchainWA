import { Icon } from "@iconify/react";
import React from "react";

const Modal = ({ children, onClick, active, close, bg, padding, size }) => {
  return (
    <>
      <div
        // tabindex="-1"
        className={`fixed top-0 left-0 bottom-0 right-0 z-[9999] modal transition-opacity duration-300 ${
          active ? "opacity-100" : "opacity-0 pointer-events-none"
        } flex-col overflow-x-scroll overflow-y-scroll  hide-scrollbar items-center py-24 sm:py-32 bg-gray-200 bg-opacity-60 backdrop-blur-sm flex`}>
        <div
          className={`${bg === "none" ? "" : "bg-white"} w-11/12 mx-auto ${
            size ? size : "max-w-lg"
          } ${
            padding === "none" ? "" : "py-8 sm:py-10 px-8 sm:px-14 lg:px-16"
          } rounded-[10px] transform duration-500 delay-200 origin-bottom transition-all ${
            active
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-90 opacity-0 translate-y-10"
          } `}>
          {close && (
            <button
              onClick={() => onClick(!active)}
              className="flex outline-none border-none bg-white hover:bg-red-500 hover:text-white transition-all duration-500 ease-in-out rounded-full  xl:h-8 xl:w-8 h-7 w-7 absolute right-0 xl:translate-x-7 xl:-translate-y-[4.7rem] translate-x-3 -translate-y-[4.5rem]">
              <Icon icon="eva:close-fill" className="w-full m-auto" />
            </button>
          )}
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
