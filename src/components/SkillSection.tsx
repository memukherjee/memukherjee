import { useState } from "react";
import SkillButtons from "./SkillButtons";
import { skills } from "../assets/portfolio";
import TextTyper from "./TextTyper";

export default function SkillSection() {
    const [selectedSkill, setSelectedSkill] = useState(0);
    return (
        <section className="px-12 mb-40 flex justify-between gap-32 max-w-6xl mx-auto">
            <div className="left-side w-2/5">
                <h2 className="uppercase text-sm font-semibold mb-6">
                    <span>My Skills X</span>
                    <br />
                    <span>Tools</span>
                </h2>
                <SkillButtons
                    selectedSkill={selectedSkill}
                    setSelectedSkill={setSelectedSkill}
                />
            </div>
            <div
                style={{
                    color: skills[selectedSkill].color,
                    backgroundColor: "#000",
                }}
                className="right-side grow outline outline-offset-8 h-[410px] aspect-[4/3] px-4"
            >
                <div className="heading-bar flex justify-between items-center py-1 border-b-2 border-current mb-4">
                    <span className="text-xl icon">
                        {skills[selectedSkill].icon()}
                    </span>
                    {skills[selectedSkill].extensionName && (
                        <h3 className="text-sm font-light">
                            {skills[selectedSkill].fileName ?? "index"}
                            {"." + skills[selectedSkill].extensionName}
                        </h3>
                    )}
                </div>
                <TextTyper
                    interval={50}
                    text={skills[selectedSkill].code}
                    className="text-xs text-white font-mono text-left px-2 overflow-scroll"
                />
            </div>
        </section>
    );
}
