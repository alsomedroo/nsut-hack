import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Patients } from './pages/Patients';
import { Diagnosis } from './pages/Diagnosis';
import { Analytics } from './pages/Analytics';
import { Generate } from './pages/Generate';
import { SignIn } from './pages/SignIn'; 
import {SignUp} from './pages/SignUp';// Import SignIn component

function App() {
  return (
    <Router>
      <Routes>
        {/* Render SignIn at "/" without the Layout */}
        <Route path="/" element={<SignIn />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/patients" element={<Layout><Patients /></Layout>} />
        <Route path="/diagnosis" element={<Layout><Diagnosis /></Layout>} />
        <Route path="/analytics" element={<Layout><Analytics /></Layout>} />
        <Route path="/generate" element={<Layout><Generate /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
