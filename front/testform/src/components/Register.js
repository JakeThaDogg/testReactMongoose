import React, { Component } from 'react'
import { Input, Button, Grid } from 'semantic-ui-react'
import '../css/Register.css'

export default class Register extends Component {
  render () {
    return (
      <div>
        <h1> S\enregister </h1>
        <form id='regi'>
          <Grid columns={4} >
            <Grid.Column width={2} />
            <Grid.Column width={6}>
              <span>Nom: </span> <Input placeholder='Nom' />
            </Grid.Column>
            <Grid.Column width={6}>
              <span>Email : </span> <Input placeholder='Email' />
            </Grid.Column>
          </Grid>

          <Grid columns={4} >
            <Grid.Column width={2} />
            <Grid.Column width={6}>
              <span>Prénom: </span> <Input placeholder='Prénom' />
            </Grid.Column>
            <Grid.Column width={6}>
              <span>Mot de passe : </span> <Input placeholder='Mot de Passe' />
            </Grid.Column>
          </Grid>

          <Grid columns={4} >
            <Grid.Column width={2} />
            <Grid.Column width={6}>
              <span>Age: </span> <Input placeholder='Age' />
            </Grid.Column>
            <Grid.Column width={6}>
              <span>Confirmation du mot de passe : </span> <Input placeholder='Confirmation' />
            </Grid.Column>
          </Grid>

          <Grid columns={4} >
            <Grid.Column width={2} />
            <Grid.Column width={6}>
              <span>Code Postal </span> <Input placeholder='Code Postal' />
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
