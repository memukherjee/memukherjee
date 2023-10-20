import HorizontalLine from "./HorizontalLine";
import { DIRECTION } from "../utils/constants";
import { projects } from "../assets/portfolio";
import ProjectText from "./ProjectText";
import { Fragment } from "react";

export default function ProjectsSection() {
    return (
        <section id="projects-section" className="projects-section px-12 mb-40">
            {projects.map((project, index) => (
                <Fragment key={index}>
                    <HorizontalLine
                        direction={
                            index % 2 === 0 ? DIRECTION.LEFT : DIRECTION.RIGHT
                        }
                    />
                    <div className="project-box py-4 group">
                        <header className="mt-6 flex justify-end items-center font-semibold text-sm uppercase pe-40">
                            <div
                                style={
                                    index !== 0
                                        ? {
                                            justifyContent: "flex-end",
                                        }
                                        : {}
                                }
                                className="w-full max-w-4xl flex justify-between items-center"
                            >
                                {index === 0 && (
                                    <p className="whitespace-pre">
                                        {`Featured \nProjects(${projects.length})`}
                                    </p>
                                )}
                                <p className="whitespace-pre group-hover:text-secondary transition-colors duration-200 ease-in-out">
                                    {`${project.genere} / \n${project.stack}`}
                                </p>
                            </div>
                        </header>
                        <ProjectText project={project} index={index} />
                    </div>
                </Fragment>
            ))}
            <HorizontalLine
                direction={
                    projects.length % 2 === 0 ? DIRECTION.LEFT : DIRECTION.RIGHT
                }
            />
        </section>
    );
}
