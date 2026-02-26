import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { useLanguage } from '../context/LanguageContext'
import { pickText, toUiLanguage } from '../lib/localized'

const Footer: React.FC = () => {
  const { t, language } = useLanguage()
  const lang = toUiLanguage(language)
  const logoAlt = pickText(lang, {
    en: 'Sahuri Bros - Climate Engineers',
    he: 'סחורי ברוס - מהנדסי אקלים',
    ar: 'الإخوة ساحوري - مهندسو المناخ',
  })
  const creditName = pickText(lang, {
    en: 'Special',
    he: 'ספיישל',
    ar: 'سبيشل',
  })

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section footer-links">
          <ul>
            <li>
              <Link to="/about">{t('nav.about')}</Link>
            </li>
            <li>
              <Link to="/projects/private">{t('nav.projects')}</Link>
            </li>
            <li>
              <Link to="/services">{t('nav.services')}</Link>
            </li>
            <li>
              <Link to="/team">{t('nav.team')}</Link>
            </li>
            <li>
              <Link to="/contact">{t('nav.contact')}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section footer-logo">
          <Link to="/">
            <img src="/logo.png" alt={logoAlt} className="footer-logo-image" />
          </Link>
        </div>

        <div className="footer-section footer-contact">
          <a href="tel:052-896-5683">052-896-5683</a>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/Sahuri.Bros/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/sahuri.brothers/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.205 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.696.278.47 2.531.278 6.97.12 8.331.11 8.758.11 12s.012 3.669.17 5.016c.194 4.45 2.42 6.7 6.859 6.909 1.279.059 1.704.07 4.85.07 3.145 0 3.571-.011 4.85-.07 4.49-.209 6.793-2.457 6.985-6.993.059-1.279.07-1.704.07-4.849 0-3.144-.011-3.669-.07-4.95-.207-4.576-2.408-6.794-6.987-6.993C15.669.012 15.245 0 12 0z"
                  fill="currentColor"
                />
                <path
                  d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 11-2.881.001 1.44 1.44 0 012.88-.001z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-credit">
          <Link to="/accessibility-declaration" className="accessibility-link">
            <svg viewBox="0 0 100 100" width="20" height="20">
              <path
                d="M50,11.2c-21.4,0-38.8,17.4-38.8,38.8S28.6,88.8,50,88.8S88.8,71.4,88.8,50S71.4,11.2,50,11.2z M50,21.1 c3.4,0,6.2,2.8,6.2,6.2s-2.8,6.2-6.2,6.2c-3.4,0-6.2-2.8-6.2-6.2S46.6,21.1,50,21.1z M70.3,40.2l-14.3,2c0,0.1-0.1,0.2-0.1,0.3 c-0.5,1.5,0.7,11.7,1.2,15.6l5.4,16.4c0.5,1.8-0.6,3.6-2.4,4c-1.8,0.5-3.6-0.6-4-2.4l-5.5-16.6c0,0-0.1-0.6-0.7-0.6 c-0.5,0-0.7,0.6-0.7,0.6l-5.5,16.7c-0.4,1.5-1.7,2.5-3.2,2.5c-0.3,0-0.6,0-0.8-0.1c-1.8-0.5-2.8-2.3-2.4-4L43,57.2 c0.5-4.4,1.5-13.3,1.1-14.7c0-0.1-0.1-0.2-0.1-0.3l-14.3-2c-1.8-0.3-3.1-1.9-2.8-3.7c0.3-1.8,1.9-3.1,3.7-2.8L47.5,36l2.5,0l2.5,0 l16.9-2.4c1.8-0.3,3.5,1,3.7,2.8C73.4,38.2,72.1,39.9,70.3,40.2z"
                fill="currentColor"
              />
            </svg>
            <span>{t('footer.accessibility')}</span>
          </Link>

        </div>
      </div>
    </footer>
  )
}

export default Footer
