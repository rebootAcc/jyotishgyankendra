import React from "react";

const HeadingDesign = ({ heading }) => {
  return (
    <div className=" flex flex-col items-center">
      <h1 className="relative text-4xl text-site-main-blue z-10 font-semibold px-2">
        {heading}
        <span className="absolute inset-0 mx-auto w-full h-2 bg-site-main-yellow -z-10 top-5 translate-y-2"></span>
      </h1>
    </div>
  );
};

export default HeadingDesign;
