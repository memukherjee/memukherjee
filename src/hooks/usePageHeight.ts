import { useCallback, useLayoutEffect, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";

export default function usePageHeight(
    scrollRef: React.RefObject<HTMLDivElement>
) {
    // page scrollable height based on content length
    const [pageHeight, setPageHeight] = useState(0);

    // update scrollable height when browser is resizing
    const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
        for (const entry of entries) {
            setPageHeight(entry.contentRect.height);
        }
    }, []);

    // observe when browser is resizing
    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver((entries) =>
            resizePageHeight(entries)
        );
        scrollRef &&
            scrollRef.current &&
            resizeObserver.observe(scrollRef.current);
        return () => resizeObserver.disconnect();
    }, [scrollRef, resizePageHeight]);

    return { pageHeight, setPageHeight };
}
