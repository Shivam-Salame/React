import React, { Component,memo,PureComponent } from 'react'
import RegularComponent from './regularComponent'
import PureComponents from './pureComponents'
import MemoComponent from './memoComponent'


 class ParentComponent_PureFunction extends PureComponent {
    // go to pure component 
    constructor(props) {
      super(props)
    
      this.state = {
         name :'shivam'
      }
    }

    componentDidMount( ){
        setInterval( ()=>{
            this.setState({
                name: 'shivam'
            });
        },3000)
    } 

  render() {
    console.log('---------- parent ------------');
    return (
        <div>ParentComponent_PureFunction
        {/* <RegularComponent name={this.state.name}/>
        <PureComponents name={this.state.name}/> */}
        {/* to stop the re rendering of memoCOmponent when Exporting it pass it in the React.memo() */}
        <MemoComponent/>
    </div>
    )
  }
}

export default ParentComponent_PureFunction
