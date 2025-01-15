export default function MarqueeCard({ label, logo }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-white">
      <div className="rounded-full border-2 border-site-main-blue p-2 md:p-4">
        <div className="bg-custom-gradient-blue size-14 sm:size-32 md:size-40 lg:size-48 xlg:size-52 flex flex-col text-2xl sm:text-4xl lg:text-6xl items-center justify-center rounded-full border border-site-main-blue">
          {logo}
          <h3 className="text-center text-xl lg:text-3xl">{label}</h3>
        </div>
      </div>
    </div>
  );
}
