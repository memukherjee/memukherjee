import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import TextInput from "../../components/TextInput";
import PageTransitionContainer from "../../components/PageTransitionContainer";

export default function Contact() {
    const [formData, setFormData] = useState({
        sender_name: "",
        sender_email: "",
        message: "",
    });

    const [buttonText, setButtonText] = useState({
        primary: "Send Message",
        secondary: "Click to send",
    });

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        if (
            !formData.sender_name ||
            !formData.sender_email ||
            !formData.message
        ) {
            setButtonText({
                primary: "Empty Fields",
                secondary: "Please fill out all fields",
            });
            setTimeout(() => {
                setButtonText({
                    primary: "Send Message",
                    secondary: "Click to send",
                });
            }, 5000);
            return;
        }
        setButtonText({
            primary: "Please wait",
            secondary: "Sending...",
        });
        emailjs
            .send(
                "service_5hkrr1k",
                "template_efkwcyn",
                formData,
                "v1zhJhzkp6pu7_S-v"
            )
            .then(
                (result) => {
                    setButtonText({
                        primary: "Message Sent",
                        secondary: "Thanks for reaching out!",
                    });
                    setFormData({
                        sender_name: "",
                        sender_email: "",
                        message: "",
                    });
                    setTimeout(() => {
                        setButtonText({
                            primary: "Send Message",
                            secondary: "Click to send",
                        });
                    }, 5000);
                    console.log(result);
                },
                (error) => {
                    setButtonText({
                        primary: "Error",
                        secondary: "Please try again",
                    });
                    setTimeout(() => {
                        setButtonText({
                            primary: "Send Message",
                            secondary: "Click to send",
                        });
                    }, 5000);
                    console.error(error);
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
                className="max-w-lg overflow-hidden mx-auto text-2xl lg:text-4xl min-h-[75vh] md:min-h-[85vh] flex flex-col justify-center px-4"
                onSubmit={sendEmail}
            >
                <TextInput
                    value={formData.sender_name}
                    setValue={setFormData}
                    type="text"
                    name="sender_name"
                    label="Name"
                />
                <TextInput
                    value={formData.sender_email}
                    setValue={setFormData}
                    type="email"
                    name="sender_email"
                    label="Email"
                />
                <TextInput
                    value={formData.message}
                    setValue={setFormData}
                    type="textarea"
                    name="message"
                    label="Message"
                />
                <motion.button
                    variants={{
                        pageInitial: {
                            opacity: 0,
                            y: 100,
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
                            y: -100,
                        },
                    }}
                    data-content={buttonText.secondary}
                    className="w-fit lg:w-full self-center mt-4 text-primary text-3xl font-bebas px-4 py-1 before:bg-secondary before:text-dark before:text-4xl border-2 border-current inline-block overflow-hidden relative lg:before:content-[attr(data-content)] before:flex before:justify-center before:items-center before:absolute before:inset-0 before:transition-transform before:duration-300 before:ease-spring before:transform before:translate-x-full hover:before:translate-x-0"
                    type="submit"
                >
                    {buttonText.primary}
                </motion.button>
                <motion.span
                    variants={{
                        pageInitial: {
                            opacity: 0,
                            y: 100,
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
                            y: -100,
                        },
                    }}
                    className="lg:hidden self-center text-sm uppercase font-normal"
                >
                    {buttonText.secondary}
                </motion.span>
            </motion.form>
        </PageTransitionContainer>
    );
}
