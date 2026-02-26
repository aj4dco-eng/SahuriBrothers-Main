import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'
import { pickText, toUiLanguage } from '../lib/localized'

export default function About() {
  const { language } = useLanguage()
  const lang = toUiLanguage(language)

  return (
    <main className="public-page">
      <div className="public-shell">
        <section className="public-hero">
          <span className="public-chip">Sahuri Bros</span>
          <h1 className="public-title">
            {pickText(lang, {
              en: 'Engineering Legacy With Family Accountability',
              he: 'מורשת הנדסית עם אחריות משפחתית',
              ar: 'إرث هندسي مع مسؤولية عائلية',
            })}
          </h1>
          <p className="public-lead">
            {pickText(lang, {
              en: 'From design to installation, we personally supervise every detail so advanced climate systems disappear into architecture.',
              he: 'מהתכנון ועד ההתקנה, אנו מלווים אישית כל פרט כדי שמערכות האקלים ייטמעו באדריכלות בצורה מושלמת.',
              ar: 'من التخطيط حتى التنفيذ، نشرف شخصيا على كل تفصيلة ليختفي نظام المناخ داخل العمارة.',
            })}
          </p>
          <div className="public-actions">
            <Link className="public-btn public-btn-primary" to="/projects">Projects</Link>
            <Link className="public-btn public-btn-muted" to="/contact">Contact</Link>
          </div>
        </section>

        <section className="public-section public-split">
          <div>
            <h2 className="public-heading">
              {pickText(lang, {
                en: 'What Defines Our Work',
                he: 'מה מגדיר את העבודה שלנו',
                ar: 'ما الذي يميز عملنا',
              })}
            </h2>
            <ul className="public-list">
              <li>{pickText(lang, { en: 'Precise 3D planning before execution', he: 'תכנון תלת-ממדי מדויק לפני ביצוע', ar: 'تخطيط ثلاثي الأبعاد دقيق قبل التنفيذ' })}</li>
              <li>{pickText(lang, { en: 'Clean integration with luxury interiors', he: 'אינטגרציה נקייה עם חללים יוקרתיים', ar: 'دمج نظيف مع المساحات الفاخرة' })}</li>
              <li>{pickText(lang, { en: 'Direct owner involvement in every project', he: 'מעורבות ישירה של הבעלים בכל פרויקט', ar: 'إشراف مباشر من أصحاب الشركة في كل مشروع' })}</li>
            </ul>
          </div>
          <div className="public-media">
            <img src="/0126sahuri-04.jpg" alt="Sahuri team" />
          </div>
        </section>

        <section className="public-section">
          <div className="public-kpi">
            <div className="public-kpi-item"><span className="public-kpi-value">100%</span><span className="public-kpi-label">Owner Oversight</span></div>
            <div className="public-kpi-item"><span className="public-kpi-value">3D</span><span className="public-kpi-label">Planning Flow</span></div>
            <div className="public-kpi-item"><span className="public-kpi-value">24/7</span><span className="public-kpi-label">Support Mindset</span></div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
