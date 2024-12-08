import logo from './logo3.webp';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <nav id="desktop-nav">
            <p className= "Logo_text_1"> A. </p>
            <img src="logo3.webp" alt="Anna Vylka Ravna Logo" class="logo-image" />
            <p className= "Logo_text_2"> Ravna </p>
          <div className="navbar-elements">
              <ul className="nav-links">
                  <li><a href="#about">About</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#this-website">This website</a></li>
              </ul>
          </div>
      </nav>
      </header>
    </div>
  );
}


export default App;
