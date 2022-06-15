import React, { Component } from 'react'

 class Form extends Component {
    constructor(){
        super()
        this.state = {
            userName : '',
            comment : '',
            topic : 'react'
        }
    }

    handleUserName = (event) => {
        this.setState({
            userName : event.target.value
        })
        console.log(event.target.value);
    }
    handleComment = (event) =>{
        this.setState({
            comment : event.target.value
        })
        console.log(event.target.value);
    }
    
    frameworkChoose = (event) =>{
        this.setState({
            topic : event.target.value
        })
        console.log(event.target.value);
    }
    handleSubmit = (event) =>{
        console.log(`${this.state.userName} -> ${this.state.comment} -> ${this.state.topic}`);
        // this is used , when we dont want default behaviour of submit button (refresh page)
        event.preventDefault();
    }

  render() {
    // destructure (using this we dont have to write this.state every time)
    const {userName, comment, topic} = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>UserName</label>
            <input type="text" value={this.state.userName} onChange={this.handleUserName}></input>
      </div>

      <div>
        <label>comment</label>
        <input type="text" value={this.state.comment} onChange={this.handleComment}></input>
      </div>

      <div>
        <label>choose One :</label>
        <select value={this.state.topic} onChange={this.frameworkChoose}>
            {/* selected value goes to event object as value, which will be set to topic property */}
            <option value="react"> React </option>
            <option value="angular"> Angular </option>
            <option value="vue"> Vue </option>
        </select>
      </div>
      
      <button type="submit">Submit</button>

      </form>
    )
  }
}

export default Form