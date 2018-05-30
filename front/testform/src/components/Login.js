import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../css/Login.css'

export default class Login extends Component {
  render () {
    return (
      <div>
        <form>
          <span>Email: </span><Input placeholder='Email' className='input' />
          <br />
          <span> Mot de Passe:</span><Input placeholder='Mot de passe' />
          <br />
          <Button basic color='brown'> Se Connecter</Button>
        </form>
        <p id='reminder'> Pas encore inscrit ?</p>
        <Link to='/register'>
          <Button basic color='yellow'>S\inscire</Button>
        </Link>
      </div>
    )
  }
}
