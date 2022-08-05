import React from "react";
import IconCards from "../../Components/IconCards";
import { PartnershipList } from "../../utils/data";
import { Slugify } from "../../utils/utils";


function Partner() {
  return (
    <div className="py-12 px-8 md:py-24 md:px-24">
      <div className="grid sm:grid-cols-3 grid-flow-row gap-6">
        {PartnershipList.map((item, i) => (
          <IconCards
            title={item.title}
            icon={item.icon}
            key={i}
            slug={`/partnership/${Slugify(item.title)}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Partner;
