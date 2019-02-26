import React from 'react';
import './index.scss';
import data from './data';
import IconLink from './iconLink';

function Footer() {
  return (
    <footer className="footer">
      {data.map(({ href, icon }, index) => (
        <IconLink key={index} href={href} icon={icon} />
      ))}
    </footer>
  );
}

export default Footer;
