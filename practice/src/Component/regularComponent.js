import React, { Component } from 'react'
// imported in parentComponent_pure
export default class RegularComponent extends Component {
  render() {
    console.log(`regular ${this.props.name}`);
    return (
      <div>RegularComponent</div>
    )
  }
}
