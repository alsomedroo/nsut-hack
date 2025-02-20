import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Patients } from "./pages/Patients";
import { Diagnosis } from "./pages/Diagnosis";
import { Analytics } from "./pages/Analytics";
import { Generate } from "./pages/Generate";
import { SignIn } from "./pages/SignIn"; 
import { SignUp } from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoute"; // Ensure correct import
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<SignIn />} /> 
          <Route path="/signup" element={<SignUp />} />

          {/* Protected Routes Wrapper */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
            <Route path="/patients" element={<Layout><Patients /></Layout>} />
            <Route path="/diagnosis" element={<Layout><Diagnosis /></Layout>} />
            <Route path="/analytics" element={<Layout><Analytics /></Layout>} />
            <Route path="/generate" element={<Layout><Generate /></Layout>} />
          </Route>

          {/* Redirect invalid routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
