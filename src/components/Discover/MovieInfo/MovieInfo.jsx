import React, { useState } from 'react'
import VideoPreview from './VideoPreview'
import VideoPreviewText from './VideoPreviewText'

const MovieInfo = () => {
    const [display, setDisplay] = useState(false)
    return (
        <div className={display ? "movieInfo" : "movieInfo-hide"}>
            <VideoPreview />
            <VideoPreviewText />
        </div>
    )
}

export default MovieInfo
