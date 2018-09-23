import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import Details from './components/Details'
import Header from './components/Header'

const Root = () => {

  return(
    <Router>
      <div>
        <Header/>
        <Switch>
            <Route path='/' component={App} exact />
            <Route path='/details/:i' component={Details} />
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
