import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import StoreList from './components/StoreList'
import Details from './components/Details'

const Root = () => {

  return(
    <Router>
        <Switch>
            <Route path='/' component={App} exact />
            <Route path='/StoreList/:id' component={StoreList} />
            <Route path='/details/:i' component={Details} />
        </Switch>
  </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
