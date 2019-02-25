import React from 'react';
import './index.scss';
import data from './data';

function Main() {
  return (
    <main>
      <section className="Section">
        <div className="Section--left">
          <h3>{data.education.label}</h3>
        </div>
        <div className="Section--right">
          <h3>{data.education.school}</h3>
          <p>
            <span>{data.education.major.label}</span>
            {data.education.major.value}
          </p>
          <p>
            <span>{data.education.minor.label} </span>
            {data.education.minor.value}
          </p>
        </div>
      </section>

      <section className="Section">
        <div className="Section--left">
          <h3>{data.skill.label}</h3>
        </div>
        <div className="Section--right">
          {data.skill.list.map(({ title, description }, index) => (
            <div key={index}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="Section">
        <div className="Section--left">
          <h3>{data.experience.label}</h3>
        </div>
        <div className="Section--right">
          {data.experience.list.map(
            ({ title, subtitle, responsibilities }, index) => (
              <div key={index}>
                <div className="Section--right-job-title">
                  <h3>{title}</h3>
                  <span>{subtitle}</span>
                </div>
                <ul>
                  {responsibilities.map((value, i) => (
                    <li key={i}>{value}</li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </section>

      <section className="Section">
        <div className="Section--left">
          <h3>{data.hobbies.label}</h3>
        </div>
        <div className="Section--right">
          <p>{data.hobbies.summary}</p>
        </div>
      </section>

      <section className="Section">
        <div className="Section--left">
          <h3>{data.references.label}</h3>
        </div>
        <div className="Section--right">
          <p>{data.references.summary}</p>
        </div>
      </section>
    </main>
  );
}

export default Main;
