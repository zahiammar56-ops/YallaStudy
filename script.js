const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const langSelect = document.getElementById('lang-select');
const langSelectMobile = document.getElementById('lang-select-mobile');

const translations = {
  ar: {
    'meta.title': 'الدراسة في الفلبين للسعوديين | قبول اللغة والبرامج الأكاديمية | YallaStudy',
    'meta.description':
      'YallaStudy يقدم استشارات القبول الدراسي للطلاب السعوديين والإماراتيين: قبول دراسة اللغة في الفلبين، التسجيل في معاهد اللغة للسعوديين، وبرامج اللغة الأكاديمية مع متابعة كاملة حتى القبول. للتواصل: +966 56 110 7137.',
    skip: 'تجاوز إلى المحتوى',
    'logo.sub': 'الدراسة بالخارج',
    'lang.label': 'اللغة',
    'theme.dark': 'وضع ليلي',
    'theme.light': 'وضع نهاري',
    'menu.open': 'فتح القائمة',
    'menu.close': 'إغلاق القائمة',
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.institutes': 'معاهد اللغة',
    'nav.services': 'خدماتنا',
    'nav.study': 'الدراسة في الفلبين',
    'nav.blog': 'المدونة',
    'nav.why': 'لماذا نحن؟',
    'nav.proof': 'الاعتماد',
    'nav.faq': 'الأسئلة',
    'cta.register': 'سجل الآن',
    'hero.kicker': 'YallaStudy للاستشارات التعليمية',
    'hero.title': 'الدراسة في الفلبين للسعوديين | القبول بين يديك',
    'hero.lead':
      'نساعدك في قبول دراسة اللغة في الفلبين والتسجيل في معاهد اللغة للسعوديين، مع خطط واضحة للبرامج الأكاديمية واستشارات قبول دراسي من البداية حتى استلام القبول.',
    'hero.ctaPrimary': 'احجز استشارتك مجانًا',
    'hero.ctaSecondary': 'تعرّف على خدماتنا',
    'hero.point1.title': 'استجابة خلال 24 ساعة',
    'hero.point1.desc': 'فريق متابعة متخصص',
    'hero.point2.title': 'معاهد لغة معتمدة في الفلبين',
    'hero.point2.desc': 'خيارات مناسبة للسعوديين والخليجيين',
    'hero.point3.title': 'خطوات واضحة',
    'hero.point3.desc': 'من التسجيل حتى القبول',
    'about.title': 'استشارات القبول الدراسي للدراسة في الفلبين',
    'about.lead':
      'YallaStudy فريق متخصص في التسجيل في معاهد اللغة والبرامج الأكاديمية، مع تركيز على الدراسة في الفلبين للسعوديين. نساعدك في اختيار المعهد المناسب، تجهيز الملف، ومتابعة القبول خطوة بخطوة حتى السفر.',
    'about.bullet1': 'استشارة مجانية للطلاب السعوديين والإماراتيين مع مستشارين عرب.',
    'about.bullet2': 'خيارات معاهد لغة معتمدة ورسوم واضحة بدون مفاجآت.',
    'about.bullet3': 'متابعة طلب قبول دراسة اللغة في الفلبين حتى إصدار القبول النهائي.',
    'about.bullet4': 'دعم عبر واتساب وإرشاد للسكن والوصول.',
    'stats.countries': 'دولة',
    'stats.years': 'سنوات خبرة',
    'stats.students': 'طالب',
    'stats.programs': 'برنامج',
    'seo.added.title': 'الدراسة في الفلبين: حلول قبول سريعة للطلاب السعوديين والخليجيين',
    'seo.added.lead':
      'إذا كنت تبحث عن قبول دراسة اللغة في الفلبين أو التسجيل في برامج اللغة الأكاديمية، نوفر لك خطة واضحة تبدأ بالاستشارة وتنتهي بخطاب القبول.',
    'seo.added.read': 'اقرأ أيضًا:',
    'seo.added.link.study': 'الدراسة في الفلبين للسعوديين',
    'seo.added.link.language': 'قبول دراسة اللغة في الفلبين',
    'seo.added.link.registration': 'التسجيل في معاهد اللغة للسعوديين',
    'seo.added.link.academic': 'برامج اللغة الأكاديمية',
    'seo.added.link.consulting': 'استشارات القبول الدراسي',
    'institutes.title': 'معاهد اللغة في الفلبين وبرامج اللغة الأكاديمية',
    'institutes.lead':
      'اختر أفضل معهد لغة في الفلبين حسب هدفك، ميزانيتك، ومستواك الحالي في اللغة الإنجليزية.',
    'institutes.pill': 'بداية موفقة',
    'institutes.card1.title': 'برنامج لغة إنجليزية مرن',
    'institutes.card1.desc': 'بيئة دراسية حديثة مع حصص يومية ومرونة في مواعيد البدء.',
    'institutes.card2.title': 'برنامج لغة مكثف',
    'institutes.card2.desc': 'حصص صباحية ومسائية مع متابعة أكاديمية تضمن تقدمك السريع.',
    'institutes.card3.title': 'مسار لغة أكاديمي',
    'institutes.card3.desc': 'تطوير اللغة مع مهارات أكاديمية تؤهلك للجامعة أو العمل.',
    'services.title': 'خدمات التسجيل والقبول الدراسي للسعوديين',
    'services.lead':
      'خدمات متكاملة من اختيار المعهد حتى القبول النهائي للطلاب الراغبين في الدراسة في الفلبين.',
    'services.card1.title': 'استشارة قبول مجانية',
    'services.card1.desc': 'تحليل هدفك الدراسي ووضع خطة واضحة للتسجيل في معهد اللغة المناسب.',
    'services.card1.link': 'اطلب الاستشارة',
    'services.card2.title': 'اختيار المعهد',
    'services.card2.desc': 'مقارنة تفصيلية بين المعاهد وبرامج اللغة لضمان أفضل قيمة تعليمية.',
    'services.card2.link': 'اعرف الخيارات',
    'services.card3.title': 'تجهيز الملف',
    'services.card3.desc': 'مراجعة المستندات وترتيب ملفك وفق متطلبات المعهد المعتمد.',
    'services.card3.link': 'جهّز ملفك',
    'services.card4.title': 'متابعة القبول',
    'services.card4.desc': 'متابعة يومية مع المعهد لتسريع الإجراءات وتقليل التأخير.',
    'services.card4.link': 'ابدأ الآن',
    'services.card5.title': 'السفر والإقامة',
    'services.card5.desc': 'دعم شامل لاختيار السكن، التأمين، والاستعداد قبل السفر.',
    'services.card5.link': 'خطط لسفرك',
    'services.card6.title': 'دعم ما بعد الوصول',
    'services.card6.desc': 'متابعة بعد الوصول لضمان بداية مستقرة في الدراسة والمعيشة.',
    'services.card6.link': 'تواصل معنا',
    'why.title': 'لماذا YallaStudy لرحلة الدراسة في الفلبين؟',
    'why.lead': 'نسهّل قرار الدراسة في الفلبين بخطة قبول واضحة ودعم فعلي في كل مرحلة.',
    'why.card1.title': 'خبرة عملية',
    'why.card1.desc': 'شراكات قوية مع معاهد لغة معتمدة وبرامج أكاديمية موثوقة.',
    'why.card2.title': 'خيارات متعددة',
    'why.card2.desc': 'خيارات مدن ومعاهد تناسب أهداف الطالب السعودي وميزانيته.',
    'why.card3.title': 'شفافية كاملة',
    'why.card3.desc': 'تفاصيل الرسوم والتسجيل واضحة بدون تكاليف مخفية.',
    'why.card4.title': 'متابعة مستمرة',
    'why.card4.desc': 'متابعة يومية عبر واتساب حتى إصدار خطاب القبول.',
    'why.card5.title': 'حلول مرنة',
    'why.card5.desc': 'برامج لغة عامة ومكثفة وأكاديمية تناسب مختلف الأهداف.',
    'why.card6.title': 'نتائج موثوقة',
    'why.card6.desc': 'نتائج مثبتة في قبول الطلاب السعوديين في معاهد الفلبين.',
    'proof.title': 'اعتماد وتوثيق رسمي لخدمات القبول الدراسي',
    'proof.lead':
      'بياناتنا موثقة ويمكن التحقق منها رسميًا لضمان الثقة والشفافية للطلاب السعوديين وجميع الطلاب الدوليين.',
    'proof.commercial.alt': 'السجل التجاري لشركة YallaStudy لخدمات القبول الدراسي',
    'proof.address.alt': 'العنوان الوطني الرسمي لشركة استشارات الدراسة في الفلبين',
    'proof.iban.alt': 'خطاب الآيبان البنكي المعتمد لخدمات التسجيل والقبول الدراسي',
    'proof.zatca.alt': 'شهادة تسجيل الزكاة والضريبة لشركة YallaStudy',
    'proof.info.title': 'ثقة مبنية على وثائق قابلة للتحقق',
    'proof.info.lead':
      'نلتزم بالشفافية الكاملة عبر توثيق بياناتنا الرسمية وإتاحتها للتحقق عند الطلب، حتى تكون قراراتك مبنية على معلومات واضحة أينما كنت.',
    'proof.info.bullet1': 'عنوان وطني مسجل وموثّق.',
    'proof.info.bullet2': 'بيانات قابلة للتحقق عبر الجهات الرسمية.',
    'proof.info.bullet3': 'التزام واضح بالشفافية وحماية بيانات العملاء.',
    'proof.info.cta': 'تواصل للتأكد',
    'contact.title': 'ابدأ التسجيل في معاهد اللغة الآن',
    'contact.lead': 'اترك بياناتك وسيتواصل معك مستشار قبول دراسي خلال 24 ساعة.',
    'contact.name': 'الاسم الكامل',
    'contact.phone': 'رقم الجوال',
    'contact.email': 'البريد الإلكتروني',
    'contact.service': 'الاستشارة أو الخدمة المطلوبة',
    'contact.submit': 'إرسال',
    'faq.title': 'الأسئلة الشائعة حول الدراسة في الفلبين',
    'faq.q1': 'كيف أبدأ التسجيل في معاهد اللغة في الفلبين؟',
    'faq.a1':
      'تبدأ بتعبئة نموذج الاستشارة المجانية، ثم نحدد هدفك ونرشح لك المعهد الأنسب.',
    'faq.q2': 'كم تستغرق إجراءات قبول دراسة اللغة في الفلبين؟',
    'faq.a2':
      'غالبًا من 3 إلى 7 أيام عمل بعد اكتمال المستندات، وقد تختلف المدة حسب المعهد.',
    'faq.q3': 'هل الاستشارة وخدمة القبول الدراسي مجانية؟',
    'faq.a3': 'نعم، الاستشارة الأولية ومقارنة خيارات المعاهد مجانية بالكامل.',
    'faq.q4': 'هل توفرون برامج لغة أكاديمية بعد المستوى العام؟',
    'faq.a4': 'نعم، نوفر برامج لغة أكاديمية ومسارات تمهيد جامعي بالتعاون مع معاهد معتمدة.',
    'faq.q5': 'هل يمكنكم مساعدتي في السكن والاستقبال في الفلبين؟',
    'faq.a5': 'نعم، نقدم إرشادًا للسكن والتأمين والاستقبال وخطة الوصول قبل السفر.',
    'faq.q6': 'هل خدماتكم مخصصة للسعوديين فقط؟',
    'faq.a6':
      'تركيزنا الأساسي على الطلاب السعوديين، ونخدم كذلك طلاب الإمارات واليمن ودول الخليج.',
    'partners.title': 'معاهد معتمدة تدعم الدراسة في الفلبين',
    'partners.lead':
      'شركاء أكاديميون يقدمون برامج لغة قوية وخيارات قبول مناسبة للطلاب الخليجيين.',
    'partners.card1.desc': 'مسارات مكثفة للتحضير لاختبارات اللغة.',
    'partners.card2.desc': 'برامج تمهيدية للجامعة ودعم أكاديمي كامل.',
    'partners.card3.desc': 'معاهد متميزة في أكثر من 10 دول حول العالم.',
    'stories.title': 'تجارب طلاب الدراسة في الفلبين',
    'stories.lead':
      'قصص حقيقية لطلاب حصلوا على قبول معاهد اللغة والبرامج الأكاديمية من خلال فريقنا.',
    'stories.card1': 'كيف تم اختيار المعهد المناسب والخطة الدراسية الأنسب خلال وقت قياسي.',
    'stories.card2': 'دعم مستمر خطوة بخطوة حتى استلام خطاب القبول والاستعداد للسفر.',
    'stories.card3': 'تجربة تسجيل سلسة مع توجيه واضح يناسب ميزانية الطالب وأهدافه.',
    'stories.card4': 'متابعة احترافية لضمان سرعة الإجراءات وتجنب الأخطاء الشائعة.',
    'stories.card5': 'خدمة واضحة وتواصل سريع عبر القنوات المناسبة للطالب.',
    'stories.follow': 'تابع قصص طلابنا',
    'feedback.title': 'آراء الطلاب عن الدراسة في الفلبين',
    'feedback.lead':
      'لقطات حقيقية من طلابنا بعد التسجيل والقبول في معاهد اللغة والبرامج الأكاديمية.',
    'footer.tagline':
      'استشارات قبول دراسي موثوقة للطلاب السعوديين الراغبين في الدراسة في الفلبين ومعاهد اللغة المعتمدة.',
    'footer.links': 'روابط سريعة',
    'footer.institutes': 'المعاهد',
    'footer.faq': 'الأسئلة',
    'footer.study': 'الدراسة في الفلبين',
    'footer.language': 'قبول اللغة',
    'footer.blog': 'المدونة',
    'footer.email': 'البريد الإلكتروني',
    'footer.phone': '+966 56 110 7137',
    'footer.contact': 'تواصل معنا',
    'footer.hours': 'الأحد - الخميس، 9:00 - 18:00',
    'footer.follow': 'تابعنا',
    'footer.copyright': '© 2026 YallaStudy. جميع الحقوق محفوظة.',
    'whatsapp.label': 'واتساب',
    'whatsapp.text': 'واتساب',
    'lightbox.title': 'عرض الصورة',
    'lightbox.close': 'إغلاق'
  },
  en: {
    'meta.title':
      'Study in the Philippines for Saudi Students | Language Admission & Academic Programs | YallaStudy',
    'meta.description':
      'YallaStudy provides admission consulting for Saudi and UAE students: language study admission in the Philippines, institute registration, and academic pathways with full follow-up. Contact: +966 56 110 7137.',
    skip: 'Skip to content',
    'logo.sub': 'Study Abroad',
    'lang.label': 'Language',
    'theme.dark': 'Dark mode',
    'theme.light': 'Light mode',
    'menu.open': 'Open menu',
    'menu.close': 'Close menu',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.institutes': 'Language Institutes',
    'nav.services': 'Services',
    'nav.study': 'Study in Philippines',
    'nav.blog': 'Blog',
    'nav.why': 'Why us?',
    'nav.proof': 'Accreditation',
    'nav.faq': 'FAQ',
    'cta.register': 'Register Now',
    'hero.kicker': 'YallaStudy Educational Consulting',
    'hero.title': 'Admission in Your Hands',
    'hero.lead':
      'We support Saudi students who want to study in the Philippines through trusted language institutes and academic pathways, while still offering broader international options.',
    'hero.ctaPrimary': 'Book a Free Consultation',
    'hero.ctaSecondary': 'Explore Our Services',
    'hero.point1.title': 'Response within 24 hours',
    'hero.point1.desc': 'Dedicated follow-up team',
    'hero.point2.title': 'Trusted institute network',
    'hero.point2.desc': 'Across Europe, America, and Canada',
    'hero.point3.title': 'Clear steps',
    'hero.point3.desc': 'From registration to admission',
    'about.title': 'Who we are',
    'about.lead':
      'YallaStudy is a specialized consulting team for language institute enrollment and academic admission worldwide, with a focus on Saudi students planning to study in the Philippines. We help you choose the right institute, prepare documents, and follow up step by step.',
    'about.bullet1': 'Free consultation tailored for Saudi students with Arabic-speaking advisors.',
    'about.bullet2': 'Clear international options and transparent fees with no surprises.',
    'about.bullet3': 'Follow-up until admission issuance and post-arrival guidance.',
    'about.bullet4': 'WhatsApp support and daily follow-up across time zones.',
    'stats.countries': 'Countries',
    'stats.years': 'Years of experience',
    'stats.students': 'Students',
    'stats.programs': 'Programs',
    'seo.added.title': 'Study in the Philippines: Fast admission solutions for Saudi and GCC students',
    'seo.added.lead':
      'If you are searching for language admission in the Philippines or academic language pathways, we provide a clear plan from consultation to final acceptance.',
    'seo.added.read': 'Also read:',
    'seo.added.link.study': 'Study in the Philippines for Saudi students',
    'seo.added.link.language': 'Language study admission in the Philippines',
    'seo.added.link.registration': 'Language institute registration for Saudis',
    'seo.added.link.academic': 'Academic language programs',
    'seo.added.link.consulting': 'Admission consulting',
    'institutes.title': 'Top Language Institutes',
    'institutes.lead':
      'We match you with the best institute based on your goal, budget, and language level.',
    'institutes.pill': 'Great start',
    'institutes.card1.title': 'Flexible Language Program',
    'institutes.card1.desc': 'Modern learning environment with flexible schedules and ongoing support.',
    'institutes.card2.title': 'Intensive Study Plan',
    'institutes.card2.desc': 'Flexible study options across morning/evening sessions with academic guidance.',
    'institutes.card3.title': 'Practical Academic Track',
    'institutes.card3.desc': 'Language learning paired with skills activities and continuous guidance.',
    'services.title': 'Our Services',
    'services.lead': 'End-to-end international services focused on Saudi students heading to the Philippines, with additional options in other destinations.',
    'services.card1.title': 'Free Consultation',
    'services.card1.desc': 'Session to analyze your goals and study plan with a specialist.',
    'services.card1.link': 'Request consultation',
    'services.card2.title': 'Institute Selection',
    'services.card2.desc':
      'Compare institutes and language programs to ensure the best option.',
    'services.card2.link': 'See options',
    'services.card3.title': 'File Preparation',
    'services.card3.desc': 'Review documents and prepare admission applications accurately.',
    'services.card3.link': 'Prepare your file',
    'services.card4.title': 'Admission Follow-up',
    'services.card4.desc': 'Direct communication with the institute to speed up admission.',
    'services.card4.link': 'Start now',
    'services.card5.title': 'Travel & Accommodation',
    'services.card5.desc': 'Tips for housing, transport, and pre-travel preparation.',
    'services.card5.link': 'Plan your trip',
    'services.card6.title': 'Post-arrival Support',
    'services.card6.desc': 'Follow-up and advice to ensure a successful start.',
    'services.card6.link': 'Contact us',
    'why.title': 'Why us?',
    'why.lead': 'We simplify decisions for Saudi students with a clear plan and real support at every step.',
    'why.card1.title': 'Practical expertise',
    'why.card1.desc': 'Strong partnerships with globally accredited institutes.',
    'why.card2.title': 'Multiple options',
    'why.card2.desc': 'We choose the best cities and programs for your goals.',
    'why.card3.title': 'Full transparency',
    'why.card3.desc': 'Fee details are clear with no hidden costs.',
    'why.card4.title': 'Continuous follow-up',
    'why.card4.desc': 'Fast WhatsApp support and dedicated customer service.',
    'why.card5.title': 'Flexible solutions',
    'why.card5.desc': 'Programs for students, professionals, and families.',
    'why.card6.title': 'Proven results',
    'why.card6.desc': 'Thousands of students gained admission with our support.',
    'proof.title': 'Accreditation & Verification',
    'proof.lead':
      'Our details are officially verified and can be checked to ensure trust and transparency for Saudi and international students.',
    'proof.commercial.alt': 'Commercial Registration Certificate',
    'proof.address.alt': 'National Address Proof',
    'proof.iban.alt': 'IBAN bank letter',
    'proof.zatca.alt': 'ZATCA registration certificate',
    'proof.info.title': 'Trust built on verifiable documents',
    'proof.info.lead':
      'We are fully transparent by documenting our official information and making it available for verification on request, wherever you are.',
    'proof.info.bullet1': 'Registered and verified national address.',
    'proof.info.bullet2': 'Data verifiable through official authorities.',
    'proof.info.bullet3': 'Clear commitment to transparency and customer data protection.',
    'proof.info.cta': 'Contact to verify',
    'contact.title': 'Have questions?',
    'contact.lead': 'Leave your details and we’ll contact you within 24 hours.',
    'contact.name': 'Full name',
    'contact.phone': 'Mobile number',
    'contact.email': 'Email address',
    'contact.service': 'Consultation or required service',
    'contact.submit': 'Send',
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'What is the first step to register?',
    'faq.a1': 'It starts with a free consultation to define your goal and the right institute.',
    'faq.q2': 'How long does admission take?',
    'faq.a2': 'Typically 3–7 business days after receiving complete documents.',
    'faq.q3': 'Are there consultation fees?',
    'faq.a3': 'No, the consultation and option review are completely free.',
    'faq.q4': 'Do you offer academic language pathways after general English?',
    'faq.a4':
      'Yes. We provide academic English, test prep, and university pathway options through trusted institutes.',
    'faq.q5': 'Can you help with housing and airport reception in the Philippines?',
    'faq.a5':
      'Yes. We support accommodation planning, insurance guidance, and arrival setup before travel.',
    'faq.q6': 'Are your services only for Saudi students?',
    'faq.a6':
      'Our main focus is Saudi students, and we also serve UAE, Yemen, and GCC students based on availability.',
    'partners.title': 'Institutes that understand Saudi student goals',
    'partners.lead': 'Featured global institutes offering high-quality education and real growth opportunities.',
    'partners.card1.desc': 'Intensive tracks to prepare for language exams.',
    'partners.card2.desc': 'University pathway programs with full academic support.',
    'partners.card3.desc': 'Leading institutes in more than 10 countries worldwide.',
    'stories.title': 'Student Experiences',
    'stories.lead':
      'Hear real stories from our students worldwide and how we helped them choose the right institute and complete admissions with confidence.',
    'stories.card1': 'Choosing the right institute and study plan in record time.',
    'stories.card2': 'Step-by-step support until the admission letter and travel prep.',
    'stories.card3': 'Smooth registration with guidance tailored to student goals and budget.',
    'stories.card4': 'Professional follow-up to speed up procedures and avoid common mistakes.',
    'stories.card5': 'Clear service and fast communication through the right channels.',
    'stories.follow': 'Follow our student stories',
    'feedback.title': 'Student Feedback',
    'feedback.lead': 'Real snapshots from our students worldwide and their experiences with us.',
    'footer.tagline':
      'Trusted international education consulting for Saudi students planning to study in the Philippines and beyond.',
    'footer.links': 'Quick links',
    'footer.institutes': 'Institutes',
    'footer.faq': 'FAQ',
    'footer.study': 'Study in Philippines',
    'footer.language': 'Language Admission',
    'footer.blog': 'Blog',
    'footer.email': 'Email',
    'footer.phone': '+966 56 110 7137',
    'footer.contact': 'Contact us',
    'footer.hours': 'Sun–Thu, 9:00–18:00',
    'footer.follow': 'Follow us',
    'footer.copyright': '© 2026 YallaStudy. All rights reserved.',
    'whatsapp.label': 'WhatsApp',
    'whatsapp.text': 'WhatsApp',
    'lightbox.title': 'Image preview',
    'lightbox.close': 'Close'
  },
  fr: {
    'meta.title': 'YallaStudy | L’admission entre vos mains',
    'meta.description':
      'Consultations gratuites pour s’inscrire dans les meilleurs instituts de langues dans le monde, avec un suivi complet jusqu’à l’admission.',
    skip: 'Aller au contenu',
    'logo.sub': 'Études à l’étranger',
    'lang.label': 'Langue',
    'theme.dark': 'Mode sombre',
    'theme.light': 'Mode clair',
    'menu.open': 'Ouvrir le menu',
    'menu.close': 'Fermer le menu',
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.institutes': 'Instituts de langues',
    'nav.services': 'Services',
    'nav.study': 'Étudier aux Philippines',
    'nav.blog': 'Blog',
    'nav.why': 'Pourquoi nous ?',
    'nav.proof': 'Accréditation',
    'nav.faq': 'FAQ',
    'cta.register': 'S’inscrire',
    'hero.kicker': 'YallaStudy Conseil Éducatif',
    'hero.title': 'L’admission entre vos mains',
    'hero.lead':
      'Nous accompagnons les étudiants saoudiens souhaitant étudier aux Philippines via des instituts fiables, avec des options internationales supplémentaires selon leur objectif et leur budget.',
    'hero.ctaPrimary': 'Réserver une consultation gratuite',
    'hero.ctaSecondary': 'Découvrir nos services',
    'hero.point1.title': 'Réponse en 24 h',
    'hero.point1.desc': 'Équipe de suivi dédiée',
    'hero.point2.title': 'Réseau d’instituts fiables',
    'hero.point2.desc': 'En Europe, en Amérique et au Canada',
    'hero.point3.title': 'Étapes claires',
    'hero.point3.desc': 'De l’inscription à l’admission',
    'about.title': 'Qui sommes-nous',
    'about.lead':
      'YallaStudy est une équipe spécialisée dans l’inscription aux instituts de langues et l’admission académique à l’international, avec un focus sur les étudiants saoudiens qui visent les Philippines.',
    'about.bullet1': 'Consultation gratuite dédiée aux étudiants saoudiens avec conseillers arabophones.',
    'about.bullet2': 'Options internationales claires et frais transparents, sans surprises.',
    'about.bullet3': 'Suivi jusqu’à l’émission de l’admission et accompagnement après l’arrivée.',
    'about.bullet4': 'Support WhatsApp et suivi quotidien selon le fuseau horaire.',
    'stats.countries': 'Pays',
    'stats.years': 'Années d’expérience',
    'stats.students': 'Étudiants',
    'stats.programs': 'Programmes',
    'seo.added.title': 'Étudier aux Philippines : solutions d’admission rapides pour les étudiants saoudiens et du Golfe',
    'seo.added.lead':
      'Si vous recherchez une admission en langue aux Philippines ou un programme académique, nous proposons un plan clair de la consultation jusqu’à l’admission finale.',
    'seo.added.read': 'À lire aussi :',
    'seo.added.link.study': 'Étudier aux Philippines pour les Saoudiens',
    'seo.added.link.language': 'Admission en cours de langue aux Philippines',
    'seo.added.link.registration': 'Inscription aux instituts de langues pour Saoudiens',
    'seo.added.link.academic': 'Programmes de langue académiques',
    'seo.added.link.consulting': 'Conseil en admission',
    'institutes.title': 'Meilleurs instituts de langues',
    'institutes.lead':
      'Nous vous orientons vers l’institut le plus adapté selon votre objectif, votre budget et votre niveau.',
    'institutes.pill': 'Bon départ',
    'institutes.card1.title': 'Programme linguistique flexible',
    'institutes.card1.desc':
      'Environnement d’apprentissage moderne avec horaires flexibles et soutien continu.',
    'institutes.card2.title': 'Plan d’études intensif',
    'institutes.card2.desc': 'Options d’étude flexibles matin/soir avec accompagnement académique.',
    'institutes.card3.title': 'Parcours académique pratique',
    'institutes.card3.desc':
      'Apprentissage de la langue avec activités de compétences et suivi continu.',
    'services.title': 'Nos services',
    'services.lead': 'Services internationaux complets axés sur les étudiants saoudiens vers les Philippines, avec des options additionnelles dans d’autres destinations.',
    'services.card1.title': 'Consultation gratuite',
    'services.card1.desc':
      'Session d’analyse de vos objectifs et de votre plan d’études avec un spécialiste.',
    'services.card1.link': 'Demander la consultation',
    'services.card2.title': 'Choix de l’institut',
    'services.card2.desc':
      'Comparer les instituts et programmes linguistiques pour garantir la meilleure option.',
    'services.card2.link': 'Voir les options',
    'services.card3.title': 'Préparation du dossier',
    'services.card3.desc': 'Réviser les documents et préparer les demandes d’admission avec précision.',
    'services.card3.link': 'Préparer votre dossier',
    'services.card4.title': 'Suivi de l’admission',
    'services.card4.desc': 'Communication directe avec l’institut pour accélérer l’admission.',
    'services.card4.link': 'Commencer',
    'services.card5.title': 'Voyage et hébergement',
    'services.card5.desc': 'Conseils pour le logement, le transport et la préparation au départ.',
    'services.card5.link': 'Planifier votre voyage',
    'services.card6.title': 'Accompagnement après l’arrivée',
    'services.card6.desc': 'Suivi et conseils pour garantir un bon départ.',
    'services.card6.link': 'Nous contacter',
    'why.title': 'Pourquoi nous ?',
    'why.lead': 'Nous simplifions la décision des étudiants saoudiens avec un plan clair et un accompagnement réel à chaque étape.',
    'why.card1.title': 'Expertise pratique',
    'why.card1.desc': 'Partenariats solides avec des instituts accrédités mondialement.',
    'why.card2.title': 'Options multiples',
    'why.card2.desc': 'Nous choisissons les meilleures villes et programmes pour vos objectifs.',
    'why.card3.title': 'Transparence totale',
    'why.card3.desc': 'Les frais sont clairs, sans coûts cachés.',
    'why.card4.title': 'Suivi continu',
    'why.card4.desc': 'Support WhatsApp rapide et service client dédié.',
    'why.card5.title': 'Solutions flexibles',
    'why.card5.desc': 'Programmes pour étudiants, professionnels et familles.',
    'why.card6.title': 'Résultats prouvés',
    'why.card6.desc': 'Des milliers d’étudiants ont obtenu leur admission grâce à nous.',
    'proof.title': 'Accréditation et vérification',
    'proof.lead':
      'Nos informations sont officiellement vérifiées afin de garantir confiance et transparence aux étudiants saoudiens et internationaux.',
    'proof.commercial.alt': 'Certificat d’immatriculation commerciale',
    'proof.address.alt': 'Preuve d’adresse nationale',
    'proof.iban.alt': 'Lettre bancaire IBAN',
    'proof.zatca.alt': 'Certificat d’enregistrement ZATCA',
    'proof.info.title': 'Une confiance fondée sur des documents vérifiables',
    'proof.info.lead':
      'Nous assurons une transparence totale en documentant nos informations officielles et en les rendant vérifiables sur demande, où que vous soyez.',
    'proof.info.bullet1': 'Adresse nationale enregistrée et vérifiée.',
    'proof.info.bullet2': 'Données vérifiables auprès des autorités officielles.',
    'proof.info.bullet3':
      'Engagement clair pour la transparence et la protection des données clients.',
    'proof.info.cta': 'Contacter pour vérifier',
    'contact.title': 'Des questions ?',
    'contact.lead': 'Laissez vos coordonnées et nous vous contacterons sous 24 h.',
    'contact.name': 'Nom complet',
    'contact.phone': 'Numéro de mobile',
    'contact.email': 'Adresse e-mail',
    'contact.service': 'Consultation ou service demandé',
    'contact.submit': 'Envoyer',
    'faq.title': 'Questions fréquentes',
    'faq.q1': 'Quelle est la première étape pour s’inscrire ?',
    'faq.a1': 'Elle commence par une consultation gratuite pour définir votre objectif.',
    'faq.q2': 'Combien de temps dure l’admission ?',
    'faq.a2': 'En général 3 à 7 jours ouvrables après réception des documents complets.',
    'faq.q3': 'Y a‑t‑il des frais de consultation ?',
    'faq.a3': 'Non, la consultation et l’étude des options sont gratuites.',
    'faq.q4': 'Aidez‑vous pour le logement et l’assurance ?',
    'faq.a4': 'Oui, nous recommandons des options fiables pour le logement et l’assurance santé.',
    'partners.title': 'Des instituts qui comprennent les objectifs des étudiants saoudiens',
    'partners.lead': 'Des instituts internationaux sélectionnés offrant une éducation de qualité.',
    'partners.card1.desc': 'Parcours intensifs pour préparer les tests de langue.',
    'partners.card2.desc': 'Programmes passerelles vers l’université avec soutien académique complet.',
    'partners.card3.desc': 'Instituts de référence dans plus de 10 pays.',
    'stories.title': 'Expériences des étudiants',
    'stories.lead':
      'Découvrez des témoignages réels de nos étudiants et comment nous les avons accompagnés vers l’admission.',
    'stories.card1': 'Choix de l’institut et du plan d’études dans un délai record.',
    'stories.card2': 'Accompagnement pas à pas jusqu’à la lettre d’admission.',
    'stories.card3': 'Inscription fluide avec un accompagnement adapté au budget.',
    'stories.card4': 'Suivi professionnel pour accélérer les démarches.',
    'stories.card5': 'Service clair et communication rapide via les bons canaux.',
    'stories.follow': 'Suivez les témoignages',
    'feedback.title': 'Avis des étudiants',
    'feedback.lead': 'Des témoignages authentiques de nos étudiants à travers le monde.',
    'footer.tagline':
      'Conseil éducatif international fiable pour les étudiants saoudiens souhaitant étudier aux Philippines et dans d’autres destinations.',
    'footer.links': 'Liens rapides',
    'footer.institutes': 'Instituts',
    'footer.faq': 'FAQ',
    'footer.study': 'Étudier aux Philippines',
    'footer.language': 'Admission linguistique',
    'footer.blog': 'Blog',
    'footer.email': 'E-mail',
    'footer.phone': '+966 56 110 7137',
    'footer.contact': 'Contact',
    'footer.hours': 'Dim–Jeu, 9:00–18:00',
    'footer.follow': 'Suivez-nous',
    'footer.copyright': '© 2026 YallaStudy. Tous droits réservés.',
    'whatsapp.label': 'WhatsApp',
    'whatsapp.text': 'WhatsApp',
    'lightbox.title': 'Aperçu de l’image',
    'lightbox.close': 'Fermer'
  },
  es: {
    'meta.title': 'YallaStudy | La admisión en tus manos',
    'meta.description':
      'Consultas educativas gratuitas para inscribirte en los mejores institutos de idiomas del mundo con seguimiento completo hasta la admisión.',
    skip: 'Saltar al contenido',
    'logo.sub': 'Estudios en el extranjero',
    'lang.label': 'Idioma',
    'theme.dark': 'Modo oscuro',
    'theme.light': 'Modo claro',
    'menu.open': 'Abrir menú',
    'menu.close': 'Cerrar menú',
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.institutes': 'Institutos',
    'nav.services': 'Servicios',
    'nav.study': 'Estudiar en Filipinas',
    'nav.blog': 'Blog',
    'nav.why': '¿Por qué?',
    'nav.proof': 'Acreditación',
    'nav.faq': 'FAQ',
    'cta.register': 'Regístrate',
    'hero.kicker': 'YallaStudy Consultoría Educativa',
    'hero.title': 'La admisión en tus manos',
    'hero.lead':
      'Apoyamos a estudiantes saudíes que desean estudiar en Filipinas mediante institutos de idiomas y rutas académicas confiables, con opciones internacionales adicionales.',
    'hero.ctaPrimary': 'Reserva una consulta gratis',
    'hero.ctaSecondary': 'Conoce nuestros servicios',
    'hero.point1.title': 'Respuesta en 24 horas',
    'hero.point1.desc': 'Equipo de seguimiento dedicado',
    'hero.point2.title': 'Red de institutos confiables',
    'hero.point2.desc': 'En Europa, América y Canadá',
    'hero.point3.title': 'Pasos claros',
    'hero.point3.desc': 'Desde la inscripción hasta la admisión',
    'about.title': 'Quiénes somos',
    'about.lead':
      'YallaStudy es un equipo de consultoría especializado en inscripción en institutos de idiomas y admisión académica internacional, con enfoque en estudiantes saudíes que planean estudiar en Filipinas.',
    'about.bullet1': 'Consulta gratuita para estudiantes saudíes con asesores arabófonos.',
    'about.bullet2': 'Opciones internacionales claras y tarifas transparentes sin sorpresas.',
    'about.bullet3': 'Seguimiento hasta la emisión de la admisión y orientación tras la llegada.',
    'about.bullet4': 'Soporte por WhatsApp y seguimiento diario según zona horaria.',
    'stats.countries': 'Países',
    'stats.years': 'Años de experiencia',
    'stats.students': 'Estudiantes',
    'stats.programs': 'Programas',
    'seo.added.title': 'Estudiar en Filipinas: soluciones rápidas de admisión para estudiantes saudíes y del Golfo',
    'seo.added.lead':
      'Si buscas admisión para estudiar idioma en Filipinas o programas académicos, te ofrecemos un plan claro desde la consulta hasta la admisión final.',
    'seo.added.read': 'Lee también:',
    'seo.added.link.study': 'Estudiar en Filipinas para saudíes',
    'seo.added.link.language': 'Admisión para estudiar idioma en Filipinas',
    'seo.added.link.registration': 'Registro en institutos de idioma para saudíes',
    'seo.added.link.academic': 'Programas académicos de idioma',
    'seo.added.link.consulting': 'Consultoría de admisión',
    'institutes.title': 'Mejores institutos de idiomas',
    'institutes.lead':
      'Te conectamos con el mejor instituto según tu objetivo, presupuesto y nivel.',
    'institutes.pill': 'Buen comienzo',
    'institutes.card1.title': 'Programa de idioma flexible',
    'institutes.card1.desc': 'Entorno de aprendizaje moderno con horarios flexibles y apoyo continuo.',
    'institutes.card2.title': 'Plan de estudio intensivo',
    'institutes.card2.desc': 'Opciones de estudio flexibles mañana/tarde con orientación académica.',
    'institutes.card3.title': 'Trayecto académico práctico',
    'institutes.card3.desc':
      'Aprendizaje del idioma con actividades de habilidades y guía continua.',
    'services.title': 'Nuestros servicios',
    'services.lead': 'Servicios internacionales integrales enfocados en estudiantes saudíes que se dirigen a Filipinas, con alternativas en otros destinos.',
    'services.card1.title': 'Consulta gratuita',
    'services.card1.desc': 'Sesión para analizar tus objetivos y plan de estudios.',
    'services.card1.link': 'Solicitar consulta',
    'services.card2.title': 'Elección del instituto',
    'services.card2.desc':
      'Compara institutos y programas de idiomas para asegurar la mejor opción.',
    'services.card2.link': 'Ver opciones',
    'services.card3.title': 'Preparación del expediente',
    'services.card3.desc': 'Revisión de documentos y preparación de solicitudes con precisión.',
    'services.card3.link': 'Preparar expediente',
    'services.card4.title': 'Seguimiento de admisión',
    'services.card4.desc': 'Comunicación directa con el instituto para acelerar la admisión.',
    'services.card4.link': 'Empezar ahora',
    'services.card5.title': 'Viaje y alojamiento',
    'services.card5.desc': 'Consejos para alojamiento, transporte y preparación previa.',
    'services.card5.link': 'Planificar viaje',
    'services.card6.title': 'Soporte tras la llegada',
    'services.card6.desc': 'Seguimiento y asesoría para un buen comienzo.',
    'services.card6.link': 'Contáctanos',
    'why.title': '¿Por qué nosotros?',
    'why.lead': 'Simplificamos la decisión de los estudiantes saudíes con un plan claro y apoyo real en cada paso.',
    'why.card1.title': 'Experiencia práctica',
    'why.card1.desc': 'Alianzas sólidas con institutos acreditados a nivel mundial.',
    'why.card2.title': 'Opciones múltiples',
    'why.card2.desc': 'Elegimos las mejores ciudades y programas para tu objetivo.',
    'why.card3.title': 'Transparencia total',
    'why.card3.desc': 'Detalles de tarifas claros y sin costos ocultos.',
    'why.card4.title': 'Seguimiento continuo',
    'why.card4.desc': 'Soporte rápido por WhatsApp y atención al cliente dedicada.',
    'why.card5.title': 'Soluciones flexibles',
    'why.card5.desc': 'Programas para estudiantes, profesionales y familias.',
    'why.card6.title': 'Resultados probados',
    'why.card6.desc': 'Miles de estudiantes obtuvieron su admisión con nuestro apoyo.',
    'proof.title': 'Acreditación y verificación',
    'proof.lead':
      'Nuestros datos están verificados oficialmente para garantizar confianza y transparencia a estudiantes saudíes e internacionales.',
    'proof.commercial.alt': 'Certificado de registro comercial',
    'proof.address.alt': 'Comprobante de dirección nacional',
    'proof.iban.alt': 'Carta bancaria de IBAN',
    'proof.zatca.alt': 'Certificado de registro ZATCA',
    'proof.info.title': 'Confianza basada en documentos verificables',
    'proof.info.lead':
      'Garantizamos transparencia total documentando nuestra información oficial y poniéndola a disposición para verificación desde cualquier país.',
    'proof.info.bullet1': 'Dirección nacional registrada y verificada.',
    'proof.info.bullet2': 'Datos verificables ante autoridades oficiales.',
    'proof.info.bullet3': 'Compromiso claro con la transparencia y la protección de datos.',
    'proof.info.cta': 'Contactar para verificar',
    'contact.title': '¿Tienes preguntas?',
    'contact.lead': 'Deja tus datos y te contactaremos en 24 horas.',
    'contact.name': 'Nombre completo',
    'contact.phone': 'Número de móvil',
    'contact.email': 'Correo electrónico',
    'contact.service': 'Consulta o servicio requerido',
    'contact.submit': 'Enviar',
    'faq.title': 'Preguntas frecuentes',
    'faq.q1': '¿Cuál es el primer paso para inscribirse?',
    'faq.a1':
      'Comienza con una consulta gratuita para definir tu objetivo y el instituto adecuado.',
    'faq.q2': '¿Cuánto tarda la admisión?',
    'faq.a2': 'Normalmente de 3 a 7 días hábiles tras recibir los documentos completos.',
    'faq.q3': '¿Hay tarifas de consulta?',
    'faq.a3': 'No, la consulta y la revisión de opciones son totalmente gratuitas.',
    'faq.q4': '¿Ayudan con alojamiento y seguro?',
    'faq.a4': 'Sí, recomendamos opciones confiables de alojamiento y seguro médico.',
    'partners.title': 'Institutos que entienden las metas de los estudiantes saudíes',
    'partners.lead': 'Institutos internacionales destacados con educación de alta calidad.',
    'partners.card1.desc': 'Rutas intensivas para preparar exámenes de idioma.',
    'partners.card2.desc': 'Programas puente universitarios con apoyo académico completo.',
    'partners.card3.desc': 'Institutos líderes en más de 10 países.',
    'stories.title': 'Experiencias de estudiantes',
    'stories.lead':
      'Escucha historias reales de nuestros estudiantes y cómo les ayudamos a completar su admisión.',
    'stories.card1': 'Selección del instituto y plan de estudio en tiempo récord.',
    'stories.card2': 'Soporte paso a paso hasta la carta de admisión.',
    'stories.card3': 'Inscripción fluida con orientación adaptada al presupuesto.',
    'stories.card4': 'Seguimiento profesional para acelerar los trámites.',
    'stories.card5': 'Servicio claro y comunicación rápida.',
    'stories.follow': 'Sigue las historias',
    'feedback.title': 'Opiniones de estudiantes',
    'feedback.lead': 'Testimonios reales de estudiantes de todo el mundo.',
    'footer.tagline':
      'Consultoría educativa internacional confiable para estudiantes saudíes que desean estudiar en Filipinas y en otros destinos.',
    'footer.links': 'Enlaces rápidos',
    'footer.institutes': 'Institutos',
    'footer.faq': 'FAQ',
    'footer.study': 'Estudiar en Filipinas',
    'footer.language': 'Admisión de idioma',
    'footer.blog': 'Blog',
    'footer.email': 'Correo electrónico',
    'footer.phone': '+966 56 110 7137',
    'footer.contact': 'Contáctanos',
    'footer.hours': 'Dom–Jue, 9:00–18:00',
    'footer.follow': 'Síguenos',
    'footer.copyright': '© 2026 YallaStudy. Todos los derechos reservados.',
    'whatsapp.label': 'WhatsApp',
    'whatsapp.text': 'WhatsApp',
    'lightbox.title': 'Vista de imagen',
    'lightbox.close': 'Cerrar'
  },
  tr: {
    'meta.title': 'YallaStudy | Kabul Elinizde',
    'meta.description':
      'Dünya genelindeki en iyi dil okullarına kayıt için ücretsiz eğitim danışmanlığı ve kabul sürecine kadar tam takip.',
    skip: 'İçeriğe atla',
    'logo.sub': 'Yurtdışı eğitim',
    'lang.label': 'Dil',
    'theme.dark': 'Gece modu',
    'theme.light': 'Gündüz modu',
    'menu.open': 'Menüyü aç',
    'menu.close': 'Menüyü kapat',
    'nav.home': 'Ana sayfa',
    'nav.about': 'Hakkımızda',
    'nav.institutes': 'Dil okulları',
    'nav.services': 'Hizmetler',
    'nav.study': 'Filipinlerde eğitim',
    'nav.blog': 'Blog',
    'nav.why': 'Neden biz?',
    'nav.proof': 'Akreditasyon',
    'nav.faq': 'SSS',
    'cta.register': 'Şimdi kayıt ol',
    'hero.kicker': 'YallaStudy Eğitim Danışmanlığı',
    'hero.title': 'Kabul Elinizde',
    'hero.lead':
      'Filipinlerde eğitim almak isteyen Suudi öğrencilere, güvenilir dil okulları ve akademik programlar üzerinden kayıt desteği sağlıyoruz; ayrıca diğer ülkeler için de seçenekler sunuyoruz.',
    'hero.ctaPrimary': 'Ücretsiz danışmanlık al',
    'hero.ctaSecondary': 'Hizmetleri keşfet',
    'hero.point1.title': '24 saat içinde yanıt',
    'hero.point1.desc': 'Özel takip ekibi',
    'hero.point2.title': 'Güvenilir okul ağı',
    'hero.point2.desc': 'Avrupa, Amerika ve Kanada',
    'hero.point3.title': 'Net adımlar',
    'hero.point3.desc': 'Kayıttan kabule',
    'about.title': 'Hakkımızda',
    'about.lead':
      'YallaStudy, uluslararası dil okulu kayıt ve akademik kabul konusunda uzman bir danışmanlık ekibidir; odağımız Filipinlerde eğitim planlayan Suudi öğrencilerdir.',
    'about.bullet1': 'Suudi öğrenciler için Arapça destekli ücretsiz danışmanlık.',
    'about.bullet2': 'Uluslararası seçenekler, net ve şeffaf ücretler.',
    'about.bullet3': 'Kabul belgesi çıkana kadar takip ve varış sonrası yönlendirme.',
    'about.bullet4': 'WhatsApp desteği ve zaman dilimine uygun günlük takip.',
    'stats.countries': 'Ülke',
    'stats.years': 'Yıl deneyim',
    'stats.students': 'Öğrenci',
    'stats.programs': 'Program',
    'seo.added.title': 'Filipinlerde eğitim: Suudi ve Körfez öğrencileri için hızlı kabul çözümleri',
    'seo.added.lead':
      'Filipinlerde dil kabulü veya akademik dil programı arıyorsanız, danışmadan kesin kabule kadar net bir plan sunuyoruz.',
    'seo.added.read': 'Ayrıca okuyun:',
    'seo.added.link.study': 'Suudi öğrenciler için Filipinlerde eğitim',
    'seo.added.link.language': 'Filipinlerde dil eğitimi kabulü',
    'seo.added.link.registration': 'Suudiler için dil okulu kaydı',
    'seo.added.link.academic': 'Akademik dil programları',
    'seo.added.link.consulting': 'Kabul danışmanlığı',
    'institutes.title': 'En iyi dil okulları',
    'institutes.lead': 'Hedefinize, bütçenize ve seviyenize göre en uygun okulu seçiyoruz.',
    'institutes.pill': 'İyi başlangıç',
    'institutes.card1.title': 'Esnek dil programı',
    'institutes.card1.desc': 'Modern öğrenme ortamı, esnek programlar ve sürekli destek.',
    'institutes.card2.title': 'Yoğun eğitim planı',
    'institutes.card2.desc': 'Sabah/akşam esnek ders seçenekleri ve akademik yönlendirme.',
    'institutes.card3.title': 'Pratik akademik rota',
    'institutes.card3.desc': 'Dil eğitimi, beceri etkinlikleri ve sürekli rehberlik ile.',
    'services.title': 'Hizmetlerimiz',
    'services.lead': 'Filipinler hedefli Suudi öğrenciler için uçtan uca uluslararası hizmet, ayrıca diğer destinasyonlar için ek seçenekler.',
    'services.card1.title': 'Ücretsiz danışmanlık',
    'services.card1.desc': 'Hedef ve eğitim planınızı uzmanla analiz edin.',
    'services.card1.link': 'Danışmanlık iste',
    'services.card2.title': 'Okul seçimi',
    'services.card2.desc': 'En iyi seçeneği bulmak için okulları ve programları karşılaştırın.',
    'services.card2.link': 'Seçenekleri gör',
    'services.card3.title': 'Dosya hazırlığı',
    'services.card3.desc': 'Belgelerin gözden geçirilmesi ve başvuruların hazırlanması.',
    'services.card3.link': 'Dosyanı hazırla',
    'services.card4.title': 'Kabul takibi',
    'services.card4.desc': 'Okul ile doğrudan iletişim ve sürecin hızlandırılması.',
    'services.card4.link': 'Başla',
    'services.card5.title': 'Seyahat ve konaklama',
    'services.card5.desc': 'Konaklama, ulaşım ve seyahat öncesi hazırlık önerileri.',
    'services.card5.link': 'Seyahatini planla',
    'services.card6.title': 'Varış sonrası destek',
    'services.card6.desc': 'Başarılı bir başlangıç için takip ve danışmanlık.',
    'services.card6.link': 'Bize ulaş',
    'why.title': 'Neden biz?',
    'why.lead': 'Suudi öğrenciler için her adımda gerçek destek ve net bir plan sunarak kararı kolaylaştırıyoruz.',
    'why.card1.title': 'Uygulamalı uzmanlık',
    'why.card1.desc': 'Dünya çapında akredite okullarla güçlü iş ortaklıkları.',
    'why.card2.title': 'Çoklu seçenekler',
    'why.card2.desc': 'Hedefinize uygun en iyi şehir ve programları seçeriz.',
    'why.card3.title': 'Tam şeffaflık',
    'why.card3.desc': 'Ücretler net, gizli maliyet yok.',
    'why.card4.title': 'Sürekli takip',
    'why.card4.desc': 'Hızlı WhatsApp desteği ve özel müşteri hizmeti.',
    'why.card5.title': 'Esnek çözümler',
    'why.card5.desc': 'Öğrenciler, profesyoneller ve aileler için programlar.',
    'why.card6.title': 'Kanıtlanmış sonuçlar',
    'why.card6.desc': 'Binlerce öğrenci bizimle kabul aldı.',
    'proof.title': 'Akreditasyon ve doğrulama',
    'proof.lead':
      'Bilgilerimiz resmi olarak doğrulanmıştır; Suudi ve uluslararası öğrenciler için güven ve şeffaflık sağlar.',
    'proof.commercial.alt': 'Ticaret Sicil Belgesi',
    'proof.address.alt': 'Ulusal Adres Belgesi',
    'proof.iban.alt': 'IBAN banka yazısı',
    'proof.zatca.alt': 'ZATCA kayıt sertifikası',
    'proof.info.title': 'Doğrulanabilir belgelere dayalı güven',
    'proof.info.lead':
      'Resmi bilgilerimizi belgelendiriyor ve talep edildiğinde dünyanın her yerinden doğrulanabilir şekilde sunuyoruz.',
    'proof.info.bullet1': 'Kayıtlı ve doğrulanmış ulusal adres.',
    'proof.info.bullet2': 'Yetkili kurumlarca doğrulanabilir veriler.',
    'proof.info.bullet3': 'Şeffaflık ve veri güvenliği taahhüdü.',
    'proof.info.cta': 'Doğrulama için iletişime geçin',
    'contact.title': 'Sorularınız mı var?',
    'contact.lead': 'Bilgilerinizi bırakın, 24 saat içinde dönüş yapalım.',
    'contact.name': 'Ad soyad',
    'contact.phone': 'Cep telefonu',
    'contact.email': 'E-posta',
    'contact.service': 'Danışmanlık veya gerekli hizmet',
    'contact.submit': 'Gönder',
    'faq.title': 'Sık Sorulan Sorular',
    'faq.q1': 'Kayıt için ilk adım nedir?',
    'faq.a1': 'Hedefinizi ve uygun okulu belirlemek için ücretsiz danışmanlıkla başlar.',
    'faq.q2': 'Kabul süreci ne kadar sürer?',
    'faq.a2': 'Belgeler tam geldikten sonra genellikle 3–7 iş günü.',
    'faq.q3': 'Danışmanlık ücreti var mı?',
    'faq.a3': 'Hayır, danışmanlık ve seçenek değerlendirmesi tamamen ücretsizdir.',
    'faq.q4': 'Konaklama ve sigorta desteği var mı?',
    'faq.a4': 'Evet, güvenilir konaklama ve sağlık sigortası seçenekleri öneriyoruz.',
    'partners.title': 'Suudi öğrencilerin hedeflerini anlayan kurumlar',
    'partners.lead': 'Yüksek kaliteli eğitim sunan seçkin uluslararası kurumlar.',
    'partners.card1.desc': 'Dil sınavlarına hazırlık için yoğun programlar.',
    'partners.card2.desc': 'Üniversiteye geçiş programları ve tam akademik destek.',
    'partners.card3.desc': '10’dan fazla ülkede önde gelen kurumlar.',
    'stories.title': 'Öğrenci deneyimleri',
    'stories.lead':
      'Öğrencilerimizin gerçek hikayelerini dinleyin ve kabul sürecini nasıl yönettiğimizi görün.',
    'stories.card1': 'Doğru okul ve planın hızlıca seçilmesi.',
    'stories.card2': 'Kabul mektubuna kadar adım adım destek.',
    'stories.card3': 'Bütçeye uygun rehberlik ile sorunsuz kayıt.',
    'stories.card4': 'İşlemleri hızlandıran profesyonel takip.',
    'stories.card5': 'Net hizmet ve hızlı iletişim.',
    'stories.follow': 'Öğrenci hikayelerini takip edin',
    'feedback.title': 'Öğrenci yorumları',
    'feedback.lead': 'Dünya çapındaki öğrencilerimizin gerçek deneyimleri.',
    'footer.tagline':
      'Filipinler ve diğer destinasyonlarda eğitim planlayan Suudi öğrenciler için güvenilir uluslararası danışmanlık.',
    'footer.links': 'Hızlı bağlantılar',
    'footer.institutes': 'Kurumlar',
    'footer.faq': 'SSS',
    'footer.study': 'Filipinlerde eğitim',
    'footer.language': 'Dil kabulü',
    'footer.blog': 'Blog',
    'footer.email': 'E-posta',
    'footer.phone': '+966 56 110 7137',
    'footer.contact': 'Bize ulaşın',
    'footer.hours': 'Paz–Per, 9:00–18:00',
    'footer.follow': 'Bizi takip edin',
    'footer.copyright': '© 2026 YallaStudy. Tüm hakları saklıdır.',
    'whatsapp.label': 'WhatsApp',
    'whatsapp.text': 'WhatsApp',
    'lightbox.title': 'Görsel önizleme',
    'lightbox.close': 'Kapat'
  }
};

