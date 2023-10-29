import { ReactNode, useEffect, useRef } from "react";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import usePageHeight from "../hooks/useElementHeight";
import { useLocation } from "react-router-dom";

type SmoothScrollProps = {
    children: ReactNode;
};

const SmoothScroll = ({ children }: SmoothScrollProps) => {
    // scroll container
    const scrollRef = useRef<HTMLDivElement>(null!); // ! means that it will never be null

    const { height: pageHeight } = usePageHeight(scrollRef); // get the height of the scroll container (page)

    const { scrollY } = useScroll(); // measures how many pixels user has scrolled vertically
    // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
    // ... based on current scroll position to translateY the document in a natural way
    // console.log(pageHeight);

    const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
    const physics = { damping: 15, mass: 0.27, stiffness: 55 }; // easing of smooth scroll
    const spring = useSpring(transform, physics); // apply easing to the negative scroll value

    const location = useLocation();
    useEffect(() => {
        const container = scrollRef.current;
        const body = document.body;
        const size = container.getBoundingClientRect().height;

        // console.log(pageHeight);
        // set the size of the body to be the sized of the container
        // its needed to keep a scrollbar since the container has a fixed position
        // see CSS
        body.style.height = `${size}px`;

        return () => {
            body.style.height = "";
        };
    }, [pageHeight, location]);

    return (
        <>
            <motion.div
                ref={scrollRef}
                style={{ y: spring }} // translateY of scroll container using negative scroll value
                className="scroll-container fixed top-0 left-0 w-full overflow-hidden will-change-transform"
            >
                {children}
            </motion.div>
            {/* blank div that has a dynamic height based on the content's inherent height */}
            {/* this is neccessary to allow the scroll container to scroll... */}
            {/* ... using the browser's native scroll bar */}
            {/* <div style={{ height: pageHeight }} /> */}
        </>
    );
};

export default SmoothScroll;
