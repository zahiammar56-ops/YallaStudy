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
      'cp.blog.related.consulting': 'Admission Consulting'
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

  const getTranslation = (lang, key) => {
    if (!key) return '';
    return translations[lang]?.[key] ?? translations.ar[key] ?? '';
  };

  const getUrlLanguage = () => {
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
    if (lang === 'ar') url.searchParams.delete('lang');
    else url.searchParams.set('lang', lang);
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

    persistLanguage(safeLang);
    syncLanguageInUrl(safeLang);
  };

  const markCurrentPageInNav = () => {
    const normalizePath = (path) => path.replace(/index\.html$/i, '').replace(/\/+$/, '') || '/';
    const currentPath = normalizePath(window.location.pathname);
    document.querySelectorAll('.cp-nav a').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('/')) return;
      const target = normalizePath(new URL(href, window.location.origin).pathname);
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
