import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact Us</h2>
            <p>Feel free to reach out:</p>
            <ul>
                <li>Phone: +1234567890</li>
                <li>Email: info@hamsterpos.com</li>
            </ul>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
