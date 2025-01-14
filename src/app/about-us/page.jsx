import AboutUsDesign from "@/components/global/AboutUsDesign";
import SubBanner from "@/components/global/SubBanner";
import EnquiryReview from "@/feature/home/EnquiryReview";
import HomeChamberSlider from "@/feature/home/HomeChamberSlider";
import MainWebSite from "@/templates/MainWebsite";
import React from "react";

const AboutUs = () => {
  const content = {
    imgsrc: "/images/aboutuspage.jpg",
    heading: "Best Trusted Astrologer in Siliguri, North Bengal",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ut metus adipiscing sagittis venenatis nisl. Ac nec aliquet mauris magnis. Leo sollicitudin integer arcu vel maecenas vel facilisi. Dictum sed consequat vel suspendisse commodo rhoncus ac. Magna nec tellus tellus platea feugiat in sed. Etiam in condimentum a libero ultricies risus. Urna scelerisque nisi eget arcu varius ac aliquet proin integer. Eget viverra pharetra adipiscing mi velit et viverra. Vestibulum magna porttitor ac eget massa sollicitudin vel sem purus. Sed elit senectus aliquam feugiat. At adipiscing enim pellentesque adipiscing sollicitudin.Elit condimentum arcu mattis tempus et id egestas consequat dui. Venenatis vitae semper euismod eleifend tincidunt sagittis id at. Elit suspendisse ullamcorper urna eget urna facilisis hendrerit. Consequat nec fames ipsum aliquam. Vestibulum vulputate ut amet eu sed adipiscing mattis. Sit arcu magna at tincidunt. Consequat mollis vitae consectetur ipsum ut nunc sed. Sit nec mauris vulputate euismod egestas libero. Turpis dolor sed turpis nunc. <br> Velit lobortis vel dictum nunc morbi tellus. Morbi commodo nec velit elementum nunc et ut fermentum. Vitae fringilla eget lorem semper sagittis. Adipiscing non aliquet sagittis arcu. Pulvinar nunc integer tempor at mauris ut odio. Faucibus bibendum rhoncus bibendum faucibus condimentum aliquet dolor at nunc. Luctus velit ullamcorper faucibus pellentesque. Volutpat morbi proin fringilla ac gravida vitae non quisque ut. In sit sed cursus fusce non. Sollicitudin proin libero mattis vulputate felis egestas id. Netus libero sit nec sapien tellus ut. Egestas amet pharetra phasellus ut at consectetur. <br> Sit turpis elit arcu ligula sed. Tincidunt volutpat tempus molestie odio quis ipsum integer. Cras sed risus ultricies ut turpis sit vitae. Eget curabitur ultrices eget pharetra ultricies ipsum. Commodo habitant sed pulvinar dictumst pretium pulvinar consectetur. Sit nisl faucibus dolor viverra ullamcorper tellus ultrices vitae. Vel venenatis facilisis sit dui. Dolor maecenas ipsum vitae sit turpis ultricies purus commodo. Enim lectus volutpat et vitae id accumsan sit adipiscing.",
  };
  return (
    <MainWebSite>
      <SubBanner heading={"About Us"} extraLink={"/about-us"} />
      <div className="xl:p-16 lg:p-8 p-4 flex flex-col lg:gap-16 gap-8">
        <AboutUsDesign content={content} />
        <HomeChamberSlider />
        <EnquiryReview />
      </div>
    </MainWebSite>
  );
};

export default AboutUs;
