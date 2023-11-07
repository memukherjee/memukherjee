import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type LazyImageProps = {
    src: string;
    placeholder: string;
    alt?: string;
    className?: string;
};

export default function LazyImage({
    src,
    placeholder,
    alt = "",
    className = "",
}: LazyImageProps) {
    const [imgLoaded, setImgLoaded] = useState(false);
    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setImgLoaded(true);
    }, [src]);
    return (
        <AnimatePresence>
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                key={imgLoaded ? "loaded" : "placeholder"}
                src={imgLoaded ? src : placeholder}
                alt={alt}
                className={`${className}`}
            />
        </AnimatePresence>
    );
}
