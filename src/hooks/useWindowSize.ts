import { useEffect, useState } from "react";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    useEffect(() => {
        const resizeHandeler = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", resizeHandeler);
        return () => window.removeEventListener("resize", resizeHandeler);
    }, []);

    const isSm = () => windowSize.width >= 640 && windowSize.width < 768;
    const isMd = () => windowSize.width >= 768 && windowSize.width < 1024;
    const isLg = () => windowSize.width >= 1024;

    return { windowSize, isSm, isMd, isLg };
}
