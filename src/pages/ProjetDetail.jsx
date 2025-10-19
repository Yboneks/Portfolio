import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaGithub, FaArrowLeft, FaChevronDown, FaReact, FaHtml5, FaCss3Alt, FaSass, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiLighthouse, SiReactrouter, SiExpress, SiMongodb, SiJsonwebtokens } from "react-icons/si";
import { BsFileImage } from "react-icons/bs";
import projectsData from '../data/projet.json';

// Mapping des icônes
const iconMap = {
  'FaHtml5': FaHtml5,
  'FaCss3Alt': FaCss3Alt,
  'SiJavascript': SiJavascript,
  'SiLighthouse': SiLighthouse,
  'BsFileImage': BsFileImage,
  'FaReact': FaReact,
  'SiReactrouter': SiReactrouter,
  'FaSass': FaSass,
  'FaNodeJs': FaNodeJs,
  'SiExpress': SiExpress,
  'SiMongodb': SiMongodb,
  'SiJsonwebtokens': SiJsonwebtokens
};

// Composant Collapse réutilisable
function Collapse({ title, children, isOpen, onToggle }) {
  return (
    <div className="collapse">
      <button className={`collapse-header ${isOpen ? 'active' : ''}`} onClick={onToggle}>
        <h3>{title}</h3>
        <FaChevronDown className={`collapse-icon ${isOpen ? 'rotate' : ''}`} />
      </button>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        <div className="collapse-body">
          {children}
        </div>
      </div>
    </div>
  );
}

export function ProjetDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Trouver le projet correspondant au slug
  const project = projectsData.projects.find(p => p.slug === slug);

  // scroll en haut au montage / quand project change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [project]);

  // État pour gérer l'ouverture des collapses
  const [openSections, setOpenSections] = useState({
    contexte: false,
    objectifs: false,
    stack: false,
    competences: false,
    resultats: false,
    ameliorations: false
  });

  // Toggle d'une section
  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Si le projet n'existe pas, rediriger vers l'accueil
  if (!project) {
    return (
      <div className="projet-detail-container">
        <div className="projet-not-found">
          <h2>Projet non trouvé</h2>
          <button onClick={() => navigate('/')} className="btn-back">
            <FaArrowLeft /> Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="projet-detail-container">
      {/* Header avec image et titre */}
      <div className="projet-header">
        <button onClick={() => navigate('/')} className="btn-back">
          <FaArrowLeft /> Retour
        </button>
        
        <div className="projet-hero">
          <img 
            src={project.image} 
            alt={project.title}
            className="projet-hero-image"
          />
          <div className="projet-hero-overlay">
            <h1 className="projet-title">{project.title}</h1>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github"
            >
              <FaGithub /> Voir sur GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Contenu avec collapses */}
      <div className="projet-content">
        {/* Contexte */}
        <Collapse 
          title="Contexte du projet" 
          isOpen={openSections.contexte}
          onToggle={() => toggleSection('contexte')}
        >
          <p>{project.contexte}</p>
        </Collapse>

        {/* Objectifs */}
        <Collapse 
          title="Objectifs" 
          isOpen={openSections.objectifs}
          onToggle={() => toggleSection('objectifs')}
        >
          <ul>
            {project.objectifs.map((obj, index) => (
              <li key={index}>{obj}</li>
            ))}
          </ul>
        </Collapse>

        {/* Stack technique */}
        <Collapse 
          title="Stack Technique" 
          isOpen={openSections.stack}
          onToggle={() => toggleSection('stack')}
        >
          <div className="stack-list">
            {project.stack.map((tech, index) => {
              const IconComponent = iconMap[tech.icon];
              return (
                <div key={index} className="stack-item">
                  {IconComponent && <IconComponent className="stack-icon" />}
                  <span className="stack-name">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </Collapse>

        {/* Compétences */}
        <Collapse 
          title="Compétences développées" 
          isOpen={openSections.competences}
          onToggle={() => toggleSection('competences')}
        >
          <ul>
            {project.competences.map((comp, index) => (
              <li key={index}>{comp}</li>
            ))}
          </ul>
        </Collapse>

        {/* Résultats */}
        <Collapse 
          title="Résultats obtenus" 
          isOpen={openSections.resultats}
          onToggle={() => toggleSection('resultats')}
        >
          <ul>
            {project.resultats.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </Collapse>

        {/* Améliorations possibles */}
        <Collapse 
          title="Améliorations possibles" 
          isOpen={openSections.ameliorations}
          onToggle={() => toggleSection('ameliorations')}
        >
          <ul>
            {project.ameliorations.map((amelio, index) => (
              <li key={index}>{amelio}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}