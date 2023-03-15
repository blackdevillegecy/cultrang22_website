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
import Promo from './components/Events/components/Passes/Promo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes >
          <Route exact path="/~cultrang" element={<MainPage />} />
          <Route exact path="/~cultrang/event-music" element={<Music />} />
          <Route exact path="/~cultrang/event-dramatics" element={<Dramatics />} />
          <Route exact path="/~cultrang/event-dance" element={<Dance />} />
          <Route exact path="/~cultrang/event-fun" element={<Fun />} />
          <Route exact path="/~cultrang/event-fine-arts" element={<FineArts />} />
          <Route exact path="/~cultrang/event-dda" element={<DDA />} />
          <Route exact path="/~cultrang/event-fashion" element={<Fashion />} />
          <Route exact path="/~cultrang/event-literary-arts" element={<LiteraryArts />} />
          <Route exact path="/~cultrang/coming-soon" element={<Promo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
