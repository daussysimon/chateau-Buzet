/* eslint-disable no-undef */
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import playLogo from 'src/assets/pictures/playLogo.png';
import songIcon from 'src/assets/pictures/songIcon.png';
import LoaderLogo from 'src/components/LoaderLogo';

const Video = (
  {
    url, setEnded, playing, setPlaying, ended,
  },
) => {
  const [muted, setMuted] = useState(false);
  const [loader, setLoader] = useState(true);
  const [loaded, setLoaded] = useState(0);
  const playerRef = useRef(null);
  useEffect(() => {
    if (ended) {
      setTimeout(() => {
        playerRef.current.currentTime = 0.2;
        setPlaying(false);
      }, 800);
    }
  }, [ended]);
  useEffect(() => {
    setLoader(true);
    setLoaded(0);
    const xhr = new XMLHttpRequest();
    playerRef.current.currentTime = 0.2;
    playerRef.current.pause();
    playerRef.current.addEventListener('ended', () => setEnded(true));
    setPlaying(false);
    xhr.open('get', url);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      playerRef.current.src = (URL || webkitURL).createObjectURL(xhr.response);
      caches.open('writeCache').then((cache) => {
        cache.add(xhr.response).then(() => {
          console.log('Cache added');
        });
      });
      playerRef.current.load();
      setLoader(false);
    };
    xhr.send();
    xhr.addEventListener('progress', (e) => {
      setLoaded(Math.floor((e.loaded * 100) / e.total));
    });
  }, [url]);

  const handlePause = () => {
    if (playing) {
      playerRef.current.pause();
      setPlaying(false);
    }
  };
  return (
    <>
      { loader && <LoaderLogo loaded={loaded} /> }
      <div onClick={handlePause} className="video__container">
        <video ref={playerRef} width="100%" height="100%" muted={muted}><track kind="captions" /></video>
        {!playing
        && (
        <div
          className="video__play"
          onClick={() => {
            setPlaying(true); playerRef.current.play();
          }}
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
