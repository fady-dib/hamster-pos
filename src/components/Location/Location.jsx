import React from 'react';
import './Location.css'

const Location = () => {
    return (
        <section id="location">
            <h2>Our Location</h2>
            <p>Find us at:</p>
            <address>
                123 Main Street<br />
                City, State 12345<br />
                Country
            </address>
            <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094763!2d144.95373631561606!3d-37.81627974269578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577582f4aabe535!2s123+Main+St%2C+City+VIC+12345%2C+Australia!5e0!3m2!1sen!2sus!4v1602951122334!5m2!1sen!2sus"
                width="100%"
                height="300"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            ></iframe>
        </section>
    );
};

export default Location;
