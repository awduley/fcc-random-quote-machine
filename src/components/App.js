import React, { Component } from 'react';
import '../index.css';
import QuoteBox from './QuoteBox';

class App extends Component {

  render() {
    return(
      <div className="container">
        <QuoteBox />
      </div>
    );
  }
}

export default App;