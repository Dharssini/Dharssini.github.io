import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import IntentExplorer from './pages/IntentExplorer';
import Projects from './pages/Projects';
import Content from './pages/Content';
import Contact from './pages/Contact';
import ResearchConsole from './pages/ResearchConsole';

import SystemResume from './pages/SystemResume';
import ProjectDetail from './pages/ProjectDetail';
import ResumeMarkdown from './pages/ResumeMarkdown';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col print:min-h-0 print:block">
        <div className="print:hidden">
          <Navigation />
        </div>
        <main className="flex-grow pt-16 print:pt-0 print:block">
          <Routes>
            {/* Intent-based exploration is now the primary entry */}
            <Route path="/" element={<IntentExplorer />} />

            {/* Traditional portfolio pages (accessible via navigation) */}
            <Route path="/home" element={<Home />} />
            <Route path="/console" element={<ResearchConsole />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/content" element={<Content />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<SystemResume />} />
            <Route path="/resume-markdown" element={<ResumeMarkdown />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
        </main>
        <div className="print:hidden">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
