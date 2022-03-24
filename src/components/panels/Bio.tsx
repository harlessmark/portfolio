import { useState } from 'react';

const Bio: React.FC = (): JSX.Element => {
  const [isHover, setIsHover] = useState(false);

  const hover = (bool: boolean): void => {
    setIsHover(bool);
  }

  return (
    <div className="bio">
      <h1 className="intro">Frontend Software Engineer with an affinity for user experience and web usability.</h1>

      <img
        className={isHover ? 'bw-image' : ''}
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        alt="portrait"
        onMouseEnter={() => hover(true)}
        onMouseLeave={() => hover(false)}
      />

      <div className="info">
        <div className="contact">
          <h2>Contact</h2>
          <p>Lorem@ipsum.com</p>
        </div>

        <div className="location">
          <h2>Location</h2>
          <p>St. Pete, Florida</p>
        </div>
      </div>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, saepe rem! Atque minima velit libero molestiae facere ipsam perspiciatis mollitia fugiat modi voluptatum. Dicta quam asperiores laboriosam voluptas pariatur ad!</p>
    </div>
  );
}

export default Bio;