import React from "react";
import { motion } from "framer-motion";
import featureImg from "../../assets/Feature_Image.png";
import { CgCommunity, CgSupport } from "react-icons/cg";
import { BiChat, BiBookReader } from "react-icons/bi";

function Community() {
  return (
    <div className="pb-16 px-8 md:pb-24 md:px-24">
      <div className="grid lg:grid-cols-2 gap-6 items-center justify-center">
        <motion.div
          initial={{ x: -700 }}
          viewport={{ once: true }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:order-first order-last"
        >
          <img src={featureImg} alt="" />
        </motion.div>
        <motion.div
          initial={{ x: 700 }}
          viewport={{ once: true }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h1 className="gradient__text text-2xl lg:text-6xl font-extrabold leading-tight">
            GBWA Creating A Community Of Practice
          </h1>
        </motion.div>
      </div>
      <div className="flex flex-col">
        <div className="my-12 lg:mb-16">
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
        </div>
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12">
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
              <p className="text-blue-200 text-sm md:text-base">
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
              <p className="text-blue-200 text-sm md:text-base">
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
              <p className="text-blue-200 text-sm md:text-base">
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
              <p className="text-blue-200 text-sm md:text-base">
                Empower participants to expand the impact by sharing knowledge
                gained through their engagement in the Community with their
                teaching colleagues and their partner organizations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Community;
