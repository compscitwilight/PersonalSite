import ProjectCard from "../components/Projects/ProjectCard"
import { useState } from "react";
import ProjectsListData from "../data/projectsList.json";

export default function Projects() {
    const [projects, setProjects] = useState(ProjectsListData)

    const projectCards = Object.keys(projects).map(key => {
        const project = projects[key]

        return (
            <ProjectCard
                key={project}
                title={project.name}
                description={project.description}
                link={project.link}
            ></ProjectCard>
        )
    })

    return (
        <>
            <div className="content">
                <h1>Projects</h1>
                <div className="projects-container">{projectCards}</div>
            </div>
        </>
    )
}