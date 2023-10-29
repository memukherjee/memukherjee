import { ReactNode } from "react";
import { Link } from "react-router-dom";

type SpringButtonProps = {
    followUpText: string;
    children: ReactNode;
    href?: string;
    className?: string;
};

export default function SpringButton({
    followUpText = "",
    children,
    href = "",
    className = "",
}: SpringButtonProps) {
    return (
        <Link
            data-content={followUpText}
            className={`resume-link ${className} border-2 border-current inline-block overflow-hidden relative before:content-[attr(data-content)] before:flex before:justify-center before:items-center before:absolute before:inset-0 before:transition-transform before:duration-300 before:ease-spring before:transform before:translate-x-full hover:before:translate-x-0`}
            to={href}
            rel="noreferrer"
            target="_blank"
        >
            {children}
        </Link>
    );
}
