import { useParams } from "react-router-dom";
import {
    AnimatePresence,
    motion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa6";
import { projects } from "../../assets/portfolio";
import NotFound from "../NotFound";
import TextLoop from "../../components/TextLoop";
import ProjectLink from "../../components/ProjectLink";
import useElementHeight from "../../hooks/useElementHeight";
import { useState } from "react";
import PageTransitionContainer from "../../components/PageTransitionContainer";
import LazyImage from "../../components/LazyImage";

export default function Projects() {
    const { projectId } = useParams();
    const currentProject = projects.find(
        (project) => project.slug === projectId
    );

    const { height: pageHeight } = useElementHeight();
    const { scrollY } = useScroll();
    const transform = useTransform(scrollY, [0, pageHeight], [0, pageHeight]);
    const physics = { damping: 15, mass: 0.27, stiffness: 55 }; // easing of smooth scroll
    const spring = useSpring(transform, physics);

    const [previewVisible, setPreviewVisible] = useState(false);

    return currentProject ? (
        <PageTransitionContainer>
            <section className="mb-24">
                <div
                    style={{
                        backgroundImage: `url(${currentProject.placeholder})`,
                    }}
                    className="parallax-hero-img relative overflow-hidden w-full h-[25vh] md:h-[60dvh] bg-cover bg-center"
                >
                    <div className="blur-backdrop absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />
                    <motion.div
                        style={{
                            y: spring,
                            x: "-50%",
                        }}
                        className="absolute bottom-0 left-1/2 w-full md:w-max h-[calc(100%+181px)] md:h-[calc(100%+95px)]"
                    >
                        <LazyImage
                            className="h-full w-full object-fill"
                            src={currentProject.image}
                            placeholder={currentProject.placeholder}
                            alt={currentProject.name}
                        />
                    </motion.div>
                </div>
                <div className="top-container overflow-hidden">
                    <TextLoop
                        className="text-[6rem] md:text-[10rem] lg:text-[16rem] leading-[.75]"
                        text={`${currentProject.name} - ${currentProject.about}`}
                        speed={0.4}
                    />
                </div>
                <div className="bottom-container px-4 lg:px-12 flex flex-col lg:flex-row justify-between gap-y-8 lg:gap-x-24">
                    <div className="skills text-lg text-center font-semibold flex flex-wrap justify-between lg:justify-start items-start gap-2 grow">
                        {currentProject.technologies.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 grow lg:grow-0 bg-conic-gradient bg-[length:97%_96%,cover] bg-center bg-no-repeat animate-bg-spin"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className="project-description lg:max-w-sm">
                        <p className="text-secondary text-base text-justify mb-12">
                            {currentProject.description}
                        </p>
                        <div className="project-links flex flex-wrap lg:flex-nowrap justify-end gap-x-4 lg:justify-between items-center">
                            {currentProject.livePreview && (
                                <ProjectLink
                                    Icon={FaLink}
                                    text="Deployment"
                                    url={currentProject.livePreview}
                                />
                            )}
                            {currentProject.sourceCode && (
                                <ProjectLink
                                    Icon={FaGithub}
                                    text="Github"
                                    url={currentProject.sourceCode}
                                />
                            )}
                        </div>
                    </div>
                </div>
                {currentProject.livePreview &&
                    currentProject.slug !== "paul-bot" && (
                        <div className="preview-wrapper mt-24 hidden lg:block">
                            <div className="preview relative px-12 flex justify-center">
                                <AnimatePresence>
                                    {!previewVisible && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                ease: "easeOut",
                                            }}
                                            onClick={() =>
                                                setPreviewVisible(true)
                                            }
                                            className="preview-cover absolute inset-0 left-1/2 -translate-x-1/2 bg-secondary h-[500px] aspect-video"
                                        >
                                            <button className="text-dark font-bebas font-semibold text-5xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-dark px-4 py-2 flex justify-between gap-2">
                                                <span className="bg-dark text-primary p-1">
                                                    <currentProject.icon />
                                                </span>
                                                <span className="py-1">
                                                    Show Preview
                                                </span>
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <iframe
                                    className="bg-white outline outline-offset-8 outline-primary h-[500px] aspect-video"
                                    src={currentProject.livePreview}
                                />
                            </div>
                        </div>
                    )}
            </section>
        </PageTransitionContainer>
    ) : (
        <NotFound />
    );
}
