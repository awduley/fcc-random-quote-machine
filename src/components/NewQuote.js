import React, { Component } from 'react';

class NewQuote extends Component {

  render() {

    return(
      <div className="new-quote">
        <button id="new-quote" onClick={ this.props.handleClick }className="new-quote__button">New Quote</button>
      </div>
    );
  }
}

export default NewQuote;