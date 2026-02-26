import React from 'react'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'
import { pickText, toUiLanguage } from '../lib/localized'

export default function AccessibilityDeclaration() {
  const { language } = useLanguage()
  const lang = toUiLanguage(language)

  return (
    <main className="public-page">
      <div className="public-shell">
        <section className="public-hero">
          <span className="public-chip">Accessibility</span>
          <h1 className="public-title">{pickText(lang, {
            en: 'Accessibility Declaration',
            he: 'הצהרת נגישות',
            ar: 'إعلان الوصول',
          })}</h1>
          <p className="public-lead">{pickText(lang, {
            en: 'We are committed to making our website and services accessible for all visitors.',
            he: 'אנו מחויבים להנגשת האתר והשירותים שלנו לכלל המבקרים.',
            ar: 'نلتزم بجعل موقعنا وخدماتنا متاحة لجميع الزوار.',
          })}</p>
        </section>

        <section className="public-section">
          <h2 className="public-heading">{pickText(lang, {
            en: 'Our Commitment',
            he: 'המחויבות שלנו',
            ar: 'التزامنا',
          })}</h2>
          <ul className="public-list">
            <li>{pickText(lang, { en: 'Continuous improvements to navigation and readability.', he: 'שיפור מתמיד בניווט ובקריאות.', ar: 'تحسين مستمر في التنقل وقابلية القراءة.' })}</li>
            <li>{pickText(lang, { en: 'Compatibility with keyboard and assistive technologies.', he: 'תאימות למקלדת ולטכנולוגיות מסייעות.', ar: 'توافق مع لوحة المفاتيح والتقنيات المساعدة.' })}</li>
            <li>{pickText(lang, { en: 'Contact us for any accessibility issue and we will assist quickly.', he: 'ניתן לפנות אלינו בכל בעיית נגישות ונעניק מענה מהיר.', ar: 'يمكن التواصل معنا لأي مشكلة وصول وسنقدم المساعدة بسرعة.' })}</li>
          </ul>
        </section>
      </div>
      <Footer />
    </main>
  )
}
