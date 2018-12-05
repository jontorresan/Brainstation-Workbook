import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const defaultTodos = [
    {text: 'Task 1', done: false },
    {text: 'Task 2', done: false },
    {text: 'Task 3', done: true },
    {text: 'Task 4', done: true }
]

ReactDOM.render(<App todos={defaultTodos} />, document.getElementById('root'));
registerServiceWorker();
