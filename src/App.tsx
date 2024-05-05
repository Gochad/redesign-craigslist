import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GlobalStyles from './GlobalStyles';
import Subcategory from './pages/Subcategory';

function App() {
  return (
    <Router>
        <div>
          <GlobalStyles />
            <Routes>
                <Route path="" element={<HomePage />} />
                <Route path="/subcategories/" element={<Subcategory/>}></Route>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
