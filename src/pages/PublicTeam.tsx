import React from 'react'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'
import { pickText, toUiLanguage } from '../lib/localized'

export default function PublicTeam() {
  const { language } = useLanguage()
  const lang = toUiLanguage(language)

  return (
    <main className="public-page">
      <div className="public-shell">
        <section className="public-hero">
          <span className="public-chip">Team</span>
          <h1 className="public-title">{pickText(lang, {
            en: 'The Team Behind Every Installation',
            he: 'הצוות שמאחורי כל התקנה',
            ar: 'الفريق خلف كل مشروع تركيب',
          })}</h1>
          <p className="public-lead">{pickText(lang, {
            en: 'A field-driven engineering team combining planning precision with on-site discipline.',
            he: 'צוות הנדסי מעשי שמשלב דיוק תכנוני עם משמעת ביצוע בשטח.',
            ar: 'فريق هندسي ميداني يجمع بين دقة التخطيط والانضباط في الموقع.',
          })}</p>
        </section>

        <section className="public-section">
          <div className="public-grid">
            <article className="public-card"><h3>{pickText(lang, { en: 'Project Leadership', he: 'ניהול פרויקטים', ar: 'قيادة المشاريع' })}</h3><p>{pickText(lang, { en: 'Direct communication and accountable delivery.', he: 'תקשורת ישירה ואחריות מלאה.', ar: 'تواصل مباشر وتنفيذ مسؤول.' })}</p></article>
            <article className="public-card"><h3>{pickText(lang, { en: 'Engineering Team', he: 'צוות הנדסה', ar: 'فريق الهندسة' })}</h3><p>{pickText(lang, { en: 'System design and technical validation.', he: 'תכנון מערכות ואימות טכני.', ar: 'تصميم الأنظمة والتحقق التقني.' })}</p></article>
            <article className="public-card"><h3>{pickText(lang, { en: 'Field Specialists', he: 'מומחי שטח', ar: 'مختصو التنفيذ' })}</h3><p>{pickText(lang, { en: 'Installation quality and clean finishing.', he: 'איכות התקנה וגימור נקי.', ar: 'جودة التركيب وإنهاء نظيف.' })}</p></article>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
