import React, { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './LanguageSwitcher.css'
import { pickText, toUiLanguage } from '../lib/localized'

const LANGUAGES: { code: string; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'he', label: 'עברית' },
  { code: 'ar', label: 'العربية' },
]

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const lang = toUiLanguage(language)

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current) return
      if (!ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const current = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0]
  const changeLabel = pickText(lang, {
    en: 'Change language',
    he: 'שנה שפה',
    ar: 'تغيير اللغة',
  })
  const selectorLabel = pickText(lang, {
    en: 'Language selector',
    he: 'בחירת שפה',
    ar: 'اختيار اللغة',
  })

  const toggle = () => setOpen((v) => !v)

  return (
    <div className="lang-dropdown" ref={ref}>
      <button
        className="lang-toggle"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={toggle}
        title={changeLabel}
      >
        <span className="lang-current">{current.label}</span>
        <svg className="chev" viewBox="0 0 24 24" width="14" height="14" aria-hidden>
          <path d="M7 10l5 5 5-5z" fill="currentColor" />
        </svg>
      </button>

      {open && (
        <ul className="lang-menu" role="listbox" aria-label={selectorLabel}>
          {LANGUAGES.map((l) => (
            <li key={l.code} role="option" aria-selected={language === l.code}>
              <button
                className={`lang-item ${language === l.code ? 'active' : ''}`}
                onClick={() => {
                  setLanguage(l.code)
                  setOpen(false)
                }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageSwitcher
