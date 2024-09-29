import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} HamsterPOS. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
