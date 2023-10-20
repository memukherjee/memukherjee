import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import useElementPosition from "../hooks/useElementPosition";
import useElementHeight from "../hooks/useElementHeight";

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
                className="text-giant font-bebas leading-[1] whitespace-nowrap relative group/heading"
            >
                <span
                    data-content={`${project.name}-${project.about}`}
                    className="inline-block w-full h-full absolute inset-0 before:content-[attr(data-content)] before:bg-gradient-to-b before:from-primary before:from-50% before:to-50% before:to-accent before:bg-clip-text before:text-transparent before:bg-[length:100%_200%] before:bg-[0%_0%] before:group-hover/heading:bg-[100%_100%] before:transition-all before:duration-300 before:ease-linear"
                ></span>
                {`${project.name}-${project.about}`}
            </motion.h1>
        </Link>
    );
}
