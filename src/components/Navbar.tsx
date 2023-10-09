import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";
import { about } from "../assets/portfolio";
import { easeOut, motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="navbar pt-8 pb-4 px-12 text-sm font-semibold flex justify-between items-center gap-12 uppercase"
        >
            <div className="nav-options-left flex justify-between items-center grow max-w-md">
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
                <div className="nav__role">
                    <span>
                        {about.otherRoles.map((role, index) => (
                            <span key={index}>
                                {role} <br />
                            </span>
                        ))}
                    </span>
                </div>
            </div>
            <div className="nav-options-right flex justify-end items-center grow gap-12">
                <div className="nav__status">
                    <span className="whitespace-pre">{about.message}</span>
                </div>
                <ul className="nav-link flex justify-between items-center gap-4">
                    <li>
                        <LinkButton to="/contact">Contact</LinkButton>
                    </li>
                </ul>
            </div>
        </motion.nav>
    );
}
