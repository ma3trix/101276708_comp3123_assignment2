import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My App!</h1>
      <p>This is the homepage.</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEmployee />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
