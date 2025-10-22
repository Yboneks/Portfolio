import { useNavigate } from 'react-router-dom';

export function Erreur() {
  const navigate = useNavigate();
  
  return (
    <div className="erreur-container">
      <h1>404</h1>
      <p>Le projet n'existe pas</p>
      <button onClick={() => navigate('/')} className="btn-back">
        Retourner sur la page d'accueil
      </button>
    </div>
  );
}