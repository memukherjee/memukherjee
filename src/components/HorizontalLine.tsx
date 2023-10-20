import { easeOut, motion } from "framer-motion";
import { DIRECTION } from "../utils/constants";

type HorizontalLineProps = {
    direction?: DIRECTION.LEFT | DIRECTION.RIGHT;
};

export default function HorizontalLine({
    direction = DIRECTION.LEFT,
}: HorizontalLineProps) {
    return (
        <div className="wrapper relative overflow-hidden h-1">
            <motion.span
                initial={{ x: direction === DIRECTION.LEFT ? "-100%" : "100%" }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: easeOut }}
                className="horizontal-line inline-block h-[3px] w-full bg-current absolute left-0 top-0 origin-left"
            ></motion.span>
        </div>
    );
}
