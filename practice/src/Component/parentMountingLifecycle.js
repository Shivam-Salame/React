import React, { Component } from 'react'
import ChildMountingLifecycle from './childMountingLifecycle';


class ParentMountingLifecycle extends Component {
    // 1
    constructor(props) {
      super(props)
    
      this.state = {
         name:"shivam"
      }
      console.log("parent constructor");
    }
    // 2 
    static getDerivedStateFromProps(props, state){
        console.log("parent getDerivedStateFromProps");
        return null;
    }
    
    // 4
    componentDidUpdate(){
        console.log("parent componentDidUpdate");
    }

    // 3
    render() {
        console.log("parent render");
        return (
            <div>
                <div>childMountingLifecycle</div>
                <ChildMountingLifecycle />
            </div>
    )
  }
}

export default ParentMountingLifecycle