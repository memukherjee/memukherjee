/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Open Sans", "sans-serif"],
                bebas: ["Bebas Neue", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            fontSize: {
                xs: "0.8rem",
                sm: "0.87rem",
                base: "1.08rem",
                lg: "1.25rem",
                xl: "1.75rem",
                giant: "10rem",
                hero: "min(22rem, 22vw)",
            },
            lineHeight: {
                hero: "min(20rem, 20vw)",
            },
            letterSpacing: {
                hero: "-1rem",
            },
            colors: {
                primary: "#777",
                secondary: "#aaa",
                accent: "#EBD762",
                dark: "#111",
            },
            backgroundColor: {
                primary: "#111",
                secondary: "#777",
                accent: "#EBD762",
                light: "#aaa",
            },
            backgroundImage: {
                "conic-gradient":
                    "conic-gradient(from var(--conic-border-angle), #111, #222 50%, #111), conic-gradient(from var(--conic-border-angle), transparent 20%, #777, #aaa)",
            },
            transitionTimingFunction: {
                in: "cubic-bezier(0.4, 0, 1, 1)",
                out: "cubic-bezier(0, 0, 0.2, 1)",
                "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
                spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            },
            animation: {
                "border-pulse": "border-pulse 5s ease-in-out infinite",
                "infinite-arrow":
                    "infinite-arrow 1s cubic-bezier(.175,.885,.32,1.275) infinite",
                spin: "spin 5s linear infinite",
                "loop-text": "loop-text 15s linear infinite",
                "bg-spin": "bg-spin 7s linear infinite",
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
                "loop-text": {
                    "0%": {
                        transform: "translateX(0)",
                    },
                    "100%": {
                        transform: "translateX(-50%)",
                    },
                },
                "bg-spin": {
                    to: {
                        "--conic-border-angle": "1turn",
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
                ".pause-animation": {
                    animationPlayState: "paused",
                },
            });
        }),
    ],
    future: {
        hoverOnlyWhenSupported: true,
    },
};
