import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Project } from "./screens/Project";
import { ClientFormPage } from './pages/ClientFormPage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { PersonalInfoPage } from './pages/profile/PersonalInfoPage';
import { WorkExperiencePage } from './pages/profile/WorkExperiencePage';
import { EducationPage } from './pages/profile/EducationPage';
import { SkillsPage } from './pages/profile/SkillsPage';
import { ProfileCompletionPage } from './pages/profile/ProfileCompletionPage';
import { DashboardPage } from './pages/DashboardPage';
import { AboutPage } from './pages/AboutPage';
import { useEffect } from 'react';

// ScrollToTop component to handle scroll behavior
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/submit-idea" element={<ClientFormPage />} />
        <Route path="/project/:id" element={<ProjectDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
        {/* Profile Creation Routes */}
        <Route path="/profile/personal-info" element={<PersonalInfoPage />} />
        <Route path="/profile/work-experience" element={<WorkExperiencePage />} />
        <Route path="/profile/education" element={<EducationPage />} />
        <Route path="/profile/skills" element={<SkillsPage />} />
        <Route path="/profile/completion" element={<ProfileCompletionPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};