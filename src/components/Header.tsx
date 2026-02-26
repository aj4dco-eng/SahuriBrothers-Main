import React, { useState } from 'react'
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
  const { isAdmin } = useRole()
  const { user, signOut } = useAuth()
  const location = useLocation()
  const lang = toUiLanguage(language)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const navClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'nav-link active' : 'nav-link'

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
            <img src="/logo-05.png" alt="Sahuri Bros" className="logo-image" />
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
                <li><NavLink className={navClassName} to="/team" onClick={() => setIsMenuOpen(false)}>{t('nav.team')}</NavLink></li>
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

      <div className="whatsapp-button">
        <a href="https://api.whatsapp.com/send?phone=972545666136" target="_blank" rel="noopener noreferrer" title="WhatsApp">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.773 1.149l-.334-.167-3.471.522.531-3.407-.223-.354a9.86 9.86 0 011.51-4.169c2.416-2.843 6.4-3.736 9.906-2.181 3.507 1.555 5.887 5.138 5.887 9.201 0 5.487-4.144 9.944-9.529 9.944z" />
          </svg>
        </a>
      </div>
    </header>
  )
}

export default Header
