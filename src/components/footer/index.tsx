const Footer: React.FC = (): JSX.Element => (
  <footer className="footer">
    {/* <p>&copy; {new Date().getFullYear()} Mark Harless</p> */}
    <p>&copy; Mark Harless</p>
    <ul className="footer__socials">
      <li title="LinkedIn">
        <a
          href="https://linkedin.com/in/harlessmark"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in fa-xl" />
        </a>
      </li>
      <li title="GitHub">
        <a
          href="https://github.com/harlessmark"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github-alt fa-xl" />
        </a>
      </li>
      <li title="Email">
        <a
          href="mailto:harless@duck.com"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-envelope fa-xl" />
        </a>
      </li>
      <li>|</li>
      <li title="Instagram">
        <a
          href="https://instagram.com/flancyplants"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram fa-xl" />
        </a>
      </li>
      <li title="Strava">
        <a
          href="https://strava.com/athletes/harlessmark"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-strava fa-xl" />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
