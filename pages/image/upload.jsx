import UploadImageForm from "../../components/forms/UploadImageForm";
import Head from "next/head"
import Topbar from "../../components/Topbar";

export default function Upload() {
    return (
        <>
            <Head>
                <title>devrusty - Upload Image</title>
            </Head>
            <div className="content">
                <h1>Image Upload</h1>
                <p>
                    Why does this exist?: Simple, I need a place to upload images for sharing purposes.
                </p>
                <UploadImageForm></UploadImageForm>
            </div>
        </>
    )
}