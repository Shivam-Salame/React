import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
      super(props)
        // first method
      this.inputRef = React.createRef();
        
        // callback refs(older approach)
        this.cbRef = null;
        // input element is passed as a parameter to cbRef property
        this.setCbf = (element) =>{
            this.cbRef = element 
        }
    }

    componentDidMount(){
        // first method
        
        //this will create focus on selected element
        // this.inputRef.current.focus();
        // current property points to the actual dom node
        // console.log(this.inputRef);

        // second method
        if(this.cbRef){
            this.cbRef.focus();
        }
    }

    clickHandler = () => {
        // we are accessing the data
        alert(this.inputRef.current.value);
    }

    render() {
    return (
        <>
      <div>RefsDemo</div>
      {/* first method */}
      {/* <input type="text" ref={this.inputRef}/> */}
      <button onClick={this.clickHandler}>click</button>
      <input type="text" ref={this.setCbf}/>

        </>
    )
  }
}

export default RefsDemo