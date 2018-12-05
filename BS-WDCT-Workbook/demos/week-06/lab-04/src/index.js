import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const todos = [
  { 
    text: 'Go to Dentist',
    done: false
  },
  {
    text: 'Do taxes',
    done: false
  },
  {
    text: 'Clean the Apartment',
    done: false
  },
  {
    text: 'Finish BrainStation Assignment',
    done: true
  }
  
]

ReactDOM.render(<App todos={todos}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
