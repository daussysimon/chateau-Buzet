import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { useState } from 'react';

const Video = (
  {
    url, setEnded, playing, setPlaying, ended,
  },
) => {
  const [muted, setMuted] = useState(false);
  return (
    <>
      <div onClick={() => playing && setPlaying(false)} className={ended ? 'video__container--invisible video__container' : 'video__container'}>
        <ReactPlayer
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
        className="video__muted"
        onClick={() => {
          setMuted(!muted);
        }}
      >
        muted
        {muted
        && <span className="video__muted--true"> </span>}
      </button>
    </>
  );
};

Video.propTypes = {
  ended: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  setEnded: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
  setPlaying: PropTypes.func.isRequired,
};

export default Video;
