import React from "react";
import { motion } from "framer-motion";
import featureImg from "../../assets/Feature_Image.png";
import { CgCommunity, CgSupport } from "react-icons/cg";
import { BiChat, BiBookReader } from "react-icons/bi";
import {
  businessmen,
  closeup_diverse,
  diverse_hand,
  medium_women,
} from "../../assets";

function Community() {
  return (
    <div className="pb-16 px-8 md:pb-24">
      <div className="grid lg:grid-cols-2 gap-6 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="lg:order-first order-last">
          <img src={featureImg} alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}>
          <h1 className="gradient__text text-2xl lg:text-6xl font-extrabold leading-tight">
            GBWA Creating A Community Of Practice
          </h1>
        </motion.div>
      </div>
      <div className="flex flex-col">
        {/* <div className="my-12 lg:mb-16">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="gradient__text text-2xl sm:text-3xl font-bold"
          >
            The Gbwa Community of Practice
          </motion.h1>
        </div> */}
        <div className="container pt-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-10 flex-wrap">
            <h1 className="text-2xl sm:text-3xl font-bold title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              The Gbwa Community of Practice
            </h1>
            {/* <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p> */}
          </div>
          <div className="flex lg:flex-row flex-col lg:-m-2 -m-1">
            <div className="flex flex-wrap lg:w-1/2">
              <div className="flex lg:p-2 p-1 w-full lg:flex-row flex-col">
                <div className="lg:p-2 p-1 lg:w-1/2">
                  <div className="w-full object-cover h-full object-center relative radial_bg flex item-center justify-center">
                    <div className="lg:h-14 lg:w-14 h-10 w-10 bg-[#0B045A] bg-opacity-70 backdrop-blur-sm rotate-45 absolute lg:right-0 lg:top-0 bottom-0 translate-y-5 lg:translate-x-7 lg:translate-y-10" />
                    <div className="flex flex-col space-y-10 w-full h-full relative py-10 px-8">
                      <div className="ml-auto">
                        <h1 className="text-3xl text-white font-bold">01</h1>
                        <div className="h-[2px] w-8 mt-1 bg-white" />
                      </div>
                      <p className="text-white">
                        Form a global community of dedicated and passionate
                        Blockchain teachers and leaders.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:p-2 p-1 lg:w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={diverse_hand}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap lg:w-1/2">
              <div className="flex lg:p-2 p-1 w-full lg:flex-row flex-col">
                <div className="lg:p-2 p-1 lg:w-1/2">
                  <div className="w-full object-cover h-full object-center relative radial_bg flex item-center justify-center">
                    <div className="lg:h-14 lg:w-14 h-10 w-10 bg-[#0B045A] bg-opacity-70 backdrop-blur-sm rotate-45 absolute lg:right-0 lg:top-0 bottom-0 translate-y-5 lg:translate-x-7 lg:translate-y-10" />
                    <div className="flex flex-col space-y-10 w-full h-full relative py-10 px-8">
                      <div className="ml-auto">
                        <h1 className="text-3xl text-white font-bold">02</h1>
                        <div className="h-[2px] w-8 mt-1 bg-white" />
                      </div>
                      <p className="text-white">
                        Provide direct support via online learning to develop
                        participants' skills in Blockchain teaching and
                        learning.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:p-2 p-1 lg:w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={closeup_diverse}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col lg:-m-2 -m-1">
            <div className="flex flex-wrap lg:w-1/2">
              <div className="flex lg:p-2 p-1 w-full lg:flex-row flex-col-reverse">
                <div className="lg:p-2 p-1 lg:w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={businessmen}
                  />
                </div>

                <div className="lg:p-2 p-1 lg:w-1/2">
                  <div className="w-full object-cover h-full object-center relative radial_bg_op flex item-center justify-center">
                    <div className="lg:h-14 lg:w-14 h-10 w-10 bg-[#0B045A] bg-opacity-70 backdrop-blur-sm rotate-45 absolute lg:left-0 lg:top-0 bottom-0 translate-y-5 lg:-translate-x-7 lg:translate-y-10" />
                    <div className="flex flex-col space-y-10 w-full h-full relative py-10 px-8">
                      <div className="ml-auto">
                        <h1 className="text-3xl text-white font-bold">03</h1>
                        <div className="h-[2px] w-8 mt-1 bg-white" />
                      </div>
                      <p className="text-white">
                        Engage with and learn from internal and external
                        Blockchain experts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap lg:w-1/2">
              <div className="flex lg:p-2 p-1 w-full lg:flex-row flex-col-reverse">
                <div className="lg:p-2 p-1 lg:w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={medium_women}
                  />
                </div>

                <div className="lg:p-2 p-1 lg:w-1/2">
                  <div className="w-full object-cover h-full object-center relative radial_bg_op flex item-center justify-center">
                    <div className="lg:h-14 lg:w-14 h-10 w-10 bg-[#0B045A] bg-opacity-70 backdrop-blur-sm rotate-45 absolute lg:left-0 lg:top-0 bottom-0 translate-y-5 lg:-translate-x-7 lg:translate-y-10" />
                    <div className="flex flex-col space-y-10 w-full h-full relative py-10 px-8">
                      <div className="ml-auto">
                        <h1 className="text-3xl text-white font-bold">04</h1>
                        <div className="h-[2px] w-8 mt-1 bg-white" />
                      </div>
                      <p className="text-white">
                        Empower participants to expand the impact by sharing
                        knowledge gained through their engagement in the
                        Community with their teaching colleagues and their
                        partner organizations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="grid lg:grid-cols-2 gap-4 lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="flex flex-wrap"
          >
            <div className="basis-1/6 mr-4">
              <div className="flex h-10 w-10 rounded-md bg-slate-300">
                <CgCommunity size="30" color={"#000"} className="m-auto" />
              </div>
            </div>
            <div className="basis-3/4">
              <p className="text-[#140D60] text-sm md:text-base">
                Form a global community of dedicated and passionate Blockchain
                teachers and leaders.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="flex flex-wrap"
          >
            <div className="basis-1/6 mr-4">
              <div className="flex h-10 w-10 rounded-md bg-slate-300">
                <BiChat size="30" color={"#000"} className="m-auto" />
              </div>
            </div>
            <div className="basis-3/4">
              <p className="text-[#140D60] text-sm md:text-base">
                Engage with and learn from internal and external Blockchain
                experts.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="flex flex-wrap"
          >
            <div className="basis-1/6 mr-4">
              <div className="flex h-10 w-10 rounded-md bg-slate-300">
                <CgSupport size="30" color={"#000"} className="m-auto" />
              </div>
            </div>
            <div className="basis-3/4">
              <p className="text-[#140D60] text-sm md:text-base">
                Provide direct support via online learning to develop
                participants' skills in Blockchain teaching and learning.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="flex flex-wrap"
          >
            <div className="basis-1/6 mr-4 ">
              <div className="flex h-10 w-10 rounded-md bg-slate-300">
                <BiBookReader size="30" color={"#000"} className="m-auto" />
              </div>
            </div>
            <div className="basis-3/4">
              <p className="text-[#140D60] text-sm md:text-base">
                Empower participants to expand the impact by sharing knowledge
                gained through their engagement in the Community with their
                teaching colleagues and their partner organizations.
              </p>
            </div>
          </motion.div>
        </div> */}
      </div>
    </div>
  );
}

export default Community;
