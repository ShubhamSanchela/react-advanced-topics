import React from 'react'
import "./Video.css"
import { BounceLoader, BarLoader, BeatLoader } from "react-spinners"

function Spinners() {
    return (
        <div className="spinner">
            <BounceLoader size={42} color="red" loading />
            <BarLoader size={50} color="orange" loading />
            <BeatLoader size={70} color="pink" loading />
        </div>
    )
}

export default Spinners
