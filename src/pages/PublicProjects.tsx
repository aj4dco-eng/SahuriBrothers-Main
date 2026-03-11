import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'
import { pickText, toUiLanguage } from '../lib/localized'

export default function PublicProjects() {
  const { language } = useLanguage()
  const lang = toUiLanguage(language)

  return (
    <main className="public-page">
      <div className="public-shell">
        <section className="about-hero">
          <h1 className="about-hero-title">
            {pickText(lang, {
              en: 'Our Projects',
              he: 'הפרויקטים שלנו',
              ar: 'مشاريعنا',
            })}
          </h1>
        </section>

        <div className="about-project-tabs">
          <Link to="/projects/private" className="project-tab-link">
            {pickText(lang, { en: 'Private Projects', he: 'פרויקטים פרטיים', ar: 'مشاريع خاصة' })}
          </Link>
          <Link to="/projects/commercial" className="project-tab-link">
            {pickText(lang, { en: 'Commercial Projects', he: 'פרויקטים מסחריים', ar: 'مشاريع تجارية' })}
          </Link>
        </div>

        <section className="public-section">
          <div className="public-grid">
            <article className="public-card">
              <h3>{pickText(lang, { en: 'Private Residences', he: 'מגורים פרטיים', ar: 'مساكن خاصة' })}</h3>
              <p>{pickText(lang, { en: 'Quiet, hidden, precise systems for premium homes.', he: 'מערכות שקטות ומדויקות שמשתלבות בעיצוב הבית.', ar: 'أنظمة هادئة ودقيقة تندمج مع تصميم المنزل.' })}</p>
            </article>
            <article className="public-card">
              <h3>{pickText(lang, { en: 'Commercial Buildings', he: 'מבנים מסחריים', ar: 'مبان تجارية' })}</h3>
              <p>{pickText(lang, { en: 'Scalable climate control with clean execution standards.', he: 'פתרונות סקיילביליים עם סטנדרט ביצוע גבוה.', ar: 'حلول قابلة للتوسع مع تنفيذ نظيف بمعايير عالية.' })}</p>
            </article>
            <article className="public-card">
              <h3>{pickText(lang, { en: 'Engineering-Led Delivery', he: 'ביצוע מונחה הנדסה', ar: 'تنفيذ بقيادة هندسية' })}</h3>
              <p>{pickText(lang, { en: 'Every stage is validated from design to final commissioning.', he: 'כל שלב מבוקר מהתכנון ועד למסירה.', ar: 'كل مرحلة يتم التحقق منها من التصميم حتى التسليم.' })}</p>
            </article>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
