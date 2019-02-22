import React from 'react';
import './index.scss';

function Main() {
  return (
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
              Daa la bodaaa jeje para tú ti aamoo! Ti aamoo! Ti aamoo! La bodaaa
              bappleees la bodaaa.
            </p>
          </div>
          <div>
            <h3>Computer skills</h3>
            <p>
              Daa la bodaaa jeje para tú ti aamoo! Ti aamoo! Ti aamoo! La bodaaa
              bappleees la bodaaa.
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
          <p>Wiiiii wiiiii daa jiji jeje tatata bala tu me want bananaaa!</p>
        </div>
      </section>
    </main>
  );
}

export default Main;
