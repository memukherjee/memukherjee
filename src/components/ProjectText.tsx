import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import useElementPosition from "../hooks/useElementPosition";
import useElementHeight from "../hooks/useElementHeight";
import SlideUpText from "./SlideUpText";

type ProjectTextProps = {
    project: {
        name: string;
        about: string;
        slug: string;
    };
    index: number;
};

export default function ProjectText({ project, index }: ProjectTextProps) {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const { elementPosition } = useElementPosition(headingRef);
    const { top: headingTop, bottom: headingBottom } = elementPosition;
    const { height: fullPageHeight } = useElementHeight();
    const scrollStart =
        fullPageHeight === 0
            ? 0
            : (headingTop - window.innerHeight * 0.9) / fullPageHeight;
    const scrollEnd =
        fullPageHeight === 0
            ? 0
            : (headingBottom + window.innerHeight * 0.75) / fullPageHeight;

    const { scrollYProgress } = useScroll();
    const physics = { damping: 15, mass: 0.27, stiffness: 55 };
    const leftMovingTextPosition = useSpring(
        useTransform(scrollYProgress, [scrollStart, scrollEnd], [0, -800]),
        physics
    );
    const rightMovingTextPosition = useSpring(
        useTransform(scrollYProgress, [scrollStart, scrollEnd], [-400, 400]),
        physics
    );

    const text = `${project.name}-${project.about}`;

    return (
        <Link
            style={{
                textAlign: index % 2 === 0 ? "left" : "right",
            }}
            to={`/projects/${project.slug}`}
        >
            <motion.h1
                ref={headingRef}
                style={{
                    x:
                        index % 2 === 0
                            ? rightMovingTextPosition
                            : leftMovingTextPosition,
                }}
            >
                <SlideUpText text={text} />
            </motion.h1>
        </Link>
    );
}
