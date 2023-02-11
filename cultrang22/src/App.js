import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Music from './components/Events/components/Music/Music';
import LiteraryArts from './components/Events/components/Literary-Arts/LiteraryArts';
import Dance from './components/Events/components/Dance/Dance';
import Fun from './components/Events/components/Fun/Fun';
import FineArts from './components/Events/components/Fine-Arts/FineArts';
import Dramatics from './components/Events/components/Dramatics/Dramatics';
import DDA from './components/Events/components/DDA/DDA';
import Fashion from './components/Events/components/Fashion/Fashion';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/event-music" element={<Music />} />
          <Route exact path="/event-dramatics" element={<Dramatics />} />
          <Route exact path="/event-dance" element={<Dance />} />
          <Route exact path="/event-fun" element={<Fun />} />
          <Route exact path="/event-fine-arts" element={<FineArts />} />
          <Route exact path="/event-dda" element={<DDA />} />
          <Route exact path="/event-fashion" element={<Fashion />} />
          <Route exact path="/event-literary-arts" element={<LiteraryArts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
