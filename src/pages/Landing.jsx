import React, { Suspense } from 'react';
import SEO from '../components/Seo';

// Lazy load components
const Header = React.lazy(() => import('../components/Header/Header'));
const About = React.lazy(() => import('../components/About/About'));
const Services = React.lazy(() => import('../components/Services/Services'));
const Location = React.lazy(() => import('../components/Location/Location'));
const Contact = React.lazy(() => import('../components/Contact/Contact'));
const Footer = React.lazy(() => import('../components/Footer/Footer'));

export default function Landing() {
    return (
        <div>
            <SEO
                title='HamsterPOS - Local Business Solutions'
                description='HamsterPOS provides top-notch point-of-sale solutions for local businesses.'
                name='HamsterPOS'
                type='article' />
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <About />
                <Services />
                <Location />
                <Contact />
                <Footer />
            </Suspense>
        </div>
    )
}

