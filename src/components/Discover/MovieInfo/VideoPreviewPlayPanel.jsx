import React from 'react'
import { Link } from 'react-router-dom'


const VideoPreviewPlayPanel = ({ fanArt2 }) => {
    return (
        <div className="videoPreview__controlePanel">
            <img className="videoPreview__title" src={fanArt2.url} alt="" />
            <div className="videoPreview__playButton">
                <Link to="/watch" className="movie-card__play-movie">
                    play
                </Link>
                <i className="far fa-thumbs-up"></i>
                <i className="far fa-thumbs-down"></i>
            </div>

        </div>
    )
}

export default VideoPreviewPlayPanel
