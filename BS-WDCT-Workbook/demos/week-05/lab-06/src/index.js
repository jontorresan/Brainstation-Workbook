import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const images = [
  'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
  'https://media.giphy.com/media/wpoLqr5FT1sY0/giphy.gif',
  'https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif',
  'https://media.giphy.com/media/o7OChVtT1oqmk/giphy.gif',
]

ReactDOM.render( < App images = {
      images
    }
    />, document.getElementById('root'));

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();