const getTranslation = (lang, key) => {
  if (!key) return '';
  return translations[lang]?.[key] ?? translations.ar[key] ?? '';
};

let currentLang = 'ar';
const getLanguageFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  return urlLang && translations[urlLang] ? urlLang : null;
};

const persistLanguagePreference = (lang) => {
  try {
    localStorage.setItem('preferredLang', lang);
  } catch (error) {
    // Ignore storage errors.
  }
};

const syncLanguageInUrl = (lang) => {
  const url = new URL(window.location.href);
  if (lang === 'ar') {
    url.searchParams.delete('lang');
  } else {
    url.searchParams.set('lang', lang);
  }
  window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
};

const initialUrlLang = getLanguageFromUrl();
if (initialUrlLang) {
  currentLang = initialUrlLang;
} else {
  try {
    const storedLang = localStorage.getItem('preferredLang');
    currentLang = storedLang && translations[storedLang] ? storedLang : 'ar';
  } catch (error) {
    currentLang = 'ar';
  }
}

const themeToggles = Array.from(document.querySelectorAll('[data-theme-toggle]'));
const themeMeta = document.querySelector('meta[name="theme-color"]');
let currentTheme = 'light';

const updateNavToggleLabel = (isOpen) => {
  if (!navToggle) return;
  const key = isOpen ? 'menu.close' : 'menu.open';
  navToggle.setAttribute('aria-label', getTranslation(currentLang, key));
};

