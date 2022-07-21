import { useState } from "react"
import Topbar from "../components/Topbar"
import Head from "next/head"
import Link from "next/link"

export default function Page404({ errorMsg }) {
    const [msg, setMsg] = useState(errorMsg)

    return (
        <>
            <Head>
                <title>404 - devrusty</title>
            </Head>
            <div className="404-status">
                <div className="content">
                    <h1>404 - Not found</h1>
                    <h3>{msg || "Uh oh, looks like that page couldn't be found!"}</h3>
                    <h4>
                        <Link href="/">Return to home page.</Link>
                    </h4>
                </div>
            </div>
        </>
    )
}