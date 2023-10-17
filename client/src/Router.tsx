import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Web from './pages/Main/Main';
import Result from './pages/Result/Result';
import Question1 from './pages/Question/Question1';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Web />} />
        <Route path="/result" element={<Result />} />
        <Route path="/question" element={<Question1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
