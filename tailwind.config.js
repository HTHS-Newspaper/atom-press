/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
	content: ["./app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				default: "#FFF8F8",
				defaultDark: "#97266D",

				bordermaroon: "#97266D",
				textmaroon: "#9F4040",
				headermaroon: "#6B243F",
				textpink: "#BB5194",
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
			},
			animation: {
				wiggle: "wiggle 200ms ease-in-out",
			},
		},
	},
	plugins: [],
};

module.exports = tailwindConfig;
