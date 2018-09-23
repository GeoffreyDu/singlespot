import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import Details from './components/Details'
import Header from './components/Header'

// ici j'ai fait un router avec react router avec la page Home et la page details qui donne accès aux infos le :i récupère la key i du composant StoreList

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
