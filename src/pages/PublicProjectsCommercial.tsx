import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'
import { pickText, toUiLanguage } from '../lib/localized'

export default function PublicProjectsCommercial() {
  const { language } = useLanguage()
  const lang = toUiLanguage(language)

  return (
    <main className="public-page">
      <div className="public-shell">
        <section className="public-hero">
          <span className="public-chip">Commercial</span>
          <h1 className="public-title">{pickText(lang, {
            en: 'Commercial Projects',
            he: 'פרויקטים מסחריים',
            ar: 'مشاريع تجارية',
          })}</h1>
          <p className="public-lead">{pickText(lang, {
            en: 'Engineered HVAC systems for offices, retail, and mixed-use spaces with predictable performance.',
            he: 'מערכות מיזוג הנדסיות למשרדים, מסחר ומתחמים משולבים עם ביצועים צפויים.',
            ar: 'أنظمة تكييف هندسية للمكاتب والتجزئة والمساحات المختلطة بأداء متوقع.',
          })}</p>
          <div className="public-actions">
            <Link className="public-btn public-btn-primary" to="/contact">Discuss a Commercial Project</Link>
            <Link className="public-btn public-btn-muted" to="/projects/private">See Private</Link>
          </div>
        </section>

        <section className="public-section">
          <div className="public-grid">
            <article className="public-card"><h3>Planning</h3><p>Load studies, zoning, and equipment selection.</p></article>
            <article className="public-card"><h3>Execution</h3><p>Disciplined installation and site coordination.</p></article>
            <article className="public-card"><h3>Handover</h3><p>Testing, balancing, and post-delivery support.</p></article>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
