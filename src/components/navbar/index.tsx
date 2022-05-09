const Navbar: React.FC = (): JSX.Element => {
  return (
    <header className="navbar" data-testid="navbar">
      <div>Mark Harless</div>
      <ul className="navbar__ul">
        <li>
          <a
            href="https://linkedin.com/in/harlessmark"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in fa-xl" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