const toggleNav = (forceOpen) => {
  if (!navToggle || !nav) return;
  const isOpen =
    typeof forceOpen === 'boolean' ? forceOpen : !document.body.classList.contains('nav-open');
  document.body.classList.toggle('nav-open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  updateNavToggleLabel(isOpen);
};

const getPreferredTheme = () => {
  try {
    const stored = localStorage.getItem('preferredTheme');
    if (stored === 'dark' || stored === 'light') return stored;
  } catch (error) {
    // Ignore storage errors.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

currentTheme = getPreferredTheme();

const updateThemeLabel = () => {
  if (!themeToggles.length) return;
  const key = currentTheme === 'dark' ? 'theme.light' : 'theme.dark';
  const label = getTranslation(currentLang, key);
  themeToggles.forEach((toggle) => {
    toggle.textContent = label;
  });
};

const applyTheme = (theme) => {
  currentTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (themeMeta) {
    themeMeta.setAttribute('content', currentTheme === 'dark' ? '#0b1220' : '#036ec0');
  }
  updateThemeLabel();
  try {
    localStorage.setItem('preferredTheme', currentTheme);
  } catch (error) {
    // Ignore storage errors.
  }
};

const applyLanguage = (lang) => {
  const safeLang = translations[lang] ? lang : 'ar';
  currentLang = safeLang;
  document.documentElement.lang = safeLang;
  document.documentElement.dir = safeLang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('is-ltr', safeLang !== 'ar');
  if (langSelect) langSelect.value = safeLang;
  if (langSelectMobile) langSelectMobile.value = safeLang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = getTranslation(safeLang, el.dataset.i18n);
    if (value) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const mappings = el.dataset.i18nAttr.split(',');
    mappings.forEach((mapping) => {
      const [attr, key] = mapping.split(':').map((part) => part.trim());
      const value = getTranslation(safeLang, key);
      if (attr && value) el.setAttribute(attr, value);
    });
  });

  const title = getTranslation(safeLang, 'meta.title');
  if (title) document.title = title;
  const metaDescription = document.querySelector('meta[name="description"]');
  const desc = getTranslation(safeLang, 'meta.description');
  if (metaDescription && desc) metaDescription.setAttribute('content', desc);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && title) ogTitle.setAttribute('content', title);
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription && desc) ogDescription.setAttribute('content', desc);
  const preferredUrl =
    safeLang === 'en' ? 'https://www.yallastudy.sa/?lang=en' : 'https://www.yallastudy.sa/';
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) canonicalLink.setAttribute('href', preferredUrl);
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', preferredUrl);
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', safeLang === 'ar' ? 'ar_SA' : 'en_US');
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle && title) twitterTitle.setAttribute('content', title);
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription && desc) twitterDescription.setAttribute('content', desc);

  persistLanguagePreference(safeLang);
  syncLanguageInUrl(safeLang);
  updateNavToggleLabel(document.body.classList.contains('nav-open'));
  updateThemeLabel();
};

