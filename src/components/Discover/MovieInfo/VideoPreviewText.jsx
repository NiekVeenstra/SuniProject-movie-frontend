import React from "react";

const VideoPreviewText = ({
  videoInfo,
  videoInfo2,
  videoInfoGenres1,
  productionComp,
  language,
}) => {
  return (
    <div className="videoPreviewText">
      <div className="videoPreviewText__1">
        <div className="videoPreviewText__1-1">
          <br />
          <p>
            Rated Nr.<span> {videoInfo2.vote_average} in popularity.</span> {videoInfo2.runtime}{" "}
            min.
          </p>
          <h2>{videoInfo2.tagline}</h2>
          <br />
          <p id="SamenvattingFilm">{videoInfo.overview}</p>
        </div>
        <div className="videoPreviewText__1-2">
          <br />
          <p>
            <span>Spoken language:</span> {language.name}
          </p>
          <p>
            <span>Genres:</span>
            {videoInfoGenres1.map((genre) => (
              <span>{genre.name}</span>
            ))}
          </p>
          <p>
            <span>Release date:</span> {videoInfo2.release_date}
          </p>
        </div>
      </div>
      <div className="videoPreviewText__2">
        <h1>{videoInfo.title}</h1>
        <br />
        <p>
          <span>production companies:</span>
          {productionComp.name}
        </p>
        <p>
          <span>Spoken language:</span> {language.name}
        </p>
        <p>
          <span>GENRE:</span>{" "}
          {videoInfoGenres1.map((genre) => (
            <span>{genre.name}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default VideoPreviewText;
