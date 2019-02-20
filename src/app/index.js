import React from 'react';
import './index.scss';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1>Marta</h1>
        <hr />
        <p className="Header--contact">Phone: 862222222</p>
        <p className="Header--contact">
          Email:{' '}
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
          yuuu! Uuuhhh belloo! Jeje poulet tikka masala ti aamoo! Chasy hahaha.
          Underweaaar butt bee do bee do bee do baboiii bee do bee do bee do
          bananaaaa. Daa la bodaaa jeje para tú ti aamoo! Ti aamoo! Ti aamoo! La
          bodaaa bappleees la bodaaa. Wiiiii wiiiii daa jiji jeje tatata bala tu
          me want bananaaa! Underweaaar wiiiii. La bodaaa poopayee daa jiji
          gelatooo la bodaaa hahaha gelatooo para tú.
        </p>
        <img
          className="Header--profile-pic"
          alt="me"
          src="https://cdn.pixabay.com/photo/2016/05/04/17/36/minion-1372252_1280.jpg"
        />
      </header>
    </div>
  );
}

export default App;
