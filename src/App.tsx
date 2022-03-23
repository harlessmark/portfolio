import Nav from './components/panels/Nav';
import Bio from './components/panels/Bio';
import Skills from './components/panels/Skills';
import Projects from './components/panels/Projects';
import Contact from './components/panels/Contact';

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
      <Nav />
      <Bio />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
