import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import Home from './Home'
import Discover from './link/Discover'
import Develop from './link/Develop'
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact = {true} component = { Home } />
        <Route path="/Discover" component = { Discover } />
        <Route path="/Develop" component = { Develop } />
      </Switch>
    </HashRouter>
  );
}

export default App;
