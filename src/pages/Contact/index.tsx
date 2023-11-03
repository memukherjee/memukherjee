import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import TextInput from "../../components/TextInput";
import PageTransitionContainer from "../../components/PageTransitionContainer";

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_5hkrr1k",
                "template_efkwcyn",
                form.current ?? "",
                "v1zhJhzkp6pu7_S-v"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <PageTransitionContainer>
            <motion.form
                variants={{
                    pageInitial: {
                        opacity: 0,
                    },
                    pageAnimate: {
                        opacity: 1,
                        transition: {
                            duration: 0.35,
                            ease: "easeInOut",
                            staggerChildren: 0.2,
                        },
                    },
                    pageExit: {
                        opacity: 0,
                    },
                }}
                className="max-w-lg overflow-hidden mx-auto text-4xl min-h-[85vh] flex flex-col justify-center"
                ref={form}
                onSubmit={sendEmail}
            >
                <TextInput type="text" name="user_name" label="Name" />
                <TextInput type="email" name="user_email" label="Email" />
                <TextInput type="textarea" name="message" label="Message" />
                <motion.button
                    variants={{
                        pageInitial: {
                            opacity: 0,
                            y: -100,
                        },
                        pageAnimate: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.35,
                                ease: "easeInOut",
                            },
                        },
                        pageExit: {
                            opacity: 0,
                            y: 100,
                        },
                    }}
                    data-content="Click to send"
                    className="w-full mt-4 text-primary text-5xl font-bebas px-4 py-1 before:bg-secondary before:text-dark before:text-4xl border-2 border-current inline-block overflow-hidden relative before:content-[attr(data-content)] before:flex before:justify-center before:items-center before:absolute before:inset-0 before:transition-transform before:duration-300 before:ease-spring before:transform before:translate-x-full hover:before:translate-x-0"
                    type="submit"
                >
                    Send Message
                </motion.button>
            </motion.form>
        </PageTransitionContainer>
    );
}
