import React, { Component } from "react";

// Event Handler using Function Component
function ClickHandler() {

    function ClickHandler(){
        console.log("Button Clicked")
    }
    return (
        <div>
            <button onClick={ClickHandler}>Click</button>
        </div>
    )
}
export default ClickHandler

// Event Handler using Class Component
// export default class ClickHandler extends Component {
//   ClickHandler() {
//     console.log("Button Clicked!!");
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.ClickHandler}>Click Me</button>
//       </div>
//     );
//   }
// }
