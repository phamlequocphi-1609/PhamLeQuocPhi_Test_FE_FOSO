export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#FCE48C",
          100: "#F6C649",
          200: "#B97951",
          300: "#824C08",
          400: "#614F38",
          500: "#523C14",
          600: "#291E0A",
          700: "#1A1408",
          800: "#0F0C05",
          900: "#070503",
        },
        brown: "#824C08",
        lightYellow: "#FCE48C",
        mediumYellow: "#F6C649",
        red64: "#BC978C",
        brand500_65: "#523C14A3",
        gradient: {
          start: "#614F38",
          end: "rgba(164, 120, 40, 0.2)",
        },
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(355.08deg, #614F38 21.5%, rgba(164, 120, 40, 0.2) 91.79%)",
      },
    },
  },
  plugins: [],
};
