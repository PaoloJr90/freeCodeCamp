import React from 'react';
import Info from './Components/Info'
import AboutInterests from './Components/AboutInterests';
import Footer from './Components/Footer';

export default function App() {
    return (
        <main className='main-card'>
            <Info />
            <AboutInterests />
            <Footer />
        </main>
    )
}