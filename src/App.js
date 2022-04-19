import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Countries from './components/Detailspage/Countries';
import Pollutions from './components/Homepage/Pollutions';
import Regions from './components/Homepage/Regions';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Regions />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/pollution" element={<Pollutions />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
