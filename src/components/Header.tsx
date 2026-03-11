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
    setIsMenuOpen((prev) => !prev)
  }

  const navClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'nav-link active' : 'nav-link'

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
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
                <li><NavLink className={navClassName} to="/about" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</NavLink></li>
                <li className="dropdown">
                  <NavLink className={navClassName} to="/projects" onClick={() => setIsMenuOpen(false)}>{t('nav.projects')}</NavLink>
                  <ul className="submenu">
                    <li><NavLink className={navClassName} to="/projects/private" onClick={() => setIsMenuOpen(false)}>{t('nav.projects.private')}</NavLink></li>
                    <li><NavLink className={navClassName} to="/projects/commercial" onClick={() => setIsMenuOpen(false)}>{t('nav.projects.commercial')}</NavLink></li>
                  </ul>
                </li>
                <li><NavLink className={navClassName} to="/services" onClick={() => setIsMenuOpen(false)}>{t('nav.services')}</NavLink></li>
                <li><NavLink className={navClassName} to="/contact" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</NavLink></li>
              </>
            )}
          </ul>
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
          </div>

          <button
            className="menu-toggle"
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
  )
}

export default Header
