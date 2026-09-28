export type Language = "EN" | "AR";

export interface Translations {
  nav: {
    brand: string;
    brandTag: string;
    services: string;
    about: string;
    projects: string;
    contact: string;
    discussProject: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
    locationBadge: string;
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
  services: {
    badge: string;
    heading: string;
    subheading: string;
    cards: Array<{
      id: string;
      title: string;
      summary: string;
      items: string[];
      tag: string;
      highlight?: string;
    }>;
  };
  about: {
    badge: string;
    heading: string;
    description: string;
    points: Array<{
      title: string;
      desc: string;
    }>;
  };
  ctaSection: {
    heading: string;
    subheading: string;
    buttonText: string;
    contactDirect: string;
  };
  modal: {
    title: string;
    subtitle: string;
    fullName: string;
    company: string;
    email: string;
    phone: string;
    serviceLine: string;
    location: string;
    scope: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    close: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    servicesTitle: string;
    contactTitle: string;
    rights: string;
    address: string;
  };
}

export const content: Record<Language, Translations> = {
  EN: {
    nav: {
      brand: "SICS",
      brandTag: "Shourna Industrial Company",
      services: "Services",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      discussProject: "Discuss a project",
    },
    hero: {
      eyebrow: "Industrial Projects · Facade Maintenance · Facade Cleaning · Agriculture Services",
      headline: "Built for the ground it stands on.",
      subheading:
        "Shourna Industrial Company delivers industrial project execution, facade maintenance and cleaning, and agricultural services across the Kingdom — engineered for durability, scheduled for uptime.",
      ctaPrimary: "Discuss a project",
      ctaSecondary: "Explore Capabilities",
      locationBadge: "Kingdom of Saudi Arabia · National Execution",
    },
    stats: {
      stat1Number: "4",
      stat1Title: "4 core service lines",
      stat1Desc: "Industrial EPC, high-rise facades, and agricultural infrastructure",
      stat2Number: "20+",
      stat2Title: "20+ projects delivered",
      stat2Desc: "Executed for national infrastructure and commercial landmarks",
      stat3Number: "24/7",
      stat3Title: "24/7 maintenance response",
      stat3Desc: "Rapid field response and preventative uptime management",
    },
    services: {
      badge: "Disciplines & Capabilities",
      heading: "Engineered disciplines for national infrastructure.",
      subheading:
        "Comprehensive turnkey capabilities tailored to Saudi Arabia's demanding operational environments, safety protocols, and rigorous project schedules.",
      cards: [
        {
          id: "industrial",
          title: "Industrial Projects",
          summary: "Civil works, structural steel, mechanical installation.",
          items: [
            "Civil foundations and heavy site grading",
            "Structural steel fabrication and erection",
            "Precision mechanical and rotating equipment setup",
            "Piping, electrical trays, and plant tie-ins",
          ],
          tag: "Turnkey EPC",
        },
        {
          id: "facade-maintenance",
          title: "Facade Maintenance",
          summary: "Cladding repair, sealant renewal, compliance inspections.",
          items: [
            "Aluminum composite & glass panel repair",
            "Weatherproofing silicone & joint sealant renewal",
            "Structural anchor integrity and load testing",
            "Preventative facade audit & compliance reports",
          ],
          tag: "Asset Protection",
        },
        {
          id: "facade-cleaning",
          title: "Facade Cleaning",
          summary:
            "High-rise glass, stone, and signage cleaning using rope access and BMU (inspired by Cleanova standards).",
          items: [
            "Architectural curtain wall & window decontamination",
            "Natural stone, granite, and metallic panel wash",
            "Rope access (IRATA certified) & BMU / cradle operations",
            "High-illumination signage & solar panel detailing",
          ],
          tag: "High-Rise Specialists",
          highlight: "Inspired by Cleanova standards",
        },
        {
          id: "agriculture",
          title: "Agriculture Services",
          summary: "Land grading, irrigation networks, planting support.",
          items: [
            "Laser-guided land grading and soil preparation",
            "Automated smart irrigation network deployment",
            "Green belt afforestation & planting support",
            "Drainage, water reservoirs, and erosion control",
          ],
          tag: "Green Infrastructure",
        },
      ],
    },
    about: {
      badge: "Operational Rigor",
      heading: "Why leading operators trust Shourna Industrial Company",
      description:
        "We unite industrial civil engineering precision with specialized building exterior maintenance and large-scale agricultural installations. Built with Saudi Vision 2030 standards in mind.",
      points: [
        {
          title: "Strict Safety & Zero-LTI Focus",
          desc: "Uncompromising HSE protocols across all industrial sites, high-elevation rope access operations, and heavy machinery zones.",
        },
        {
          title: "IRATA & Cleanova Standards",
          desc: "Certified rope technicians, advanced BMU access mechanics, and eco-friendly facade purification chemistry.",
        },
        {
          title: "Kingdom-Wide Mobility",
          desc: "Dedicated rapid teams mobilized across Riyadh, Eastern Province, Western Region, and mega-project hubs.",
        },
      ],
    },
    ctaSection: {
      heading: "Have an upcoming industrial or facade project?",
      subheading:
        "Speak directly with our engineering and project delivery teams to review scopes, obtain turnkey quotations, or schedule an onsite technical survey.",
      buttonText: "Discuss a project",
      contactDirect: "Direct Hotline: +966 (11) 480-7799 · info@shourna.com",
    },
    modal: {
      title: "Initiate Project Discussion",
      subtitle: "Submit your project requirements and our technical directors will contact you within 24 hours.",
      fullName: "Full Name",
      company: "Company / Organization",
      email: "Corporate Email",
      phone: "Phone Number (KSA)",
      serviceLine: "Primary Service Line",
      location: "Project Location",
      scope: "Brief Scope & Timeline",
      submit: "Submit Project Brief",
      submitting: "Submitting...",
      successTitle: "Project Brief Received",
      successMessage: "Thank you for contacting Shourna Industrial Company. A technical project manager will reach out shortly.",
      close: "Close",
    },
    footer: {
      description:
        "Shourna Industrial Company (SICS) provides engineering execution, facade maintenance and cleaning, and agricultural development across the Kingdom of Saudi Arabia.",
      quickLinks: "Navigation",
      servicesTitle: "Service Lines",
      contactTitle: "Kingdom Headquarters",
      rights: "Shourna Industrial Company. All rights reserved.",
      address: "Industrial City 2, Riyadh, Kingdom of Saudi Arabia",
    },
  },
  AR: {
    nav: {
      brand: "SICS",
      brandTag: "شركة شورنى الصناعية",
      services: "الخدمات",
      about: "عن الشركة",
      projects: "المشاريع",
      contact: "تواصل معنا",
      discussProject: "ناقش مشروعك",
    },
    hero: {
      eyebrow: "المشاريع الصناعية · صيانة الواجهات · تنظيف الواجهات · الخدمات الزراعية",
      headline: "شُيّدت للأرض التي تقف عليها.",
      subheading:
        "تقدم شركة شورنى الصناعية خدمات تنفيذ المشاريع الصناعية، وصيانة وتنظيف الواجهات، والخدمات الزراعية في جميع أنحاء المملكة — هندسة للاستدامة، وجدولة لأقصى جاهزية تشغيلية.",
      ctaPrimary: "ناقش مشروعك معنا",
      ctaSecondary: "استكشف خدماتنا",
      locationBadge: "المملكة العربية السعودية · تنفيذ وطني شامل",
    },
    stats: {
      stat1Number: "4",
      stat1Title: "4 خطوط خدمات رئيسية",
      stat1Desc: "مشاريع تسليم مفتاح، واجهات الأبراج، والبنية التحتية الزراعية",
      stat2Number: "+20",
      stat2Title: "20+ مشروعاً تم تسليمه",
      stat2Desc: "نُفذت بنجاح للبنى التحتية الوطنية والمعالم التجارية الكبرى",
      stat3Number: "24/7",
      stat3Title: "استجابة صيانة على مدار 24/7",
      stat3Desc: "فرق ميدانية للاستجابة السريعة وإدارة الصيانة الوقائية",
    },
    services: {
      badge: "القدرات والتخصصات",
      heading: "تخصصات هندسية للبنية التحتية الوطنية.",
      subheading:
        "حلول متكاملة وشاملة مصممة خصيصاً لتلبية متطلبات البيئات التشغيلية القاسية بالمملكة، وبأعلى معايير السلامة والجداول الزمنية الصارمة.",
      cards: [
        {
          id: "industrial",
          title: "المشاريع الصناعية",
          summary: "الأعمال المدنية، الهياكل الفولاذية، والتركيبات الميكانيكية.",
          items: [
            "الأساسات المدنية وتسوية المواقع الثقيلة",
            "تصنيع وتركيب الهياكل الفولاذية والإنشائية",
            "تركيب المعدات الميكانيكية والآلات الدقيقة",
            "شبكات الأنابيب وتمديدات الكابلات والربط التشغيلي",
          ],
          tag: "مشاريع تسليم مفتاح",
        },
        {
          id: "facade-maintenance",
          title: "صيانة الواجهات",
          summary: "إصلاح التكسيات، تجديد العوازل، وفحوصات الامتثال والسلامة.",
          items: [
            "إصلاح واستبدال ألواح الألمنيوم (الكلادينج) والزجاج",
            "تجديد العوازل المطرية وفواصل السيليكون الإنشائية",
            "فحص سلامة نقاط التثبيت وتحمل الأحمال الهيكلية",
            "تدقيق وقائي دوري وتقارير امتثال هندسية معتمدة",
          ],
          tag: "حماية الأصول",
        },
        {
          id: "facade-cleaning",
          title: "تنظيف الواجهات",
          summary:
            "تنظيف الزجاج المرتفع، الحجر، واللوحات الإعلانية باستخدام الوصول بالحبال وأنظمة BMU (وفق معايير Cleanova المعتمدة).",
          items: [
            "تنظيف وتلميع الواجهات الزجاجية والجدران الستائرية",
            "غسيل واجهات الحجر الطبيعي والجرانيت والتكسيات المعدنية",
            "الوصول بالحبال بتقنيات IRATA المعتمدة وأنظمة الرافعات BMU",
            "تنظيف اللوحات الإعلانية الضخمة وألواح الطاقة الشمسية",
          ],
          tag: "متخصصو الأبراج",
          highlight: "مستوحى من معايير Cleanova",
        },
        {
          id: "agriculture",
          title: "الخدمات الزراعية",
          summary: "تسوية الأراضي، شبكات الري، ودعم أعمال التشجير.",
          items: [
            "تسوية الأراضي بدقة الليزر وتهيئة التربة الزراعية",
            "تركيب وتشغيل شبكات الري الذكية وأنظمة التنقيط",
            "دعم مبادرات التشجير والأحزمة الخضراء الوطنية",
            "تصريف المياه وبناء الخزانات ومكافحة الانجراف",
          ],
          tag: "البنية التحتية الخضراء",
        },
      ],
    },
    about: {
      badge: "التميز التشغيلي",
      heading: "لماذا تختار كبرى المنشآت شركة شورنى الصناعية؟",
      description:
        "نجمع بين دقة الهندسة المدنية الصناعية وخبرات الصيانة التخصصية لخارجيات المباني والمشاريع الزراعية الواسعة، تماشياً مع مستهدفات رؤية المملكة 2030.",
      points: [
        {
          title: "سلامة مطلقة وسجل خالٍ من الحوادث",
          desc: "تطبيق أدق معايير الصحة والسلامة المهنية (HSE) في المواقع الصناعية وأعمال المرتفعات بالحبال.",
        },
        {
          title: "معايير IRATA و Cleanova",
          desc: "فنيون معتمدون في النزول بالحبال، ومعدات صيانة واجهات متطورة، ومواد تنظيف صديقة للبيئة.",
        },
        {
          title: "انتشار ميداني في كافة مناطق المملكة",
          desc: "فرق جاهزة وسريعة الانتشار في الرياض، والمنطقة الشرقية، والغربية، ومشاريع المملكة الكبرى.",
        },
      ],
    },
    ctaSection: {
      heading: "هل لديك مشروع صناعي أو واجهات قيد التخطيط؟",
      subheading:
        "تواصل مباشرة مع فريقنا الهندسي لدراسة نطاق العمل، والحصول على عروض أسعار متكاملة، أو جدولة معاينة ميدانية فنية.",
      buttonText: "ناقش مشروعك معنا",
      contactDirect: "الخط المباشر: 7799-480 (11) 966+ · info@shourna.com",
    },
    modal: {
      title: "بدء مناقشة مشروع جديد",
      subtitle: "أرسل متطلبات مشروعك وسيتواصل معك مدراؤنا الفنيون خلال 24 ساعة.",
      fullName: "الاسم الكامل",
      company: "الشركة / المؤسسة",
      email: "البريد الإلكتروني للعمل",
      phone: "رقم الجوال (المملكة)",
      serviceLine: "خط الخدمة المطلوب",
      location: "موقع المشروع",
      scope: "نبذة عن نطاق العمل والجدول الزمني",
      submit: "إرسال بيانات المشروع",
      submitting: "جاري الإرسال...",
      successTitle: "تم استلام طلب المشروع بنجاح",
      successMessage: "شكراً لتواصلك مع شركة شورنى الصناعية. سيقوم مهندس المشاريع بالتواصل معك في أقرب وقت.",
      close: "إغلاق",
    },
    footer: {
      description:
        "تقدم شركة شورنى الصناعية (SICS) حلول التنفيذ الهندسي، وصيانة وتنظيف الواجهات، والتطوير الزراعي في جميع أرجاء المملكة العربية السعودية.",
      quickLinks: "روابط سريعة",
      servicesTitle: "خطوط الخدمات",
      contactTitle: "المقر الرئيسي في المملكة",
      rights: "شركة شورنى الصناعية. جميع الحقوق محفوظة.",
      address: "المدينة الصناعية الثانية، الرياض، المملكة العربية السعودية",
    },
  },
};
