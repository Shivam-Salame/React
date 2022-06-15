import React, { PureComponent } from 'react'
// imported in parentComponent_pure
export class PureComponents extends PureComponent {
  render() {
    console.log(`pure ${this.props.name}`);
    // only update if the state value is differently changed otherwise not,but regular update every time
    return (
      <div>PureComponents</div>
    )
  }
}

export default PureComponents