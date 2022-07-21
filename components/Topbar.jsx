import Link from "next/link"
import { useRouter } from "next/router"

export default function Topbar({ links }) {
    const router = useRouter()
    const pathName = router.pathname

    let skillsLink = <Link href="/">Skills</Link>

    if (pathName == "/")
        skillsLink = <Link href="#skills-list-container">Skills</Link>

    return (
        <div className="topbar-container">
            <Link href="/">devrusty</Link>
            <div className="topbar">
                {skillsLink}
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    )
}