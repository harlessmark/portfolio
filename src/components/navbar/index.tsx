const Navbar: React.FC = (): JSX.Element => {
  return (
    <header className="navbar">
      <div>Mark Harless</div>
      <ul className="navbar__ul">
        <li><a href="#contact">Contact</a></li>
        {/* <li>link 2</li> */}
      </ul>
    </header>
  );
}

export default Navbar;
