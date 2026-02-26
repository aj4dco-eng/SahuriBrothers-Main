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

const ContactForm: React.FC = () => {
  const { t, language } = useLanguage()
  const lang = toUiLanguage(language)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    privacyAccepted: false,
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

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
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const validateForm = (): boolean => {
    const emailRegex = /^([A-Za-z0-9._-]+)@[A-Za-z0-9]([A-Za-z0-9.-]*)\.[A-Za-z]{2,5}$/
    const phoneRegex = /^[0]([0-9]{7,9})[^\s]$|(^[0]([0-9]{1,})\-+[0-9]{3}[0-9]{3})[^\s]$/

    if (!formData.name.trim()) {
      alert(t('contact.nameRequired'))
      return false
    }
    if (!phoneRegex.test(formData.phone)) {
      alert(t('contact.phoneInvalid'))
      return false
    }
    if (!emailRegex.test(formData.email)) {
      alert(t('contact.emailInvalid'))
      return false
    }
    if (!formData.message.trim()) {
      alert(t('contact.messageRequired'))
      return false
    }
    if (!formData.privacyAccepted) {
      alert(t('contact.privacyRequired'))
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/DynamicFormSubmitNew?FormID=2382', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
          privacyAccepted: false,
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert(t('contact.error'))
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

            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend className="visually-hidden">
                  {t('contact.title')}
                </legend>

                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contact.name')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-label={t('contact.name')}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t('contact.phone')}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    aria-label={t('contact.phone')}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder={t('contact.email')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-label={t('contact.email')}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder={t('contact.message')}
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-label={t('contact.message')}
                  />
                </div>

                <div className="form-group checkbox">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={handleChange}
                    required
                    aria-label={t('contact.privacy')}
                  />
                  <label htmlFor="privacy">
                    {t('contact.privacy')}{' '}
                    <a
                      href="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {privacyDocLabel}
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={loading}
                >
                  {loading ? t('contact.sending') : t('contact.submit')}
                </button>
              </fieldset>
            </form>
          </div>
        ) : (
          <div className="form-success">
            <h3>{t('contact.success')}</h3>
            <p>{successDescription}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ContactForm
