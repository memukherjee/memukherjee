import { AnimatePresence, motion } from "framer-motion";

type TextInputProps = {
    type: "text" | "textarea" | "email";
    name: string;
    label: string;
};

export default function TextInput({ type, name, label }: TextInputProps) {
    return (
        <AnimatePresence>
            <motion.div
                key={name}
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
                className="mb-2 relative flex justify-start items-start"
            >
                {type === "textarea" ? (
                    <>
                        <label
                            className="text-5xl h-16 tracking-wide bg-secondary text-dark px-2 py-1 leading-none inline-flex font-bebas items-center"
                            htmlFor={name}
                        >
                            {label}
                        </label>
                        <textarea
                            id={name}
                            className="w-full py-1 h-16 ps-2 text-lg leading-tight bg-transparent border-b-2 border-l-2 border-primary resize-none outline-none caret-primary"
                            name={name}
                        />
                    </>
                ) : (
                    <>
                        <label
                            className="text-5xl h-16 tracking-wide bg-secondary text-dark px-2 py-1 leading-none inline-flex items-center font-bebas"
                            htmlFor={name}
                        >
                            {label}
                        </label>
                        <input
                            id={name}
                            className="w-full h-16 ps-2 leading-none bg-transparent border-b-2 border-l-2 border-primary outline-none caret-primary"
                            type={type}
                            name={name}
                        />
                    </>
                )}
            </motion.div>
        </AnimatePresence>
    );
}
