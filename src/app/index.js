import React from 'react';
import { Header, Main, Footer } from './components';
// import Main from './components/main';
// import Footer from './components/footer';
import './index.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      language: 'en',
    };
  }

  render() {
    const { language } = this.state;
    return (
      <React.Fragment>
        <div className="App">
          <Header onLanguage={lang => this.setState({ language: lang })} />
          <Main language={language} />
          {/* <select
            onChange={e => this.setState({ language: e.target.value })}
            className="App--language-select"
          >
            <option value="en">English</option>
            <option value="lt">Lithuanian</option>
            <option value="pl">Polish</option>
            <option value="ru">Russian</option>
          </select> */}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
