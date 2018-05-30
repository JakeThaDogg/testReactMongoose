import React, { Component } from 'react'
import { Input, Button, Grid } from 'semantic-ui-react'
import '../css/Register.css'

export default class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nom: '',
      prenom: '',
      email: '',
      pass: '',
      passConf: '',
      age: undefined,
      code: undefined
    }
    this.nomChange = this.nomChange.bind(this)
    this.prenomChange = this.prenomChange.bind(this)
    this.emailChange = this.emailChange.bind(this)
    this.passChange = this.passChange.bind(this)
    this.passConfChange = this.passConfChange.bind(this)
    this.ageChange = this.ageChange.bind(this)
    this.codeChange = this.codeChange.bind(this)
    this.submitHandle = this.submitHandle.bind(this)
  }

  nomChange (e) {
    this.setState({nom: e.target.value})
  }

  prenomChange (e) {
    this.setState({prenom: e.target.value})
  }

  emailChange (e) {
    this.setState({email: e.target.value})
  }

  passChange (e) {
    this.setState({pass: e.target.value})
  }

  passConfChange (e) {
    this.setState({passConf: e.target.value})
  }

  ageChange (e) {
    this.setState({age: e.target.value})
  }

  codeChange (e) {
    this.setState({code: e.target.value})
  }

  submitHandle (e) {
    e.preventDefault()

  }

  render () {
    return (
      <div>
        <h1> S\enregister </h1>
        <form id='regi' onSubmit={this.submitHandle}>
          <Grid columns={4} >
            <Grid.Column width={2} />
            <Grid.Column width={6}>
              <span>Nom: </span> <Input onChange={this.nomChange} placeholder='Nom' />
            </Grid.Column>
            <Grid.Column width={6}>
              <span>Email : </span> <Input onChange={this.emailChange} placeholder='Email' />
            </Grid.Column>
          </Grid>

          <Grid columns={4} >
            <Grid.Column width={2} />
            <Grid.Column width={6}>
              <span>Prénom: </span> <Input onChange={this.prenomChange} placeholder='Prénom' />
            </Grid.Column>
            <Grid.Column width={6}>
              <span>Mot de passe : </span> <Input onChange={this.passChange} placeholder='Mot de Passe' />
            </Grid.Column>
          </Grid>

          <Grid columns={4} >
            <Grid.Column width={2} />
            <Grid.Column width={6}>
              <span>Age: </span> <Input onChange={this.ageChange} placeholder='Age' />
            </Grid.Column>
            <Grid.Column width={6}>
              <span>Confirmation du mot de passe : </span> <Input onChange={this.passConfChange} placeholder='Confirmation' />
            </Grid.Column>
          </Grid>

          <Grid columns={4} >
            <Grid.Column width={2} />
            <Grid.Column width={6}>
              <span>Code Postal </span> <Input onChange={this.codeChange} placeholder='Code Postal' />
            </Grid.Column>
            <Grid.Column width={6}>
              <Button>Je m\enregistre</Button>
            </Grid.Column>
          </Grid>

        </form>
      </div>
    )
  }
}
