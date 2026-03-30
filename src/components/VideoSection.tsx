import React from 'react'
import './VideoSection.css'
import { useLanguage } from '../context/LanguageContext'
import { pickText, toUiLanguage } from '../lib/localized'

const VideoSection: React.FC = () => {
  const { t, language } = useLanguage()
  const lang = toUiLanguage(language)

  const videoStatPrimary = pickText(lang, {
    en: 'VRF',
    he: 'מערכות VRF',
    ar: 'أنظمة VRF',
  })

  const videoStatPrimaryNote = pickText(lang, {
    en: 'Integrated with architectural precision.',
    he: 'משולב בדיוק אדריכלי.',
    ar: 'مدمج بدقة معمارية.',
  })

  const videoStatSecondary = pickText(lang, {
    en: 'Invisible',
    he: 'בלתי נראה',
    ar: 'غير مرئي',
  })

  const videoStatSecondaryNote = pickText(lang, {
    en: 'Systems designed to disappear into the space.',
    he: 'מערכות שתוכננו להיעלם בתוך החלל.',
    ar: 'أنظمة صممت لتختفي داخل المساحة.',
  })

  return (
    <section className="section video-section">
      <div className="video-section-shell">
        <div className="video-section-intro">
<h2 dir="auto">{t('video.title')}</h2>
          <h3 dir="auto">{t('video.subtitle')}</h3>
        </div>

        <div className="video-section-body">
          <div className="video-section-copy">
            <p dir="auto">{t('video.desc1')}</p>
            <p className="case-study-note" dir="auto">{t('video.desc2')}</p>
          </div>
          <div className="video-section-aside">
            <div className="video-section-stat">
              <span className="video-section-stat-value" dir="auto">{videoStatPrimary}</span>
              <span className="video-section-stat-label" dir="auto">{videoStatPrimaryNote}</span>
            </div>
            <div className="video-section-stat">
              <span className="video-section-stat-value" dir="auto">{videoStatSecondary}</span>
              <span className="video-section-stat-label" dir="auto">{videoStatSecondaryNote}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
