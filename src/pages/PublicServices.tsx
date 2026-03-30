import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import ScrollAnimation from '../components/ScrollAnimation'
import TiltCard from '../components/TiltCard'
import { useLanguage } from '../context/LanguageContext'
import { pickText, toUiLanguage } from '../lib/localized'

export default function PublicServices() {
  const { language } = useLanguage()
  const lang = toUiLanguage(language)

  const services = [
    {
      number: '01',
      title: pickText(lang, { en: 'Engineering Planning', he: 'תכנון הנדסי', ar: 'تخطيط هندسي' }),
      description: pickText(lang, { 
        en: '3D coordination and performance-first design. We ensure every duct, grille, and unit is precisely planned to integrate seamlessly with your architecture.', 
        he: 'תיאום תלת-ממדי ותכנון מונחה ביצועים. אנו מבטיחים שכל תעלה, רשת ויחידה מתוכננים בדיוק להשתלבות חלקה באדריכלות.', 
        ar: 'تنسيق ثلاثي الأبعاد وتصميم يركز على الأداء. نضمن أن كل قناة وشبكة ووحدة مخططة بدقة للتكامل السلس مع العمارة.' 
      }),
      icon: '📐'
    },
    {
      number: '02',
      title: pickText(lang, { en: 'Advanced Installations', he: 'התקנות מתקדמות', ar: 'تركيبات متقدمة' }),
      description: pickText(lang, { 
        en: 'VRF, ducted, and low-visibility systems. Our expert team handles complex installations with precision craftsmanship and attention to detail.', 
        he: 'מערכות VRF, תעלות ומערכות נסתרות. צוות המומחים שלנו מטפל בהתקנות מורכבות בדיוק ותשומת לב לפרטים.', 
        ar: 'أنظمة VRF وأنظمة قنوات وحلول منخفضة الظهور. يتعامل فريق الخبراء لدينا مع التركيبات المعقدة بدقة واهتمام بالتفاصيل.' 
      }),
      icon: '🔧'
    },
    {
      number: '03',
      title: pickText(lang, { en: 'Maintenance & Support', he: 'תחזוקה ותמיכה', ar: 'صيانة ودعم' }),
      description: pickText(lang, { 
        en: 'Reliable after-sales service and optimization. We provide ongoing support to ensure your climate system performs perfectly year after year.', 
        he: 'שירות אמין לאחר מסירה ואופטימיזציה. אנו מספקים תמיכה מתמשכת להבטחת ביצועים מושלמים של מערכת האקלים שנה אחר שנה.', 
        ar: 'خدمة موثوقة بعد التسليم وتحسين مستمر. نقدم دعما مستمرا لضمان أداء نظام المناخ بشكل مثالي عاما بعد عام.' 
      }),
      icon: '⚙️'
    }
  ]

  const features = [
    {
      icon: '👨‍👩‍👦',
      title: pickText(lang, { 
        en: 'Family-Owned Excellence', 
        he: 'מצוינות משפחתית', 
        ar: 'التميز العائلي' 
      }),
      description: pickText(lang, { 
        en: 'Personal accountability and dedication in every project', 
        he: 'אחריות אישית ומסירות בכל פרויקט', 
        ar: 'مسؤولية شخصية وتفان في كل مشروع' 
      })
    },
    {
      icon: '🎯',
      title: pickText(lang, { 
        en: 'Invisible Integration', 
        he: 'אינטגרציה בלתי נראית', 
        ar: 'التكامل غير المرئي' 
      }),
      description: pickText(lang, { 
        en: 'Climate systems that blend seamlessly with your design', 
        he: 'מערכות אקלים המשתלבות בצורה מושלמת בעיצוב שלך', 
        ar: 'أنظمة مناخ تتكامل بسلاسة مع التصميم الخاص بك' 
      })
    },
    {
      icon: '💎',
      title: pickText(lang, { 
        en: 'Premium Quality', 
        he: 'איכות פרימיום', 
        ar: 'جودة ممتازة' 
      }),
      description: pickText(lang, { 
        en: 'Top-tier materials and expert craftsmanship', 
        he: 'חומרים ברמה הגבוהה ביותר ומלאכה מקצועית', 
        ar: 'مواد من الدرجة الأولى وحرفية خبراء' 
      })
    },
    {
      icon: '🛡️',
      title: pickText(lang, { 
        en: 'Guaranteed Support', 
        he: 'תמיכה מובטחת', 
        ar: 'دعم مضمون' 
      }),
      description: pickText(lang, { 
        en: 'Comprehensive warranty and ongoing maintenance', 
        he: 'אחריות מקיפה ותחזוקה מתמשכת', 
        ar: 'ضمان شامل وصيانة مستمرة' 
      })
    }
  ]

  return (
    <main className="public-page services-page">
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

        <ScrollAnimation animation="fadeUp">
          <section className="about-intro">
            <p className="about-intro-text">
              {pickText(lang, {
                en: 'We specialize in creating invisible climate solutions that enhance your space without compromising aesthetics. From initial planning to long-term support, we deliver excellence at every stage.',
                he: 'אנו מתמחים ביצירת פתרונות אקלים בלתי נראים המשפרים את החלל שלך מבלי לפגוע באסתטיקה. מתכנון ראשוני ועד תמיכה ארוכת טווח, אנו מספקים מצוינות בכל שלב.',
                ar: 'نحن متخصصون في إنشاء حلول مناخية غير مرئية تعزز مساحتك دون المساس بالجماليات. من التخطيط الأولي إلى الدعم طويل الأمد، نقدم التميز في كل مرحلة.',
              })}
            </p>
          </section>
        </ScrollAnimation>

        <div className="services-grid-wrapper">
          {services.map((service, index) => (
            <ScrollAnimation 
              key={index} 
              animation={index % 2 === 0 ? 'slideLeft' : 'slideRight'} 
              delay={index * 100}
            >
              <TiltCard className="service-card-modern" intensity={7}>
                <div className="service-number">{service.number}</div>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </TiltCard>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fadeUp" delay={200}>
          <section className="services-why-section">
            <div className="services-why-header">
              <h2 className="services-why-title">
                {pickText(lang, {
                  en: 'Why Choose Sahuri Brothers',
                  he: 'למה לבחור בסחורי ברוס',
                  ar: 'لماذا تختار الإخوة ساحوري',
                })}
              </h2>
              <p className="services-why-subtitle">
                {pickText(lang, {
                  en: 'Four pillars of excellence that set us apart',
                  he: 'ארבעה עמודי תווך של מצוינות שמבדלים אותנו',
                  ar: 'أربع ركائز للتميز تميزنا',
                })}
              </p>
            </div>

            <div className="features-grid">
              {features.map((feature, index) => (
                <ScrollAnimation 
                  key={index} 
                  animation="scaleUp" 
                  delay={100 + (index * 100)}
                >
                  <TiltCard className="feature-card" intensity={6}>
                    <div className="feature-icon">{feature.icon}</div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </TiltCard>
                </ScrollAnimation>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={300}>
          <section className="services-cta-section">
            <div className="services-cta-content">
              <h2>
                {pickText(lang, {
                  en: 'Ready to Start Your Project?',
                  he: 'מוכנים להתחיל את הפרויקט שלכם?',
                  ar: 'هل أنت مستعد لبدء مشروعك؟',
                })}
              </h2>
              <p>
                {pickText(lang, {
                  en: "Let's discuss how we can create the perfect climate solution for your space.",
                  he: 'בואו נדבר על איך נוכל ליצור את פתרון האקלים המושלם עבור החלל שלכם.',
                  ar: 'دعونا نناقش كيف يمكننا إنشاء الحل المناخي المثالي لمساحتك.',
                })}
              </p>
              <Link to="/contact" className="services-cta-button">
                {pickText(lang, {
                  en: 'Contact Us',
                  he: 'צור קשר',
                  ar: 'اتصل بنا',
                })}
              </Link>
            </div>
          </section>
        </ScrollAnimation>
      </div>
      <Footer />
    </main>
  )
}
