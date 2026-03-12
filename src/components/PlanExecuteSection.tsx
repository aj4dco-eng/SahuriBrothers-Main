import React from 'react'
import { Link } from 'react-router-dom'
import './PlanExecuteSection.css'
import { useLanguage } from '../context/LanguageContext'
import { pickText, toUiLanguage } from '../lib/localized'

const PlanExecuteSection: React.FC = () => {
  const { t, language } = useLanguage()
  const lang = toUiLanguage(language)

  const familyDescExtra = pickText(lang, {
    en: 'Our specialists focus on details that create long-term comfort, from clean installation to reliable after-sales service.',
    he: 'המומחים שלנו שמים לב לפרטים הקטנים שיוצרים נוחות לאורך זמן, מהתקנה נקייה ועד שירות אמין לאחר המסירה.',
    ar: 'يركز فريقنا على التفاصيل الصغيرة التي تصنع راحة طويلة المدى، من تركيب نظيف إلى خدمة موثوقة بعد التسليم.',
  })

  const meetTeamLabel = pickText(lang, {
    en: 'Meet our team',
    he: 'הכירו את הצוות שלנו',
    ar: 'تعرف على فريقنا',
  })

  const precisionAlt = pickText(lang, {
    en: 'Engineering precision',
    he: 'דיוק הנדסי',
    ar: 'دقة هندسية',
  })

  const familyAlt = pickText(lang, {
    en: 'Family service',
    he: 'שירות משפחתי',
    ar: 'خدمة عائلية',
  })

  return (
    <section className="sections" id="allSectionsWrapper">
      <section className="section plan-execute-section">
        <div className="grid-rows">
          <div className="grid-row rtl-direction">
            <div className="grid-cell image-cell">
              <img src="/0126sahuri-01.jpg" alt={precisionAlt} />
            </div>
            <div className="grid-cell text-cell">
              <div className="grid-row-text">
                <h2>{t('plan.precision')}</h2>
                <p>{t('plan.precision.desc1')}</p>
                <p>{t('plan.precision.desc2')}</p>
                <Link to="/services" className="read-more-btn">
                  {t('plan.precision.link')}
                </Link>
              </div>
            </div>
          </div>

          <div className="grid-row ltr-direction">
            <div className="grid-cell image-cell">
              <img src="/0126sahuri-02.jpg" alt={familyAlt} />
            </div>
            <div className="grid-cell text-cell">
              <div className="grid-row-text">
                <h2>{t('plan.family')}</h2>
                <p>{t('plan.family.desc')}</p>
                <p>{familyDescExtra}</p>
                <Link to="/about" className="read-more-btn">
                  {meetTeamLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default PlanExecuteSection
