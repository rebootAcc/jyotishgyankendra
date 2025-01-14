import Link from "next/link";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { IoIosPin } from "react-icons/io";

const chambers = {
  heading: "Our Chambers",
  subLinks: (
    <ul className="flex flex-col gap-3 text-sm lg:text-xs xlg:text-base leading-7 lg:leading-10 font-medium text-white">
      <Link href="/chamber/siliguri-chamber">
        Sevoke Road, Siliguri WB 734001
      </Link>
      <Link href="/chamber/cooch-behar-chamber">
        Vivekananda Sarani, Cooch Behar, West Bengal 736101
      </Link>
    </ul>
  ),
};

const contact = {
  heading: "Contact Details",
  subLinks: (
    <ul className="flex flex-col text-sm gap-3 lg:text-xs xlg:text-base leading-7 lg:leading-10 font-medium text-white">
      <li className="inline-flex gap-2 items-center">
        <FaPhoneVolume />{" "}
        <Link href="tel:917001790055" className="inline">
          +91 70017 90055
        </Link>
      </li>
      <li className="inline-flex gap-2 items-center">
        <IoMailSharp />
        <Link
          href="mailTo:astrologersubhabrata2003@gmail.com"
          className="inline"
        >
          astrologersubhabrata2003@gmail.com
        </Link>
      </li>
      <li className="inline-flex gap-2 items-center">
        <IoIosPin />
        <Link
          href="https://maps.app.goo.gl/8U5b82h1oDpunuCU6"
          target="_blank"
          referrerPolicy="no-referrer"
          className="inline"
        >
          Vivekananda Sarani, Cooch Behar WB 736101
        </Link>
      </li>
    </ul>
  ),
};

const quickView = {
  heading: "Quick View",
  subLinks: (
    <ul className="flex flex-col gap-4 text-sm lg:text-xs xlg:text-base leading-7 lg:leading-10 font-medium text-white">
      {[
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
        { label: "Our Services", href: "/services/business_astrology" },
        { label: "Our Chembers", href: "/ourchamber" },
        { label: "Free Calculator", href: "/freecalculator" },
        { label: "Media", href: "/gallery" },
        { label: "Contact Us", href: "/contact-us" },
      ].map((link, key) => (
        <li key={key}>
          <Link href={link.href} className="text-white">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  ),
};

const ourServices = {
  heading: "Our Services",
  subLinks: (
    <ul className="flex flex-col gap-4 text-sm lg:text-xs xlg:text-base leading-7 lg:leading-10 font-medium text-white">
      {[
        { label: "Business Astrology", href: "/services/business_astrology" },
        { label: "Career Astrology", href: "/services/career_astrology" },
        { label: "Health Astrology", href: "/services/health_astrology" },
        { label: "Marriage Astrology", href: "/services/marriage_astrology" },
        { label: "Match Making", href: "/services/match_making" },
        { label: "Foregin Travel", href: "#" },
        { label: "Property Dispute", href: "#" },
      ].map((link, key) => (
        <li key={key}>
          <Link href={link.href} className="text-white truncate">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  ),
};

const ourBestServices = {
  heading: "Our Best  Services",
  subLinks: (
    <ul className="flex flex-col gap-4 text-sm lg:text-xs xlg:text-base leading-7 lg:leading-10 font-medium text-white">
      {[
        { label: "Best Astrologer In Siliguri", href: "#" },
        { label: "Best Astrologer In Cooch Behar", href: "#" },
        { label: "Best Astrologer In Dhupguri", href: "#" },
        { label: "Astrologer In Siliguri", href: "#" },
        { label: "Astrologer In Cooch Behar", href: "#" },
        { label: "Marriage Astrologer In Siliguri", href: "#" },
        { label: "Business Astrologer In Siliguri", href: "#" },
      ].map((link, key) => (
        <li key={key}>
          <Link href={link.href} className="text-white truncate">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  ),
};

export {
  chambers as Chambers,
  contact as Contacts,
  quickView as QuickView,
  ourServices as OurServices,
  ourBestServices as OurBestServices,
};
