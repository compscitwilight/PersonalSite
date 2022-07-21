import Link from "next/link"

export default function Header() {
    const briefDescription = "I am a young and passionate web developer who mainly uses Javascript and Typescript."

    return (
        <span className="header page-section">
            <h1>
                👋 Hello, {"I'm"} <Link href="https://github.com/devrusty">devrusty</Link>
            </h1>
            <p>{briefDescription}</p>
        </span>
    )
}