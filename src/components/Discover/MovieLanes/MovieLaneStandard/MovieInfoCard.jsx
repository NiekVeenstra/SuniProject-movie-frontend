import React, { useContext, useState } from "react";
import ReactPlayer from "react-player";
import { Context } from "../../../../Context/Context";

const MovieInfoCard = () => {
  const { movieInfo, setMovieInfo } = useContext(Context);
  const { movieInfoAbout, setMovieInfoAbout } = useContext(Context);
  const { movieInfoVideo, setMovieInfoVideo } = useContext(Context);

  const [mute, setMute] = useState(true);

//   console.log(movieInfoVideo);
  const closeWindowHandler = (e) => {
    setMovieInfo(!movieInfo);
  };
  return (
    <div
      className={movieInfo ? "movieInfoCard-outer" : "movieInfoCard-hidden"}
      //   className="movieInfoCard-outer"
      onClick={closeWindowHandler}
    >
      <div className="movieInfoCard" onClick={(e) => e.stopPropagation()}>
        {/*  */}
        <div className="videoPreview">
          <div className="videoPreview__container">
            <ReactPlayer
              className="videoPreview__player"
              width="100%"
              height="100%"
              playing={true}
              muted={mute}
              controls={false}
              loop={true}
              // backend
              // url={videoPrev2.key}
              // api
              url={`https://www.youtube.com/watch?v=${movieInfoVideo.key}`}
            ></ReactPlayer>
            <button className="videoPreview__close-window" onClick={() => setMovieInfo(!movieInfo)}>
              <strong>X</strong>
            </button>
            {/* <VideoPreviewPlayPanel fanArt2={fanArt2} /> */}

            <button className="preview__button-sound2" onClick={() => setMute(!mute)}>
              <div className={mute ? "sound-img-on sound-img" : "sound-img-off sound-img"} />
            </button>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default MovieInfoCard;
