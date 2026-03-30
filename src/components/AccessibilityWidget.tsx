import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { toUiLanguage } from '../lib/localized'
import './AccessibilityWidget.css'

type FontSize = 0 | 1 | 2 | 3

interface A11yState {
  fontSize: FontSize
  highContrast: boolean
  grayscale: boolean
  underlineLinks: boolean
  pauseAnimations: boolean
  readableFont: boolean
  largeCursor: boolean
}

const DEFAULT: A11yState = {
  fontSize: 0,
  highContrast: false,
  grayscale: false,
  underlineLinks: false,
  pauseAnimations: false,
  readableFont: false,
  largeCursor: false,
}

const FONT_CLASSES: Record<FontSize, string> = {
  0: '',
  1: 'a11y-font-lg',
  2: 'a11y-font-xl',
  3: 'a11y-font-xxl',
}

const FONT_LABELS: Record<FontSize, string> = {
  0: '100%',
  1: '110%',
  2: '125%',
  3: '140%',
}

function loadSettings(): A11yState {
  try {
    const saved = localStorage.getItem('a11y-settings')
    if (saved) return { ...DEFAULT, ...JSON.parse(saved) }
  } catch {
    // ignore
  }
  return DEFAULT
}

function applySettings(s: A11yState) {
  const html = document.documentElement
  // Font size — remove all, then apply current
  ;(Object.values(FONT_CLASSES) as string[]).forEach(c => c && html.classList.remove(c))
  if (s.fontSize > 0) html.classList.add(FONT_CLASSES[s.fontSize])
  // Toggles
  html.classList.toggle('a11y-high-contrast', s.highContrast)
  html.classList.toggle('a11y-grayscale', s.grayscale)
  html.classList.toggle('a11y-underline-links', s.underlineLinks)
  html.classList.toggle('a11y-pause-animations', s.pauseAnimations)
  html.classList.toggle('a11y-readable-font', s.readableFont)
  html.classList.toggle('a11y-large-cursor', s.largeCursor)
}

