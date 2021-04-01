import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

// Method passing as props to the Child Component
export default class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName : 'Parent'
        }
        // this.parentName = this.parentName.bind(this)
    }
    
    greetParentName = (childName) => {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParentName} />
            </div>
        )
    }
}
