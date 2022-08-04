
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState({})
  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then(result=>result.json())
      .then(data => {
        setQuote({content: data.content, author: data.author})
      })
  } 

  useEffect(()=>{
    getQuote()
  }, [])

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">{quote.content}</p>
        <p id="author">{quote.author}</p>
        <button id="new-quote" onClick={getQuote}>New Quote</button><br/>
        <a href={`https://twitter.com/intent/tweet?hashtags=quotes&hashtags=code&text=${quote.content}+${quote.author}` } target="_blank" rel="noreferrer" id="tweet-quote">post on twitter</a>
      </div>
    </div>
  );
}

export default App;
