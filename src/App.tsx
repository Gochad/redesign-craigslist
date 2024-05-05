import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GlobalStyles from './GlobalStyles';
import Subcategory from './pages/Subcategory';

import ContactPage from './pages/HeaderLinks/Contact';
import HelpFaqAbuseLegalPage from './pages/HeaderLinks/HelpFAQAbuseLegal';
import AvoidScamsPage from './pages/HeaderLinks/AvoidScams';
import PersonalSafetyTipsPage from './pages/HeaderLinks/PersonalSafetyTips';
import AboutCraigslistPage from './pages/HeaderLinks/AboutCraigslist';
import BestOfCraigslistPage from './pages/HeaderLinks/BestOfCraigslist';

function App() {
  return (
    <Router>
        <div>
          <GlobalStyles />
            <Routes>
                <Route path="" element={<HomePage />} />
                <Route path="/subcategories/" element={<Subcategory/>}></Route>

                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/help-faq-abuse-legal" element={<HelpFaqAbuseLegalPage/>} />
                <Route path="/avoid-scams" element={<AvoidScamsPage/>} />
                <Route path="/safety-tips" element={<PersonalSafetyTipsPage/>} />
                <Route path="/craigslist-about" element={<AboutCraigslistPage/>} />
                <Route path="/best-of-craigslist" element={<BestOfCraigslistPage/>} />

            </Routes>
        </div>
    </Router>
  );
}

export default App;
