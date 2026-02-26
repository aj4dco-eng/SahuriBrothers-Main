import './App.css'
import './rtl-support.css'
import './pages/PublicPages.css'
import { LanguageProvider } from './context/LanguageContext'
import { RoleProvider } from './context/RoleContext'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import Hero from './components/Hero'
import PlanExecuteSection from './components/PlanExecuteSection'
import ProjectsGallery from './components/ProjectsGallery'
import VideoSection from './components/VideoSection'
import ClientsCarousel from './components/ClientsCarousel'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import PublicProjects from './pages/PublicProjects'
import PublicProjectsPrivate from './pages/PublicProjectsPrivate'
import PublicProjectsCommercial from './pages/PublicProjectsCommercial'
import PublicServices from './pages/PublicServices'
import PublicTeam from './pages/PublicTeam'
import AccessibilityDeclaration from './pages/AccessibilityDeclaration'

function App() {
  return (
    <LanguageProvider>
      <RoleProvider>
        <AuthProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<PublicProjects />} />
              <Route path="/projects/private" element={<PublicProjectsPrivate />} />
              <Route path="/projects/private-projects" element={<PublicProjectsPrivate />} />
              <Route path="/projects/commercial" element={<PublicProjectsCommercial />} />
              <Route path="/services" element={<PublicServices />} />
              <Route path="/team" element={<PublicTeam />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/accessibility-declaration" element={<AccessibilityDeclaration />} />
              <Route path="/AccessabilityDeclaration" element={<AccessibilityDeclaration />} />
              <Route path="/" element={
                <main id="app" className="homepage">
                  <Hero />
                  <PlanExecuteSection />
                  <ProjectsGallery />
                  <VideoSection />
                  <ClientsCarousel />
                  <ContactForm />
                  <Footer />
                </main>
              } />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </RoleProvider>
    </LanguageProvider>
  )
}

export default App
