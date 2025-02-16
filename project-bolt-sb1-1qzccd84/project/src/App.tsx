import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Patients } from './pages/Patients';
import { Diagnosis } from './pages/Diagnosis';
import { Analytics } from './pages/Analytics';
import { Generate } from './pages/Generate'; // Import the Describe page

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/diagnosis" element={<Diagnosis />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/generate" element={<Generate />} /> {/* Add the Describe route */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
