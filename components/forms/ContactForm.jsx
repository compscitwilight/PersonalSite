export default function ContactForm() {
    let fields = {
        name: "",
        email: "",
        message: ""
    }

    function OnFieldChange(e) {
        const element = e.target
        const name = element.name.toLowerCase()

        fields[name] = element.value
    }

    function OnFormSubmit(e) {
        e.preventDefault()
    }

    return (
        <form onSubmit={OnFormSubmit}>
            <h1>Contact devrusty {"(email)"}</h1>
            <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input onChange={OnFieldChange} type="text" name="name" placeholder="Name" className="form-field contact-name"></input>
            </div>
            <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input onChange={OnFieldChange} type="email" name="email" placeholder="Email" className="form-field contact-email"></input>
            </div>
            <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea onChange={OnFieldChange} name="message" placeholder="Message" className="form-field contact-message"></textarea>
            </div>
            <button type="submit" className="btn-medium">Submit</button>
        </form>
    )
}