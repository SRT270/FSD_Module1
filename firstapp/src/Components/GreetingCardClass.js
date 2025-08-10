import React, { Component } from 'react'

export default class GreetingCardClass extends Component {
  render() {
    return (
      <div>
        <h2>Hello from Class Component, {this.props.name}!</h2>
        <p>{this.props.message}</p>
      </div>
    )
  }
}
