import React from 'react';
import './index.scss';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import minion from '../static/minion.jpg';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="Header">
          <h1>Marta</h1>
          <hr />
          <p className="Header--contact">Phone: 862222222</p>
          <p className="Header--contact">
            E-mail:{' '}
            <a
              href="mailto:m@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              m@gmail.com
            </a>
          </p>
          <p className="Header--summary">
            Minions ipsum uuuhhh bappleees jeje po kass tulaliloo bappleees tank
            yuuu! Uuuhhh belloo! Jeje poulet tikka masala ti aamoo! Chasy
            hahaha. Underweaaar butt bee do bee do bee do baboiii bee do bee do
            bee do bananaaaa. Daa la bodaaa jeje para tú ti aamoo! Ti aamoo! Ti
            aamoo! La bodaaa bappleees la bodaaa. Wiiiii wiiiii daa jiji jeje
            tatata bala tu me want bananaaa! Underweaaar wiiiii. La bodaaa
            poopayee daa jiji gelatooo la bodaaa hahaha gelatooo para tú.
          </p>
          <img className="Header--profile-pic" alt="me" src={minion} />
        </header>
        <main>
          <section className="Section">
            <div className="Section--left">
              <h3>Education</h3>
            </div>
            <div className="Section--right">
              <h3>UMCS</h3>
              <p>
                <span>Major: </span>
                Digital technologies in cultural education
              </p>
              <p>
                <span>Minor: </span>
                Culturology
              </p>
            </div>
          </section>

          <section className="Section">
            <div className="Section--left">
              <h3>Skills</h3>
            </div>
            <div className="Section--right">
              <div>
                <h3>Drawing</h3>
                <p>
                  Daa la bodaaa jeje para tú ti aamoo! Ti aamoo! Ti aamoo! La
                  bodaaa bappleees la bodaaa.
                </p>
              </div>
              <div>
                <h3>Computer skills</h3>
                <p>
                  Daa la bodaaa jeje para tú ti aamoo! Ti aamoo! Ti aamoo! La
                  bodaaa bappleees la bodaaa.
                </p>
              </div>
            </div>
          </section>

          <section className="Section">
            <div className="Section--left">
              <h3>Experience</h3>
            </div>
            <div className="Section--right">
              <div>
                <div className="Section--right-job-title">
                  <h3>CodeAcademy </h3>
                  <span>Very good student, 2018.10 - present</span>
                </div>
                <ul>
                  <li>HTML</li>
                  <li>CSS/SCSS</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                </ul>
              </div>

              <div>
                <div className="Section--right-job-title">
                  <h3> BramaGrodzka </h3>
                  <span>Very good intern, 2015.10 - 2016.10</span>
                </div>
                <ul>
                  <li>HTML</li>
                  <li>CSS/SCSS</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="Section">
            <div className="Section--left">
              <h3>Hobbies</h3>
            </div>
            <div className="Section--right">
              <p>Cooking, play video games</p>
            </div>
          </section>

          <section className="Section">
            <div className="Section--left">
              <h3>References</h3>
            </div>
            <div className="Section--right">
              <p>
                Wiiiii wiiiii daa jiji jeje tatata bala tu me want bananaaa!
              </p>
            </div>
          </section>
        </main>
      </div>
      <footer className="footer">
        <FaGithub />
        <FaLinkedin />
      </footer>
    </React.Fragment>
  );
}

export default App;
