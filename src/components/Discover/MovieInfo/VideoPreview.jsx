import React from 'react'
import ReactPlayer from "react-player/youtube";


const VideoPreview = () => {
    return (
        <div className="videoPreview">
           <div className="videoPreview__container">
            <ReactPlayer
                className="videoPreview__player"
                width="100%"
                height="100%"
                playing={true}
                muted={true}
                controls={true}
                loop={true}
                url="https://www.youtube.com/embed/odM92ap8_c0"
                // onLoad={() => setMute(!mute)}
            ></ReactPlayer>
            </div>
        </div>
    )
}

export default VideoPreview
