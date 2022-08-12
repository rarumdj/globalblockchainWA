import React, { useEffect, useState } from "react";
import { modalInfo } from "../utils/data";
import Modal from "./Modal";

const PromptMessage = () => {
  const [OpenModal, setOpenModal] = useState(false);

  useEffect(() => {
    window.setTimeout(function () {
      setOpenModal(true);
    }, 5000);
  }, []);

  return (
    <Modal active={OpenModal} onClick={setOpenModal} size="max-w-4xl" close>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="container mx-auto flex md:flex-row flex-col items-center gap-4">
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
            <h2 className="gradient__text text-2xl md:text-2xl font-extrabold leading-tight mb-5">
              {modalInfo.title}
            </h2>
            <p className="leading-relaxed text-[#140D60] md:text-base text-sm md:mb-10 mb-5">
              {modalInfo.text}
            </p>
            {modalInfo.sub && (
              <ul className="mb-8 leading-relaxed lg:text-base text-sm space-y-2">
                {modalInfo.sub.map((lists, i) => (
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
            {modalInfo.actionLink && (
              <div className="flex justify-center">
                <a
                  href={modalInfo.actionLink}
                  className="bg-red-600 inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded-lg text-lg">
                  {`${modalInfo.action}  >`}
                </a>
              </div>
            )}
          </div>
          <div className="lg:max-w-sm lg:w-full md:w-1/2">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={modalInfo.img}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PromptMessage;