if (langSelect) {
  langSelect.addEventListener('change', (event) => {
    applyLanguage(event.target.value);
  });
}

if (langSelectMobile) {
  langSelectMobile.addEventListener('change', (event) => {
    applyLanguage(event.target.value);
  });
}

if (themeToggles.length) {
  themeToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  });
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => toggleNav());

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => toggleNav(false));
  });

  document.addEventListener('click', (event) => {
    if (!document.body.classList.contains('nav-open')) return;
    if (nav.contains(event.target) || navToggle.contains(event.target)) return;
    toggleNav(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') toggleNav(false);
  });
}

applyTheme(currentTheme);
applyLanguage(currentLang);

const hero = document.querySelector('.hero');
const heroSlides = hero ? hero.querySelectorAll('.hero-slide') : [];

if (heroSlides.length >= 2) {
  const heroImages = [
    'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80'
  ];

  let imageIndex = 0;
  let activeIndex = 0;

  heroSlides[0].style.setProperty('--hero-image', `url("${heroImages[0]}")`);
  heroSlides[1].style.setProperty('--hero-image', `url("${heroImages[1]}")`);

  if (!prefersReducedMotion.matches) {
    setInterval(() => {
      imageIndex = (imageIndex + 1) % heroImages.length;
      const nextSlide = heroSlides[activeIndex === 0 ? 1 : 0];
      nextSlide.style.setProperty('--hero-image', `url("${heroImages[imageIndex]}")`);
      nextSlide.classList.add('is-active');
      heroSlides[activeIndex].classList.remove('is-active');
      activeIndex = activeIndex === 0 ? 1 : 0;
    }, 3000);
  }
}

