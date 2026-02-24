(() => {
  const languageSelect = document.getElementById('cp-lang-select');
  if (!languageSelect) return;

  const translations = {
    ar: {
      'cp.brand.aria': 'YallaStudy الصفحة الرئيسية',
      'cp.nav.aria': 'تنقل صفحات الموقع',
      'cp.nav.home': 'الرئيسية',
      'cp.nav.study': 'الدراسة في الفلبين',
      'cp.nav.language': 'قبول اللغة',
      'cp.nav.registration': 'التسجيل في المعاهد',
      'cp.nav.academic': 'البرامج الأكاديمية',
      'cp.nav.blog': 'المدونة',
      'cp.lang.label': 'اللغة',
      'cp.cta.free': 'استشارة مجانية',
      'cp.breadcrumb.home': 'الرئيسية',
      'cp.blog.breadcrumb.blog': 'المدونة',
      'cp.blog.meta.title': 'مدونة YallaStudy | الدراسة في الفلبين وتكاليف المعاهد للطلاب الخليجيين',
      'cp.blog.meta.description':
        'مقالات متخصصة عن الدراسة في الفلبين: تكلفة الدراسة والمعيشة، أفضل معاهد اللغة المعتمدة، ودليل القبول للطلاب من السعودية واليمن ودول الخليج.',
      'cp.blog.hero.title': 'مدونة الدراسة في الفلبين للطلاب السعوديين واليمنيين والخليجيين',
      'cp.blog.hero.lead':
        'هنا تجد مقالات عملية تساعدك في اتخاذ قرار الدراسة: تكلفة المعيشة، أفضل المعاهد، وخطط القبول خطوة بخطوة. كل مقال مرتبط بخدماتنا لتبدأ التنفيذ فورًا.',
      'cp.blog.post1.title': 'دراسة اللغة الإنجليزية في الفلبين: دليل البداية 2026',
      'cp.blog.post1.desc': 'دليل شامل للمستويات، أنواع البرامج، مدة الدراسة، وكيف تختار معهدًا مناسبًا لهدفك.',
      'cp.blog.post2.title': 'تكلفة الدراسة والمعيشة في الفلبين للطلاب السعوديين واليمنيين',
      'cp.blog.post2.desc': 'تحليل واضح للتكاليف الشهرية والسنوية مع نصائح لتقليل المصاريف بدون التأثير على الجودة.',
      'cp.blog.post3.title': 'أفضل معاهد اللغة المعتمدة في الفلبين: كيف تختار صح؟',
      'cp.blog.post3.desc': 'معايير تقييم المعهد والمدينة والسكن، وأخطاء شائعة يقع فيها الطلاب قبل التسجيل.',
      'cp.blog.read': 'قراءة المقال',
      'cp.blog.convert.title': 'خطوة التحويل من القراءة إلى التنفيذ',
      'cp.blog.convert.desc': 'بعد قراءة المقالات، يمكنك إرسال حالتك التعليمية لنقترح لك خطة قبول مناسبة خلال 24 ساعة.',
      'cp.blog.convert.cta': 'احجز الاستشارة الآن',
      'cp.blog.related.title': 'صفحات خدمة مرتبطة',
      'cp.blog.related.language': 'قبول دراسة اللغة',
      'cp.blog.related.registration': 'التسجيل في المعاهد',
      'cp.blog.related.academic': 'البرامج الأكاديمية',
      'cp.blog.related.consulting': 'استشارات القبول الدراسي'
    },
    en: {
      'cp.brand.aria': 'YallaStudy Home',
      'cp.nav.aria': 'Site pages navigation',
      'cp.nav.home': 'Home',
      'cp.nav.study': 'Study in Philippines',
      'cp.nav.language': 'Language Admission',
      'cp.nav.registration': 'Institute Registration',
      'cp.nav.academic': 'Academic Programs',
      'cp.nav.blog': 'Blog',
      'cp.lang.label': 'Language',
      'cp.cta.free': 'Free Consultation',
      'cp.breadcrumb.home': 'Home',
      'cp.blog.breadcrumb.blog': 'Blog',
      'cp.blog.meta.title': 'YallaStudy Blog | Study in the Philippines for GCC Students',
      'cp.blog.meta.description':
        'Practical articles about studying in the Philippines: costs, accredited language institutes, and admission guidance for Saudi, Yemeni, and GCC students.',
      'cp.blog.hero.title': 'Study in the Philippines Blog for Saudi, Yemeni, and GCC Students',
      'cp.blog.hero.lead':
        'Find practical articles to help you decide: living costs, best institutes, and clear admission steps. Every article links to a service you can start right away.',
      'cp.blog.post1.title': 'Study English in the Philippines: 2026 Starter Guide',
      'cp.blog.post1.desc': 'A complete guide to levels, program types, study duration, and choosing the right institute.',
      'cp.blog.post2.title': 'Study and Living Costs in the Philippines for Saudi and Yemeni Students',
      'cp.blog.post2.desc': 'A clear breakdown of monthly and yearly costs with practical saving tips.',
      'cp.blog.post3.title': 'Best Accredited Language Institutes in the Philippines: How to Choose',
      'cp.blog.post3.desc': 'How to evaluate institutes, cities, and housing, plus common registration mistakes.',
      'cp.blog.read': 'Read article',
      'cp.blog.convert.title': 'Turn Reading into Action',
      'cp.blog.convert.desc': 'After reading the articles, send us your case and receive a suitable admission plan within 24 hours.',
      'cp.blog.convert.cta': 'Book consultation now',
      'cp.blog.related.title': 'Related service pages',
      'cp.blog.related.language': 'Language Admission',
      'cp.blog.related.registration': 'Institute Registration',
      'cp.blog.related.academic': 'Academic Programs',
      'cp.blog.related.consulting': 'Admission Consulting',

      'cp.blog.a1.meta.title': 'Study English in the Philippines 2026 | Guide for Saudi and Yemeni Students | YallaStudy',
      'cp.blog.a1.meta.description':
        'A complete guide to studying English in the Philippines: programs, duration, costs, and admission steps.',
      'cp.blog.a1.breadcrumb': 'Study English in the Philippines',
      'cp.blog.a1.h1': 'Study English in the Philippines 2026: A Practical Guide Before You Apply',
      'cp.blog.a1.meta.updated': 'Updated: February 23, 2026',
      'cp.blog.a1.meta.category': 'Category: Study in the Philippines',
      'cp.blog.a1.meta.audience': 'Audience: Saudi Arabia, Yemen, GCC',
      'cp.blog.a1.p1':
        'Studying English in the Philippines is a top choice because it balances quality and cost. Results depend on choosing the right program and institute from the start.',
      'cp.blog.a1.s1.title': '1) What language program types are available?',
      'cp.blog.a1.s1.li1': 'General English program to build core skills.',
      'cp.blog.a1.s1.li2': 'Intensive program with more daily hours.',
      'cp.blog.a1.s1.li3': 'Exam preparation track such as IELTS.',
      'cp.blog.a1.s1.li4': 'Academic language programs for university goals.',
      'cp.blog.a1.s2.title': '2) What study duration is suitable?',
      'cp.blog.a1.s2.p1':
        'Duration depends on your current level. Most students need 3 to 6 months for clear progress. If your target is a specific test score, planning should be more precise.',
      'cp.blog.a1.s3.title': '3) How do you choose the right institute?',
      'cp.blog.a1.s3.li1': 'Evaluate the exact track you need (general, intensive, academic).',
      'cp.blog.a1.s3.li2': 'Compare total cost: tuition + housing + monthly expenses.',
      'cp.blog.a1.s3.li3': 'Choose a city that matches your preferred lifestyle.',
      'cp.blog.a1.s3.li4': 'Confirm regular academic follow-up.',
      'cp.blog.a1.s4.title': '4) Common mistakes before registration',
      'cp.blog.a1.s4.li1': 'Choosing only by price.',
      'cp.blog.a1.s4.li2': 'Ignoring housing and transport details.',
      'cp.blog.a1.s4.li3': 'Starting without a clear timeline.',
      'cp.blog.a1.s4.li4': 'Submitting an incomplete admission file.',
      'cp.blog.a1.s5.title': '5) What is the practical next step?',
      'cp.blog.a1.s5.p1':
        'Start with a quick consultation to identify the best program and institute for your case. Then we prepare your file and follow up until final acceptance.',
      'cp.blog.a1.cta1': 'Book admission consultation',
      'cp.blog.a1.cta2': 'See registration steps',

      'cp.blog.a2.meta.title': 'Study and Living Costs in the Philippines 2026 | GCC Student Budget Guide | YallaStudy',
      'cp.blog.a2.meta.description':
        'Understand study and living costs in the Philippines: tuition, housing, monthly expenses, and practical saving tips.',
      'cp.blog.a2.breadcrumb': 'Study and Living Costs in the Philippines',
      'cp.blog.a2.h1': 'Study and Living Costs in the Philippines 2026: How to Build a Smart Budget',
      'cp.blog.a2.meta.updated': 'Updated: February 23, 2026',
      'cp.blog.a2.meta.category': 'Category: Costs and Budget',
      'cp.blog.a2.meta.audience': 'Audience: Saudi, Yemeni, and GCC students',
      'cp.blog.a2.p1':
        'The key question is real cost. To avoid surprises, break your budget into clear cost items before you travel.',
      'cp.blog.a2.s1.title': '1) Main cost components',
      'cp.blog.a2.s1.li1': 'Institute and program fees.',
      'cp.blog.a2.s1.li2': 'Housing: on-campus or nearby off-campus options.',
      'cp.blog.a2.s1.li3': 'Daily expenses: food, transport, internet, and personal needs.',
      'cp.blog.a2.s1.li4': 'Pre-travel costs: ticket, insurance, and admin fees.',
      'cp.blog.a2.s2.title': '2) How to reduce costs without losing quality',
      'cp.blog.a2.s2.li1': 'Choose a program that matches your real goal.',
      'cp.blog.a2.s2.li2': 'Compare cities, not only institutes.',
      'cp.blog.a2.s2.li3': 'Set a realistic duration based on your level.',
      'cp.blog.a2.s2.li4': 'Use recommendations based on real student outcomes.',
      'cp.blog.a2.s3.title': '3) Example monthly budget structure',
      'cp.blog.a2.s3.p1':
        'Split your budget into three parts: tuition, housing, and daily expenses. This gives you a clear minimum and average range before enrollment.',
      'cp.blog.a2.s4.title': '4) When is the Philippines a better-value option?',
      'cp.blog.a2.s4.p1':
        'Usually when your goal is faster language improvement with intensive study and manageable living costs compared to other destinations.',
      'cp.blog.a2.s5.title': '5) Next step',
      'cp.blog.a2.s5.p1':
        'Send your budget and goal, and we will suggest 2-3 suitable institutes with a clear cost breakdown before you start.',
      'cp.blog.a2.cta1': 'Request budget and admission plan',
      'cp.blog.a2.cta2': 'Read best institutes article',

      'cp.blog.a3.meta.title':
        'Best Accredited Language Institutes in the Philippines 2026 | How to Choose the Right One | YallaStudy',
      'cp.blog.a3.meta.description':
        'Learn how to choose the best accredited language institute in the Philippines based on program quality, housing, city, and cost.',
      'cp.blog.a3.breadcrumb': 'Best Accredited Language Institutes in the Philippines',
      'cp.blog.a3.h1': 'Best Accredited Language Institutes: 7 Criteria Before Registration',
      'cp.blog.a3.meta.updated': 'Updated: February 23, 2026',
      'cp.blog.a3.meta.category': 'Category: Institute Selection',
      'cp.blog.a3.meta.audience': 'Audience: Saudi Arabia, Yemen, GCC',
      'cp.blog.a3.p1':
        'The right question is not the best institute in general, but the best institute for your specific case. The decision depends on goal, budget, and duration.',
      'cp.blog.a3.s1.title': '1) Strength of the program you need',
      'cp.blog.a3.s1.p1':
        'Some institutes are stronger in general English, while others are better in IELTS or academic pathways. Define your goal first.',
      'cp.blog.a3.s2.title': '2) Study hours and follow-up quality',
      'cp.blog.a3.s2.li1': 'Verify real weekly teaching hours.',
      'cp.blog.a3.s2.li2': 'Ask about progress tracking and reporting.',
      'cp.blog.a3.s2.li3': 'Review class size and student ratio.',
      'cp.blog.a3.s3.title': '3) Suitable city for GCC students',
      'cp.blog.a3.s3.p1':
        'City choice affects lifestyle, cost, and focus. Some cities are better for intensive study while others are more active.',
      'cp.blog.a3.s4.title': '4) Housing and support services',
      'cp.blog.a3.s4.li1': 'On-campus and off-campus housing options.',
      'cp.blog.a3.s4.li2': 'Safety level and distance from the institute.',
      'cp.blog.a3.s4.li3': 'Availability of internet and essential services.',
      'cp.blog.a3.s5.title': '5) Total cost, not tuition only',
      'cp.blog.a3.s5.p1':
        'Comparing full monthly cost gives a more accurate decision and avoids surprises after arrival.',
      'cp.blog.a3.s6.title': '6) Reviews and student experiences',
      'cp.blog.a3.s6.p1':
        'Reviews are useful, but they must be read against your own goals because one solution does not fit everyone.',
      'cp.blog.a3.s7.title': '7) Clear admission plan before payment',
      'cp.blog.a3.s7.p1':
        'Do not start any process without a written plan that includes program, cost, and registration timeline.',
      'cp.blog.a3.cta1': 'Start registration with the right institute',
      'cp.blog.a3.cta2': 'Book institute selection consultation'
    },
    fr: {
      'cp.brand.aria': 'Accueil YallaStudy',
      'cp.nav.aria': 'Navigation des pages du site',
      'cp.nav.home': 'Accueil',
      'cp.nav.study': 'Étudier aux Philippines',
      'cp.nav.language': 'Admission linguistique',
      'cp.nav.registration': 'Inscription aux instituts',
      'cp.nav.academic': 'Programmes académiques',
      'cp.nav.blog': 'Blog',
      'cp.lang.label': 'Langue',
      'cp.cta.free': 'Consultation gratuite',
      'cp.breadcrumb.home': 'Accueil',
      'cp.blog.breadcrumb.blog': 'Blog',
      'cp.blog.meta.title': 'Blog YallaStudy | Étudier aux Philippines pour les étudiants du Golfe',
      'cp.blog.meta.description':
        'Articles pratiques sur les études aux Philippines : coûts, instituts de langue accrédités et démarches d’admission.',
      'cp.blog.hero.title': 'Blog des études aux Philippines pour les étudiants saoudiens, yéménites et du Golfe',
      'cp.blog.hero.lead':
        'Des articles utiles pour décider : coût de la vie, meilleurs instituts et étapes d’admission claires.',
      'cp.blog.post1.title': 'Étudier l’anglais aux Philippines : guide de départ 2026',
      'cp.blog.post1.desc': 'Guide complet sur les niveaux, types de programmes et durée d’études.',
      'cp.blog.post2.title': 'Coût des études et de la vie aux Philippines',
      'cp.blog.post2.desc': 'Analyse claire des coûts mensuels et annuels avec conseils d’économie.',
      'cp.blog.post3.title': 'Meilleurs instituts de langue accrédités : comment bien choisir ?',
      'cp.blog.post3.desc': 'Critères d’évaluation de l’institut, de la ville et du logement.',
      'cp.blog.read': 'Lire l’article',
      'cp.blog.convert.title': 'Passer de la lecture à l’action',
      'cp.blog.convert.desc': 'Après lecture, envoyez votre profil pour recevoir un plan d’admission en 24 h.',
      'cp.blog.convert.cta': 'Réserver maintenant',
      'cp.blog.related.title': 'Pages de service liées',
      'cp.blog.related.language': 'Admission linguistique',
      'cp.blog.related.registration': 'Inscription aux instituts',
      'cp.blog.related.academic': 'Programmes académiques',
      'cp.blog.related.consulting': 'Conseil en admission'
    },
    es: {
      'cp.brand.aria': 'Inicio de YallaStudy',
      'cp.nav.aria': 'Navegación de páginas del sitio',
      'cp.nav.home': 'Inicio',
      'cp.nav.study': 'Estudiar en Filipinas',
      'cp.nav.language': 'Admisión de idioma',
      'cp.nav.registration': 'Registro en institutos',
      'cp.nav.academic': 'Programas académicos',
      'cp.nav.blog': 'Blog',
      'cp.lang.label': 'Idioma',
      'cp.cta.free': 'Consulta gratuita',
      'cp.breadcrumb.home': 'Inicio',
      'cp.blog.breadcrumb.blog': 'Blog',
      'cp.blog.meta.title': 'Blog de YallaStudy | Estudiar en Filipinas para estudiantes del Golfo',
      'cp.blog.meta.description':
        'Artículos prácticos sobre estudiar en Filipinas: costos, institutos acreditados y guía de admisión.',
      'cp.blog.hero.title': 'Blog de estudio en Filipinas para estudiantes saudíes, yemeníes y del Golfo',
      'cp.blog.hero.lead':
        'Encuentra artículos prácticos para decidir: costos, mejores institutos y pasos claros de admisión.',
      'cp.blog.post1.title': 'Estudiar inglés en Filipinas: guía inicial 2026',
      'cp.blog.post1.desc': 'Guía completa sobre niveles, tipos de programas y duración del estudio.',
      'cp.blog.post2.title': 'Costo de estudio y vida en Filipinas',
      'cp.blog.post2.desc': 'Análisis claro de costos mensuales y anuales con consejos para ahorrar.',
      'cp.blog.post3.title': 'Mejores institutos acreditados: ¿cómo elegir bien?',
      'cp.blog.post3.desc': 'Criterios para evaluar instituto, ciudad y alojamiento.',
      'cp.blog.read': 'Leer artículo',
      'cp.blog.convert.title': 'Del contenido a la acción',
      'cp.blog.convert.desc': 'Después de leer, envíanos tu caso para recibir un plan de admisión en 24 horas.',
      'cp.blog.convert.cta': 'Reservar consulta',
      'cp.blog.related.title': 'Páginas de servicio relacionadas',
      'cp.blog.related.language': 'Admisión de idioma',
      'cp.blog.related.registration': 'Registro en institutos',
      'cp.blog.related.academic': 'Programas académicos',
      'cp.blog.related.consulting': 'Consultoría de admisión'
    },
    tr: {
      'cp.brand.aria': 'YallaStudy ana sayfa',
      'cp.nav.aria': 'Site sayfa gezinmesi',
      'cp.nav.home': 'Ana sayfa',
      'cp.nav.study': 'Filipinlerde eğitim',
      'cp.nav.language': 'Dil kabulü',
      'cp.nav.registration': 'Kurum kaydı',
      'cp.nav.academic': 'Akademik programlar',
      'cp.nav.blog': 'Blog',
      'cp.lang.label': 'Dil',
      'cp.cta.free': 'Ucretsiz danismanlik',
      'cp.breadcrumb.home': 'Ana sayfa',
      'cp.blog.breadcrumb.blog': 'Blog',
      'cp.blog.meta.title': 'YallaStudy Blog | Korfez ogrencileri icin Filipinlerde egitim',
      'cp.blog.meta.description':
        'Filipinlerde egitim hakkinda pratik yazilar: maliyetler, akredite dil kurumlari ve kabul rehberi.',
      'cp.blog.hero.title': 'Suudi, Yemenli ve Korfez ogrencileri icin Filipinlerde egitim blogu',
      'cp.blog.hero.lead':
        'Karar vermenizi kolaylastiran pratik yazilar: yasam maliyeti, en iyi kurumlar ve kabul adimlari.',
      'cp.blog.post1.title': 'Filipinlerde Ingilizce: 2026 baslangic rehberi',
      'cp.blog.post1.desc': 'Seviyeler, program turleri ve sureler icin kapsamli rehber.',
      'cp.blog.post2.title': 'Filipinlerde egitim ve yasam maliyeti',
      'cp.blog.post2.desc': 'Aylik ve yillik maliyetlerin net analizi ve tasarruf onerileri.',
      'cp.blog.post3.title': 'En iyi akredite dil kurumlari: dogru secim nasil yapilir?',
      'cp.blog.post3.desc': 'Kurum, sehir ve konaklama secimi icin temel kriterler.',
      'cp.blog.read': 'Yaziyi oku',
      'cp.blog.convert.title': 'Okumadan uygulamaya gecis',
      'cp.blog.convert.desc': 'Yazilari okuduktan sonra durumunuzu gonderin, 24 saatte plan alin.',
      'cp.blog.convert.cta': 'Danismanlik al',
      'cp.blog.related.title': 'Ilgili hizmet sayfalari',
      'cp.blog.related.language': 'Dil kabulu',
      'cp.blog.related.registration': 'Kurum kaydi',
      'cp.blog.related.academic': 'Akademik programlar',
      'cp.blog.related.consulting': 'Kabul danismanligi'
    }
  };

  const originalTextByKey = new Map();
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (!key || originalTextByKey.has(key)) return;
    originalTextByKey.set(key, el.textContent.trim());
  });

  const metaDescriptionElement = document.querySelector('meta[name="description"]');
  const defaultMetaByKey = new Map();
  if (document.body.dataset.i18nTitle) {
    defaultMetaByKey.set(document.body.dataset.i18nTitle, document.title);
  }
  if (document.body.dataset.i18nDesc && metaDescriptionElement) {
    defaultMetaByKey.set(document.body.dataset.i18nDesc, metaDescriptionElement.getAttribute('content') || '');
  }

  const getTranslation = (lang, key) => {
    if (!key) return '';
    if (lang === 'ar') {
      return (
        translations.ar?.[key] ??
        defaultMetaByKey.get(key) ??
        originalTextByKey.get(key) ??
        ''
      );
    }
    return (
      translations[lang]?.[key] ??
      translations.en?.[key] ??
      translations.ar?.[key] ??
      defaultMetaByKey.get(key) ??
      originalTextByKey.get(key) ??
      ''
    );
  };

  const localizedPageLangs = new Set(['en', 'fr', 'es', 'tr']);
  const localizedBasePaths = new Set([
    '/blog/',
    '/blog/dirasat-lugha-eng-filipin/',
    '/blog/taklifa-dirasah-wamaeisha-filipin/',
    '/blog/afdal-maahd-lugha-motamada-filipin/'
  ]);
  const localizedSitePaths = new Set(['/', ...localizedBasePaths]);

  const normalizePath = (path) => {
    let safePath = path || '/';
    safePath = safePath.replace(/\\/g, '/').replace(/\/{2,}/g, '/');
    if (!safePath.startsWith('/')) safePath = `/${safePath}`;
    if (!safePath.endsWith('/')) safePath = `${safePath}/`;
    return safePath;
  };

  const splitPathLanguage = (pathname = window.location.pathname) => {
    const normalized = normalizePath(pathname);
    const segments = normalized.split('/').filter(Boolean);
    if (!segments.length) return { pathLang: null, basePath: '/' };
    const first = segments[0];
    if (localizedPageLangs.has(first)) {
      const rest = segments.slice(1).join('/');
      const basePath = rest ? normalizePath(`/${rest}`) : '/';
      return { pathLang: first, basePath };
    }
    return { pathLang: null, basePath: normalized };
  };

  const canUseLocalizedPath = (basePath) => localizedBasePaths.has(basePath);

  const buildLocalizedPath = (basePath, lang) => {
    if (lang === 'ar') return basePath;
    return `/${lang}${basePath === '/' ? '/' : basePath}`;
  };

  const getPreferredPageUrl = (lang) => {
    const { basePath } = splitPathLanguage(window.location.pathname);
    if (canUseLocalizedPath(basePath) && (lang === 'ar' || localizedPageLangs.has(lang))) {
      return `https://www.yallastudy.sa${buildLocalizedPath(basePath, lang)}`;
    }
    const current = new URL(window.location.href);
    if (lang === 'ar') current.searchParams.delete('lang');
    else current.searchParams.set('lang', lang);
    return `${current.origin}${current.pathname}${current.search}`;
  };

  const getOgLocaleByLang = (lang) => {
    if (lang === 'ar') return 'ar_SA';
    if (lang === 'fr') return 'fr_FR';
    if (lang === 'es') return 'es_ES';
    if (lang === 'tr') return 'tr_TR';
    return 'en_US';
  };

  const localizeInternalLinks = (lang) => {
    document.querySelectorAll('a[href^="/"]').forEach((link) => {
      const rawHref = link.getAttribute('href');
      if (!rawHref || rawHref.startsWith('//')) return;
      const parsed = new URL(rawHref, window.location.origin);
      const { basePath } = splitPathLanguage(parsed.pathname);
      if (!localizedSitePaths.has(basePath)) return;
      const localizedPath = lang === 'ar' ? basePath : buildLocalizedPath(basePath, lang);
      link.setAttribute('href', `${localizedPath}${parsed.search}${parsed.hash}`);
    });
  };

  const getUrlLanguage = () => {
    const { pathLang, basePath } = splitPathLanguage(window.location.pathname);
    if (pathLang && canUseLocalizedPath(basePath) && translations[pathLang]) return pathLang;
    const params = new URLSearchParams(window.location.search);
    const value = params.get('lang');
    return value && translations[value] ? value : null;
  };

  const persistLanguage = (lang) => {
    try {
      localStorage.setItem('preferredLang', lang);
    } catch (error) {
      // Ignore storage errors.
    }
  };

  const syncLanguageInUrl = (lang) => {
    const url = new URL(window.location.href);
    const { basePath } = splitPathLanguage(url.pathname);
    if (canUseLocalizedPath(basePath) && (lang === 'ar' || localizedPageLangs.has(lang))) {
      url.pathname = buildLocalizedPath(basePath, lang);
      url.searchParams.delete('lang');
    } else if (lang === 'ar') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', lang);
    }
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  };

  const applyLanguage = (lang) => {
    const safeLang = translations[lang] ? lang : 'ar';
    document.documentElement.lang = safeLang === 'ar' ? 'ar' : safeLang;
    document.documentElement.dir = safeLang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('is-ltr', safeLang !== 'ar');
    languageSelect.value = safeLang;

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

    const titleKey = document.body.dataset.i18nTitle;
    const descKey = document.body.dataset.i18nDesc;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const metaDescription = document.querySelector('meta[name="description"]');
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogLocale = document.querySelector('meta[property="og:locale"]');

    const titleValue = getTranslation(safeLang, titleKey);
    const descValue = getTranslation(safeLang, descKey);

    if (titleKey && titleValue) {
      document.title = titleValue;
      if (ogTitle) ogTitle.setAttribute('content', titleValue);
      if (twitterTitle) twitterTitle.setAttribute('content', titleValue);
    }

    if (descKey && descValue) {
      if (metaDescription) metaDescription.setAttribute('content', descValue);
      if (ogDescription) ogDescription.setAttribute('content', descValue);
      if (twitterDescription) twitterDescription.setAttribute('content', descValue);
    }

    const preferredUrl = getPreferredPageUrl(safeLang);
    if (canonicalLink) canonicalLink.setAttribute('href', preferredUrl);
    if (ogUrl) ogUrl.setAttribute('content', preferredUrl);
    if (ogLocale) ogLocale.setAttribute('content', getOgLocaleByLang(safeLang));
    localizeInternalLinks(safeLang);

    persistLanguage(safeLang);
    syncLanguageInUrl(safeLang);
  };

  const markCurrentPageInNav = () => {
    const currentPath = splitPathLanguage(window.location.pathname).basePath;
    document.querySelectorAll('.cp-nav a').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('/')) return;
      const target = splitPathLanguage(new URL(href, window.location.origin).pathname).basePath;
      if (target === currentPath) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  languageSelect.addEventListener('change', (event) => applyLanguage(event.target.value));

  let currentLang = getUrlLanguage() || 'ar';
  if (!getUrlLanguage()) {
    try {
      const stored = localStorage.getItem('preferredLang');
      if (stored && translations[stored]) currentLang = stored;
    } catch (error) {
      currentLang = 'ar';
    }
  }

  applyLanguage(currentLang);
  markCurrentPageInNav();
})();
