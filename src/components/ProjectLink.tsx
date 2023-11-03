import { IconType } from "react-icons";
import { Link } from "react-router-dom";

type ProjectLinkProps = {
    Icon: IconType;
    text: string;
    url?: string;
};

export default function ProjectLink({ Icon, text, url="" }: ProjectLinkProps) {
    return (
        <Link
            className="relative overflow-hidden border-2 border-primary px-2 py-1 rounded-full transition-all duration-300 ease-in-out group/project-link bg-gradient-to-b from-dark to-primary from-50% to-50% bg-[length:100%_200%] bg-[0%_0%] hover:text-dark hover:bg-[100%_100%]"
            to={url}
            target="_blank"
        >
            <span className="flex justify-between items-center gap-x-2 uppercase">
                <span className="link-icon text-lg">
                    <Icon />
                </span>
                <span>{text}</span>
            </span>
        </Link>
    );
}
