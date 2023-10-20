import { RefObject, useCallback, useLayoutEffect, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";

export default function useElementHeight(
    scrollRef?: RefObject<HTMLElement>
) {
    // page scrollable height based on content length
    const [height, setHeight] = useState(0);

    // update scrollable height when browser is resizing
    const resizeHeight = useCallback((entries: ResizeObserverEntry[]) => {
        for (const entry of entries) {
            setHeight(entry.contentRect.height);
        }
    }, []);

    // observe when browser is resizing
    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver((entries) =>
            resizeHeight(entries)
        );
        if(scrollRef && scrollRef.current)
            resizeObserver.observe(scrollRef.current);
        else
            resizeObserver.observe(document.body);
        return () => resizeObserver.disconnect();
    }, [scrollRef, resizeHeight]);

    return { height, setHeight };
}
