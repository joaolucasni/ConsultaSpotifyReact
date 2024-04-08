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

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
