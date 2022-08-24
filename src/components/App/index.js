// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Page1 from 'src/components/Page1';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// == Composant
function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [langage, setLangage] = useState('fr');
  return (
    <div className="app">
      <Header pageNumber={pageNumber} langage={langage} setLangage={setLangage} />
      <Routes>
        <Route path="/" element={<Page1 setPageNumber={setPageNumber} pageNumber={pageNumber} />} />
        <Route path="/buzet" element={<Page1 setPageNumber={setPageNumber} pageNumber={pageNumber} />} />
      </Routes>
      <Footer pageNumber={pageNumber} />
    </div>
  );
}
// == Export
export default App;
