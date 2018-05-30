import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../css/Login.css'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      pass: ''
    }
    this.mailChange = this.mailChange.bind(this)
    this.passChange = this.passChange.bind(this)
  }

  mailChange (e) {
    this.setState({email: e.target.value})
  }

  passChange (e) {
    this.setState({pass: e.target.value})
  }

  render () {
    return (
      <div>
        <form>
          <span>Email: </span><Input onChange={this.mailChange} placeholder='Email' className='input' />
          <br />
          <span> Mot de Passe:</span><Input onChange={this.passChange} placeholder='Mot de passe' />
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
