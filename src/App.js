import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
