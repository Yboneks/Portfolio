
export function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <h2 className="about__title">À propos de moi</h2>
        
        <div className="about__content">
          <div className="about__section">
            <h3 className="about__subtitle">De la logistique au code : une reconversion assumée</h3>
            <p className="about__text">
              Diplômé d'un DUT Qualité Logistique Industrielle et Organisation, j'ai évolué plusieurs années 
              dans le secteur de la logistique avant qu'un tournant dans ma vie ne m'offre l'opportunité de me 
              réorienter vers un domaine qui m'a toujours fasciné : l'informatique.
            </p>
          </div>

          <div className="about__section">
            <h3 className="about__subtitle">Une passion transformée en expertise</h3>
            <p className="about__text">
              Grâce à la formation Développeur Web d'OpenClassrooms, j'ai pu concrétiser cette transition 
              professionnelle et développer des compétences solides en développement front-end. Je me suis 
              particulièrement spécialisé dans <strong>React</strong> et <strong>Sass</strong>, des technologies 
              qui me permettent de créer des interfaces modernes, performantes et maintenables.
            </p>
          </div>

          <div className="about__section">
            <h3 className="about__subtitle">Ce qui me motive</h3>
            <p className="about__text">
              Ce qui m'enthousiasme dans le développement web, c'est la diversité des défis techniques et la 
              capacité d'apprentissage continue qu'exige ce métier. Chaque projet est une opportunité d'explorer 
              de nouvelles solutions et d'améliorer mes compétences. La multitude de possibilités d'évolution dans 
              ce secteur, notamment vers la <strong>cybersécurité</strong>.
            </p>
          </div>

          <div className="about__section">
            <h3 className="about__subtitle">Mon objectif</h3>
            <p className="about__text">
              Je recherche aujourd'hui à intégrer une équipe dynamique où je pourrai contribuer au développement 
              d'applications web robustes, tout en continuant à monter en compétences, avec à terme une évolution 
              vers des problématiques de sécurité applicative.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
