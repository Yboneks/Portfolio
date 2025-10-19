import { Link, useLocation } from 'react-router-dom';

export function Nav() {
    const location = useLocation();

    const handleClick = (e, targetId) => {
        if (location.pathname === '/') {
            e.preventDefault();
            const element = document.querySelector(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <ul>
            <li>
                <Link 
                    to="/#accueil" 
                    onClick={(e) => handleClick(e, '#accueil')}
                >
                    Accueil
                </Link>
            </li>
            
            <li>
                <Link 
                    to="/#a-propos" 
                    onClick={(e) => handleClick(e, '#a-propos')}
                >
                    À propos
                </Link>
            </li>
            
            <li>
                <Link 
                    to="/#projets" 
                    onClick={(e) => handleClick(e, '#projets')}
                >
                    Projets
                </Link>
            </li>
        </ul>
    );
}