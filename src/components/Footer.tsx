import LinkButton from "./LinkButton";
import { about } from "../assets/portfolio";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    const { socials } = about;
    const indiaLocalTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
    });
    const [localTime, setLocalTime] = useState(indiaLocalTime);
    useEffect(() => {
        const interval = setInterval(() => {
            setLocalTime(
                new Date().toLocaleTimeString("en-US", {
                    timeZone: "Asia/Kolkata",
                    hour12: false,
                    minute: "2-digit",
                    hour: "2-digit",
                })
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <footer className="px-6 py-12 flex flex-col items-center gap-y-4">
            <div className="w-full flex flex-col gap-y-2 md:flex-row justify-between items-center">

            <span className="local-time uppercase flex gap-4 text-base order-1 md:order-none">
                <span>{`${about.address.city}, ${about.address.countryCode}`}</span>
                <span className="text-secondary">{localTime}</span>
            </span>
            <span className="socials flex flex-wrap md:flex-nowrap justify-center lg:justify-between items-center gap-4">
                {socials.map((social, index) => (
                    <LinkButton key={index} to={social.url}>
                        {social.name}
                    </LinkButton>
                ))}
            </span>
            <span className="copyright text-base order-1 md:order-none">
                <span>&copy; {new Date().getFullYear()} &nbsp;</span>
                <span className="text-secondary">{about.fullName}</span>
            </span>
            </div>
            <span className="uppercase text-sm">design inspired by &nbsp;
                    <Link className="text-secondary underline normal-case" to="https://www.seyi.dev/" target="_blank">
                        seyi.dev
                    </Link>
            </span>
        </footer>
    );
}
