import { Routes, Route } from 'react-router-dom';
import {Layout} from '../layout/Layout';
import {Home} from '../pages/Home';
import {About} from '../pages/About';
import {Projet} from '../pages/Projet';
import {ProjetDetail} from '../pages/ProjetDetail';
import {Erreur} from '../pages/Erreur';

export function Router() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/a-propos" element={<About />} />
                <Route path='/projet' element={<Projet />} />
                <Route path="/projet/:slug" element={<ProjetDetail />} />
                <Route path="*" element={<Erreur />} />   
            </Route>
        </Routes>
    )
}