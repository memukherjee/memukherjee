import { RefObject, useEffect, useState } from "react";

export default function useElementTop(elementRef: RefObject<HTMLElement>) {
    const [elementPosition, setElementPosition] = useState({
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    });

    useEffect(() => {
        if (elementRef.current) {
            setElementPosition({
                top: elementRef.current.offsetTop,
                bottom:
                    elementRef.current.offsetTop +
                    elementRef.current.offsetHeight,
                left: elementRef.current.offsetLeft,
                right:
                    elementRef.current.offsetLeft +
                    elementRef.current.offsetWidth,
            });
        }
    }, [elementRef]);

    return { elementPosition, setElementPosition };
}
