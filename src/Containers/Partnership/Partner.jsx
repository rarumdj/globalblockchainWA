import React from "react";
import IconCards from "../../Components/IconCards";
import { PartnershipList } from "../../utils/data";
import { Slugify } from "../../utils/utils";

function Partner() {
  return (
    <section className="py-12 px-8 md:py-24 md:px-24">
      <div className="text-gray-600 body-font">
        <div className="container  py-8 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10">
            {PartnershipList.map((item, i) => (
              <IconCards
                title={item.title}
                icon={item.icon}
                key={i}
                slug={`/partnership/${Slugify(item.title)}`}
                color={item.color}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
