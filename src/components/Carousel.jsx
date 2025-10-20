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

  const currentProject = projects[currentIndex];

  const handleProjectClick = () => {
    navigate(`/projet/${currentProject.slug}`);
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
              {/* Remplacez cette div par votre vraie image */}
              <img
                src={currentProject.image}
                alt={currentProject.title}
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
                >
                  <FaGithub className="github-icon" />
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
              >
                <FaChevronLeft className="carousel-icon" />
              </button>
              
              <button
                onClick={goToNext}
                className="carousel-btn carousel-btn-next"
              >
                <FaChevronRight className="carousel-icon" />
              </button>
            </>
          )}

          {/* Indicateurs de navigation */}
          <div className="carousel-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`carousel-indicator ${
                  index === currentIndex ? "active" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}