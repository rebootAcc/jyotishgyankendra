"use client";
import useElementHeight from "@/hooks/useElementHeight";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutUsDesign({ content }) {
  const { imgsrc, heading, description } = content;

  const [rightSideHeight, leftSideRef] = useElementHeight();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="flex flex-col md:flex-row lg:gap-6 gap-4 xl:gap-8">
      <div
        className="md:w-[40%] w-full"
        style={{ height: isSmallScreen ? "auto" : `${rightSideHeight}px` }}
      >
        <Image
          src={imgsrc}
          alt="best-astrologer"
          className="rounded-md h-full w-full object-cover"
          width={1500}
          height={1500}
        />
      </div>
      <div
        className="flex flex-col w-full md:w-[60%] gap-3 lg:gap-4 xl:gap-5"
        ref={leftSideRef}
      >
        <h1 className="text-site-main-blue font-medium text-lg lg:text-2xl xl:text-4xl ">
          {heading}
        </h1>
        <section
          className="text-xs md:text-[11px]/[15px] lg:text-[13px]/[18px] xlg:text-base text-site-main-gray"
          dangerouslySetInnerHTML={{ __html: description }}
        ></section>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "12 years of Industry Expertise",
            "Most Trusted Astrologer in  North Bengal",
            "Accurate Prediction",
            "Available For Online Consultation",
          ].map((label, id) => (
            <div className="flex gap-2 items-center" key={id}>
              <div className="rounded-full p-2 bg-primary">
                <Image
                  src="/images/editor_choice.svg"
                  width={17}
                  height={20}
                  alt="editor choice"
                  className=""
                />
              </div>
              <h3 className="text-secondary font-medium text-base md:text-sm xlg:text-lg leading-4">
                {label}
              </h3>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
