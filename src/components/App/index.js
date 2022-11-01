// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import data from 'src/utils/data';
import Page1 from 'src/components/Page1';
import Page2 from 'src/components/Page2';
import Page3 from 'src/components/Page3';
import Page4 from 'src/components/Page4';
import Page5 from 'src/components/Page5';
import Page404 from 'src/components/Page404';
import PageMentions from 'src/components/pageMentions';
import { useEffect, useState, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import loaderGif from 'src/assets/pictures/loader.gif';
import useIsMobile from 'src/hooks/useIsMobile';
import 'src/styles/mobileStyle.scss';
// == Composant
function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [langage, setLangage] = useState('fr');
  const [association, setAssociation] = useState('');
  const [loading, setloading] = useState(false);
  const location = useLocation();
  const { isMobile } = useIsMobile();

  useEffect(() => {
    if (location.pathname !== '/') {
      setPageNumber(2);
    }
    document.addEventListener('onload', () => {
    });
  }, [location]);

  return (
    <div className={isMobile ? 'main main--mobile' : 'main'} style={isMobile ? { height: window.innerHeight - 70 } : {}}>
      <Suspense fallback={(
        <div className="loader__container">
          <img src={loaderGif} alt="loader" />
        </div>
)}
      >
        <Header
          pageNumber={pageNumber}
          langage={langage}
          setLangage={setLangage}
          data={data[langage].header}
        />
        <Routes>
          <Route path="/" element={<Page1 setPageNumber={setPageNumber} pageNumber={pageNumber} data={data[langage].page1} langage={langage} />} />
          <Route path="/histoire" element={<Page1 setPageNumber={setPageNumber} pageNumber={pageNumber} data={data[langage].page1} langage={langage} />} />
          <Route path="/degustation" element={<Page2 data={data[langage].page2} langage={langage} />} />
          <Route path="/context_degustation" element={<Page3 setAssociation={setAssociation} data={data[langage].page3} />} />
          <Route path="/context_degustation/:degustationType" element={<Page4 association={association} data={data[langage].page4} langage={langage} />} />
          <Route path="/socialmedia" element={<Page5 data={data[langage].page5} />} />
          <Route path="/mentions_legales" element={<PageMentions data={data[langage].pageMentions} />} />
          <Route path="*" element={<Page404 data={data[langage].page404} langage={langage} />} />
        </Routes>
        <Footer pageNumber={pageNumber} data={data[langage].footer} />
      </Suspense>
    </div>
  );
}
// == Export
export default App;