const sliders = document.querySelectorAll('[data-slider]');

sliders.forEach((slider) => {
  const track = slider.querySelector('[data-slider-track]');
  const slides = track ? Array.from(track.children) : [];
  const prevButton = slider.querySelector('[data-slider-prev]');
  const nextButton = slider.querySelector('[data-slider-next]');
  const dotsContainer = slider.parentElement?.querySelector('[data-slider-dots]');
  let currentIndex = 0;

  if (!track || slides.length === 0) return;

  const updateSlider = () => {
    track.style.transform = `translateX(${currentIndex * -100}%)`;
    if (!dotsContainer) return;
    dotsContainer.querySelectorAll('button').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  };

  const goTo = (index) => {
    const lastIndex = slides.length - 1;
    if (index < 0) currentIndex = lastIndex;
    else if (index > lastIndex) currentIndex = 0;
    else currentIndex = index;
    updateSlider();
  };

  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', `انتقال إلى الشريحة ${index + 1}`);
      dot.addEventListener('click', () => goTo(index));
      dotsContainer.appendChild(dot);
    });
  }

  prevButton?.addEventListener('click', () => goTo(currentIndex - 1));
  nextButton?.addEventListener('click', () => goTo(currentIndex + 1));

  updateSlider();
});

const revealItems = document.querySelectorAll('.reveal');

