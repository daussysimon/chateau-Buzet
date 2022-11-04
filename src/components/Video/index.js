import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { useEffect, useRef, useState } from 'react';
import playLogo from 'src/assets/pictures/playLogo.png';
import songIcon from 'src/assets/pictures/songIcon.png';
import loaderGiff from 'src/assets/pictures/loader.gif';

const Video = (
  {
    url, setEnded, playing, setPlaying, ended,
  },
) => {
  const [muted, setMuted] = useState(false);
  const [loader, setLoader] = useState(false);
  const playerRef = useRef(null);
  useEffect(() => {
    if (ended) {
      setTimeout(() => {
        playerRef.current.seekTo(0, 'second');
        setPlaying(false);
      }, 800);
    }
  }, [ended]);

  useEffect(() => {
    setInterval(() => {
      console.log(playerRef.current.getSecondsLoaded());
    }, 800);
  }, []);

  return (
    <>
      { loader && (
      <div className="loader">
        <img src={loaderGiff} alt="loader" />
      </div>
      )}
      <div onClick={() => playing && setPlaying(false)} className="video__container">
        <ReactPlayer
          ref={playerRef}
          width="100%"
          height="100%"
          className="video"
          url={url}
          playing={playing}
          progressInterval={100}
          muted={muted}
          fallback={(
            <div className="loader">
              <img src={loaderGiff} alt="loader" />
            </div>
          )}
          onEnded={() => setEnded(true)}
        />
        {!playing
        && (
        <div
          className="video__play"
          onClick={() => setPlaying(true)}
        >
          <img src={playLogo} alt="play" />
        </div>
        )}
      </div>
      <button
        type="button"
        className={muted ? 'button__song button__song--muted' : 'button__song'}
        onClick={() => {
          setMuted(!muted);
        }}
      >
        <img src={songIcon} alt="song" />
        {muted && <span> </span>}
      </button>
    </>
  );
};

Video.propTypes = {
  url: PropTypes.string.isRequired,
  setEnded: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
  setPlaying: PropTypes.func.isRequired,
  ended: PropTypes.bool.isRequired,
};

export default Video;
