import React from 'react';
import './QuotePage.css';

function QuotePage({ quotes }) {
  return (
    <div>
      <h1>Geek Food Quotes</h1>
      <div>
        {quotes.map((quote, index) => (
          <div key={index}>
            <blockquote>
              <p>{quote.quote}</p>
              <footer>{quote.author}</footer>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuotePage;
