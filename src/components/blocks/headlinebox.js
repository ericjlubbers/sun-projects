import React from "react";


export default ({ headline, deck, eyebrow, timestamp }) => (

<div id="headlinebox">
  <h1 className="headline">{headline}</h1>
  <h2 className="deck">{deck}</h2>
  <p className="timestamp">{timestamp}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span className="eyebrow">{eyebrow}</span></p>
</div>

)