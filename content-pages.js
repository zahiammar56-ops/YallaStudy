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
      'cp.blog.a3.cta2': 'Book institute selection consultation',

      'cp.page.registration.meta.title': 'Institute Registration for Saudi Students | Organized Steps | YallaStudy',
      'cp.page.registration.meta.description':
        'Complete support to register in language institutes in the Philippines for Saudi students, from comparison to final admission.',
      'cp.page.registration.breadcrumb': 'Institute Registration for Saudi Students',
      'cp.page.registration.hero.title': 'Institute Registration for Saudi Students: A Structured Process from Day One',
      'cp.page.registration.hero.lead':
        'YallaStudy manages the full registration process in the right language institute with an accurate comparison of program, cost, and city before final admission.',
      'cp.page.registration.hero.cta1': 'Submit your details now',
      'cp.page.registration.hero.cta2': 'Best accredited institutes',
      'cp.page.registration.card1.title': 'Before registration, what should we review?',
      'cp.page.registration.card1.li1': 'Your language goal: travel, university, exam, or work.',
      'cp.page.registration.card1.li2': 'Total monthly budget (study + housing + expenses).',
      'cp.page.registration.card1.li3': 'Best duration to reach your target level.',
      'cp.page.registration.card2.title': 'Language institutes comparison',
      'cp.page.registration.card2.li1': 'Actual weekly teaching hours.',
      'cp.page.registration.card2.li2': 'On-campus or off-campus housing style.',
      'cp.page.registration.card2.li3': 'City fit for GCC students.',
      'cp.page.registration.card3.title': 'Clear outcome',
      'cp.page.registration.card3.p':
        'You get a short list of strong options instead of confusion, with a final recommendation that matches your profile.',
      'cp.page.registration.highlight.title': 'Practical registration steps',
      'cp.page.registration.highlight.li1': 'Choose the best institute and program after comparison.',
      'cp.page.registration.highlight.li2': 'Confirm required documents and core details.',
      'cp.page.registration.highlight.li3': 'Submit the application officially and track responses.',
      'cp.page.registration.highlight.li4': 'Receive admission and arrange your travel plan.',
      'cp.page.registration.tag1': 'Institute registration',
      'cp.page.registration.tag2': 'Saudi students',
      'cp.page.registration.tag3': 'Philippines institutes',
      'cp.page.registration.tag4': 'Study admission',
      'cp.page.registration.related.title': 'Related links',
      'cp.page.registration.related.link1': 'Study in the Philippines for Saudi students',
      'cp.page.registration.related.link2': 'Language admission in the Philippines',
      'cp.page.registration.related.link3': 'Admission consulting services',
      'cp.page.registration.related.link4': 'Explore institutes on the homepage',
      'cp.page.registration.faq.aria': 'Frequently asked questions',
      'cp.page.registration.faq.q1': 'Does institute registration require in-person attendance?',
      'cp.page.registration.faq.a1':
        'Usually no. Most procedures can be completed remotely with continuous follow-up from our team.',
      'cp.page.registration.faq.q2': 'Is there a minimum study duration?',
      'cp.page.registration.faq.a2': 'Duration depends on institute policy, but many programs start from 4 weeks.',
      'cp.page.registration.faq.q3': 'Can I change the institute later?',
      'cp.page.registration.faq.a3':
        'It can be possible based on institute policy and timing, and we help you evaluate the best option.'
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
      'cp.blog.related.consulting': 'Conseil en admission',

      'cp.blog.a1.meta.title':
        'Étudier l\'anglais aux Philippines 2026 | Guide pour étudiants saoudiens et yéménites | YallaStudy',
      'cp.blog.a1.meta.description':
        'Guide complet pour étudier l\'anglais aux Philippines : programmes, durée, coûts et étapes d\'admission.',
      'cp.blog.a1.breadcrumb': 'Étudier l\'anglais aux Philippines',
      'cp.blog.a1.h1': 'Étudier l\'anglais aux Philippines 2026 : guide pratique avant l\'inscription',
      'cp.blog.a1.meta.updated': 'Mise à jour : 23 février 2026',
      'cp.blog.a1.meta.category': 'Catégorie : Études aux Philippines',
      'cp.blog.a1.meta.audience': 'Public : Arabie saoudite, Yémen, Golfe',
      'cp.blog.a1.p1':
        'Étudier l\'anglais aux Philippines est un choix majeur grâce à un bon équilibre entre qualité et coût. Le résultat dépend du bon programme et du bon institut dès le départ.',
      'cp.blog.a1.s1.title': '1) Quels types de programmes linguistiques sont disponibles ?',
      'cp.blog.a1.s1.li1': 'Programme d\'anglais général pour renforcer les compétences de base.',
      'cp.blog.a1.s1.li2': 'Programme intensif avec plus d\'heures quotidiennes.',
      'cp.blog.a1.s1.li3': 'Préparation aux examens comme l\'IELTS.',
      'cp.blog.a1.s1.li4': 'Programmes de langue académique pour les objectifs universitaires.',
      'cp.blog.a1.s2.title': '2) Quelle durée d\'étude est adaptée ?',
      'cp.blog.a1.s2.p1':
        'La durée dépend de votre niveau actuel. La plupart des étudiants ont besoin de 3 à 6 mois pour des progrès nets. Pour une note d\'examen précise, le plan doit être plus détaillé.',
      'cp.blog.a1.s3.title': '3) Comment choisir le bon institut ?',
      'cp.blog.a1.s3.li1': 'Évaluez précisément le parcours dont vous avez besoin (général, intensif, académique).',
      'cp.blog.a1.s3.li2': 'Comparez le coût total : scolarité + logement + dépenses mensuelles.',
      'cp.blog.a1.s3.li3': 'Choisissez une ville adaptée à votre style de vie.',
      'cp.blog.a1.s3.li4': 'Vérifiez l\'existence d\'un suivi académique régulier.',
      'cp.blog.a1.s4.title': '4) Erreurs fréquentes avant l\'inscription',
      'cp.blog.a1.s4.li1': 'Choisir uniquement selon le prix.',
      'cp.blog.a1.s4.li2': 'Négliger les détails de logement et de transport.',
      'cp.blog.a1.s4.li3': 'Commencer sans calendrier clair.',
      'cp.blog.a1.s4.li4': 'Soumettre un dossier d\'admission incomplet.',
      'cp.blog.a1.s5.title': '5) Quelle est la prochaine étape concrète ?',
      'cp.blog.a1.s5.p1':
        'Commencez par une consultation rapide pour définir le programme et l\'institut adaptés à votre profil. Ensuite, nous préparons le dossier et suivons l\'admission jusqu\'à l\'acceptation finale.',
      'cp.blog.a1.cta1': 'Réserver une consultation d\'admission',
      'cp.blog.a1.cta2': 'Voir les étapes d\'inscription',

      'cp.blog.a2.meta.title':
        'Coût des études et de la vie aux Philippines 2026 | Guide budget étudiant du Golfe | YallaStudy',
      'cp.blog.a2.meta.description':
        'Comprenez les coûts des études et de la vie aux Philippines : scolarité, logement, dépenses mensuelles et conseils d\'économie.',
      'cp.blog.a2.breadcrumb': 'Coût des études et de la vie aux Philippines',
      'cp.blog.a2.h1': 'Coût des études et de la vie aux Philippines 2026 : comment construire un budget intelligent',
      'cp.blog.a2.meta.updated': 'Mise à jour : 23 février 2026',
      'cp.blog.a2.meta.category': 'Catégorie : Coûts et budget',
      'cp.blog.a2.meta.audience': 'Public : étudiants saoudiens, yéménites et du Golfe',
      'cp.blog.a2.p1':
        'La question principale est le coût réel. Pour éviter les surprises, répartissez votre budget en postes clairs avant le voyage.',
      'cp.blog.a2.s1.title': '1) Principaux postes de coût',
      'cp.blog.a2.s1.li1': 'Frais de l\'institut et du programme.',
      'cp.blog.a2.s1.li2': 'Logement : options internes ou externes proches.',
      'cp.blog.a2.s1.li3': 'Dépenses quotidiennes : nourriture, transport, internet et besoins personnels.',
      'cp.blog.a2.s1.li4': 'Coûts avant voyage : billet, assurance et frais administratifs.',
      'cp.blog.a2.s2.title': '2) Comment réduire les coûts sans perdre en qualité',
      'cp.blog.a2.s2.li1': 'Choisissez un programme adapté à votre objectif réel.',
      'cp.blog.a2.s2.li2': 'Comparez les villes, pas seulement les instituts.',
      'cp.blog.a2.s2.li3': 'Fixez une durée réaliste selon votre niveau.',
      'cp.blog.a2.s2.li4': 'Profitez de recommandations basées sur des résultats réels d\'étudiants.',
      'cp.blog.a2.s3.title': '3) Exemple de structure de budget mensuel',
      'cp.blog.a2.s3.p1':
        'Divisez votre budget en trois parties : scolarité, logement et dépenses quotidiennes. Vous obtenez ainsi une fourchette minimale et moyenne claire avant l\'inscription.',
      'cp.blog.a2.s4.title': '4) Quand les Philippines sont-elles une meilleure option en valeur ?',
      'cp.blog.a2.s4.p1':
        'Souvent lorsque votre objectif est d\'améliorer la langue plus vite avec une étude intensive et un coût de vie gérable comparé à d\'autres destinations.',
      'cp.blog.a2.s5.title': '5) Prochaine étape',
      'cp.blog.a2.s5.p1':
        'Envoyez votre budget et votre objectif, et nous proposerons 2 à 3 instituts adaptés avec un coût détaillé avant de commencer.',
      'cp.blog.a2.cta1': 'Demander un plan budget et admission',
      'cp.blog.a2.cta2': 'Lire l\'article sur les meilleurs instituts',

      'cp.blog.a3.meta.title':
        'Meilleurs instituts de langue accrédités aux Philippines 2026 | Comment choisir le bon ? | YallaStudy',
      'cp.blog.a3.meta.description':
        'Apprenez à choisir le meilleur institut de langue accrédité aux Philippines selon la qualité du programme, le logement, la ville et le coût.',
      'cp.blog.a3.breadcrumb': 'Meilleurs instituts de langue accrédités aux Philippines',
      'cp.blog.a3.h1': 'Meilleurs instituts de langue accrédités : 7 critères avant l\'inscription',
      'cp.blog.a3.meta.updated': 'Mise à jour : 23 février 2026',
      'cp.blog.a3.meta.category': 'Catégorie : Choix de l\'institut',
      'cp.blog.a3.meta.audience': 'Public : Arabie saoudite, Yémen, Golfe',
      'cp.blog.a3.p1':
        'La vraie question n\'est pas le meilleur institut en général, mais celui qui convient à votre cas. La décision dépend de l\'objectif, du budget et de la durée.',
      'cp.blog.a3.s1.title': '1) Force du programme dont vous avez besoin',
      'cp.blog.a3.s1.p1':
        'Certains instituts sont plus forts en anglais général, d\'autres en IELTS ou en parcours académiques. Définissez d\'abord votre objectif.',
      'cp.blog.a3.s2.title': '2) Volume horaire et qualité du suivi',
      'cp.blog.a3.s2.li1': 'Vérifiez le nombre réel d\'heures d\'enseignement par semaine.',
      'cp.blog.a3.s2.li2': 'Demandez comment sont suivis les progrès et les rapports.',
      'cp.blog.a3.s2.li3': 'Examinez la taille des classes et le ratio étudiants.',
      'cp.blog.a3.s3.title': '3) Ville adaptée aux étudiants du Golfe',
      'cp.blog.a3.s3.p1':
        'Le choix de la ville influence le mode de vie, le coût et la concentration. Certaines villes conviennent mieux à une étude intensive, d\'autres à un cadre plus actif.',
      'cp.blog.a3.s4.title': '4) Logement et services d\'accompagnement',
      'cp.blog.a3.s4.li1': 'Options de logement interne et externe.',
      'cp.blog.a3.s4.li2': 'Niveau de sécurité et distance de l\'institut.',
      'cp.blog.a3.s4.li3': 'Disponibilité d\'internet et des services essentiels.',
      'cp.blog.a3.s5.title': '5) Coût total, pas seulement les frais de scolarité',
      'cp.blog.a3.s5.p1':
        'Comparer le coût mensuel complet donne une décision plus précise et évite les surprises après l\'arrivée.',
      'cp.blog.a3.s6.title': '6) Avis et expériences des étudiants',
      'cp.blog.a3.s6.p1':
        'Les avis sont utiles, mais il faut les lire selon vos objectifs, car une solution ne convient pas à tous.',
      'cp.blog.a3.s7.title': '7) Plan d\'admission clair avant paiement',
      'cp.blog.a3.s7.p1':
        'Ne commencez aucun processus sans plan écrit incluant programme, coût et calendrier d\'inscription.',
      'cp.blog.a3.cta1': 'Commencer l\'inscription dans le bon institut',
      'cp.blog.a3.cta2': 'Réserver une consultation de choix d\'institut',

      'cp.page.registration.meta.title': 'Inscription en institut de langue pour les Saoudiens | YallaStudy',
      'cp.page.registration.meta.description':
        'Accompagnement complet pour l inscription en instituts de langue aux Philippines pour les etudiants saoudiens.',
      'cp.page.registration.breadcrumb': 'Inscription en institut de langue pour les Saoudiens',
      'cp.page.registration.hero.title': 'Inscription en institut de langue pour les Saoudiens : methode claire des la premiere etape',
      'cp.page.registration.hero.lead':
        'YallaStudy organise tout le processus pour choisir le bon institut en comparant programme, cout et ville avant l admission finale.',
      'cp.page.registration.hero.cta1': 'Envoyer vos informations',
      'cp.page.registration.hero.cta2': 'Meilleurs instituts accredites',
      'cp.page.registration.card1.title': 'Avant l inscription, que verifier ?',
      'cp.page.registration.card1.li1': 'Objectif linguistique : voyage, universite, examen ou travail.',
      'cp.page.registration.card1.li2': 'Budget mensuel total (etudes + logement + depenses).',
      'cp.page.registration.card1.li3': 'Duree la plus adaptee pour atteindre le niveau vise.',
      'cp.page.registration.card2.title': 'Comparaison des instituts de langue',
      'cp.page.registration.card2.li1': 'Nombre reel d heures d enseignement par semaine.',
      'cp.page.registration.card2.li2': 'Type de logement interne ou externe.',
      'cp.page.registration.card2.li3': 'Ville adaptee aux etudiants du Golfe.',
      'cp.page.registration.card3.title': 'Resultat clair',
      'cp.page.registration.card3.p':
        'Vous recevez une liste courte d options pertinentes avec une recommandation finale adaptee a votre profil.',
      'cp.page.registration.highlight.title': 'Etapes pratiques d inscription',
      'cp.page.registration.highlight.li1': 'Choisir l institut et le programme les plus adaptes apres comparaison.',
      'cp.page.registration.highlight.li2': 'Verifier les documents et informations de base.',
      'cp.page.registration.highlight.li3': 'Envoyer la demande officiellement et suivre les reponses.',
      'cp.page.registration.highlight.li4': 'Recevoir l admission et preparer le plan de voyage.',
      'cp.page.registration.tag1': 'Inscription institut',
      'cp.page.registration.tag2': 'Etudiants saoudiens',
      'cp.page.registration.tag3': 'Instituts aux Philippines',
      'cp.page.registration.tag4': 'Admission etudes',
      'cp.page.registration.related.title': 'Liens associes',
      'cp.page.registration.related.link1': 'Etudier aux Philippines pour les Saoudiens',
      'cp.page.registration.related.link2': 'Admission linguistique aux Philippines',
      'cp.page.registration.related.link3': 'Conseil en admission',
      'cp.page.registration.related.link4': 'Voir les instituts sur la page d accueil',
      'cp.page.registration.faq.aria': 'Questions frequentes',
      'cp.page.registration.faq.q1': 'L inscription necessite t elle une presence sur place ?',
      'cp.page.registration.faq.a1':
        'Generalement non. La plupart des procedures peuvent etre faites a distance avec notre suivi.',
      'cp.page.registration.faq.q2': 'Y a t il une duree minimale d etudes ?',
      'cp.page.registration.faq.a2': 'La duree depend de l institut, mais beaucoup de programmes commencent a 4 semaines.',
      'cp.page.registration.faq.q3': 'Puis je changer d institut plus tard ?',
      'cp.page.registration.faq.a3':
        'C est possible selon la politique de l institut et le moment de la demande, et nous vous aidons a choisir.'
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
      'cp.blog.related.consulting': 'Consultoría de admisión',

      'cp.blog.a1.meta.title':
        'Estudiar inglés en Filipinas 2026 | Guía para estudiantes saudíes y yemeníes | YallaStudy',
      'cp.blog.a1.meta.description':
        'Guía completa para estudiar inglés en Filipinas: programas, duración, costos y pasos de admisión.',
      'cp.blog.a1.breadcrumb': 'Estudiar inglés en Filipinas',
      'cp.blog.a1.h1': 'Estudiar inglés en Filipinas 2026: guía práctica antes de registrarte',
      'cp.blog.a1.meta.updated': 'Actualizado: 23 de febrero de 2026',
      'cp.blog.a1.meta.category': 'Categoría: Estudiar en Filipinas',
      'cp.blog.a1.meta.audience': 'Público: Arabia Saudita, Yemen y Golfo',
      'cp.blog.a1.p1':
        'Estudiar inglés en Filipinas es una opción líder por su equilibrio entre calidad y costo. El resultado depende de elegir el programa y el instituto correctos desde el inicio.',
      'cp.blog.a1.s1.title': '1) ¿Qué tipos de programas de idioma hay?',
      'cp.blog.a1.s1.li1': 'Programa de inglés general para fortalecer habilidades base.',
      'cp.blog.a1.s1.li2': 'Programa intensivo con más horas diarias.',
      'cp.blog.a1.s1.li3': 'Ruta de preparación de exámenes como IELTS.',
      'cp.blog.a1.s1.li4': 'Programas de idioma académico para metas universitarias.',
      'cp.blog.a1.s2.title': '2) ¿Qué duración de estudio es adecuada?',
      'cp.blog.a1.s2.p1':
        'La duración depende de tu nivel actual. La mayoría de estudiantes necesita entre 3 y 6 meses para un avance claro. Si buscas una puntuación específica, el plan debe ser más preciso.',
      'cp.blog.a1.s3.title': '3) ¿Cómo eliges el instituto adecuado?',
      'cp.blog.a1.s3.li1': 'Evalúa la ruta exacta que necesitas (general, intensiva o académica).',
      'cp.blog.a1.s3.li2': 'Compara el costo total: matrícula + alojamiento + gastos mensuales.',
      'cp.blog.a1.s3.li3': 'Elige una ciudad que encaje con tu estilo de vida.',
      'cp.blog.a1.s3.li4': 'Confirma que exista seguimiento académico regular.',
      'cp.blog.a1.s4.title': '4) Errores comunes antes del registro',
      'cp.blog.a1.s4.li1': 'Elegir solo por precio.',
      'cp.blog.a1.s4.li2': 'Ignorar detalles de alojamiento y transporte.',
      'cp.blog.a1.s4.li3': 'Empezar sin una línea de tiempo clara.',
      'cp.blog.a1.s4.li4': 'Enviar un expediente de admisión incompleto.',
      'cp.blog.a1.s5.title': '5) ¿Cuál es el siguiente paso práctico?',
      'cp.blog.a1.s5.p1':
        'Empieza con una consulta rápida para definir el programa y el instituto más adecuados para tu caso. Luego preparamos tu expediente y hacemos seguimiento hasta la aceptación final.',
      'cp.blog.a1.cta1': 'Reservar consulta de admisión',
      'cp.blog.a1.cta2': 'Ver pasos de registro',

      'cp.blog.a2.meta.title':
        'Costo de estudio y vida en Filipinas 2026 | Guía de presupuesto para estudiantes del Golfo | YallaStudy',
      'cp.blog.a2.meta.description':
        'Comprende los costos de estudio y vida en Filipinas: matrícula, alojamiento, gastos mensuales y consejos prácticos de ahorro.',
      'cp.blog.a2.breadcrumb': 'Costo de estudio y vida en Filipinas',
      'cp.blog.a2.h1': 'Costo de estudio y vida en Filipinas 2026: cómo crear un presupuesto inteligente',
      'cp.blog.a2.meta.updated': 'Actualizado: 23 de febrero de 2026',
      'cp.blog.a2.meta.category': 'Categoría: Costos y presupuesto',
      'cp.blog.a2.meta.audience': 'Público: estudiantes saudíes, yemeníes y del Golfo',
      'cp.blog.a2.p1':
        'La pregunta principal es el costo real. Para evitar sorpresas, divide tu presupuesto en partidas claras antes del viaje.',
      'cp.blog.a2.s1.title': '1) Componentes principales del costo',
      'cp.blog.a2.s1.li1': 'Cuotas del instituto y del programa.',
      'cp.blog.a2.s1.li2': 'Alojamiento: opciones internas o externas cercanas.',
      'cp.blog.a2.s1.li3': 'Gastos diarios: comida, transporte, internet y necesidades personales.',
      'cp.blog.a2.s1.li4': 'Costos previos al viaje: boleto, seguro y cargos administrativos.',
      'cp.blog.a2.s2.title': '2) Cómo reducir costos sin perder calidad',
      'cp.blog.a2.s2.li1': 'Elige un programa alineado con tu objetivo real.',
      'cp.blog.a2.s2.li2': 'Compara ciudades, no solo institutos.',
      'cp.blog.a2.s2.li3': 'Define una duración realista según tu nivel.',
      'cp.blog.a2.s2.li4': 'Usa recomendaciones basadas en resultados reales de estudiantes.',
      'cp.blog.a2.s3.title': '3) Ejemplo de estructura de presupuesto mensual',
      'cp.blog.a2.s3.p1':
        'Divide el presupuesto en tres partes: matrícula, alojamiento y gastos diarios. Así tendrás un rango mínimo y promedio claro antes de inscribirte.',
      'cp.blog.a2.s4.title': '4) ¿Cuándo Filipinas es una opción de mejor valor?',
      'cp.blog.a2.s4.p1':
        'Normalmente cuando tu objetivo es mejorar más rápido el idioma con estudio intensivo y un costo de vida manejable frente a otros destinos.',
      'cp.blog.a2.s5.title': '5) Siguiente paso',
      'cp.blog.a2.s5.p1':
        'Envíanos tu presupuesto y objetivo, y te propondremos 2 o 3 institutos adecuados con un desglose claro de costos antes de empezar.',
      'cp.blog.a2.cta1': 'Solicitar plan de presupuesto y admisión',
      'cp.blog.a2.cta2': 'Leer artículo de mejores institutos',

      'cp.blog.a3.meta.title':
        'Mejores institutos acreditados de idiomas en Filipinas 2026 | ¿Cómo elegir el adecuado? | YallaStudy',
      'cp.blog.a3.meta.description':
        'Aprende a elegir el mejor instituto acreditado de idiomas en Filipinas según calidad del programa, alojamiento, ciudad y costo.',
      'cp.blog.a3.breadcrumb': 'Mejores institutos acreditados de idiomas en Filipinas',
      'cp.blog.a3.h1': 'Mejores institutos acreditados: 7 criterios antes del registro',
      'cp.blog.a3.meta.updated': 'Actualizado: 23 de febrero de 2026',
      'cp.blog.a3.meta.category': 'Categoría: Selección de instituto',
      'cp.blog.a3.meta.audience': 'Público: Arabia Saudita, Yemen y Golfo',
      'cp.blog.a3.p1':
        'La pregunta correcta no es cuál es el mejor instituto en general, sino cuál es el mejor para tu caso. La decisión depende de objetivo, presupuesto y duración.',
      'cp.blog.a3.s1.title': '1) Fortaleza del programa que necesitas',
      'cp.blog.a3.s1.p1':
        'Algunos institutos son más fuertes en inglés general y otros en IELTS o rutas académicas. Define tu objetivo primero.',
      'cp.blog.a3.s2.title': '2) Horas de estudio y calidad del seguimiento',
      'cp.blog.a3.s2.li1': 'Verifica las horas reales de enseñanza por semana.',
      'cp.blog.a3.s2.li2': 'Pregunta por el sistema de seguimiento del progreso y reportes.',
      'cp.blog.a3.s2.li3': 'Revisa tamaño de clase y proporción de estudiantes.',
      'cp.blog.a3.s3.title': '3) Ciudad adecuada para estudiantes del Golfo',
      'cp.blog.a3.s3.p1':
        'La ciudad impacta en estilo de vida, costo y concentración. Algunas ciudades son mejores para estudio intensivo y otras para un entorno más activo.',
      'cp.blog.a3.s4.title': '4) Alojamiento y servicios de apoyo',
      'cp.blog.a3.s4.li1': 'Opciones de alojamiento interno y externo.',
      'cp.blog.a3.s4.li2': 'Nivel de seguridad y distancia al instituto.',
      'cp.blog.a3.s4.li3': 'Disponibilidad de internet y servicios esenciales.',
      'cp.blog.a3.s5.title': '5) Costo total, no solo matrícula',
      'cp.blog.a3.s5.p1':
        'Comparar el costo mensual completo te da una decisión más precisa y evita sorpresas tras el viaje.',
      'cp.blog.a3.s6.title': '6) Reseñas y experiencias de estudiantes',
      'cp.blog.a3.s6.p1':
        'Las reseñas ayudan, pero deben evaluarse según tus objetivos, porque una solución no sirve para todos.',
      'cp.blog.a3.s7.title': '7) Plan de admisión claro antes de pagar',
      'cp.blog.a3.s7.p1':
        'No inicies ningún trámite sin un plan escrito que incluya programa, costo y cronograma de registro.',
      'cp.blog.a3.cta1': 'Iniciar registro en el instituto adecuado',
      'cp.blog.a3.cta2': 'Reservar consulta para elegir instituto',

      'cp.page.registration.meta.title': 'Registro en institutos de idioma para saudies | YallaStudy',
      'cp.page.registration.meta.description':
        'Acompanamiento completo para registrar estudiantes saudies en institutos de idioma en Filipinas.',
      'cp.page.registration.breadcrumb': 'Registro en institutos de idioma para saudies',
      'cp.page.registration.hero.title': 'Registro en institutos de idioma para saudies: proceso claro desde el inicio',
      'cp.page.registration.hero.lead':
        'YallaStudy organiza todo el proceso para elegir el instituto adecuado comparando programa, costo y ciudad antes de la admision final.',
      'cp.page.registration.hero.cta1': 'Envia tus datos ahora',
      'cp.page.registration.hero.cta2': 'Mejores institutos acreditados',
      'cp.page.registration.card1.title': 'Antes del registro, que revisamos?',
      'cp.page.registration.card1.li1': 'Tu objetivo de idioma: viaje, universidad, examen o trabajo.',
      'cp.page.registration.card1.li2': 'Presupuesto mensual total (estudio + vivienda + gastos).',
      'cp.page.registration.card1.li3': 'Duracion ideal para alcanzar el nivel requerido.',
      'cp.page.registration.card2.title': 'Comparacion de institutos de idioma',
      'cp.page.registration.card2.li1': 'Horas reales de clase por semana.',
      'cp.page.registration.card2.li2': 'Tipo de alojamiento interno o externo.',
      'cp.page.registration.card2.li3': 'Ciudad adecuada para estudiantes del Golfo.',
      'cp.page.registration.card3.title': 'Resultado claro',
      'cp.page.registration.card3.p':
        'Recibes una lista corta de opciones fuertes con una recomendacion final que se ajusta a tu perfil.',
      'cp.page.registration.highlight.title': 'Pasos practicos de registro',
      'cp.page.registration.highlight.li1': 'Elegir el instituto y programa mas adecuados despues de comparar.',
      'cp.page.registration.highlight.li2': 'Confirmar documentos y datos principales.',
      'cp.page.registration.highlight.li3': 'Enviar la solicitud oficialmente y hacer seguimiento.',
      'cp.page.registration.highlight.li4': 'Recibir la admision y organizar el plan de viaje.',
      'cp.page.registration.tag1': 'Registro de institutos',
      'cp.page.registration.tag2': 'Estudiantes saudies',
      'cp.page.registration.tag3': 'Institutos en Filipinas',
      'cp.page.registration.tag4': 'Admision academica',
      'cp.page.registration.related.title': 'Enlaces relacionados',
      'cp.page.registration.related.link1': 'Estudiar en Filipinas para estudiantes saudies',
      'cp.page.registration.related.link2': 'Admision de idioma en Filipinas',
      'cp.page.registration.related.link3': 'Consultoria de admision',
      'cp.page.registration.related.link4': 'Conoce los institutos en la pagina principal',
      'cp.page.registration.faq.aria': 'Preguntas frecuentes',
      'cp.page.registration.faq.q1': 'El registro requiere presencia personal?',
      'cp.page.registration.faq.a1':
        'Normalmente no. La mayoria de los tramites se completan a distancia con seguimiento continuo.',
      'cp.page.registration.faq.q2': 'Existe una duracion minima de estudio?',
      'cp.page.registration.faq.a2': 'La duracion depende del instituto, pero muchos programas empiezan desde 4 semanas.',
      'cp.page.registration.faq.q3': 'Puedo cambiar de instituto mas adelante?',
      'cp.page.registration.faq.a3':
        'Es posible segun la politica del instituto y el momento de la solicitud, y te ayudamos a evaluar la mejor opcion.'
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
      'cp.blog.related.consulting': 'Kabul danismanligi',

      'cp.blog.a1.meta.title':
        'Filipinlerde Ingilizce Egitimi 2026 | Suudi ve Yemenli Ogrenciler icin Rehber | YallaStudy',
      'cp.blog.a1.meta.description':
        'Filipinlerde Ingilizce egitimi icin kapsamli rehber: programlar, sure, maliyet ve kabul adimlari.',
      'cp.blog.a1.breadcrumb': 'Filipinlerde Ingilizce Egitimi',
      'cp.blog.a1.h1': 'Filipinlerde Ingilizce Egitimi 2026: Kayit oncesi pratik rehber',
      'cp.blog.a1.meta.updated': 'Guncelleme: 23 Subat 2026',
      'cp.blog.a1.meta.category': 'Kategori: Filipinlerde egitim',
      'cp.blog.a1.meta.audience': 'Hedef kitle: Suudi Arabistan, Yemen, Korfez',
      'cp.blog.a1.p1':
        'Filipinlerde Ingilizce egitimi, kalite ve maliyet dengesi nedeniyle en cok tercih edilen seceneklerden biridir. Sonuc, en basindan dogru program ve kurumu secmeye baglidir.',
      'cp.blog.a1.s1.title': '1) Hangi dil programi turleri mevcut?',
      'cp.blog.a1.s1.li1': 'Temel becerileri guclendiren genel Ingilizce programi.',
      'cp.blog.a1.s1.li2': 'Gunluk ders saatleri daha yuksek olan yogun program.',
      'cp.blog.a1.s1.li3': 'IELTS gibi sinavlara hazirlik rotasi.',
      'cp.blog.a1.s1.li4': 'Universite hedefleri icin akademik dil programlari.',
      'cp.blog.a1.s2.title': '2) Uygun egitim suresi nedir?',
      'cp.blog.a1.s2.p1':
        'Sure mevcut seviyene baglidir. Cogu ogrenci belirgin ilerleme icin 3 ile 6 ay arasi sureye ihtiyac duyar. Belirli bir sinav puani hedefleniyorsa planlama daha detayli olmalidir.',
      'cp.blog.a1.s3.title': '3) Dogru kurum nasil secilir?',
      'cp.blog.a1.s3.li1': 'Ihtiyacin olan programi net olarak degerlendir (genel, yogun, akademik).',
      'cp.blog.a1.s3.li2': 'Toplam maliyeti karsilastir: okul ucreti + konaklama + aylik giderler.',
      'cp.blog.a1.s3.li3': 'Yasam tarzina uygun bir sehir sec.',
      'cp.blog.a1.s3.li4': 'Duzenli akademik takip oldugunu dogrula.',
      'cp.blog.a1.s4.title': '4) Kayit oncesi yaygin hatalar',
      'cp.blog.a1.s4.li1': 'Sadece fiyata gore secim yapmak.',
      'cp.blog.a1.s4.li2': 'Konaklama ve ulasim detaylarini goz ardi etmek.',
      'cp.blog.a1.s4.li3': 'Net bir zaman plani olmadan baslamak.',
      'cp.blog.a1.s4.li4': 'Eksik kabul dosyasi gondermek.',
      'cp.blog.a1.s5.title': '5) Pratik olarak sonraki adim nedir?',
      'cp.blog.a1.s5.p1':
        'Durumuna uygun program ve kurumu belirlemek icin hizli bir danismanlikla basla. Ardindan dosyani hazirlayip nihai kabule kadar sureci takip ediyoruz.',
      'cp.blog.a1.cta1': 'Kabul danismanligi al',
      'cp.blog.a1.cta2': 'Kayit adimlarini gor',

      'cp.blog.a2.meta.title':
        'Filipinlerde Egitim ve Yasam Maliyeti 2026 | Korfez Ogrenci Butce Rehberi | YallaStudy',
      'cp.blog.a2.meta.description':
        'Filipinlerde egitim ve yasam maliyetlerini anlayin: okul ucretleri, konaklama, aylik giderler ve pratik tasarruf onerileri.',
      'cp.blog.a2.breadcrumb': 'Filipinlerde Egitim ve Yasam Maliyeti',
      'cp.blog.a2.h1': 'Filipinlerde Egitim ve Yasam Maliyeti 2026: Akilli butce nasil kurulur?',
      'cp.blog.a2.meta.updated': 'Guncelleme: 23 Subat 2026',
      'cp.blog.a2.meta.category': 'Kategori: Maliyet ve butce',
      'cp.blog.a2.meta.audience': 'Hedef kitle: Suudi, Yemenli ve Korfez ogrencileri',
      'cp.blog.a2.p1':
        'En onemli soru gercek maliyettir. Surprizlerle karsilasmamak icin butceni seyahat oncesinde net kalemlere ayir.',
      'cp.blog.a2.s1.title': '1) Ana maliyet kalemleri',
      'cp.blog.a2.s1.li1': 'Kurum ve program ucretleri.',
      'cp.blog.a2.s1.li2': 'Konaklama: kurum ici veya yakin kurum disi secenekler.',
      'cp.blog.a2.s1.li3': 'Gunluk giderler: yemek, ulasim, internet ve kisisel ihtiyaclar.',
      'cp.blog.a2.s1.li4': 'Seyahat oncesi giderler: bilet, sigorta ve idari ucretler.',
      'cp.blog.a2.s2.title': '2) Kaliteden odun vermeden maliyet nasil dusurulur?',
      'cp.blog.a2.s2.li1': 'Gercek hedefinle uyumlu bir program sec.',
      'cp.blog.a2.s2.li2': 'Sadece kurumu degil sehri de karsilastir.',
      'cp.blog.a2.s2.li3': 'Seviyene gore gercekci bir sure belirle.',
      'cp.blog.a2.s2.li4': 'Gercek ogrenci sonuclarina dayali onerilerden yararlan.',
      'cp.blog.a2.s3.title': '3) Ornek aylik butce yapisi',
      'cp.blog.a2.s3.p1':
        'Butceni uc bolume ayir: okul ucreti, konaklama ve gunluk giderler. Boylece kayit oncesinde net bir minimum ve ortalama aralik gorursun.',
      'cp.blog.a2.s4.title': '4) Filipinler ne zaman daha avantajli bir secenek olur?',
      'cp.blog.a2.s4.p1':
        'Genellikle hedefin yogun egitimle daha hizli dil gelisimi ve diger destinasyonlara gore yonetilebilir yasam maliyeti oldugunda.',
      'cp.blog.a2.s5.title': '5) Sonraki adim',
      'cp.blog.a2.s5.p1':
        'Butceni ve hedefini bize gonder; baslamadan once 2-3 uygun kurum ve net maliyet dagilimi onerecegiz.',
      'cp.blog.a2.cta1': 'Butce ve kabul plani iste',
      'cp.blog.a2.cta2': 'En iyi kurumlar makalesini oku',

      'cp.blog.a3.meta.title':
        'Filipinlerde En Iyi Akredite Dil Kurumlari 2026 | Dogru kurum nasil secilir? | YallaStudy',
      'cp.blog.a3.meta.description':
        'Program kalitesi, konaklama, sehir ve maliyete gore Filipinlerde en iyi akredite dil kurumunu nasil sececeginizi ogrenin.',
      'cp.blog.a3.breadcrumb': 'Filipinlerde En Iyi Akredite Dil Kurumlari',
      'cp.blog.a3.h1': 'En Iyi Akredite Dil Kurumlari: Kayit oncesi 7 kriter',
      'cp.blog.a3.meta.updated': 'Guncelleme: 23 Subat 2026',
      'cp.blog.a3.meta.category': 'Kategori: Kurum secimi',
      'cp.blog.a3.meta.audience': 'Hedef kitle: Suudi Arabistan, Yemen, Korfez',
      'cp.blog.a3.p1':
        'Dogru soru genel olarak en iyi kurum degil, senin durumun icin en uygun kurumdur. Karar hedefe, butceye ve sureye baglidir.',
      'cp.blog.a3.s1.title': '1) Ihtiyacin olan programin gucu',
      'cp.blog.a3.s1.p1':
        'Bazi kurumlar genel Ingilizcede, bazilari IELTS veya akademik rotalarda daha gucludur. Once hedefini netlestir.',
      'cp.blog.a3.s2.title': '2) Ders saati ve takip kalitesi',
      'cp.blog.a3.s2.li1': 'Haftalik gercek ogretim saatini dogrula.',
      'cp.blog.a3.s2.li2': 'Ilerleme takibi ve raporlama sistemini sor.',
      'cp.blog.a3.s2.li3': 'Sinif mevcudu ve ogrenci oranini incele.',
      'cp.blog.a3.s3.title': '3) Korfez ogrencileri icin uygun sehir',
      'cp.blog.a3.s3.p1':
        'Sehir secimi yasam tarzi, maliyet ve odagi etkiler. Bazi sehirler yogun egitim icin, bazilari daha hareketli bir ortam icin uygundur.',
      'cp.blog.a3.s4.title': '4) Konaklama ve destek hizmetleri',
      'cp.blog.a3.s4.li1': 'Kurum ici ve kurum disi konaklama secenekleri.',
      'cp.blog.a3.s4.li2': 'Guvenlik seviyesi ve kuruma uzaklik.',
      'cp.blog.a3.s4.li3': 'Internet ve temel hizmetlerin uygunlugu.',
      'cp.blog.a3.s5.title': '5) Sadece okul ucreti degil toplam maliyet',
      'cp.blog.a3.s5.p1':
        'Aylik toplam maliyeti karsilastirmak daha dogru karar verir ve varistan sonra surprizleri onler.',
      'cp.blog.a3.s6.title': '6) Yorumlar ve ogrenci deneyimleri',
      'cp.blog.a3.s6.p1':
        'Yorumlar faydalidir ancak kendi hedeflerinle birlikte degerlendirilmelidir; tek bir cozum herkese uymaz.',
      'cp.blog.a3.s7.title': '7) Odemeden once net kabul plani',
      'cp.blog.a3.s7.p1':
        'Program, maliyet ve kayit takvimini iceren yazili bir plan olmadan hicbir surece baslama.',
      'cp.blog.a3.cta1': 'Dogru kurumla kayda basla',
      'cp.blog.a3.cta2': 'Kurum secimi danismanligi al',

      'cp.page.registration.meta.title': 'Suudi ogrenciler icin dil kurumu kaydi | YallaStudy',
      'cp.page.registration.meta.description':
        'Suudi ogrenciler icin Filipinler dil kurumlarina kayit surecinde karsilastirma, evrak ve kabul destegi.',
      'cp.page.registration.breadcrumb': 'Suudi ogrenciler icin dil kurumu kaydi',
      'cp.page.registration.hero.title': 'Suudiler icin dil kurumu kaydi: ilk adimdan itibaren duzenli surec',
      'cp.page.registration.hero.lead':
        'YallaStudy, nihai kabule kadar program, maliyet ve sehir karsilastirmasi ile uygun kuruma kayit surecini yonetir.',
      'cp.page.registration.hero.cta1': 'Bilgilerini hemen gonder',
      'cp.page.registration.hero.cta2': 'En iyi akredite kurumlar',
      'cp.page.registration.card1.title': 'Kayit oncesi neyi kontrol ederiz?',
      'cp.page.registration.card1.li1': 'Dil hedefin: seyahat, universite, sinav veya is.',
      'cp.page.registration.card1.li2': 'Aylik toplam butce (egitim + konaklama + giderler).',
      'cp.page.registration.card1.li3': 'Hedef seviyeye ulasmak icin en uygun sure.',
      'cp.page.registration.card2.title': 'Dil kurumlarini karsilastirma',
      'cp.page.registration.card2.li1': 'Haftalik gercek ders saati.',
      'cp.page.registration.card2.li2': 'Yurt ici veya dis konaklama modeli.',
      'cp.page.registration.card2.li3': 'Korfez ogrencilerine uygun sehir secimi.',
      'cp.page.registration.card3.title': 'Net sonuc',
      'cp.page.registration.card3.p':
        'Karisiklik yerine profiline uygun net bir kisa liste ve nihai oneriyi alirsin.',
      'cp.page.registration.highlight.title': 'Pratik kayit adimlari',
      'cp.page.registration.highlight.li1': 'Karsilastirma sonrasi en uygun kurum ve programi sec.',
      'cp.page.registration.highlight.li2': 'Gerekli evraklari ve temel bilgileri dogrula.',
      'cp.page.registration.highlight.li3': 'Basvuruyu resmi olarak gonder ve sureci takip et.',
      'cp.page.registration.highlight.li4': 'Kabulu al ve seyahat planini duzenle.',
      'cp.page.registration.tag1': 'Kurum kaydi',
      'cp.page.registration.tag2': 'Suudi ogrenciler',
      'cp.page.registration.tag3': 'Filipinler kurumlari',
      'cp.page.registration.tag4': 'Akademik kabul',
      'cp.page.registration.related.title': 'Ilgili baglantilar',
      'cp.page.registration.related.link1': 'Suudi ogrenciler icin Filipinlerde egitim',
      'cp.page.registration.related.link2': 'Filipinlerde dil kabul sureci',
      'cp.page.registration.related.link3': 'Kabul danismanligi',
      'cp.page.registration.related.link4': 'Ana sayfada kurumlari incele',
      'cp.page.registration.faq.aria': 'Sik sorulan sorular',
      'cp.page.registration.faq.q1': 'Kayit icin yuz yuze bulunmak gerekir mi?',
      'cp.page.registration.faq.a1':
        'Genellikle hayir. Cogu islem uzaktan tamamlanir ve ekibimiz surekli takip eder.',
      'cp.page.registration.faq.q2': 'Asgari egitim suresi var mi?',
      'cp.page.registration.faq.a2': 'Sure kurum politikasina baglidir, ancak bircok program 4 haftadan baslar.',
      'cp.page.registration.faq.q3': 'Daha sonra kurum degistirebilir miyim?',
      'cp.page.registration.faq.a3':
        'Talep zamani ve kurum politikasina gore mumkun olabilir; en uygun secenegi birlikte degerlendiririz.'
    }
  };

  const servicePageTranslations = {
    en: {
      'cp.page.study.meta.title': 'Study in the Philippines for Saudi Students | Fast Admission | YallaStudy',
      'cp.page.study.meta.description':
        'Complete guide for Saudi students: language admission, institute registration, and academic programs in the Philippines with full support.',
      'cp.page.study.breadcrumb': 'Study in the Philippines',
      'cp.page.study.hero.title':
        'Study in the Philippines for Saudi Students: Faster Admission and Trusted Institutes',
      'cp.page.study.hero.lead':
        'If your goal is fast English improvement with a reasonable budget, studying in the Philippines is a practical option. YallaStudy supports you from first consultation to admission letter and travel plan.',
      'cp.page.study.hero.cta1': 'Start your admission request',
      'cp.page.study.hero.cta2': 'See study and living costs',
      'cp.page.study.card1.title': 'Why is studying in the Philippines a smart choice?',
      'cp.page.study.card1.li1': 'Intensive daily language programs for faster progress.',
      'cp.page.study.card1.li2': 'Lower study and living costs than many other destinations.',
      'cp.page.study.card1.li3': 'Flexible intake dates across most months of the year.',
      'cp.page.study.card2.title': 'How do we choose the right institute for you?',
      'cp.page.study.card2.li1':
        'Goal-based analysis: general English, IELTS preparation, or academic pathway.',
      'cp.page.study.card2.li2':
        'Compare housing, city, weekly study hours, and full total cost.',
      'cp.page.study.card2.li3': 'Receive a matching institute shortlist within 24 hours.',
      'cp.page.study.card3.title': 'Direct and fast follow-up',
      'cp.page.study.card3.p':
        'Our admission team follows up with you daily on WhatsApp until final admission is issued.',
      'cp.page.study.highlight.title': 'Admission steps to study in the Philippines',
      'cp.page.study.highlight.li1': 'Submit consultation form and define your study goal.',
      'cp.page.study.highlight.li2': 'Receive recommended institutes with full comparison.',
      'cp.page.study.highlight.li3': 'Prepare required documents and submit the application.',
      'cp.page.study.highlight.li4': 'Receive admission and continue support until arrival.',
      'cp.page.study.tag1': 'Study in the Philippines',
      'cp.page.study.tag2': 'Language admission',
      'cp.page.study.tag3': 'Study consulting',
      'cp.page.study.tag4': 'Saudi students',
      'cp.page.study.related.title': 'Related pages',
      'cp.page.study.related.link1': 'Language study admission in the Philippines',
      'cp.page.study.related.link2': 'Institute registration for Saudi students',
      'cp.page.study.related.link3': 'Academic language programs',
      'cp.page.study.related.link4': 'Admission consulting services',
      'cp.page.study.faq.aria': 'Frequently asked questions',
      'cp.page.study.faq.q1': 'How long does language institute admission usually take in the Philippines?',
      'cp.page.study.faq.a1': 'Usually between 3 and 7 business days after documents are complete.',
      'cp.page.study.faq.q2': 'Are your services only for Saudi students?',
      'cp.page.study.faq.a2':
        'Our main focus is Saudi Arabia, and we also serve UAE, Yemen, and GCC students.',
      'cp.page.study.faq.q3': 'Do you also support housing and arrival?',
      'cp.page.study.faq.a3':
        'Yes. We provide complete guidance for housing, arrival, and a stable study start.',

      'cp.page.language.meta.title':
        'Language Study Admission in the Philippines | Fast and Clear Process | YallaStudy',
      'cp.page.language.meta.description':
        'Get language program admission in the Philippines through a clear process: institute selection, document preparation, and full follow-up until acceptance.',
      'cp.page.language.breadcrumb': 'Language Study Admission in the Philippines',
      'cp.page.language.hero.title':
        'Language Study Admission in the Philippines Without Complexity and With Daily Follow-up',
      'cp.page.language.hero.lead':
        'We prepare a complete admission file matching institute requirements and follow up continuously until your acceptance letter is issued.',
      'cp.page.language.hero.cta1': 'Start your admission file',
      'cp.page.language.hero.cta2': 'See full registration steps',
      'cp.page.language.card1.title': 'What do we handle in your admission file?',
      'cp.page.language.card1.li1': 'Accurate review of all required documents before submission.',
      'cp.page.language.card1.li2': 'Format the application according to institute standards.',
      'cp.page.language.card1.li3': 'Daily follow-up to speed up acceptance issuance.',
      'cp.page.language.card2.title': 'Who is this pathway for?',
      'cp.page.language.card2.li1':
        'Saudi and GCC students who want fast and structured language progress.',
      'cp.page.language.card2.li2': 'Students who need a flexible start date.',
      'cp.page.language.card2.li3': 'Students who prefer clear Arabic support in each step.',
      'cp.page.language.card3.title': 'Typical timeline',
      'cp.page.language.card3.p':
        'Usually 3 to 7 business days after a complete file. Some institutes may take up to 10 days depending on season and volume.',
      'cp.page.language.highlight.title': 'Key elements of successful admission',
      'cp.page.language.highlight.li1':
        'Choose the right program for your level and final goal.',
      'cp.page.language.highlight.li2':
        'Upload all documents in the correct and organized format.',
      'cp.page.language.highlight.li3': 'Confirm housing details and intended start date.',
      'cp.page.language.highlight.li4':
        'Track acceptance issuance until final confirmation.',
      'cp.page.language.tag1': 'Language admission',
      'cp.page.language.tag2': 'Philippines institutes',
      'cp.page.language.tag3': 'Fast procedures',
      'cp.page.language.tag4': 'YallaStudy',
      'cp.page.language.related.title': 'Important links',
      'cp.page.language.related.link1': 'Study in the Philippines for Saudi students',
      'cp.page.language.related.link2': 'Admission consulting services',
      'cp.page.language.related.link3': 'Academic language programs',
      'cp.page.language.related.link4': 'Our services on the homepage',
      'cp.page.language.faq.aria': 'Frequently asked questions',
      'cp.page.language.faq.q1': 'Can I get language admission within one week?',
      'cp.page.language.faq.a1':
        'Yes. In many cases, admission is issued within one week if the file is complete.',
      'cp.page.language.faq.q2': 'Do you support students from Yemen and GCC countries?',
      'cp.page.language.faq.a2':
        'Yes. We serve Yemen, UAE, Kuwait, Qatar, Bahrain, and Oman based on seat availability.',
      'cp.page.language.faq.q3': 'Does the service include housing support?',
      'cp.page.language.faq.a3':
        'Yes. We provide housing options that fit your budget with first-arrival guidance.',

      'cp.page.academic.meta.title':
        'Academic Language Programs in the Philippines | IELTS and University Pathways | YallaStudy',
      'cp.page.academic.meta.description':
        'Explore academic language programs in the Philippines: IELTS preparation, academic writing, and university pathway support for Saudi and GCC students.',
      'cp.page.academic.breadcrumb': 'Academic Language Programs',
      'cp.page.academic.hero.title':
        'Academic Language Programs in the Philippines: From General English to University Preparation',
      'cp.page.academic.hero.lead':
        'After general English, students need a structured academic track. We help you select programs such as IELTS, academic writing, and university preparation.',
      'cp.page.academic.hero.cta1': 'Book academic program consultation',
      'cp.page.academic.hero.cta2': 'Read the language study guide',
      'cp.page.academic.card1.title': 'Most requested academic tracks',
      'cp.page.academic.card1.li1':
        'Intensive IELTS preparation with daily training on the four skills.',
      'cp.page.academic.card1.li2':
        'English for Academic Purposes for university and postgraduate goals.',
      'cp.page.academic.card1.li3':
        'Academic writing and presentations for sponsored students.',
      'cp.page.academic.card2.title': 'How do we define the right program?',
      'cp.page.academic.card2.li1': 'Assess your current level and target score.',
      'cp.page.academic.card2.li2':
        'Estimate realistic duration to reach the required outcome.',
      'cp.page.academic.card2.li3':
        'Select a strong institute in your required academic track.',
      'cp.page.academic.card3.title': 'Continuous support until outcome',
      'cp.page.academic.card3.p':
        'We follow your study plan and program updates with ongoing guidance to keep you on track and reach your goal.',
      'cp.page.academic.highlight.title': 'When should you choose an academic program?',
      'cp.page.academic.highlight.li1':
        'When targeting university admission or a specific IELTS score.',
      'cp.page.academic.highlight.li2':
        'When you need academic writing and presentation skills in English.',
      'cp.page.academic.highlight.li3':
        'When moving quickly from general English to advanced level.',
      'cp.page.academic.highlight.li4':
        'When you have a near university deadline and need focused preparation.',
      'cp.page.academic.tag1': 'Academic programs',
      'cp.page.academic.tag2': 'IELTS',
      'cp.page.academic.tag3': 'University prep',
      'cp.page.academic.tag4': 'Philippines',
      'cp.page.academic.related.title': 'Related content',
      'cp.page.academic.related.link1': 'Study in the Philippines',
      'cp.page.academic.related.link2': 'Language study admission',
      'cp.page.academic.related.link3': 'Admission consulting',
      'cp.page.academic.related.link4': 'Language institutes on homepage',
      'cp.page.academic.faq.aria': 'Frequently asked questions',
      'cp.page.academic.faq.q1':
        'Can I move from general to academic program in the same institute?',
      'cp.page.academic.faq.a1':
        'In many institutes yes, depending on your level and available seats.',
      'cp.page.academic.faq.q2': 'How long are intensive IELTS programs?',
      'cp.page.academic.faq.a2':
        'Usually 8 to 16 weeks depending on entry level and target score.',
      'cp.page.academic.faq.q3': 'Are these programs suitable for GCC and Yemeni students?',
      'cp.page.academic.faq.a3':
        'Yes. We recommend suitable tracks for students from Saudi Arabia, Yemen, UAE, and the GCC.',

      'cp.page.consulting.meta.title':
        'Admission Consulting Services | Language and Academic Programs | YallaStudy',
      'cp.page.consulting.meta.description':
        'Admission consulting for Saudi and GCC students: profile evaluation, institute selection, file preparation, and full follow-up until acceptance in the Philippines.',
      'cp.page.consulting.breadcrumb': 'Admission Consulting Services',
      'cp.page.consulting.hero.title':
        'Admission Consulting: A Clear Plan from First Step to Final Acceptance',
      'cp.page.consulting.hero.lead':
        'The right consultation saves time and cost. At YallaStudy, we analyze your case, define the best program, and map a practical route to secure admission.',
      'cp.page.consulting.hero.cta1': 'Book your free session',
      'cp.page.consulting.hero.cta2': 'Study in the Philippines page',
      'cp.page.consulting.card1.title': 'What happens during the consultation?',
      'cp.page.consulting.card1.li1': 'Evaluate current level and final study target.',
      'cp.page.consulting.card1.li2':
        'Define the best destination and program in timeline and budget.',
      'cp.page.consulting.card1.li3': 'Clear execution plan with submission timeline.',
      'cp.page.consulting.card2.title': 'Consultation value for students',
      'cp.page.consulting.card2.li1':
        'Avoid costly wrong choices in institute or program.',
      'cp.page.consulting.card2.li2':
        'Reduce delays caused by incomplete documents.',
      'cp.page.consulting.card2.li3': 'Improve fast-acceptance chances from first submission.',
      'cp.page.consulting.card3.title': 'Who is this service for?',
      'cp.page.consulting.card3.p':
        'Suitable for new students, for switching between general and academic tracks, and for parents seeking a safe and clear decision.',
      'cp.page.consulting.highlight.title': 'Consultation result within 24 hours',
      'cp.page.consulting.highlight.li1': 'Shortlist of options that truly fit.',
      'cp.page.consulting.highlight.li2':
        'Final recommendation by priorities: cost, quality, and duration.',
      'cp.page.consulting.highlight.li3':
        'Written admission plan with actionable steps you can start immediately.',
      'cp.page.consulting.highlight.li4':
        'Continuous WhatsApp support throughout your admission journey.',
      'cp.page.consulting.tag1': 'Study consultation',
      'cp.page.consulting.tag2': 'Fast admission',
      'cp.page.consulting.tag3': 'Study in Philippines',
      'cp.page.consulting.tag4': 'GCC students',
      'cp.page.consulting.related.title': 'Useful references',
      'cp.page.consulting.related.link1': 'Language study admission in the Philippines',
      'cp.page.consulting.related.link2': 'Institute registration for Saudi students',
      'cp.page.consulting.related.link3': 'Academic language programs',
      'cp.page.consulting.related.link4': 'Explore our core services',
      'cp.page.consulting.faq.aria': 'Frequently asked questions',
      'cp.page.consulting.faq.q1': 'Is the consultation fully free?',
      'cp.page.consulting.faq.a1':
        'Yes. The first consultation is free and includes initial diagnosis with suitable options.',
      'cp.page.consulting.faq.q2': 'Can the full process be done remotely?',
      'cp.page.consulting.faq.a2':
        'Yes. Most admission and registration steps are completed online with direct follow-up.',
      'cp.page.consulting.faq.q3': 'Do you provide support after admission is issued?',
      'cp.page.consulting.faq.a3':
        'Yes. We provide housing, arrival support, and first-start guidance in the study city.'
    },
    fr: {
      'cp.page.study.meta.title':
        'Etudier aux Philippines pour les Saoudiens | Admission rapide | YallaStudy',
      'cp.page.study.meta.description':
        'Guide complet pour les etudiants saoudiens: admission linguistique, inscription en institut et programmes academiques aux Philippines.',
      'cp.page.study.breadcrumb': 'Etudier aux Philippines',
      'cp.page.study.hero.title':
        'Etudier aux Philippines pour les Saoudiens: admission plus rapide et instituts fiables',
      'cp.page.study.hero.lead':
        'Si votre objectif est de progresser vite en anglais avec un budget raisonnable, les Philippines sont une option pratique. YallaStudy vous accompagne de la consultation jusqu a l admission et au plan de voyage.',
      'cp.page.study.hero.cta1': 'Commencer la demande d admission',
      'cp.page.study.hero.cta2': 'Voir les couts etudes et vie',
      'cp.page.study.card1.title': 'Pourquoi les Philippines sont un choix intelligent ?',
      'cp.page.study.card1.li1': 'Programmes intensifs quotidiens pour progresser plus vite.',
      'cp.page.study.card1.li2': 'Couts d etudes et de vie plus bas que beaucoup de destinations.',
      'cp.page.study.card1.li3': 'Dates de debut flexibles pendant la plupart des mois.',
      'cp.page.study.card2.title': 'Comment choisissons-nous l institut adapte ?',
      'cp.page.study.card2.li1':
        'Analyse de l objectif: anglais general, preparation IELTS ou parcours academique.',
      'cp.page.study.card2.li2':
        'Comparaison logement, ville, heures hebdomadaires et cout total.',
      'cp.page.study.card2.li3': 'Liste d instituts adaptes sous 24 heures.',
      'cp.page.study.card3.title': 'Suivi direct et rapide',
      'cp.page.study.card3.p':
        'Notre equipe de suivi vous accompagne chaque jour via WhatsApp jusqu a l admission finale.',
      'cp.page.study.highlight.title': 'Etapes d admission pour etudier aux Philippines',
      'cp.page.study.highlight.li1':
        'Remplir le formulaire de consultation et definir l objectif d etude.',
      'cp.page.study.highlight.li2': 'Recevoir une liste d instituts recommandes avec comparaison.',
      'cp.page.study.highlight.li3': 'Preparer les documents et envoyer la demande.',
      'cp.page.study.highlight.li4': 'Recevoir l admission et continuer le suivi jusqu a l arrivee.',
      'cp.page.study.tag1': 'Etudes aux Philippines',
      'cp.page.study.tag2': 'Admission linguistique',
      'cp.page.study.tag3': 'Conseil etudes',
      'cp.page.study.tag4': 'Etudiants saoudiens',
      'cp.page.study.related.title': 'Pages associees',
      'cp.page.study.related.link1': 'Admission en cours de langue aux Philippines',
      'cp.page.study.related.link2': 'Inscription en instituts pour Saoudiens',
      'cp.page.study.related.link3': 'Programmes academiques de langue',
      'cp.page.study.related.link4': 'Conseil en admission',
      'cp.page.study.faq.aria': 'Questions frequentes',
      'cp.page.study.faq.q1':
        'Combien de temps prend l admission en institut de langue aux Philippines ?',
      'cp.page.study.faq.a1': 'En general entre 3 et 7 jours ouvrables apres dossier complet.',
      'cp.page.study.faq.q2': 'Vos services sont-ils uniquement pour les Saoudiens ?',
      'cp.page.study.faq.a2':
        'Notre focus principal est l Arabie saoudite, et nous servons aussi les etudiants du Golfe et du Yemen.',
      'cp.page.study.faq.q3': 'Proposez-vous aussi un support logement et arrivee ?',
      'cp.page.study.faq.a3':
        'Oui, nous fournissons un accompagnement complet pour logement, arrivee et debut stable.',

      'cp.page.language.meta.title':
        'Admission en cours de langue aux Philippines | Processus rapide | YallaStudy',
      'cp.page.language.meta.description':
        'Obtenez une admission linguistique aux Philippines via un processus clair: choix de l institut, preparation des documents et suivi jusqu a l acceptation.',
      'cp.page.language.breadcrumb': 'Admission en cours de langue aux Philippines',
      'cp.page.language.hero.title':
        'Admission en cours de langue aux Philippines sans complexite et avec suivi quotidien',
      'cp.page.language.hero.lead':
        'Nous preparons un dossier complet conforme aux exigences de l institut et assurons un suivi continu jusqu a la lettre d admission.',
      'cp.page.language.hero.cta1': 'Commencer votre dossier',
      'cp.page.language.hero.cta2': 'Voir les etapes completes',
      'cp.page.language.card1.title': 'Que faisons-nous dans votre dossier ?',
      'cp.page.language.card1.li1': 'Revision precise des documents avant envoi.',
      'cp.page.language.card1.li2': 'Mise en forme de la demande selon les standards.',
      'cp.page.language.card1.li3': 'Suivi quotidien pour accelerer l admission.',
      'cp.page.language.card2.title': 'Pour qui ce parcours convient-il ?',
      'cp.page.language.card2.li1':
        'Etudiants saoudiens et du Golfe qui veulent progresser rapidement.',
      'cp.page.language.card2.li2': 'Etudiants ayant besoin d une date de debut flexible.',
      'cp.page.language.card2.li3': 'Etudiants preferant un accompagnement arabe clair.',
      'cp.page.language.card3.title': 'Delai des procedures',
      'cp.page.language.card3.p':
        'En general 3 a 7 jours ouvrables apres dossier complet. Certains instituts peuvent aller jusqu a 10 jours selon la saison.',
      'cp.page.language.highlight.title': 'Elements d une admission reussie',
      'cp.page.language.highlight.li1':
        'Choisir un programme adapte au niveau actuel et a l objectif final.',
      'cp.page.language.highlight.li2':
        'Televerser tous les documents au format correct et organise.',
      'cp.page.language.highlight.li3': 'Confirmer logement et date de debut souhaitee.',
      'cp.page.language.highlight.li4':
        'Suivre l emission de l admission jusqu a confirmation finale.',
      'cp.page.language.tag1': 'Admission linguistique',
      'cp.page.language.tag2': 'Instituts Philippines',
      'cp.page.language.tag3': 'Procedure rapide',
      'cp.page.language.tag4': 'YallaStudy',
      'cp.page.language.related.title': 'Liens importants',
      'cp.page.language.related.link1': 'Etudier aux Philippines pour Saoudiens',
      'cp.page.language.related.link2': 'Conseil en admission',
      'cp.page.language.related.link3': 'Programmes academiques de langue',
      'cp.page.language.related.link4': 'Nos services sur la page d accueil',
      'cp.page.language.faq.aria': 'Questions frequentes',
      'cp.page.language.faq.q1': 'Peut-on obtenir une admission en une semaine ?',
      'cp.page.language.faq.a1':
        'Oui, dans de nombreux cas l admission sort en une semaine si le dossier est complet.',
      'cp.page.language.faq.q2': 'Acceptez-vous les etudiants du Yemen et du Golfe ?',
      'cp.page.language.faq.a2':
        'Oui, nous servons Yemen, EAU, Koweit, Qatar, Bahrein et Oman selon disponibilite.',
      'cp.page.language.faq.q3': 'Le service inclut-il le logement ?',
      'cp.page.language.faq.a3':
        'Oui, nous proposons des options de logement adaptees au budget avec conseils d arrivee.',

      'cp.page.academic.meta.title':
        'Programmes de langue academique aux Philippines | IELTS et parcours universitaire | YallaStudy',
      'cp.page.academic.meta.description':
        'Decouvrez les programmes de langue academique aux Philippines: preparation IELTS, ecriture academique et parcours universitaire.',
      'cp.page.academic.breadcrumb': 'Programmes de langue academique',
      'cp.page.academic.hero.title':
        'Programmes de langue academique aux Philippines: du niveau general a la preparation universitaire',
      'cp.page.academic.hero.lead':
        'Apres l anglais general, l etudiant a besoin d un parcours academique structure. Nous vous aidons a choisir IELTS, ecriture academique et preparation universitaire.',
      'cp.page.academic.hero.cta1': 'Reserver une consultation academique',
      'cp.page.academic.hero.cta2': 'Lire le guide de langue',
      'cp.page.academic.card1.title': 'Parcours academiques les plus demandes',
      'cp.page.academic.card1.li1':
        'Preparation IELTS intensive avec entrainement quotidien des 4 competences.',
      'cp.page.academic.card1.li2':
        'English for Academic Purposes pour universite et etudes superieures.',
      'cp.page.academic.card1.li3':
        'Parcours ecriture et presentations academiques pour etudiants boursiers.',
      'cp.page.academic.card2.title': 'Comment definir le programme adapte ?',
      'cp.page.academic.card2.li1': 'Evaluer le niveau actuel et le score cible.',
      'cp.page.academic.card2.li2':
        'Estimer la duree realiste pour atteindre le resultat requis.',
      'cp.page.academic.card2.li3':
        'Choisir un institut fort dans le parcours academique voulu.',
      'cp.page.academic.card3.title': 'Suivi continu jusqu au resultat',
      'cp.page.academic.card3.p':
        'Nous suivons votre plan d etudes et les mises a jour du programme avec orientation continue.',
      'cp.page.academic.highlight.title': 'Quand choisir un programme academique ?',
      'cp.page.academic.highlight.li1':
        'Quand vous ciblez une admission universitaire ou un score IELTS precis.',
      'cp.page.academic.highlight.li2':
        'Quand vous avez besoin de redaction et presentations academiques en anglais.',
      'cp.page.academic.highlight.li3':
        'Quand vous voulez passer rapidement du niveau general au niveau avance.',
      'cp.page.academic.highlight.li4':
        'Quand vous avez une date universitaire proche et besoin d une preparation ciblee.',
      'cp.page.academic.tag1': 'Programmes academiques',
      'cp.page.academic.tag2': 'IELTS',
      'cp.page.academic.tag3': 'Preparation universitaire',
      'cp.page.academic.tag4': 'Philippines',
      'cp.page.academic.related.title': 'Contenu associe',
      'cp.page.academic.related.link1': 'Etudier aux Philippines',
      'cp.page.academic.related.link2': 'Admission en cours de langue',
      'cp.page.academic.related.link3': 'Conseil en admission',
      'cp.page.academic.related.link4': 'Instituts de langue sur la page d accueil',
      'cp.page.academic.faq.aria': 'Questions frequentes',
      'cp.page.academic.faq.q1':
        'Peut-on passer du programme general au programme academique dans le meme institut ?',
      'cp.page.academic.faq.a1':
        'Dans de nombreux instituts oui, selon le niveau et la disponibilite des places.',
      'cp.page.academic.faq.q2': 'Quelle est la duree des programmes IELTS intensifs ?',
      'cp.page.academic.faq.a2':
        'Habituellement de 8 a 16 semaines selon niveau initial et score cible.',
      'cp.page.academic.faq.q3':
        'Ces programmes conviennent-ils aux etudiants du Golfe et du Yemen ?',
      'cp.page.academic.faq.a3':
        'Oui, nous recommandons des parcours adaptes aux etudiants saoudiens, yemenites, emiratis et du Golfe.',

      'cp.page.consulting.meta.title':
        'Conseil en admission | Programmes de langue et academiques | YallaStudy',
      'cp.page.consulting.meta.description':
        'Conseil en admission pour etudiants saoudiens et du Golfe: evaluation du profil, choix de l institut, preparation du dossier et suivi jusqu a l admission.',
      'cp.page.consulting.breadcrumb': 'Conseil en admission',
      'cp.page.consulting.hero.title':
        'Conseil en admission: un plan clair de la premiere etape a l admission finale',
      'cp.page.consulting.hero.lead':
        'La bonne consultation economise temps et cout. YallaStudy analyse votre cas, definit le programme adapte et construit une route pratique vers l admission.',
      'cp.page.consulting.hero.cta1': 'Reserver la session gratuite',
      'cp.page.consulting.hero.cta2': 'Page etudier aux Philippines',
      'cp.page.consulting.card1.title': 'Que se passe-t-il pendant la consultation ?',
      'cp.page.consulting.card1.li1': 'Evaluation du niveau actuel et de l objectif final.',
      'cp.page.consulting.card1.li2':
        'Definition de la destination et du programme adaptes au temps et au budget.',
      'cp.page.consulting.card1.li3': 'Plan d execution clair avec calendrier de soumission.',
      'cp.page.consulting.card2.title': 'Valeur de la consultation pour l etudiant',
      'cp.page.consulting.card2.li1': 'Eviter des choix couteux et inadaptes.',
      'cp.page.consulting.card2.li2':
        'Reduire les retards causes par des documents incomplets.',
      'cp.page.consulting.card2.li3': 'Ameliorer les chances d admission rapide.',
      'cp.page.consulting.card3.title': 'Pour qui ce service convient-il ?',
      'cp.page.consulting.card3.p':
        'Convient aux nouveaux etudiants, a ceux qui changent de parcours et aux parents cherchant une decision sure et claire.',
      'cp.page.consulting.highlight.title': 'Resultat de la consultation en 24 heures',
      'cp.page.consulting.highlight.li1': 'Liste courte d options vraiment adaptees.',
      'cp.page.consulting.highlight.li2':
        'Recommandation finale selon les priorites: cout, qualite et duree.',
      'cp.page.consulting.highlight.li3':
        'Plan d admission ecrit avec etapes actionnables immediates.',
      'cp.page.consulting.highlight.li4':
        'Support continu via WhatsApp pendant tout le parcours.',
      'cp.page.consulting.tag1': 'Conseil etudes',
      'cp.page.consulting.tag2': 'Admission rapide',
      'cp.page.consulting.tag3': 'Etudes Philippines',
      'cp.page.consulting.tag4': 'Etudiants du Golfe',
      'cp.page.consulting.related.title': 'References utiles',
      'cp.page.consulting.related.link1': 'Admission en cours de langue aux Philippines',
      'cp.page.consulting.related.link2': 'Inscription en instituts pour Saoudiens',
      'cp.page.consulting.related.link3': 'Programmes academiques de langue',
      'cp.page.consulting.related.link4': 'Decouvrir nos services principaux',
      'cp.page.consulting.faq.aria': 'Questions frequentes',
      'cp.page.consulting.faq.q1': 'La consultation est-elle totalement gratuite ?',
      'cp.page.consulting.faq.a1':
        'Oui, la premiere consultation est gratuite avec diagnostic initial et options adaptees.',
      'cp.page.consulting.faq.q2': 'Peut-on faire tout le processus a distance ?',
      'cp.page.consulting.faq.a2':
        'Oui, la plupart des etapes se font en ligne avec un suivi direct.',
      'cp.page.consulting.faq.q3': 'Y a-t-il un suivi apres l admission ?',
      'cp.page.consulting.faq.a3':
        'Oui, nous proposons support logement, arrivee et conseils de demarrage dans la ville etudiante.'
    },
    es: {
      'cp.page.study.meta.title':
        'Estudiar en Filipinas para saudies | Admision rapida | YallaStudy',
      'cp.page.study.meta.description':
        'Guia completa para estudiantes saudies: admision de idioma, registro en institutos y programas academicos en Filipinas.',
      'cp.page.study.breadcrumb': 'Estudiar en Filipinas',
      'cp.page.study.hero.title':
        'Estudiar en Filipinas para saudies: admision mas rapida e institutos confiables',
      'cp.page.study.hero.lead':
        'Si tu objetivo es mejorar el ingles rapidamente con un costo razonable, Filipinas es una opcion practica. YallaStudy te acompana desde la consulta hasta la carta de admision y plan de viaje.',
      'cp.page.study.hero.cta1': 'Inicia tu solicitud de admision',
      'cp.page.study.hero.cta2': 'Ver costos de estudio y vida',
      'cp.page.study.card1.title': 'Por que estudiar en Filipinas es una decision inteligente?',
      'cp.page.study.card1.li1': 'Programas intensivos diarios para avanzar mas rapido.',
      'cp.page.study.card1.li2': 'Costos de estudio y vida mas bajos que muchos destinos.',
      'cp.page.study.card1.li3': 'Fechas de inicio flexibles durante la mayor parte del ano.',
      'cp.page.study.card2.title': 'Como elegimos el instituto adecuado para ti?',
      'cp.page.study.card2.li1':
        'Analisis por objetivo: ingles general, preparacion IELTS o via academica.',
      'cp.page.study.card2.li2':
        'Comparar vivienda, ciudad, horas semanales y costo total completo.',
      'cp.page.study.card2.li3': 'Lista corta de institutos adecuados en 24 horas.',
      'cp.page.study.card3.title': 'Seguimiento directo y rapido',
      'cp.page.study.card3.p':
        'Nuestro equipo de admision te da seguimiento diario por WhatsApp hasta la admision final.',
      'cp.page.study.highlight.title': 'Pasos de admision para estudiar en Filipinas',
      'cp.page.study.highlight.li1': 'Completar formulario de consulta y definir objetivo.',
      'cp.page.study.highlight.li2': 'Recibir lista de institutos recomendados con comparacion.',
      'cp.page.study.highlight.li3': 'Preparar documentos y enviar la solicitud.',
      'cp.page.study.highlight.li4': 'Recibir admision y continuar seguimiento hasta llegada.',
      'cp.page.study.tag1': 'Estudiar en Filipinas',
      'cp.page.study.tag2': 'Admision de idioma',
      'cp.page.study.tag3': 'Consultoria educativa',
      'cp.page.study.tag4': 'Estudiantes saudies',
      'cp.page.study.related.title': 'Paginas relacionadas',
      'cp.page.study.related.link1': 'Admision para estudiar idioma en Filipinas',
      'cp.page.study.related.link2': 'Registro en institutos para saudies',
      'cp.page.study.related.link3': 'Programas academicos de idioma',
      'cp.page.study.related.link4': 'Consultoria de admision',
      'cp.page.study.faq.aria': 'Preguntas frecuentes',
      'cp.page.study.faq.q1':
        'Cuanto tarda normalmente la admision en un instituto de idioma en Filipinas?',
      'cp.page.study.faq.a1':
        'Generalmente entre 3 y 7 dias habiles despues de completar el expediente.',
      'cp.page.study.faq.q2': 'Sus servicios son solo para estudiantes saudies?',
      'cp.page.study.faq.a2':
        'Nuestro enfoque principal es Arabia Saudita, y tambien atendemos EAU, Yemen y paises del Golfo.',
      'cp.page.study.faq.q3': 'Tambien apoyan con vivienda y llegada?',
      'cp.page.study.faq.a3':
        'Si. Ofrecemos orientacion completa para vivienda, llegada y un inicio estable.',

      'cp.page.language.meta.title':
        'Admision de idioma en Filipinas | Proceso rapido y claro | YallaStudy',
      'cp.page.language.meta.description':
        'Consigue admision de idioma en Filipinas con un proceso claro: seleccion de instituto, preparacion de documentos y seguimiento hasta la aceptacion.',
      'cp.page.language.breadcrumb': 'Admision de idioma en Filipinas',
      'cp.page.language.hero.title':
        'Admision de idioma en Filipinas sin complicaciones y con seguimiento diario',
      'cp.page.language.hero.lead':
        'Preparamos un expediente completo segun requisitos del instituto y damos seguimiento continuo hasta la carta de aceptacion.',
      'cp.page.language.hero.cta1': 'Inicia tu expediente de admision',
      'cp.page.language.hero.cta2': 'Ver pasos completos de registro',
      'cp.page.language.card1.title': 'Que hacemos en tu expediente de admision?',
      'cp.page.language.card1.li1': 'Revision precisa de documentos antes del envio.',
      'cp.page.language.card1.li2': 'Formato de solicitud segun estandares del instituto.',
      'cp.page.language.card1.li3': 'Seguimiento diario para acelerar la aceptacion.',
      'cp.page.language.card2.title': 'Para quien es esta ruta?',
      'cp.page.language.card2.li1':
        'Estudiantes saudies y del Golfo que buscan progreso rapido.',
      'cp.page.language.card2.li2': 'Quienes necesitan fecha de inicio flexible.',
      'cp.page.language.card2.li3': 'Quienes prefieren apoyo arabe claro en cada paso.',
      'cp.page.language.card3.title': 'Duracion del proceso',
      'cp.page.language.card3.p':
        'Normalmente de 3 a 7 dias habiles tras expediente completo. Algunos institutos pueden tardar hasta 10 dias segun temporada.',
      'cp.page.language.highlight.title': 'Elementos de una admision exitosa',
      'cp.page.language.highlight.li1':
        'Elegir el programa adecuado segun nivel actual y objetivo final.',
      'cp.page.language.highlight.li2':
        'Subir todos los documentos en formato correcto y ordenado.',
      'cp.page.language.highlight.li3': 'Confirmar vivienda y fecha prevista de inicio.',
      'cp.page.language.highlight.li4':
        'Hacer seguimiento de la admision hasta la confirmacion final.',
      'cp.page.language.tag1': 'Admision de idioma',
      'cp.page.language.tag2': 'Institutos en Filipinas',
      'cp.page.language.tag3': 'Proceso rapido',
      'cp.page.language.tag4': 'YallaStudy',
      'cp.page.language.related.title': 'Enlaces importantes',
      'cp.page.language.related.link1': 'Estudiar en Filipinas para saudies',
      'cp.page.language.related.link2': 'Consultoria de admision',
      'cp.page.language.related.link3': 'Programas academicos de idioma',
      'cp.page.language.related.link4': 'Nuestros servicios en la pagina principal',
      'cp.page.language.faq.aria': 'Preguntas frecuentes',
      'cp.page.language.faq.q1': 'Se puede obtener admision en una semana?',
      'cp.page.language.faq.a1':
        'Si. En muchos casos la admision sale en una semana si el expediente esta completo.',
      'cp.page.language.faq.q2': 'Atienden estudiantes de Yemen y del Golfo?',
      'cp.page.language.faq.a2':
        'Si, atendemos Yemen, EAU, Kuwait, Qatar, Barein y Oman segun disponibilidad.',
      'cp.page.language.faq.q3': 'El servicio incluye apoyo de vivienda?',
      'cp.page.language.faq.a3':
        'Si. Ofrecemos opciones de vivienda segun presupuesto y orientacion inicial.',

      'cp.page.academic.meta.title':
        'Programas de idioma academico en Filipinas | IELTS y ruta universitaria | YallaStudy',
      'cp.page.academic.meta.description':
        'Descubre programas de idioma academico en Filipinas: preparacion IELTS, escritura academica y ruta universitaria.',
      'cp.page.academic.breadcrumb': 'Programas de idioma academico',
      'cp.page.academic.hero.title':
        'Programas de idioma academico en Filipinas: del nivel general a la preparacion universitaria',
      'cp.page.academic.hero.lead':
        'Despues del ingles general, el estudiante necesita una ruta academica clara. Te ayudamos a elegir IELTS, escritura academica y preparacion universitaria.',
      'cp.page.academic.hero.cta1': 'Reserva consulta de programas academicos',
      'cp.page.academic.hero.cta2': 'Leer guia de estudio de idioma',
      'cp.page.academic.card1.title': 'Rutas academicas mas solicitadas',
      'cp.page.academic.card1.li1':
        'Preparacion intensiva IELTS con practica diaria de cuatro habilidades.',
      'cp.page.academic.card1.li2':
        'English for Academic Purposes para universidad y posgrado.',
      'cp.page.academic.card1.li3':
        'Ruta de escritura y presentaciones academicas para becarios.',
      'cp.page.academic.card2.title': 'Como definimos el programa adecuado?',
      'cp.page.academic.card2.li1': 'Medir nivel actual y definir puntaje objetivo.',
      'cp.page.academic.card2.li2':
        'Estimar duracion realista para alcanzar el resultado requerido.',
      'cp.page.academic.card2.li3':
        'Elegir instituto fuerte en la ruta academica requerida.',
      'cp.page.academic.card3.title': 'Seguimiento continuo hasta el resultado',
      'cp.page.academic.card3.p':
        'Damos seguimiento al plan de estudio y a las actualizaciones del programa con orientacion continua.',
      'cp.page.academic.highlight.title': 'Cuando elegir un programa academico?',
      'cp.page.academic.highlight.li1':
        'Cuando apuntas a admision universitaria o puntaje IELTS especifico.',
      'cp.page.academic.highlight.li2':
        'Cuando necesitas redaccion y presentaciones academicas en ingles.',
      'cp.page.academic.highlight.li3':
        'Cuando quieres pasar rapido del ingles general a nivel avanzado.',
      'cp.page.academic.highlight.li4':
        'Cuando tienes fecha universitaria cercana y necesitas preparacion enfocada.',
      'cp.page.academic.tag1': 'Programas academicos',
      'cp.page.academic.tag2': 'IELTS',
      'cp.page.academic.tag3': 'Preparacion universitaria',
      'cp.page.academic.tag4': 'Filipinas',
      'cp.page.academic.related.title': 'Contenido relacionado',
      'cp.page.academic.related.link1': 'Estudiar en Filipinas',
      'cp.page.academic.related.link2': 'Admision de idioma',
      'cp.page.academic.related.link3': 'Consultoria de admision',
      'cp.page.academic.related.link4': 'Institutos de idioma en pagina principal',
      'cp.page.academic.faq.aria': 'Preguntas frecuentes',
      'cp.page.academic.faq.q1':
        'Se puede pasar de programa general a academico en el mismo instituto?',
      'cp.page.academic.faq.a1':
        'En muchos institutos si, segun nivel y disponibilidad de cupos.',
      'cp.page.academic.faq.q2': 'Cuanto duran los programas intensivos de IELTS?',
      'cp.page.academic.faq.a2':
        'Normalmente de 8 a 16 semanas segun nivel inicial y puntaje objetivo.',
      'cp.page.academic.faq.q3':
        'Estos programas son adecuados para estudiantes del Golfo y Yemen?',
      'cp.page.academic.faq.a3':
        'Si. Recomendamos rutas adecuadas para Arabia Saudita, Yemen, EAU y el Golfo.',

      'cp.page.consulting.meta.title':
        'Consultoria de admision | Programas de idioma y academicos | YallaStudy',
      'cp.page.consulting.meta.description':
        'Consultoria de admision para estudiantes saudies y del Golfo: evaluacion del perfil, seleccion del instituto, preparacion del expediente y seguimiento hasta la aceptacion.',
      'cp.page.consulting.breadcrumb': 'Consultoria de admision',
      'cp.page.consulting.hero.title':
        'Consultoria de admision: plan claro desde el inicio hasta la aceptacion final',
      'cp.page.consulting.hero.lead':
        'La consulta correcta ahorra tiempo y costo. En YallaStudy analizamos tu caso, definimos el programa adecuado y construimos una ruta practica hacia la admision.',
      'cp.page.consulting.hero.cta1': 'Reserva la sesion gratuita',
      'cp.page.consulting.hero.cta2': 'Pagina de estudio en Filipinas',
      'cp.page.consulting.card1.title': 'Que ocurre durante la consulta?',
      'cp.page.consulting.card1.li1': 'Evaluar nivel actual y objetivo final de estudio.',
      'cp.page.consulting.card1.li2':
        'Definir destino y programa adecuado en tiempo y presupuesto.',
      'cp.page.consulting.card1.li3': 'Plan de ejecucion claro con cronograma.',
      'cp.page.consulting.card2.title': 'Valor de la consulta para el estudiante',
      'cp.page.consulting.card2.li1':
        'Evitar decisiones costosas equivocadas en instituto o programa.',
      'cp.page.consulting.card2.li2':
        'Reducir retrasos causados por documentos incompletos.',
      'cp.page.consulting.card2.li3': 'Mejorar opciones de admision rapida desde el inicio.',
      'cp.page.consulting.card3.title': 'Para quien es este servicio?',
      'cp.page.consulting.card3.p':
        'Adecuado para nuevos estudiantes, para quienes cambian de ruta, y para familias que buscan una decision segura y clara.',
      'cp.page.consulting.highlight.title': 'Resultado de consulta en 24 horas',
      'cp.page.consulting.highlight.li1': 'Lista corta de opciones realmente adecuadas.',
      'cp.page.consulting.highlight.li2':
        'Recomendacion final segun prioridades: costo, calidad y duracion.',
      'cp.page.consulting.highlight.li3':
        'Plan de admision escrito con pasos accionables inmediatos.',
      'cp.page.consulting.highlight.li4':
        'Soporte continuo por WhatsApp durante toda la ruta.',
      'cp.page.consulting.tag1': 'Consultoria educativa',
      'cp.page.consulting.tag2': 'Admision rapida',
      'cp.page.consulting.tag3': 'Estudiar Filipinas',
      'cp.page.consulting.tag4': 'Estudiantes del Golfo',
      'cp.page.consulting.related.title': 'Referencias utiles',
      'cp.page.consulting.related.link1': 'Admision de idioma en Filipinas',
      'cp.page.consulting.related.link2': 'Registro en institutos para saudies',
      'cp.page.consulting.related.link3': 'Programas academicos de idioma',
      'cp.page.consulting.related.link4': 'Conoce nuestros servicios principales',
      'cp.page.consulting.faq.aria': 'Preguntas frecuentes',
      'cp.page.consulting.faq.q1': 'La consulta es totalmente gratuita?',
      'cp.page.consulting.faq.a1':
        'Si. La primera consulta es gratuita e incluye diagnostico inicial y opciones adecuadas.',
      'cp.page.consulting.faq.q2': 'Se puede hacer todo el proceso a distancia?',
      'cp.page.consulting.faq.a2':
        'Si. La mayoria de pasos de admision y registro se completan en linea con seguimiento directo.',
      'cp.page.consulting.faq.q3': 'Ofrecen seguimiento despues de la admision?',
      'cp.page.consulting.faq.a3':
        'Si. Brindamos apoyo en vivienda, llegada y recomendaciones iniciales en la ciudad de estudio.'
    },
    tr: {
      'cp.page.study.meta.title':
        'Suudi ogrenciler icin Filipinlerde egitim | Hizli kabul | YallaStudy',
      'cp.page.study.meta.description':
        'Suudi ogrenciler icin kapsamli rehber: dil kabul sureci, kurum kaydi ve Filipinlerde akademik programlar.',
      'cp.page.study.breadcrumb': 'Filipinlerde egitim',
      'cp.page.study.hero.title':
        'Suudi ogrenciler icin Filipinlerde egitim: daha hizli kabul ve guvenilir kurumlar',
      'cp.page.study.hero.lead':
        'Hedefiniz uygun butceyle hizli Ingilizce gelisimi ise Filipinler pratik bir secenektir. YallaStudy ilk danismanliktan kabul mektubuna ve seyahat planina kadar yaninizdadir.',
      'cp.page.study.hero.cta1': 'Kabul talebini baslat',
      'cp.page.study.hero.cta2': 'Egitim ve yasam maliyetlerini gor',
      'cp.page.study.card1.title': 'Neden Filipinlerde egitim akilli bir secimdir?',
      'cp.page.study.card1.li1': 'Hizli gelisim icin gunluk yogun dil programlari.',
      'cp.page.study.card1.li2': 'Bir cok destinasyona gore daha dusuk maliyet.',
      'cp.page.study.card1.li3': 'Yilin cogu doneminde esnek baslangic tarihleri.',
      'cp.page.study.card2.title': 'Sana uygun kurumu nasil seciyoruz?',
      'cp.page.study.card2.li1':
        'Hedef analizi: genel Ingilizce, IELTS hazirligi veya akademik rota.',
      'cp.page.study.card2.li2':
        'Konaklama, sehir, haftalik ders saati ve toplam maliyet karsilastirmasi.',
      'cp.page.study.card2.li3': '24 saat icinde sana uygun kurum listesi.',
      'cp.page.study.card3.title': 'Dogrudan ve hizli takip',
      'cp.page.study.card3.p':
        'Kabul ekibimiz, nihai kabul cikana kadar her gun WhatsApp uzerinden takip saglar.',
      'cp.page.study.highlight.title': 'Filipinlerde egitim icin kabul adimlari',
      'cp.page.study.highlight.li1': 'Danismanlik formunu doldur ve hedefini belirle.',
      'cp.page.study.highlight.li2': 'Karsilastirmali onerilen kurum listesini al.',
      'cp.page.study.highlight.li3': 'Belgeleri hazirla ve basvuruyu gonder.',
      'cp.page.study.highlight.li4': 'Kabulu al ve varisa kadar destegi surdur.',
      'cp.page.study.tag1': 'Filipinlerde egitim',
      'cp.page.study.tag2': 'Dil kabulu',
      'cp.page.study.tag3': 'Egitim danismanligi',
      'cp.page.study.tag4': 'Suudi ogrenciler',
      'cp.page.study.related.title': 'Ilgili sayfalar',
      'cp.page.study.related.link1': 'Filipinlerde dil egitimi kabul sureci',
      'cp.page.study.related.link2': 'Suudiler icin kurum kaydi',
      'cp.page.study.related.link3': 'Akademik dil programlari',
      'cp.page.study.related.link4': 'Kabul danismanligi',
      'cp.page.study.faq.aria': 'Sik sorulan sorular',
      'cp.page.study.faq.q1':
        'Filipinlerde dil kurumu kabul sureci genellikle ne kadar surer?',
      'cp.page.study.faq.a1': 'Genellikle evraklar tamamlandiktan sonra 3 ila 7 is gunu surer.',
      'cp.page.study.faq.q2': 'Hizmetleriniz sadece Suudi ogrenciler icin mi?',
      'cp.page.study.faq.a2':
        'Ana odagimiz Suudi Arabistan, ayrica BAE, Yemen ve Korfez ogrencilerine de hizmet veriyoruz.',
      'cp.page.study.faq.q3': 'Konaklama ve varis destegi veriyor musunuz?',
      'cp.page.study.faq.a3':
        'Evet. Konaklama, varis ve duzenli bir baslangic icin kapsamli rehberlik sunuyoruz.',

      'cp.page.language.meta.title':
        'Filipinlerde dil kabul sureci | Hizli ve net adimlar | YallaStudy',
      'cp.page.language.meta.description':
        'Filipinlerde dil kabulunu net bir surecle alin: kurum secimi, evrak hazirligi ve kabul cikana kadar takip.',
      'cp.page.language.breadcrumb': 'Filipinlerde dil kabul sureci',
      'cp.page.language.hero.title':
        'Filipinlerde dil kabul sureci karmasik olmadan ve gunluk takip ile',
      'cp.page.language.hero.lead':
        'Kurum kriterlerine uygun tam bir dosya hazirliyor ve kabul mektubu cikana kadar surekli takip ediyoruz.',
      'cp.page.language.hero.cta1': 'Kabul dosyasini baslat',
      'cp.page.language.hero.cta2': 'Tum kayit adimlarini gor',
      'cp.page.language.card1.title': 'Kabul dosyanda neleri yurutuyoruz?',
      'cp.page.language.card1.li1': 'Gonderim oncesi gerekli evraklarin detayli kontrolu.',
      'cp.page.language.card1.li2': 'Basvurunun kurum standardina gore duzenlenmesi.',
      'cp.page.language.card1.li3': 'Kabulu hizlandirmak icin gunluk takip.',
      'cp.page.language.card2.title': 'Bu rota kimler icin uygundur?',
      'cp.page.language.card2.li1':
        'Hizli ve planli ilerleme isteyen Suudi ve Korfez ogrencileri.',
      'cp.page.language.card2.li2': 'Esnek baslangic tarihi isteyen ogrenciler.',
      'cp.page.language.card2.li3': 'Her adimda net Arapca destek isteyenler.',
      'cp.page.language.card3.title': 'Islem suresi',
      'cp.page.language.card3.p':
        'Dosya tam olduktan sonra genellikle 3-7 is gunu. Bazi kurumlarda sezona gore 10 gune cikabilir.',
      'cp.page.language.highlight.title': 'Basarili kabulun temel unsurlari',
      'cp.page.language.highlight.li1':
        'Mevcut seviyeye ve nihai hedefe uygun program secimi.',
      'cp.page.language.highlight.li2':
        'Tum evraklarin dogru ve duzenli formatta yuklenmesi.',
      'cp.page.language.highlight.li3': 'Konaklama bilgisi ve planlanan baslangic tarihinin onayi.',
      'cp.page.language.highlight.li4': 'Kabul cikana kadar surecin takip edilmesi.',
      'cp.page.language.tag1': 'Dil kabulu',
      'cp.page.language.tag2': 'Filipinler kurumlari',
      'cp.page.language.tag3': 'Hizli surec',
      'cp.page.language.tag4': 'YallaStudy',
      'cp.page.language.related.title': 'Onemli baglantilar',
      'cp.page.language.related.link1': 'Suudiler icin Filipinlerde egitim',
      'cp.page.language.related.link2': 'Kabul danismanligi',
      'cp.page.language.related.link3': 'Akademik dil programlari',
      'cp.page.language.related.link4': 'Ana sayfadaki hizmetlerimiz',
      'cp.page.language.faq.aria': 'Sik sorulan sorular',
      'cp.page.language.faq.q1': 'Bir hafta icinde dil kabul almak mumkun mu?',
      'cp.page.language.faq.a1':
        'Evet. Bircok durumda dosya tam ise bir hafta icinde kabul cikar.',
      'cp.page.language.faq.q2': 'Yemen ve Korfez ogrencilerine hizmet veriyor musunuz?',
      'cp.page.language.faq.a2':
        'Evet, kontenjana gore Yemen, BAE, Kuveyt, Katar, Bahreyn ve Umman ogrencilerine hizmet veriyoruz.',
      'cp.page.language.faq.q3': 'Hizmet konaklama destegini kapsiyor mu?',
      'cp.page.language.faq.a3':
        'Evet. Butceye uygun konaklama secenekleri ve ilk varis rehberligi sunuyoruz.',

      'cp.page.academic.meta.title':
        'Filipinlerde akademik dil programlari | IELTS ve universite rotasi | YallaStudy',
      'cp.page.academic.meta.description':
        'Filipinlerde akademik dil programlarini kesfedin: IELTS hazirligi, akademik yazim ve universiteye hazirlik.',
      'cp.page.academic.breadcrumb': 'Akademik dil programlari',
      'cp.page.academic.hero.title':
        'Filipinlerde akademik dil programlari: genel seviyeden universite hazirligina',
      'cp.page.academic.hero.lead':
        'Genel Ingilizce sonrasinda ogrencinin duzenli bir akademik rotaya ihtiyaci vardir. IELTS, akademik yazim ve universite hazirligi seciminde size destek oluyoruz.',
      'cp.page.academic.hero.cta1': 'Akademik program danismanligi al',
      'cp.page.academic.hero.cta2': 'Dil egitimi rehberini oku',
      'cp.page.academic.card1.title': 'En yaygin akademik rotalar',
      'cp.page.academic.card1.li1':
        'Dort beceriye gunluk calisma ile yogun IELTS hazirligi.',
      'cp.page.academic.card1.li2':
        'Universite ve lisansustu hedefler icin English for Academic Purposes.',
      'cp.page.academic.card1.li3':
        'Burslu ogrenciler icin akademik yazim ve sunum rotasi.',
      'cp.page.academic.card2.title': 'Uygun programi nasil belirliyoruz?',
      'cp.page.academic.card2.li1': 'Mevcut seviye ve hedef puanin belirlenmesi.',
      'cp.page.academic.card2.li2':
        'Gerekli sonuca ulasmak icin gercekci sure tahmini.',
      'cp.page.academic.card2.li3':
        'Istenen akademik rotada guclu bir kurum secimi.',
      'cp.page.academic.card3.title': 'Sonuca kadar surekli destek',
      'cp.page.academic.card3.p':
        'Egitim planinizi ve program guncellemelerini surekli takip edip hedefe odakli yonlendirme sagliyoruz.',
      'cp.page.academic.highlight.title': 'Ne zaman akademik program secilmeli?',
      'cp.page.academic.highlight.li1':
        'Universite kabulunu veya belirli bir IELTS skorunu hedeflerken.',
      'cp.page.academic.highlight.li2':
        'Ingilizce akademik yazim ve sunum becerilerine ihtiyac duyarken.',
      'cp.page.academic.highlight.li3':
        'Genel seviyeden ileri seviyeye hizli gecis istendiginde.',
      'cp.page.academic.highlight.li4':
        'Universite tarihi yakinsa ve odakli hazirlik gerekiyorsa.',
      'cp.page.academic.tag1': 'Akademik programlar',
      'cp.page.academic.tag2': 'IELTS',
      'cp.page.academic.tag3': 'Universite hazirligi',
      'cp.page.academic.tag4': 'Filipinler',
      'cp.page.academic.related.title': 'Ilgili icerik',
      'cp.page.academic.related.link1': 'Filipinlerde egitim',
      'cp.page.academic.related.link2': 'Dil kabulu',
      'cp.page.academic.related.link3': 'Kabul danismanligi',
      'cp.page.academic.related.link4': 'Ana sayfada dil kurumlari',
      'cp.page.academic.faq.aria': 'Sik sorulan sorular',
      'cp.page.academic.faq.q1':
        'Ayni kurumda genel programdan akademik programa gecis mumkun mu?',
      'cp.page.academic.faq.a1':
        'Bir cok kurumda evet, seviye ve kontenjana bagli olarak gecis mumkundur.',
      'cp.page.academic.faq.q2': 'Yogun IELTS programlari ne kadar surer?',
      'cp.page.academic.faq.a2':
        'Genellikle baslangic seviyesine ve hedef skora gore 8-16 hafta arasi surer.',
      'cp.page.academic.faq.q3':
        'Bu programlar Korfez ve Yemen ogrencileri icin uygun mu?',
      'cp.page.academic.faq.a3':
        'Evet. Suudi Arabistan, Yemen, BAE ve Korfez ogrencileri icin uygun rotalar oneriyoruz.',

      'cp.page.consulting.meta.title':
        'Kabul danismanligi | Dil ve akademik programlar | YallaStudy',
      'cp.page.consulting.meta.description':
        'Suudi ve Korfez ogrencileri icin kabul danismanligi: profil analizi, kurum secimi, dosya hazirligi ve kabul cikana kadar takip.',
      'cp.page.consulting.breadcrumb': 'Kabul danismanligi',
      'cp.page.consulting.hero.title':
        'Kabul danismanligi: ilk adimdan nihai kabule kadar net plan',
      'cp.page.consulting.hero.lead':
        'Dogru danismanlik zaman ve maliyet kazandirir. YallaStudy durumunuzu analiz eder, uygun programi belirler ve kabul icin pratik yol haritasi sunar.',
      'cp.page.consulting.hero.cta1': 'Ucretsiz oturumu ayarla',
      'cp.page.consulting.hero.cta2': 'Filipinlerde egitim sayfasi',
      'cp.page.consulting.card1.title': 'Danismanlikta neler yapilir?',
      'cp.page.consulting.card1.li1': 'Mevcut seviye ve nihai hedef degerlendirilir.',
      'cp.page.consulting.card1.li2':
        'Zaman ve butceye uygun hedef ulke ve program belirlenir.',
      'cp.page.consulting.card1.li3': 'Net uygulama plani ve basvuru takvimi cikarilir.',
      'cp.page.consulting.card2.title': 'Ogrenci icin danismanligin degeri',
      'cp.page.consulting.card2.li1': 'Kurum veya programda maliyetli yanlis secimleri azaltir.',
      'cp.page.consulting.card2.li2':
        'Eksik evrak nedeniyle olusan gecikmeleri azaltir.',
      'cp.page.consulting.card2.li3': 'Ilk basvuruda hizli kabul sansini artirir.',
      'cp.page.consulting.card3.title': 'Bu hizmet kimler icin uygun?',
      'cp.page.consulting.card3.p':
        'Yeni ogrenciler, rota degistirmek isteyenler ve guvenli karar arayan aileler icin uygundur.',
      'cp.page.consulting.highlight.title': 'Danismanlik sonucu 24 saat icinde',
      'cp.page.consulting.highlight.li1': 'Gercekten uygun seceneklerden olusan kisa liste.',
      'cp.page.consulting.highlight.li2':
        'Onceliklere gore nihai onerme: maliyet, kalite ve sure.',
      'cp.page.consulting.highlight.li3':
        'Hemen uygulanabilir adimlarla yazili kabul plani.',
      'cp.page.consulting.highlight.li4':
        'Tum surec boyunca WhatsApp uzerinden surekli destek.',
      'cp.page.consulting.tag1': 'Egitim danismanligi',
      'cp.page.consulting.tag2': 'Hizli kabul',
      'cp.page.consulting.tag3': 'Filipinlerde egitim',
      'cp.page.consulting.tag4': 'Korfez ogrencileri',
      'cp.page.consulting.related.title': 'Faydali referanslar',
      'cp.page.consulting.related.link1': 'Filipinlerde dil kabul sureci',
      'cp.page.consulting.related.link2': 'Suudiler icin kurum kaydi',
      'cp.page.consulting.related.link3': 'Akademik dil programlari',
      'cp.page.consulting.related.link4': 'Ana hizmetlerimizi inceleyin',
      'cp.page.consulting.faq.aria': 'Sik sorulan sorular',
      'cp.page.consulting.faq.q1': 'Danismanlik tamamen ucretsiz mi?',
      'cp.page.consulting.faq.a1':
        'Evet. Ilk danismanlik ucretsizdir ve uygun seceneklerle on teshis icerir.',
      'cp.page.consulting.faq.q2': 'Tum surec uzaktan tamamlanabilir mi?',
      'cp.page.consulting.faq.a2':
        'Evet. Kabul ve kayit adimlarinin cogu dogrudan takip ile cevrimici tamamlanir.',
      'cp.page.consulting.faq.q3': 'Kabulden sonra da takip var mi?',
      'cp.page.consulting.faq.a3':
        'Evet. Konaklama, varis ve egitim sehrinde ilk baslangic icin destek veriyoruz.'
    }
  };

  Object.keys(servicePageTranslations).forEach((lang) => {
    Object.assign(translations[lang], servicePageTranslations[lang]);
  });

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
  const queryLanguagePaths = new Set([
    '/study-in-philippines-saudi/',
    '/language-admission-philippines/',
    '/institutes-registration-saudi/',
    '/academic-language-programs/',
    '/admission-consulting/'
  ]);
  const localizedSitePaths = new Set(['/', ...localizedBasePaths, ...queryLanguagePaths]);

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
      const usePathLocalization = canUseLocalizedPath(basePath);
      const localizedPath = usePathLocalization
        ? (lang === 'ar' ? basePath : buildLocalizedPath(basePath, lang))
        : basePath;
      if (usePathLocalization) {
        parsed.searchParams.delete('lang');
      } else if (lang === 'ar') {
        parsed.searchParams.delete('lang');
      } else {
        parsed.searchParams.set('lang', lang);
      }
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
