import React, { useEffect } from "react";
import Feature from "../Components/Feature";
import Footer from "../Containers/Footer/Footer";
import factImg from "../assets/img-facts.jpg";
import concernImg from "../assets/img-concerns.jpg";
import ruralImg from "../assets/img-rural.jpg";
import genderDriveImg from "../assets/img-genderdrive.jpg";

const TheFact = {
  title: "The Facts",
  list: [
    `Number of female programmers around the world  (only 11%)`,
    `Women now account for 53% of the world's  bachelor's and master's graduates and of PhDs but  just 28% of researchers`,
    `Only About a Quarter of Tech Workers Are Female`,
    `The gender gap does not only remain but is  actually growing. The percentage of women with  Tech degrees in Africa has dropped from 25% to 24%`,
    `There Are Fewer Female Leaders in Blockchain`,
    `Women ﬁll only 25 % of computer science jobs.  Back in 1990, women represented 32 percent of the  computer science workforce. The number of  women in computing has decreased even though  the number of computing jobs has increased.`,
    `Women only represent 16% of the technology  workforce, a slight gain from 1990 where they  accounted for 12 percent.`,
    `A 2014 report by the Indian National Science  Academy concluded, from the little data it could  gather, that the percentage of women occupying  faculty positions in most research institutions and  prestigious universities was less than 15 percent.`,
    `An MHRD report shows that only 8.52% girls enrolled  in higher education in 2012-13 were pursuing  bachelor's degrees in engineering or technology.  This was far below the national average of 13.27%.`,
    `These disheartening statistics haven't changed  much in the past few years.`,
  ],
  image: factImg,
  link: "",
  cName: "",
};

const TheConcern = {
  title: "The Concerns",
  list: [
    `When highly qualiﬁed girls & women drop out of the workforce, it results in considerable  depletion of national resources in science and technology.`,
    `Stereotypes encountered by girls to the family-caring responsibilities.`,
    `Patriarchal Society.`,
    `Girls & Women face bias when choosing a career.`,
    `Girls & Women continue to face the same kind of discrimination at work as they face in  society.`,
    `According to a recent Accenture research report, the average gender pay gap in Africa  is as high as 59%.`,
  ],
  image: concernImg,
  link: "",
  cName: "lg:order-last",
};

const TheRural = {
  title: "The Rural Challenge",
  list: [
    `Girls are expected to perform domestic duties and it  is believed that educating them could make them  demanding and negligent of the domestic chores.`,
    `Early marriages are also responsible for depriving  girls of attending school.`,
    `The conservative mentality of parents who don't want  their daughters to work outside the home, do not feel  the necessity to educate them.`,
    `Lack of educational institutions near villages makes it  difficult for girls to travel long distances.`,
    `Virtual absence of STEM as a concept`,
    `There are no clear guidelines on how to integrate  Blockchain`,
    `Blockchain is almost completely based on  technology but most schools in Nigeria do not use  technology`,
    `Lack of qualiﬁed teachers Lack of good  infrastructure`,
    `Current curriculum does not address the 21st  century tech challenges`,
    `Lack of use of technology at grass root level`,
    `Lack of proper infrastructure and facilities`,
    `Connectivity issues`,
    `Proper toilets and sanitation`,
    `Most Important Resource—The Teacher - lack  of well trained teachers to deliver the  curriculum`,
    `Poor student teacher ratio`,
    `Limited Regionalized content`,
  ],
  image: ruralImg,
  link: "",
  cName: "",
};

function ReadMore() {
  useEffect(() => {
    document.title = "GBWA - ReadMore";
  }, []);
  return (
    <div className="mt-32">
      <div className="pb-8 px-8 md:pb-24 md:px-24">
        <div>
          <div className="py-8">
            <h1 className="gradient__text text-3xl sm:text-5xl font-bold">
              {TheFact.title}
            </h1>
          </div>
          <Feature
            list={TheFact.list}
            image={TheFact.image}
            link={TheFact.link}
            cName={TheFact.cName}
          />
        </div>
        <div>
          <div className="py-8">
            <h1 className="gradient__text text-3xl sm:text-5xl font-bold">
              Blockchain Startup Gender Divide
            </h1>
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <img src={genderDriveImg} alt="divide" className="object-contain" />
          </div>
        </div>
        <div>
          <div className="py-8">
            <h1 className="gradient__text text-3xl sm:text-5xl font-bold">
              {TheConcern.title}
            </h1>
          </div>
          <Feature
            list={TheConcern.list}
            image={TheConcern.image}
            link={TheConcern.link}
            cName={TheConcern.cName}
          />
        </div>
        <div>
          <div className="py-8">
            <h1 className="gradient__text text-3xl sm:text-5xl font-bold">
              {TheRural.title}
            </h1>
          </div>
          <Feature
            list={TheRural.list}
            image={TheRural.image}
            link={TheRural.link}
            cName={TheRural.cName}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ReadMore;
