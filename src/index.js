import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Global from "./components/Global";

ReactDOM.render(<Global />, document.getElementById('root'));
registerServiceWorker();
