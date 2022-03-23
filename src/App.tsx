import Nav from './components/Nav';
import './styles/app.scss';

/**
 * TODO:
 *
 * bio component
 * skills component
 * projects component
 * contact component
 * footer component
 *
 */

const App: React.FC = (): JSX.Element => {
  return (
    <div className="app">
      <Nav />
    </div>
  );
}

export default App;
