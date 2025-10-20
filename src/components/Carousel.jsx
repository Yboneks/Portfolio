import { useState } from "react";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import projectsData from '../data/projet.json';

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const projects = projectsData.projects;
  const totalProjects = projects.length;

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalProjects - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalProjects - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentProject = projects[currentIndex];

  const handleProjectClick = () => {
    navigate(`/projet/${currentProject.slug}`);
  };

  // Gestion de la navigation au clavier sur les indicateurs
  const handleIndicatorKeyDown = (e, index) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const newIndex = index === 0 ? totalProjects - 1 : index - 1;
      goToSlide(newIndex);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const newIndex = index === totalProjects - 1 ? 0 : index + 1;
      goToSlide(newIndex);
    }
  };

  return (
    <div className="project-carousel-container">
      <div className="project-carousel-wrapper">
        <h2 className="project-carousel-title">Mes Projets</h2>
        
        <div className="project-carousel">
          {/* Carte du projet */}
          <div className="project-card" onClick={handleProjectClick}>
            {/* Image du projet */}
            <div className="project-card-image">
              <img
                src={currentProject.image}
                alt={`Capture d'écran du projet ${currentProject.title}`}
                loading="lazy"       
                decoding="async"     
                fetchPriority="low"  
              />
            </div>

            {/* Contenu de la carte */}
            <div className="project-card-content">
              <h3 className="project-card-title">
                {currentProject.title}
              </h3>
              
              <div className="project-card-footer">
                <span className="project-counter">
                  Projet {currentProject.id} sur {totalProjects}
                </span>
                <a
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github-link"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Voir le code source du projet ${currentProject.title} sur GitHub`}
                >
                  <FaGithub className="github-icon" aria-hidden="true" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Boutons de navigation */}
          {totalProjects > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="carousel-btn carousel-btn-prev"
                aria-label="Voir le projet précédent"
                type="button"
              >
                <FaChevronLeft className="carousel-icon" aria-hidden="true" />
              </button>
              
              <button
                onClick={goToNext}
                className="carousel-btn carousel-btn-next"
                aria-label="Voir le projet suivant"
                type="button"
              >
                <FaChevronRight className="carousel-icon" aria-hidden="true" />
              </button>
            </>
          )}

          {/* Indicateurs de navigation */}
          <div 
            className="carousel-indicators" 
            role="tablist" 
            aria-label="Navigation des projets"
          >
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                onKeyDown={(e) => handleIndicatorKeyDown(e, index)}
                className={`carousel-indicator ${
                  index === currentIndex ? "active" : ""
                }`}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Aller au projet ${index + 1} - ${project.title}`}
                aria-controls={`project-${project.slug}`}
                tabIndex={index === currentIndex ? 0 : -1}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}