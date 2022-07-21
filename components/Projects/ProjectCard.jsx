import Link from "next/link"
import { useState } from "react"

export default function ProjectCard({ title, description, link }) {
    const [titleState, setTitleState] = useState(title)
    const [descState, setDescState] = useState(description)
    const [linkState, setLinkState] = useState(link)

    return (
        <div className="project-card">
            <h1>{titleState}</h1>
            <p>{descState}</p>
            <button className="btn-large">
                <Link href={linkState} passHref>
                    <a target="_blank">View</a>
                </Link>
            </button>
        </div>
    )
}