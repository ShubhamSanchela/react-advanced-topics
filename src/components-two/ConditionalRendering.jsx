import React, { Component } from 'react'

export default class ConditionalRendering extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    render() {

        // One Way
        return this.state.isLoggedIn && <p>Welcome Shubham</p>

        // Two Way
        // return (
        //     this.state.isLoggedIn ? 
        //     <div>WelCome Shubham</div> : 
        //     <div>Welcome Guest</div>
        // )

        // Three Way
        // let message
        // if(this.state.isLoggedIn){
        //    message = <p>Welcome Shubham</p>
        // }else{
        //    message = <p>Welcome Guest</p>
        // }
        // return  <div>{message}</div>
        
    }
}
