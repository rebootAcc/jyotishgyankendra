import ContactUsStyle from "@/components/contacts/ContactUsStyle";
import SubBanner from "@/components/global/SubBanner";
import MainWebSite from "@/templates/MainWebsite";
import React from "react";

const ContactUs = () => {
  return (
    <MainWebSite>
      <SubBanner heading={"Contact Us"} extraLink={"/contact-us"} />
      <div className="xl:p-16 lg:p-8 p-4 flex flex-col lg:gap-16 gap-8">
        <ContactUsStyle />
      </div>
    </MainWebSite>
  );
};

export default ContactUs;
