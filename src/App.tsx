import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { InternMeProject } from './pages/InternMeProject';
import { EquilibrasProject } from './pages/EquilibrasProject';
import { EdufusionProject } from './pages/EdufusionProject';
import { SrsAcademyProject } from './pages/SrsAcademyProject';
import { ProEdgeProject } from './pages/ProEdgeProject';
import { PplsyncProject } from './pages/PplsyncProject';
import { QuickApplyProject } from './pages/QuickApplyProject';
import { Contact } from './pages/Contact';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/8" element={<InternMeProject />} />
        <Route path="/projects/9" element={<EquilibrasProject />} />
        <Route path="/projects/equilibras" element={<EquilibrasProject />} />
        <Route path="/projects/10" element={<EdufusionProject />} />
        <Route path="/projects/edufusion" element={<EdufusionProject />} />
        <Route path="/projects/11" element={<SrsAcademyProject />} />
        <Route path="/projects/srs" element={<SrsAcademyProject />} />
        <Route path="/projects/srs-academy" element={<SrsAcademyProject />} />
        <Route path="/projects/12" element={<ProEdgeProject />} />
        <Route path="/projects/proedge" element={<ProEdgeProject />} />
        <Route path="/projects/13" element={<PplsyncProject />} />
        <Route path="/projects/pplsync-app" element={<PplsyncProject />} />
        <Route path="/projects/14" element={<QuickApplyProject />} />
        <Route path="/projects/quick-apply" element={<QuickApplyProject />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}