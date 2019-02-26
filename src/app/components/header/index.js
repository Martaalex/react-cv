import React from 'react';
import './index.scss';

import data from './data';

function Header() {
  return (
    <header className="Header">
      <h1>{data.name}</h1>
      <hr />
      <p className="Header--contact">
        {`${data.contacts.phone.label} ${data.contacts.phone.value}`}
      </p>
      <p className="Header--contact">
        {`${data.contacts.email.label}`}
        <a
          href={`mailto:${data.contacts.email.value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {`${data.contacts.email.value}`}
        </a>
      </p>
      <p className="Header--summary">{data.summary}</p>
      <img
        className="Header--profile-pic"
        alt={data.pic.alt}
        src={data.pic.src}
      />
    </header>
  );
}

export default Header;