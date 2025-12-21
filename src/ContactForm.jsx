import { useState } from "react";
import "./contactform.css";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });


    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

        const handleSubmit = (e) => {
        e.preventDefault();


        if (!formData.name || !formData.email || !formData.message) {
            setStatus("Please fill in all fields.");
            return;
        }

        console.log("Form submitted:", formData);
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

        return (
        <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contact Me</h2>

            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>Message</label>
                <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Send Message</button>

            {status && <p className="status">{status}</p>}
            </form>
        </div>
    );
}