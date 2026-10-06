export type Locale = "ar" | "en";

export interface ServiceDetailPillar {
  title: string;
  desc: string;
  metric?: string;
}

export interface ServiceDetailWorkflowStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceDetailGalleryItem {
  url: string;
  title: string;
  caption: string;
}

export interface ServiceDetailSpecItem {
  label: string;
  value: string;
}

export interface ServiceDetailFaqItem {
  q: string;
  a: string;
}

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  tagline?: string;
  extendedSummary?: string;
  pillars?: ServiceDetailPillar[];
  workflow?: ServiceDetailWorkflowStep[];
  gallery?: ServiceDetailGalleryItem[];
  specs?: ServiceDetailSpecItem[];
  faq?: ServiceDetailFaqItem[];
}

export interface Translations {
  nav: {
    brand: string;
    brandTag: string;
    home: string;
    services: string;
    about: string;
    projects: string;
    contact: string;
    discussProject: string;
    switchLang: string;
    servicesDropdownTitle?: string;
    allServices?: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
    locationBadge: string;
    sbcBadge: string;
    irataBadge: string;
    cleanovaBadge: string;
  };
  stats: {
    stat1Number: string;
    stat1Title: string;
    stat1Desc: string;
    stat2Number: string;
    stat2Title: string;
    stat2Desc: string;
    stat3Number: string;
    stat3Title: string;
    stat3Desc: string;
  };
  servicesOverview: {
    badge: string;
    heading: string;
    subheading: string;
    exploreAll: string;
    detailsLink: string;
    cards: Array<{
      id: string;
      num: string;
      title: string;
      desc: string;
      href: string;
    }>;
  };
  corporate: {
    badge: string;
    heading: string;
    p1: string;
    p2: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    readMore: string;
    requestConsultation: string;
    brandCaption: string;
    locationCaption: string;
    standardsTag: string;
  };
  projectsShowcase: {
    badge: string;
    heading: string;
    subheading: string;
    exploreAll: string;
    requestSimilar: string;
    items: Array<{
      title: string;
      category: string;
      location: string;
      specs: string;
      image: string;
    }>;
  };
  cta: {
    badge: string;
    heading: string;
    subheading: string;
    phone: string;
    email: string;
    button: string;
  };
  footer: {
    description: string;
    sbcBadge: string;
    irataBadge: string;
    cleanovaBadge: string;
    quickLinksTitle: string;
    servicesTitle: string;
    contactTitle: string;
    rights: string;
    address: string;
    phone: string;
    email: string;
    requestSurvey: string;
    country: string;
    commercial: string;
    vision: string;
    home: string;
    services: string;
    about: string;
    projects: string;
    contact: string;
    service1: string;
    service2: string;
    service3: string;
    service4?: string;
  };
  modal: {
    badge: string;
    title: string;
    fullName: string;
    fullNamePlaceholder: string;
    company: string;
    companyPlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    serviceLine: string;
    serviceOptions: string[];
    location: string;
    locationOptions: string[];
    scope: string;
    scopePlaceholder: string;
    cancel: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    close: string;
  };
  servicesPage: {
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    heroHeading: string;
    heroSubheading: string;
    sbcBadge: string;
    irataBadge: string;
    uptimeBadge: string;
    scopeHeading: string;
    ctaCardButton: string;
    siteSurveyButton: string;
    bottomBadge: string;
    bottomHeading: string;
    bottomDesc: string;
    bottomButton: string;
    otherServicesHeading?: string;
    backToServices?: string;
    quickNavOverview?: string;
    quickNavCapabilities?: string;
    quickNavWorkflow?: string;
    quickNavGallery?: string;
    quickNavSpecs?: string;
    quickNavFaq?: string;
    workflowBadge?: string;
    workflowHeading?: string;
    workflowSubheading?: string;
    pillarsBadge?: string;
    pillarsHeading?: string;
    galleryBadge?: string;
    galleryHeading?: string;
    gallerySubheading?: string;
    specsBadge?: string;
    specsHeading?: string;
    faqBadge?: string;
    faqHeading?: string;
    items: ServiceItem[];
  };
  aboutPage: {
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    eyebrow: string;
    heroHeading: string;
    heroDescription: string;
    narrativeBadge: string;
    narrativeHeading: string;
    narrativeP1: string;
    narrativeP2: string;
    discussButton: string;
    servicesButton: string;
    metricTag: string;
    metricHeading: string;
    pillarsBadge: string;
    pillarsHeading: string;
    pillarsSubheading: string;
    mandatoryStandard: string;
    contactBadge: string;
    contactHeading: string;
    contactBody: string;
    directPhoneLabel: string;
    directPhone: string;
    directEmailLabel: string;
    directEmail: string;
    officeLabel: string;
    officeAddress: string;
    instantStartTitle: string;
    instantStartDesc: string;
    instantStartButton: string;
    pillars: Array<{
      num: string;
      title: string;
      desc: string;
    }>;
  };
  projectsPage: {
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    eyebrow: string;
    heroHeading: string;
    heroSubheading: string;
    placeholderNotice: string;
    filterAll: string;
    filterIndustrial: string;
    filterFacade: string;
    filterAgriculture: string;
    scopeHeading: string;
    requestSurveyButton: string;
    bottomBadge: string;
    bottomHeading: string;
    bottomDesc: string;
    bottomButton: string;
    projects: Array<{
      id: string;
      tag: string;
      categoryKey: string;
      title: string;
      description: string;
      scopePoints: string[];
      location: string;
      image: string;
    }>;
  };
  contactPage: {
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    eyebrow: string;
    heading: string;
    subheading: string;
    infoBadge: string;
    infoHeading: string;
    infoDesc: string;
    phoneLabel: string;
    phone: string;
    emailLabel: string;
    email: string;
    addressLabel: string;
    address: string;
    hoursLabel: string;
    hours: string;
    sbcBadge: string;
    irataBadge: string;
    cleanovaBadge: string;
    formTitle: string;
    formSubtitle: string;
    fullName: string;
    fullNamePlaceholder: string;
    company: string;
    companyPlaceholder: string;
    emailInput: string;
    emailPlaceholder: string;
    phoneInput: string;
    phonePlaceholder: string;
    serviceLine: string;
    serviceOptions: string[];
    location: string;
    locationOptions: string[];
    scope: string;
    scopePlaceholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    another: string;
  };
}

