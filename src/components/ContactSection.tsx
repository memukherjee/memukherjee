import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HorizontalLine from "./HorizontalLine";
import SlideUpText from "./SlideUpText";
import { DIRECTION } from "../utils/constants";
import SpringButton from "./SpringButton";
import { about } from "../assets/portfolio";

export default function ContactSection() {
    const contactText =
        "LET'S TALK — LET'S COLLABORATE — SAY HELLO — WANNA BE STARTING SOMETHING?";
    return (
        <section className="px-12 mb-40 text-center">
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
                    <h1 className="relative uppercase text-giant font-bebas whitespace-nowrap w-fit my-8 flex justify-center items-center group/heading animate-loop-text hover:pause-animation">
                        <span aria-hidden="true">
                            <SlideUpText text={contactText} />
                        </span>
                        &nbsp; <SlideUpText text={contactText} /> &nbsp;
                    </h1>
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
