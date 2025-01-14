/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "site-main-blue": "#336EFF",
        "site-main-gray": "#555555",
        "site-main-yellow": "#FFAE00",
        "site-main-black": "#222222",
      },
      backgroundImage: {
        "custom-gradient-blue":
          "linear-gradient(270deg, #336EFF 0%, #0035B7 100%)",
        "custom-gradient-blue-yellow":
          "linear-gradient(90deg, #336EFF 0%, #E3D000 100%)",
      },
      screens: {
        xlg: "1400px",
        xxl: "1780px",
      },
    },
  },
  plugins: [],
};
