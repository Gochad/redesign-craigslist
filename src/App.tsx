import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { SearchProvider } from "./context/SearchContext";
import HomePage from "./pages/HomePage";
import GlobalStyles from "./GlobalStyles";
import Subcategory from "./pages/Subcategory";

import ContactPage from "./pages/HeaderLinks/Contact";
import HelpFaqAbuseLegalPage from "./pages/HeaderLinks/HelpFAQAbuseLegal";
import AvoidScamsPage from "./pages/HeaderLinks/AvoidScams";
import PersonalSafetyTipsPage from "./pages/HeaderLinks/PersonalSafetyTips";
import AboutCraigslistPage from "./pages/HeaderLinks/AboutCraigslist";
import BestOfCraigslistPage from "./pages/HeaderLinks/BestOfCraigslist";
import CareersPage from "./pages/HeaderLinks/Careers";
import WhatsNewPage from "./pages/HeaderLinks/WhatsNew";
import SystemStatusPage from "./pages/HeaderLinks/SystemStatus";
import CraigslistCharitablePage from "./pages/HeaderLinks/CraigslistCharitable";
import CraigNewmarkPhilanthropiesPage from "./pages/HeaderLinks/CraigNewmarkPhilanthropies";
import CreatePost from "./pages/CreatePost";
import FooterPage from "./pages/FooterPage";
import UserPage from "./pages/UserPage";
import ForumPage from "./pages/ForumPage";

function App() {
  return (
    <UserProvider>
      <SearchProvider>
        <Router basename={"/"}>
          <GlobalStyles />
          <Routes>
            <Route path="/redesign-craigslist" element={<HomePage />} />
            <Route path="/subcategories" element={<Subcategory />}></Route>
            <Route path="/create" element={<CreatePost />}></Route>
            <Route path="/user" element={<UserPage />} />
            <Route path="/forum" element={<ForumPage />} />

            <Route path="/:pageName" element={<FooterPage />} />

            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/help-faq-abuse-legal"
              element={<HelpFaqAbuseLegalPage />}
            />
            <Route path="/avoid-scams" element={<AvoidScamsPage />} />
            <Route path="/safety-tips" element={<PersonalSafetyTipsPage />} />
            <Route path="/craigslist-about" element={<AboutCraigslistPage />} />
            <Route
              path="/best-of-craigslist"
              element={<BestOfCraigslistPage />}
            />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/whats-new" element={<WhatsNewPage />} />
            <Route path="/system-status" element={<SystemStatusPage />} />
            <Route path="/charity" element={<CraigslistCharitablePage />} />
            <Route
              path="/philanthropies"
              element={<CraigNewmarkPhilanthropiesPage />}
            />
          </Routes>
        </Router>
      </SearchProvider>
    </UserProvider>
  );
}

export default App;
