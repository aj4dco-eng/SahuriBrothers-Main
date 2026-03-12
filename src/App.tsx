import './App.css'
import './rtl-support.css'
import './pages/PublicPages.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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
import AccessibilityDeclaration from './pages/AccessibilityDeclaration'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <LanguageProvider>
      <RoleProvider>
        <AuthProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Header />
            <div className="whatsapp-button">
              <a href="https://api.whatsapp.com/send?phone=972545666136" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <img src="/what.svg" alt="WhatsApp" />
              </a>
            </div>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<PublicProjects />} />
              <Route path="/projects/private" element={<PublicProjectsPrivate />} />
              <Route path="/projects/private-projects" element={<PublicProjectsPrivate />} />
              <Route path="/projects/commercial" element={<PublicProjectsCommercial />} />
              <Route path="/services" element={<PublicServices />} />
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
