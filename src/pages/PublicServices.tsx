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
        <section className="about-hero">
          <h1 className="about-hero-title">
            {pickText(lang, {
              en: 'Our Services',
              he: 'השירותים שלנו',
              ar: 'خدماتنا',
            })}
          </h1>
        </section>

        <section className="public-section">
          <h2 className="public-heading">{pickText(lang, {
            en: 'Comprehensive Climate Engineering',
            he: 'הנדסת אקלים מקיפה',
            ar: 'هندسة مناخية شاملة',
          })}</h2>
          <div className="public-grid">
            <article className="public-card">
              <h3>{pickText(lang, { en: 'Engineering Planning', he: 'תכנון הנדסי', ar: 'تخطيط هندسي' })}</h3>
              <p>{pickText(lang, { 
                en: '3D coordination and performance-first design. We ensure every duct, grille, and unit is precisely planned to integrate seamlessly with your architecture.', 
                he: 'תיאום תלת-ממדי ותכנון מונחה ביצועים. אנו מבטיחים שכל תעלה, רשת ויחידה מתוכננים בדיוק להשתלבות חלקה באדריכלות.', 
                ar: 'تنسيق ثلاثي الأبعاد وتصميم يركز على الأداء. نضمن أن كل قناة وشبكة ووحدة مخططة بدقة للتكامل السلس مع العمارة.' 
              })}</p>
            </article>
            <article className="public-card">
              <h3>{pickText(lang, { en: 'Advanced Installations', he: 'התקנות מתקדמות', ar: 'تركيبات متقدمة' })}</h3>
              <p>{pickText(lang, { 
                en: 'VRF, ducted, and low-visibility systems. Our expert team handles complex installations with precision craftsmanship and attention to detail.', 
                he: 'מערכות VRF, תעלות ומערכות נסתרות. צוות המומחים שלנו מטפל בהתקנות מורכבות בדיוק ותשומת לב לפרטים.', 
                ar: 'أنظمة VRF وأنظمة قنوات وحلول منخفضة الظهور. يتعامل فريق الخبراء لدينا مع التركيبات المعقدة بدقة واهتمام بالتفاصيل.' 
              })}</p>
            </article>
            <article className="public-card">
              <h3>{pickText(lang, { en: 'Maintenance & Support', he: 'תחזוקה ותמיכה', ar: 'صيانة ودعم' })}</h3>
              <p>{pickText(lang, { 
                en: 'Reliable after-sales service and optimization. We provide ongoing support to ensure your climate system performs perfectly year after year.', 
                he: 'שירות אמין לאחר מסירה ואופטימיזציה. אנו מספקים תמיכה מתמשכת להבטחת ביצועים מושלמים של מערכת האקלים שנה אחר שנה.', 
                ar: 'خدمة موثوقة بعد التسليم وتحسين مستمر. نقدم دعما مستمرا لضمان أداء نظام المناخ بشكل مثالي عاما بعد عام.' 
              })}</p>
            </article>
          </div>
        </section>

        <section className="public-section public-split">
          <div className="public-media">
            <img src="/0126sahuri-01.jpg" alt="Climate Engineering" />
          </div>
          <div>
            <h2 className="public-heading">{pickText(lang, {
              en: 'Why Choose Sahuri Brothers',
              he: 'למה לבחור בסחורי ברוס',
              ar: 'لماذا تختار الإخوة ساحوري',
            })}</h2>
            <ul className="public-list">
              <li>{pickText(lang, { 
                en: 'Family-owned business with personal accountability', 
                he: 'עסק משפחתי עם אחריות אישית', 
                ar: 'شركة عائلية مع مسؤولية شخصية' 
              })}</li>
              <li>{pickText(lang, { 
                en: 'Specialized in invisible climate integration', 
                he: 'התמחות באינטגרציה בלתי נראית של מערכות אקלים', 
                ar: 'متخصصون في التكامل غير المرئي لأنظمة المناخ' 
              })}</li>
              <li>{pickText(lang, { 
                en: 'Premium quality materials and workmanship', 
                he: 'חומרים ועבודה באיכות פרימיום', 
                ar: 'مواد وحرفية بجودة عالية' 
              })}</li>
              <li>{pickText(lang, { 
                en: 'Comprehensive warranty and ongoing support', 
                he: 'אחריות מקיפה ותמיכה מתמשכת', 
                ar: 'ضمان شامل ودعم مستمر' 
              })}</li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
