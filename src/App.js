import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import DetailsPage from './components/DetailsPage/DetailsPage';
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detailsPage" element={<DetailsPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  </div>
);

export default App;
