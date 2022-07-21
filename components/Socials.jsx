import { useState } from "react"
import Link from "next/link"

export default function Socials() {
    const [links, setLinks] = useState({
        Github: "https://github.com/devrusty",
        Discord: "https://discord.com/users/472530726613549066",
        Twitter: "https://twitter.com/devrusty_",
    })

    const linksElements = Object.keys(links).map(key => {
        return (
            <li key={key}>
                <Link href={links[key]}>{key}</Link>
            </li>
        )
    })

    return (
        <div className="socials">
            <h1>Socials</h1>
            <ul>
                {linksElements}
            </ul>
        </div>
    )
}