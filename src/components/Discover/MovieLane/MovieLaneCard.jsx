import React from 'react'

const MovieLaneCard = ({backdrop, name}) => {
    return (
        <div className="movieLaneCard">
            <img src={backdrop} alt=""/>
            <h1>{name}</h1>
        </div>
    )
}

export default MovieLaneCard
