import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';

import './styles/app.scss';

/**
 * TODO
 *
 * Sendgrid for contact form?
 * https://pradeep-selva.github.io/react-hide-on-scroll/
 */

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Header/>
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
