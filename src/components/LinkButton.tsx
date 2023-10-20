import { ReactNode, memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

type LinkButtonProps = {
    to: string;
    children?: ReactNode;
    target?: string;
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
        backgroundColor: "#ffffff00",
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

const LinkButton = memo(
    ({ to, children = "Placeholder Text", target="_self" }: LinkButtonProps) => {
        return (
            <Link target={target} to={to}>
                <motion.div
                    initial="initial"
                    whileHover="hover"
                    animate="initial"
                    variants={buttonVariants}
                    transition={{ duration: 0.15, ease: [0.5, 0.71, 1, 1.5] }}
                    className="border bg-[#ffffff00] border-primary rounded-full transition-colors px-2 py-1 cursor-pointer relative overflow-hidden"
                >
                    <motion.span
                        variants={text1Variants}
                        transition={{
                            duration: 0.5,
                            ease: [0.175, 0.885, 0.32, 1.275],
                        }}
                        className="text-base block whitespace-nowrap translate-y-0"
                    >
                        {children}
                    </motion.span>
                    <motion.span
                        variants={text2Variants}
                        transition={{
                            duration: 0.5,
                            ease: [0.175, 0.885, 0.32, 1.275],
                        }}
                        className="text-base block whitespace-nowrap absolute inset-0 left-2 top-1 translate-y-[50]"
                        aria-hidden="true"
                    >
                        {children}
                    </motion.span>
                </motion.div>
            </Link>
        );
    }
);

export default LinkButton;
