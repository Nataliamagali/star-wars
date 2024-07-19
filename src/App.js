import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResourceForm from './components/ResourceForm';
import ResourceDetail from './components/ResourceDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResourceForm />} />
        <Route path="/:id" element={<ResourceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
