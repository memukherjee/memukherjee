import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import useElementPosition from "../hooks/useElementPosition";
import SlideUpText from "./SlideUpText";
import useWindowSize from "../hooks/useWindowSize";
import { CgArrowTopRight } from "react-icons/cg";

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
    const scrollStart = headingTop - window.innerHeight * 0.9;
    const scrollEnd = headingBottom + window.innerHeight * 0.9;

    const { scrollY } = useScroll();
    const physics = { damping: 15, mass: 0.27, stiffness: 55 };
    const leftMovingTextPosition = useSpring(
        useTransform(scrollY, [scrollStart, scrollEnd], [0, -800]),
        physics
    );
    const rightMovingTextPosition = useSpring(
        useTransform(scrollY, [scrollStart, scrollEnd], [-400, 400]),
        physics
    );

    const { isLg } = useWindowSize();

    const text = `${project.name}-${project.about}`;

    return isLg() ? (
        <Link
            style={{
                textAlign: index % 2 === 0 ? "left" : "right",
            }}
            to={`/projects/${project.slug}`}
        >
            <motion.h3
                ref={headingRef}
                style={{
                    x:
                        index % 2 === 0
                            ? rightMovingTextPosition
                            : leftMovingTextPosition,
                }}
            >
                <SlideUpText text={text} />
            </motion.h3>
        </Link>
    ) : (
        <>
            <motion.h3 className="font-bebas text-[6rem] leading-none flex flex-wrap justify-start gap-x-2">
                {text.split(" ").map((word, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: "100%" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        {word}
                    </motion.span>
                ))}
                <Link
                    className="text-primary text-base font-sans inline-block ml-auto my-3"
                    to={`/projects/${project.slug}`}
                >
                    <motion.span
                        initial={{ opacity: 0, y: "100%" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="uppercase border-2 border-primary px-3 py-2 rounded-full inline-flex items-center justify-between gap-x-1"
                    >
                        Check it out
                        <span className="text-lg">
                            <CgArrowTopRight />
                        </span>
                    </motion.span>
                </Link>
            </motion.h3>
        </>
    );
}
