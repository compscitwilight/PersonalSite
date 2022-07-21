import Topbar from "../components/Topbar";
import ContactForm from "../components/forms/ContactForm";
import Socials from "../components/Socials";
import Head from "next/head"

export default function Contact() {
    return (
        <>
            <Head>
                <title>devrusty - Contact</title>
            </Head>
            <div className="content">
                <Socials />
                <ContactForm />
            </div>
        </>
    )
}