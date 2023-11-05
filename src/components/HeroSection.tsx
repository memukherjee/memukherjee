import {
    easeOut,
    motion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { useRef } from "react";
import { about } from "../assets/portfolio";
import HeroText from "./HeroText";
import ScrollDownArrow from "./ScrollDownArrow";
import useElementPosition from "../hooks/useElementPosition";
import useWindowSize from "../hooks/useWindowSize";

export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { elementPosition } = useElementPosition(heroRef);
    const { bottom: heroBottom } = elementPosition;
    const scrollEnd = heroBottom + window.innerHeight * 0.75;
    const { isLg, isMd } = useWindowSize();

    const physics = { damping: 15, mass: 0.27, stiffness: 55 };

    const { scrollY } = useScroll();
    const dashScale = useSpring(
        useTransform(scrollY, [0, scrollEnd], [1.75, 4]),
        physics
    );
    const leftTextPosition = useSpring(
        useTransform(scrollY, [0, scrollEnd], [0, -200]),
        physics
    );
    const rightTextPosition = useSpring(
        useTransform(scrollY, [0, scrollEnd], [0, 230]),
        physics
    );

    const heroContainerVariant = {
        pageInitial: {
            y: "100%",
        },
        pageAnimate: {
            y: 0,
        },
        pageExit: {
            y: "-100%",
        },
    };

    return (
        <section id="hero" className="hero overflow-hidde mb-16 px-4 lg:px-0">
            <div
                ref={heroRef}
                className="top-container-wrapper overflow-hidden pr-4 lg:pr-0"
            >
                <motion.div
                    variants={heroContainerVariant}
                    transition={{ duration: 0.35, delay: 0.35, ease: easeOut }}
                    className="top-container flex flex-wrap lg:flex-nowrap justify-between items-start lg:px-12"
                >
                    <motion.span
                        style={
                            isLg()
                                ? {
                                    x: leftTextPosition,
                                }
                                : {}
                        }
                    >
                        <HeroText text={about.role.split(" ")[0]} />
                    </motion.span>
                    <motion.span
                        style={
                            isLg()
                                ? {
                                    scaleX: dashScale,
                                }:isMd() ? {
                                    scaleX: 2,
                                }
                                : {
                                    scaleX: 1.75,
                                    transformOrigin: "right",
                                }
                        }
                        className="text-[10rem] md:text-[12rem] lg:text-hero leading-none lg:leading-hero tracking-tighter lg:tracking-hero font-bebas hover:text-secondary transition-colors duration-200 ease-in-out"
                    >
                        &mdash;
                    </motion.span>
                    <motion.span
                        style={
                            isLg()
                                ? {
                                    x: rightTextPosition,
                                }
                                : {}
                        }
                    >
                        <HeroText text={about.role.split(" ")[1]} />
                    </motion.span>
                </motion.div>
            </div>

            <div className="bottom-container-wrapper overflow-hidden">
                <motion.div
                    variants={heroContainerVariant}
                    transition={{ duration: 0.35, delay: 0.7, ease: easeOut }}
                    className="bottom-container flex flex-wrap lg:flex-nowrap justify-between items-stretch gap-8 lg:px-12"
                >
                    <span>
                        <HeroText text={about.role.split(" ")[2]} />
                    </span>
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 0.35,
                            delay: 0.8,
                            ease: easeOut,
                        }}
                        className="about-me min-w-[300px] grow flex flex-col justify-between flex-wrap gap-y-4 pb-12"
                    >
                        <p className="whitespace-break-spaces text-justify">
                            <span className="text-primary text-sm uppercase font-semibold me-3">
                                About
                            </span>
                            <span className="text-base text-secondary leading-4 tracking-tight">
                                {about.bio}
                            </span>
                        </p>
                        <div className="flex justify-between items-center">
                            <span className="text-base">Scroll Down</span>
                            <ScrollDownArrow />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
