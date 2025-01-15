import SubBanner from "@/components/global/SubBanner";
import MainWebSite from "@/templates/MainWebsite";
import Image from "next/image";

async function getAllMedia() {
  // Fetch data from external API
  const mediaRes = await fetch(
    `${process.env.API_URI}/api/media?mediaType=photo&limit=24`
  );
  const media = await mediaRes.json();
  // Pass data to the page via props
  return { media: media.medias };
}

export default async function PhotoGallery() {
  const { media } = await getAllMedia();
  return (
    <>
      <MainWebSite>
        <SubBanner heading={"Photo Gallery"} extraLink={"/photo-gallery"} />
        <div className="mx-5 md:mx-10 grid grid-cols-2 md:grid-cols-3 place-items-stretch xl:grid-cols-4 xl:mx-20 gap-2 md:gap-4 xl:gap-6 mt-16">
          {media.map((img) => (
            <Image
              key={img._id}
              src={img.mediaImage.path}
              width={306}
              height={306}
              alt="gallery"
              className="h-28 md:h-60 xl:h-80 object-cover w-full"
            />
          ))}
        </div>
      </MainWebSite>
    </>
  );
}
