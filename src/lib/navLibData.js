import { ChambersData } from "./chamberData";
import { ServiceData } from "./serviceData";

const navLinks = [
  {
    text: "home",
    href: "/",
  },
  {
    text: "About Us",
    href: "/about-us",
  },
  {
    text: "Our Services",
    subMenu: ServiceData.map((item) => ({
      text: item.heading,
      href: item.href,
    })),
  },
  {
    text: "Chamber",
    subMenu: ChambersData.map((item) => ({
      text: item.heading,
      href: item.href,
    })),
  },
  {
    text: "Media",
    subMenu: [
      {
        href: "/press-release",
        text: "Press Release",
      },
    ],
  },
  {
    text: "Contact Us",
    href: "/contact-us",
  },
];

export { navLinks as NavLinksData };
