import { useState } from 'react';
import Video from 'src/components/Video';
import videoFr from 'src/assets/videos/videotest.mp4';
import PropTypes from 'prop-types';

const Winery = () => {
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);

  return (
    <Video
      url={videoFr}
      setPlaying={setPlaying}
      playing={playing}
      setEnded={setEnded}
      ended={ended}
    />
  );
};
export default Winery;
