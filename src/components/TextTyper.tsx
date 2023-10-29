import { AnimatePresence, motion } from "framer-motion";
type TextTyperProps = {
    text: string;
    interval?: number;
    className?: string;
};

export default function TextTyper({
    text,
    interval = 100,
    className = "",
}: TextTyperProps) {
    return (
        <AnimatePresence mode="wait">
            <motion.pre
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                key={text}
                className={className}
            >
                {text.split("").map((char, index) => {
                    return (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{
                                opacity: [0, 1],
                                scale: [0.5, 1],
                                y: [0, 0],
                                x: [0, 0],
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: interval / 1000,
                                ease: "easeInOut",
                                times: [0, 1],
                                delay: (index * interval) / 1000,
                            }}
                        >
                            {char}
                        </motion.span>
                    );
                })}
            </motion.pre>
        </AnimatePresence>
    );
}
