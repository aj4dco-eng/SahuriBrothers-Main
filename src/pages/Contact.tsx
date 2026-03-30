import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import ScrollAnimation from '../components/ScrollAnimation'
import { useLanguage } from '../context/LanguageContext'
import { pickText, toUiLanguage } from '../lib/localized'

export default function Contact() {
  const { language } = useLanguage()
  const lang = toUiLanguage(language)

  return (
    <main className="public-page contact-page">
      <div className="public-shell">
        <section className="about-hero">
          <h1 className="about-hero-title">
            {pickText(lang, {
              en: 'Contact Us',
              he: 'צור קשר',
              ar: 'اتصل بنا',
            })}
          </h1>
        </section>

        <ScrollAnimation animation="fadeUp">
          <section className="about-intro">
            <p className="about-intro-text">
              {pickText(lang, {
                en: 'Get in touch with Sahuri Brothers for professional HVAC consultation, project planning, or maintenance services. Our expert team is ready to help you create the perfect climate solution for your space.',
                he: 'צור קשר עם אחים סהורי לייעוץ מקצועי ב-HVAC, תכנון פרויקטים או שירותי תחזוקה. צוות המומחים שלנו מוכן לעזור לך ליצור את פתרון האקלים המושלם עבור המרחב שלך.',
                ar: 'تواصل مع الإخوة ساحوري للحصول على استشارة احترافية في HVAC أو تخطيط المشاريع أو خدمات الصيانة. فريق الخبراء لدينا جاهز لمساعدتك في إنشاء حل المناخ المثالي لمساحتك.',
              })}
            </p>
          </section>
        </ScrollAnimation>

        <div className="contact-content-wrapper">
          <ScrollAnimation animation="slideLeft" delay={100}>
            <div className="contact-info-card">
              <div className="contact-info-header">
                <h2 className="contact-info-title">{pickText(lang, {
                  en: 'Sahuri Brothers Ltd.',
                  he: 'אחים סהורי בע"מ',
                  ar: 'شركة الإخوة ساحوري المحدودة',
                })}</h2>
                <p className="contact-info-subtitle">{pickText(lang, {
                  en: 'Professional HVAC Solutions',
                  he: 'פתרונות HVAC מקצועיים',
                  ar: 'حلول HVAC احترافية',
                })}</p>
              </div>

              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div className="contact-info-icon">📞</div>
                  <div className="contact-info-details">
                    <h3>{pickText(lang, { en: 'Phone', he: 'טלפון', ar: 'هاتف' })}</h3>
                    <a href="tel:052-896-5683">052-896-5683</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">💼</div>
                  <div className="contact-info-details">
                    <h3>{pickText(lang, { en: 'Business', he: 'עסק', ar: 'عمل' })}</h3>
                    <p>sahuri.brothers</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">🕐</div>
                  <div className="contact-info-details">
                    <h3>{pickText(lang, { en: 'Hours', he: 'שעות פעילות', ar: 'ساعات العمل' })}</h3>
                    <p>
                      {pickText(lang, {
                        en: 'Sunday - Thursday',
                        he: 'ראשון - חמישי',
                        ar: 'الأحد - الخميس',
                      })}
                    </p>
                    <p className="contact-time">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/972528965683"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp-btn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {pickText(lang, {
                  en: 'Chat on WhatsApp',
                  he: 'שלח הודעה ב-WhatsApp',
                  ar: 'تواصل عبر واتساب',
                })}
              </a>

              <div className="contact-info-footer">
                <p>{pickText(lang, {
                  en: 'We respond to all inquiries within 24 hours',
                  he: 'אנו עונים לכל הפניות תוך 24 שעות',
                  ar: 'نرد على جميع الاستفسارات خلال 24 ساعة',
                })}</p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideRight" delay={200}>
            <div className="contact-form-wrapper">
              <ContactForm />
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <Footer />
    </main>
  )
}
