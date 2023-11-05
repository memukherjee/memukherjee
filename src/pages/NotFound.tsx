import { motion } from "framer-motion";
import PageTransitionContainer from "../components/PageTransitionContainer";

export default function NotFound() {
    return (
        <PageTransitionContainer className="min-h-screen text-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full md:-translate-y-3/4 overflow-hidden">
                <motion.span
                    variants={{
                        pageInitial: {
                            opacity: 0,
                            y: 100,
                        },
                        pageAnimate: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.35,
                                ease: "easeInOut",
                            },
                        },
                        pageExit: {
                            opacity: 0,
                            y: -100,
                            transition: {
                                duration: 0.35,
                                ease: "easeInOut",
                            },
                        },
                    }}
                    className="inline-block text-primary text-[6rem] md:text-[8rem] lg:text-giant font-bebas "
                >
                    404 Not Found
                </motion.span>
            </div>
        </PageTransitionContainer>
    );
}
