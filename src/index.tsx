import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  return (
    <React.StrictMode>
      <h1>Hi there!</h1>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
