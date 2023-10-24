import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Web from './pages/Main/Main';
import Result from './pages/Result/Result';
import Question1 from './pages/Question/Question1';
import Question2 from './pages/Question/Question2';
import Question3 from './pages/Question/Question3';
import Question4 from './pages/Question/Question4';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Web />} />
        <Route path="/result" element={<Result />} />
        <Route path="/question1" element={<Question1 />} />
        <Route path="/question2" element={<Question2 />} />
        <Route path="/question3" element={<Question3 />} />
        <Route path="/question4" element={<Question4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
