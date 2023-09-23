import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Web from './pages/Main/Main';
import Result from './pages/Result/Result';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Web />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
