import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios'

export default class Compte extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nom: '',
      prenom: '',
      email: '',
      code: '',
      age: undefined,
      password: ''
    }
  }

  compnentWillMount() {

  }

  render () {
    return (
      <div>
        <Table inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Clé</Table.HeaderCell>
              <Table.HeaderCell>Valeur</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Nom</Table.Cell>
              <Table.Cell>{this.state.nom}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Prénom</Table.Cell>
              <Table.Cell>{this.state.prenom}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Email</Table.Cell>
              <Table.Cell>{this.state.email}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Code postal</Table.Cell>
              <Table.Cell>{this.state.code}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Age</Table.Cell>
              <Table.Cell>{this.state.age}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Mot de Passe</Table.Cell>
              <Table.Cell>{this.state.password}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}
