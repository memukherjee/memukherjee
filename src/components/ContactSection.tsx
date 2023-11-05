import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HorizontalLine from "./HorizontalLine";
import { DIRECTION } from "../utils/constants";
import SpringButton from "./SpringButton";
import { about } from "../assets/portfolio";
import TextLoop from "./TextLoop";

export default function ContactSection() {
    const contactText =
        "LET'S TALK — LET'S COLLABORATE — SAY HELLO — WANNA BE STARTING SOMETHING?";
    return (
        <section className="px-4 lg:px-12 mb-40 text-center">
            <div className="upper max-w-md mx-auto py-24 text-secondary text-base">
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {about.contactMessage}
                </motion.p>
            </div>
            <div className="lower">
                <HorizontalLine />
                <Link to="contact">
                    <TextLoop className="text-[6rem] leading-[.75]" text={contactText} />
                </Link>
                <HorizontalLine direction={DIRECTION.RIGHT} />
            </div>
            <SpringButton
                followUpText="Check Out"
                href={about.resume}
                className="text-primary text-5xl font-bebas px-4 py-1 mx-auto mt-24 before:bg-secondary before:text-dark before:text-4xl"
            >
                Resume
            </SpringButton>
        </section>
    );
}
