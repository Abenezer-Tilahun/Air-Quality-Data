import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './components/Homepage/Homepage';
import DetailsPage from './components/Detailspage/Detailspage';
import Navbar from './components/Navbar/Navbar';
import store from './Redux/configureStore';
import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Navbar />
      <div className="pageContainer">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detailsPage" element={<DetailsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  </Provider>
);

export default App;
