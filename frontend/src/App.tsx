import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./views/main/Start";
import Main from "./views/main/Main";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Start />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
