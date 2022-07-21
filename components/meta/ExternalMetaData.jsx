import Head from "next/head"

export default function ExternalMetaData() {
    return (
        <Head>
            <title>devrusty</title>
            <meta content="devrusty" property="og:title" />
            <meta content="devrusty is a web developer." property="og:description" />
            <meta content="https://devrusty.herokuapp.com" property="og:url" />
            <meta content="../public/favicon.ico" property="og:image" />
            <meta content="#9FFFB2" data-react-helmet="true" name="theme-color" />
        </Head>
    )
}