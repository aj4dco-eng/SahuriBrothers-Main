import React from 'react'
import Footer from '../components/Footer'
import ScrollAnimation from '../components/ScrollAnimation'
import { useLanguage } from '../context/LanguageContext'
import { pickText, toUiLanguage } from '../lib/localized'

export default function AccessibilityDeclaration() {
  const { language } = useLanguage()
  const lang = toUiLanguage(language)

  return (
    <main className="public-page accessibility-page">
      <div className="public-shell">
        <section className="about-hero">
          <h1 className="about-hero-title">{pickText(lang, {
            en: 'Accessibility Declaration',
            he: 'הצהרת נגישות',
            ar: 'إعلان الوصول',
          })}</h1>
        </section>

        <ScrollAnimation animation="fadeUp">
          <section className="accessibility-intro">
            <p className="accessibility-intro-lead">
              {pickText(lang, {
                en: 'We are committed to making our website and services accessible for all visitors.',
                he: 'אנו מחויבים להנגשת האתר והשירותים שלנו לכלל המבקרים.',
                ar: 'نلتزم بجعل موقعنا وخدماتنا متاحة لجميع الزوار.',
              })}
            </p>
          </section>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={100}>
          <section className="accessibility-section">
            <h2 className="accessibility-heading">{pickText(lang, {
              en: 'General',
              he: 'כללי',
              ar: 'عام',
            })}</h2>
            <p className="accessibility-text">
              {pickText(lang, {
                en: 'Our company strives to provide the maximum website user experience to the general public, including people with disabilities. We have invested great effort in order to enable, facilitate and optimize the use of the site with an emphasis on the needs of these people. The accessibility adaptations on our site were made in accordance with Regulation 35 of the Equal Rights for People with Disabilities Regulations (Service Accessibility Adaptations), 5773 - 2013, Israeli Standard I.S. 5568 that is based on the WCAG 2.0 guidelines to a AA level and subject to changes and adaptations made in the Israeli Standards document. Accessibility adaptation has been tested in leading browsers such as Firefox and Chrome in their latest versions, up to the use of screen reader type assistive technologies (NVDA).',
                he: 'החברה שלנו שואפת לספק את חוויית המשתמש המרבית באתר לקהל הרחב, כולל אנשים עם מוגבלויות. השקענו מאמץ רב על מנת לאפשר, להקל ולייעל את השימוש באתר תוך שימת דגש על צרכיהם של אנשים אלו. התאמות הנגישות באתר שלנו נעשו בהתאם לתקנה 35 לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע"ג-2013, לתקן הישראלי ת"י 5568 המבוסס על הנחיות WCAG 2.0 ברמת AA ובכפוף לשינויים והתאמות שנעשו במסמך התקן הישראלי. התאמת הנגישות נבדקה בדפדפנים המובילים כגון Firefox ו-Chrome בגרסאותיהם האחרונות, עד לשימוש בטכנולוגיות מסייעות מסוג קורא מסך (NVDA).',
                ar: 'تسعى شركتنا إلى توفير أقصى تجربة مستخدم للموقع للجمهور العام، بما في ذلك الأشخاص ذوي الإعاقة. لقد استثمرنا جهدًا كبيرًا من أجل تمكين وتسهيل وتحسين استخدام الموقع مع التركيز على احتياجات هؤلاء الأشخاص. تم إجراء تعديلات الوصول على موقعنا وفقًا للائحة 35 من لوائح المساواة في الحقوق للأشخاص ذوي الإعاقة (تعديلات الوصول إلى الخدمة)، 5773 - 2013، المعيار الإسرائيلي I.S. 5568 الذي يستند إلى إرشادات WCAG 2.0 إلى المستوى AA ويخضع للتغييرات والتعديلات التي تم إجراؤها في وثيقة المعايير الإسرائيلية. تم اختبار تكييف الوصول في المتصفحات الرائدة مثل Firefox و Chrome في أحدث إصداراتها، حتى استخدام التقنيات المساعدة من نوع قارئ الشاشة (NVDA).',
              })}
            </p>
          </section>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={200}>
          <section className="accessibility-section">
            <h2 className="accessibility-heading">{pickText(lang, {
              en: 'How the Website Was Made Accessible',
              he: 'כיצד האתר הפך לנגיש',
              ar: 'كيف تم جعل الموقع متاحًا',
            })}</h2>
            <ul className="accessibility-list">
              <li>{pickText(lang, {
                en: 'Links at the beginning of the page allow skipping to the content.',
                he: 'קישורים בתחילת העמוד מאפשרים דילוג לתוכן.',
                ar: 'الروابط في بداية الصفحة تسمح بالانتقال إلى المحتوى.',
              })}</li>
              <li>{pickText(lang, {
                en: 'Textual description of images and icons for assistive technologies.',
                he: 'תיאור טקסטואלי של תמונות וסמלים לטכנולוגיות מסייעות.',
                ar: 'وصف نصي للصور والأيقونات للتقنيات المساعدة.',
              })}</li>
              <li>{pickText(lang, {
                en: 'Buttons for stopping and activating galleries.',
                he: 'כפתורים לעצירה והפעלה של גלריות.',
                ar: 'أزرار لإيقاف وتفعيل المعارض.',
              })}</li>
              <li>{pickText(lang, {
                en: 'Implementation of ARIA attributes that aid in interpreting the website content more accurately and better.',
                he: 'יישום מאפייני ARIA המסייעים בפרשנות תוכן האתר בצורה מדויקת וטובה יותר.',
                ar: 'تنفيذ سمات ARIA التي تساعد في تفسير محتوى الموقع بشكل أكثر دقة وأفضل.',
              })}</li>
              <li>{pickText(lang, {
                en: 'Accessibility of menus, forms, header hierarchy, tab components, pop-ups, and more.',
                he: 'נגישות של תפריטים, טפסים, היררכיית כותרות, רכיבי טאב, חלונות קופצים ועוד.',
                ar: 'إمكانية الوصول إلى القوائم والنماذج وتسلسل العناوين ومكونات علامات التبويب والنوافذ المنبثقة والمزيد.',
              })}</li>
              <li>{pickText(lang, {
                en: 'To navigate the site using the keyboard, use the tab key. Each press will take you to the next link. Pressing shift + tab will return you to the previous link. The font size can be changed using the keyboard: press the ctrl + keys to increase font size, press the keys ctrl - keys to reduce font size.',
                he: 'לניווט באתר באמצעות המקלדת, השתמשו במקש tab. כל לחיצה תעביר אתכם לקישור הבא. לחיצה על shift + tab תחזיר אתכם לקישור הקודם. ניתן לשנות את גודל הגופן באמצעות המקלדת: לחצו על המקשים ctrl + להגדלת גודל הגופן, לחצו על המקשים ctrl - להקטנת גודל הגופן.',
                ar: 'للتنقل في الموقع باستخدام لوحة المفاتيح، استخدم مفتاح tab. كل ضغطة ستنقلك إلى الرابط التالي. الضغط على shift + tab سيعيدك إلى الرابط السابق. يمكن تغيير حجم الخط باستخدام لوحة المفاتيح: اضغط على مفاتيح ctrl + لزيادة حجم الخط، اضغط على مفاتيح ctrl - لتقليل حجم الخط.',
              })}</li>
            </ul>
          </section>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={300}>
          <section className="accessibility-section">
            <h2 className="accessibility-heading">{pickText(lang, {
              en: 'Have You Encountered a Problem? Tell Us!',
              he: 'נתקלתם בבעיה? ספרו לנו!',
              ar: 'هل واجهتك مشكلة؟ أخبرنا!',
            })}</h2>
            <p className="accessibility-text">
              {pickText(lang, {
                en: 'We try to keep and maintain the site at the best level. If you have found and/or encountered difficulties browsing the site, feel free to report this to us at the e-mail address info@sahuribrothers.com or telephone number 052-896-5683. We\'ll take care of the problem and get back to you promptly with the details.',
                he: 'אנו מנסים לשמור ולתחזק את האתר ברמה הטובה ביותר. אם מצאתם ו/או נתקלתם בקשיים בגלישה באתר, אתם מוזמנים לדווח על כך לכתובת הדוא"ל info@sahuribrothers.com או למספר טלפון 052-896-5683. אנו נטפל בבעיה ונחזור אליכם במהירות עם הפרטים.',
                ar: 'نحاول الحفاظ على الموقع وصيانته على أفضل مستوى. إذا وجدت و/أو واجهت صعوبات في تصفح الموقع، فلا تتردد في الإبلاغ عن ذلك على عنوان البريد الإلكتروني info@sahuribrothers.com أو رقم الهاتف 052-896-5683. سنعتني بالمشكلة ونعود إليك على الفور بالتفاصيل.',
              })}
            </p>
          </section>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={400}>
          <section className="accessibility-section">
            <h2 className="accessibility-heading">{pickText(lang, {
              en: 'Statement Revision Date',
              he: 'תאריך עדכון ההצהרה',
              ar: 'تاريخ مراجعة البيان',
            })}</h2>
            <p className="accessibility-text">
              {pickText(lang, {
                en: 'This accessibility statement was last updated on March 12, 2026.',
                he: 'הצהרת נגישות זו עודכנה לאחרונה ב-12 במרץ 2026.',
                ar: 'تم تحديث بيان الوصول هذا آخر مرة في 12 مارس 2026.',
              })}
            </p>
          </section>
        </ScrollAnimation>
      </div>
      <Footer />
    </main>
  )
}
