import UploadImageForm from "../../components/forms/UploadImageForm";

export default function Upload() {
    return (
        <>
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