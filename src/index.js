import React from 'react';
import ReactDOM from 'react-dom';
import QuotePage from './QuotePage';
import quotesData from './quotes.json';

ReactDOM.render(
  <React.StrictMode>
    <QuotePage quotes={quotesData} />
  </React.StrictMode>,
  document.getElementById('root')
);
