import React from "react";
import { motion } from "framer-motion";
import Feature from "../../Components/Feature";
import blockGirl from "../../assets/blockgirl.png";
import chainGirl from "../../assets/girlchain.png";
import girlnBlock from "../../assets/girlnblock.png";
import program16 from "../../assets/program16.png";
import OneFeature from "../../Components/OneFeature";

const Program16 = {
  title: "16 Before 16 Program",
  para: "We encourage young girls to engage with 16 different  types of Blockchain projects before they turn 16. These  projects address the following causes aligned with UN  Sustainability Goals 2030.",
  list: [
    "Quality Education",
    "Clean Water",
    "No Poverty",
    "Zero Hunger",
    "Decent Work",
    "Industry & Innov.",
    "Good Health",
    "Clean Energy",
    "Sustainable Cities",
    "Save Oceans",
    "Economic &  Community  Development",
    "Resp.Prod.&  Consump.",
    "Peace & Justice",
    "Climate Action",
    "Gender Equality",
    "Reduced Inequalities",
  ],
  image: program16,
  link: "",
  cName: "lg:order-last",
};

const InitiativeList = [
  {
    title: "Girls in Blockchain Framework",
    list: [
      `We provide a framework that organizes  challenges and opportunities in engaging  girls in Blockchain across four key issues:  enabling environment; education;  employment; and entrepreneurship.`,
      `The framework outlines emerging practices  in Sub-Saharan Africa in all four pillars`,
      `It makes concrete recommendations on  ways that stakeholders can work together to  strengthen STEM education and related  career pathways for women.`,
    ],
    image: girlnBlock,
    link: "",
    cName: "",
  },
  {
    title: "Block Girls Series Awareness Program",
    list: [
      `The BlockGirls Series, and outreach  initiatives will emphasize current research  on strategies proven to increase girls'  engagement in Blockchain.`,
      `Studies have converged on a set of common  strategies that work, and these have  become this programs' foundation.`,
      `The series shall summarize seven research-  based strategies for engaging women in  Blockchain`,
    ],
    image: blockGirl,
    link: "",
    cName: "lg:order-last",
  },
  {
    title: "GirlChain",
    list: [
      `GIRLCHAIN will work to bring fun,  educational workshops and camps to  garner the interest of young minds`,
      `GIRLCHAIN will run various camps  throughout the year where students learn  about programming, robotics and science  through hands-on activities.`,
      `GIRLCHAIN will partner with local child care  centers to create , a dedicated center for  students to explore blockchain. New  programs are added every six months as  well.`,
    ],
    image: chainGirl,
    link: "",
    cName: "",
  },
];

function Initiative() {
  return (
    <div className="pb-16 px-8 md:pb-24">
      <div className="mb-12">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="gradient__text text-2xl lg:text-6xl font-extrabold leading-tight"
        >
          GBWA Initiatives
        </motion.h1>
      </div>
      {InitiativeList.map((feature, i) => (
        <Feature
          title={feature.title}
          list={feature.list}
          image={feature.image}
          link={feature.link}
          cName={feature.cName}
          key={i}
        />
      ))}
      <OneFeature
        title={Program16.title}
        para={Program16.para}
        list={Program16.list}
        image={Program16.image}
        link={Program16.link}
        cName={Program16.cName}
      />
    </div>
  );
}

export default Initiative;
