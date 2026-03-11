import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'
import { pickText, toUiLanguage } from '../lib/localized'

export default function About() {
  const { language } = useLanguage()
  const lang = toUiLanguage(language)

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

        <section className="about-intro">
          <p className="about-intro-text">
            {pickText(lang, {
              en: 'Sahuri Brothers Ltd. has been supplying planning, installation, and maintenance services for advanced air conditioning systems since its establishment. The company specializes in precise, meticulous design and engineering plans, as well as installing world-leading HVAC systems in luxury homes and public buildings.',
              he: 'אחיוות סחורי בע"מ מספקת שירותי תכנון, התקנה ותחזוקה למערכות מיזוג אוויר מתקדמות מאז הקמתה. החברה מתמחה בתכנון הנדסי מדויק וקפדני, כמו גם בהתקנת מערכות HVAC מובילות בעולם בבתים יוקרתיים ומבנים ציבוריים.',
              ar: 'تقدم شركة الإخوة ساحوري المحدودة خدمات التخطيط والتركيب والصيانة لأنظمة تكييف الهواء المتقدمة منذ تأسيسها. تتخصص الشركة في التصميم الهندسي الدقيق والدقيق، وكذلك تركيب أنظمة HVAC الرائدة عالميًا في المنازل الفاخرة والمباني العامة.',
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

        <section className="about-story-section">
          <div className="about-story-image">
            <img src="/0126sahuri-01.jpg" alt="Our Story" />
          </div>
          <div className="about-story-content">
            <h2 className="about-section-title">
              {pickText(lang, {
                en: 'Our Story',
                he: 'הסיפור שלנו',
                ar: 'قصتنا',
              })}
            </h2>
            <p className="about-story-text">
              {pickText(lang, {
                en: 'We are active in HVAC fields, including VRF air conditioning, installation of underfloor heating systems, using heat pumps to heat swimming pools and drinking water, chiller-based air conditioning systems, cooling towers, evaporation and filtration systems for the manufacturing industry and the food/restaurant field, and installation of air conditioning systems with temperature, humidity, and pressure controls for clean rooms and operating rooms.',
                he: 'אנו פעילים בתחומי HVAC, כולל מיזוג אוויר VRF, התקנת מערכות חימום תת-רצפתיות, שימוש במשאבות חום לחימום בריכות שחייה ומי שתייה, מערכות מיזוג מבוססות צ\'ילר, מגדלי קירור, מערכות אידוי וסינון לתעשיית הייצור ולתחום המזון/מסעדנות, והתקנת מערכות מיזוג עם בקרות טמפרטורה, לחות ולחץ לחדרים נקיים וחדרי ניתוח.',
                ar: 'نحن نشطون في مجالات HVAC، بما في ذلك تكييف الهواء VRF، وتركيب أنظمة التدفئة تحت الأرضية، واستخدام مضخات الحرارة لتسخين حمامات السباحة ومياه الشرب، وأنظمة تكييف الهواء القائمة على المبردات، وأبراج التبريد، وأنظمة التبخير والترشيح لصناعة التصنيع ومجال الأغذية/المطاعم، وتركيب أنظمة تكييف الهواء مع ضوابط درجة الحرارة والرطوبة والضغط للغرف النظيفة وغرف العمليات.',
              })}
            </p>
          </div>
        </section>

        <section className="about-features">
          <article className="about-feature-card">
            <h3 className="about-feature-title">
              {pickText(lang, {
                en: 'Design',
                he: 'תכנון',
                ar: 'التصميم',
              })}
            </h3>
            <p className="about-feature-text">
              {pickText(lang, {
                en: 'Designing air conditioning systems so that they are perfectly adapted to the installation space is a vital step to ensuring a result that will satisfy you in every way. HVAC systems take up significant room, so professional comprehensive planning is integral to effective home design.',
                he: 'תכנון מערכות מיזוג אוויר כך שיהיו מותאמות באופן מושלם לחלל ההתקנה הוא צעד חיוני להבטחת תוצאה שתספק אותך בכל דרך. מערכות HVAC תופסות מקום משמעותי, ולכן תכנון מקיף מקצועי הוא חלק בלתי נפרד מתכנון בית יעיל.',
                ar: 'تصميم أنظمة تكييف الهواء بحيث تكون متكيفة تمامًا مع مساحة التركيب هو خطوة حيوية لضمان نتيجة ترضيك بكل طريقة. تشغل أنظمة HVAC مساحة كبيرة، لذا فإن التخطيط الشامل المهني جزء لا يتجزأ من التصميم المنزلي الفعال.',
              })}
            </p>
            <p className="about-feature-text">
              {pickText(lang, {
                en: 'In order to make sure that your architect can take into account all the various aspects of the air conditioning system, it is essential to plan ahead, utilizing extensive knowledge, creativity, and meticulous attention to detail. Sahuri Brothers specializes in thinking outside the box, finding the best creative aesthetic solutions that generate computerized plans of the very highest standard.',
                he: 'כדי לוודא שהאדריכל שלך יכול לקחת בחשבון את כל ההיבטים השונים של מערכת המיזוג, חיוני לתכנן מראש, תוך שימוש בידע נרחב, יצירתיות ותשומת לב קפדנית לפרטים. אחיוות סחורי מתמחה בחשיבה מחוץ לקופסה, במציאת הפתרונות האסתטיים היצירתיים הטובים ביותר שמייצרים תוכניות ממוחשבות ברמה הגבוהה ביותר.',
                ar: 'للتأكد من أن المهندس المعماري الخاص بك يمكنه أخذ جميع الجوانب المختلفة لنظام تكييف الهواء في الاعتبار، من الضروري التخطيط مسبقًا، واستخدام المعرفة الواسعة والإبداع والاهتمام الدقيق بالتفاصيل. يتخصص الإخوة ساحوري في التفكير خارج الصندوق، وإيجاد أفضل الحلول الجمالية الإبداعية التي تولد خططًا محوسبة من أعلى مستوى.',
              })}
            </p>
          </article>

          <article className="about-feature-card">
            <h3 className="about-feature-title">
              {pickText(lang, {
                en: 'Installation',
                he: 'התקנה',
                ar: 'التركيب',
              })}
            </h3>
            <p className="about-feature-text">
              {pickText(lang, {
                en: 'At the installation stage, the skilled professional Sahuri Brothers teams spring into action. Each of these teams is supervised by a dedicated project manager, with close attention to the technical specifications, in line with the computerized plans, and having selected the most high quality materials.',
                he: 'בשלב ההתקנה, צוותי אחיוות סחורי המקצועיים והמיומנים יוצאים לפעולה. כל אחד מהצוותים האלה מפוקח על ידי מנהל פרויקט ייעודי, עם תשומת לב רבה למפרטים הטכניים, בהתאם לתוכניות הממוחשבות, ולאחר בחירת החומרים האיכותיים ביותר.',
                ar: 'في مرحلة التركيب، تنطلق فرق الإخوة ساحوري المحترفة والماهرة إلى العمل. يتم إشراف كل من هذه الفرق بواسطة مدير مشروع مخصص، مع اهتمام وثيق بالمواصفات الفنية، بما يتماشى مع الخطط المحوسبة، وبعد اختيار أفضل المواد عالية الجودة.',
              })}
            </p>
            <p className="about-feature-text">
              {pickText(lang, {
                en: "All of the company's installers and technicians undergo comprehensive professional training, which results in them being certified to install our state-of-the-art systems. Just as in the design stage, when assembling and installing the systems, our top priority is adherence to the highest professional standards. Because when it comes to air conditioning, we simply do not compromise on excellence.",
                he: 'כל המתקינים והטכנאים של החברה עוברים הכשרה מקצועית מקיפה, שמביאה לכך שהם מוסמכים להתקין את המערכות המתקדמות ביותר שלנו. בדיוק כמו בשלב התכנון, כאשר מרכיבים ומתקינים את המערכות, העדיפות העליונה שלנו היא דבקות בסטנדרטים המקצועיים הגבוהים ביותר. כי כשזה מגיע למיזוג אוויר, אנחנו פשוט לא מתפשרים על מצוינות.',
                ar: 'يخضع جميع المثبتين والفنيين في الشركة لتدريب مهني شامل، مما يؤدي إلى حصولهم على شهادة لتثبيت أنظمتنا الحديثة. تمامًا كما في مرحلة التصميم، عند تجميع وتثبيت الأنظمة، فإن أولويتنا القصوى هي الالتزام بأعلى المعايير المهنية. لأنه عندما يتعلق الأمر بتكييف الهواء، فإننا ببساطة لا نتنازل عن التميز.',
              })}
            </p>
          </article>
        </section>
      </div>
      <Footer />
    </main>
  )
}
