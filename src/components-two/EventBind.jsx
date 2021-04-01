import React, { Component } from 'react'

export default class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            id : 101,
            message : "Hello React Application"
        }
        this.clickHandle = this.clickHandle.bind(this)
    }
    
    clickHandle(){
        this.setState({
            message : "Good Bye!"
        })
    }

    usingArrow = () => {
        this.setState({
            message : "Button Clicked using Arrow Function"
        })
    }

    handleClick = (id,j,e) => {
        console.log(id);
        console.log(e);
        console.log(j);
    }

    handleClikArg = (e) => {
        this.handleClick(this.state.id, "105", e);
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandle.bind(this)} >Click Me</button> */}
                {/* <button onClick={() => this.clickHandle()} >Click Me</button> */}
                <button onClick={this.clickHandle} >Click Me</button>
                <button onClick={this.usingArrow} >Arrow</button>
                <button onClick={this.handleClikArg} >Arguments</button>
            </div>
        )
    }
}
