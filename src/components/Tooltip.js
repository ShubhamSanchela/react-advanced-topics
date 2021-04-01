import React, { forwardRef } from 'react'
import Tippy from '@tippyjs/react'
import "tippy.js/dist/tippy.css"

const ColoredTooltip = () => {
    return <span style={{ color: "yellow" }}>Colored Component</span>
}

const CustomChild = forwardRef((props, ref) => {
return(
    <div ref={ref}>
        <div>First Line</div>
        <div>Second Line</div>
    </div>
    )
})

function Tooltip() {
    return(
        <div className="App">
            <div style={{ padding:"20px" }}>
                <Tippy placement="right" arrow={false} delay={1000} content="Basic Content">
                    <button>Hover</button>
                </Tippy>
            </div>

            <div style={{ padding:"20px" }}>
                <Tippy content={ <span style={{ color:"orange" }} >Colored</span> }>
                    <button>Hover</button>
                </Tippy>
            </div>

            <div style={{ padding:"20px" }}>
                <Tippy content={ <ColoredTooltip /> }>
                    <button>Hover</button>
                </Tippy>
            </div>

            <div style={{ padding:"20px" }}>
                <Tippy placement="top-start" content={ <ColoredTooltip /> }>
                    <CustomChild />
                </Tippy>
            </div>
         </div>
    )
}
export default Tooltip