const LABELS = {
  en: {
    title: 'Accessibility',
    fontSize: 'Text Size',
    highContrast: 'High Contrast',
    grayscale: 'Grayscale',
    underlineLinks: 'Underline Links',
    pauseAnimations: 'Pause Animations',
    readableFont: 'Readable Font',
    largeCursor: 'Large Cursor',
    reset: 'Reset All',
    open: 'Open accessibility menu',
    close: 'Close accessibility menu',
    decrease: 'Decrease text size',
    increase: 'Increase text size',
    on: 'On',
    off: 'Off',
  },
  he: {
    title: 'נגישות',
    fontSize: 'גודל טקסט',
    highContrast: 'ניגודיות גבוהה',
    grayscale: 'גווני אפור',
    underlineLinks: 'קו תחת קישורים',
    pauseAnimations: 'עצור אנימציות',
    readableFont: 'גופן קריא',
    largeCursor: 'סמן גדול',
    reset: 'אפס הכל',
    open: 'פתח תפריט נגישות',
    close: 'סגור תפריט נגישות',
    decrease: 'הקטן טקסט',
    increase: 'הגדל טקסט',
    on: 'פועל',
    off: 'כבוי',
  },
  ar: {
    title: 'إمكانية الوصول',
    fontSize: 'حجم النص',
    highContrast: 'تباين عالٍ',
    grayscale: 'تدرج رمادي',
    underlineLinks: 'خط تحت الروابط',
    pauseAnimations: 'إيقاف الرسوم',
    readableFont: 'خط مقروء',
    largeCursor: 'مؤشر كبير',
    reset: 'إعادة تعيين الكل',
    open: 'فتح قائمة إمكانية الوصول',
    close: 'إغلاق قائمة إمكانية الوصول',
    decrease: 'تصغير النص',
    increase: 'تكبير النص',
    on: 'تشغيل',
    off: 'إيقاف',
  },
}

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [settings, setSettings] = useState<A11yState>(loadSettings)
  const { language } = useLanguage()
  const lang = toUiLanguage(language)
  const isRtl = lang === 'he' || lang === 'ar'
  const L = LABELS[lang] ?? LABELS.en
  const panelRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  // Apply settings to DOM whenever they change
  useEffect(() => {
    applySettings(settings)
    localStorage.setItem('a11y-settings', JSON.stringify(settings))
  }, [settings])

  // Apply saved settings on mount
  useEffect(() => {
    applySettings(loadSettings())
  }, [])

  // Focus first focusable element in panel when opened
  useEffect(() => {
    if (isOpen) {
      const first = panelRef.current?.querySelector<HTMLElement>('button, [tabindex]')
      first?.focus()
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
        btnRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen])

  const toggle = (key: keyof Omit<A11yState, 'fontSize'>) =>
    setSettings(prev => ({ ...prev, [key]: !prev[key] }))

  const changeFontSize = (delta: number) =>
    setSettings(prev => ({
      ...prev,
      fontSize: Math.max(0, Math.min(3, prev.fontSize + delta)) as FontSize,
    }))

  const resetAll = () => setSettings(DEFAULT)

  const toggleOptions: Array<[keyof Omit<A11yState, 'fontSize'>, string, string]> = [
    ['highContrast', L.highContrast, '◑'],
    ['grayscale', L.grayscale, '◐'],
    ['underlineLinks', L.underlineLinks, 'U̲'],
    ['pauseAnimations', L.pauseAnimations, '⏸'],
    ['readableFont', L.readableFont, 'Aa'],
    ['largeCursor', L.largeCursor, '⊹'],
  ]

  return (
    <div className={`a11y-widget ${isRtl ? 'a11y-rtl' : ''}`}>
      {/* Panel */}
      <div
        ref={panelRef}
        className={`a11y-panel ${isOpen ? 'a11y-panel-open' : ''}`}
        role="dialog"
        aria-label={L.title}
        aria-hidden={!isOpen}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="a11y-panel-header">
          <img src="/accessibility-icon.svg" alt="" width="18" height="18" aria-hidden="true" />
          <span className="a11y-panel-title">{L.title}</span>
          <button
            className="a11y-close-btn"
            onClick={() => { setIsOpen(false); btnRef.current?.focus() }}
            aria-label={L.close}
          >
            ×
          </button>
        </div>

        <div className="a11y-panel-body">
          {/* Font size row */}
          <div className="a11y-row">
            <span className="a11y-row-label">{L.fontSize}</span>
            <div className="a11y-font-controls">
              <button
                className="a11y-font-btn"
                onClick={() => changeFontSize(-1)}
                disabled={settings.fontSize === 0}
                aria-label={L.decrease}
              >
                A-
              </button>
              <span className="a11y-font-level">{FONT_LABELS[settings.fontSize]}</span>
              <button
                className="a11y-font-btn"
                onClick={() => changeFontSize(1)}
                disabled={settings.fontSize === 3}
                aria-label={L.increase}
              >
                A+
              </button>
            </div>
          </div>

          <div className="a11y-divider" />

          {/* Toggle options */}
          {toggleOptions.map(([key, label, icon]) => (
            <button
              key={key}
              className={`a11y-toggle-row ${settings[key] ? 'active' : ''}`}
              onClick={() => toggle(key)}
              aria-pressed={settings[key]}
            >
              <span className="a11y-option-icon" aria-hidden="true">{icon}</span>
              <span className="a11y-option-label">{label}</span>
              <span className="a11y-switch" aria-hidden="true">
                <span className="a11y-switch-thumb" />
              </span>
            </button>
          ))}
        </div>

        <div className="a11y-panel-footer">
          <button className="a11y-reset-btn" onClick={resetAll}>
            {L.reset}
          </button>
        </div>
      </div>

      {/* Float button */}
      <button
        ref={btnRef}
        className={`a11y-float-btn ${isOpen ? 'a11y-float-btn-open' : ''}`}
        onClick={() => setIsOpen(o => !o)}
        aria-label={isOpen ? L.close : L.open}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <img src="/accessibility-icon.svg" alt="" width="26" height="26" aria-hidden="true" />
      </button>
    </div>
  )
}
