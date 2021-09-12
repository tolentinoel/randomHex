import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="page-footer indigo lighten-4">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="purple-text purple-lighten-2">Thanks for passing by!</h5>
                <p className="brown-text brown-darken-3">All of this components were built while I document the steps taken through a blog I maintain. Feel free to follow my journey in learning more things in web developing!</p>
                <a className="deep-purple-text text-lighten-1" href="https://dev.to/tolentinoel" target="_blank" rel="noreferrer">dev.to/tolentinoel</a>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="purple-text">Links</h5>
                <ul>
                  <li><a className="brown-text brown-darken-3" href="https://ellaine.dev/" target="_blank" rel="noreferrer">ellaine.dev</a></li>
                  <li><a className="brown-text brown-darken-3" href="https://github.com/tolentinoel" target="_blank" rel="noreferrer">Github</a></li>
                  <li><a className="brown-text brown-darken-3" href="https://www.linkedin.com/in/ellainet" target="_blank" rel="noreferrer">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            Built and Design by <a className="purple-text purple-lighten-2" href="https://ellaine.dev/" target="_blank" rel="noreferrer">ellaine.dev</a>
            </div>
          </div>
        </footer>
        </div>
    );
}

export default Footer;
