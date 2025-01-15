import ChambersPageDesign from "@/components/chambers/ChambersPageDesign";
import SubBanner from "@/components/global/SubBanner";
import MainWebSite from "@/templates/MainWebsite";
import React from "react";

const ChamberPage = () => {
  return (
    <MainWebSite>
      <SubBanner heading={"Our Chambers"} extraLink={data.href} />
      <ChambersPageDesign
        imgsrc={imgsrc}
        heading={heading}
        maplink={maplink}
        chambertitle={chambertitle}
        pagedescription={pagedescription}
      />
    </MainWebSite>
  );
};

export default ChamberPage;
