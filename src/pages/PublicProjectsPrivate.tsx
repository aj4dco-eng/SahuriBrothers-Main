import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'
import { pickText, toUiLanguage } from '../lib/localized'

export default function PublicProjectsPrivate() {
  const { language } = useLanguage()
  const lang = toUiLanguage(language)

  return (
    <main className="public-page">
      <div className="public-shell">
        <section className="public-hero">
          <span className="public-chip">Private</span>
          <h1 className="public-title">{pickText(lang, {
            en: 'Private Projects',
            he: 'פרויקטים פרטיים',
            ar: 'مشاريع خاصة',
          })}</h1>
          <p className="public-lead">{pickText(lang, {
            en: 'We integrate VRF, hidden ducts, and underfloor solutions into premium homes with zero visual noise.',
            he: 'שילוב מערכות VRF, תעלות נסתרות וחימום תת-רצפתי בבתים יוקרתיים ללא עומס ויזואלי.',
            ar: 'ندمج أنظمة VRF وقنوات مخفية وحلولا أرضية في منازل فاخرة دون تشويش بصري.',
          })}</p>
          <div className="public-actions">
            <Link className="public-btn public-btn-primary" to="/contact">Start a Home Project</Link>
            <Link className="public-btn public-btn-muted" to="/projects/commercial">See Commercial</Link>
          </div>
        </section>

        <section className="public-section public-split">
          <div>
            <h2 className="public-heading">{pickText(lang, {
              en: 'Typical Private Scope',
              he: 'היקף עבודה טיפוסי בפרטי',
              ar: 'نطاق العمل المعتاد في المشاريع الخاصة',
            })}</h2>
            <ul className="public-list">
              <li>{pickText(lang, { en: 'Multi-zone VRF planning', he: 'תכנון VRF רב-אזורי', ar: 'تخطيط VRF متعدد المناطق' })}</li>
              <li>{pickText(lang, { en: 'Architectural grille alignment', he: 'יישור גרילים לקווי עיצוב', ar: 'مواءمة الشبكات مع التصميم المعماري' })}</li>
              <li>{pickText(lang, { en: 'Silent operation tuning', he: 'כיוונון לעבודה שקטה', ar: 'ضبط التشغيل الهادئ' })}</li>
            </ul>
          </div>
          <div className="public-media"><img src="/0126sahuri-01.jpg" alt="Private project" /></div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
