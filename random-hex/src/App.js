import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkMode from './components/DarkMode';
import FlipCard from './components/FlipCard';
import Page from './components/Page';

function App() {
  return (
    <div className="App">
      <header className="dayMode">
      <DarkMode />
      <FlipCard />
      <Page />
      </header>
    </div>
  );
}

export default App;
