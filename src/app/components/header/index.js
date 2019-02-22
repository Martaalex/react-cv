import React from 'react';
import './index.scss';
import minion from '../../../static/minion.jpg';

function Header() {
  return (
    <header className="Header">
      <h1>Marta</h1>
      <hr />
      <p className="Header--contact">Phone: 862222222</p>
      <p className="Header--contact">
        E-mail:{' '}
        <a href="mailto:m@gmail.com" target="_blank" rel="noopener noreferrer">
          m@gmail.com
        </a>
      </p>
      <p className="Header--summary">
        Minions ipsum uuuhhh bappleees jeje po kass tulaliloo bappleees tank
        yuuu! Uuuhhh belloo! Jeje poulet tikka masala ti aamoo! Chasy hahaha.
        Underweaaar butt bee do bee do bee do baboiii bee do bee do bee do
        bananaaaa. Daa la bodaaa jeje para tú ti aamoo! Ti aamoo! Ti aamoo! La
        bodaaa bappleees la bodaaa. Wiiiii wiiiii daa jiji jeje tatata bala tu
        me want bananaaa! Underweaaar wiiiii. La bodaaa poopayee daa jiji
        gelatooo la bodaaa hahaha gelatooo para tú.
      </p>
      <img className="Header--profile-pic" alt="me" src={minion} />
    </header>
  );
}

export default Header;
