import React, { Component } from 'react';
import Text from './Text';
import Author from './Author';
import NewQuote from './NewQuote';
import TweetQuote from './TweetQuote';
import { quoteArray } from '../assets/scripts/quotes';
import { colorsArray } from '../assets/scripts/colors';

class QuoteBox extends Component {
  constructor() {
    super()
    this.state = {
      text: '',
      author: ''
    }
  }

  componentDidMount() {
    let randomNumber = Math.floor(Math.random() * quoteArray.length);

    let randomColorNumber = Math.floor(Math.random() * colorsArray.length);
    
    this.setState({
      text: quoteArray[randomNumber].text,
      author: quoteArray[randomNumber].author
    });

      document.body.style.backgroundColor = colorsArray[randomColorNumber];

      document.querySelector('i').style.color = 
      colorsArray[randomColorNumber];

      document.querySelector('.tweet-quote i').style.color = 
      colorsArray[randomColorNumber];

      document.querySelector('p').style.color = 
      colorsArray[randomColorNumber];

      document.querySelector('#author p').style.color = 
      colorsArray[randomColorNumber];

      document.querySelector('.new-quote__button').style.backgroundColor = colorsArray[randomColorNumber];
  }

  handleClick = () => {
    
    let randomNumber = Math.floor(Math.random() * quoteArray.length);

    let randomColorNumber = Math.floor(Math.random() * colorsArray.length);
    
    this.setState({
      text: quoteArray[randomNumber].text,
      author: quoteArray[randomNumber].author
    });

      document.body.style.backgroundColor = colorsArray[randomColorNumber];

      document.querySelector('p').style.color = 
      colorsArray[randomColorNumber];

      document.querySelector('i').style.color = 
      colorsArray[randomColorNumber];

      document.querySelector('.tweet-quote i').style.color = 
      colorsArray[randomColorNumber];

      document.querySelector('#author p').style.color = 
      colorsArray[randomColorNumber];

      document.querySelector('.new-quote__button').style.backgroundColor = colorsArray[randomColorNumber];
  }

  

  render() {
    
    return(
      <main id="quote-box">
        <Text text={this.state.text} />
        <Author author={this.state.author} />
        <NewQuote handleClick={this.handleClick.bind(this)}/>
        <TweetQuote />
      </main>
    );
  }
}

export default QuoteBox;