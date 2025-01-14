import EnquiryReview from "@/feature/home/EnquiryReview";
import HomeSlider from "@/feature/home/HomeSlider";
import MainWebSite from "@/templates/MainWebsite";

export default function Home() {
  const sliders = [
    {
      id: 1,
      image: {
        path: "/slider/slider-1.png",
      },
    },
  ];
  return (
    <MainWebSite>
      <HomeSlider sliders={sliders} />
      <div className="text-8xl font-extrabold mx-6 md:mx-10 xl:mx-14">
        <EnquiryReview />
      </div>
    </MainWebSite>
  );
}
