/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial"],
      },
      colors: {
        form: "#EFEDED",
        test: "#706F6F",
        loginBotton: "#84ED82",
        main_green: "#88E186",
        sub_color: "#D9F8D9",
        hover_color: "#70CB6E",
        my_gray: "#8F8F8F",
        material_white: "#CBCBCB",
      },
      screens: {
        pc: "1792px",
      },
      width: {
        "parcent-12": "14%",
      },
    },
  },
  plugins: [],
};
