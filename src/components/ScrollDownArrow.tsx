import { BsArrowDownShort } from "react-icons/bs";

export default function ScrollDownArrow() {
    return (
        <a
            href="#projects-section"
            className="relative overflow-hidden inline-flex cursor-pointer group"
        >
            <div className="rotating-circle absolute inset-0 rounded-full border-2 border-dashed animate-spin border-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <span className="text-xl text-secondary -translate-y-full animate-infinite-arrow">
                <BsArrowDownShort />
                <span className="absolute top-full">
                    <BsArrowDownShort />
                </span>
            </span>
        </a>
    );
}
