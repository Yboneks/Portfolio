import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {Carousel} from '../components/Carousel';
import {About} from '../pages/About';
import {Hero} from '../components/Hero';

export function Home() {
    const location = useLocation();

    
    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location]);

    return (
        <div>
            <section id="accueil" className="min-h-screen">
                <Hero/>
            </section>

            <section id="a-propos" className="min-h-screen">
                <About/>
            </section>

            <section id="projets" className="min-h-screen">
                <Carousel/>
            </section>

        </div>
    );
}