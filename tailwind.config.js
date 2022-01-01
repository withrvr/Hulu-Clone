module.exports = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#06202A",
			},
			screens: {
				"3xl": "1600px",
				"4xl": "1800px",
				"5xl": "2000px",
				"6xl": "2200px",
			},
		},
		container: {
			center: true,
			padding: "1rem",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
