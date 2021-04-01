import React, { Component } from 'react'

export default class Message extends Component {
    constructor(props){
        super(props);

        this.state = {
            name : "React Application Visitor",
            version : this.props.version
        }
    };

    messageChange(){
        this.setState({
            name : "Thanks For Subscribing"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.name} and version : {this.state.version}</h1>
                <button onClick={ () => this.messageChange() }>Subscribe</button>
            </div>
        )
    }
}
