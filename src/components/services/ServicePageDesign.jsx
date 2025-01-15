import { ServiceData } from "@/lib/serviceData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import EnquiryForm from "../contacts/EnquiryForm";

const ServicePageDesign = ({
  imgsrc,
  heading,
  servicetitle,
  pagedescription,
}) => {
  return (
    <div className="xl:p-16 lg:p-8 p-4 flex flex-col lg:gap-16 gap-8">
      <div className="flex flex-col md:flex-row xlg:gap-8 gap-4">
        <div className="md:w-[60%] w-full ">
          <Image
            src={imgsrc}
            alt={heading}
            width={856}
            height={441}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="md:w-[40%] w-full">
          <div className="h-fit w-full border border-site-main-blue rounded-md">
            {ServiceData.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className={`p-2 w-full flex justify-center items-center h-[3.5rem] text-site-main-blue ${
                  index % 2 === 0 ? "bg-[#0034940a]" : "bg-white"
                }`}
              >
                {item.heading}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row xlg:gap-8 gap-4">
        <div className="md:w-[60%] w-full flex flex-col lg:gap-8 gap-5">
          <h1 className="xlg:text-4xl text-2xl lg:text-3xl  font-semibold text-site-main-blue">
            {servicetitle}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: pagedescription }}
            className=" text-site-main-gray text-sm lg:text-base "
          ></div>
        </div>
        <div className="md:w-[40%] w-full">
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
};

export default ServicePageDesign;
