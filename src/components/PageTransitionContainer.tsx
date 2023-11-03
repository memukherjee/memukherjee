import { motion } from "framer-motion";
import { ReactNode } from "react";

type PageTransitionContainerProps = {
    children: ReactNode;
    className?: string;
};

const pageVariants = {
    pageInitial: {
        opacity: 0,
        scale: 0.25,
        y: 100,
    },
    pageAnimate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            // delayChildren: 0.35,
        },
    },
    pageExit: {
        opacity: 0,
        scale: 0.25,
        y: 100,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

export default function PageTransitionContainer({
    children,
    className = "",
}: PageTransitionContainerProps) {
    return (
        <motion.div
            className={className}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={pageVariants}
        >
            {children}
        </motion.div>
    );
}
