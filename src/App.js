import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  BrowserRouter,
} from "react-router-dom";
import Home from './pages/Home';
import FormPage from './pages/FormPage';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/form/:artistName" element={<FormPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
