import React, { useState } from 'react'
import './ContactForm.css'
import { useLanguage } from '../context/LanguageContext'
import { pickText, toUiLanguage } from '../lib/localized'

interface FormData {
  name: string
  phone: string
  email: string
  message: string
  privacyAccepted: boolean
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  message?: string
  privacy?: string
}

const ContactForm: React.FC = () => {
  const { t, language } = useLanguage()
  const lang = toUiLanguage(language)
  const isRtl = lang === 'he' || lang === 'ar'
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    privacyAccepted: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [lastSubmitTime, setLastSubmitTime] = useState(0)
  const [submitError, setSubmitError] = useState('')

  const subtitle = pickText(lang, {
    en: "Let's plan together. Building an invisible climate system starts with a conversation.",
    he: 'נתכנן יחד. מערכת אקלים בלתי נראית מתחילה בשיחה נכונה.',
    ar: 'لنخطط معا. نظام مناخي غير مرئي يبدأ بمحادثة واضحة.',
  })

  const successDescription = pickText(lang, {
    en: "We'll get back to you soon to discuss the perfect climate system for your project.",
    he: 'נחזור אליך בהקדם כדי להתאים את מערכת האקלים המדויקת לפרויקט שלך.',
    ar: 'سنعود إليك قريبا لمناقشة نظام المناخ الأنسب لمشروعك.',
  })

  const backgroundAlt = pickText(lang, {
    en: 'Contact form background',
    he: 'רקע לטופס יצירת קשר',
    ar: 'خلفية نموذج التواصل',
  })

  const privacyDocLabel = pickText(lang, {
    en: 'Privacy Policy',
    he: 'מדיניות פרטיות',
    ar: 'سياسة الخصوصية',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value } = e.target
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked })
      setErrors(prev => ({ ...prev, privacy: undefined }))
    } else {
      setFormData({ ...formData, [name]: value })
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
    setSubmitError('')
  }

  const validateForm = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    const phoneRegex = /^0\d{8,9}$/
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) newErrors.name = t('contact.nameRequired')
    if (!phoneRegex.test(formData.phone)) newErrors.phone = t('contact.phoneInvalid')
    if (!emailRegex.test(formData.email)) newErrors.email = t('contact.emailInvalid')
    if (!formData.message.trim()) newErrors.message = t('contact.messageRequired')
    if (!formData.privacyAccepted) newErrors.privacy = t('contact.privacyRequired')

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (Date.now() - lastSubmitTime < 10000) {
      setSubmitError(t('contact.error'))
      return
    }

    if (!validateForm()) return

    setLastSubmitTime(Date.now())
    setLoading(true)
    setSubmitError('')

    try {
      const response = await fetch('/DynamicFormSubmitNew?FormID=2382', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          field_1: formData.name,
          field_2: formData.phone,
          field_3: formData.email,
          field_4: formData.message,
          field_5: formData.privacyAccepted,
          formUrl: window.location.href,
          siteURL: window.location.origin,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', phone: '', email: '', message: '', privacyAccepted: false })
        setErrors({})
      } else {
        setSubmitError(t('contact.error'))
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError(t('contact.error'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section contact-form-section">
      <div className="form-background">
        <img src="/0126sahuri-03.jpg" alt={backgroundAlt} />
      </div>

      <div className="form-container">
        {!submitted ? (
          <div className="contact-form">
            <h3 className="form-title">{t('contact.title')}</h3>
            <p className="form-subtitle">{subtitle}</p>

            <form onSubmit={handleSubmit} noValidate>
              <fieldset>
                <legend className="visually-hidden">{t('contact.title')}</legend>

                {/* Name + Phone row */}
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder={t('contact.name')}
                      value={formData.name}
                      onChange={handleChange}
                      aria-label={t('contact.name')}
                      aria-describedby={errors.name ? 'error-name' : undefined}
                      aria-invalid={!!errors.name}
                      dir={isRtl ? 'rtl' : 'ltr'}
                      className={errors.name ? 'input-error' : ''}
                    />
                    {errors.name && (
                      <span id="error-name" className="field-error" role="alert">{errors.name}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder={t('contact.phone')}
                      value={formData.phone}
                      onChange={handleChange}
                      aria-label={t('contact.phone')}
                      aria-describedby={errors.phone ? 'error-phone' : undefined}
                      aria-invalid={!!errors.phone}
                      dir={isRtl ? 'rtl' : 'ltr'}
                      className={`${isRtl ? 'phone-input-rtl' : ''} ${errors.phone ? 'input-error' : ''}`}
                    />
                    {errors.phone && (
                      <span id="error-phone" className="field-error" role="alert">{errors.phone}</span>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder={t('contact.email')}
                    value={formData.email}
                    onChange={handleChange}
                    aria-label={t('contact.email')}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                    aria-invalid={!!errors.email}
                    dir="ltr"
                    className={errors.email ? 'input-error' : ''}
                  />
                  {errors.email && (
                    <span id="error-email" className="field-error" role="alert">{errors.email}</span>
                  )}
                </div>

                {/* Message */}
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder={t('contact.message')}
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    aria-label={t('contact.message')}
                    aria-describedby={errors.message ? 'error-message' : undefined}
                    aria-invalid={!!errors.message}
                    dir={isRtl ? 'rtl' : 'ltr'}
                    className={errors.message ? 'input-error' : ''}
                  />
                  {errors.message && (
                    <span id="error-message" className="field-error" role="alert">{errors.message}</span>
                  )}
                </div>

                {/* Privacy */}
                <div className={`form-group checkbox ${errors.privacy ? 'checkbox-error' : ''}`}>
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={handleChange}
                    aria-describedby={errors.privacy ? 'error-privacy' : undefined}
                    aria-invalid={!!errors.privacy}
                  />
                  <div>
                    <label htmlFor="privacy">
                      {t('contact.privacy')}{' '}
                      <a href="/privacy" target="_blank" rel="noopener noreferrer">
                        {privacyDocLabel}
                      </a>
                    </label>
                    {errors.privacy && (
                      <span id="error-privacy" className="field-error" role="alert">{errors.privacy}</span>
                    )}
                  </div>
                </div>

                {submitError && (
                  <div className="submit-error" role="alert">{submitError}</div>
                )}

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? t('contact.sending') : t('contact.submit')}
                </button>
              </fieldset>
            </form>
          </div>
        ) : (
          <div className="form-success">
            <div className="success-icon">
              <svg viewBox="0 0 52 52" fill="none" aria-hidden="true">
                <circle className="success-circle" cx="26" cy="26" r="24" stroke="currentColor" strokeWidth="2.5" />
                <path className="success-check" d="M14 26l8 8 16-16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>{t('contact.success')}</h3>
            <p>{successDescription}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ContactForm
