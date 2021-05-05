import React from 'react'

const MovieLaneCard = ({backdropPath, name}) => {
    return (
        <div className="movieLaneCard">
            <img src={backdropPath} alt=""/>
            <h1>{name}</h1>
        </div>
    )
}

export default MovieLaneCard
