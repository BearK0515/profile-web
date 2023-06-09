/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "basic-black": "#2f2e2e",
        "hover-color": "#b0aaa9",
      },
      screens: {
        laptop: "866px",
      },
      backgroundImage: {
        home: "url('../src/assets/images/light/NS-light-mode001.jpg')",
        skills: "url('../src/assets/images/NS002.jpg')",
        downSection: "url('../src/assets/images/light/NS-light-mode003.jpg')",
        bgImgSection: "url('../src/assets/images/light/NS-light-mode002.jpeg')",
        WorkSkill: "url('../src/assets/icons/light/001.svg')",
        WebFrontend: "url('../src/assets/icons/light/002.png')",
        LanguageSkill: "url('../src/assets/icons/light/003.svg')",
        GoTop: "url('../src/assets/icons/light/gotop.png')",
        Logo: "url('../src/assets/images/Logo.png')",
        darkHome: "url('../src/assets/images/dark/dark-mode001.jpg')",
        darkSkills: "url('../src/assets/images/dark/dark-mode002.jpg')",
        darkDownSection: "url('../src/assets/images/dark/dark-mode004.jpg')",
        darkBgImgSection: "url('../src/assets/images/dark/dark-mode003.jpg')",
        darkWorkSkill: "url('../src/assets/icons/dark/dark-mode-icon001.png')",
        darkWebFrontend:
          "url('../src/assets/icons/dark/dark-mode-icon002.png')",
        darkLanguageSkill:
          "url('../src/assets/icons/dark/dark-mode-icon003.png')",
        darkGoTop: "url('../src/assets/icons/dark/dark-mode-gotop.png')",
        darkLogo: "url('../src/assets/images/dark/dark-mode-Logo.png')",
      },
      keyframes: {
        marquee1: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-200%)" },
        },
        ping2: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        marquee1: "marquee1 30s linear infinite",
        marquee2: "marquee2 30s linear infinite",
        ping2: "ping2 .8s infinite alternate",
      },
    },
  },
  variants: {},
  plugins: [],
};
