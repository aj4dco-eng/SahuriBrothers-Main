import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'
import { pickText, toUiLanguage } from '../lib/localized'

export default function PublicServices() {
  const { language } = useLanguage()
  const lang = toUiLanguage(language)

  return (
    <main className="public-page">
      <div className="public-shell">
        <section className="public-hero">
          <span className="public-chip">Services</span>
          <h1 className="public-title">{pickText(lang, {
            en: 'Our Services',
            he: 'השירותים שלנו',
            ar: 'خدماتنا',
          })}</h1>
          <p className="public-lead">{pickText(lang, {
            en: 'From engineering plans to full execution and ongoing service, we deliver end-to-end climate solutions.',
            he: 'מתכנון הנדסי ועד ביצוע מלא ושירות שוטף, אנו מספקים פתרון אקלים מקצה לקצה.',
            ar: 'من التخطيط الهندسي حتى التنفيذ الكامل والخدمة المستمرة، نقدم حلولا متكاملة للمناخ.',
          })}</p>
          <div className="public-actions">
            <Link className="public-btn public-btn-primary" to="/contact">Request Service</Link>
            <Link className="public-btn public-btn-muted" to="/projects">View Projects</Link>
          </div>
        </section>

        <section className="public-section">
          <div className="public-grid">
            <article className="public-card"><h3>{pickText(lang, { en: 'Engineering Planning', he: 'תכנון הנדסי', ar: 'تخطيط هندسي' })}</h3><p>{pickText(lang, { en: '3D coordination and performance-first design.', he: 'תיאום תלת-ממדי ותכנון מונחה ביצועים.', ar: 'تنسيق ثلاثي الأبعاد وتصميم يركز على الأداء.' })}</p></article>
            <article className="public-card"><h3>{pickText(lang, { en: 'Advanced Installations', he: 'התקנות מתקדמות', ar: 'تركيبات متقدمة' })}</h3><p>{pickText(lang, { en: 'VRF, ducted, and low-visibility systems.', he: 'מערכות VRF, תעלות ומערכות נסתרות.', ar: 'أنظمة VRF وأنظمة قنوات وحلول منخفضة الظهور.' })}</p></article>
            <article className="public-card"><h3>{pickText(lang, { en: 'Maintenance & Support', he: 'תחזוקה ותמיכה', ar: 'صيانة ودعم' })}</h3><p>{pickText(lang, { en: 'Reliable after-sales service and optimization.', he: 'שירות אמין לאחר מסירה ואופטימיזציה.', ar: 'خدمة موثوقة بعد التسليم وتحسين مستمر.' })}</p></article>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
