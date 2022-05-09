const Projects: React.FC = (): JSX.Element => (
  <div className="projects" data-testid="projects">
    <h2>Projects</h2>

    <div className="projects__single">
      <img
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        alt="portrait"
      />
      <a
        href="https://hollywoodhangman.com"
        className="projects__title"
        target="_blank"
        rel="noreferrer"
      >
        <h3 className="t-bold">Hollywood Hangman</h3>
        <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <p>
        I scraped IMDb's top 1,000 rated movies and made a fun hangman game for movie buffs. The more movies you guess correctly, the more confetti you get at the end!
      </p>
      <div className="projects__tags">
        <span className="projects__tag">React</span>
        <span className="projects__tag">Redux</span>
        <span className="projects__tag">Python</span>
        <span className="projects__tag">Web Scraping</span>
        <span className="projects__tag t-nowrap">styled-components</span>
      </div>
    </div>

    <div className="projects__single">
      <img
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        alt="portrait"
      />
      <a
        href="/"
        className="projects__title"
        target="_blank"
        rel="noreferrer"
      >
        <h3 className="t-bold">Ninny Code!</h3>
        <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <p>
        Nintendo makes it difficult to remember and share your friend code. Ninny Code! allows you to easily share your Switch friend code by assigning your random 12-digit code with a username.
      </p>
      <div className="projects__tags">
        <span className="projects__tag">React</span>
        <span className="projects__tag">Python</span>
        <span className="projects__tag">Flask</span>
        <span className="projects__tag">PostgreSQL</span>
      </div>
    </div>

    <div className="projects__single">
      <a
        href="/"
        className="projects__title"
        target="_blank"
        rel="noreferrer"
      >
        <h3 className="t-bold">Portfolio (meta)</h3>
        <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
        maiores dicta porro eos repellat consequuntur doloribus quae numquam
        soluta amet?
      </p>
      <div className="projects__tags">
        <span className="projects__tag">React</span>
        <span className="projects__tag">TypeScript</span>
        <span className="projects__tag">JavaScript</span>
        <span className="projects__tag">Jest Testing</span>
        <span className="projects__tag">SCSS</span>
      </div>
    </div>
  </div>
)

export default Projects;
