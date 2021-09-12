import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkMode from './components/DarkMode';
import FlipCard from './components/FlipCard';
import Page from './components/Page';
import Footer from './components/Footer.js';

function App() {


  return (
    <div className="App" id="page">
      <nav>
        <div className="nav-wrapper pink lighten-3">
          <a href="#page" className="brand-logo left"><i className="medium material-icons" id="logo">child_care</i></a>
          <ul id="nav-mobile" className="right hide-on-small-and-down">
            <li><a href="#page"><i className="small material-icons">wb_sunny</i></a></li>
            <li><a href="#page"><i className="small material-icons">local_florist</i></a></li>
            <li><a href="#page"><i className="small material-icons">loyalty</i></a></li>
          </ul>
        </div>
      </nav>


      <header className="dayMode">
      <DarkMode />
      <FlipCard />
      <Page />
      </header>
      <Footer />

    </div>
  );
}

export default App;
