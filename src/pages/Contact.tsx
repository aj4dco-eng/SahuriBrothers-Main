import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'
import { pickText, toUiLanguage } from '../lib/localized'

export default function Contact() {
  const { language } = useLanguage()
  const lang = toUiLanguage(language)

  return (
    <main className="public-page">
      <div className="public-shell">
        <section className="about-hero">
          <h1 className="about-hero-title">
            {pickText(lang, {
              en: 'Contact Us',
              he: 'צור קשר',
              ar: 'اتصل بنا',
            })}
          </h1>
        </section>

        <section className="public-section public-split">
          <div>
            <h2 className="public-heading">Sahuri Brothers</h2>
            <p className="public-subtext">052-896-5683</p>
            <p className="public-subtext">sahuri.brothers</p>
          </div>
          <div>
            <ContactForm />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
