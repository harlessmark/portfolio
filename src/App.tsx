import Navbar from './components/navbar';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

import './styles/app.scss';

/**
 * TODO
 *
 * Sendgrid for contact form?
 *
 */

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
