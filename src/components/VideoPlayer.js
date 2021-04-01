import React from 'react'
import "./Video.css"
import ReactPlayer from "react-player"

function Video() {
    return(
        <div className="App">
            <ReactPlayer 
            width="480px"
            height="240px"
            controls
            url="https://www.youtube.com/watch?v=7sDY4m8KNLc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=12"
            onReady ={ () => console.log("onReady CallBack") }
            onStart ={ () => console.log("onStart CallBack") }
            onPause ={ () => console.log("onPause CallBack") }
            onEnded ={ () => console.log("onEnded CallBack") }
            onError ={ () => console.log("onError CallBack") }
            />  
        </div>
    )
}
export default Video;