import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

type LinkButtonProps = {
    to: string;
    children?: ReactNode;
};

const {
    theme,
    // content
} = tailwindConfig;

//TODO: Fix this any
// const config: any = resolveConfig({theme, content});
/*
    FIX: Fixed as for now but 
    only the custom defined 
    properties are accessible
*/
const twTheme = theme.extend;

const buttonVariants = {
    initial: {
        backgroundColor: "transparent",
        borderColor: twTheme.colors.primary,
    },
    hover: {
        backgroundColor: twTheme.backgroundColor.accent,
        color: twTheme.colors.dark,
        borderColor: twTheme.colors.accent,
    },
};

const text1Variants = {
    initial: {
        y: 0,
    },
    hover: {
        y: -50,
    },
};
const text2Variants = {
    initial: {
        y: 50,
    },
    hover: {
        y: 0,
    },
};

export default function LinkButton({ to, children }: LinkButtonProps) {
    return (
        <Link to={to}>
            <motion.div
                initial="initial"
                animate="initial"
                whileHover="hover"
                variants={buttonVariants}
                transition={{ duration: .15, ease: [0.5, 0.71, 1, 1.5] }}
                className="border border-primary rounded-full transition-colors px-2 py-1 cursor-pointer relative overflow-hidden"
            >
                <motion.span
                    variants={text1Variants}
                    transition={{
                        duration: .5,
                        ease: [0.175, 0.885, 0.32, 1.275],
                    }}
                    className="text-base block"
                >
                    {children ?? "Placeholder Text"}
                </motion.span>
                <motion.span
                    variants={text2Variants}
                    transition={{
                        duration: .5,
                        ease: [0.175, 0.885, 0.32, 1.275],
                    }}
                    className="text-base block absolute inset-0 left-2 top-1"
                    aria-hidden="true"
                >
                    {children ?? "Placeholder Text"}
                </motion.span>
            </motion.div>
        </Link>
    );
}
