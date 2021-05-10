import React from 'react'

const MovieLaneCard = ({backdropPath}) => {
    return (
        <div>
            <img src={backdropPath} alt="" style={{height: "10%"}} />
        </div>
    )
}

export default MovieLaneCard
