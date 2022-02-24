import React from "react";
import ReactPlayer from "react-player";

const ResourcesItem = [
  {
    title: "What is BlockChain",
    para: "A blockchain is a digital record of transactions. The name comes from its structure, in which individual records, called blocks, are linked together in single list, called a chain. Blockchains are used for recording transactions made with cryptocurrencies, such as Bitcoin, and have many other applications.",
    tubelink: "https://www.youtube.com/watch?v=8o9QxMxhTp8",
  },
  {
    title: "What are Dapps?",
    para: `Decentralized applications (dApps) are digital applications or programs that exist and run on a blockchain or peer-to-peer (P2P) network of computers instead of a single computer. DApps (also called "dapps") are outside the purview and control of a single authority. DApps—which are often built on the Ethereum platform—can be developed for a variety of purposes including gaming, finance, and social media.`,
    tubelink: "https://www.youtube.com/watch?v=oPIupbsVimc",
  },
  {
    title: "Bitcoin simplified?",
    para: "Bitcoin, often described as a cryptocurrency, a virtual currency or a digital currency - is a type of money that is completely virtual. It's like an online version of cash. ... People can send Bitcoins (or part of one) to your digital wallet, and you can send Bitcoins to other people.",
    tubelink: "https://www.youtube.com/watch?v=s4g1XFU8Gto",
  },
  {
    title: "What are smart contracts?",
    para: "Smart contracts are simply programs stored on a blockchain that run when predetermined conditions are met. They typically are used to automate the execution of an agreement so that all participants can be immediately certain of the outcome, without any intermediary’s involvement or time loss. They can also automate a workflow, triggering the next action when conditions are met.",
    tubelink: "https://www.youtube.com/watch?v=ZE2HxTmxfrI&t=24s",
  },
];
const Resources = () => {
  return (
    <div className="py-8 px-8 md:py-24 md:px-24">
      <div className="p-2 sm:p-4 border-2 border-blue-200 rounded-md">
        <h1 className="gradient__text text-lg sm:text-2xl font-bold">
          Free Resources
        </h1>
      </div>

      {ResourcesItem.map((items, i) => (
        <div
          key={i}
          className="footer__bg flex-col lg:flex-row rounded-md flex h-auto gap-6 justify-between p-6 my-6 sm:my-8"
        >
          <div className="basis-3/6">
            <h1 className="gradient__text text-2xl mb-6 font-bold">
              {items.title}
            </h1>
            <p className="text-sm md:text-base text-blue-200">{items.para}</p>
          </div>
          <div className="basis-3/6">
            <div className="relative pt-[56.25%]">
              <ReactPlayer
                className="absolute left-0 top-0"
                width="100%"
                height="100%"
                url={items.tubelink}
                // controls={false}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resources;
