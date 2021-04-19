import React, {useState} from 'react'
import ReactPlayer from "react-player/youtube";


const VideoPreview = () => {
    const [mute, setMute] = useState(true);
    return (
        <div className="videoPreview">
           <div className="videoPreview__container">
            <ReactPlayer
                className="videoPreview__player"
                width="100%"
                height="100%"
                playing={true}
                muted={mute}
                controls={true}
                loop={true}
                url="https://www.youtube.com/embed/odM92ap8_c0"
                // onLoad={() => setMute(!mute)}
            ></ReactPlayer>
            <h1>Hello</h1>
                <button className="preview__button-sound2" onClick={() => setMute(!mute)}>
                    <div className={mute ? "sound-img-on sound-img" : "sound-img-off sound-img"} />
                </button>
            </div>
         
        </div>
    )
}

export default VideoPreview
