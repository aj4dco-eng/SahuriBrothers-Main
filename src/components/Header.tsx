import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../context/LanguageContext'
import { useRole } from '../context/RoleContext'
import { useAuth } from '../context/AuthContext'
import { pickText, toUiLanguage } from '../lib/localized'

const Header: React.FC = () => {
  const { t, language } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isAdmin } = useRole()
  const { user, signOut } = useAuth()
  const location = useLocation()
  const lang = toUiLanguage(language)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      if (prev) setIsProjectsOpen(false)
      return !prev
    })
  }

  useEffect(() => {
    if (!isMenuOpen) return
    const handleOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.header-nav') && !target.closest('.menu-toggle')) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [isMenuOpen])

  const navClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'nav-link active' : 'nav-link'

  return (
    <>
    {isMenuOpen && <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)} aria-hidden="true" />}
    <header className={`site-header ${location.pathname === '/' ? 'home-header' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
            <img src="/logo.png" alt="Sahuri Bros" className="logo-image" />
          </Link>
        </div>

        <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
            {isAdmin && location.pathname.startsWith('/admin') ? (
              <li className="dropdown crm-dropdown">
                <Link to="/admin" className="crm-nav-main" onClick={() => setIsMenuOpen(false)}>
                  <span aria-label="CRM" style={{ marginRight: 4 }}>CRM</span>
                </Link>
                <ul className="submenu crm-submenu">
                  <li><Link to="/admin" onClick={() => setIsMenuOpen(false)}>Dashboard</Link></li>
                  <li><Link to="/admin/clients" onClick={() => setIsMenuOpen(false)}>Clients</Link></li>
                  <li><Link to="/admin/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
                  <li><Link to="/admin/tickets" onClick={() => setIsMenuOpen(false)}>Tickets</Link></li>
                  <li><Link to="/admin/proposals" onClick={() => setIsMenuOpen(false)}>Proposals</Link></li>
                  <li><Link to="/admin/settings" onClick={() => setIsMenuOpen(false)}>Settings</Link></li>
                </ul>
              </li>
            ) : (
              <>
                <li><NavLink className={navClassName} end to="/" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</NavLink></li>
                <li><NavLink className={navClassName} to="/about" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</NavLink></li>
                <li className={`dropdown mobile-accordion ${isProjectsOpen ? 'open' : ''}`}>
                  <div className="mobile-projects-row">
                    <NavLink className={navClassName} to="/projects" onClick={() => setIsMenuOpen(false)}>{t('nav.projects')}</NavLink>
                    <button
                      className={`mobile-submenu-toggle ${isProjectsOpen ? 'open' : ''}`}
                      onClick={() => setIsProjectsOpen(p => !p)}
                      aria-label="Toggle projects"
                      type="button"
                    >
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                  <ul className={`submenu mobile-submenu ${isProjectsOpen ? 'open' : ''}`}>
                    <li><NavLink className={navClassName} to="/projects/private" onClick={() => setIsMenuOpen(false)}>{t('nav.projects.private')}</NavLink></li>
                    <li><NavLink className={navClassName} to="/projects/commercial" onClick={() => setIsMenuOpen(false)}>{t('nav.projects.commercial')}</NavLink></li>
                  </ul>
                </li>
                <li><NavLink className={navClassName} to="/services" onClick={() => setIsMenuOpen(false)}>{t('nav.services')}</NavLink></li>
                <li><NavLink className={navClassName} to="/contact" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</NavLink></li>
              </>
            )}
          </ul>

          <div className="mobile-menu-footer">
            <a href="tel:052-896-5683" className="mobile-menu-phone">
              052-896-5683
            </a>

            <div className="mobile-menu-footer-row">
              <LanguageSwitcher />

              <div className="mobile-menu-social">
                <a href="https://wa.me/972528965683" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                  <svg viewBox="0 0 24 24" className="social-icon" width="24" height="24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/sahuri.brothers/?hl=en" target="_blank" rel="noopener noreferrer" title="Instagram">
                  <svg viewBox="0 0 24 24" className="social-icon" width="24" height="24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.205 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.696.278.47 2.531.278 6.97.12 8.331.11 8.758.11 12s.012 3.669.17 5.016c.194 4.45 2.42 6.7 6.859 6.909 1.279.059 1.704.07 4.85.07 3.145 0 3.571-.011 4.85-.07 4.49-.209 6.793-2.457 6.985-6.993.059-1.279.07-1.704.07-4.849 0-3.144-.011-3.669-.07-4.95-.207-4.576-2.408-6.794-6.987-6.993C15.669.012 15.245 0 12 0z" fill="currentColor" />
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 11-2.881.001 1.44 1.44 0 012.88-.001z" fill="currentColor" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/SahuriBrothers/" target="_blank" rel="noopener noreferrer" title="Facebook">
                  <svg viewBox="0 0 529.7 1000" className="social-icon">
                    <path d="M124.7,1000L124.7,1000V515.1H0V333.4h124.7C124.7,20.9,138.4,0,529.7,0v181.9 c-206.3,0-187,11.2-187,151.5h187v181.8h-187V1000H124.7z" fill="currentColor" />
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <svg viewBox="0 0 24 24" className="social-icon" width="24" height="24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="header-right">
          <div className="contact-info">
            <span className="phone">052-896-5683</span>
          </div>

          <LanguageSwitcher />

          {user && (
            <div className="user-menu">
              <span className="user-name">{user.name}</span>
              <button onClick={() => { signOut() }} className="crm-button">
                {pickText(lang, {
                  en: 'Sign Out',
                  he: 'התנתק',
                  ar: 'تسجيل الخروج',
                })}
              </button>
            </div>
          )}

          <div className="social-icons">
            <a href="https://wa.me/972528965683" target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <svg viewBox="0 0 24 24" className="social-icon" width="24" height="24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor" />
              </svg>
            </a>
            <a href="https://www.instagram.com/sahuri.brothers/?hl=en" target="_blank" rel="noopener noreferrer" title="Instagram">
              <svg viewBox="0 0 24 24" className="social-icon" width="24" height="24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.205 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.696.278.47 2.531.278 6.97.12 8.331.11 8.758.11 12s.012 3.669.17 5.016c.194 4.45 2.42 6.7 6.859 6.909 1.279.059 1.704.07 4.85.07 3.145 0 3.571-.011 4.85-.07 4.49-.209 6.793-2.457 6.985-6.993.059-1.279.07-1.704.07-4.849 0-3.144-.011-3.669-.07-4.95-.207-4.576-2.408-6.794-6.987-6.993C15.669.012 15.245 0 12 0z" fill="currentColor" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 11-2.881.001 1.44 1.44 0 012.88-.001z" fill="currentColor" />
              </svg>
            </a>
            <a href="https://www.facebook.com/SahuriBrothers/" target="_blank" rel="noopener noreferrer" title="Facebook">
              <svg viewBox="0 0 529.7 1000" className="social-icon">
                <path d="M124.7,1000L124.7,1000V515.1H0V333.4h124.7C124.7,20.9,138.4,0,529.7,0v181.9 c-206.3,0-187,11.2-187,151.5h187v181.8h-187V1000H124.7z" fill="currentColor" />
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg viewBox="0 0 24 24" className="social-icon" width="24" height="24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor" />
              </svg>
            </a>
          </div>

          <a href="tel:052-896-5683" className="mobile-phone-shortcut" aria-label="Call us">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
              <path d="M6.62 10.79a15.46 15.46 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" fill="currentColor" />
            </svg>
          </a>

          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label={t('nav.menu')}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header
