import { Link } from "react-router-dom";
import { easeOut, motion } from "framer-motion";
import LinkButton from "./LinkButton";
import { about } from "../assets/portfolio";
import useWindowSize from "../hooks/useWindowSize";

export default function Navbar() {
    const { isMd } = useWindowSize();
    return (
        <motion.nav
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="navbar pt-4 md:pt-8 pb-4 px-4 md:px-12 text-sm font-semibold flex flex-wrap md:flex-nowrap justify-between items-start md:items-center gap-y-2 md:gap-y-0 md:gap-x-12 uppercase"
        >
            <div className="nav-options-left flex justify-between md:items-center grow max-w-md">
                <Link
                    to="/"
                    className="nav__name text-secondary border-2 border-current animate-border-pulse inline-block p-1"
                >
                    <span className="leading-4 text-right inline-block">
                        <strong className="font-bold">
                            {about.name.first} <br /> {about.name.last}
                        </strong>
                    </span>
                </Link>
                {isMd() && (
                    <div className="nav__role">
                        <span>
                            {about.otherRoles.map((role, index) => (
                                <span key={index}>
                                    {role} <br />
                                </span>
                            ))}
                        </span>
                    </div>
                )}
            </div>
            <div className="nav-options-right flex flex-col md:flex-row justify-between items-left md:items-center md:grow gap-y-4 md:gap-y-0 md:gap-x-12">
                {!isMd() && (
                    <div className="nav__role">
                        <span>
                            {about.otherRoles.map((role, index) => (
                                <span key={index}>
                                    {role} <br />
                                </span>
                            ))}
                        </span>
                    </div>
                )}
                <div className="nav__status w-1/2 md:w-auto text-right md:text-left">
                    <span className="whitespace-pre">{about.message}</span>
                </div>
                <div className="w-1/2 md:w-auto">
                    <LinkButton to="/contact">Contact</LinkButton>
                </div>
            </div>
        </motion.nav>
    );
}
