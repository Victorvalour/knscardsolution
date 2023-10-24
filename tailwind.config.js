/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gothic: ["Dela Gothic One"],
        spaceGrotesk: ["Space Grotesk"],
        ibmPlexMono: ["IBM Plex Mono"],
      },
      colors: {
        cobalt: "#0047ab",
      },
    },
  },
  plugins: [],
};
