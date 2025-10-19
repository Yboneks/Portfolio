import { useState, useEffect } from 'react';

export function Hero() {
    const [showNav, setShowNav] = useState(false);
    const [titleVisible, setTitleVisible] = useState(false);

    useEffect(() => {
        // Animation du titre
        setTimeout(() => setTitleVisible(true), 300);
        // Apparition de la navigation après 2 secondes
        setTimeout(() => setShowNav(true), 2000);
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
            
            {/* Effet de grille cyber */}
            <div className="hero__grid"></div>
            
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

                {/* Indicateur de scroll */}
                <div className={`hero__scroll-indicator ${showNav ? 'hero__scroll-indicator--visible' : ''}`}>
                    <div className="hero__scroll-line"></div>
                    <span>Scroll</span>
                </div>
            </div>

            {/* Particules décoratives */}
            <div className="hero__particles">
                <div className="hero__particle"></div>
                <div className="hero__particle"></div>
                <div className="hero__particle"></div>
                <div className="hero__particle"></div>
                <div className="hero__particle"></div>
            </div>
        </section>
    );
}