import { useState, useEffect } from "react";

const About: React.FC = (): JSX.Element => {
  const [isHover, setIsHover] = useState(false);
  const [currentWeather, setCurrentWeather] = useState("");

  useEffect(() => {
    const getWeather = async (): Promise<void> => {
      const url =
        "https://goweather.herokuapp.com/weather/st.-petersburg,-florida";

      try {
        const res = await fetch(url);
        const { description: weather } = await res.json();

        setCurrentWeather(weather);
      } catch (err) {
        console.log(err);
      }
    };
    getWeather();
  }, []);

  // https://reacttempo.netlify.app
  const renderWeatherIcon = (): JSX.Element | void => {
    if (currentWeather === "") return;

    type Descriptions = {
      [key: string]: JSX.Element;
    };

    const descriptions: Descriptions = {
      Clear: <i className="fas fa-sun" />,
      Sunny: <i className="fas fa-sun" />,
      Cloudy: <i className="fas fa-cloud" />,
      Rain: <i className="fas fa-cloud-showers-heavy" />,
      Snow: <i className="fas fa-snowflake" />, // hoping this never happens 🤞
    };

    return (
      <span title="Current weather in St. Pete" data-testid="weather">
        {descriptions[currentWeather] && descriptions[currentWeather]}
      </span>
    );
  };

  const hover = (bool: boolean): void => {
    setIsHover(bool);
  };

  return (
    <div className="about" data-testid="about">
      <h1 className="about__intro t-italic t-bold">
        Frontend Software Engineer with an affinity for user experience and web
        usability <span className="t-normal">&#129106;</span>
      </h1>

      <img
        className={isHover ? "about__img--bw" : "about__img"}
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        alt="portrait"
        onMouseEnter={() => hover(true)}
        onMouseLeave={() => hover(false)}
      />

      <div className="about__info d-flex">
        <div>
          <h3>Contact</h3>
          <p>&#104;arl&#101;s&#115;&#64;d&#117;ck&#46;com</p>
        </div>

        <div>
          <h3>Location</h3>
          <p>St. Pete, FL {renderWeatherIcon()}</p>
        </div>
      </div>

      <p className="about__me">
        Outside of programming, I spend most of my time with my wife and two
        dogs. I enjoy{" "}
        <a href="https://www.goodreads.com/user/show/86604985-mark"
          target="_blank"
          rel="noreferrer"
        >
          reading
        </a>,{" "}
        <a
          href="https://www.strava.com/athletes/spacemilk"
          target="_blank"
          rel="noreferrer"
        >
          running
        </a>
        , and taking care of our{" "}
        <a
          href="https://www.instagram.com/flancyplants"
          target="_blank"
          rel="noreferrer"
        >
          house plants
        </a>
        .
      </p>
    </div>
  );
};

export default About;
