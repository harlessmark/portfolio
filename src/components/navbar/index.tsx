const Navbar: React.FC = (): JSX.Element => {
  return (
    <header className="navbar" data-testid="navbar">
      <div>Mark Harless</div>
      <button className="navbar__item">
        <a
          href="https://www.dropbox.com/s/77ackhnte2753rl/Mark%20Harless%20Resume%202022%20%E2%80%94%20Public.pdf?dl=1"
          className="t-bolder"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </button>
    </header>
  );
};

export default Navbar;
