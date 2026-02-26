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
        <section className="public-hero">
          <span className="public-chip">Contact</span>
          <h1 className="public-title">{pickText(lang, {
            en: 'Contact Us',
            he: 'צור קשר',
            ar: 'اتصل بنا',
          })}</h1>
          <p className="public-lead">{pickText(lang, {
            en: 'Send us your project details and we will get back with a practical plan.',
            he: 'שלחו לנו פרטי פרויקט ונחזור אליכם עם תכנית מעשית.',
            ar: 'أرسل تفاصيل مشروعك وسنعود إليك بخطة عملية.',
          })}</p>
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
