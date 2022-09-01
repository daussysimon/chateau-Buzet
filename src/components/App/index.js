// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import data from 'src/utils/data';
import Page1 from 'src/components/Page1';
import Page2 from 'src/components/Page2';
import Page3 from 'src/components/Page3';
import Page4 from 'src/components/Page4';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
// == Composant
function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [langage, setLangage] = useState('fr');
  const [association, setAssociation] = useState('');
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== '/') {
      setPageNumber(2);
    }
  }, [location]);
  return (
    <div className="app">
      <Header pageNumber={pageNumber} langage={langage} setLangage={setLangage} />
      <Routes>
        <Route path="/" element={<Page1 setPageNumber={setPageNumber} pageNumber={pageNumber} data={data[langage].page1} langage={langage} />} />
        <Route path="/buzet" element={<Page1 setPageNumber={setPageNumber} pageNumber={pageNumber} data={data[langage].page1} langage={langage} />} />
        <Route path="/degustation" element={<Page2 data={data[langage].page2} langage={langage} />} />
        <Route path="/saveurs" element={<Page3 setAssociation={setAssociation} data={data[langage].page3} />} />
        <Route path="/association" element={<Page4 association={association} data={data[langage].page4} />} />
      </Routes>
      <Footer pageNumber={pageNumber} />
    </div>
  );
}
// == Export
export default App;
