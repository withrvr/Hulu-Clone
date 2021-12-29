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
		},
		container: {
			center: true,
			padding: "1rem",
		},
		screens: {
			sm: "540px",
			md: "720px",
			lg: "960px",
			xl: "1140px",
			"2xl": "1320px",
			"3xl": "1600px",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