export const content: Record<Locale, Translations> = {
  ar: {
    nav: {
      brand: "شركة شورنا الصناعية",
      brandTag: "SHOURNA INDUSTRIAL CO.",
      home: "الرئيسية",
      services: "الخدمات",
      about: "عن الشركة",
      projects: "المشاريع",
      contact: "تواصل معنا",
      discussProject: "ناقش مشروعك معنا",
      switchLang: "English",
      servicesDropdownTitle: "الخدمات التخصصية",
      allServices: "استعراض كافة الخدمات",
    },
    hero: {
      eyebrow: "تنظيف وصيانة واجهات المباني · تنفيذ متكامل للمنشآت الصناعية · الخدمات الزراعية",
      headline: "نبني على أساس متين.",
      subheading:
        "تقدّم شركة شاورنا الصناعية تنفيذ المشاريع الصناعية، وصيانة وتنظيف الواجهات، والخدمات الزراعية في مختلف مناطق المملكة — بجودة تنفيذ تدوم، وجدولة تحافظ على استمرارية العمل.",
      ctaPrimary: "ناقش مشروعك معنا",
      ctaSecondary: "استكشف خدماتنا",
      locationBadge: "المملكة العربية السعودية · تنفيذ وطني شامل",
      sbcBadge: "امتثال كود البناء السعودي (SBC)",
      irataBadge: "بروتوكولات السلامة IRATA",
      cleanovaBadge: "معايير Cleanova للواجهات",
    },
    stats: {
      stat1Number: "3",
      stat1Title: "3 خطوط خدمة رئيسية",
      stat1Desc: "المشاريع الصناعية، هندسة الواجهات، والبنية التحتية الزراعية",
      stat2Number: "+20",
      stat2Title: "20+ مشروعًا منجزًا (نموذجي)",
      stat2Desc: "مشاريع تم تسليمها في المدن الصناعية والمعالم الكبرى",
      stat3Number: "24/7",
      stat3Title: "24/7 استجابة الصيانة (نموذجي)",
      stat3Desc: "استجابة صيانة فورية ودعم تشغيلي متواصل على مدار الساعة",
    },
    servicesOverview: {
      badge: "التخصصات الهندسية",
      heading: "قدرات تنفيذية للبنية التحتية الوطنية",
      subheading:
        "حلول متكاملة مصممة لتلبية الجداول الزمنية الدقيقة والمعايير السعودية المعتمدة بكفاءة وموثوقية تشغيلية عالية.",
      exploreAll: "استعراض كافة الخدمات",
      detailsLink: "تفاصيل الخدمة ونطاق العمل",
      cards: [
        {
          id: "facade-cleaning-maintenance",
          num: "01",
          title: "تنظيف وصيانة واجهات المباني",
          desc: "حلول متكاملة لتنظيف وصيانة واجهات المباني بمختلف أنواعها لضمان استدامتها ومظهرها.",
          href: "/services/facade-cleaning-maintenance",
        },
        {
          id: "industrial",
          num: "02",
          title: "تنفيذ متكامل للمنشآت الصناعية",
          desc: "من الأعمال المدنية والإنشاءات الفولاذية إلى التركيبات الميكانيكية والتشغيل التجريبي للمنشآت والمصانع الكبرى.",
          href: "/services/industrial",
        },
        {
          id: "agriculture",
          num: "03",
          title: "الخدمات الزراعية",
          desc: "تجهيز الأراضي، وإنشاء شبكات الري، والدعم الزراعي المستمر للمزارع التجارية والعقارات الزراعية الكبرى.",
          href: "/services/agriculture",
        },
      ],
    },
    corporate: {
      badge: "المعايير التشغيلية",
      heading: "بنية تحتية هندسية راسخة وموثوقية تشغيلية",
      p1: "تأسست شركة شاورنا الصناعية لسد الفجوة بين التصميم والتنفيذ الفعلي على الأرض — بمتابعة المشروع من أول حفرية حتى آخر معاينة، والبقاء كفريق يحافظ على أداء المباني والأراضي بعد التسليم.",
      p2: "وفق كود البناء السعودي (SBC) وتوجيهات IRATA ومعايير Cleanova لتنظيف وصيانة الواجهات، نضمن استدامة الأصول وحمايتها دون أي مساومة على معايير السلامة.",
      pillar1Title: "السلامة والالتزام",
      pillar1Desc: "إجراءات السلامة المهنية وتصاريح العمل في كل موقع.",
      pillar2Title: "تنفيذ بقيادة هندسية",
      pillar2Desc: "تخطيط النطاقات من قِبل مهندسين نفّذوا أعمالاً مماثلة.",
      pillar3Title: "تغطية إقليمية شاملة",
      pillar3Desc: "طواقم ومعدات جاهزة للتحرك في مختلف مناطق المملكة.",
      readMore: "اقرأ المزيد عن الشركة",
      requestConsultation: "طلب استشارة فنية",
      brandCaption: "شركة شورنا الصناعية",
      locationCaption: "المملكة العربية السعودية",
      standardsTag: "معايير SBC و IRATA",
    },
    projectsShowcase: {
      badge: "سجل الإنجاز الميداني",
      heading: "نماذج من مشاريعنا بالمملكة",
      subheading:
        "قدرات تنفيذية مثبتة في المنشآت الصناعية، واجهات الأبراج الشاهقة، والمشاريع الزراعية الواسعة.",
      exploreAll: "استعراض كافة المشاريع",
      requestSimilar: "طلب معاينة لمشروع مماثل",
      items: [
        {
          title: "توسعة منشأة — نموذج مبدئي",
          category: "صناعي",
          location: "المدينة الصناعية الثانية، الرياض",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
          specs: "أعمال مدنية وإنشائية لتوسعة منشأة تصنيعية.",
        },
        {
          title: "برنامج صيانة واجهات برج — نموذج مبدئي",
          category: "واجهات",
          location: "طريق الملك فهد، الرياض",
          image: "/images/facade-cleaning.jpg",
          specs: "عقد استبدال كسوة وتنظيف بالحبال.",
        },
        {
          title: "ري عقار زراعي — نموذج مبدئي",
          category: "زراعي",
          location: "منطقة القصيم",
          image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
          specs: "تركيب شبكة ري لعقار زراعي تجاري.",
        },
      ],
    },
    cta: {
      badge: "جاهزية تنفيذ وطنية · استجابة سريعة",
      heading: "حدّثونا عن موقع العمل.",
      subheading: "تواصلوا مع الفريق مباشرة، أو أرسلوا تفاصيل المشروع وسنعاود التواصل بخصوص النطاق والجدولة.",
      phone: "+966 57 452 5139",
      email: "info@shourna.com",
      button: "ناقش مشروعك معنا",
    },
    footer: {
      description:
        "تقدّم شركة شاورنا الصناعية تنفيذ المشاريع الصناعية، وصيانة وتنظيف الواجهات، والخدمات الزراعية في مختلف مناطق المملكة — بجودة تنفيذ تدوم، وجدولة تحافظ على استمرارية العمل.",
      sbcBadge: "كود البناء السعودي (SBC)",
      irataBadge: "معايير IRATA",
      cleanovaBadge: "معايير Cleanova للواجهات",
      quickLinksTitle: "روابط الموقع",
      servicesTitle: "الخدمات التخصصية",
      contactTitle: "المقر الرئيسي والتواصل",
      rights: "شركة شاورنا الصناعية. جميع الحقوق محفوظة.",
      address: "الرياض، المملكة العربية السعودية · المدينة الصناعية الثانية",
      phone: "+966 57 452 5139",
      email: "info@shourna.com",
      requestSurvey: "طلب معاينة ميدانية",
      country: "المملكة العربية السعودية",
      commercial: "سجل تجاري معتمد",
      vision: "رؤية المملكة 2030",
      home: "الرئيسية",
      services: "خدمات الشركة",
      about: "عن شركة شورنا",
      projects: "المشاريع المنجزة",
      contact: "تواصل معنا",
      service1: "تنظيف وصيانة واجهات المباني",
      service2: "تنفيذ متكامل للمنشآت الصناعية",
      service3: "الخدمات الزراعية",
    },
    modal: {
      badge: "شركة شاورنا الصناعية · استشارة هندسية",
      title: "طلب دراسة ومناقشة مشروع",
      fullName: "الاسم الكامل *",
      fullNamePlaceholder: "م. محمد السالم",
      company: "الشركة / المؤسسة *",
      companyPlaceholder: "اسم المنشأة أو الشركة",
      email: "البريد الإلكتروني للعمل *",
      emailPlaceholder: "name@company.com",
      phone: "رقم الجوال (المملكة) *",
      phonePlaceholder: "05XXXXXXXX",
      serviceLine: "خط الخدمة المطلوب",
      serviceOptions: [
        "تنظيف وصيانة واجهات المباني",
        "تنفيذ متكامل للمنشآت الصناعية",
        "الخدمات الزراعية",
      ],
      location: "موقع المشروع",
      locationOptions: [
        "الرياض",
        "المنطقة الشرقية",
        "المنطقة الغربية",
        "نيوم / البحر الأحمر",
        "منطقة أخرى",
      ],
      scope: "نبذة عن نطاق العمل والجدول الزمني",
      scopePlaceholder: "المساحة التقريبية، الارتفاعات، نوع الأعمال، أو موعد البدء المستهدف...",
      cancel: "إلغاء",
      submit: "إرسال بيانات المشروع",
      submitting: "جاري الإرسال...",
      successTitle: "تم استلام طلب المشروع بنجاح",
      successMessage: "شكراً لتواصلكم مع شركة شاورنا الصناعية. سيقوم مهندس المشاريع المختص بالتواصل معكم خلال 24 ساعة لمناقشة نطاق العمل والجدولة.",
      close: "إغلاق",
    },
    servicesPage: {
      breadcrumbHome: "الرئيسية",
      breadcrumbCurrent: "الخدمات التخصصية",
      heroHeading: "خدمات شركة شورنا الصناعية",
      heroSubheading:
        "قدرات تنفيذية متكاملة مصممة لتلبية الجداول الزمنية الدقيقة والمعايير الهندسية المعتمدة في المملكة العربية السعودية — هندسة للاستدامة، وجدولة لأقصى جاهزية تشغيلية.",
      sbcBadge: "كود البناء السعودي (SBC)",
      irataBadge: "معايير IRATA للسلامة المرتفعة",
      uptimeBadge: "جاهزية انتشار ميداني على مدار 24/7",
      scopeHeading: "نطاق الأعمال والقدرات التنفيذية",
      ctaCardButton: "اطلب دراسة فنية لهذا النطاق",
      siteSurveyButton: "معاينة موقع المشروع",
      bottomBadge: "جاهزية تنفيذ وطنية",
      bottomHeading: "هل تحتاج إلى استشارة هندسية أو نطاق عمل مخصص؟",
      bottomDesc: "يقوم مهندسونا بزيارة الموقع ودراسة المتطلبات الإنشائية أو شروط صيانة وتنظيف الواجهات، وتقديم تقرير تسعير وجدولة متكامل.",
      bottomButton: "ناقش مشروعك معنا",
      otherServicesHeading: "خدمات تخصصية أخرى",
      backToServices: "العودة إلى كافة الخدمات",
      quickNavOverview: "نظرة عامة",
      quickNavCapabilities: "القدرات التنفيذية",
      quickNavWorkflow: "منهجية العمل",
      quickNavGallery: "معرض الأعمال الميداني",
      quickNavSpecs: "المواصفات والمعايير",
      quickNavFaq: "الأسئلة الشائعة",
      workflowBadge: "منهجية إدارة المشاريع",
      workflowHeading: "مراحل التنفيذ وضمان الجودة",
      workflowSubheading: "بروتوكول تنفيذي متكامل يضمن سلامة المنشأة ودقة الإنجاز وتسليم المشاريع في الموعد المحدد.",
      pillarsBadge: "القدرات الهندسية",
      pillarsHeading: "الركائز التشغيلية والتنفيذية",
      galleryBadge: "التوثيق الميداني",
      galleryHeading: "شواهد من بيئة العمل والمعدات المتقدمة",
      gallerySubheading: "لقطات توثيقية حية تبرز جاهزية طواقم شاورنا والتقنيات الهندسية المستخدمة في مواقع العمل بالمملكة.",
      specsBadge: "المعايير المعتمدة",
      specsHeading: "مصفوفة المواصفات والامتثال التنظيمي",
      faqBadge: "استفسارات العملاء",
      faqHeading: "الأسئلة الفنية المتكررة",
      items: [
        {
          id: "facade-cleaning-maintenance",
          num: "01",
          title: "تنظيف وصيانة واجهات المباني",
          description: "حلول متكاملة لتنظيف وصيانة واجهات المباني بمختلف أنواعها لضمان استدامتها ومظهرها.",
          bullets: [
            "تنظيف الزجاج والواجهات الشاهقة بالحبال ووحدات BMU",
            "صيانة واستبدال الزجاج المزدوج والألواح والكسوة الخارجية",
            "تجديد فواصل السيليكون والمواد العازلة وموانع التسرب",
            "عقود تنظيف وصيانة دورية وتقارير فحص ومطابقة معتمدة",
          ],
          image: "/images/facade-cleaning.jpg",
          tagline: "حلول هندسية متكاملة لتنظيف وصيانة واجهات المباني، إعادة التأهيل الإنشائي، وتقنيات الوصول بالحبال",
          extendedSummary: "تجمع شركة شاورنا الصناعية بين تقنيات تنظيف الواجهات المتقدمة وبرامج الصيانة الإنشائية والوقائية المتكاملة لواجهات المباني والأبراج الشاهقة. نعتمد على أحدث أنظمة الوصول بالحبال (IRATA) ووحدات صيانة المباني الميكانيكية (BMU)، مع تقديم خدمات غسيل الزجاج بالماء النقي المنزوع الأيونات، واستبدال ألواح الزجاج المزدوج المتصدعة، وتجديد فواصل التمدد والعوازل الهيكلية، وتثبيت وتدعيم ألواح الكسوة (Cladding). نلتزم بأعلى معايير كود البناء السعودي (SBC) ومواصفات Cleanova لضمان استدامة الأصول وحمايتها ومظهرها المتميز.",
          pillars: [
            {
              title: "الوصول بالحبال المعتمد من IRATA ووحدات BMU",
              desc: "طواقم متسلقين صناعيين حاصلين على رخص IRATA للوصول إلى كافة الواجهات الشاهقة والزوايا المعمارية المعقدة بأعلى درجات الأمان.",
              metric: "IRATA Levels 1-3",
            },
            {
              title: "استبدال الزجاج الهيكلي وتجديد العوازل (Weatherproofing)",
              desc: "استبدال آمن للزجاج المتضرر وحقن سيليكون إنشائي مرن عالي التحمل لمقاومة تسرب الهواء والأمطار وحرارة المناخ القاسي.",
              metric: "10-Year Seal Integrity",
            },
            {
              title: "الغسيل بالماء النقي المنزوع الأيونات (DI/RO)",
              desc: "محطات تحلية وضخ متنقلة تنتج مياهاً خالية من الشوائب تضمن جفاف الزجاج بنقاء بلوري بدون أي علامات أو رواسب.",
              metric: "100% Spot-Free",
            },
            {
              title: "عقود صيانة دورية واتفاقيات مستوى الخدمة (SLA)",
              desc: "برامج تنظيف وصيانة دورية مجدولة، مع تقارير تصوير رقمية وتوثيق هندسي دوري لسلامة الألواح والواجهات.",
              metric: "Corporate SLA Tier",
            },
          ],
          workflow: [
            {
              step: "01",
              title: "المعاينة الهندسية وفحص نقاط التثبيت",
              desc: "فحص أولي لأسطح المبنى، واختبار نقاط الربط الميكانيكية (Anchor Points) وفحص حالة الكسوة والزجاج.",
            },
            {
              step: "02",
              title: "خطة السلامة وتصاريح العمل المرتفع",
              desc: "إصدار خطة إدارة المخاطر وتصاريح العمل على الارتفاعات بالتنسيق مع إدارة السلامة في المنشأة.",
            },
            {
              step: "03",
              title: "التنفيذ المتخصص والصيانة الإنشائية",
              desc: "تنفيذ عمليات الغسيل الدقيق ومعالجة الزجاج واستبدال الألواح التالفة وتجديد موانع التسرب بأعلى دقة.",
            },
            {
              step: "04",
              title: "الفحص النهائي وتسليم التقرير الرقمي",
              desc: "مراجعة الجودة الشاملة وتقديم تقرير تسليم فوتوغرافي وهندسي مفصل يثبت سلامة ومظهر الواجهة.",
            },
          ],
          gallery: [
            {
              url: "/images/facade-cleaning.jpg",
              title: "معدات الرافعة المتخصصة وغسيل واجهات المباني",
              caption: "شاحنة رافعة هيدروليكية مجهزة بأحدث معدات التنظيف الميداني للواجهات الزجاجية.",
            },
            {
              url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
              title: "صيانة وتجديد كسوة الواجهات المعمارية",
              caption: "إعادة ضبط وتثبيت الألواح المركبة وفواصل السيليكون الإنشائي لحماية واجهة المبنى.",
            },
            {
              url: "https://images.unsplash.com/photo-1506158669146-619067261a76?auto=format&fit=crop&w=1200&q=80",
              title: "نقاء تام للواجهات الزجاجية المعمارية",
              caption: "نتائج الغسيل بالماء النقي الخالي من الأملاح على واجهات الكيرتن وول (Curtain Wall).",
            },
          ],
          specs: [
            { label: "معايير الاعتماد والسلامة", value: "IRATA الدولية · معايير Cleanova · كود SBC 201/301" },
            { label: "قدرة الارتفاع الميداني", value: "تغطية حتى ارتفاع +300 متر (أنظمة حبال غير مقيدة بالارتفاع)" },
            { label: "المواد والتقنيات المستخدمة", value: "مياه مقطرة 100% · سيليكون هيكلي متعادل · روافع شفط هيدروليكية" },
            { label: "إجراءات السلامة المهنية", value: "نظام حبال مزدوج مستقل 100% · تأمين محيط العمل الأرضي" },
            { label: "جاهزية الاستجابة والانتشار", value: "استجابة دورية وطوارئ 24/7 في الرياض والمدن الرئيسية" },
          ],
          faq: [
            {
              q: "كيف تضمنون سلامة الزجاج والعوازل أثناء عمليات التنظيف والصيانة؟",
              a: "نستخدم فرش تنظيف ناعمة مخصصة ومياه منزوعة الأيونات بالكامل بدون كيماويات كاشطة، مع تطبيق سيليكون إنشائي متوافق مع مواصفات الزجاج المعماري.",
            },
            {
              q: "كيف تتعاملون مع الحالات الطارئة مثل سقوط أو تصدع زجاج الواجهة؟",
              a: "تمتلك شركة شاورنا فريق استجابة سريعة للطوارئ مدرباً على الوصول الفوري وتأمين المنطقة وعمل تدعيم مؤقت للزجاج المكسور قبل تصنيع واستبدال اللوح الدائم.",
            },
            {
              q: "هل يمكن دمج عقود التنظيف والصيانة الدورية في عقد واحد؟",
              a: "نعم، نقدم عقود صيانة وتشغيل موحدة تشمل جداول التنظيف الدوري مع الفحص الوقائي المستمر لفواصل السيليكون والكسوة، مما يوفر تكلفة تشغيلية ويمنع التسربات مبكراً.",
            },
          ],
        },
        {
          id: "industrial",
          num: "02",
          title: "تنفيذ متكامل للمنشآت الصناعية",
          description: "من الأعمال المدنية والإنشاءات الفولاذية إلى التركيبات الميكانيكية والتشغيل التجريبي للمنشآت والمصانع الكبرى.",
          bullets: [
            "أعمال الموقع والإنشاءات الفولاذية",
            "تركيب الأنظمة الميكانيكية والأنابيب",
            "التشغيل التجريبي والتسليم",
          ],
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
          tagline: "حلول هندسية متكاملة للمصانع، الهياكل الفولاذية، وأنظمة البنية التحتية الميكانيكية",
          extendedSummary: "تقدم شركة شاورنا الصناعية قدرات مقاولات متكاملة تغطي كافة مراحل تنفيذ المنشآت الصناعية والمستودعات اللوجستية ومرافق المعالجة. من صب القواعد والخرسانات سابقة الإجهاد إلى تصنيع وتركيب الهياكل المعدنية الثقيلة، وتمديد شبكات الأنابيب عالية الضغط، والتكامل الكهروميكانيكي (MEP). نلتزم بأعلى معايير كود البناء السعودي (SBC) ومتطلبات الهيئة السعودية للمدن الصناعية ومناطق التقنية (مدن)، مع تطبيق إجراءات مراقبة الجودة (QA/QC) لضمان تسليم منشآت صناعية جاهزة للتشغيل وفق الجداول الزمنية المحددة.",
          pillars: [
            {
              title: "الهياكل الفولاذية والأعمال المدنية الثقيلة",
              desc: "تنفيذ الأساسات الخرسانية الحاملة للأحمال الديناميكية وتصنيع وتركيب الجملونات الفولاذية بدقة متناهية.",
              metric: "AISC Heavy Grade",
            },
            {
              title: "شبكات الأنابيب الصناعية والمرافق الميكانيكية",
              desc: "تمديد خطوط الأنابيب عالية الضغط، غرف الهواء المضغوط، وشبكات إطفاء الحريق المعتمدة من الدفاع المدني.",
              metric: "ASME B31.3 Standard",
            },
            {
              title: "التكامل الكهروميكانيكي (MEP) والأتمتة",
              desc: "تجهيز لوحات التوزيع الرئيسية والمحولات، ومسارات الكابلات الصناعية، وربط حساسات التحكم الإشرافي.",
              metric: "Class-A Electromechanical",
            },
            {
              title: "التشغيل التجريبي والامتثال لاشتراطات (مدن)",
              desc: "إجراء اختبارات الضغط الهيدروستاتيكي واختبارات التشغيل على البارد والساخن واستخراج شهادات الإشغال الرسمية.",
              metric: "Turnkey Sign-Off",
            },
          ],
          workflow: [
            {
              step: "01",
              title: "المخططات التنفيذية وهندسة القيمة",
              desc: "مراجعة المخططات التصميمية، وإعداد رسومات الورشة (Shop Drawings) واعتماد جداول توريد المواد والمعدات.",
            },
            {
              step: "02",
              title: "أعمال البنية التحتية والصب الخرساني",
              desc: "الحفر الإنشائي، معالجة التربة، وصب القواعد الخرسانية المسلحة الحاملة لآلات ومعدات التشغيل الثقيلة.",
            },
            {
              step: "03",
              title: "تركيب الهياكل والشبكات الميكانيكية",
              desc: "رفع وتركيب الهياكل الفولاذية، كسوة الأسقف المعزولة (Sandwich Panels)، وتثبيت شبكات الأنابيب والتهوية.",
            },
            {
              step: "04",
              title: "التشغيل التجريبي والتسليم النهائي",
              desc: "إجراء اختبارات التشغيل البارد والساخن بالتنسيق مع الجهات المعنية واستخراج شهادات الإشغال والتسليم النهائي.",
            },
          ],
          gallery: [
            {
              url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
              title: "تركيب الهياكل المعدنية والجمالونات",
              caption: "تركيب الهياكل الفولاذية مسبقة الصنع لمستودع لوجستي بمساحة 15,000 متر مربع.",
            },
            {
              url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
              title: "شبكات الأنابيب والمرافق الميكانيكية",
              caption: "تمديد شبكات الأنابيب الصناعية عالية الضغط مع اختبارات اللحام غير الإتلافي (NDT).",
            },
            {
              url: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=80",
              title: "الإشراف الهندسي الميداني المستمر",
              caption: "مهندسو شاورنا يشرفون على مراحل التركيب والتفتيش الميداني في المدن الصناعية بالمملكة.",
            },
          ],
          specs: [
            { label: "الأكواد والمواصفات المعتمدة", value: "كود البناء السعودي (SBC 301-306) · معايير مدن · AISC / AWS" },
            { label: "الخرسانة والصلب الإنشائي", value: "خرسانة عالية المقاومة C35/C40 · صلب إنشائي عالي المتانة ASTM A992" },
            { label: "معايير السلامة المهنية والموقع", value: "لوائح OSHA 1926 للإنشاءات الصناعية · سياسة الصفر في الحوادث" },
            { label: "ضبط الجودة والفحوصات", value: "فحص لحام بالموجات فوق الصوتية (NDT) · اختبارات كسر مكعبات الخرسانة" },
            { label: "إدارة ومتابعة المشروع", value: "تتبع المسار الحرج عبر برامج Primavera P6 مع تقارير إنجاز أسبوعية" },
          ],
          faq: [
            {
              q: "هل تقدم شركة شاورنا خدمات التنفيذ بنظام تسليم المفتاح (Turnkey EPC)؟",
              a: "نعم، نتولى دور المقاول العام المتكامل بدءاً من دراسة الموقع وتجهيز التربة حتى التركيبات الميكانيكية والتشغيل التجريبي واستخراج التراخيص اللازمة.",
            },
            {
              q: "كيف يتم ضبط الجداول الزمنية وتفادي تأخير التسليم في المشاريع الصناعية؟",
              a: "نعتمد على التخطيط الرقمي المتقدم ومراقبة المسار الحرج (Critical Path) مع توفير سلاسل إمداد محلية موثوقة وفرق عمل متعددة الورديات لتسريع وتيرة الإنجاز.",
            },
          ],
        },
        {
          id: "agriculture",
          num: "03",
          title: "الخدمات الزراعية",
          description: "تجهيز الأراضي، وإنشاء شبكات الري، والدعم الزراعي المستمر للمزارع التجارية والعقارات الزراعية الكبرى.",
          bullets: [
            "تسوية الأراضي وشبكات الري",
            "الزراعة والدعم الفني الزراعي",
            "برامج الصيانة الموسمية",
          ],
          image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
          tagline: "تسوية الأراضي بالليزر، هندسة شبكات الري الحديثة، وبرامج التطوير الزراعي المستدام",
          extendedSummary: "توفر شركة شاورنا الصناعية حلولاً هندسية متقدمة للمزارع الإنتاجية والمشاريع الزراعية الواسعة والمشاريع البيئية في مختلف مناطق المملكة. نجمع بين الخبرة الميدانية والمعدات الثقيلة المتخصصة لتنفيذ أعمال تسوية الأراضي بنظام توجيه الليزر والـ GPS، وتصميم وتركيب شبكات الري بالتنقيط والري المحوري الموفرة للمياه، وبناء محطات الضخ وخزانات التجميع الاستراتيجية. نعمل على تحسين خواص التربة ورفع كفاءة الإنتاج الزراعي بما يتكامل مع أهداف التنمية الزراعية المستدامة ومبادرة السعودية الخضراء.",
          pillars: [
            {
              title: "تسوية الأراضي بالليزر وأنظمة GPS ثلاثية الأبعاد",
              desc: "تسوية طوبوغرافية بالغة الدقة بنظام الليزر ثلاثي الأبعاد لضمان التوزيع المتجانس لمياه الري ومنع تراكم المياه أو انجراف التربة.",
              metric: "+/- 5mm Precision",
            },
            {
              title: "شبكات الري الحديثة (بالتنقيط والمحوري)",
              desc: "تصميم وتنفيذ شبكات الري الآلية المزودة بمحابس كهرومغناطيسية وحساسات رطوبة لتقنين استهلاك المياه بنسبة تصل إلى 40%.",
              metric: "Up to 40% Water Savings",
            },
            {
              title: "محطات الضخ والمنظومات الهيدروليكية",
              desc: "توريد وتركيب مضخات الآبار الارتوازية، محطات الفلترة الرملية والأوتوماتيكية، وخزانات التجميع الخرسانية والمبطنة.",
              metric: "Heavy Ag-Hydraulics",
            },
            {
              title: "استصلاح التربة والدعم الفني الزراعي المستمر",
              desc: "تحليل كيميائي وفيزيائي للتربة والمياه وتطبيق برامج التسميد العضوي وتحسين النفاذية لرفع إنتاجية المحاصيل الحقلية والأشجار.",
              metric: "Yield Optimization",
            },
          ],
          workflow: [
            {
              step: "01",
              title: "المسح الطوبوغرافي وتحليل المياه والتربة",
              desc: "رفع مساحي متقدم باستخدام الدرون وأجهزة GPS، وفحص عينات التربة ودرجة ملوحة مياه الآبار.",
            },
            {
              step: "02",
              title: "التصميم الهيدروليكي وشبكات التغذية",
              desc: "حسابات الضغوط والتدفق واختيار أقطار الأنابيب ومواقع محابس التحكم لضمان كفاءة الضخ الموحد.",
            },
            {
              step: "03",
              title: "التسوية الميدانية ومد الخطوط الحقلية",
              desc: "تسوية الأراضي بجرارات الليزر، وحفر وتمديد خطوط الـ HDPE والـ PVC وتركيب لوحات التحكم الآلي.",
            },
            {
              step: "04",
              title: "المعايرة وضبط التدفق والتسليم",
              desc: "اختبار الضغط التشغيلي، ومعايرة أجهزة التنقيط وتدريب المشرفين المحليين على تشغيل وصيانة المحطة.",
            },
          ],
          gallery: [
            {
              url: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
              title: "تسوية وتجهيز الأراضي الزراعية الواسعة",
              caption: "أعمال الحراثة العميقة والتسوية الطوبوغرافية لمشروع زراعي بمساحة 500 هكتار.",
            },
            {
              url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
              title: "شبكات الري الذكية والبيوت المحمية",
              caption: "أنظمة التغذية المائية والتسميد المؤتمتة ذات الكفاءة العالية في استهلاك الموارد.",
            },
            {
              url: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80",
              title: "معدات التسوية ومحطات الضخ الهيدروليكي",
              caption: "أسطول معدات حديث لتنفيذ شبكات الري الميدانية ومحطات الضخ من الآبار الارتوازية.",
            },
          ],
          specs: [
            { label: "المعايير الهيدروليكية", value: "معايير منظمة الأغذية والزراعة (FAO) · مواصفات وزارة البيئة والمياه والزراعة" },
            { label: "مواصفات شبكات الأنابيب", value: "بولي إيثيلين عالي الكثافة (HDPE PE100) · أنابيب uPVC المقواة بالضغط" },
            { label: "دقة التسوية بالليزر", value: "مستقبلات ليزر ثنائية الميل بدقة هامش خطأ لا يتجاوز +/- 5 ملم" },
            { label: "أنظمة الأتمتة والمراقبة", value: "لوحات تحكم ذكية تعمل بالطاقة الشمسية مع تحكم عن بعد عبر الجوال" },
            { label: "الضمان والدعم الفني", value: "ضمان تشغيلي شامل على الشبكة والمضخات ومتابعة موسمية للتربة والمحصول" },
          ],
          faq: [
            {
              q: "كيف تساهم أنظمة الري التي تصممونها في خفض تكاليف التشغيل واستهلاك المياه؟",
              a: "نصمم شبكات ري ذات قطارات تعويض الضغط (Pressure Compensating) مع وحدات تحكم مبرمجة ومستشعرات رطوبة، مما يمنع الهدر المائي ويوفر استهلاك الديزل والكهرباء في تشغيل المضخات.",
            },
            {
              q: "هل تقدمون خدمات الصيانة الدورية لمحطات الضخ وشبكات الري بعد التنفيذ؟",
              a: "نعم، نقدم عقود صيانة موسمية وشاملة تشمل فحص الفلاتر، وتطهير الخطوط من الأملاح، وصيانة المحركات والمضخات الغاطسة لضمان استمرارية الإنتاج.",
            },
          ],
        },
      ],
    },
    aboutPage: {
      breadcrumbHome: "الرئيسية",
      breadcrumbCurrent: "عن الشركة",
      eyebrow: "التميز التشغيلي والهندسي",
      heroHeading: "عن شركة شورنا الصناعية",
      heroDescription:
        "تأسست شركة شورنا الصناعية لسد الفجوة بين التصميم والتنفيذ الفعلي على الأرض — بمتابعة المشروع من أول حفرية حتى آخر معاينة، والبقاء كفريق يحافظ على أداء المباني والأراضي بعد التسليم.",
      narrativeBadge: "منهجية العمل الميداني",
      narrativeHeading: "سد الفجوة بين المخططات والواقع التنفيذي",
      narrativeP1:
        "تأسست شركة شورنا الصناعية لسد الفجوة بين التصميم والتنفيذ الفعلي على الأرض — بمتابعة المشروع من أول حفرية حتى آخر معاينة، والبقاء كفريق يحافظ على أداء المباني والأراضي بعد التسليم.",
      narrativeP2:
        "نحن نؤمن بأن المنشآت الصناعية وواجهات المباني المعمارية لا تتطلب فقط حلولاً هندسية نظرية، بل تتطلب قيادة ميدانية حازمة، وتطبيقاً دقيقاً لمعايير كود البناء السعودي (SBC)، وبروتوكولات الوصول بالحبال (IRATA)، ومواصفات Cleanova الاستثنائية للواجهات.",
      discussButton: "ناقش مشروعك مع خبرائنا",
      servicesButton: "استعراض الخدمات",
      metricTag: "متوافق مع رؤية المملكة 2030",
      metricHeading: "التزام مطلق بالسلامة وسرعة الجاهزية التشغيلية",
      pillarsBadge: "ركائز العمل",
      pillarsHeading: "القيم التشغيلية لشركة شورنا الصناعية",
      pillarsSubheading: "المبادئ الأربعة الراسخة التي تحكم كل موقع مشروع ووردية عمل في كافة أرجاء المملكة.",
      mandatoryStandard: "معيار تشغيلي إلزامي",
      contactBadge: "التواصل المباشر",
      contactHeading: "حدّثونا عن موقع العمل.",
      contactBody: "تواصلوا مع الفريق مباشرة، أو أرسلوا تفاصيل المشروع وسنعاود التواصل بخصوص النطاق والجدولة.",
      directPhoneLabel: "الهاتف المباشر",
      directPhone: "+966 57 452 5139",
      directEmailLabel: "البريد الإلكتروني",
      directEmail: "info@shourna.com",
      officeLabel: "المكتب والمقر",
      officeAddress: "الرياض، المملكة العربية السعودية",
      instantStartTitle: "هل ترغب ببدء العمل على الفور؟",
      instantStartDesc: "سجل بيانات مشروعك واطلب زيارة ميدانية فورية من أحد مهندسينا المختصين.",
      instantStartButton: "إرسال تفاصيل المشروع الآن",
      pillars: [
        {
          num: "01",
          title: "تنفيذ بقيادة هندسية",
          desc: "كل نطاق عمل يخطّط من قِبل من نفّذوا أعمالاً مماثلة فعلياً، لا من قام بتسعيرها فقط.",
        },
        {
          num: "02",
          title: "السلامة والالتزام",
          desc: "إجراءات السلامة المهنية وتصاريح العمل مطبّقة في كل موقع وكل وردية.",
        },
        {
          num: "03",
          title: "تغطية إقليمية",
          desc: "طواقم ومعدات جاهزة للتحرك في مختلف مناطق المملكة خلال وقت قصير.",
        },
        {
          num: "04",
          title: "جهة تواصل واحدة",
          desc: "مسؤول مشروع واحد يتابع العمل من التسعير حتى الإغلاق النهائي.",
        },
      ],
    },
    projectsPage: {
      breadcrumbHome: "الرئيسية",
      breadcrumbCurrent: "المشاريع",
      eyebrow: "سجل الإنجاز والقدرات الميدانية",
      heroHeading: "مشاريع شركة شورنا الصناعية",
      heroSubheading:
        "نماذج توضح نطاق الأعمال والقدرات التنفيذية في مشاريع الإنشاءات الصناعية، وهندسة وصيانة الواجهات، والخدمات الزراعية عبر مناطق المملكة.",
      placeholderNotice: "ملاحظة: استبدلوا هذه النماذج بأسماء المشاريع الفعلية والصور والأرقام عند الجاهزية.",
      filterAll: "كافة المشاريع",
      filterIndustrial: "المشاريع الصناعية",
      filterFacade: "صيانة وتنظيف الواجهات",
      filterAgriculture: "الخدمات الزراعية",
      scopeHeading: "نطاق التنفيذ المعتمد:",
      requestSurveyButton: "طلب معاينة أو دراسة لمشروع مماثل",
      bottomBadge: "مشاريع تسليم مفتاح",
      bottomHeading: "هل تخطط لمشروع صناعي، برج تجاري، أو مشروع زراعي؟",
      bottomDesc: "يقدم مهندسونا عروض أسعار تفصيلية، وجداول زمنية صارمة، وتقارير معاينة فنية متوافقة مع متطلبات كود البناء السعودي.",
      bottomButton: "ابدأ مناقشة مشروعك",
      projects: [
        {
          id: "facility-expansion",
          tag: "صناعي",
          categoryKey: "industrial",
          title: "توسعة منشأة — نموذج مبدئي",
          description: "أعمال مدنية وإنشائية لتوسعة منشأة تصنيعية.",
          scopePoints: [
            "الأساسات الخرسانية وتسوية الموقع",
            "تصنيع وتوريد الهياكل الفولاذية",
            "تركيب الأنظمة الميكانيكية والتسليم",
          ],
          location: "المدينة الصناعية، الرياض",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "tower-facade",
          tag: "واجهات",
          categoryKey: "facade",
          title: "برنامج صيانة واجهات برج — نموذج مبدئي",
          description: "عقد استبدال كسوة وتنظيف بالحبال.",
          scopePoints: [
            "استبدال وترميم ألواح الكلادينج والزجاج",
            "تجديد فواصل السيليكون والعوازل المائية",
            "أطقم نزول بالحبال معتمدة من IRATA ووحدات BMU",
          ],
          location: "طريق الملك فهد، الرياض",
          image: "/images/facade-cleaning.jpg",
        },
        {
          id: "estate-irrigation",
          tag: "زراعي",
          categoryKey: "agriculture",
          title: "ري عقار زراعي — نموذج مبدئي",
          description: "تركيب شبكة ري لعقار زراعي تجاري.",
          scopePoints: [
            "تسوية الأراضي بتقنيات الليزر الحديثة",
            "تمديد شبكات الري الذكي والتنقيط",
            "محطات ضخ آلية وبرامج صيانة دورية",
          ],
          location: "منطقة القصيم",
          image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    contactPage: {
      breadcrumbHome: "الرئيسية",
      breadcrumbCurrent: "تواصل معنا",
      eyebrow: "التواصل المباشر والاستشارات الفنية",
      heading: "حدّثونا عن موقع العمل.",
      subheading: "تواصلوا مع الفريق مباشرة، أو أرسلوا تفاصيل المشروع وسنعاود التواصل بخصوص النطاق والجدولة.",
      infoBadge: "بيانات المقر والتواصل",
      infoHeading: "فريق هندسي متكامل في خدمتكم",
      infoDesc: "تتواجد طواقمنا الهندسية وإدارات المشاريع الميدانية لتقديم الدعم الفني، وجدولة المعاينات، وإعداد خطط تنفيذ شاملة في كافة مناطق المملكة.",
      phoneLabel: "الاتصال المباشر",
      phone: "+966 57 452 5139",
      emailLabel: "البريد الإلكتروني المعتمد",
      email: "info@shourna.com",
      addressLabel: "المقر الرئيسي",
      address: "الرياض، المملكة العربية السعودية — المدينة الصناعية الثانية",
      hoursLabel: "الاستجابة الميدانية",
      hours: "طوارئ الصيانة والانتشار السريع على مدار 24/7",
      sbcBadge: "كود البناء السعودي (SBC)",
      irataBadge: "معايير IRATA المعتمدة",
      cleanovaBadge: "معايير Cleanova للواجهات",
      formTitle: "إرسال تفاصيل واستفسار المشروع",
      formSubtitle: "أدخل تفاصيل موقع العمل والنطاق المستهدف ليقوم مهندسونا بالتواصل معكم فوراً.",
      fullName: "الاسم الكامل *",
      fullNamePlaceholder: "م. محمد السالم",
      company: "الشركة / المؤسسة *",
      companyPlaceholder: "اسم الجهة أو المنشأة",
      emailInput: "البريد الإلكتروني للعمل *",
      emailPlaceholder: "name@company.com",
      phoneInput: "رقم الجوال (المملكة) *",
      phonePlaceholder: "05XXXXXXXX",
      serviceLine: "خط الخدمة المطلوب",
      serviceOptions: [
        "تنظيف وصيانة واجهات المباني",
        "تنفيذ متكامل للمنشآت الصناعية",
        "الخدمات الزراعية",
      ],
      location: "موقع المشروع",
      locationOptions: [
        "الرياض",
        "المنطقة الشرقية",
        "المنطقة الغربية",
        "نيوم / البحر الأحمر",
        "منطقة أخرى",
      ],
      scope: "نبذة عن موقع العمل ونطاق المشروع المطلوب",
      scopePlaceholder: "اذكر المساحة التقريبية، نوع المبنى أو المنشأة، والجدول الزمني المفضل للبدء...",
      submit: "إرسال تفاصيل المشروع للمهندس المختص",
      submitting: "جاري الإرسال...",
      successTitle: "تم استلام تفاصيل المشروع بنجاح",
      successMessage: "شكراً لتواصلكم مع شركة شاورنا الصناعية. سنقوم بمراجعة نطاق العمل والتواصل معكم خلال 24 ساعة لترتيب المعاينة والجدولة.",
      another: "إرسال استفسار آخر",
    },
  },
  en: {
    nav: {
      brand: "Shourna Industrial Company",
      brandTag: "SHOURNA INDUSTRIAL CO.",
      home: "Home",
      services: "Services",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      discussProject: "Discuss a project",
      switchLang: "العربية",
      servicesDropdownTitle: "Engineering Disciplines",
      allServices: "Explore All Services",
    },
    hero: {
      eyebrow: "Facade Cleaning & Maintenance · Integrated Industrial Execution · Agricultural Services",
      headline: "Built for the ground it stands on.",
      subheading:
        "Shourna Industrial Company delivers industrial project execution, facade maintenance and cleaning, and agricultural services across the Kingdom — engineered for durability, scheduled for uptime.",
      ctaPrimary: "Discuss a project",
      ctaSecondary: "Explore Capabilities",
      locationBadge: "Kingdom of Saudi Arabia · National Execution",
      sbcBadge: "Saudi Building Code (SBC) Compliance",
      irataBadge: "IRATA Rope Access Protocols",
      cleanovaBadge: "Cleanova Standard Alignment",
    },
    stats: {
      stat1Number: "3",
      stat1Title: "3 core service lines",
      stat1Desc: "Industrial civil works, building envelope engineering, and agricultural infrastructure.",
      stat2Number: "20+",
      stat2Title: "20+ projects delivered (Placeholder)",
      stat2Desc: "Executed across industrial cities and landmark commercial facilities.",
      stat3Number: "24/7",
      stat3Title: "24/7 maintenance response (Placeholder)",
      stat3Desc: "Immediate field response and uninterrupted operational support around the clock.",
    },
    servicesOverview: {
      badge: "Disciplines & Capabilities",
      heading: "Engineered disciplines for national infrastructure.",
      subheading:
        "Turnkey capabilities tailored to Saudi Arabia's demanding operational environments, safety protocols, and rigorous project schedules.",
      exploreAll: "Explore All Services",
      detailsLink: "Service Details & Scope",
      cards: [
        {
          id: "facade-cleaning-maintenance",
          num: "01",
          title: "Facade Cleaning & Maintenance",
          desc: "Comprehensive cleaning and maintenance solutions for all building facades to ensure durability and appearance.",
          href: "/services/facade-cleaning-maintenance",
        },
        {
          id: "industrial",
          num: "02",
          title: "Integrated Execution for Industrial Facilities",
          desc: "End-to-end execution for industrial facilities — from civil works and structural steel to mechanical installation and commissioning.",
          href: "/services/industrial",
        },
        {
          id: "agriculture",
          num: "03",
          title: "Agricultural Services",
          desc: "Land preparation, irrigation infrastructure and ongoing agronomic support for commercial and estate-scale farming operations.",
          href: "/services/agriculture",
        },
      ],
    },
    corporate: {
      badge: "Operational Standard",
      heading: "Corporate Infrastructure & Engineering Integrity",
      p1: "Shourna Industrial Company was formed to close the gap between design intent and site reality — carrying projects from first excavation to last inspection, and staying on as the team that keeps buildings and land performing afterward.",
      p2: "Operating under the Saudi Building Code (SBC), IRATA guidelines, and Cleanova standards for facade cleaning and maintenance, we protect and preserve assets with zero compromise on safety.",
      pillar1Title: "Safety & compliance",
      pillar1Desc: "HSE procedures and permit-to-work discipline on every site, every shift.",
      pillar2Title: "Engineering-led delivery",
      pillar2Desc: "Every scope is planned by people who have run the work, not just priced it.",
      pillar3Title: "Regional reach",
      pillar3Desc: "Crews and equipment positioned to mobilize across the Kingdom on short notice.",
      readMore: "Read More About Us",
      requestConsultation: "Request Consultation",
      brandCaption: "Shourna Industrial Company",
      locationCaption: "Kingdom of Saudi Arabia",
      standardsTag: "SBC & IRATA Protocols",
    },
    projectsShowcase: {
      badge: "Field Track Record",
      heading: "Selected Turnkey Deliveries",
      subheading:
        "Demonstrated turnkey capabilities across industrial manufacturing zones, high-rise architectural facades, and commercial agricultural grounds.",
      exploreAll: "View All Projects",
      requestSimilar: "Request Survey for Similar Project",
      items: [
        {
          title: "Facility Expansion — Placeholder",
          category: "Industrial",
          location: "Industrial City 2, Riyadh",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
          specs: "Civil and structural works for a manufacturing facility expansion.",
        },
        {
          title: "Tower Facade Program — Placeholder",
          category: "Facade",
          location: "King Fahd Road, Riyadh",
          image: "/images/facade-cleaning.jpg",
          specs: "Cladding replacement and rope-access cleaning contract.",
        },
        {
          title: "Estate Irrigation — Placeholder",
          category: "Agriculture",
          location: "Al-Qassim Region",
          image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
          specs: "Irrigation network installation across a commercial farm estate.",
        },
      ],
    },
    cta: {
      badge: "National Execution · Rapid Mobilization",
      heading: "Tell us about the site.",
      subheading: "Reach the team directly, or send project details and we'll follow up with scope and scheduling.",
      phone: "+966 57 452 5139",
      email: "info@shourna.com",
      button: "Discuss a project",
    },
    footer: {
      description:
        "Shourna Industrial Company delivers industrial project execution, facade maintenance and cleaning, and agricultural services across the Kingdom — engineered for durability, scheduled for uptime.",
      sbcBadge: "Saudi Building Code (SBC)",
      irataBadge: "IRATA Protocols",
      cleanovaBadge: "Cleanova Facade Standards",
      quickLinksTitle: "Navigation",
      servicesTitle: "Service Disciplines",
      contactTitle: "Headquarters & Inquiries",
      rights: "Shourna Industrial Company. All rights reserved.",
      address: "Industrial City 2, Riyadh, Kingdom of Saudi Arabia",
      phone: "+966 57 452 5139",
      email: "info@shourna.com",
      requestSurvey: "Request Site Survey",
      country: "Kingdom of Saudi Arabia",
      commercial: "Commercial Registration Certified",
      vision: "Saudi Vision 2030",
      home: "Home",
      services: "Services",
      about: "About Us",
      projects: "Delivered Projects",
      contact: "Contact Us",
      service1: "Facade Cleaning & Maintenance",
      service2: "Integrated Execution for Industrial Facilities",
      service3: "Agricultural Services",
    },
    modal: {
      badge: "SICS Technical Consultation",
      title: "Initiate Project Discussion",
      fullName: "Full Name *",
      fullNamePlaceholder: "Eng. Mohammed Al-Salem",
      company: "Company / Entity *",
      companyPlaceholder: "Company or Organization name",
      email: "Corporate Email *",
      emailPlaceholder: "name@company.com",
      phone: "Phone Number (KSA) *",
      phonePlaceholder: "05XXXXXXXX",
      serviceLine: "Primary Service Line",
      serviceOptions: [
        "Facade Cleaning & Maintenance",
        "Integrated Execution for Industrial Facilities",
        "Agricultural Services",
      ],
      location: "Project Location",
      locationOptions: [
        "Riyadh Region",
        "Eastern Province",
        "Western Region",
        "NEOM / Red Sea",
        "Other In-Kingdom Region",
      ],
      scope: "Scope Summary & Dimensions",
      scopePlaceholder: "Approximate footprint, elevation, steel tonnage, or target start date...",
      cancel: "Cancel",
      submit: "Submit Project Brief",
      submitting: "Submitting...",
      successTitle: "Project Brief Received Successfully",
      successMessage: "Thank you for contacting Shourna Industrial Company. Our engineering team will reach out within 24 hours to review your scope and scheduling.",
      close: "Close",
    },
    servicesPage: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Engineering Disciplines",
      heroHeading: "Shourna Industrial Services",
      heroSubheading:
        "Comprehensive turnkey capabilities tailored to Saudi Arabia's demanding operational environments, safety protocols, and rigorous project schedules — engineered for durability, scheduled for uptime.",
      sbcBadge: "Saudi Building Code (SBC)",
      irataBadge: "IRATA Rope Access Protocols",
      uptimeBadge: "24/7 Field Mobilization Readiness",
      scopeHeading: "Scope of Work & Turnkey Deliverables",
      ctaCardButton: "Request Technical Study for this Scope",
      siteSurveyButton: "Schedule Site Survey",
      bottomBadge: "National Execution Readiness",
      bottomHeading: "Need an engineering consultation or custom scope?",
      bottomDesc: "Our engineers conduct site surveys, assess structural requirements or facade maintenance specifications, and provide comprehensive pricing and scheduling proposals.",
      bottomButton: "Discuss a project",
      otherServicesHeading: "Other Engineering Disciplines",
      backToServices: "Back to All Services",
      quickNavOverview: "Overview",
      quickNavCapabilities: "Capabilities",
      quickNavWorkflow: "Methodology",
      quickNavGallery: "Field Showcase",
      quickNavSpecs: "Specifications",
      quickNavFaq: "FAQ",
      workflowBadge: "Project Lifecycle Rigor",
      workflowHeading: "Execution Lifecycle & Quality Protocol",
      workflowSubheading: "A multidisciplinary operational workflow ensuring structural safety, timeline adherence, and verifiable quality sign-offs.",
      pillarsBadge: "Engineering Capabilities",
      pillarsHeading: "Operational Pillars & Technical Capabilities",
      galleryBadge: "Field Documentation",
      galleryHeading: "Operational Environment & Technical Fleet",
      gallerySubheading: "High-resolution photographic documentation highlighting Shourna's specialized teams and modern equipment across Saudi job sites.",
      specsBadge: "Governing Standards",
      specsHeading: "Technical Specifications & Regulatory Matrix",
      faqBadge: "Client Inquiries",
      faqHeading: "Frequently Asked Technical Questions",
      items: [
        {
          id: "facade-cleaning-maintenance",
          num: "01",
          title: "Facade Cleaning & Maintenance",
          description: "Comprehensive cleaning and maintenance solutions for all building facades to ensure durability and appearance.",
          bullets: [
            "High-rise glass & window cleaning via IRATA rope access & BMU",
            "Structural glazing replacement, double-glazed units & cladding repairs",
            "Joint resealing, weatherproofing & structural silicone restoration",
            "Scheduled maintenance contracts & certified compliance inspection reports",
          ],
          image: "/images/facade-cleaning.jpg",
          tagline: "Turnkey High-Rise Facade Cleaning, Structural Envelope Maintenance & Rope Access Engineering",
          extendedSummary: "Shourna Industrial Company combines advanced facade cleaning technologies with comprehensive structural and preventive maintenance programs for building envelopes and high-rise towers. Operating under certified IRATA rope access standards and Building Maintenance Units (BMU), we deliver DI/RO pure-water window washing, replacement of cracked insulated glass units (IGUs), renewal of structural silicone weather seals, and anchoring of architectural cladding panels. All operations comply with the Saudi Building Code (SBC) and Cleanova standards, ensuring asset longevity, architectural luster, and uncompromising occupant safety.",
          pillars: [
            {
              title: "IRATA Certified Rope Access & BMU Systems",
              desc: "Industrial abseiling crews licensed for IRATA Levels 1-3 accessing complex architectural heights safely.",
              metric: "IRATA Levels 1-3",
            },
            {
              title: "Structural Glazing & Weatherproofing Restoration",
              desc: "Safe replacement of damaged IGUs and high-performance silicone sealant injection resisting UV and desert sandstorms.",
              metric: "10-Year Seal Integrity",
            },
            {
              title: "Pure Deionized Water Washing (DI/RO)",
              desc: "Mobile filtration systems producing 100% mineral-free water for streakless, residue-free architectural glass clarity.",
              metric: "100% Spot-Free",
            },
            {
              title: "Scheduled SLA Programs & Structural Compliance",
              desc: "Structured quarterly and annual service agreements accompanied by photographic inspection sign-offs.",
              metric: "Corporate SLA Tier",
            },
          ],
          workflow: [
            {
              step: "01",
              title: "Engineering Survey & Anchor Testing",
              desc: "Roof-level rigging inspection, mechanical anchor load testing, and hazard mapping before deployment.",
            },
            {
              step: "02",
              title: "Safety Protocol & High-Risk Permits",
              desc: "Comprehensive method statements and height permits-to-work coordinated with facility safety management.",
            },
            {
              step: "03",
              title: "Specialized Cleaning & Envelope Restoration",
              desc: "Sequential pure-water washing, sealant renewal, and glass panel replacement with hydraulic vacuum lifters.",
            },
            {
              step: "04",
              title: "Final QA Audit & Digital Sign-off",
              desc: "Post-work quality verification and delivery of a documented engineering condition report.",
            },
          ],
          gallery: [
            {
              url: "/images/facade-cleaning.jpg",
              title: "Specialized Boom Truck & Facade Window Cleaning",
              caption: "Hydraulic crane truck equipped with certified safety basket and high-reach window cleaning systems.",
            },
            {
              url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
              title: "Architectural Cladding & Glazing Maintenance",
              caption: "Structural joint resealing and replacement of exterior architectural panels.",
            },
            {
              url: "https://images.unsplash.com/photo-1506158669146-619067261a76?auto=format&fit=crop&w=1200&q=80",
              title: "Pristine Architectural Curtain Wall Care",
              caption: "Spot-free deionized water cleaning results on curtain wall facades.",
            },
          ],
          specs: [
            { label: "Safety & Compliance Standards", value: "IRATA International · Cleanova Protocol · SBC 201/301 Code" },
            { label: "Height Operational Reach", value: "Up to +300m elevation (unrestricted rope access rigging)" },
            { label: "Materials & Equipment", value: "100% Deionized Pure Water · Neutral Structural Silicone · Vacuum Lifters" },
            { label: "HSE Risk Controls", value: "Dual independent rope systems · Ground perimeter exclusion zone · NDT inspection" },
            { label: "Mobilization & Emergency Readiness", value: "24/7 rapid deployment for urgent glazing damage across KSA" },
          ],
          faq: [
            {
              q: "How do you ensure treated architectural glass and seals are protected during cleaning and repairs?",
              a: "We utilize soft-bristle facade brushes, pure deionized water free of abrasive chemicals, and neutral-cure structural silicones fully compatible with low-E glass coatings.",
            },
            {
              q: "How does Shourna handle urgent facade emergencies like loose panels or shattered glass?",
              a: "Our 24/7 rapid response team mobilizes immediately to cordon the ground area, secure broken panels with temporary bracing, and measure for permanent replacement.",
            },
            {
              q: "Can cleaning and structural maintenance be bundled into a single contract?",
              a: "Yes, combining routine cleaning with scheduled sealant and cladding inspections provides significant cost savings and prevents minor seal failures from escalating into interior water damage.",
            },
          ],
        },
        {
          id: "industrial",
          num: "02",
          title: "Integrated Execution for Industrial Facilities",
          description: "End-to-end execution for industrial facilities — from civil works and structural steel to mechanical installation and commissioning.",
          bullets: [
            "Site works & structural steel",
            "Mechanical & piping installation",
            "Commissioning & handover",
          ],
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
          tagline: "Turnkey EPC Engineering for Industrial Plants, Heavy Structural Steel & Process Systems",
          extendedSummary: "Shourna Industrial delivers comprehensive turnkey execution across industrial plant construction, heavy logistics warehousing, and processing facilities. From structural foundations and heavy structural steel fabrication to high-pressure utility piping and electromechanical integration, our multidisciplinary engineering teams ensure full compliance with the Saudi Building Code (SBC) and MODON standards. We manage full lifecycle delivery with stringent QA/QC protocols, zero-tolerance safety policies, and guaranteed commercial commissioning timelines.",
          pillars: [
            {
              title: "Structural Steel Erection & Heavy Civil Works",
              desc: "Heavy reinforced dynamic foundations and millimeter-precision erection of structural steel portal frames.",
              metric: "AISC Heavy Grade",
            },
            {
              title: "Process Piping & Mechanical Utilities",
              desc: "High-pressure process piping, compressed air loops, and NFPA/Civil Defense certified fire suppression lines.",
              metric: "ASME B31.3 Standard",
            },
            {
              title: "Industrial MEP & Automation Integration",
              desc: "Medium/low voltage distribution panels, industrial busways, SCADA cabling, and automated sensor hookups.",
              metric: "Class-A Electromechanical",
            },
            {
              title: "Commissioning & MODON Compliance",
              desc: "Hydrostatic testing, cold/hot commissioning trials, and complete MODON and Civil Defense licensing support.",
              metric: "Turnkey Sign-Off",
            },
          ],
          workflow: [
            {
              step: "01",
              title: "Shop Drawings & Value Engineering",
              desc: "Detailed architectural and structural shop drawings, clash-detection BIM coordination, and material approval submittals.",
            },
            {
              step: "02",
              title: "Substructure & Civil Foundations",
              desc: "Geotechnical stabilization, mass grading, and heavy reinforced foundation pours calibrated for vibrating dynamic machinery.",
            },
            {
              step: "03",
              title: "Superstructure Assembly & MEP Hookups",
              desc: "Tower crane erection of steel trusses, insulated fire-rated sandwich panel cladding, and utility routing.",
            },
            {
              step: "04",
              title: "Commissioning & Authority Sign-Off",
              desc: "Cold/hot run testing, Civil Defense (Salamah) approvals, MODON compliance sign-offs, and as-built documentation delivery.",
            },
          ],
          gallery: [
            {
              url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
              title: "Heavy Structural Steel Erection",
              caption: "Precision steel frame alignment on a 15,000 sqm industrial logistics warehouse facility.",
            },
            {
              url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
              title: "Industrial Piping & Utility Systems",
              caption: "High-pressure stainless process piping installation verified with NDT radiographical testing.",
            },
            {
              url: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=80",
              title: "On-Site Engineering Quality Control",
              caption: "Shourna resident engineers conducting rigorous QA/QC inspections across MODON industrial zones.",
            },
          ],
          specs: [
            { label: "Governing Building Codes", value: "Saudi Building Code (SBC 301-306) · MODON · AISC / AWS" },
            { label: "Concrete & Structural Steel", value: "High-Strength C35/C40 Concrete · Grade 50 ASTM A992 Structural Steel" },
            { label: "Site Safety Standards", value: "OSHA 1926 Industrial Construction · Zero-Accident Site Protocol" },
            { label: "Quality Assurance & Testing", value: "Third-Party Ultrasonic Weld NDT · Comprehensive Concrete Cube Tests" },
            { label: "Project Controls & Scheduling", value: "Primavera P6 Critical-Path Scheduling & Weekly Milestone Reporting" },
          ],
          faq: [
            {
              q: "Does Shourna handle complete turnkey EPC industrial projects?",
              a: "Yes, we act as a complete turnkey contractor managing earthworks, foundations, structural steel, MEP utilities, commissioning, and final authority permits.",
            },
            {
              q: "How do you guarantee industrial delivery timelines without project slippage?",
              a: "We utilize critical-path scheduling and multi-shift work rotations backed by local procurement partners to absorb schedule risks and deliver on target.",
            },
          ],
        },
        {
          id: "agriculture",
          num: "03",
          title: "Agricultural Services",
          description: "Land preparation, irrigation infrastructure and ongoing agronomic support for commercial and estate-scale farming operations.",
          bullets: [
            "Land grading & irrigation networks",
            "Planting & agronomic support",
            "Seasonal maintenance programs",
          ],
          image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
          tagline: "Precision Laser Land Grading, Smart Irrigation Engineering & Commercial Agribusiness Development",
          extendedSummary: "Shourna Industrial delivers robust engineering capabilities for commercial farms, mega agricultural estates, and environmental greening initiatives across Saudi Arabia. Combining heavy earthmoving machinery with agricultural engineering expertise, we execute precision laser and GPS-guided land leveling, design water-efficient drip and center-pivot irrigation systems, and construct high-capacity booster pump stations. Our solutions optimize water utilization, enhance soil productivity, and drive agricultural resilience in line with the Saudi Green Initiative and modern commercial farming standards.",
          pillars: [
            {
              title: "Precision Laser & GPS Land Grading",
              desc: "Millimeter-precision 3D laser and GPS land grading ensuring uniform water distribution and preventing soil erosion or waterlogging.",
              metric: "+/- 5mm Precision",
            },
            {
              title: "High-Efficiency Drip & Pivot Irrigation",
              desc: "Engineering automated drip and center-pivot networks with solenoid valves and telemetry, cutting water consumption by up to 40%.",
              metric: "Up to 40% Water Savings",
            },
            {
              title: "Pump Stations & Water Infrastructure",
              desc: "Deep-well submersible pumps, automated sand-media filter stations, booster manifolds, and lined geomembrane reservoirs.",
              metric: "Heavy Ag-Hydraulics",
            },
            {
              title: "Soil Remediation & Agronomic Advisory",
              desc: "Soil and water salinity diagnostic testing, organic conditioning, and tailored agronomic programs to optimize crop yields.",
              metric: "Yield Optimization",
            },
          ],
          workflow: [
            {
              step: "01",
              title: "Topographic Survey & Agronomic Sampling",
              desc: "Drone and RTK GPS topography mapping alongside laboratory water salinity and soil texture profile analysis.",
            },
            {
              step: "02",
              title: "Hydraulic Network & Irrigation Engineering",
              desc: "Detailed hydraulic head-loss modeling, pipeline sizing, and pressure-compensating emitter network schematics.",
            },
            {
              step: "03",
              title: "Laser Earthworks & Pipeline Trenching",
              desc: "Heavy tractor laser grading, trenching, butt-fusion welding of HDPE trunk lines, and automation cabinet wiring.",
            },
            {
              step: "04",
              title: "Flow Balancing, Commissioning & Handover",
              desc: "System hydrostatic pressure trials, emitter flow rate uniformity calibration, and operator handover training.",
            },
          ],
          gallery: [
            {
              url: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
              title: "Expansive Agricultural Land Preparation",
              caption: "Deep subsoiling and precision land preparation across a 500-hectare commercial agricultural estate.",
            },
            {
              url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
              title: "Smart Irrigation & Controlled Environment",
              caption: "Automated fertigation and precision climate-monitored irrigation networks.",
            },
            {
              url: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80",
              title: "Agricultural Machinery & Pumping Infrastructure",
              caption: "Modern heavy machinery fleet executing deep trenching and high-capacity pump installations.",
            },
          ],
          specs: [
            { label: "Design Standards", value: "FAO Irrigation Guidelines · Ministry of Environment, Water & Agriculture Specs" },
            { label: "Piping Specifications", value: "High-Density Polyethylene (HDPE PE100) · Class-5 uPVC Pipes" },
            { label: "Laser Grading Accuracy", value: "Dual-Slope Laser Receivers with +/- 5mm Field Tolerance" },
            { label: "Automation & Telemetry", value: "Solar-Ready IoT Valve Controllers with Remote Mobile Telemetry" },
            { label: "Warranty & Support", value: "Multi-Season Mechanical & Hydraulic Maintenance Warranty" },
          ],
          faq: [
            {
              q: "How do your irrigation designs reduce water consumption and operational costs?",
              a: "We design pressure-compensating emitter systems coupled with soil moisture sensors and smart scheduling, cutting water waste and reducing pump fuel/electricity bills by up to 40%.",
            },
            {
              q: "Do you offer post-handover maintenance for irrigation infrastructure and pumping skids?",
              a: "Yes, we provide seasonal preventive maintenance programs covering pump overhaul, filter media backwashing, and chemical pipeline flushing to protect against mineral clogging.",
            },
          ],
        },
      ],
    },
    aboutPage: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "About Us",
      eyebrow: "Operational & Engineering Excellence",
      heroHeading: "About Shourna Industrial Company",
      heroDescription:
        "Shourna Industrial Company was formed to close the gap between design intent and site reality — carrying projects from first excavation to last inspection, and staying on as the team that keeps buildings and land performing afterward.",
      narrativeBadge: "Field Execution Rigor",
      narrativeHeading: "Closing the gap between design intent and site reality",
      narrativeP1:
        "Shourna Industrial Company was formed to close the gap between design intent and site reality — carrying projects from first excavation to last inspection, and staying on as the team that keeps buildings and land performing afterward.",
      narrativeP2:
        "We unite industrial civil engineering precision with specialized building exterior maintenance and large-scale agricultural installations. Built with strict adherence to Saudi Building Code (SBC), IRATA guidelines, and Cleanova standards.",
      discussButton: "Discuss Your Project with Us",
      servicesButton: "Explore Capabilities",
      metricTag: "Saudi Vision 2030 Aligned",
      metricHeading: "Uncompromising Safety & Rapid Mobilization",
      pillarsBadge: "Operational Values",
      pillarsHeading: "Why Leading Operators Trust Shourna",
      pillarsSubheading: "The four core operational pillars governing every project site and shift across the Kingdom.",
      mandatoryStandard: "Mandatory Operational Standard",
      contactBadge: "Direct Communication",
      contactHeading: "Tell us about the site.",
      contactBody: "Reach the team directly, or send project details and we'll follow up with scope and scheduling.",
      directPhoneLabel: "Direct Hotline",
      directPhone: "+966 57 452 5139",
      directEmailLabel: "Corporate Email",
      directEmail: "info@shourna.com",
      officeLabel: "Headquarters",
      officeAddress: "Riyadh, Kingdom of Saudi Arabia",
      instantStartTitle: "Ready to Initiate Technical Planning?",
      instantStartDesc: "Submit your scope dimensions and request a technical site survey with our engineers.",
      instantStartButton: "Submit Project Scope Now",
      pillars: [
        {
          num: "01",
          title: "Engineering-led delivery",
          desc: "Every scope is planned by people who have run the work, not just priced it.",
        },
        {
          num: "02",
          title: "Safety & compliance",
          desc: "HSE procedures and permit-to-work discipline on every site, every shift.",
        },
        {
          num: "03",
          title: "Regional reach",
          desc: "Crews and equipment positioned to mobilize across the Kingdom on short notice.",
        },
        {
          num: "04",
          title: "One point of contact",
          desc: "A single project lead follows the work from quotation through close-out.",
        },
      ],
    },
    projectsPage: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Projects",
      eyebrow: "Field Execution Track Record",
      heroHeading: "Delivered Turnkey Projects",
      heroSubheading:
        "Sample projects demonstrating execution capabilities across industrial facilities, high-rise architectural facades, and commercial agricultural grounds.",
      placeholderNotice: "Note: Swap these placeholders for real project names, photos and figures once ready.",
      filterAll: "All Projects",
      filterIndustrial: "Industrial Projects",
      filterFacade: "Facade Maintenance",
      filterAgriculture: "Agriculture Services",
      scopeHeading: "Approved Execution Scope:",
      requestSurveyButton: "Request Survey for Similar Project",
      bottomBadge: "Turnkey EPC Contracts",
      bottomHeading: "Planning an upcoming industrial, facade, or agricultural project?",
      bottomDesc: "Our engineering and delivery teams review scopes, provide detailed turnkey quotations, and schedule onsite surveys.",
      bottomButton: "Initiate Project Discussion",
      projects: [
        {
          id: "facility-expansion",
          tag: "Industrial",
          categoryKey: "industrial",
          title: "Facility Expansion — Placeholder",
          description: "Civil and structural works for a manufacturing facility expansion.",
          scopePoints: [
            "Heavy civil foundations & site grading",
            "Structural steel fabrication and erection",
            "Mechanical setup and commissioning",
          ],
          location: "Industrial City 2, Riyadh",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "tower-facade",
          tag: "Facade",
          categoryKey: "facade",
          title: "Tower Facade Program — Placeholder",
          description: "Cladding replacement and rope-access cleaning contract.",
          scopePoints: [
            "Composite panel repair & glass replacement",
            "Weatherproofing silicone & joint sealant renewal",
            "IRATA rope access & BMU cradle operations",
          ],
          location: "King Fahd Road, Riyadh",
          image: "/images/facade-cleaning.jpg",
        },
        {
          id: "estate-irrigation",
          tag: "Agriculture",
          categoryKey: "agriculture",
          title: "Estate Irrigation — Placeholder",
          description: "Irrigation network installation across a commercial farm estate.",
          scopePoints: [
            "Laser-guided land grading & soil preparation",
            "Automated smart irrigation network deployment",
            "Pumping stations and seasonal maintenance",
          ],
          location: "Al-Qassim Region",
          image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    contactPage: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Contact Us",
      eyebrow: "Direct Contact & Technical Inquiries",
      heading: "Tell us about the site.",
      subheading: "Reach the team directly, or send project details and we'll follow up with scope and scheduling.",
      infoBadge: "Headquarters & Inquiries",
      infoHeading: "Dedicated Engineering Team at Your Service",
      infoDesc: "Our engineering and field project managers are mobilized across the Kingdom to provide technical consultation, site surveys, and turnkey execution.",
      phoneLabel: "Direct Phone",
      phone: "+966 57 452 5139",
      emailLabel: "Corporate Email",
      email: "info@shourna.com",
      addressLabel: "Kingdom Headquarters",
      address: "Industrial City 2, Riyadh, Kingdom of Saudi Arabia",
      hoursLabel: "Field Response Window",
      hours: "24/7 Rapid Emergency & Maintenance Dispatch",
      sbcBadge: "Saudi Building Code (SBC)",
      irataBadge: "IRATA Certified",
      cleanovaBadge: "Cleanova Facade Standards",
      formTitle: "Submit Project Scope Brief",
      formSubtitle: "Provide your site location and target scope to receive an engineering assessment within 24 hours.",
      fullName: "Full Name *",
      fullNamePlaceholder: "Eng. Mohammed Al-Salem",
      company: "Company / Organization *",
      companyPlaceholder: "Company or Organization name",
      emailInput: "Corporate Email *",
      emailPlaceholder: "name@company.com",
      phoneInput: "Phone Number (KSA) *",
      phonePlaceholder: "05XXXXXXXX",
      serviceLine: "Primary Service Line",
      serviceOptions: [
        "Facade Cleaning & Maintenance",
        "Integrated Execution for Industrial Facilities",
        "Agricultural Services",
      ],
      location: "Project Location",
      locationOptions: [
        "Riyadh Region",
        "Eastern Province",
        "Western Region",
        "NEOM / Red Sea",
        "Other In-Kingdom Region",
      ],
      scope: "Scope Summary & Dimensions",
      scopePlaceholder: "Approximate footprint, elevation, steel tonnage, or target start date...",
      submit: "Submit Project Brief to Engineering Lead",
      submitting: "Submitting Brief...",
      successTitle: "Project Brief Received Successfully",
      successMessage: "Thank you for contacting Shourna Industrial Company. A designated project engineer will reach out within 24 hours.",
      another: "Submit Another Inquiry",
    },
  },
};
