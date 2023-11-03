import SlideUpText from "./SlideUpText";
import { motion } from "framer-motion";

type TextLoopProps = {
    text: string;
    speed?: number;
    className?: string;
};

export default function TextLoop({
    text,
    speed = 0.25,
    className = "",
}: TextLoopProps) {
    return (
        <motion.h1
            variants={{
                pageInitial: {
                    y: 100,
                },
                pageAnimate: {
                    y: 0,
                    transition: {
                        delay: 0.5,
                        duration: 0.5,
                        ease: "easeInOut",
                    },
                },
                pageExit: {
                    y: -100,
                },
            }}
            style={{
                animationDuration: `${text.length * speed}s`,
            }}
            className={`relative uppercase text-giant font-bebas whitespace-nowrap w-fit my-8 flex justify-center items-center group/heading animate-loop-text hover:pause-animation ${className}`}
        >
            <span aria-hidden="true">
                <SlideUpText className={className} text={text} />
            </span>
            &nbsp; <SlideUpText className={className} text={text} /> &nbsp;
        </motion.h1>
    );
}
