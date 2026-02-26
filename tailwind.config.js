/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryCtaBtn: {
          defaultpry: "#FF1F1F",
          border: "#FF1F1F33",
          descriptiveText: "#FF6B35",
          shade10: "#FF1F1F1A"
        },
        secondaryCtaBtn: {
          defaultsec: "#00C853",
          border: "#00C85333",
          shade10: "#00C8531A"
        },

        defaultTextColor: "#FFFFFF",
        secondaryTextColor: "#D1D5DC",
        darkshade: "#99A1AF",
        background: {
          defaultbg: "#0A0A0A",
          footer: "#0F0F0F",
          reusableOne: "#161616", 
          reusableTwo: "#11111111", 
        },
      },
      backgroundImage: {
        'gradientOne': "linear-gradient(to bottom, #1A1A1A 30%, #0F0F0F 95%)",
        'gradientTwo': 'linear-gradient(to bottom, #11111111 5%, #0A0A0A 65%)',
        'gradientThree': "linear-gradient(to bottom, #0A0A0A 0%, #1A1A1A 20%, #0A0A0A 100%)"
      },
    },
  },
  plugins: [],
}

