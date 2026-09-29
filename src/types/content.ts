export type Locale = "ar" | "en";

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
    service4: string;
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
    items: Array<{
      id: string;
      num: string;
      title: string;
      description: string;
      bullets: string[];
      image: string;
    }>;
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
      brand: "شركة شُرنة الصناعية",
      brandTag: "SHOURNA INDUSTRIAL CO.",
      home: "الرئيسية",
      services: "الخدمات",
      about: "عن الشركة",
      projects: "المشاريع",
      contact: "تواصل معنا",
      discussProject: "ناقش مشروعك معنا",
      switchLang: "English",
    },
    hero: {
      eyebrow: "مشاريع صناعية · صيانة واجهات · تنظيف واجهات · خدمات زراعية",
      headline: "نبني على أساس متين.",
      subheading:
        "تقدّم شركة شُرنة الصناعية تنفيذ المشاريع الصناعية، وصيانة وتنظيف الواجهات، والخدمات الزراعية في مختلف مناطق المملكة — بجودة تنفيذ تدوم، وجدولة تحافظ على استمرارية العمل.",
      ctaPrimary: "ناقش مشروعك معنا",
      ctaSecondary: "استكشف خدماتنا",
      locationBadge: "المملكة العربية السعودية · تنفيذ وطني شامل",
      sbcBadge: "امتثال كود البناء السعودي (SBC)",
      irataBadge: "بروتوكولات السلامة IRATA",
      cleanovaBadge: "معايير Cleanova للواجهات",
    },
    stats: {
      stat1Number: "4",
      stat1Title: "4 خطوط خدمة رئيسية",
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
          id: "industrial",
          num: "01",
          title: "تنفيذ متكامل للمنشآت الصناعية",
          desc: "من الأعمال المدنية والإنشاءات الفولاذية إلى التركيبات الميكانيكية والتشغيل التجريبي.",
          href: "/services#industrial",
        },
        {
          id: "facade-maintenance",
          num: "02",
          title: "صيانة واجهات المباني",
          desc: "صيانة إنشائية ومادية مستمرة لواجهات المباني، للحفاظ على الكسوة والزجاج والمواد العازلة آمنة وعازلة للمياه ومطابقة للمعايير.",
          href: "/services#facade-maintenance",
        },
        {
          id: "facade-cleaning",
          num: "03",
          title: "تنظيف واجهات المباني",
          desc: "تنظيف دوري وحسب الطلب لواجهات المباني المرتفعة والأرضية — الزجاج والحجر والكسوة واللافتات — بواسطة فرق مدربة على العمل بالحبال ووحدات الصيانة المعلقة.",
          href: "/services#facade-cleaning",
        },
        {
          id: "agriculture",
          num: "04",
          title: "الخدمات الزراعية وشبكات الري",
          desc: "تجهيز الأراضي، وإنشاء شبكات الري، والدعم الزراعي المستمر للمزارع التجارية والعقارات الزراعية الكبرى.",
          href: "/services#agriculture",
        },
      ],
    },
    corporate: {
      badge: "المعايير التشغيلية",
      heading: "بنية تحتية هندسية راسخة وموثوقية تشغيلية",
      p1: "تأسست شركة شُرنة الصناعية لسد الفجوة بين التصميم والتنفيذ الفعلي على الأرض — بمتابعة المشروع من أول حفرية حتى آخر معاينة، والبقاء كفريق يحافظ على أداء المباني والأراضي بعد التسليم.",
      p2: "وفق كود البناء السعودي (SBC) وتوجيهات IRATA ومعايير Cleanova لتنظيف وصيانة الواجهات، نضمن استدامة الأصول وحمايتها دون أي مساومة على معايير السلامة.",
      pillar1Title: "السلامة والالتزام",
      pillar1Desc: "إجراءات السلامة المهنية وتصاريح العمل في كل موقع.",
      pillar2Title: "تنفيذ بقيادة هندسية",
      pillar2Desc: "تخطيط النطاقات من قِبل مهندسين نفّذوا أعمالاً مماثلة.",
      pillar3Title: "تغطية إقليمية شاملة",
      pillar3Desc: "طواقم ومعدات جاهزة للتحرك في مختلف مناطق المملكة.",
      readMore: "اقرأ المزيد عن الشركة",
      requestConsultation: "طلب استشارة فنية",
      brandCaption: "شركة شُرنة الصناعية",
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
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
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
      phone: "+966 (11) 480-7799",
      email: "info@shourna.com",
      button: "ناقش مشروعك معنا",
    },
    footer: {
      description:
        "تقدّم شركة شُرنة الصناعية تنفيذ المشاريع الصناعية، وصيانة وتنظيف الواجهات، والخدمات الزراعية في مختلف مناطق المملكة — بجودة تنفيذ تدوم، وجدولة تحافظ على استمرارية العمل.",
      sbcBadge: "كود البناء السعودي (SBC)",
      irataBadge: "معايير IRATA",
      cleanovaBadge: "معايير Cleanova للواجهات",
      quickLinksTitle: "روابط الموقع",
      servicesTitle: "الخدمات التخصصية",
      contactTitle: "المقر الرئيسي والتواصل",
      rights: "شركة شُرنة الصناعية. جميع الحقوق محفوظة.",
      address: "الرياض، المملكة العربية السعودية · المدينة الصناعية الثانية",
      phone: "+966 (11) 480-7799",
      email: "info@shourna.com",
      requestSurvey: "طلب معاينة ميدانية",
      country: "المملكة العربية السعودية",
      commercial: "سجل تجاري معتمد",
      vision: "رؤية المملكة 2030",
      home: "الرئيسية",
      services: "خدمات الشركة",
      about: "عن شركة شُرنة",
      projects: "المشاريع المنجزة",
      contact: "تواصل معنا",
      service1: "تنفيذ متكامل للمنشآت الصناعية",
      service2: "صيانة واجهات المباني",
      service3: "تنظيف واجهات المباني (IRATA / BMU)",
      service4: "الخدمات الزراعية وشبكات الري",
    },
    modal: {
      badge: "شركة شُرنة الصناعية · استشارة هندسية",
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
        "تنفيذ متكامل للمنشآت الصناعية",
        "صيانة واجهات المباني",
        "تنظيف واجهات المباني",
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
      successMessage: "شكراً لتواصلكم مع شركة شُرنة الصناعية. سيقوم مهندس المشاريع المختص بالتواصل معكم خلال 24 ساعة لمناقشة نطاق العمل والجدولة.",
      close: "إغلاق",
    },
    servicesPage: {
      breadcrumbHome: "الرئيسية",
      breadcrumbCurrent: "الخدمات التخصصية",
      heroHeading: "خدمات شركة شُرنة الصناعية",
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
      items: [
        {
          id: "industrial",
          num: "01",
          title: "تنفيذ متكامل للمنشآت الصناعية",
          description: "من الأعمال المدنية والإنشاءات الفولاذية إلى التركيبات الميكانيكية والتشغيل التجريبي.",
          bullets: [
            "أعمال الموقع والإنشاءات الفولاذية",
            "تركيب الأنظمة الميكانيكية والأنابيب",
            "التشغيل التجريبي والتسليم",
          ],
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "facade-maintenance",
          num: "02",
          title: "صيانة واجهات المباني",
          description: "صيانة إنشائية ومادية مستمرة لواجهات المباني، للحفاظ على الكسوة والزجاج والمواد العازلة آمنة وعازلة للمياه ومطابقة للمعايير.",
          bullets: [
            "إصلاح الواجهات والزجاج",
            "تجديد المواد العازلة وموانع التسرب",
            "فحص الواجهات وتقارير المطابقة",
          ],
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "facade-cleaning",
          num: "03",
          title: "تنظيف واجهات المباني",
          description: "تنظيف دوري وحسب الطلب لواجهات المباني المرتفعة والأرضية — الزجاج والحجر والكسوة واللافتات — بواسطة فرق مدربة على العمل بالحبال ووحدات الصيانة المعلقة والغسيل بالضغط.",
          bullets: [
            "تنظيف الزجاج والنوافذ للمباني المرتفعة",
            "التنظيف بالحبال ووحدات الصيانة المعلقة",
            "تنظيف الحجر والكسوة واللافتات",
            "عقود تنظيف دورية",
          ],
          image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "agriculture",
          num: "04",
          title: "الخدمات الزراعية",
          description: "تجهيز الأراضي، وإنشاء شبكات الري، والدعم الزراعي المستمر للمزارع التجارية والعقارات الزراعية الكبرى.",
          bullets: [
            "تسوية الأراضي وشبكات الري",
            "الزراعة والدعم الفني الزراعي",
            "برامج الصيانة الموسمية",
          ],
          image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    aboutPage: {
      breadcrumbHome: "الرئيسية",
      breadcrumbCurrent: "عن الشركة",
      eyebrow: "التميز التشغيلي والهندسي",
      heroHeading: "عن شركة شُرنة الصناعية",
      heroDescription:
        "تأسست شركة شُرنة الصناعية لسد الفجوة بين التصميم والتنفيذ الفعلي على الأرض — بمتابعة المشروع من أول حفرية حتى آخر معاينة، والبقاء كفريق يحافظ على أداء المباني والأراضي بعد التسليم.",
      narrativeBadge: "منهجية العمل الميداني",
      narrativeHeading: "سد الفجوة بين المخططات والواقع التنفيذي",
      narrativeP1:
        "تأسست شركة شُرنة الصناعية لسد الفجوة بين التصميم والتنفيذ الفعلي على الأرض — بمتابعة المشروع من أول حفرية حتى آخر معاينة، والبقاء كفريق يحافظ على أداء المباني والأراضي بعد التسليم.",
      narrativeP2:
        "نحن نؤمن بأن المنشآت الصناعية وواجهات المباني المعمارية لا تتطلب فقط حلولاً هندسية نظرية، بل تتطلب قيادة ميدانية حازمة، وتطبيقاً دقيقاً لمعايير كود البناء السعودي (SBC)، وبروتوكولات الوصول بالحبال (IRATA)، ومواصفات Cleanova الاستثنائية للواجهات.",
      discussButton: "ناقش مشروعك مع خبرائنا",
      servicesButton: "استعراض الخدمات",
      metricTag: "متوافق مع رؤية المملكة 2030",
      metricHeading: "التزام مطلق بالسلامة وسرعة الجاهزية التشغيلية",
      pillarsBadge: "ركائز العمل",
      pillarsHeading: "القيم التشغيلية لشركة شُرنة الصناعية",
      pillarsSubheading: "المبادئ الأربعة الراسخة التي تحكم كل موقع مشروع ووردية عمل في كافة أرجاء المملكة.",
      mandatoryStandard: "معيار تشغيلي إلزامي",
      contactBadge: "التواصل المباشر",
      contactHeading: "حدّثونا عن موقع العمل.",
      contactBody: "تواصلوا مع الفريق مباشرة، أو أرسلوا تفاصيل المشروع وسنعاود التواصل بخصوص النطاق والجدولة.",
      directPhoneLabel: "الهاتف المباشر",
      directPhone: "+966 (11) 480-7799",
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
      heroHeading: "مشاريع شركة شُرنة الصناعية",
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
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
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
      phone: "+966 (11) 480-7799",
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
        "تنفيذ متكامل للمنشآت الصناعية",
        "صيانة واجهات المباني",
        "تنظيف واجهات المباني",
        "الخدمات الزراعية وشبكات الري",
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
      successMessage: "شكراً لتواصلكم مع شركة شُرنة الصناعية. سنقوم بمراجعة نطاق العمل والتواصل معكم خلال 24 ساعة لترتيب المعاينة والجدولة.",
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
    },
    hero: {
      eyebrow: "Industrial Projects · Facade Maintenance · Facade Cleaning · Agriculture Services",
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
      stat1Number: "4",
      stat1Title: "4 core service lines",
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
          id: "industrial",
          num: "01",
          title: "Industrial Projects",
          desc: "End-to-end execution for industrial facilities — from civil works and structural steel to mechanical installation and commissioning.",
          href: "/services#industrial",
        },
        {
          id: "facade-maintenance",
          num: "02",
          title: "Facade Maintenance",
          desc: "Ongoing structural and material upkeep for building envelopes — keeping cladding, glazing and sealants safe, weatherproof and compliant.",
          href: "/services#facade-maintenance",
        },
        {
          id: "facade-cleaning",
          num: "03",
          title: "Facade Cleaning",
          desc: "Scheduled and one-off cleaning for high-rise and ground-level facades — glass, stone, cladding and signage — using rope access and BMU.",
          href: "/services#facade-cleaning",
        },
        {
          id: "agriculture",
          num: "04",
          title: "Agriculture Services",
          desc: "Land preparation, irrigation infrastructure and ongoing agronomic support for commercial and estate-scale farming operations.",
          href: "/services#agriculture",
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
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
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
      phone: "+966 (11) 480-7799",
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
      phone: "+966 (11) 480-7799",
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
      service1: "Industrial EPC Projects",
      service2: "Facade Maintenance",
      service3: "Facade Cleaning (IRATA / BMU)",
      service4: "Agriculture Services & Irrigation",
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
        "Industrial Projects (Civil & Steel)",
        "Facade Maintenance & Restoration",
        "Facade Cleaning (IRATA & BMU)",
        "Agriculture Services & Irrigation",
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
      items: [
        {
          id: "industrial",
          num: "01",
          title: "Industrial Projects",
          description: "End-to-end execution for industrial facilities — from civil works and structural steel to mechanical installation and commissioning.",
          bullets: [
            "Site works & structural steel",
            "Mechanical & piping installation",
            "Commissioning & handover",
          ],
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "facade-maintenance",
          num: "02",
          title: "Facade Maintenance",
          description: "Ongoing structural and material upkeep for building envelopes — keeping cladding, glazing and sealants safe, weatherproof and compliant.",
          bullets: [
            "Cladding & glazing repair",
            "Sealant & waterproofing renewal",
            "Facade inspection & compliance reports",
          ],
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "facade-cleaning",
          num: "03",
          title: "Facade Cleaning",
          description: "Scheduled and one-off cleaning for high-rise and ground-level facades — glass, stone, cladding and signage — using rope access, BMU and pressure-washing crews trained for height work.",
          bullets: [
            "High-rise glass & window cleaning",
            "Rope access & BMU cleaning",
            "Stone, cladding & signage cleaning",
            "Scheduled cleaning contracts",
          ],
          image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "agriculture",
          num: "04",
          title: "Agriculture Services",
          description: "Land preparation, irrigation infrastructure and ongoing agronomic support for commercial and estate-scale farming operations.",
          bullets: [
            "Land grading & irrigation networks",
            "Planting & agronomic support",
            "Seasonal maintenance programs",
          ],
          image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
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
      directPhone: "+966 (11) 480-7799",
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
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
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
      phone: "+966 (11) 480-7799",
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
        "Industrial Projects (Civil & Steel)",
        "Facade Maintenance & Restoration",
        "Facade Cleaning (IRATA & BMU)",
        "Agriculture Services & Irrigation",
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
