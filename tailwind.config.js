export default {
    darkMode: "media", // or 'media' or 'class'
    safelist: [
      {
        pattern: /(bg|stroke|fill)-maid-(100|200|300|400|500|600|border)/,
      },
    ],
    theme: {
      extend: {
        maxWidth: {
          "8xl": "90rem",
          "9xl": "100rem",
          "10xl": "110rem",
        },
        fontFamily: {
          open: ["Open Sans", "sans-serif"],
          montserrat: ["Montserrat", "sans-serif"],
        },
        colors: {
          maid: {
            100: "#ffe6f9",
            200: "#ffb3ed",
            300: "#ff80e1",
            400: "#ff4dd5",
            500: "#ff1ac9",
            600: "#cc009c",
          },
          abyss: {
            100: "#9900ff",
            200: "#8a00e6",
            300: "#7a00cc",
            400: "#6b00b3",
            500: "#5c0099",
            600: "#4c0080",
            700: "#3d0066",
            800: "#2e004d",
            900: "#1f0033",
            1000: "#0f001a",
            1100: "#030005"
          },
          nett: {
            kuro: "#944dff",
            maid: "#ff00c3",
          },
        },
        translate: {
          110: "30rem",
          120: "40rem",
          "-110": "-30rem",
          "-120": "-40rem",
        },
        margin: {
          110: "30rem",
          120: "40rem",
          130: "50rem",
          140: "60rem",
          "-110": "-30rem",
          "-120": "-40rem",
        },
      },
      zIndex: {
        0: 0,
        10: 10,
        20: 20,
        25: 25,
        30: 30,
        40: 40,
        45: 45,
        50: 50,
        75: 75,
        100: 100,
        auto: "auto",
      },
    },
    plugins: [],
  };