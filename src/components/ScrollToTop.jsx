import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Afficher le bouton quand on scroll de 300px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Fonction pour remonter en haut
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`scroll-to-top ${isVisible ? 'scroll-to-top--visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Retour en haut"
        >
            <FaArrowUp />
        </button>
    );
}