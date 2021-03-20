module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    nightwind: {
      transitionDuration: false,
      colorClasses: ["gradient"],
    },
    extend: {
      fontFamily: {
        sourcecode: ["Source Code Pro"],
      },
      scale: {
        102: "1.015",
      },
      animation: {
        mainfloat1: "mainfloat 8s infinite",
        mainfloat2: "mainfloat 6s infinite",
        mainfloat3: "mainfloat 10s infinite",
        mainfloat4: "mainfloat 7s infinite",
        subfloat1: "subfloat 7s infinite",
        subfloat2: "subfloat 9s infinite",
      },
      keyframes: {
        mainfloat: {
          "0%, 100%": {
            transform: "translatey(0px)",
          },
          "50%": {
            transform: "translatey(-10px)",
          },
        },
        subfloat: {
          "0%, 100%": {
            transform: "translatey(0px) rotate(-1deg)",
          },
          "50%": {
            transform: "translatey(-15px) rotate(1deg)",
          },
        },
      },
    },
  },
  variants: {
    backgroundColor: [
      "responsive",
      "group-hover",
      "first",
      "last",
      "odd",
      "even",
      "hover",
      "focus",
      "active",
      "visited",
      "disabled",
    ],
  },
  plugins: [require("nightwind")],
};
