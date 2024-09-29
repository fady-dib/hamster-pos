import React from 'react';
import SEO from '../components/Seo';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Location from '../components/Location/Location';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';


export default function Landing() {
    return (
        <div>
            <SEO
                title='HamsterPOS - Local Business Solutions'
                description='HamsterPOS provides top-notch point-of-sale solutions for local businesses.'
                name='HamsterPOS'
                type='article' />
            <Header />
            <About />
            <Services />
            <Location />
            <Contact />
            <Footer />
        </div>
    )
}

