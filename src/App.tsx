import './App.css'
import './rtl-support.css'
import './pages/PublicPages.css'
import { useEffect } from 'react'
import { useLocation, BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
import About from './pages/About'
import Contact from './pages/Contact'
import PublicProjects from './pages/PublicProjects'
import PublicProjectsPrivate from './pages/PublicProjectsPrivate'
import PublicProjectsCommercial from './pages/PublicProjectsCommercial'
import PublicServices from './pages/PublicServices'
import AccessibilityDeclaration from './pages/AccessibilityDeclaration'
import ScrollProgressBar from './components/ScrollProgressBar'
import CursorSpotlight from './components/CursorSpotlight'
import WhatsAppWidget from './components/WhatsAppWidget'
import AccessibilityWidget from './components/AccessibilityWidget'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppContent() {
  const { pathname } = useLocation()

  return (
    <>
      <ScrollToTop />
      <ScrollProgressBar />
      <CursorSpotlight />
      <Header />
      <WhatsAppWidget />
      <AccessibilityWidget />

      <div key={pathname} className="page-transition">
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
          <Route
            path="/"
            element={
              <main id="app" className="homepage">
                <Hero />
                <PlanExecuteSection />
                <VideoSection />
                <ProjectsGallery />
                <ClientsCarousel />
                <ContactForm />
                <Footer />
              </main>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <RoleProvider>
        <AuthProvider>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </AuthProvider>
      </RoleProvider>
    </LanguageProvider>
  )
}

export default App
