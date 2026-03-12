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
