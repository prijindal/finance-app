import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui/dist/semantic.css';
import jQuery from 'jquery';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

window.jQuery = jQuery;
require('semantic-ui/dist/semantic.js');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
