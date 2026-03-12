import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import ScrollAnimation from '../components/ScrollAnimation'
import { useLanguage } from '../context/LanguageContext'
import { pickText, toUiLanguage } from '../lib/localized'

export default function PublicProjectsCommercial() {
  const { language } = useLanguage()
  const lang = toUiLanguage(language)

  const stats = [
    {
      number: '200+',
      label: pickText(lang, { en: 'Commercial Projects', he: 'פרויקטים מסחריים', ar: 'مشاريع تجارية' })
    },
    {
      number: '50+',
      label: pickText(lang, { en: 'Major Corporations', he: 'תאגידים גדולים', ar: 'شركات كبرى' })
    },
    {
      number: '15+',
      label: pickText(lang, { en: 'Government Projects', he: 'פרויקטים ממשלתיים', ar: 'مشاريع حكومية' })
    },
    {
      number: '100%',
      label: pickText(lang, { en: 'On-Time Delivery', he: 'אספקה בזמן', ar: 'التسليم في الوقت المحدد' })
    }
  ]

  return (
    <main className="public-page projects-page">
      <div className="public-shell">
        <section className="about-hero">
          <h1 className="about-hero-title">
            {pickText(lang, {
              en: 'Our Projects',
              he: 'הפרויקטים שלנו',
              ar: 'مشاريعنا',
            })}
          </h1>
        </section>

        <ScrollAnimation animation="fadeUp">
          <div className="about-project-tabs">
            <Link to="/projects/private" className="project-tab-link">
              {pickText(lang, { en: 'Private Projects', he: 'פרויקטים פרטיים', ar: 'مشاريع خاصة' })}
            </Link>
            <Link to="/projects/commercial" className="project-tab-link active">
              {pickText(lang, { en: 'Commercial Projects', he: 'פרויקטים מסחריים', ar: 'مشاريع تجارية' })}
            </Link>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={100}>
          <section className="projects-intro">
            <p className="projects-intro-lead">
              {pickText(lang, {
                en: "Sahuri Brothers is bringing a breath of fresh air to the AC world through hundreds of public projects across Israel.",
                he: "אחים סהורי מביאים נשימה של אוויר צח לעולם המיזוג באמצעות מאות פרויקטים ציבוריים ברחבי ישראל.",
                ar: "تجلب شركة إخوة سهوري نسمة من الهواء النقي إلى عالم التكييف من خلال مئات المشاريع العامة في جميع أنحاء إسرائيل."
              })}
            </p>
          <p>
            {pickText(lang, {
              en: "Specializing in HVAC design and installation for luxury homes and public institutions, Sahuri Brothers is never satisfied with simply providing its customers with various air conditioners. The company's knowledge, professionalism, experience, and constant pursuit of excellence ensure that its teams design and install the finest, top-quality HVAC systems that not only meet all requirements but also surpass every expectation.",
              he: "אחים סהורי מתמחים בתכנון והתקנה של מערכות HVAC לבתים יוקרתיים ומוסדות ציבוריים, ואינם מסתפקים רק באספקת מזגנים שונים ללקוחותיהם. הידע, המקצועיות, הניסיון והשאיפה המתמדת למצוינות של החברה מבטיחים שהצוותים שלה מתכננים ומתקינים את מערכות ה-HVAC המשובחות והאיכותיות ביותר שלא רק עומדות בכל הדרישות אלא גם עולות על כל ציפייה.",
              ar: "متخصصون في تصميم وتركيب أنظمة HVAC للمنازل الفاخرة والمؤسسات العامة، لا تكتفي شركة إخوة سهوري بتوفير مكيفات الهواء المختلفة لعملائها. إن معرفة الشركة واحترافيتها وخبرتها وسعيها المستمر نحو التميز تضمن أن فرقها تصمم وتركب أفضل أنظمة HVAC عالية الجودة التي لا تلبي جميع المتطلبات فحسب، بل تتجاوز كل التوقعات أيضًا."
            })}
          </p>
          <p>
            {pickText(lang, {
              en: "By consistently striving for greater heights of professionalism, innovation, and reliability, while complying with the highest quality standards, we have successfully planned and performed hundreds of complex projects all over Israel for our many clients in the commercial market, including: government ministries, banks, and leading corporations.",
              he: "על ידי שאיפה מתמדת לגבהים גדולים יותר של מקצועיות, חדשנות ואמינות, תוך ציות לסטנדרטים האיכותיים הגבוהים ביותר, תכננו וביצענו בהצלחה מאות פרויקטים מורכבים בכל רחבי ישראל עבור לקוחותינו הרבים בשוק המסחרי, כולל: משרדי ממשלה, בנקים ותאגידים מובילים.",
              ar: "من خلال السعي المستمر نحو مستويات أعلى من الاحترافية والابتكار والموثوقية، مع الامتثال لأعلى معايير الجودة، نجحنا في تخطيط وتنفيذ مئات المشاريع المعقدة في جميع أنحاء إسرائيل للعديد من عملائنا في السوق التجاري، بما في ذلك: الوزارات الحكومية والبنوك والشركات الرائدة."
            })}
          </p>
          <p className="projects-tagline">
            {pickText(lang, {
              en: "We ensure that every AC project is a breeze.",
              he: "אנו מבטיחים שכל פרויקט מיזוג יהיה קל כמו משב רוח.",
              ar: "نحن نضمن أن كل مشروع تكييف هو نسيم."
            })}
          </p>
          </section>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={200}>
          <section className="projects-stats-section">
            <div className="projects-stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        <section className="projects-grid-section">
          <ScrollAnimation animation="fadeUp" delay={100}>
            <h2 className="projects-grid-title">
              {pickText(lang, {
                en: 'Featured Commercial Projects',
                he: 'פרויקטים מסחריים נבחרים',
                ar: 'مشاريع تجارية مميزة'
              })}
            </h2>
          </ScrollAnimation>
          <div className="projects-grid">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <ScrollAnimation 
                key={index} 
                animation="scaleUp" 
                delay={100 + (index * 50)}
              >
                <div className="project-grid-item">
                  <div className="project-overlay">
                    <div className="project-info">
                      <span className="project-number">0{item}</span>
                    </div>
                  </div>
                  <img 
                    src={`/0126sahuri-0${((index % 4) + 1)}.jpg`} 
                    alt={`Commercial project ${item}`} 
                  />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
