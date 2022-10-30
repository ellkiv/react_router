import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <header className="App-header">Welcome to React Router</header>

      <BrowserRouter>
        <Link to="/">Home</Link>{' '}
        <Link to="/About">About</Link>{' '}
        <Link to="/Contact">Contact</Link>{' '}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
