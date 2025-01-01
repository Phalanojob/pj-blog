module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files where Tailwind will be used
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Poppins", "sans"],
      },
      colors: {
        danger: {
          DEFAULT: "#F53F3F",
          2: "#A1151E",
          3: "#FBACA3",
          4: "#FFECE8",
        },
        success: {
          DEFAULT: "#00B42A",
          2: "#008026",
          3: "#7BE188",
          4: "#E8FFEA",
        },
        background: {
          DEFAULT: "#FFFFFF",
        },
        info: {
          DEFAULT: "#3491FA",
          2: "#072CA6",
          3: "#9FD4FD",
          4: "#E8F7FF",
        },
        primary: {
          DEFAULT: "#3564a8",
          2: "#000000",
          3: "#4E5969",
          4: "#86909C",
        },
        secondary: {
          DEFAULT: "#FFFFFF",
          2: "#f5f5f5",
        },
        description: {
          DEFAULT: "#C9CDD4",
          2: "#86909C",
          3: "#C9CDD4",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        blob: "blob 5s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(10px, -15px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-10px, 10px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
}
