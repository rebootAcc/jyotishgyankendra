import ChambersPageDesign from "@/components/chambers/ChambersPageDesign";
import SubBanner from "@/components/global/SubBanner";
import { ChambersData } from "@/lib/chamberData";
import MainWebSite from "@/templates/MainWebsite";
import React from "react";

const getServiceData = (chamber) => {
  const ChamberAllData = ChambersData.reduce((acc, item) => {
    const key = item.href.split("/")[2];
    acc[key] = {
      imgsrc: item.imgsrc,
      heading: item.heading,
      maplink: item.maplink,
      chambertitle: item.chambertitile,
      pagedescription: item.pagedescription,
    };
    return acc;
  }, {});

  return ChamberAllData[chamber] || null;
};

const ChamberPage = async ({ params }) => {
  const { chamber } = await params;
  const data = getServiceData(chamber);

  if (!data) {
    return <div>Service not found</div>;
  }
  return (
    <MainWebSite>
      <SubBanner heading={"Our Chambers"} extraLink={data.href} />
      <ChambersPageDesign
        imgsrc={data.imgsrc}
        heading={data.heading}
        maplink={data.maplink}
        chambertitle={data.chambertitle}
        pagedescription={data.pagedescription}
      />
    </MainWebSite>
  );
};

export default ChamberPage;

export const generateStaticParams = async () => {
  return ChambersData.map((item) => {
    return { chamber: item.href.split("/")[2] };
  });
};
