import LinkButton from "./LinkButton";
import { about } from "../assets/portfolio";
import { useEffect, useState } from "react";

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
        <footer className="flex flex-col gap-y-2 md:flex-row justify-between items-center px-6 py-12">
            <span className="local-time uppercase flex gap-4 text-base">
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
            <span className="copyright text-base">
                <span>&copy; {new Date().getFullYear()} &nbsp;</span>
                <span className="text-secondary">{about.fullName}</span>
            </span>
        </footer>
    );
}
