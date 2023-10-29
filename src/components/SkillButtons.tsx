import { BiCircle } from "react-icons/bi";
import { FaRegCheckCircle } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/portfolio";

type SkillButtonsProps = {
    selectedSkill: number;
    setSelectedSkill: Dispatch<SetStateAction<number>>;
};

const skillContainerVariants = {
    initial: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.15,
            ease: "easeInOut",
            when: "beforeChildren",
            staggerChildren: 0.25,
        },
    },
};

const skillButtonVariants = {
    initial: {
        opacity: 0,
        y: -20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.25,
            ease: "easeInOut",
        },
    },
};

export default function SkillButtons({
    selectedSkill,
    setSelectedSkill,
}: SkillButtonsProps) {
    return (
        <motion.ul
            initial="initial"
            whileInView="show"
            viewport={{ once: true }}
            variants={skillContainerVariants}
            className="flex flex-wrap justify-between gap-2"
        >
            {skills.map((skill, index) => (
                <motion.li
                    variants={skillButtonVariants}
                    className="text-secondary border border-current rounded-3xl px-4 cursor-pointer hover:bg-accent hover:text-dark transition-colors duration-200 ease-in-out mb-4 grow flex justify-between items-center"
                    key={index}
                    onClick={() => {
                        setSelectedSkill(index);
                    }}
                >
                    <span className="skill-name inline-block py-3 text-base font-normal">
                        {skill.name}
                    </span>
                    {index === selectedSkill ? (
                        <FaRegCheckCircle className="inline-block text-2xl" />
                    ) : (
                        <BiCircle className="inline-block text-2xl" />
                    )}
                    <input
                        type="radio"
                        name="skill"
                        className="hidden"
                        aria-label={skill.name}
                        aria-hidden="true"
                        aria-checked={index === selectedSkill}
                        value={index}
                        checked={index === selectedSkill}
                        onChange={() => {
                            setSelectedSkill(index);
                        }}
                    />
                </motion.li>
            ))}
        </motion.ul>
    );
}
