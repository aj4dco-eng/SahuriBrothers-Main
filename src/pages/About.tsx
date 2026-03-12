import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import ScrollAnimation from '../components/ScrollAnimation'
import { useLanguage } from '../context/LanguageContext'
import { pickText, toUiLanguage } from '../lib/localized'

export default function About() {
  const { language } = useLanguage()
  const lang = toUiLanguage(language)

  const values = [
    {
      icon: '🎯',
      title: pickText(lang, { en: 'Precision', he: 'דיוק', ar: 'الدقة' }),
      description: pickText(lang, {
        en: 'Meticulous attention to every detail in design and installation',
        he: 'תשומת לב קפדנית לכל פרט בתכנון ובהתקנה',
        ar: 'اهتمام دقيق بكل التفاصيل في التصميم والتركيب'
      })
    },
    {
      icon: '💎',
      title: pickText(lang, { en: 'Quality', he: 'איכות', ar: 'الجودة' }),
      description: pickText(lang, {
        en: 'Premium materials and world-leading HVAC systems',
        he: 'חומרים איכותיים ומערכות HVAC מובילות בעולם',
        ar: 'مواد ممتازة وأنظمة HVAC رائدة عالميًا'
      })
    },
    {
      icon: '🔧',
      title: pickText(lang, { en: 'Expertise', he: 'מומחיות', ar: 'الخبرة' }),
      description: pickText(lang, {
        en: 'Certified professionals with comprehensive training',
        he: 'אנשי מקצוע מוסמכים עם הכשרה מקיפה',
        ar: 'محترفون معتمدون مع تدريب شامل'
      })
    },
    {
      icon: '✨',
      title: pickText(lang, { en: 'Innovation', he: 'חדשנות', ar: 'الابتكار' }),
      description: pickText(lang, {
        en: 'Creative solutions that think outside the box',
        he: 'פתרונות יצירתיים שחושבים מחוץ לקופסה',
        ar: 'حلول إبداعية تفكر خارج الصندوق'
      })
    }
  ]

  const services = [
    {
      title: pickText(lang, { en: 'Design', he: 'תכנון', ar: 'التصميم' }),
      subtitle: pickText(lang, { en: 'Comprehensive Planning', he: 'תכנון מקיף', ar: 'التخطيط الشامل' }),
      description: pickText(lang, {
        en: 'Designing air conditioning systems so that they are perfectly adapted to the installation space is a vital step to ensuring a result that will satisfy you in every way. HVAC systems take up significant room, so professional comprehensive planning is integral to effective home design.',
        he: 'תכנון מערכות מיזוג אוויר כך שיהיו מותאמות באופן מושלם לחלל ההתקנה הוא צעד חיוני להבטחת תוצאה שתספק אותך בכל דרך. מערכות HVAC תופסות מקום משמעותי, ולכן תכנון מקיף מקצועי הוא חלק בלתי נפרד מתכנון בית יעיל.',
        ar: 'تصميم أنظمة تكييف الهواء بحيث تكون متكيفة تمامًا مع مساحة التركيب هو خطوة حيوية لضمان نتيجة ترضيك بكل طريقة. تشغل أنظمة HVAC مساحة كبيرة، لذا فإن التخطيط الشامل المهني جزء لا يتجزأ من التصميم المنزلي الفعال.',
      }),
      details: pickText(lang, {
        en: 'In order to make sure that your architect can take into account all the various aspects of the air conditioning system, it is essential to plan ahead, utilizing extensive knowledge, creativity, and meticulous attention to detail. Sahuri Brothers specializes in thinking outside the box, finding the best creative aesthetic solutions that generate computerized plans of the very highest standard.',
        he: 'כדי לוודא שהאדריכל שלך יכול לקחת בחשבון את כל ההיבטים השונים של מערכת המיזוג, חיוני לתכנן מראש, תוך שימוש בידע נרחב, יצירתיות ותשומת לב קפדנית לפרטים. אחיוות סחורי מתמחה בחשיבה מחוץ לקופסה, במציאת הפתרונות האסתטיים היצירתיים הטובים ביותר שמייצרים תוכניות ממוחשבות ברמה הגבוהה ביותר.',
        ar: 'للتأكد من أن المهندس المعماري الخاص بك يمكنه أخذ جميع الجوانب المختلفة لنظام تكييف الهواء في الاعتبار، من الضروري التخطيط مسبقًا، واستخدام المعرفة الواسعة والإبداع والاهتمام الدقيق بالتفاصيل. يتخصص الإخوة ساحوري في التفكير خارج الصندوق، وإيجاد أفضل الحلول الجمالية الإبداعية التي تولد خططًا محوسبة من أعلى مستوى.',
      }),
      image: '/0126sahuri-02.jpg'
    },
    {
      title: pickText(lang, { en: 'Installation', he: 'התקנה', ar: 'التركيب' }),
      subtitle: pickText(lang, { en: 'Expert Implementation', he: 'יישום מקצועי', ar: 'التنفيذ الخبير' }),
      description: pickText(lang, {
        en: 'At the installation stage, the skilled professional Sahuri Brothers teams spring into action. Each of these teams is supervised by a dedicated project manager, with close attention to the technical specifications, in line with the computerized plans, and having selected the most high quality materials.',
        he: 'בשלב ההתקנה, צוותי אחיוות סחורי המקצועיים והמיומנים יוצאים לפעולה. כל אחד מהצוותים האלה מפוקח על ידי מנהל פרויקט ייעודי, עם תשומת לב רבה למפרטים הטכניים, בהתאם לתוכניות הממוחשבות, ולאחר בחירת החומרים האיכותיים ביותר.',
        ar: 'في مرحلة التركيب، تنطلق فرق الإخوة ساحوري المحترفة والماهرة إلى العمل. يتم إشراف كل من هذه الفرق بواسطة مدير مشروع مخصص، مع اهتمام وثيق بالمواصفات الفنية، بما يتماشى مع الخطط المحوسبة، وبعد اختيار أفضل المواد عالية الجودة.',
      }),
      details: pickText(lang, {
        en: "All of the company's installers and technicians undergo comprehensive professional training, which results in them being certified to install our state-of-the-art systems. Just as in the design stage, when assembling and installing the systems, our top priority is adherence to the highest professional standards. Because when it comes to air conditioning, we simply do not compromise on excellence.",
        he: 'כל המתקינים והטכנאים של החברה עוברים הכשרה מקצועית מקיפה, שמביאה לכך שהם מוסמכים להתקין את המערכות המתקדמות ביותר שלנו. בדיוק כמו בשלב התכנון, כאשר מרכיבים ומתקינים את המערכות, העדיפות העליונה שלנו היא דבקות בסטנדרטים המקצועיים הגבוהים ביותר. כי כשזה מגיע למיזוג אוויר, אנחנו פשוט לא מתפשרים על מצוינות.',
        ar: 'يخضع جميع المثبتين والفنيين في الشركة لتدريب مهني شامل، مما يؤدي إلى حصولهم على شهادة لتثبيت أنظمتنا الحديثة. تمامًا كما في مرحلة التصميم، عند تجميع وتثبيت الأنظمة، فإن أولويتنا القصوى هي الالتزام بأعلى المعايير المهنية. لأنه عندما يتعلق الأمر بتكييف الهواء، فإننا ببساطة لا نتنازل عن التميز.',
      }),
      image: '/0126sahuri-04.jpg'
    }
  ]

  return (
    <main className="public-page about-page">
      <div className="public-shell">
        <section className="about-hero">
          <h1 className="about-hero-title">
            {pickText(lang, {
              en: 'About Us',
              he: 'אודותינו',
              ar: 'معلومات عنا',
            })}
          </h1>
        </section>

        <ScrollAnimation animation="fadeUp">
          <section className="about-intro">
            <p className="about-intro-lead">
              {pickText(lang, {
                en: 'Sahuri Brothers Ltd. has been supplying planning, installation, and maintenance services for advanced air conditioning systems since its establishment.',
                he: 'אחיוות סחורי בע"מ מספקת שירותי תכנון, התקנה ותחזוקה למערכות מיזוג אוויר מתקדמות מאז הקמתה.',
                ar: 'تقدم شركة الإخوة ساحوري المحدودة خدمات التخطيط والتركيب والصيانة لأنظمة تكييف الهواء المتقدمة منذ تأسيسها.',
              })}
            </p>
            <p className="about-intro-text">
              {pickText(lang, {
                en: 'The company specializes in precise, meticulous design and engineering plans, as well as installing world-leading HVAC systems in luxury homes and public buildings.',
                he: 'החברה מתמחה בתכנון הנדסי מדויק וקפדני, כמו גם בהתקנת מערכות HVAC מובילות בעולם בבתים יוקרתיים ומבנים ציבוריים.',
                ar: 'تتخصص الشركة في التصميم الهندسي الدقيق والدقيق، وكذلك تركيب أنظمة HVAC الرائدة عالميًا في المنازل الفاخرة والمباني العامة.',
              })}
            </p>
            <p className="about-intro-text">
              {pickText(lang, {
                en: 'No matter the space or the project, the core Sahuri Brothers values always shine through. This can be seen in every solution we provide, which reflects our many years of experience and our dedication to the most professional, high quality work.',
                he: 'לא משנה המרחב או הפרויקט, ערכי הליבה של אחיוות סחורי תמיד בולטים. ניתן לראות זאת בכל פתרון שאנו מספקים, המשקף את שנות הניסיון הרבות שלנו ואת המסירות שלנו לעבודה המקצועית והאיכותית ביותר.',
                ar: 'بغض النظر عن المساحة أو المشروع، تتألق دائمًا قيم الإخوة ساحوري الأساسية. يمكن رؤية ذلك في كل حل نقدمه، والذي يعكس سنوات خبرتنا العديدة وتفانينا في العمل الأكثر احترافية وجودة عالية.',
              })}
            </p>
          </section>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={100}>
          <section className="about-values-section">
            <h2 className="about-values-title">
              {pickText(lang, {
                en: 'Our Core Values',
                he: 'הערכים שלנו',
                ar: 'قيمنا الأساسية'
              })}
            </h2>
            <div className="about-values-grid">
              {values.map((value, index) => (
                <ScrollAnimation key={index} animation="scaleUp" delay={150 + (index * 100)}>
                  <div className="about-value-card">
                    <div className="about-value-icon">{value.icon}</div>
                    <h3 className="about-value-title">{value.title}</h3>
                    <p className="about-value-description">{value.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={200}>
          <section className="about-expertise-section">
            <div className="about-expertise-header">
              <h2 className="about-expertise-title">
                {pickText(lang, {
                  en: 'Our Expertise',
                  he: 'התמחות שלנו',
                  ar: 'خبرتنا'
                })}
              </h2>
              <p className="about-expertise-subtitle">
                {pickText(lang, {
                  en: 'We are active in HVAC fields, including VRF air conditioning, installation of underfloor heating systems, using heat pumps to heat swimming pools and drinking water, chiller-based air conditioning systems, cooling towers, evaporation and filtration systems for the manufacturing industry and the food/restaurant field, and installation of air conditioning systems with temperature, humidity, and pressure controls for clean rooms and operating rooms.',
                  he: 'אנו פעילים בתחומי HVAC, כולל מיזוג אוויר VRF, התקנת מערכות חימום תת-רצפתיות, שימוש במשאבות חום לחימום בריכות שחייה ומי שתייה, מערכות מיזוג מבוססות צ\'ילר, מגדלי קירור, מערכות אידוי וסינון לתעשיית הייצור ולתחום המזון/מסעדנות, והתקנת מערכות מיזוג עם בקרות טמפרטורה, לחות ולחץ לחדרים נקיים וחדרי ניתוח.',
                  ar: 'نحن نشطون في مجالات HVAC، بما في ذلك تكييف الهواء VRF، وتركيب أنظمة التدفئة تحت الأرضية، واستخدام مضخات الحرارة لتسخين حمامات السباحة ومياه الشرب، وأنظمة تكييف الهواء القائمة على المبردات، وأبراج التبريد، وأنظمة التبخير والترشيح لصناعة التصنيع ومجال الأغذية/المطاعم، وتركيب أنظمة تكييف الهواء مع ضوابط درجة الحرارة والرطوبة والضغط للغرف النظيفة وغرف العمليات.',
                })}
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {services.map((service, index) => (
          <ScrollAnimation key={index} animation={index % 2 === 0 ? 'slideLeft' : 'slideRight'} delay={100}>
            <section className={`about-service-section ${index % 2 === 0 ? 'reverse' : ''}`}>
              <div className="about-service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="about-service-content">
                <div className="about-service-number">0{index + 1}</div>
                <h3 className="about-service-title">{service.title}</h3>
                <h4 className="about-service-subtitle">{service.subtitle}</h4>
                <p className="about-service-description">{service.description}</p>
                <p className="about-service-details">{service.details}</p>
              </div>
            </section>
          </ScrollAnimation>
        ))}
      </div>
      <Footer />
    </main>
  )
}
