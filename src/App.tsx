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
import Resume_Qualcomm_LeadML from './pages/Resume_Qualcomm_LeadML';
import Resume_Adobe_AIEngineer from './pages/Resume_Adobe_AIEngineer';
import Resume_RedHat_FDE_Inference from './pages/Resume_RedHat_FDE_Inference';
import Resume_RedHat_SSE_Ecosystems from './pages/Resume_RedHat_SSE_Ecosystems';
import Resume_AMD_GPU_AIEngineer from './pages/Resume_AMD_GPU_AIEngineer';
import Resume_AMD_GPGPU_Kernel from './pages/Resume_AMD_GPGPU_Kernel';
import Resume_Cerebras_ML_Inference from './pages/Resume_Cerebras_ML_Inference';
import ProjectDetail from './pages/ProjectDetail';
import ResumeMarkdown from './pages/ResumeMarkdown';
import BlogDetail from './pages/BlogDetail';

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
            <Route path="/resume/qualcomm-lead-ml" element={<Resume_Qualcomm_LeadML />} />
            <Route path="/resume/adobe-ai-engineer" element={<Resume_Adobe_AIEngineer />} />
            <Route path="/resume/redhat-fde-inference" element={<Resume_RedHat_FDE_Inference />} />
            <Route path="/resume/redhat-sse-ecosystems" element={<Resume_RedHat_SSE_Ecosystems />} />
            <Route path="/resume/amd-gpu-ai-engineer" element={<Resume_AMD_GPU_AIEngineer />} />
            <Route path="/resume/amd-gpgpu-kernel" element={<Resume_AMD_GPGPU_Kernel />} />
            <Route path="/resume/cerebras-ml-inference" element={<Resume_Cerebras_ML_Inference />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
            <Route path="/blog/:blogId" element={<BlogDetail />} />
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
