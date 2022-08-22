/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                base: "#000107",
            },
            animation: {
                "pulse-slow": "pulse 1s linear infinite",
            },
        },
    },
    plugins: [],
};
