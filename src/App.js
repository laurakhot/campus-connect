import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
