module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}"],
	mode: "jit",
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				NeueLight: ["NeueLight", "monospace"],
				NeueBold: ["NeueBold", "monospace"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
