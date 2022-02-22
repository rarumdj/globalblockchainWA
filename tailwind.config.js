module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontSize: {
        "5xl": [
          "3rem",
          {
            lineHeight: "60px",
          },
        ],
      },
    },
  },
  plugins: [],
};
