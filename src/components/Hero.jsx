import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/img/LogoPortfolio.webp";

export function Hero() {
    const [showNav, setShowNav] = useState(false);
    const [titleVisible, setTitleVisible] = useState(false);

    useEffect(() => {
        
        setTimeout(() => setTitleVisible(true), 300);
        
        setTimeout(() => setShowNav(true), 1000);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="hero" id="accueil">
            <div className="hero__overlay"></div>
            
            
            <div className="hero__grid"></div>
            
            
            <div className="hero__header">
                <img src={Logo} alt="Logo du développeur" className="hero__logo" />
            </div>

            <div className="hero__content">
                <h1 className={`hero__title ${titleVisible ? 'hero__title--visible' : ''}`}>
                    <span className="hero__title-line">Bienvenue sur le portfolio de</span>
                    <span className="hero__title-name">Joshua Ormeray</span>
                    <span className="hero__title-subtitle">Développeur Web Junior</span>
                </h1>

                <nav className={`hero__nav ${showNav ? 'hero__nav--visible' : ''}`}>
                    <button 
                        className="hero__nav-btn hero__nav-btn--primary"
                        onClick={() => scrollToSection('#a-propos')}
                    >
                        <span>À propos</span>
                        <div className="hero__nav-btn-glow"></div>
                    </button>
                    <button 
                        className="hero__nav-btn hero__nav-btn--secondary"
                        onClick={() => scrollToSection('#projets')}
                    >
                        <span>Mes projets</span>
                        <div className="hero__nav-btn-glow"></div>
                    </button>
                </nav>

                
                <div className={`hero__scroll-indicator ${showNav ? 'hero__scroll-indicator--visible' : ''}`}>
                    <div className="hero__scroll-line"></div>
                    <span>Scroll</span>
                </div>
            </div>

            
            <div className="hero__particles">
                <div className="hero__particle"></div>
                <div className="hero__particle"></div>
                <div className="hero__particle"></div>
                <div className="hero__particle"></div>
                <div className="hero__particle"></div>
                <div className="hero__particle"></div>
                <div className="hero__particle"></div>
            </div>
        </section>
    );
}