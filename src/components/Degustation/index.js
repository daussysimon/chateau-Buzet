import { useState } from 'react';
import { Link } from 'react-router-dom';
import Video from 'src/components/Video';
import videoFr from 'src/assets/videos/videotest.mp4';

const Degustation = () => {
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);

  return (
    <main className=" main main--degustation">
      <Video
        url={videoFr}
        setPlaying={setPlaying}
        playing={playing}
        setEnded={setEnded}
        ended={ended}
      />
      { ended
      && (
      <nav className="nav__degustation">
        <button className="button button--toDegustation" type="button">Rejouer</button>
        <Link className="button button--toOut" to={<Degustation />}>Sortir</Link>
      </nav>
      )}
    </main>
  );
};

export default Degustation;
