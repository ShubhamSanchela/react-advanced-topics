import React, { Component } from 'react'

// Destructure of props and State using Functional and Class Components

// One Way
// const Destructure = props => {
//     const {name , heroname} = props
//     return (
//         <div>
//            <h1>Hello {name} a.k.a {heroname}</h1>            
//         </div>
//     )
// }
// export default Destructure

// Two Way
// const Destructure = ({name, heroname}) => {
//     return (
//         <div>
//             <h1>Hello {name} a.k.a {heroname} </h1>
//         </div>
//     )
// }
// export default Destructure

export default class Destructure extends Component {
    render() {
        const {name, heroname} = this.props
        return (
            <div>
                <h1>Hello {name} a.k.a {heroname} </h1>
            </div>
        )
    }
}


