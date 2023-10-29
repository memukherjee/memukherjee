import { useParams } from "react-router-dom";

export default function Projects() {
    const { projectId } = useParams();
    return <div>Projects {projectId}</div>;
}
