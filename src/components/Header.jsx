import { Link } from "react-router-dom";
import Logo from "../assets/img/LogoPortfolio.png";

export function Header() {
    return ( 
        <header>
            <img src={Logo} alt="Logo du développeur" />
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/a-propos">A propos</Link></li>
                    <li><Link to="/projet">Projet</Link></li>
                </ul>
            </nav>
        </header>
    );
}