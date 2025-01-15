import SubBanner from "@/components/global/SubBanner";
import VideoSlideCard from "@/feature/VideoSlideCard";
import MainWebSite from "@/templates/MainWebsite";

async function getAllMedia() {
  const mediaRes = await fetch(
    `${process.env.API_URI}/api/media?mediaType=video&limit=24`
  );
  const media = await mediaRes.json();
  // Pass data to the page via props
  return { media: media.medias };
}

export default async function VideoGallery() {
  const { media } = await getAllMedia();
  return (
    <>
      <MainWebSite>
        <SubBanner heading={"Video Gallery"} extraLink={"/video-gallery"} />
        <div className="mx-5 md:mx-10 grid grid-cols-2 md:grid-cols-3 place-items-stretch xl:grid-cols-4 xl:mx-20 gap-2 md:gap-4 xl:gap-6 mt-16">
          {media.map((med) => (
            <VideoSlideCard key={med.mediaId} media={med} />
          ))}
        </div>
      </MainWebSite>
    </>
  );
}

