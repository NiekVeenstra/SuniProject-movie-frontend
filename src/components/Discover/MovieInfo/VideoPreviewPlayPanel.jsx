import React from 'react'
import { Link } from 'react-router-dom'
import down from '../../../styles/IMG/tumbsDown.svg'
import up from '../../../styles/IMG/tumbsUp.svg'


const VideoPreviewPlayPanel = ({ fanArt2 }) => {
    return (
        <div className="videoPreview__controlePanel">
            <img className="videoPreview__title" src={fanArt2.url} alt="" />
            <div className="videoPreview__playButton">
                <Link to="/watch" className="movie-card__play-movie">
                    play
                </Link>
                {/* <img className="videoPreview__likeIMG" src={down}></img> */}
                <i className="far fa-thumbs-up"></i>
                <i className="far fa-thumbs-down"></i>
                {/* <img className="videoPreview__likeIMG" src={up}></img> */}
            </div>

        </div>
    )
}

export default VideoPreviewPlayPanel
