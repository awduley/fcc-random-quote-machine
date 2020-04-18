import React from 'react';

function Text(props) {

  return(
    <div id="text">
      <i className="fas fa-quote-left" style={{ marginRight: 10}}></i>
        <p style={{ display: "inline" }}>
          {props.text}
        </p>
    </div>
  );
}


export default Text;