import React from "react";
import ruralImg from "../../assets/img-rural.jpg";
import concernImg from "../../assets/img-concerns.jpg";
import factImg from "../../assets/img-facts.jpg";
import Feature from "../../Components/Feature";

const FeatureList = [
  {
    title: "The Facts",
    list: [
      `Number of female programmers around the world  (only 11%)`,
      `Women now account for 53% of the world's  bachelor's and master's graduates and of PhDs but  just 28% of researchers`,
      `Only About a Quarter of Tech Workers Are Female`,
      `The gender gap does not only remain but is  actually growing. The percentage of women with  Tech degrees in Africa has dropped from 25% to 24%`,
    ],
    image: factImg,
    link: "/readmore#fact",
    id: 'fact',
    cName: "",
  },
  {
    title: "The Concerns",
    list: [
      `When highly qualiﬁed girls & women drop out of the workforce, it results in considerable  depletion of national resources in science and technology.`,
      `Stereotypes encountered by girls to the family-caring responsibilities.`,
      `Patriarchal Society.`,
      `Girls & Women face bias when choosing a career.`,
    ],
    image: concernImg,
    link: "/readmore#concerns",
    id: 'concerns',
    cName: "lg:order-last",
  },
  {
    title: "The Rural Challenge",
    list: [
      `Girls are expected to perform domestic duties and it  is believed that educating them could make them  demanding and negligent of the domestic chores.`,
      `Early marriages are also responsible for depriving  girls of attending school.`,
      `The conservative mentality of parents who don't want  their daughters to work outside the home, do not feel  the necessity to educate them.`,
      `Lack of educational institutions near villages makes it  difficult for girls to travel long distances.`,
    ],
    image: ruralImg,
    link: "/readmore#rural",
    id: 'rural',
    cName: "",
  },
];
function Features() {
  return (
    <div className="pb-8 px-8 md:pb-24 md:px-24">
      <div>
        {FeatureList.map((feature, i) => (
          <Feature
            title={feature.title}
            list={feature.list}
            image={feature.image}
            link={feature.link}
            cName={feature.cName}
            idn={feature.id}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
