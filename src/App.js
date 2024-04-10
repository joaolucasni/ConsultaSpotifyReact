import React, { useState } from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from './pages/Home';
import FormPage from './pages/FormPage';

function App() {
  return (
    <div>
      {/*defining used routes*/}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form/:artistName" element={<FormPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
