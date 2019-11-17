import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import agent from './agent';

ReactDOM.render(<App />, document.getElementById('root'));

console.log(agent.Articles.byTag('react'))
console.log(agent.Articles.detail('51e85d5fe0354b7de86c'))
