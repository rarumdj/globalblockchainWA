import React from "react";
import { motion } from "framer-motion";
import {
  UilSetting,
  UilChannel,
  UilBookOpen,
  UilGraphBar,
} from "@iconscout/react-unicons";
import allience from "../../assets/allience.png";

function Allience() {
  return (
    <div className="pb-4 px-8 md:pb-24">
      <div className="flex flex-col justify-center items-center">
        <div className="mb-6 mt-4 lg:mb-16">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5}}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="gradient__text text-2xl sm:text-3xl font-bold"
          >
            The 4 E's Of The Alliance
          </motion.h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 justify-center items-center">
          <div className="grid grid-rows-2 grid-flow-col gap-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              className="flex flex-col h-full justify-center lg:justify-start"
            >
              <div className="lg:hidden flex justify-start items-center bg-red-700 h-12 w-12 rounded-lg mb-3">
                <UilGraphBar size="30" color="#fff" className="m-auto" />
              </div>
              <h1 className="mb-4 text-[#140D60] font-bold text-lg">
                GBWA ENGAGES
              </h1>
              <p className="text-[#140D60] text-sm md:text-base">
                Spurs partnerships and engages K-12 and higher education,
                business, government, philanthropy and the community to amplify
                STEM teaching and learning opportunities for students across the
                country.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              className="flex flex-col h-full mb-4"
            >
              <div className="lg:hidden flex justify-start items-center bg-zinc-900 h-12 w-12 rounded-lg mb-3">
                <UilSetting size="30" color="#fff" className="m-auto" />
              </div>
              <h1 className="mb-4 text-[#140D60] font-bold text-lg">
                GBWA EMPOWERS
              </h1>
              <p className="text-[#140D60] text-sm md:text-base">
                Promotes sharing of high-quality Blockchain resources and tools
                that span teaching and learning, quality metrics, policy and
                advocacy, communication and community engagement, and state
                network planning all to increase student achievement.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 20 }}
            transition={{ duration: 1, yoyo: Infinity, delay: 1, ease: 'easeInOut' }}
            className="p-6 hidden lg:block"
          >
            <img src={allience} alt="allience" />
          </motion.div>
          <div className="grid grid-rows-2 grid-flow-col gap-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              className="flex flex-col h-full mb-4"
            >
              <div className="lg:hidden flex justify-start items-center bg-gray-400 h-12 w-12 rounded-lg mb-3">
                <UilBookOpen size="30" color="#fff" className="m-auto" />
              </div>
              <h1 className="mb-4 text-[#140D60] font-bold text-lg">
                GBWA EDUCATES
              </h1>
              <p className="text-[#140D60] text-sm md:text-base">
                Deﬁnes what quality tech teaching and learning looks like and
                connects state networks and partners across the country to
                accelerate the spread of universally transformative tech
                educational practices and policies to reach more students.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              className="flex flex-col h-ful"
            >
              <div className="lg:hidden flex justify-start items-center bg-slate-300 h-12 w-12 rounded-lg mb-3">
                <UilChannel size="30" color="#fff" className="m-auto" />
              </div>
              <h1 className="mb-4 text-[#140D60] font-bold text-lg">
                GBWA EVOLVES
              </h1>
              <p className="text-[#140D60] text-sm md:text-base">
                Redeﬁnes learning outcomes, enriches academics and curriculums,
                promotes creative and entrepreneur skills and raises better
                informed citizens.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allience;
