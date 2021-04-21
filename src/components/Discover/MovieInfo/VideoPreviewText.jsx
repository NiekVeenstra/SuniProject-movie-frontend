import React from "react";
import MovieInfo from "./MovieInfo";

const VideoPreviewText = ({ videoInfo, videoInfo2 }) => {
  console.log(videoInfo2);
  return (
    <div className="videoPreviewText">
      <div className="videoPreviewText__1">
        <div className="videoPreviewText__1-1">
          <br />
          <p>
            <span>97% match </span> #ICON #ICON min.
          </p>
          <h2>#icon nr.8 in films vandaag</h2>
          <br />
          <p id="SamenvattingFilm">{videoInfo.overview}</p>
        </div>
        <div className="videoPreviewText__1-2">
          <br />
          <p>
            <span>Cast:</span> informatie, Brad Pitt, Goldie, Hawn, Acteur
          </p>
          {/* <p><span>Genres:</span>{videoInfo2.data.genres[0].name}, {videoInfo2.data.genres[1].name}</p> */}
          <p>
            <span>Deze film is:</span> meeslepend
          </p>
        </div>
      </div>
      <div className="videoPreviewText__2">
        <h1>{videoInfo.title}</h1>
        <br />
        <p>
          <span>Regiseur:</span> API
        </p>
        <p>
          <span>CAST:</span> API
        </p>
        <p>
          <span>SCHRIJVER:</span> api
        </p>
        {/* <p><span>GENRE:</span>{videoInfo2.data.genres[0].name}, {videoInfo2.data.genres[1].name}</p> */}
        <p>
          <span>DEZE TITEL IS:</span> MEESLEPEND, FEELGOOD
        </p>
        <p>
          <span>LEEFTIJDCLASSIFICATIE:</span> #ICON #ICON kan angst en geweld bevatten.
        </p>
      </div>
    </div>
  );
};

export default VideoPreviewText;