if (revealItems.length) {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }
}

const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClosers = document.querySelectorAll('[data-lightbox-close]');
const zoomButtons = document.querySelectorAll('.proof-zoom');
const lightboxTargets = document.querySelectorAll('[data-lightbox]');

const openLightbox = (src, alt) => {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = src;
  lightboxImage.alt = alt || '';
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  if (!lightbox || !lightboxImage) return;
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
  document.body.style.overflow = '';
};

zoomButtons.forEach((button) => {
  const img = button.querySelector('img');
  if (!img) return;
  button.addEventListener('click', () => openLightbox(img.src, img.alt));
});

lightboxTargets.forEach((img) => {
  img.addEventListener('click', () => openLightbox(img.src, img.alt));
});

lightboxClosers.forEach((button) => {
  button.addEventListener('click', closeLightbox);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox?.classList.contains('is-open')) {
    closeLightbox();
  }
});

const feedbackSlider = document.querySelector('[data-feedback-slider]');
const feedbackTrack = document.querySelector('[data-feedback-track]');

if (feedbackSlider && feedbackTrack) {
  const buildFeedbackSlider = () => {
    feedbackTrack.querySelectorAll('[data-feedback-clone]').forEach((clone) => clone.remove());
    const baseSlides = Array.from(feedbackTrack.children);
    if (!baseSlides.length) return () => {};

    const trackStyles = getComputedStyle(feedbackTrack);
    const gap = Number.parseFloat(trackStyles.gap) || 0;
    const visibleVar = getComputedStyle(feedbackSlider).getPropertyValue('--feedback-visible').trim();
    const visibleParsed = Number.parseInt(visibleVar, 10);
    const slideWidth = baseSlides[0].getBoundingClientRect().width;
    const containerWidth = feedbackSlider.getBoundingClientRect().width;
    const visibleCount = Number.isNaN(visibleParsed) || visibleParsed <= 0
      ? Math.max(1, Math.round(containerWidth / (slideWidth + gap)))
      : visibleParsed;
    const cloneCount = Math.min(visibleCount, baseSlides.length);

    const prepend = baseSlides.slice(-cloneCount).map((slide) => {
      const clone = slide.cloneNode(true);
      clone.setAttribute('data-feedback-clone', 'true');
      clone.querySelectorAll('[data-lightbox]').forEach((img) => {
        img.addEventListener('click', () => openLightbox(img.src, img.alt));
      });
      return clone;
    });

    const append = baseSlides.slice(0, cloneCount).map((slide) => {
      const clone = slide.cloneNode(true);
      clone.setAttribute('data-feedback-clone', 'true');
      clone.querySelectorAll('[data-lightbox]').forEach((img) => {
        img.addEventListener('click', () => openLightbox(img.src, img.alt));
      });
      return clone;
    });

    prepend.forEach((clone) => feedbackTrack.insertBefore(clone, feedbackTrack.firstChild));
    append.forEach((clone) => feedbackTrack.appendChild(clone));

    const allSlides = Array.from(feedbackTrack.children);
    let index = cloneCount;
    let timer = null;

    const updateCenter = () => {
      allSlides.forEach((slide) => slide.classList.remove('is-center'));
      const centerOffset = Math.floor(visibleCount / 2);
      const centerIndex = index + centerOffset;
      const centerSlide = allSlides[centerIndex];
      if (centerSlide) centerSlide.classList.add('is-center');
    };

    const setPosition = (animate = true) => {
      const shift = (slideWidth + gap) * index;
      feedbackTrack.style.transition = animate ? 'transform 0.6s ease' : 'none';
      feedbackTrack.style.transform = `translateX(${-shift}px)`;
      updateCenter();
    };

    const step = () => {
      index += 1;
      setPosition(true);
    };

    const handleTransitionEnd = () => {
      if (index >= baseSlides.length + cloneCount) {
        index = cloneCount;
        setPosition(false);
      }
      if (index < cloneCount) {
        index = baseSlides.length + cloneCount - 1;
        setPosition(false);
      }
    };

    feedbackTrack.addEventListener('transitionend', handleTransitionEnd);
    setPosition(false);

    if (!prefersReducedMotion.matches) {
      timer = setInterval(step, 2800);
    }

    return () => {
      if (timer) clearInterval(timer);
      feedbackTrack.removeEventListener('transitionend', handleTransitionEnd);
    };
  };

  let teardown = buildFeedbackSlider();

  window.addEventListener('resize', () => {
    if (typeof teardown === 'function') teardown();
    teardown = buildFeedbackSlider();
  });
}
