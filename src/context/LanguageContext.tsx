import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'he' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation strings
const translations: Record<Language, Record<string, string>> = {
  en: {
    'header.services': 'Services',
    'header.portfolio': 'Portfolio',
    'header.about': 'About',
    'header.contact': 'Contact',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.services': 'Our Services',
    'nav.team': 'Team',
    'nav.contact': 'Contact Us',
    'nav.projects.private': 'Private Projects',
    'nav.projects.commercial': 'Commercial Projects',
    'nav.menu': 'Navigation menu',
    
    'hero.title': 'Crafting Climate Perfection',
    'hero.subtitle': 'Advanced climate control and heating solutions with engineering precision and high-end style',
    'hero.pause': 'Pause gallery',
    'hero.play': 'Play gallery',
    'hero.slide': 'Slide',
    'hero.scroll': 'scroll-down',
    
    'plan.precision': 'Engineering Precision',
    'plan.precision.desc1': 'We don\'t hide mechanical systems; we design spaces without them. Fitting premium climate control systems into complex spaces requires precise engineering. Our team pushes boundaries, delivering advanced VRF solutions with accurate 3D CAD planning.',
    'plan.precision.desc2': 'Glass ceilings with no wall space? Pipes hidden in moldings? Units concealed in cabinets with high ceilings without damage? That\'s what we do every day.',
    'plan.precision.link': 'Learn about our planning process',
    
    'plan.family': 'Family Service - Sahuri Brothers Guarantee',
    'plan.family.desc': 'Working with a corporate company, you get a project manager. Working with Sahuri Brothers, you get the brothers themselves - people personally responsible for every project. Our name is on every job.',
    'plan.family.link': 'Discover our guarantee',
    
    'services.title': 'Our Services',
    'services.vrf': 'VRF Systems',
    'services.hvac': 'HVAC Solutions',
    'services.planning': 'Engineering Planning',
    
    'contact.title': 'Contact Us',
    'contact.name': 'Full Name',
    'contact.nameRequired': 'Full name is required',
    'contact.phone': 'Phone Number',
    'contact.phoneInvalid': 'Please enter a valid phone number',
    'contact.email': 'Email Address',
    'contact.emailInvalid': 'Please enter a valid email address',
    'contact.message': 'Message',
    'contact.messageRequired': 'Message is required',
    'contact.privacy': 'I agree to the privacy policy',
    'contact.privacyRequired': 'You must accept the privacy policy',
    'contact.submit': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending message',
    
    'footer.rights': 'All rights reserved',
    'footer.company': 'Sahuri Brothers - Climate & Biotech Engineers',
    'footer.accessibility': 'Accessibility Declaration',
    'footer.design': 'Design and Development: ',
    
    'clients.title': 'Our Clients',
    'clients.subtitle': 'Engineers and construction companies that are redefining expectations',
    'gallery.title': 'Our Projects',
    'gallery.subtitle': 'Examples of engineering precision hidden in design',
    'video.title': 'Engineering Foundations for Luxurious Living',
    'video.subtitle': 'Biotechnology Interface and Design',
    'video.desc1': 'In the homes of people who appreciate the finer things in life, a climate system should be invisible until you need it. Sahuri Brothers specializes in integrating advanced VRF systems with architectural subtlety - embedding ducts in ceilings, JET grilles for minimalist distribution, and underfloor heating that disappears during autumn months.',
    'video.desc2': 'In a private home in Qadima, the designer\'s requirements to eliminate all mechanics prevented standard solutions. Our solution: VRF system with concealed ducts embedded in floor thickness, microscopic linear grilles, and supervised installation that eliminated all technical evidence.',
  },
  he: {
    'header.services': 'שירותים',
    'header.portfolio': 'תיק עבודות',
    'header.about': 'אודותינו',
    'header.contact': 'צרו קשר',
    'nav.about': 'אודות',
    'nav.projects': 'פרויקטים',
    'nav.services': 'השירותים שלנו',
    'nav.team': 'הצוות',
    'nav.contact': 'צור קשר',
    'nav.projects.private': 'פרויקטים פרטיים',
    'nav.projects.commercial': 'פרויקטים מסחריים',
    'nav.menu': 'תפריט ניווט',
    
    'hero.title': 'יוצרים שלמות אקלימית',
    'hero.subtitle': 'פתרונות תكييف וחימום מתקדמות עם דיוק הנדסי וסגנון פאר',
    'hero.pause': 'עצור גלרייה',
    'hero.play': 'הפעל גלרייה',
    'hero.slide': 'סלייד',
    'hero.scroll': 'גלול למטה',
    
    'plan.precision': 'דיוק הנדסי',
    'plan.precision.desc1': 'אנו לא מסתירים מכיפים, אנו מעצבים מרחב בלעדיהם. התאמת מערכות אקלים גפראות לחלל מורכב היא קומץ של הנדסה ודיוק. הצוות שלנו מימתח את הגבול של מה שאפשר, וסידור פתרונות מתקדמים ל-VRF עם תכנון CAD תלת מימדי מדויק.',
    'plan.precision.desc2': 'תקרה זכוכית עם ללא מרחב קיר? סקוקי נחבאים בעריסות? יחידות שנחבאות בתוך ארונות עם תקרות גבוהות ללא פגיעה? זה מה שאנחנו עושים כל יום.',
    'plan.precision.link': 'למידע על תהליך התכנון',
    
    'plan.family': 'שירות משפחתי - Sahuri Brothers. Guarantee',
    'plan.family.desc': 'בעבודה עם חברה מוסדית, אתה מקבל מנהל פרויקט. בעבודה עם Sahuri Brothers, אתה מקבל את האחים עצמם - אנשים שהם אחראיים אישית על כל פרויקט. השם שלנו נמצא על כל עבודה.',
    'plan.family.link': 'גלה את הערבות שלנו',
    
    'services.title': 'שירותינו',
    'services.vrf': 'מערכות VRF',
    'services.hvac': 'פתרונות HVAC',
    'services.planning': 'תכנון הנדסי',
    
    'contact.title': 'צרו קשר',
    'contact.name': 'שם מלא',
    'contact.nameRequired': 'שם מלא הינו שדה חובה',
    'contact.phone': 'מספר טלפון',
    'contact.phoneInvalid': 'הזן מספר תקין',
    'contact.email': 'כתובת דוא"ל',
    'contact.emailInvalid': 'אנא הזן דוא"ל תקין',
    'contact.message': 'הודעה',
    'contact.messageRequired': 'הודעה היא שדה חובה',
    'contact.privacy': 'אני מסכים לתנאי הפרטיות',
    'contact.privacyRequired': 'עליך להסכים לתנאי הפרטיות',
    'contact.submit': 'שלח הודעה',
    'contact.sending': 'שולח...',
    'contact.success': 'ההודעה נשלחה בהצלחה!',
    'contact.error': 'שגיאה בשליחת ההודעה',
    
    'footer.rights': 'כל הזכויות שמורות',
    'footer.company': 'סהורי בראס - מהנדסי אקלים וביוטכנולוגיה',
    'footer.accessibility': 'הצהרת נגישות',
    'footer.design': 'עיצוב וקדוד: ',
    
    'clients.title': 'הלקוחות שלנו',
    'clients.subtitle': 'מהנדסים וחברות בנייה שהם ממלאים מּחדש את קודודי שלהם',
    'gallery.title': 'הפרויקטים שלנו',
    'gallery.subtitle': 'דוגמאות של דיוק הנדסי השקוע בעיצוב',
    'video.title': 'הנחות הנדסיות עבור חיים יוקרתיים',
    'video.subtitle': 'ממשקת ביוטכנולוגיה ועיצוב',
    'video.desc1': 'בבתיהם של אנשים שמעריכים את הדברים הטובים בחיים, מערכת האקלים צריכה להיות בלתי נראית עד שאתה זקוק לה. Sahuri Brothers מתמחה בהטמעת מערכות VRF מתקדמות עם עדינות אדריכלית - שילוב מכיפים בתקרות, גרילים JET לתפזורת מינימליסטית, וחימום תת-רצפה שמתחזה במהלך חודשי הסתיו.',
    'video.desc2': 'בבית פנימי בקדום, דרישות המעצב להעלמת כל המכניקה מנעה שימוש בפתרונות סטנדרטיים. הפתרון שלנו: מערכת VRF עם תעלות חבוא בעובי הרצפה, גרילים לינארים מיקרוסקופיים, והתקנה מפוקחת שהעלימה כל עדות טכנית.',
  },
  ar: {
    'header.services': 'الخدمات',
    'header.portfolio': 'المحفظة',
    'header.about': 'عنا',
    'header.contact': 'اتصل بنا',
    'nav.about': 'عنا',
    'nav.projects': 'المشاريع',
    'nav.services': 'خدماتنا',
    'nav.team': 'الفريق',
    'nav.contact': 'اتصل بنا',
    'nav.projects.private': 'المشاريع الخاصة',
    'nav.projects.commercial': 'المشاريع التجارية',
    'nav.menu': 'قائمة التنقل',
    
    'hero.title': 'صناعة الكمال المناخي',
    'hero.subtitle': 'حلول تكييف وتدفئة متقدمة بدقة هندسية وأسلوب فاخر',
    'hero.pause': 'إيقاف المعرض',
    'hero.play': 'تشغيل المعرض',
    'hero.slide': 'شريحة',
    'hero.scroll': 'التمرير لأسفل',
    
    'plan.precision': 'الدقة الهندسية',
    'plan.precision.desc1': 'نحن لا نخفي الأنظمة الميكانيكية، نحن نصمم المساحات بدونها. ملاءمة أنظمة المناخ الفاخرة في الأماكن المعقدة تتطلب هندسة دقيقة. فريقنا يدفع الحدود، ويقدم حلول VRF متقدمة مع تخطيط CAD ثلاثي الأبعاد دقيق.',
    'plan.precision.desc2': 'سقف زجاجي بدون مساحة جدران؟ الأنابيب مخفية في الإفريزات؟ الوحدات مخفية في الخزائن بأسقف عالية بدون ضرر؟ هذا ما نفعله كل يوم.',
    'plan.precision.link': 'تعرف على عملية التخطيط الخاصة بنا',
    
    'plan.family': 'الخدمة العائلية - ضمان أخوان ساحوري',
    'plan.family.desc': 'عند العمل مع شركة، تحصل على مدير المشروع. عند العمل مع أخوان ساحوري، تحصل على الأخوين أنفسهم - أشخاص مسؤولون شخصياً عن كل مشروع. اسمنا موجود على كل عمل.',
    'plan.family.link': 'اكتشف ضماننا',
    
    'services.title': 'خدماتنا',
    'services.vrf': 'أنظمة VRF',
    'services.hvac': 'حلول HVAC',
    'services.planning': 'التخطيط الهندسي',
    
    'contact.title': 'اتصل بنا',
    'contact.name': 'الاسم الكامل',
    'contact.nameRequired': 'الاسم الكامل مطلوب',
    'contact.phone': 'رقم الهاتف',
    'contact.phoneInvalid': 'يرجى إدخال رقم هاتف صحيح',
    'contact.email': 'عنوان البريد الإلكتروني',
    'contact.emailInvalid': 'يرجى إدخال عنوان بريد إلكتروني صحيح',
    'contact.message': 'الرسالة',
    'contact.messageRequired': 'الرسالة مطلوبة',
    'contact.privacy': 'أوافق على سياسة الخصوصية',
    'contact.privacyRequired': 'يجب أن توافق على سياسة الخصوصية',
    'contact.submit': 'إرسال الرسالة',
    'contact.sending': 'جاري الإرسال...',
    'contact.success': 'تم إرسال الرسالة بنجاح!',
    'contact.error': 'خطأ في إرسال الرسالة',
    
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.company': 'أخوان ساحوري - مهندسو المناخ والتكنولوجيا الحيوية',
    'footer.accessibility': 'إعلان الوصول',
    'footer.design': 'التصميم والتطوير: ',
    
    'clients.title': 'عملاؤنا',
    'clients.subtitle': 'المهندسون وشركات البناء التي تعيد تعريف التوقعات',
    'gallery.title': 'مشاريعنا',
    'gallery.subtitle': 'أمثلة على الدقة الهندسية المخفية في التصميم',
    'video.title': 'الأسس الهندسية للعيش الفاخر',
    'video.subtitle': 'واجهة التكنولوجيا الحيوية والتصميم',
    'video.desc1': 'في منازل الأشخاص الذين يقدرون أفضل ما في الحياة، يجب أن يكون نظام المناخ غير مرئي حتى تحتاج إليه. يتخصص Sahuri Brothers في دمج أنظمة VRF المتقدمة بدقة معمارية - حشر القنوات في الأسقف، شبكات JET للتوزيع الحد الأدنى، والتدفئة الأرضية التي تختفي خلال أشهر الخريف.',
    'video.desc2': 'في منزل خاص بقادومة، منعت متطلبات المصمم لإزالة جميع الميكانيكا استخدام الحلول القياسية. حلنا: نظام VRF مع قنوات مخفية مدمجة بسمك الأرضية، شبكات خطية مجهرية، وتثبيت تم الإشراف عليه أزال كل دليل تقني.',
  },
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language
    return saved || 'en'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
    document.documentElement.setAttribute('lang', language)
    document.documentElement.dir = language === 'ar' || language === 'he' ? 'rtl' : 'ltr'
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

export default LanguageContext
