import { useRouter } from "next/router"
import { useState } from "react"

export default function UploadImageForm() {
    const router = useRouter()

    function OnFileUpload(e) {
        const element = e.target
        const objectUrl = URL.createObjectURL(element.value)

        location.href = objectUrl
    }

    function OnFormSubmit(e) {
        const element = e.target
    }

    return (
        <form onSubmit={OnFormSubmit} className="upload-image-form">
            <div className="form-group">
                <label htmlFor="image-form-image">Image</label>
                <input onChange={OnFileUpload} type="file" className="form-field image-form-image"></input>
            </div>
            <button className="btn-medium">Upload</button>
        </form>
    )
}