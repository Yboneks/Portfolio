import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Nav } from './Navigation';
import Logo from "../assets/img/LogoPortfolio.png";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        // On n'écoute le scroll que si on est sur la home (optionnel mais propre)
        if (isHome) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [isHome]);

    return ( 
        <header className={`header ${isHome ? 'header--fixed' : ''} ${scrolled ? 'header--scrolled' : ''}`}>
            <img src={Logo} alt="Logo du développeur" className="header__logo" />
            <nav className="header__nav">
                <Nav />
            </nav>
        </header>
    );
}