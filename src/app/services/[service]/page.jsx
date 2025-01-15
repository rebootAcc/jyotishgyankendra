import SubBanner from "@/components/global/SubBanner";
import ServicePageDesign from "@/components/services/ServicePageDesign";
import { ServiceData } from "@/lib/serviceData";
import MainWebSite from "@/templates/MainWebsite";

const getServiceData = (service) => {
  const ServiceAllData = ServiceData.reduce((acc, item) => {
    const key = item.href.split("/")[2];
    acc[key] = {
      href: item.href,
      imgsrc: item.imgsrc,
      heading: item.heading,
      pagedescription: item.pagedescription,
      servicetitle: item.servicetitle,
    };
    return acc;
  }, {});

  return ServiceAllData[service] || null;
};

const ServiceDetailPage = async ({ params }) => {
  const { service } = await params;
  const data = getServiceData(service);

  if (!data) {
    // If the service is not found, render a 404 message
    return <div>Service not found</div>;
  }

  return (
    <MainWebSite>
      <SubBanner heading={"Services"} extraLink={data.href} />
      <ServicePageDesign
        imgsrc={data.imgsrc}
        heading={data.heading}
        pagedescription={data.pagedescription}
        servicetitle={data.servicetitle}
      />
    </MainWebSite>
  );
};

export default ServiceDetailPage;

export const generateStaticParams = async () => {
  return ServiceData.map((item) => {
    return { service: item.href.split("/")[2] };
  });
};
