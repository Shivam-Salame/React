import React, { Component } from 'react'

class ChildMountingLifecycle extends Component {
    // 1
    constructor(props) {
      super(props)
    
      this.state = {
         name:"shivam"
      }
      console.log("Child constructor");
    }
    // 2 
    static getDerivedStateFromProps(props, state){
        console.log("Child getDerivedStateFromProps");
        return null;
    }
    
    // 4
    componentDidUpdate(){
        console.log("Child componentDidUpdate");
    }

    // 3
    render() {
        console.log("Child render");
        return (
            <div>parentMountingLifecycle</div>
    )
  }
}

export default ChildMountingLifecycle