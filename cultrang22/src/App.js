import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          {/* <Route exact path="/event-arts" element={<ArtsEvents />} />
          <Route exact path="/event-literature" element={<LiteratureEvents />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
