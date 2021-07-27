import './App.css';
import DarkMode from './components/DarkMode';
import FlipCard from './components/FlipCard';

function App() {
  return (
    <div className="App">
      <header className="dayMode">
      <DarkMode />
      <FlipCard />
      </header>
    </div>
  );
}

export default App;
