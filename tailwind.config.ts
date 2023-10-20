/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Open Sans", "sans-serif"],
                bebas: ["Bebas Neue", "sans-serif"],
            },
            fontSize: {
                sm: "0.87rem",
                base: "1.08rem",
                lg: "1.25rem",
                xl: "1.75rem",
                giant: "10rem",
                hero: "22rem",
            },
            lineHeight: {
                hero: "20rem",
            },
            letterSpacing: {
                hero: "-1rem",
            },
            colors: {
                primary: "#777",
                secondary: "#aaa",
                accent: "#6666ff",
                dark: "#111",
            },
            backgroundColor: {
                primary: "#111",
                accent: "#6666ff",
            },
            animation: {
                "border-pulse": "border-pulse 5s ease-in-out infinite",
                "infinite-arrow":
                    "infinite-arrow 1s cubic-bezier(.175,.885,.32,1.275) infinite",
                spin: "spin 5s linear infinite",
            },
            keyframes: {
                "border-pulse": {
                    "0%,100%": {
                        "border-color": "rgba(255, 255, 255, 1)",
                    },
                    "50%": {
                        "border-color": "rgba(255, 255, 255, 0.25)",
                    },
                },
                "infinite-arrow": {
                    "100%": {
                        transform: "translateY(0)",
                    },
                },
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                ".min-h-screen": {
                    minHeight: ["100vh", "100dvh"],
                },
            });
        }),
    ],
};
