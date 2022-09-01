import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { useEffect, useRef, useState } from 'react';
import { TbVolume, TbVolumeOff } from 'react-icons/tb';

const Video = (
  {
    url, setEnded, playing, setPlaying, ended,
  },
) => {
  const [muted, setMuted] = useState(false);
  const playerRef = useRef(null);
  useEffect(() => {
    if (ended) {
      setTimeout(() => {
        playerRef.current.seekTo(0, 'second');
        setPlaying(false);
      }, 800);
    }
  }, [ended]);

  return (
    <>
      <div onClick={() => playing && setPlaying(false)} className="video__container">
        <ReactPlayer
          ref={playerRef}
          onReady={() => console.log('ready')}
          width="100%"
          height="100%"
          className="video"
          url={url}
          playing={playing}
          onEnded={() => setEnded(true)}
        />
        {!playing
        && (
        <button
          type="button"
          className="video__play"
          onClick={() => setPlaying(true)}
        >
          Play
        </button>
        )}
      </div>
      <button
        type="button"
        className="button__muted"
        onClick={() => {
          setMuted(!muted);
        }}
      >
        {muted
          ? <TbVolumeOff />
          : <TbVolume />}
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
