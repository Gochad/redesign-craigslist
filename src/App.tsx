import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <Router>
        <div>
          <GlobalStyles />
            <Routes>
                <Route path="" element={<HomePage />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
