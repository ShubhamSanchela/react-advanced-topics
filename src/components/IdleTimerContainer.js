import React, { useState, useRef } from 'react'
import IdleTimer from "react-idle-timer"
import { Modal } from "react-modal"

// Modal.setAppElement();

function IdleTimerContainer() {

    const [isLoggedIn, setLoggedIn] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const IdleTimerRef = useRef(null)

    const onIdle = () => {
        console.log("User is Idle");
        setModalIsOpen(true)
    }

    return(
        <div>
            {
                isLoggedIn ? <h2>Hello Shubham</h2> : <h2>Hello Guest</h2>
            }
            <Modal modalIsOpen = {modalIsOpen}>
                <h2>You've been idle foer a while</h2>
                <p>You will be logged out soon</p>
                <div>
                    <button >Log me out</button>
                    <button >Keep me Signed In</button>
                </div>
            </Modal>
            <IdleTimer ref={IdleTimerRef} timeout={5 * 1000} onIdle={onIdle} ></IdleTimer>
        </div>
    )
}
export default IdleTimerContainer