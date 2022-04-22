import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Countries from './components/Detailspage/Countries';
import Pollutions from './components/Homepage/Pollutions';
import Regions from './components/Homepage/Regions';
import SortRegions from './components/Homepage/sort';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Regions />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/pollution" element={<Pollutions />} />
          <Route path="/sort" element={<SortRegions />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
