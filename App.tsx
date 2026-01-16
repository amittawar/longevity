
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsServices } from './components/TermsServices';
import { Support } from './components/Support';
import { ThankYou } from './components/ThankYou';

const App: React.FC = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsServices />} />
        <Route path="/support" element={<Support />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};

export default App;
