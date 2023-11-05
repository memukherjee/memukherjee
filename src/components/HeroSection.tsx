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

export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { elementPosition } = useElementPosition(heroRef);
    const { bottom: heroBottom } = elementPosition;
    const scrollEnd = heroBottom + window.innerHeight * 0.75;
    console.log(scrollEnd);

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
            y: "100%",
        },
    };

    return (
        <section id="hero" className="hero overflow-hidde mb-16">
            <div
                ref={heroRef}
                className="top-container-wrapper overflow-hidden"
            >
                <motion.div
                    variants={heroContainerVariant}
                    transition={{ duration: 0.35, delay: 0.35, ease: easeOut }}
                    className="top-container flex justify-between items-start px-12"
                >
                    <motion.span
                        style={{
                            x: leftTextPosition,
                        }}
                    >
                        <HeroText text={about.role.split(" ")[0]} />
                    </motion.span>
                    <motion.span
                        style={{
                            scaleX: dashScale,
                        }}
                        className="text-hero leading-hero tracking-hero font-bebas hover:text-secondary transition-colors duration-200 ease-in-out"
                    >
                        &mdash;
                    </motion.span>
                    <motion.span
                        style={{
                            x: rightTextPosition,
                        }}
                    >
                        <HeroText text={about.role.split(" ")[1]} />
                    </motion.span>
                </motion.div>
            </div>

            <div className="bottom-container-wrapper overflow-hidden">
                <motion.div
                    variants={heroContainerVariant}
                    transition={{ duration: 0.35, delay: 0.7, ease: easeOut }}
                    className="bottom-container flex justify-between items-start gap-8 px-12"
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
                        className="about-me min-h-[270px] grow flex flex-col justify-between flex-wrap"
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
