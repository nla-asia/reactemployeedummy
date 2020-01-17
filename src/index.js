import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route , Switch,
    Redirect } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
