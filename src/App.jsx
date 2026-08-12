import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NetworkBackground from "./components/NetworkBackground";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import EducationPage from "./pages/EducationPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import ExperienceDetails from "./pages/ExperienceDetails";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetails from "./pages/ProjectDetails";
import CertificationsPage from "./pages/CertificationsPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NetworkBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* NEW: padding-top reserves space for the now-fixed Navbar; value is set by Navbar via CSS var */}
        <main className="flex-1" style={{ paddingTop: "var(--navbar-h, 6rem)" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/experience/:id" element={<ExperienceDetails />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/certifications" element={<CertificationsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
