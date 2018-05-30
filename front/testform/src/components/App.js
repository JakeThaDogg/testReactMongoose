import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom'
import logo from '../ORhXMf2.svg'
import '../css/App.css'
import Register from './Register'
import Compte from './Compte'
import Login from './Login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <NavLink to='/register' className='link'>
            Register
          </NavLink>
          <NavLink to='/login' className='link'>
            Login
          </NavLink>
          <NavLink to='/moncompte' className='link'>
          Mon Compte
          </NavLink>
          <Switch>
            <Route path='/moncompte' component={Compte} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
