import React from 'react'
import "./myStyle.css"

function StyleSheet(props) {

    const heading = {
        fontSize : '72px',
        color : "blue"
    }
    let className = props.primary ? 'primary' : 'secondary'

    return (
        <div>
            <h1 className={`${className} font-xl`}>StyleSheet</h1>
            <h1 style={heading}>This is Inline Style Example</h1>
        </div>
    )
}

export default StyleSheet
