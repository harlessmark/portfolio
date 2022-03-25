import { useState, useEffect } from 'react';

const About:
 React.FC = (): JSX.Element => {
  const [isHover, setIsHover] = useState(false);
  const [currentWeather, setCurrentWeather] = useState('');

  useEffect(() => {
    // fetches St. Pete current weather
    const getWeather = async (): Promise<void> => {
      const url = "https://goweather.herokuapp.com/weather/st.-petersburg,-florida";

      try {
        const res = await fetch(url);
        const { description } = await res.json();

        setCurrentWeather(description);
      } catch (err) {
        console.log(err);
      }
    }
    getWeather();
  }, []);

  // converts weather description to icon
  // from // https://reacttempo.netlify.app
  const weatherIcon = (): JSX.Element => {
    type Descriptions = {
      [key: string]: JSX.Element;
    };

    const descriptions: Descriptions = {
      Clear: <i className="fas fa-sun" />,
      Sunny: <i className="fas fa-sun" />,
      Cloudy: <i className="fas fa-cloud" />,
      Rain: <i className="fas fa-cloud-showers-heavy" />,
      Snow: <i className="fas fa-snowflake" />,
    };

    return (
      <span title="Current weather">
        {descriptions[currentWeather]}
      </span>
    ) || (
      <span title="Current weather">
        ({currentWeather})
      </span>
    );
  };

  const hover = (bool: boolean): void => {
    setIsHover(bool);
  }

  return (
    <div className="about">
      <h1 className="about__intro">Frontend Software Engineer with an affinity for user experience and web usability.</h1>

      <img
        className={isHover ? 'about__img--bw' : 'about__img'}
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
          <p>St. Pete, Florida{" "}<span>{weatherIcon()}</span></p>
        </div>
      </div>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, saepe rem! Atque minima velit libero molestiae facere ipsam perspiciatis mollitia fugiat modi voluptatum. Dicta quam asperiores laboriosam voluptas pariatur ad!</p>
    </div>
  );
}

export default About;
