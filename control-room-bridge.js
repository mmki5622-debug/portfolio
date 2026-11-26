(function () {
  const DEFAULT_FIREBASE_URL = 'https://kerlos-hany-default-rtdb.europe-west1.firebasedatabase.app';
  const BEHANCE_ENHANCED_CACHE_KEY = 'kh_behance_projects_permanent_v4';

  function getDefaultConfig() {
    return {
      firebaseUrl: DEFAULT_FIREBASE_URL,
      firebaseApiKey: '',
      firebaseAuthEmail: '',
      adminPassword: 'keloshany2026',
      cloudinaryCloud: '',
      cloudinaryPreset: '',
      brandName: 'KERLOS HANY',
      brandTagline: 'كيرلس هاني · Brand & 3D',
      logoUrl: './MYLOGO.webp',
      portraitUrl: './Professional_beauty_retouch,_202603252250.png',
      portraitMode: 'bw',
      cvUrl: './media/local-uploads/kerloshanyresname.pdf',
      whatsapp: '201011410996',
      email: 'hkerlos@gmail.com',
      location: 'Tanta, Egypt',
      behanceUrl: 'https://www.behance.net/kerloshany11',
      behanceOverrides: {},
      youtubeUrl: 'https://www.youtube.com/@kerloshany-m8e',
      youtubeChannelId: 'UCa1Wez7khhiAY96MkOM8aSA',
      youtubeAutoTop: true,
      linkedinUrl: 'https://www.linkedin.com/in/kerlos-hany-391453187/',
      seo: {
        siteTitle: 'Kerlos Hany | Graphic, Brand Identity & 3D Designer',
        metaDescription: 'Kerlos Hany Nassif — Graphic, Brand Identity, Motion & 3D Designer with 6+ years of experience creating memorable logos, CGI advertising, and commercial 3D visuals.',
        keywords: 'Kerlos Hany, Kerlos Hany Nassif, كيرلس هاني, Graphic Designer Egypt, Brand Identity Designer, 3D Designer, Motion Graphics, CGI Advertising, Logo Design, Cinema 4D, Blender, مصمم جرافيك, هوية بصرية',
        canonicalUrl: 'https://keloshany.online/',
        ogTitle: 'Kerlos Hany | Graphic, Brand Identity & 3D Designer',
        ogDescription: 'Independent Visual Designer turning brand intent into iconic identities, CGI & 3D advertising, and motion graphics.',
        ogImage: 'https://keloshany.online/Professional_beauty_retouch,_202603252250.png',
        robots: 'index, follow, max-image-preview:large',
        googleVerification: '',
        schemaJobTitle: 'Graphic, Brand Identity & 3D Designer'
      },
      typography: {
        customFonts: [],
        fontAr: 'Cairo',
        fontEn: 'Plus Jakarta Sans',
        fontAccent: 'Playfair Display',
        baseFontSize: 16,
        headingScale: 100,
        bodyLineHeight: 1.65,
        headingLineHeight: 1.15,
        primaryTextColor: '#F5F4F0',
        secondaryTextColor: '#C2CCC8',
        accentTextColor: '#B97B2E',
        lightSectionTextColor: '#021411'
      },
      heroCard1: {
        image: '',
        titleEn: '',
        titleAr: '',
        subEn: '',
        subAr: '',
        projectId: ''
      },
      heroCard2: {
        image: '',
        titleEn: '',
        titleAr: '',
        subEn: '',
        subAr: '',
        projectId: ''
      },
      heroEyebrowEn: 'GRAPHIC, BRAND & 3D DESIGNER',
      heroEyebrowAr: 'مصمم جرافيك وهويات بصرية وتصميم 3D',
      heroBtnWorkEn: 'View My Work',
      heroBtnWorkAr: 'استكشف أعمالي',
      heroBtnCvEn: 'Download CV (PDF)',
      heroBtnCvAr: 'تحميل السيرة الذاتية (PDF)',
      navWorkEn: 'WORK',
      navWorkAr: 'الأعمال',
      navServicesEn: 'SERVICES',
      navServicesAr: 'الخدمات',
      navCinemaEn: 'MOTION',
      navCinemaAr: 'الموشن',
      navExperienceEn: 'EXPERIENCE',
      navExperienceAr: 'الخبرات',
      navCtaEn: 'START A PROJECT',
      navCtaAr: 'ابدأ مشروعك',
      heroMetaTop: 'INDEPENDENT DESIGN PRACTICE',
      heroMetaSub: 'VISUAL IDENTITY · 3D · MOTION',
      heroWatermark1: 'KERLOS',
      heroWatermark2: 'HANY',
      heroCoordCode: 'KHN / 01',
      heroCoordLoc: 'TANTA / EG',
      practiceTitle1En: 'EVERY DETAIL',
      practiceTitle1Ar: 'كل تفصيلة',
      practiceTitle2En: 'HAS A',
      practiceTitle2Ar: 'لها سبب',
      practiceTitle3En: 'REASON TO EXIST.',
      practiceTitle3Ar: 'لوجودها.',
      practiceDescEn: 'Kerlos blends creative instinct with disciplined visual thinking—bringing clarity, craft, and momentum to every brand touchpoint.',
      practiceDescAr: 'يمزج كيرلس بين الحس الإبداعي والتفكير البصري المنظم ليمنح علامتك التجارية وضوحاً وحضوراً مؤثراً.',
      workTitle1En: 'CRAFTED FOR',
      workTitle1Ar: 'مُصمَّمة لجذب',
      workTitle2En: 'REAL ATTENTION.',
      workTitle2Ar: 'الانتباه الحقيقي.',
      ytTitle1En: 'WATCH THE WORK',
      ytTitle1Ar: 'شاهد الأعمال',
      ytTitle2En: 'IN MOTION.',
      ytTitle2Ar: 'في حركة.',
      ytIntroEn: 'A selected window into campaign motion, 3D visuals, creative experiments, and design tutorials from the official Kerlos Hany YouTube channel.',
      ytIntroAr: 'نافذة مختارة على أعمال الموشن جرافيك وإعلانات 3D والتجارب الإبداعية من قناة كيرلس هاني الرسمية على يوتيوب.',
      moveTitle1En: 'MAKE THE',
      moveTitle1Ar: 'اجعل',
      moveTitle2En: 'BRAND',
      moveTitle2Ar: 'العلامة',
      moveTitle3En: 'MOVE.',
      moveTitle3Ar: 'تتحرك.',
      moveDescEn: 'Motion design turns a static visual into a living moment—building rhythm, recognition, and a more memorable story frame by frame.',
      moveDescAr: 'الموشن جرافيك يحوّل التصميم الثابت إلى لحظة حية تصنع إيقاعاً وهوية راسخة في ذهن المشاهد.',
      ctaTitle1En: 'READY TO BUILD SOMETHING',
      ctaTitle1Ar: 'جاهز لبناء شيء',
      ctaTitle2En: 'UNFORGETTABLE?',
      ctaTitle2Ar: 'لا يُنسى؟',
      ctaBtnEn: 'START A PROJECT',
      ctaBtnAr: 'ابدأ مشروعك',
      heroSlideSeconds: 5,
      heroShowcaseEmpty: false,
      heroBgConfig: {
        enabled: true,
        slideSeconds: 5,
        loop: true,
        muted: true,
        opacity: 0.35,
        items: [
          {
            type: 'video',
            url: './Cinematic_logo_reveal_animation_202606051512-cleaned.mp4',
            titleEn: 'Top Hero Background',
            titleAr: 'خلفية الواجهة العلوية'
          }
        ]
      },
      revealVideo1: './Cinematic_logo_reveal_animation_202606051512-cleaned.mp4',
      revealVideo2: './Cinematic_logo_reveal_animation_202606051517.mp4',
      heroShowcaseItems: [
        {
          type: 'video',
          url: './Cinematic_logo_reveal_animation_202606051512-cleaned.mp4',
          titleEn: '3D Brand Identity Reveal 01',
          titleAr: 'تحريك الهوية البصرية 3D — 01'
        },
        {
          type: 'video',
          url: './Cinematic_logo_reveal_animation_202606051517.mp4',
          titleEn: '3D Brand Identity Reveal 02',
          titleAr: 'تحريك الهوية البصرية 3D — 02'
        }
      ],
      availEn: 'Available for freelance & brand projects',
      availAr: 'متاح للمشاريع الحرة وتصميم الهويات التجارية',
      heroTitle1En: 'Building Bold',
      heroTitle1Ar: 'نصنع عوالم',
      heroTitle2En: 'Brand Worlds',
      heroTitle2Ar: 'بصرية جريئة',
      heroTitle3En: '& 3D Realities',
      heroTitle3Ar: 'وتجارب 3D لا تُنسى',
      heroSubEn: "I'm Kerlos Hany Nassif — a Graphic & 3D Designer with 6+ years of experience transforming brand visions into memorable logos, commercial 3D product renders, and high-impact visual campaigns.",
      heroSubAr: 'أنا كيرلس هاني نصيف — مصمم جرافيك و3D بخبرة تتجاوز 6 سنوات في تحويل رؤى العلامات التجارية إلى شعارات خالدة، وتصميمات منتجات 3D واقعية، وحملات إعلانية مؤثرة.',
      aboutEyebrowEn: 'THE APPROACH',
      aboutEyebrowAr: 'المنهجية',
      aboutTitle1En: 'STRATEGY BEFORE',
      aboutTitle1Ar: 'الاستراتيجية قبل',
      aboutTitle2En: 'DESIGN.',
      aboutTitle2Ar: 'التصميم.',
      aboutTitle3En: 'MAKE IT COUNT.',
      aboutTitle3Ar: 'اجعل لها أثراً.',
      aboutLine1: 'INDEPENDENT PRACTICE / 2015—PRESENT',
      aboutLine2: 'EGYPT & REMOTE COLLABORATION',
      aboutLine3: 'PHOTOSHOP · ILLUSTRATOR · AFTER EFFECTS · CINEMA 4D · BLENDER',
      aboutDescEn: "I'm Kerlos Hany Nassif, a Graphic Designer with over 6 years of experience specializing in Logo Design, Brand Identity, Motion Graphics, and 3D Visualization. Based in Tanta, Egypt, I help brands transform ideas into clear, impactful, and memorable visual identities that stand out in competitive markets.",
      aboutDescAr: 'أنا كيرلس هاني نصيف، مصمم جرافيك بخبرة أكثر من 6 سنوات متخصص في تصميم الشعارات، الهويات البصرية، الموشن جرافيك، والتصميم ثلاثي الأبعاد (Cinema 4D). أساعد العلامات التجارية على بناء حضور بصري قوي ومؤثر في الأسواق التنافسية.',
      stats: [
        { num: '06', en: 'Years Experience', ar: 'سنوات الخبرة' },
        { num: '60', en: 'Projects Delivered', ar: 'مشروع مكتمل' },
        { num: '25', en: 'Happy Brands', ar: 'علامة تجارية' }
      ],
      marqueeSpeedSeconds: 28,
      clientLogos: [
        { name: 'Shawahid Industrial', logoUrl: '' },
        { name: 'El Gazzar Co.', logoUrl: '' },
        { name: 'Techno Print', logoUrl: '' },
        { name: 'Pro Media', logoUrl: '' },
        { name: 'Fast Up', logoUrl: '' },
        { name: 'Salik', logoUrl: '' }
      ],
      sections: {
        heroReveal: true,
        clientsMarquee: true,
        about: true,
        skills: true,
        work: true,
        behanceSync: true,
        cinema: true,
        experience: true,
        cta: true
      },
      skills: [
        { code: 'Ps', name: 'Photoshop', subtitle: 'Retouch & Key Art', percent: 98 },
        { code: 'Ai', name: 'Illustrator', subtitle: 'Logo & Vector Systems', percent: 97 },
        { code: 'C4D', name: 'Cinema 4D', subtitle: '3D Product & Machine', percent: 94 },
        { code: 'Ae', name: 'After Effects', subtitle: 'Motion & Logo Reveal', percent: 92 },
        { code: 'Id', name: 'InDesign', subtitle: 'Brand Books & Editorial', percent: 90 },
        { code: 'Pr', name: 'Premiere Pro', subtitle: 'Commercial Video Edit', percent: 89 },
        { code: 'Cdr', name: 'CorelDRAW', subtitle: 'Packaging & Die-Lines', percent: 93 },
        { code: 'CMYK', name: 'Color Separation', subtitle: 'Pre-Press & Cylinders', percent: 96 }
      ],
      experience: [
        {
          period: '2023 — Present',
          role: 'Graphic & 3D Machine Designer',
          company: 'Shawahid Industrial Roads Co.',
          desc: 'Designed industrial 3D road-machinery models, technical CAD visual layouts, and corporate engineering campaigns.'
        },
        {
          period: '2022 — 2023',
          role: 'Graphic Designer (Color Separation)',
          company: 'El Gazzar Company',
          desc: 'Specialized in rotogravure cylinders & high-precision color separation for commercial packaging and marketing campaigns.'
        },
        {
          period: '2019 — 2022',
          role: 'Senior Graphic & Print Designer',
          company: 'TECHNO PRINT',
          desc: 'Produced high-engagement social media visuals, brand identities, and pre-press production files ensuring top print fidelity.'
        },
        {
          period: '2015 — Present',
          role: 'Brand, Motion & 3D Freelancer',
          company: 'Pro Media · Mazia · Global Clients',
          desc: 'Delivered custom brand identities, animated commercials, and Cinema 4D product renders across Egypt and the MENA region.'
        }
      ],
      youtubeVideos: [
        { id: 'aBTr3Fs45v0', titleEn: 'Nestle Nesquik ADS — Commercial Motion', titleAr: 'Nestle Nesquik ADS — إعلان موشن تجاري', duration: '0:19', isNew: false },
        { id: 'MuSya0C2UNs', titleEn: 'Zain Motion Graphic — Brand Animation', titleAr: 'Zain Motion Graphic — موشن جرافيك', duration: '0:40', isNew: false },
        { id: 'nctUeJHmiCs', titleEn: 'Video MOTION JUST CUP — 3D & Product Motion', titleAr: 'Video MOTION JUST CUP — موشن منتجات', duration: '0:42', isNew: false },
        { id: 'oWSVw-Y7s7A', titleEn: 'Professional Logo Design Step-by-Step Guide', titleAr: 'كيفية تصميم شعار احترافي: دليل خطوة بخطوة للمبتدئين', duration: '13:15', isNew: false },
        { id: 'nU8TcJWMekM', titleEn: 'Advanced Juice Ads — Commercial Design & Motion', titleAr: 'Advinced Juice Ads — تصميم وإخراج إعلانات العصائر', duration: '18:44', isNew: false }
      ],
      projects: []
    };
  }

  /* --------------------------------------------------------------------------
     DYNAMIC TYPOGRAPHY, EXTERNAL @FONT-FACE LOADER, SIZES, LINE HEIGHT & COLORS
     -------------------------------------------------------------------------- */

  /* --------------------------------------------------------------------------
     DYNAMIC SEO ENGINE (META TAGS, OPEN GRAPH, TWITTER, CANONICAL & JSON-LD)
     -------------------------------------------------------------------------- */
  function upsertMetaTag(attrName, attrVal, content) {
    if (!content) return;
    let el = document.head.querySelector(`meta[${attrName}="${attrVal}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrVal);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  function applySeoSettings(seoCfg, cfg) {
    const s = { ...getDefaultConfig().seo, ...(seoCfg || {}) };
    if (s.siteTitle) document.title = s.siteTitle;
    upsertMetaTag('name', 'description', s.metaDescription);
    upsertMetaTag('name', 'keywords', s.keywords);
    upsertMetaTag('name', 'robots', s.robots || 'index, follow');
    if (s.googleVerification && s.googleVerification.trim()) {
      upsertMetaTag('name', 'google-site-verification', s.googleVerification.trim());
    }

    if (s.canonicalUrl) {
      let link = document.getElementById('seo-canonical') || document.head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.id = 'seo-canonical';
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = s.canonicalUrl;
      upsertMetaTag('property', 'og:url', s.canonicalUrl);
    }

    upsertMetaTag('property', 'og:title', s.ogTitle || s.siteTitle);
    upsertMetaTag('property', 'og:description', s.ogDescription || s.metaDescription);
    upsertMetaTag('property', 'og:image', s.ogImage);
    upsertMetaTag('name', 'twitter:title', s.ogTitle || s.siteTitle);
    upsertMetaTag('name', 'twitter:description', s.ogDescription || s.metaDescription);
    upsertMetaTag('name', 'twitter:image', s.ogImage);

    // Update JSON-LD Structured Data
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": (cfg && cfg.brandName) ? cfg.brandName : "Kerlos Hany Nassif",
      "url": s.canonicalUrl || "https://keloshany.online/",
      "image": s.ogImage || "https://keloshany.online/Professional_beauty_retouch,_202603252250.png",
      "jobTitle": s.schemaJobTitle || "Graphic, Brand Identity & 3D Designer",
      "description": s.metaDescription,
      "email": cfg && cfg.email ? `mailto:${cfg.email}` : "mailto:hkerlos@gmail.com",
      "telephone": cfg && cfg.whatsapp ? `+${cfg.whatsapp}` : "+201011410996",
      "sameAs": [
        cfg && cfg.behanceUrl ? cfg.behanceUrl : "https://www.behance.net/kerloshany11",
        cfg && cfg.youtubeUrl ? cfg.youtubeUrl : "https://www.youtube.com/@kerloshany-m8e",
        cfg && cfg.linkedinUrl ? cfg.linkedinUrl : "https://www.linkedin.com/in/kerlos-hany-391453187/"
      ].filter(Boolean)
    };
    let schemaEl = document.getElementById('kh-seo-schema');
    if (!schemaEl) {
      schemaEl = document.createElement('script');
      schemaEl.id = 'kh-seo-schema';
      schemaEl.type = 'application/ld+json';
      document.head.appendChild(schemaEl);
    }
    schemaEl.textContent = JSON.stringify(schemaData, null, 2);
  }

  function detectFontFormatFromUrl(urlStr) {
    const s = (urlStr || '').toLowerCase();
    if (s.includes('woff2')) return 'woff2';
    if (s.includes('woff')) return 'woff';
    if (s.includes('otf') || s.includes('opentype')) return 'opentype';
    return 'truetype';
  }

  function ensureGoogleFontLoaded(fontName, customFontsList) {
    if (!fontName || typeof fontName !== 'string') return;
    const clean = fontName.trim();
    if (!clean) return;
    const isCustom = Array.isArray(customFontsList) && customFontsList.some(c => c && c.name === clean);
    if (isCustom) return;

    const slug = clean.replace(/\s+/g, '+');
    const id = 'kh-live-gfont-' + slug;
    if (document.getElementById(id)) return;
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${slug}:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500;1,600;1,700&display=swap`;
    document.head.appendChild(link);
  }

  function applyTypographySettings(typCfg) {
    const t = { ...getDefaultConfig().typography, ...(typCfg || {}) };
    const customFonts = Array.isArray(t.customFonts) ? t.customFonts : [];

    // 1. Register any uploaded/external @font-face or external stylesheet URLs
    const fontFaceRules = [];
    customFonts.forEach((cf, idx) => {
      if (!cf || !cf.name || !cf.url) return;
      const safeName = cf.name.replace(/['"\\]/g, '');
      const u = cf.url.trim();
      if (/fonts\.googleapis\.com\/css/i.test(u) || /\.css(\?|$)/i.test(u)) {
        const linkId = 'kh-live-extfont-css-' + idx;
        let link = document.getElementById(linkId);
        if (!link) {
          link = document.createElement('link');
          link.id = linkId;
          link.rel = 'stylesheet';
          document.head.appendChild(link);
        }
        link.href = u;
      } else {
        const fmt = cf.format || detectFontFormatFromUrl(u);
        fontFaceRules.push(`
          @font-face {
            font-family: '${safeName}';
            src: url('${u}') format('${fmt}');
            font-weight: 100 900;
            font-style: normal;
            font-display: swap;
          }
        `);
      }
    });

    ensureGoogleFontLoaded(t.fontAr, customFonts);
    ensureGoogleFontLoaded(t.fontEn, customFonts);
    ensureGoogleFontLoaded(t.fontAccent, customFonts);

    const safeAr = (t.fontAr || 'Cairo').replace(/['"\\]/g, '');
    const safeEn = (t.fontEn || 'Plus Jakarta Sans').replace(/['"\\]/g, '');
    const safeAccent = (t.fontAccent || 'Playfair Display').replace(/['"\\]/g, '');

    const basePx = Math.min(22, Math.max(12, Number(t.baseFontSize) || 16));
    const hScale = Math.min(140, Math.max(75, Number(t.headingScale) || 100)) / 100;
    const bodyLH = Math.min(2.5, Math.max(1.1, Number(t.bodyLineHeight) || 1.65));
    const headingLH = Math.min(1.8, Math.max(0.95, Number(t.headingLineHeight) || 1.15));

    const pColor = t.primaryTextColor || '#F5F4F0';
    const sColor = t.secondaryTextColor || '#C2CCC8';
    const aColor = t.accentTextColor || '#B97B2E';
    const lColor = t.lightSectionTextColor || '#021411';

    let styleEl = document.getElementById('kh-typography-overrides');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'kh-typography-overrides';
      document.head.appendChild(styleEl);
    }

    styleEl.textContent = `
      ${fontFaceRules.join('\n')}

      html {
        font-size: ${basePx}px !important;
      }
      body {
        font-family: '${safeEn}', '${safeAr}', sans-serif !important;
        color: ${pColor} !important;
        line-height: ${bodyLH} !important;
      }
      .font-display, h1, h2, h3 {
        font-family: '${safeEn}', '${safeAr}', sans-serif !important;
      }
      html[dir="rtl"] body,
      html[dir="rtl"] .font-arabic,
      html[dir="rtl"] .font-display,
      html[dir="rtl"] h1,
      html[dir="rtl"] h2,
      html[dir="rtl"] h3 {
        font-family: '${safeAr}', '${safeEn}', sans-serif !important;
      }
      .font-editorial-italic {
        font-family: '${safeAccent}', Georgia, serif !important;
      }
      html[dir="rtl"] .font-editorial-italic {
        font-family: '${safeAccent}', '${safeAr}', sans-serif !important;
      }

      /* Paragraph & Body Line Height */
      p, li, figcaption, label, input, textarea, select {
        line-height: ${bodyLH} !important;
      }

      /* Heading Scale & Line Height */
      h1, h2, h3, h4 {
        line-height: ${headingLH} !important;
      }
      /* #top h1 locked in index.html to prevent any post-load resize */
      section h2 {
        font-size: calc(clamp(1.875rem, 3.6vw, 3rem) * ${hScale}) !important;
      }
      section h3 {
        font-size: calc(1.125rem * ${hScale}) !important;
      }

      /* Dark Section Primary & Secondary Text Colors */
      .text-\\[\\#F5F4F0\\] {
        color: ${pColor} !important;
      }
      .text-\\[\\#C2CCC8\\] {
        color: ${sColor} !important;
      }

      /* Accent Gold Text Color */
      .text-\\[\\#B97B2E\\] {
        color: ${aColor} !important;
      }

      /* Light Sections (#practice, #experience) Text Color */
      #practice, #experience,
      #practice .text-\[\#021411\],
      #experience .text-\[\#021411\] {
        color: ${lColor} !important;
      }
      #practice p, #experience p,
      #experience .text-\[\#021411\]\/75 {
        color: ${lColor} !important;
        opacity: 0.84;
      }
    `;
  }

  /* --------------------------------------------------------------------------
     HIGH-RESOLUTION IMAGE UPGRADER & BEHANCE LINK/MEDIA EXTRACTORS
     -------------------------------------------------------------------------- */
  function normalizeHeroBgSlides(bgCfg) {
    const base = getDefaultConfig().heroBgConfig;
    const merged = { ...base, ...(bgCfg || {}) };
    let list = Array.isArray(merged.items) ? merged.items.filter(it => it && it.url) : [];
    if (list.length === 0 && merged.url) {
      list = [{
        type: merged.type || (isVideoLikeUrl(merged.url) ? 'video' : 'image'),
        url: merged.url,
        titleEn: merged.titleEn || 'Top Hero Slide',
        titleAr: merged.titleAr || 'شريحة الواجهة العلوية'
      }];
    }
    return {
      enabled: merged.enabled !== false,
      slideSeconds: Math.max(2, Number(merged.slideSeconds) || 5),
      loop: merged.loop !== false,
      muted: merged.muted !== false,
      opacity: typeof merged.opacity === 'number' && !Number.isNaN(merged.opacity)
        ? Math.min(1, Math.max(0.05, merged.opacity))
        : 0.35,
      items: list
    };
  }

  function isVideoLikeUrl(u) {
    if (!u || typeof u !== 'string') return false;
    return u.startsWith('data:video/') || /\.(mp4|webm|mov|m4v)(\?|$)/i.test(u) || /youtube\.com|youtu\.be|vimeo\.com|drive\.google\.com|\/video\/upload/i.test(u);
  }

  const KHTopHeroBg = {
    items: [],
    idx: 0,
    timer: null,
    loop: true,
    muted: true,
    slideSeconds: 5,
    initialized: false,

    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    },

    setup(bgCfg) {
      this.clearTimer();
      const norm = normalizeHeroBgSlides(bgCfg);
      const ambientVid = document.getElementById('heroBgAmbientVideo');
      if (!ambientVid) return;

      const parent = ambientVid.parentElement;
      if (parent && !document.getElementById('heroBgAmbientImage')) {
        const img = document.createElement('img');
        img.id = 'heroBgAmbientImage';
        img.alt = 'Top Hero Background';
        img.className = 'hidden w-full h-full object-cover pointer-events-none transition-opacity duration-500';
        parent.insertBefore(img, ambientVid);
      }

      const bgWrap = ambientVid.closest('[class*="hero"], .hero-bg, #top > div:first-child') || parent;
      if (!norm.enabled || norm.items.length === 0) {
        this.items = [];
        ambientVid.pause();
        ambientVid.classList.add('hidden');
        const img = document.getElementById('heroBgAmbientImage');
        if (img) img.classList.add('hidden');
        if (bgWrap && bgWrap !== document.body && !bgWrap.querySelector('#hero-reveal-stage')) {
          bgWrap.style.display = 'none';
        }
        return;
      }

      if (bgWrap && bgWrap !== document.body && !bgWrap.querySelector('#hero-reveal-stage')) {
        bgWrap.style.display = '';
      }

      this.items = norm.items;
      this.loop = norm.loop;
      this.muted = norm.muted;
      this.slideSeconds = norm.slideSeconds;
      if (this.idx >= this.items.length) this.idx = 0;

      if (!this.initialized) {
        ambientVid.addEventListener('ended', () => {
          if (this.items.length > 1) {
            this.next();
          } else if (!this.loop) {
            ambientVid.pause();
          }
        });
        this.initialized = true;
      }

      this.renderSlide(norm.opacity);
    },

    renderSlide(opacityVal) {
      this.clearTimer();
      const item = this.items[this.idx];
      if (!item || !item.url) return;

      const ambientVid = document.getElementById('heroBgAmbientVideo');
      const ambientImg = document.getElementById('heroBgAmbientImage');
      const opStr = String(opacityVal != null ? opacityVal : 0.35);

      const isImg = item.type === 'image' || (!isVideoLikeUrl(item.url) && item.type !== 'video');
      if (isImg) {
        if (ambientVid) {
          ambientVid.pause();
          ambientVid.classList.add('hidden');
        }
        if (ambientImg) {
          ambientImg.src = normalizeExternalImageUrl(item.url);
          ambientImg.style.opacity = opStr;
          ambientImg.classList.remove('hidden');
        }
        if (this.items.length > 1) {
          this.timer = setTimeout(() => this.next(opacityVal), this.slideSeconds * 1000);
        }
      } else {
        if (ambientImg) ambientImg.classList.add('hidden');
        if (ambientVid) {
          const cls = classifyVideoUrl(item.url);
          const targetSrc = (cls && cls.kind === 'mp4') ? cls.url : item.url;
          const currentSrc = ambientVid.getAttribute('data-active-url') || ambientVid.getAttribute('src') || '';
          if (currentSrc !== targetSrc) {
            ambientVid.src = targetSrc;
            ambientVid.setAttribute('data-active-url', targetSrc);
            ambientVid.load();
          }
          ambientVid.classList.remove('hidden');
          ambientVid.loop = this.items.length === 1 && this.loop;
          ambientVid.muted = this.muted;
          ambientVid.playsInline = true;
          ambientVid.style.opacity = opStr;
          ambientVid.play().catch(() => {});
        }
      }
    },

    next(opacityVal) {
      if (this.items.length === 0) return;
      this.idx = (this.idx + 1) % this.items.length;
      this.renderSlide(opacityVal);
    }
  };

  function upgradeImageCandidates(rawUrl) {
    if (!rawUrl || typeof rawUrl !== 'string') return [];
    const u = rawUrl.trim();
    if (!u) return [];
    const list = [];

    if (/mir-s3-cdn-cf\.behance\.net\/projects\//i.test(u)) {
      ['max_808', '808', '404'].forEach(sz => {
        const alt = u.replace(/\/projects\/[^\/]+\//i, '/projects/' + sz + '/');
        if (alt && !list.includes(alt)) list.push(alt);
      });
    }

    if (!list.includes(u)) list.push(u);
    if (/mir-s3-cdn-cf\.behance\.net\/project_modules\//i.test(u)) {
      ['1400', 'max_1200', 'disp'].forEach(sz => {
        const alt = u.replace(/\/project_modules\/[^\/]+\//i, '/project_modules/' + sz + '/');
        if (alt && !list.includes(alt)) list.push(alt);
      });
    }
    if (/^https?:\/\//i.test(u) && !/wsrv\.nl/i.test(u)) {
      list.push('https://wsrv.nl/?url=' + encodeURIComponent(u) + '&q=92');
    }
    return list;
  }

  function getSpecificBehanceProjectUrl(rawUrl) {
    if (!rawUrl || typeof rawUrl !== 'string') return '';
    const u = rawUrl.trim();
    if (!/behance\.net/i.test(u)) return '';
    if (/^https?:\/\/(www\.)?behance\.net\/kerloshany11\/?(\?.*)?$/i.test(u)) return '';
    return u;
  }

  function normalizeExternalImageUrl(rawUrl) {
    if (!rawUrl || typeof rawUrl !== 'string') return '';
    let u = rawUrl.trim();
    if (!u) return '';
    const gdrive = u.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([a-zA-Z0-9_-]{10,})/i);
    if (gdrive) return `https://lh3.googleusercontent.com/d/${gdrive[1]}`;
    if (/dropbox\.com/i.test(u)) {
      return u.replace(/[?&]dl=0/i, '').replace(/www\.dropbox\.com/i, 'dl.dropboxusercontent.com');
    }
    return u;
  }

  function classifyVideoUrl(rawUrl) {
    if (!rawUrl || typeof rawUrl !== 'string') return null;
    let url = rawUrl.trim();
    if (!url) return null;

    if (/dropbox\.com/i.test(url)) {
      url = url.replace(/[?&]dl=0/i, '').replace(/www\.dropbox\.com/i, 'dl.dropboxusercontent.com');
      if (/\.(mp4|webm|mov|m4v)/i.test(url)) return { url, kind: 'mp4' };
    }

    const gdrive = url.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([a-zA-Z0-9_-]{10,})/i);
    if (gdrive) {
      return { url: `https://drive.google.com/file/d/${gdrive[1]}/preview`, kind: 'iframe' };
    }

    if (url.startsWith('data:video/') || /\.(mp4|webm|mov|m4v)(\?|$)/i.test(url) || /res\.cloudinary\.com\/.*\/video\/upload/i.test(url)) {
      return { url, kind: 'mp4' };
    }

    const ytMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i);
    if (ytMatch) {
      return { url: `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?rel=0&playsinline=1`, kind: 'iframe' };
    }

    const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
    if (vimeoMatch) {
      return { url: `https://player.vimeo.com/video/${vimeoMatch[1]}`, kind: 'iframe' };
    }

    if (/www-ccv\.adobe\.io\/v1\/player\/ccv\/|behance\.net\/embed\//i.test(url)) {
      return { url, kind: 'iframe' };
    }

    return null;
  }

  function unescapeRawHtml(str) {
    if (!str) return '';
    return str
      .split('\\u002F').join('/')
      .split('\\/').join('/')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"');
  }

  function extractBehanceVideosAndImages(rawHtml, fallbackThumb) {
    const html = unescapeRawHtml(rawHtml);
    const videos = [];
    const seenVideoKeys = new Set();

    const addVideo = (candidateUrl) => {
      const classified = classifyVideoUrl(candidateUrl);
      if (!classified) return;
      const key = classified.url.split('?')[0];
      if (!seenVideoKeys.has(key)) {
        seenVideoKeys.add(key);
        videos.push(classified);
      }
    };

    const ccvRegex = /https:\/\/www-ccv\.adobe\.io\/v1\/player\/ccv\/[a-zA-Z0-9_-]+\/embed(?:\?[^"'\s<>)]*)?/gi;
    let m;
    while ((m = ccvRegex.exec(html)) !== null) addVideo(m[0]);

    const ccvIdRegex = /"ccv_id"\s*:\s*"([a-zA-Z0-9_-]{8,})"/gi;
    while ((m = ccvIdRegex.exec(html)) !== null) {
      addVideo(`https://www-ccv.adobe.io/v1/player/ccv/${m[1]}/embed?api_key=behance1&bgcolor=%23021411`);
    }

    const vimeoRegex = /https:\/\/player\.vimeo\.com\/video\/\d+(?:\?[^"'\s<>)]*)?/gi;
    while ((m = vimeoRegex.exec(html)) !== null) addVideo(m[0]);

    const ytRegex = /https:\/\/(?:www\.)?youtube(?:-nocookie)?\.com\/embed\/[a-zA-Z0-9_-]{11}(?:\?[^"'\s<>)]*)?/gi;
    while ((m = ytRegex.exec(html)) !== null) addVideo(m[0]);

    const mp4Regex = /https:\/\/[^"'\s<>)]+\.mp4(?:\?[^"'\s<>)]*)?/gi;
    while ((m = mp4Regex.exec(html)) !== null) addVideo(m[0]);

    const iframeRegex = /<iframe[^>]+src=["']([^"']+)["']/gi;
    while ((m = iframeRegex.exec(html)) !== null) {
      const src = m[1];
      if (src && !/googletagmanager|doubleclick|facebook\.com|google\.com\/recaptcha/i.test(src)) {
        if (/vimeo|youtube|adobe\.io|behance\.net\/embed|wistia|dailymotion/i.test(src)) {
          addVideo(src);
        }
      }
    }

    // Extract ALL unique Behance project_modules images (strict image extensions, deduplicated by file hash, web-safe HD priority)
    const sizePriority = { 'fs': 7, '2800_opt_1': 6, '1400': 5, '1400_opt_1': 4, 'max_1200': 3, 'disp': 2, 'source': 1 };
    const byFileKey = new Map();
    const orderedKeys = [];
    const modRegex = /https:\/\/mir-s3-cdn-cf\.behance\.net\/project_modules\/([a-z0-9_]+)\/([a-z0-9._-]+\.(?:jpe?g|png|webp|gif))/gi;
    while ((m = modRegex.exec(html)) !== null) {
      const fullUrl = m[0];
      const sizeFolder = (m[1] || '').toLowerCase();
      const fileKey = (m[2] || '').toLowerCase();
      if (!fileKey || /spacer|blank|placeholder|loading|default_video|video_thumb/i.test(fileKey)) continue;
      if (/^(?:100|202|404|hd_placeholder)$/i.test(sizeFolder)) continue;
      const prio = sizePriority[sizeFolder] || 1;
      if (!byFileKey.has(fileKey)) {
        orderedKeys.push(fileKey);
        byFileKey.set(fileKey, { url: fullUrl, prio });
      } else if (prio > byFileKey.get(fileKey).prio) {
        byFileKey.set(fileKey, { url: fullUrl, prio });
      }
    }
    const images = orderedKeys.map(k => byFileKey.get(k).url);

    if (images.length === 0) {
      const seenImgs = new Set();
      const imgTagRegex = /<img[^>]+src=["']([^"']+)["']/gi;
      while ((m = imgTagRegex.exec(html)) !== null) {
        if (m[1] && !m[1].includes('spacer.gif') && !seenImgs.has(m[1])) {
          seenImgs.add(m[1]);
          images.push(m[1]);
        }
      }
    }
    if (images.length === 0 && fallbackThumb) {
      images.push(fallbackThumb);
    }

    const videoUrlsFound = [];
    const seenV = new Set();
    const pushRawV = (u) => {
      const c = classifyVideoUrl(u);
      if (c && !seenV.has(c.url.split('?')[0])) {
        seenV.add(c.url.split('?')[0]);
        videoUrlsFound.push(c);
      }
    };

    const extraPatterns = [
      /https:\/\/player\.vimeo\.com\/video\/[^"'\s<>)]+/gi,
      /https:\/\/vimeo\.com\/\d+/gi,
      /https:\/\/(?:www\.)?youtube(?:-nocookie)?\.com\/(?:embed|watch\?v=|shorts)\/[a-zA-Z0-9_-]{11}[^"'\s<>)]*/gi,
      /https:\/\/youtu\.be\/[a-zA-Z0-9_-]{11}/gi,
      /https:\/\/[^"'\s<>)]+\.(?:mp4|webm|m3u8)(?:\?[^"'\s<>)]*)?/gi,
      /"video_url"\s*:\s*"([^"]+)"/gi,
      /"stream_url"\s*:\s*"([^"]+)"/gi,
      /"embed_url"\s*:\s*"([^"]+)"/gi
    ];
    extraPatterns.forEach((rx) => {
      let match;
      while ((match = rx.exec(html)) !== null) {
        pushRawV(match[1] || match[0]);
      }
    });
    videoUrlsFound.forEach((v) => {
      if (!videos.some((ex) => ex.url.split('?')[0] === v.url.split('?')[0])) {
        videos.push(v);
      }
    });

    const hasVideoSignature = videos.length > 0 ||
      /"type"\s*:\s*"video"/i.test(html) ||
      /"module_type"\s*:\s*"video"/i.test(html) ||
      /"has_video"\s*:\s*true/i.test(html) ||
      /<video[\s>]/i.test(html) ||
      /\.(?:mp4|m3u8|webm)(?:\?|"|')/i.test(html) ||
      /www-ccv\.adobe\.io|vimeo\.com|youtube\.com|youtu\.be/i.test(html);

    return { videos, images, hasVideoSignature };
  }

  function resolveContentType(p) {
    const manual = (p && p.contentType) || 'auto';
    if (manual !== 'auto') return manual;
    const vCount = Array.isArray(p && p.videos) ? p.videos.length : 0;
    const hasDetectedVid = Boolean(vCount > 0 || (p && (p.hasVideo || p.videoDetectedOnly)));
    const iCount = Array.isArray(p && p.mediaGallery)
      ? p.mediaGallery.filter(m => !classifyVideoUrl(m.src)).length
      : (p && p.image ? 1 : 0);
    if (hasDetectedVid && iCount > 1) return 'mixed';
    if (hasDetectedVid) return 'video';
    return 'images';
  }

  function getContentTypeLabel(type, lang, vidCount) {
    if (type === 'video') {
      return lang === 'ar'
        ? (vidCount > 1 ? `▶ يوجد فيديو (${vidCount})` : '▶ يوجد فيديو')
        : (vidCount > 1 ? `▶ VIDEO (${vidCount})` : '▶ VIDEO');
    }
    if (type === 'mixed') {
      return lang === 'ar'
        ? (vidCount > 1 ? `🎬 فيديو (${vidCount}) + صور` : '🎬 فيديو + صور')
        : (vidCount > 1 ? `🎬 VIDEO (${vidCount}) + IMAGES` : '🎬 VIDEO + IMAGES');
    }
    return lang === 'ar' ? '🖼️ صور' : '🖼️ IMAGES';
  }

  function applyBehanceOverridesToProject(p, cfg) {
    const overrides = cfg && cfg.behanceOverrides;
    if (!p || !overrides || !p.url) return;
    const safeKey = getBehanceFirebaseKey(p.url);
    let ov = overrides[safeKey] || overrides[p.url];
    if (!ov) {
      const cleanTarget = p.url.trim().replace(/\/+$/, '');
      ov = Object.values(overrides).find(
        item => item && item.url && String(item.url).trim().replace(/\/+$/, '') === cleanTarget
      );
    }
    if (!ov) return;

    if (ov.hidden === true) p.hidden = true;
    if (ov.titleEn && ov.titleEn.trim()) p.titleEn = ov.titleEn.trim();
    if (ov.titleAr && ov.titleAr.trim()) p.titleAr = ov.titleAr.trim();
    if (ov.descEn && ov.descEn.trim()) p.descEn = ov.descEn.trim();
    if (ov.descAr && ov.descAr.trim()) p.descAr = ov.descAr.trim();
    if (ov.roleEn && ov.roleEn.trim()) p.roleEn = ov.roleEn.trim();
    if (ov.roleAr && ov.roleAr.trim()) p.roleAr = ov.roleAr.trim();
    if (ov.category && ov.category.trim()) p.category = ov.category.trim();
    if (ov.audioUrl && ov.audioUrl.trim()) p.audioUrl = ov.audioUrl.trim();
    if (Array.isArray(ov.tags) && ov.tags.length > 0) p.tags = ov.tags;
    if (ov.coverImage && ov.coverImage.trim()) {
      const cov = normalizeExternalImageUrl(ov.coverImage.trim());
      p.image = cov;
      p.imageCandidates = upgradeImageCandidates(cov);
    }
    if (ov.contentType && ov.contentType !== 'auto') {
      p.contentType = ov.contentType;
    }
    if (Array.isArray(ov.extraMedia) && ov.extraMedia.length > 0) {
      const existingVidKeys = new Set((p.videos || []).map(v => (typeof v === 'string' ? v : v.url).split('?')[0]));
      const existingImgSet = new Set((p.mediaGallery || []).map(m => m.src));

      ov.extraMedia.forEach((rawUrl, idx) => {
        const vid = classifyVideoUrl(rawUrl);
        if (vid) {
          const key = vid.url.split('?')[0];
          if (!existingVidKeys.has(key)) {
            existingVidKeys.add(key);
            if (!Array.isArray(p.videos)) p.videos = [];
            p.videos.push(vid);
            p.hasVideo = true;
          }
        } else if (rawUrl && !existingImgSet.has(rawUrl)) {
          const imgNorm = normalizeExternalImageUrl(rawUrl);
          existingImgSet.add(imgNorm);
          if (!Array.isArray(p.mediaGallery)) p.mediaGallery = [];
          p.mediaGallery.push({
            src: imgNorm,
            srcCandidates: upgradeImageCandidates(imgNorm),
            fallbackArt: p.fallbackArt,
            captionEn: `Manual Board 0${idx + 1}`,
            captionAr: `لوحة مضافة يدوياً 0${idx + 1}`
          });
        }
      });
    }
  }

  async function fetchWithTimeout(url, ms = 7000) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), ms);
    try {
      const r = await fetch(url, { signal: ctrl.signal });
      clearTimeout(t);
      return r;
    } catch (e) {
      clearTimeout(t);
      throw e;
    }
  }

  async function fetchExternalTextWithFallback(targetUrl) {
    const isGalleryPage = /behance\.net\/gallery\//i.test(targetUrl);
    const rawProxies = [
      async () => {
        const r = await fetchWithTimeout(`https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`, 7000);
        if (!r.ok) return '';
        const d = await r.json();
        return (d && d.contents) || '';
      },
      async () => {
        const r = await fetchWithTimeout(`https://corsproxy.io/?${encodeURIComponent(targetUrl)}`, 7000);
        return r.ok ? await r.text() : '';
      },
      async () => {
        const r = await fetchWithTimeout(`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(targetUrl)}`, 7000);
        return r.ok ? await r.text() : '';
      }
    ];

    let combined = '';
    for (const fn of rawProxies) {
      try {
        const txt = await fn();
        if (txt && txt.length > 150 && (!isGalleryPage || /project_modules|ccv_id|player\.vimeo\.com|youtube\.com\/embed/i.test(txt))) {
          combined = txt;
          break;
        }
      } catch (e) {}
    }

    if (isGalleryPage) {
      const hasVidsInRaw = /ccv_id|www-ccv\.adobe\.io|player\.vimeo\.com|youtube\.com\/embed/i.test(combined);
      if (!combined || !hasVidsInRaw) {
        try {
          const r = await fetchWithTimeout(`https://r.jina.ai/${targetUrl}`, 8000);
          if (r.ok) {
            const jinaTxt = await r.text();
            if (jinaTxt && jinaTxt.length > 150) {
              combined = combined ? (combined + '\n' + jinaTxt) : jinaTxt;
            }
          }
        } catch (e) {}
      }
    }
    return combined;
  }

  function parseBehanceRssXml(xmlText) {
    try {
      const doc = new DOMParser().parseFromString(xmlText, 'text/xml');
      const items = Array.from(doc.querySelectorAll('item'));
      if (items.length === 0) return [];
      return items.map(item => {
        const title = item.querySelector('title')?.textContent?.trim() || 'Behance Project';
        const link = item.querySelector('link')?.textContent?.trim() || 'https://www.behance.net/kerloshany11';
        const guid = item.querySelector('guid')?.textContent?.trim() || link;
        const pubDate = item.querySelector('pubDate')?.textContent?.trim() || '';
        const desc = item.querySelector('description')?.textContent || '';
        const mediaContent = item.getElementsByTagName('media:content')[0]?.getAttribute('url') || '';
        return { title, link, guid, pubDate, description: desc, content: desc, thumbnail: mediaContent };
      });
    } catch (e) {
      return [];
    }
  }


  function parseYouTubeFeedXml(xmlText) {
    try {
      const doc = new DOMParser().parseFromString(xmlText, 'text/xml');
      const entries = Array.from(doc.querySelectorAll('entry'));
      if (entries.length === 0) return [];
      return entries.map(entry => {
        const idEl = entry.getElementsByTagName('yt:videoId')[0] || entry.querySelector('videoId');
        const id = (idEl && idEl.textContent ? idEl.textContent.trim() : '');
        const title = entry.querySelector('title')?.textContent?.trim() || 'YouTube Video';
        const statsEl = entry.getElementsByTagName('media:statistics')[0];
        const ratingEl = entry.getElementsByTagName('media:starRating')[0];
        const views = Number(statsEl?.getAttribute('views') || 0);
        const likes = Number(ratingEl?.getAttribute('count') || 0);
        const engagementScore = views + (likes * 25);
        return {
          id,
          titleEn: title,
          titleAr: title,
          duration: views > 0 ? `${views.toLocaleString()} views` : 'HD',
          views,
          likes,
          engagementScore,
          isNew: false
        };
      }).filter(v => v.id);
    } catch (e) {
      return [];
    }
  }

  async function fetchTopYouTubeVideos(channelId) {
    const cid = String(channelId || 'UCa1Wez7khhiAY96MkOM8aSA').trim();
    if (!cid) return [];
    const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${encodeURIComponent(cid)}`;
    let xmlText = '';
    try {
      xmlText = await fetchExternalTextWithFallback(feedUrl);
    } catch (e) {}

    let parsed = xmlText ? parseYouTubeFeedXml(xmlText) : [];
    if (parsed.length === 0) {
      try {
        const res = await fetchWithTimeout(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`, 6500);
        if (res.ok) {
          const data = await res.json();
          if (data && Array.isArray(data.items)) {
            parsed = data.items.map(it => {
              const m = String(it.link || it.guid || '').match(/(?:v=|youtu\.be\/|video:)([a-zA-Z0-9_-]{11})/i);
              const vidId = m ? m[1] : '';
              return {
                id: vidId,
                titleEn: it.title || 'YouTube Video',
                titleAr: it.title || 'فيديو يوتيوب',
                duration: 'HD',
                views: 0,
                likes: 0,
                engagementScore: 0,
                isNew: false
              };
            }).filter(v => v.id);
          }
        }
      } catch (e) {}
    }

    if (parsed.length > 0) {
      parsed.sort((a, b) => (b.engagementScore - a.engagementScore) || (b.views - a.views));
      try {
        localStorage.setItem('kh_yt_top_cache_v1', JSON.stringify({ ts: Date.now(), items: parsed.slice(0, 8) }));
      } catch (e) {}
    }
    return parsed.slice(0, 8);
  }

  async function syncTopYouTubeToPortfolio(cfg) {
    if (!cfg || cfg.youtubeAutoTop === false) return;
    const cid = cfg.youtubeChannelId || 'UCa1Wez7khhiAY96MkOM8aSA';
    // 1. Load cached top videos immediately if available
    try {
      const cached = JSON.parse(localStorage.getItem('kh_yt_top_cache_v1') || 'null');
      if (cached && Array.isArray(cached.items) && cached.items.length > 0 && typeof ytPlaylist !== 'undefined') {
        ytPlaylist = [...cached.items];
        if (typeof renderYouTubePlaylist === 'function') renderYouTubePlaylist();
        if (typeof FlashMediaDeck !== 'undefined') {
          FlashMediaDeck.currentIndex = 0;
          FlashMediaDeck.loadCurrentFrame(false);
          FlashMediaDeck.updateUI();
        }
      }
    } catch (e) {}

    // 2. Fetch fresh top-viewed & highest-engagement videos live
    const topVids = await fetchTopYouTubeVideos(cid);
    if (topVids.length > 0 && typeof ytPlaylist !== 'undefined') {
      ytPlaylist = [...topVids];
      if (typeof renderYouTubePlaylist === 'function') renderYouTubePlaylist();
      if (typeof FlashMediaDeck !== 'undefined') {
        FlashMediaDeck.currentIndex = 0;
        FlashMediaDeck.loadCurrentFrame(false);
        FlashMediaDeck.updateUI();
      }
      const badge = document.getElementById('yt-feed-badge');
      if (badge) badge.textContent = 'YOUTUBE TOP VIEWED & ENGAGED · LIVE';
    }
  }

  function getBehanceFirebaseKey(url) {
    if (!url || typeof url !== 'string') return '';
    const m = url.match(/behance\.net\/gallery\/(\d+)/i);
    if (m) return 'bh_' + m[1];
    return 'bh_' + url.replace(/[^a-zA-Z0-9]/g, '_').slice(-40);
  }


  /* --------------------------------------------------------------------------
     FIREBASE AUTHENTICATION (EMAIL/PASSWORD TOKEN FOR PROTECTED WRITES)
     -------------------------------------------------------------------------- */
  const KH_AUTH_SESSION_KEY = 'kh_fb_auth_session_v1';
  let cachedIdToken = null;
  let cachedTokenExpiry = 0;

  function loadStoredAuthSession() {
    try {
      const raw = sessionStorage.getItem(KH_AUTH_SESSION_KEY) || localStorage.getItem(KH_AUTH_SESSION_KEY);
      if (!raw) return null;
      const s = JSON.parse(raw);
      if (s && s.idToken && (!s.expiresAt || Date.now() < s.expiresAt - 10000)) {
        return s;
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  function saveAuthSession(sessionObj, persist) {
    try {
      const str = JSON.stringify(sessionObj);
      sessionStorage.setItem(KH_AUTH_SESSION_KEY, str);
      if (persist) localStorage.setItem(KH_AUTH_SESSION_KEY, str);
    } catch (e) {}
  }

  function clearAuthSession() {
    cachedIdToken = null;
    cachedTokenExpiry = 0;
    try {
      sessionStorage.removeItem(KH_AUTH_SESSION_KEY);
      localStorage.removeItem(KH_AUTH_SESSION_KEY);
    } catch (e) {}
  }

  async function signInWithEmailPassword(email, password, apiKey, persist = true) {
    const cleanEmail = String(email || '').trim();
    const cleanPass = String(password || '');
    const key = String(apiKey || (activeAppliedConfig && activeAppliedConfig.firebaseApiKey) || '').trim();
    if (!cleanEmail || !cleanPass) {
      throw new Error('Email and password are required.');
    }
    if (!key) {
      throw new Error('Firebase Web API Key is not configured.');
    }
    const resp = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${encodeURIComponent(key)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: cleanEmail,
        password: cleanPass,
        returnSecureToken: true
      })
    });
    const data = await resp.json();
    if (!resp.ok || !data.idToken) {
      throw new Error((data && data.error && data.error.message) || 'Firebase sign-in failed.');
    }
    const expiresInMs = (Number(data.expiresIn) || 3600) * 1000;
    const sessionObj = {
      email: data.email || cleanEmail,
      localId: data.localId || '',
      idToken: data.idToken,
      refreshToken: data.refreshToken || '',
      expiresAt: Date.now() + expiresInMs
    };
    cachedIdToken = sessionObj.idToken;
    cachedTokenExpiry = sessionObj.expiresAt;
    saveAuthSession(sessionObj, persist);
    return sessionObj;
  }

  async function getValidFirebaseIdToken() {
    if (cachedIdToken && Date.now() < cachedTokenExpiry - 10000) {
      return cachedIdToken;
    }
    const stored = loadStoredAuthSession();
    if (stored && stored.idToken) {
      cachedIdToken = stored.idToken;
      cachedTokenExpiry = stored.expiresAt || (Date.now() + 3000000);
      return cachedIdToken;
    }
    return null;
  }

  function getActiveFirebaseBaseUrl() {
    const u = (activeAppliedConfig && activeAppliedConfig.firebaseUrl) || DEFAULT_FIREBASE_URL;
    return String(u || '').replace(/\/+$/, '');
  }

  async function loadFirebaseBehanceCache(fbUrlOverride) {
    const fb = String(fbUrlOverride || getActiveFirebaseBaseUrl()).replace(/\/+$/, '');
    if (!fb) return {};
    try {
      const r = await fetchWithTimeout(`${fb}/behanceCache.json`, 5000);
      if (!r.ok) return {};
      const data = await r.json();
      return (data && typeof data === 'object') ? data : {};
    } catch (e) {
      return {};
    }
  }

  async function saveProjectToFirebaseBehanceCache(p) {
    if (!p || !p.url || !p.enriched) return;
    const fb = getActiveFirebaseBaseUrl();
    const key = getBehanceFirebaseKey(p.url);
    if (!fb || !key) return;
    const token = await getValidFirebaseIdToken();
    if (!token) return;
    try {
      await fetch(`${fb}/behanceCache/${key}.json?auth=${encodeURIComponent(token)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: p.url,
          mediaGallery: Array.isArray(p.mediaGallery) ? p.mediaGallery : [],
          videos: Array.isArray(p.videos) ? p.videos : [],
          hasVideo: Boolean(p.hasVideo),
          videoDetectedOnly: Boolean(p.videoDetectedOnly),
          enriched: true,
          cacheVersion: 4,
          updatedAt: Date.now()
        })
      });
    } catch (e) {}
  }

  function saveBehanceCache(items) {
    try {
      localStorage.setItem(BEHANCE_ENHANCED_CACHE_KEY, JSON.stringify(items));
    } catch (e) {}
  }

  function loadBehanceCache() {
    const keysToTry = [
      BEHANCE_ENHANCED_CACHE_KEY,
      'kh_behance_projects_permanent_v1',
      'kh_behance_projects_v11'
    ];
    for (const k of keysToTry) {
      try {
        const arr = JSON.parse(localStorage.getItem(k) || '[]');
        if (Array.isArray(arr) && arr.length > 0) return arr;
      } catch (e) {}
    }
    return [];
  }

  /* --------------------------------------------------------------------------
     TOP HERO SHOWCASE STAGE CONTROLLER (UNLIMITED VIDEOS + IMAGES + AUTO-HIDE)
     -------------------------------------------------------------------------- */
  const KHHeroShowcase = {
    items: [],
    currentIndex: 0,
    isPowered: true,
    isPlaying: true,
    isMuted: true,
    slideSeconds: 5,
    imageTimer: null,
    initialized: false,

    setup(items, slideSeconds) {
      this.clearImageTimer();
      const stageBox = document.getElementById('motion-feature') || document.querySelector('#top .mb-12.rounded-3xl.glass-card');

      if (!Array.isArray(items) || items.length === 0) {
        this.items = [];
        const vid = document.getElementById('heroRevealVideo');
        if (vid) vid.pause();
        if (stageBox) stageBox.style.display = 'none';
        return;
      }

      if (stageBox) stageBox.style.display = '';
      this.items = items;
      this.slideSeconds = Math.max(2, Number(slideSeconds) || 5);
      if (this.currentIndex >= this.items.length) this.currentIndex = 0;

      const stage = document.getElementById('hero-reveal-stage');
      if (stage && !document.getElementById('heroRevealImage')) {
        const img = document.createElement('img');
        img.id = 'heroRevealImage';
        img.alt = 'Showcase Slide';
        img.className = 'hidden w-full h-full object-cover transition-opacity duration-500';
        stage.insertBefore(img, document.getElementById('heroRevealFallback'));

        const ifr = document.createElement('iframe');
        ifr.id = 'heroRevealIframe';
        ifr.className = 'hidden w-full h-full border-0';
        ifr.allow = 'autoplay; fullscreen; picture-in-picture';
        ifr.allowFullscreen = true;
        stage.insertBefore(ifr, document.getElementById('heroRevealFallback'));

        const cap = document.createElement('div');
        cap.id = 'heroRevealCaption';
        cap.className = 'hidden absolute bottom-3 start-4 z-20 px-3.5 py-1.5 rounded-full bg-[#021411]/88 backdrop-blur-md border border-[#A06620]/65 text-[11px] font-bold text-[#F5F4F0] shadow-lg';
        stage.appendChild(cap);
      }

      const clipBtn = document.getElementById('hero-clip-btn');
      if (clipBtn && !document.getElementById('hero-prev-slide-btn')) {
        const prevBtn = document.createElement('button');
        prevBtn.id = 'hero-prev-slide-btn';
        prevBtn.type = 'button';
        prevBtn.textContent = '‹';
        prevBtn.title = 'Previous Slide';
        prevBtn.className = 'px-2.5 py-1 rounded-full glass-pill text-[11px] font-bold text-[#F5F4F0]';
        prevBtn.onclick = () => this.prev();
        clipBtn.parentNode.insertBefore(prevBtn, clipBtn);

        const nextBtn = document.createElement('button');
        nextBtn.id = 'hero-next-slide-btn';
        nextBtn.type = 'button';
        nextBtn.textContent = '›';
        nextBtn.title = 'Next Slide';
        nextBtn.className = 'px-2.5 py-1 rounded-full glass-pill text-[11px] font-bold text-[#F5F4F0]';
        nextBtn.onclick = () => this.next();
        clipBtn.insertAdjacentElement('afterend', nextBtn);
      }

      const vid = document.getElementById('heroRevealVideo');
      if (vid && !this.initialized) {
        vid.addEventListener('ended', () => {
          if (this.isPowered && this.isPlaying && this.items.length > 1) {
            this.next();
          }
        });
      }

      this.initialized = true;
      this.renderCurrentSlide();
    },

    clearImageTimer() {
      if (this.imageTimer) {
        clearTimeout(this.imageTimer);
        this.imageTimer = null;
      }
    },

    renderCurrentSlide() {
      this.clearImageTimer();
      const item = this.items[this.currentIndex];
      const vid = document.getElementById('heroRevealVideo');
      const img = document.getElementById('heroRevealImage');
      const ifr = document.getElementById('heroRevealIframe');
      const fallback = document.getElementById('heroRevealFallback');
      const standby = document.getElementById('heroRevealStandby');
      const caption = document.getElementById('heroRevealCaption');
      const dot = document.getElementById('hero-reveal-dot');

      if (!item) return;

      if (!this.isPowered) {
        if (vid) vid.pause();
        if (ifr) ifr.src = 'about:blank';
        if (standby) standby.classList.remove('hidden');
        if (dot) dot.classList.add('opacity-20');
        this.updateButtons();
        return;
      }

      if (standby) standby.classList.add('hidden');
      if (fallback) fallback.classList.add('hidden');
      if (dot) dot.classList.remove('opacity-20');

      const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
      const titleText = lang === 'ar' ? (item.titleAr || item.titleEn) : (item.titleEn || item.titleAr);
      if (caption) {
        if (titleText) {
          caption.textContent = titleText;
          caption.classList.remove('hidden');
        } else {
          caption.classList.add('hidden');
        }
      }

      const classifiedVid = item.type === 'video' ? classifyVideoUrl(item.url) : null;

      if (item.type === 'image') {
        if (vid) {
          vid.pause();
          vid.classList.add('hidden');
        }
        if (ifr) {
          ifr.src = 'about:blank';
          ifr.classList.add('hidden');
        }
        if (img) {
          img.src = normalizeExternalImageUrl(item.url);
          img.classList.remove('hidden');
        }
        if (this.isPlaying && this.items.length > 1) {
          this.imageTimer = setTimeout(() => this.next(), this.slideSeconds * 1000);
        }
      } else if (classifiedVid && classifiedVid.kind === 'iframe') {
        if (vid) {
          vid.pause();
          vid.classList.add('hidden');
        }
        if (img) img.classList.add('hidden');
        if (ifr) {
          const sep = classifiedVid.url.includes('?') ? '&' : '?';
          ifr.src = `${classifiedVid.url}${sep}autoplay=${this.isPlaying ? 1 : 0}&mute=${this.isMuted ? 1 : 0}`;
          ifr.classList.remove('hidden');
        }
      } else {
        if (img) img.classList.add('hidden');
        if (ifr) {
          ifr.src = 'about:blank';
          ifr.classList.add('hidden');
        }
        if (vid) {
          const finalUrl = (classifiedVid && classifiedVid.url) ? classifiedVid.url : item.url;
          vid.classList.remove('hidden');
          vid.loop = this.items.length === 1;
          vid.muted = this.isMuted;
          vid.playsInline = true;
          const currentAttrSrc = vid.getAttribute('data-active-url') || vid.getAttribute('src') || '';
          if (currentAttrSrc !== finalUrl) {
            vid.src = finalUrl;
            vid.setAttribute('data-active-url', finalUrl);
            vid.load();
          }
          const startPlayback = () => {
            if (this.isPlaying && this.isPowered) {
              vid.play().catch(() => {});
            } else {
              vid.pause();
            }
          };
          if (vid.readyState >= 2) {
            startPlayback();
          } else {
            vid.addEventListener('canplay', startPlayback, { once: true });
            startPlayback();
          }
        }
      }

      this.updateButtons();
    },

    next() {
      if (this.items.length === 0) return;
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.renderCurrentSlide();
    },

    prev() {
      if (this.items.length === 0) return;
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
      this.renderCurrentSlide();
    },

    togglePower() {
      this.isPowered = !this.isPowered;
      this.renderCurrentSlide();
    },

    togglePlay() {
      if (!this.isPowered) {
        this.togglePower();
        return;
      }
      this.isPlaying = !this.isPlaying;
      this.renderCurrentSlide();
    },

    toggleMute() {
      this.isMuted = !this.isMuted;
      const vid = document.getElementById('heroRevealVideo');
      if (vid) vid.muted = this.isMuted;
      const item = this.items[this.currentIndex];
      if (item && item.type === 'video' && classifyVideoUrl(item.url)?.kind === 'iframe') {
        this.renderCurrentSlide();
      } else {
        this.updateButtons();
      }
    },

    replay() {
      if (!this.isPowered) this.isPowered = true;
      this.isPlaying = true;
      const vid = document.getElementById('heroRevealVideo');
      if (vid && !vid.classList.contains('hidden')) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      } else {
        this.renderCurrentSlide();
      }
      this.updateButtons();
    },

    updateButtons() {
      const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
      const item = this.items[this.currentIndex] || { type: 'video' };
      const clipBtn = document.getElementById('hero-clip-btn');
      const powerBtn = document.getElementById('hero-power-btn');
      const playBtn = document.getElementById('hero-play-btn');
      const muteBtn = document.getElementById('hero-mute-btn');

      const curNum = String(this.currentIndex + 1).padStart(2, '0');
      const totNum = String(this.items.length).padStart(2, '0');

      if (clipBtn) {
        const icon = item.type === 'image' ? '🖼️' : '🎬';
        clipBtn.textContent = `${icon} ${curNum} / ${totNum}`;
      }
      if (powerBtn) {
        powerBtn.textContent = this.isPowered
          ? (lang === 'ar' ? 'إطفاء' : 'Turn Off')
          : (lang === 'ar' ? 'تشغيل' : 'Turn On');
      }
      if (playBtn) {
        playBtn.textContent = this.isPlaying
          ? (lang === 'ar' ? 'إيقاف مؤقت' : 'Pause')
          : (lang === 'ar' ? 'تشغيل' : 'Play');
      }
      if (muteBtn) {
        if (item.type === 'image') {
          muteBtn.classList.add('hidden');
        } else {
          muteBtn.classList.remove('hidden');
          muteBtn.textContent = this.isMuted
            ? (lang === 'ar' ? 'تشغيل الصوت' : 'Unmute')
            : (lang === 'ar' ? 'كتم الصوت' : 'Mute');
        }
      }
    }
  };

  /* --------------------------------------------------------------------------
     CONFIG LOADER & PORTFOLIO INTEGRATION
     -------------------------------------------------------------------------- */
  async function loadConfig() {
    const base = getDefaultConfig();
    let localSaved = null;
    try {
      localSaved = JSON.parse(localStorage.getItem('kh_control_room_config_v1') || 'null');
    } catch (e) {}

    const fbUrl = (localSaved && localSaved.firebaseUrl) || base.firebaseUrl;
    if (fbUrl) {
      try {
        const res = await fetch(`${fbUrl.replace(/\/+$/, '')}/portfolioConfig.json?t=${Date.now()}`);
        if (res.ok) {
          const remote = await res.json();
          if (remote && typeof remote === 'object') {
            if (remote.heroShowcaseEmpty === true) remote.heroShowcaseItems = [];
            try {
              localStorage.setItem('kh_control_room_config_v1', JSON.stringify(remote));
            } catch (e) {}
            return {
              ...base,
              ...remote,
              seo: { ...base.seo, ...(remote.seo || {}) },
              typography: { ...base.typography, ...(remote.typography || {}) },
              heroBgConfig: { ...base.heroBgConfig, ...(remote.heroBgConfig || {}) },
              behanceOverrides: { ...(base.behanceOverrides || {}), ...(remote.behanceOverrides || {}) },
              sections: { ...base.sections, ...(remote.sections || {}) }
            };
          }
        }
      } catch (e) {}
    }

    try {
      const fileRes = await fetch(`./site-data.json?t=${Date.now()}`);
      if (fileRes.ok) {
        const fileData = await fileRes.json();
        if (fileData && typeof fileData === 'object') {
          if (fileData.heroShowcaseEmpty === true) fileData.heroShowcaseItems = [];
          return {
            ...base,
            ...fileData,
            seo: { ...base.seo, ...(fileData.seo || {}) },
            typography: { ...base.typography, ...(fileData.typography || {}) },
            heroBgConfig: { ...base.heroBgConfig, ...(fileData.heroBgConfig || {}) },
            behanceOverrides: { ...(base.behanceOverrides || {}), ...(fileData.behanceOverrides || {}) },
            sections: { ...base.sections, ...(fileData.sections || {}) }
          };
        }
      }
    } catch (e) {}

    if (localSaved) {
      if (localSaved.heroShowcaseEmpty === true) localSaved.heroShowcaseItems = [];
      return {
        ...base,
        ...localSaved,
        seo: { ...base.seo, ...(localSaved.seo || {}) },
        typography: { ...base.typography, ...(localSaved.typography || {}) },
        heroBgConfig: { ...base.heroBgConfig, ...(localSaved.heroBgConfig || {}) },
        behanceOverrides: { ...(base.behanceOverrides || {}), ...(localSaved.behanceOverrides || {}) },
        sections: { ...base.sections, ...(localSaved.sections || {}) }
      };
    }
    return base;
  }

  function isDeadStoragePath(u) {
    return typeof u === 'string' && u.trim().includes('media/storage/');
  }

  function renderHeroFloatingCards(cfg) {
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
    const c1 = (cfg && cfg.heroCard1) || {};
    const c2 = (cfg && cfg.heroCard2) || {};

    const leftCard = document.querySelector('#top .hero-tilt-left');
    const rightCard = document.querySelector('#top .hero-tilt-right');

    const applyCard = (cardEl, imgId, cardCfg, slotIdx) => {
      if (!cardEl) return;
      const hasCustomImg = cardCfg && cardCfg.image && !isDeadStoragePath(cardCfg.image);
      if (!hasCustomImg) {
        if (typeof initHeroShowcaseCards === 'function') initHeroShowcaseCards();
        cardEl.onclick = () => {
          if (typeof openHeroCardProject === 'function') openHeroCardProject(slotIdx);
        };
        return;
      }
      const img = document.getElementById(imgId);
      if (img) {
        img.onerror = null;
        img.src = upgradeImageCandidates(cardCfg.image)[0] || cardCfg.image;
      }
      const titleEl = cardEl.querySelector('.mt-3 > div > div:first-child');
      const subEl = cardEl.querySelector('.mt-3 > div > div:last-child');
      if (titleEl && (cardCfg.titleEn || cardCfg.titleAr)) {
        titleEl.textContent = lang === 'ar' ? (cardCfg.titleAr || cardCfg.titleEn) : (cardCfg.titleEn || cardCfg.titleAr);
      }
      if (subEl && (cardCfg.subEn || cardCfg.subAr)) {
        subEl.textContent = lang === 'ar' ? (cardCfg.subAr || cardCfg.subEn) : (cardCfg.subEn || cardCfg.subAr);
      }
      cardEl.onclick = () => {
        if (cardCfg.projectId && typeof openProjectModal === 'function') {
          openProjectModal(cardCfg.projectId);
        } else if (typeof openHeroCardProject === 'function') {
          openHeroCardProject(slotIdx);
        }
      };
    };

    applyCard(leftCard, 'heroCardProstaricaImg', c1, 0);
    applyCard(rightCard, 'heroCardKinzaImg', c2, 1);
  }

  let activeAppliedConfig = null;

  function installPortfolioEnhancements() {
    if (typeof renderProjects !== 'function' || window.__khEnhancedInstalled) return;
    window.__khEnhancedInstalled = true;

    const origToggleLanguage = toggleLanguage;
    toggleLanguage = function () {
      origToggleLanguage();
      if (activeAppliedConfig) renderHeroFloatingCards(activeAppliedConfig);
    };
    window.toggleLanguage = toggleLanguage;

    const origRenderProjects = renderProjects;
    renderProjects = function () {
      origRenderProjects();
      const grid = document.getElementById('projects-grid');
      if (!grid || typeof projectsData === 'undefined' || !Array.isArray(projectsData)) return;

      const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
      projectsData.forEach(p => {
        const imgEl = grid.querySelector(`[data-project-thumb="${p.id}"]`);
        const article = imgEl && imgEl.closest('article');
        const thumbBox = imgEl && imgEl.parentElement;

        const cType = resolveContentType(p);
        const vidCount = Array.isArray(p.videos) ? p.videos.length : 0;
        const isVidStyle = cType === 'video' || cType === 'mixed';
        if (isVidStyle && thumbBox && !thumbBox.querySelector('.kh-video-badge')) {
          const badge = document.createElement('span');
          badge.className = 'kh-video-badge absolute top-3 end-3 px-3 py-1 rounded-full bg-[#A06620] text-[#F5F4F0] text-[10px] font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1 border border-[#F5F4F0]/35 z-10';
          badge.textContent = getContentTypeLabel(cType, lang, vidCount);
          thumbBox.appendChild(badge);
        }

        const behanceProjectUrl = getSpecificBehanceProjectUrl(p.url);
        const existingBar = article && article.querySelector('.kh-behance-action-bar');
        const hasVidAction = cType === 'video' || cType === 'mixed' || vidCount > 0;
        if (article && !existingBar && behanceProjectUrl) {
          const footerRow = article.querySelector('.px-5.pb-5');
          if (footerRow) {
            const caseSpan = footerRow.querySelector('span.text-xs.font-bold');
            if (caseSpan) caseSpan.remove();
            footerRow.classList.remove('pb-5');
            footerRow.classList.add('pb-3');

            const actionBar = document.createElement('div');
            actionBar.className = 'kh-behance-action-bar px-5 sm:px-6 pb-5 pt-3 border-t border-[#6A5639]/25 flex flex-wrap items-center justify-between gap-2';
            const btnText = lang === 'ar' ? 'صفحة المشروع على Behance' : 'Behance Project';
            const watchText = hasVidAction
              ? (lang === 'ar' ? '▶ لمشاهدة الفيديو اضغط هنا' : '▶ Click here to watch video')
              : (lang === 'ar' ? 'معاينة المشروع ←' : 'Preview Case →');
            const rightAction = hasVidAction
              ? `<button type="button" onclick="event.stopPropagation(); openProjectModal('${p.id}')" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#A06620] hover:bg-[#B97B2E] text-[11px] font-extrabold text-[#F5F4F0] shadow-md transition-all"><span>${watchText}</span></button>`
              : `<span class="text-xs font-bold text-[#B97B2E] group-hover:translate-x-1 transition-transform">${watchText}</span>`;
            actionBar.innerHTML = `
              <a href="${behanceProjectUrl}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0E3E3F] hover:bg-[#A06620] border border-[#A06620]/65 text-[11px] font-extrabold text-[#F5F4F0] shadow-md transition-all">
                <span>${btnText}</span>
                <span>↗</span>
              </a>
              ${rightAction}
            `;
            article.appendChild(actionBar);
          }
        }
      });
    };
    window.renderProjects = renderProjects;

    const origOpenProjectModal = openProjectModal;
    openProjectModal = function (id, focusVideo) {
      origOpenProjectModal(id, focusVideo);
      const p = projectsData.find(item => item.id === id);
      const behanceBtn = document.getElementById('pm-behance-link');
      const typeBadge = document.getElementById('pm-content-type');
      if (typeBadge && p) {
        const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
        const cType = resolveContentType(p);
        const vCount = Array.isArray(p.videos) ? p.videos.length : 0;
        if (cType === 'video' || cType === 'mixed') {
          typeBadge.textContent = getContentTypeLabel(cType, lang, vCount);
          typeBadge.classList.remove('hidden');
        } else {
          typeBadge.classList.add('hidden');
        }
      }
      if (behanceBtn && p) {
        const specificUrl = getSpecificBehanceProjectUrl(p.url);
        if (specificUrl) {
          behanceBtn.href = specificUrl;
          behanceBtn.style.display = '';
        } else {
          behanceBtn.style.display = 'none';
        }
      }
    };
    window.openProjectModal = openProjectModal;

    const origRenderMediaStream = renderProjectMediaStream;
    renderProjectMediaStream = function (p) {
      const streamEl = document.getElementById('pm-media-stream');
      const countEl = document.getElementById('pm-media-count');
      const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';

      const collectedVideos = [];
      const seenVidUrls = new Set();

      const pushUniqueVideo = (rawUrl) => {
        const c = classifyVideoUrl(rawUrl);
        if (!c) return;
        const key = c.url.split('?')[0];
        if (!seenVidUrls.has(key)) {
          seenVidUrls.add(key);
          collectedVideos.push(c);
        }
      };

      if (Array.isArray(p.videos)) {
        p.videos.forEach(v => pushUniqueVideo(typeof v === 'string' ? v : v.url));
      }
      if (Array.isArray(p.extraBoards)) {
        p.extraBoards.forEach(b => pushUniqueVideo(b));
      }
      if (Array.isArray(p.mediaGallery)) {
        p.mediaGallery.forEach(m => pushUniqueVideo(m.src));
      }

      const imageOnlyGallery = (Array.isArray(p.mediaGallery) ? p.mediaGallery : [])
        .filter(m => m && m.src && !classifyVideoUrl(m.src))
        .map(m => {
          const cands = [...new Set([...(Array.isArray(m.srcCandidates) ? m.srcCandidates : []), ...upgradeImageCandidates(m.src), m.src].filter(Boolean))];
          return {
            ...m,
            src: cands[0] || m.src,
            srcCandidates: cands
          };
        });

      if (imageOnlyGallery.length > 0 && streamEl) {
        const title = lang === 'ar' ? (p.titleAr || p.titleEn) : (p.titleEn || p.titleAr);
        const imgsHtml = imageOnlyGallery.map((m, i) => {
          const encCands = encodeURIComponent(JSON.stringify(m.srcCandidates || [m.src]));
          const firstSrc = (m.srcCandidates && m.srcCandidates[0]) || m.src;
          return `
            <figure class="w-full bg-[#060D0C] flex justify-center">
              <img
                src="${firstSrc}"
                data-cands="${encCands}"
                data-cidx="0"
                alt="${title} — ${i + 1}"
                class="w-full h-auto block"
                loading="eager"
                referrerpolicy="no-referrer"
                onerror="(function(el){
                  try {
                    const list = JSON.parse(decodeURIComponent(el.getAttribute('data-cands')||'[]'));
                    let idx = parseInt(el.getAttribute('data-cidx')||'0', 10) + 1;
                    if (idx < list.length) {
                      el.setAttribute('data-cidx', String(idx));
                      el.src = list[idx];
                      return;
                    }
                  } catch(e){}
                  const fig = el.closest('figure');
                  if (fig) fig.remove();
                })(this)"
              />
            </figure>
          `;
        }).join('');
        streamEl.innerHTML = `<div class="w-fit max-w-[92vw] sm:max-w-[540px] mx-auto rounded-2xl overflow-hidden border border-[#C59367]/30 bg-[#060D0C] shadow-2xl">${imgsHtml}</div>`;
      } else if (streamEl) {
        streamEl.innerHTML = (p.audioUrl && String(p.audioUrl).trim()) ? `
          <div class="p-4 rounded-2xl bg-[#0A0908] border border-[#C59367]/45 flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5 text-xs font-bold text-[#C59367]">
              <span class="text-base">🎵</span>
              <span>${lang === 'ar' ? 'موسيقى / صوت المشروع' : 'Project Soundtrack / Audio'}</span>
            </div>
            <audio src="${p.audioUrl}" controls class="h-9 flex-1 min-w-[220px]"></audio>
          </div>
        ` : '';
      }

      if (streamEl && collectedVideos.length > 0) {
        const title = lang === 'ar' ? (p.titleAr || p.titleEn) : (p.titleEn || p.titleAr);
        const videosHtml = collectedVideos.map((v, idx) => {
          const vidLabel = lang === 'ar'
            ? `🎬 فيديو المشروع 0${idx + 1} — ${title}`
            : `🎬 Project Video 0${idx + 1} — ${title}`;
          const badgeLabel = lang === 'ar' ? 'يعمل داخل الموقع' : 'PLAYABLE IN-SITE';

          const playerMarkup = v.kind === 'iframe'
            ? `<div class="relative aspect-video bg-black">
                 <iframe src="${v.url}" class="w-full h-full border-0" allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowfullscreen loading="lazy"></iframe>
               </div>`
            : `<div class="relative bg-black">
                 <video src="${v.url}" controls playsinline preload="metadata" class="w-full max-h-[75vh] mx-auto bg-black"></video>
               </div>`;

          return `
            <figure class="rounded-2xl overflow-hidden bg-[#021411] border border-[#A06620]/65 shadow-2xl">
              ${playerMarkup}
              <figcaption class="px-4 py-3 bg-[#021411]/95 border-t border-[#6A5639]/30 flex items-center justify-between gap-3 text-xs">
                <span class="text-[#F5F4F0] font-bold">${vidLabel}</span>
                <span class="px-2.5 py-0.5 rounded-full bg-[#A06620]/25 border border-[#A06620]/60 text-[10px] font-bold text-[#B97B2E] shrink-0">${badgeLabel}</span>
              </figcaption>
            </figure>
          `;
        }).join('');

        streamEl.insertAdjacentHTML('afterbegin', videosHtml);
      } else if (streamEl && p.source === 'behance' && p.videoDetectedOnly && getSpecificBehanceProjectUrl(p.url)) {
        const watchBtnLabel = lang === 'ar'
          ? '▶ لمشاهدة الفيديو بجودته الكاملة على Behance اضغط هنا ↗'
          : '▶ Watch Full Video on Behance ↗';
        streamEl.insertAdjacentHTML(
          'afterbegin',
          `<div class="p-5 rounded-2xl bg-[#060D0C] border border-[#C59367]/45 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div class="flex items-center gap-3">
              <span class="w-11 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center text-base shrink-0">▶</span>
              <div>
                <div class="text-xs sm:text-sm font-bold text-[#F2EADF]">${lang === 'ar' ? 'هذا المشروع يحتوي على فيديو' : 'This project includes a video'}</div>
                <div class="text-[11px] text-[#9A9186]">${lang === 'ar' ? 'شاهد الفيديو مباشرة أو تصفّح كامل لوحات المشروع بالأسفل' : 'Watch the video or scroll below for the full project boards'}</div>
              </div>
            </div>
            <a href="${getSpecificBehanceProjectUrl(p.url)}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C59367] to-[#A06620] hover:brightness-110 text-[#060D0C] text-xs font-extrabold shrink-0 transition-all">${watchBtnLabel}</a>
          </div>`
        );
      }

      if (streamEl && p.source === 'behance' && p.enriching) {
        const loadMsg = lang === 'ar'
          ? '⏳ جاري استيراد كامل لوحات وصور المشروع من Behance...'
          : '⏳ Importing full Behance presentation sheet...';
        streamEl.insertAdjacentHTML(
          'afterbegin',
          `<div id="pm-behance-loading" class="p-3.5 rounded-2xl bg-[#0E3E3F]/45 border border-[#C59367]/45 text-xs font-bold text-[#C59367] text-center animate-pulse">${loadMsg}</div>`
        );
      }

      if (countEl) {
        const vCount = collectedVideos.length;
        const bCount = imageOnlyGallery.length;
        if (lang === 'ar') {
          countEl.textContent = vCount > 0
            ? `${vCount} فيديو · ${bCount} لوحة عرض HD`
            : `${bCount} لوحة عرض عالية الدقة`;
        } else {
          countEl.textContent = vCount > 0
            ? `${vCount} Video${vCount > 1 ? 's' : ''} · ${bCount} HD Boards`
            : `${bCount} High-Res Boards`;
        }
      }
    };
    window.renderProjectMediaStream = renderProjectMediaStream;

    enrichBehanceProjectMedia = async function (p) {
      if (!p || p.source !== 'behance' || !p.url || p.enriched || p.enriching) return;
      p.enriching = true;
      if (typeof currentModalProjectId !== 'undefined' && currentModalProjectId === p.id) {
        renderProjectMediaStream(p);
      }
      try {
        const html = await fetchExternalTextWithFallback(p.url);
        if (!html) return;

        const { videos, images, hasVideoSignature } = extractBehanceVideosAndImages(html, p.image);
        if (images.length > 1 || videos.length > 0 || hasVideoSignature) {
          p.enriched = true;
          p.cacheVersion = 4;
        }

        if (videos.length > 0) {
          const existingV = Array.isArray(p.videos) ? p.videos : [];
          const seenVk = new Set(existingV.map(v => (typeof v === 'string' ? v : v.url).split('?')[0]));
          videos.forEach(v => {
            const k = v.url.split('?')[0];
            if (!seenVk.has(k)) { seenVk.add(k); existingV.push(v); }
          });
          p.videos = existingV;
          p.hasVideo = true;
          p.videoDetectedOnly = false;
          if (!p.tags.includes('Video')) p.tags = ['Behance', 'Video'];
        } else if (hasVideoSignature) {
          p.hasVideo = true;
          p.videoDetectedOnly = true;
          if (!p.tags.includes('Video')) p.tags = ['Behance', 'Video'];
        }
        if (images.length > 0) {
          p.mediaGallery = images.map((src, idx) => ({
            src,
            srcCandidates: upgradeImageCandidates(src),
            fallbackArt: p.fallbackArt,
            captionEn: `${p.titleEn} — Behance Board 0${idx + 1}`,
            captionAr: `${p.titleAr} — لوحة عرض المشروع 0${idx + 1}`
          }));
        }

        applyBehanceOverridesToProject(p, activeAppliedConfig);

        if (p.enriched) {
          saveProjectToFirebaseBehanceCache(p);
        }

        const behanceList = projectsData.filter(item => item.source === 'behance');
        saveBehanceCache(behanceList);
        renderProjects();

        if (typeof currentModalProjectId !== 'undefined' && currentModalProjectId === p.id) {
          renderProjectMediaStream(p);
        }
      } catch (e) {
      } finally {
        p.enriching = false;
        const loader = document.getElementById('pm-behance-loading');
        if (loader) loader.remove();
      }
    };
    window.enrichBehanceProjectMedia = enrichBehanceProjectMedia;

    syncBehanceProjects = async function () {
      const statusEl = document.getElementById('behance-sync-status');
      const iconEl = document.getElementById('behance-sync-icon');
      const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
      if (iconEl) iconEl.classList.add('animate-spin');
      if (statusEl) statusEl.textContent = lang === 'ar' ? 'جاري المزامنة مع Behance...' : 'Syncing Behance...';

      const rssUrl = 'https://www.behance.net/feeds/user?username=kerloshany11';
      let rawFeedItems = [];

      const xmlText = await fetchExternalTextWithFallback(rssUrl);
      if (xmlText && xmlText.includes('<item>')) {
        rawFeedItems = parseBehanceRssXml(xmlText);
      }

      if (rawFeedItems.length === 0) {
        try {
          const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
          if (res.ok) {
            const data = await res.json();
            if (data && Array.isArray(data.items) && data.items.length > 0) {
              rawFeedItems = data.items;
            }
          }
        } catch (e) {}
      }

      try {
        if (rawFeedItems.length > 0) {
          const previousCached = loadBehanceCache();
          const prevByUrl = new Map(previousCached.map(x => [x.url, x]));
          const fbBehanceCache = await loadFirebaseBehanceCache();

          const liveItems = rawFeedItems.slice(0, 12).map((item, idx) => {
            const rawHtml = item.content || item.description || '';
            const { videos, images } = extractBehanceVideosAndImages(rawHtml, item.thumbnail);
            const fallbackArt = typeof buildStudioBoardDataUri === 'function'
              ? buildStudioBoardDataUri({
                  eyebrow: 'LIVE BEHANCE PROJECT',
                  title: (item.title || 'BEHANCE WORK').slice(0, 26).toUpperCase(),
                  subtitle: 'BEHANCE.NET/KERLOSHANY11'
                })
              : '';
            const rawThumb = item.thumbnail || images[0] || fallbackArt;
            const hdThumbCandidates = upgradeImageCandidates(rawThumb);
            const cleanDesc = rawHtml.replace(/<[^>]*>/g, '').trim().slice(0, 220) || 'Published portfolio project on Behance by Kerlos Hany Nassif.';
            const projectUrl = item.link || 'https://www.behance.net/kerloshany11';
            const fbPrev = fbBehanceCache[getBehanceFirebaseKey(projectUrl)] || null;
            const localPrev = prevByUrl.get(projectUrl) || null;
            const prev = (fbPrev && fbPrev.enriched) ? fbPrev : localPrev;

            const mergedVideos = videos.length > 0 ? videos : (prev && Array.isArray(prev.videos) ? prev.videos : []);
            const hasFreshGallery = Boolean(prev && prev.enriched && prev.cacheVersion === 4 && Array.isArray(prev.mediaGallery) && prev.mediaGallery.length > 0);
            const mergedGallery = hasFreshGallery
              ? prev.mediaGallery
              : (images.length > 0 ? images : [rawThumb]).map((src, bIdx) => ({
                  src,
                  srcCandidates: upgradeImageCandidates(src),
                  fallbackArt,
                  captionEn: `Behance Project Board 0${bIdx + 1}`,
                  captionAr: `لوحة عرض المشروع من Behance 0${bIdx + 1}`
                }));

            const combinedText = `${item.title || ''} ${cleanDesc}`;
            const titleLooksLikeVideo = /\b(ads?|video|motion|reel|reels|animation|cgi|fooh|reveal|commercial|promo|film|3d\s*\+\s*ai|showreel|teaser|spot)\b|(فيديو|موشن|إعلان|اعلان|تحريك|ريلز|إعلانات|اعلانات)/i.test(combinedText);
            const autoDetectedVideo = mergedVideos.length > 0 || Boolean(prev && prev.hasVideo) || titleLooksLikeVideo;

            return {
              id: `behance-${idx}-${(item.guid || projectUrl).toString().slice(-8)}`,
              category: 'branding',
              source: 'behance',
              pubDate: item.pubDate || '',
              enriched: hasFreshGallery,
              hasVideo: autoDetectedVideo,
              videoDetectedOnly: mergedVideos.length === 0 && (Boolean(prev && prev.videoDetectedOnly) || titleLooksLikeVideo),
              videos: mergedVideos,
              roleEn: 'Behance Published Project',
              roleAr: 'مشروع منشور على Behance',
              titleEn: item.title,
              titleAr: item.title,
              descEn: cleanDesc,
              descAr: cleanDesc,
              image: hdThumbCandidates[0] || rawThumb,
              imageCandidates: hdThumbCandidates.length > 0 ? hdThumbCandidates : [rawThumb],
              fallbackArt,
              mediaGallery: mergedGallery,
              tags: mergedVideos.length > 0 ? ['Behance', 'Video'] : ['Behance', 'Case Study'],
              url: projectUrl
            };
          });

          liveItems.forEach(item => applyBehanceOverridesToProject(item, activeAppliedConfig));
          saveBehanceCache(liveItems);
          const curatedOnly = projectsData.filter(p => p.source !== 'behance');
          projectsData = [...liveItems, ...curatedOnly];
          renderProjects();
          renderHeroFloatingCards(activeAppliedConfig);

          (async () => {
            const pending = liveItems.filter(item => !item.enriched);
            for (const item of pending) {
              if (!item.enriched && !item.enriching) {
                await enrichBehanceProjectMedia(item);
                await new Promise(r => setTimeout(r, 3000));
              }
            }
          })();
        }

        if (statusEl) {
          statusEl.textContent = lang === 'ar' ? 'متصل بـ Behance مباشر' : 'Behance Live Connected';
        }
      } catch (e) {
        if (statusEl) {
          statusEl.textContent = lang === 'ar' ? 'أعمال Behance جاهزة' : 'Behance Showcase Ready';
        }
      } finally {
        if (iconEl) setTimeout(() => iconEl.classList.remove('animate-spin'), 500);
      }
    };
    window.syncBehanceProjects = syncBehanceProjects;

    switchHeroRevealClip = () => KHHeroShowcase.next();
    toggleHeroRevealPower = () => KHHeroShowcase.togglePower();
    toggleHeroRevealPlay = () => KHHeroShowcase.togglePlay();
    toggleHeroRevealMute = () => KHHeroShowcase.toggleMute();
    replayHeroReveal = () => KHHeroShowcase.replay();
    updateHeroRevealButtons = () => KHHeroShowcase.updateButtons();
    window.switchHeroRevealClip = switchHeroRevealClip;
    window.toggleHeroRevealPower = toggleHeroRevealPower;
    window.toggleHeroRevealPlay = toggleHeroRevealPlay;
    window.toggleHeroRevealMute = toggleHeroRevealMute;
    window.replayHeroReveal = replayHeroReveal;
    window.updateHeroRevealButtons = updateHeroRevealButtons;
  }

  function applyConfigToPortfolio(cfg) {
    if (!cfg || typeof i18nStrings === 'undefined') return;
    activeAppliedConfig = cfg;
    installPortfolioEnhancements();

    // 0. Apply Custom Typography, External Fonts, Font Sizes, Colors & Line Heights
    applySeoSettings(cfg.seo, cfg);
    applyTypographySettings(cfg.typography);

    i18nStrings.en.heroEyebrow = cfg.heroEyebrowEn || 'GRAPHIC, BRAND & 3D DESIGNER';
    i18nStrings.ar.heroEyebrow = cfg.heroEyebrowAr || 'مصمم جرافيك وهويات بصرية وتصميم 3D';
    i18nStrings.en.heroBtnWork = cfg.heroBtnWorkEn || 'View My Work';
    i18nStrings.ar.heroBtnWork = cfg.heroBtnWorkAr || 'استكشف أعمالي';
    i18nStrings.en.heroBtnCv = cfg.heroBtnCvEn || 'Download CV (PDF)';
    i18nStrings.ar.heroBtnCv = cfg.heroBtnCvAr || 'تحميل السيرة الذاتية (PDF)';
    i18nStrings.en.availableBadge = cfg.availEn;
    i18nStrings.ar.availableBadge = cfg.availAr;
    i18nStrings.en.heroTitle1 = cfg.heroTitle1En;
    i18nStrings.ar.heroTitle1 = cfg.heroTitle1Ar;
    i18nStrings.en.heroTitle2 = cfg.heroTitle2En;
    i18nStrings.ar.heroTitle2 = cfg.heroTitle2Ar;
    i18nStrings.en.heroTitle3 = cfg.heroTitle3En;
    i18nStrings.ar.heroTitle3 = cfg.heroTitle3Ar;
    i18nStrings.en.heroSubtitle = cfg.heroSubEn;
    i18nStrings.ar.heroSubtitle = cfg.heroSubAr;
    i18nStrings.en.aboutEyebrow = cfg.aboutEyebrowEn || 'THE APPROACH';
    i18nStrings.ar.aboutEyebrow = cfg.aboutEyebrowAr || 'المنهجية';
    i18nStrings.en.aboutTitle1 = cfg.aboutTitle1En || 'STRATEGY BEFORE';
    i18nStrings.ar.aboutTitle1 = cfg.aboutTitle1Ar || 'الاستراتيجية قبل';
    i18nStrings.en.aboutTitle2 = cfg.aboutTitle2En || 'DESIGN.';
    i18nStrings.ar.aboutTitle2 = cfg.aboutTitle2Ar || 'التصميم.';
    i18nStrings.en.aboutTitle3 = cfg.aboutTitle3En || 'MAKE IT COUNT.';
    i18nStrings.ar.aboutTitle3 = cfg.aboutTitle3Ar || 'اجعل لها أثراً.';
    i18nStrings.en.aboutDesc = cfg.aboutDescEn;
    i18nStrings.ar.aboutDesc = cfg.aboutDescAr;
    i18nStrings.en.navWork = cfg.navWorkEn || 'WORK';
    i18nStrings.ar.navWork = cfg.navWorkAr || 'الأعمال';
    i18nStrings.en.navServices = cfg.navServicesEn || 'SERVICES';
    i18nStrings.ar.navServices = cfg.navServicesAr || 'الخدمات';
    i18nStrings.en.navCinema = cfg.navCinemaEn || 'MOTION';
    i18nStrings.ar.navCinema = cfg.navCinemaAr || 'الموشن';
    i18nStrings.en.navExperience = cfg.navExperienceEn || 'EXPERIENCE';
    i18nStrings.ar.navExperience = cfg.navExperienceAr || 'الخبرات';
    i18nStrings.en.navCta = cfg.navCtaEn || 'START A PROJECT';
    i18nStrings.ar.navCta = cfg.navCtaAr || 'ابدأ مشروعك';
    i18nStrings.en.practiceTitle1 = cfg.practiceTitle1En || 'EVERY DETAIL';
    i18nStrings.ar.practiceTitle1 = cfg.practiceTitle1Ar || 'كل تفصيلة';
    i18nStrings.en.practiceTitle2 = cfg.practiceTitle2En || 'HAS A';
    i18nStrings.ar.practiceTitle2 = cfg.practiceTitle2Ar || 'لها سبب';
    i18nStrings.en.practiceTitle3 = cfg.practiceTitle3En || 'REASON TO EXIST.';
    i18nStrings.ar.practiceTitle3 = cfg.practiceTitle3Ar || 'لوجودها.';
    i18nStrings.en.practiceDesc = cfg.practiceDescEn || i18nStrings.en.practiceDesc;
    i18nStrings.ar.practiceDesc = cfg.practiceDescAr || i18nStrings.ar.practiceDesc;
    i18nStrings.en.workTitle1 = cfg.workTitle1En || 'CRAFTED FOR';
    i18nStrings.ar.workTitle1 = cfg.workTitle1Ar || 'مُصمَّمة لجذب';
    i18nStrings.en.workTitle2 = cfg.workTitle2En || 'REAL ATTENTION.';
    i18nStrings.ar.workTitle2 = cfg.workTitle2Ar || 'الانتباه الحقيقي.';
    i18nStrings.en.ytTitle1 = cfg.ytTitle1En || 'WATCH THE WORK';
    i18nStrings.ar.ytTitle1 = cfg.ytTitle1Ar || 'شاهد الأعمال';
    i18nStrings.en.ytTitle2 = cfg.ytTitle2En || 'IN MOTION.';
    i18nStrings.ar.ytTitle2 = cfg.ytTitle2Ar || 'في حركة.';
    i18nStrings.en.ytIntro = cfg.ytIntroEn || i18nStrings.en.ytIntro;
    i18nStrings.ar.ytIntro = cfg.ytIntroAr || i18nStrings.ar.ytIntro;
    i18nStrings.en.moveTitle1 = cfg.moveTitle1En || 'MAKE THE';
    i18nStrings.ar.moveTitle1 = cfg.moveTitle1Ar || 'اجعل';
    i18nStrings.en.moveTitle2 = cfg.moveTitle2En || 'BRAND';
    i18nStrings.ar.moveTitle2 = cfg.moveTitle2Ar || 'العلامة';
    i18nStrings.en.moveTitle3 = cfg.moveTitle3En || 'MOVE.';
    i18nStrings.ar.moveTitle3 = cfg.moveTitle3Ar || 'تتحرك.';
    i18nStrings.en.moveDesc = cfg.moveDescEn || i18nStrings.en.moveDesc;
    i18nStrings.ar.moveDesc = cfg.moveDescAr || i18nStrings.ar.moveDesc;
    i18nStrings.en.ctaTitle1 = cfg.ctaTitle1En || 'READY TO BUILD SOMETHING';
    i18nStrings.ar.ctaTitle1 = cfg.ctaTitle1Ar || 'جاهز لبناء شيء';
    i18nStrings.en.ctaTitle2 = cfg.ctaTitle2En || 'UNFORGETTABLE?';
    i18nStrings.ar.ctaTitle2 = cfg.ctaTitle2Ar || 'لا يُنسى؟';
    i18nStrings.en.ctaBtn = cfg.ctaBtnEn || 'START A PROJECT';
    i18nStrings.ar.ctaBtn = cfg.ctaBtnAr || 'ابدأ مشروعك';

    const setById = (id, v) => { const el = document.getElementById(id); if (el && v != null) el.textContent = v; };
    setById('hero-kicker-name', cfg.brandName);
    setById('hero-meta-top', cfg.heroMetaTop);
    setById('hero-meta-sub', cfg.heroMetaSub);
    setById('hero-wm-1', cfg.heroWatermark1);
    setById('hero-wm-2', cfg.heroWatermark2);
    setById('hero-coord-code', cfg.heroCoordCode);
    setById('hero-coord-loc', cfg.heroCoordLoc);
    setById('about-line-1', cfg.aboutLine1);
    setById('about-line-2', cfg.aboutLine2);
    setById('about-line-3', cfg.aboutLine3);

    if (Array.isArray(cfg.stats) && cfg.stats.length >= 3) {
      i18nStrings.en.statYears = cfg.stats[0].en;
      i18nStrings.ar.statYears = cfg.stats[0].ar;
      i18nStrings.en.statProjects = cfg.stats[1].en;
      i18nStrings.ar.statProjects = cfg.stats[1].ar;
      i18nStrings.en.statClients = cfg.stats[2].en;
      i18nStrings.ar.statClients = cfg.stats[2].ar;

      const statBoxes = document.querySelectorAll('#about .grid.grid-cols-3 > div > div:first-child');
      cfg.stats.slice(0, 3).forEach((st, i) => {
        if (statBoxes[i]) statBoxes[i].innerHTML = `${st.num}<span class="text-[#A06620]">+</span>`;
      });
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18nStrings[currentLang] && i18nStrings[currentLang][key]) {
        el.textContent = i18nStrings[currentLang][key];
      }
    });

    const headerBrand = document.querySelector('header a[href="#top"] span:first-child');
    const headerSub = document.querySelector('header a[href="#top"] span:last-child');
    if (headerBrand && cfg.brandName) headerBrand.textContent = cfg.brandName;
    if (headerSub && cfg.brandTagline) headerSub.textContent = cfg.brandTagline;

    [
      ['headerLogoImg', 'headerLogoVector'],
      ['fallbackStageLogoImg', 'fallbackStageLogoVector'],
      ['footerLogoImg', 'footerLogoVector']
    ].forEach(([imgId, vecId]) => {
      const img = document.getElementById(imgId);
      const vec = document.getElementById(vecId);
      if (img && cfg.logoUrl) {
        img.src = normalizeExternalImageUrl(cfg.logoUrl);
        img.classList.remove('hidden');
        if (vec) vec.classList.add('hidden');
      }
    });

    const portraitImg = document.getElementById('portraitImg');
    const portraitFallback = document.getElementById('portraitFallback');
    if (portraitImg && cfg.portraitUrl) {
      portraitImg.src = normalizeExternalImageUrl(cfg.portraitUrl);
      portraitImg.classList.remove('hidden');
      if (portraitFallback) portraitFallback.classList.add('hidden');
      if (typeof setPortraitMode === 'function' && cfg.portraitMode) {
        setPortraitMode(cfg.portraitMode);
      }
    }

    const cvLink = document.getElementById('cvDownloadLink');
    if (cvLink && cfg.cvUrl) cvLink.href = cfg.cvUrl;

    document.querySelectorAll('a[href*="wa.me/"]').forEach(a => {
      a.href = `https://wa.me/${cfg.whatsapp}`;
      if (a.textContent.includes('+')) a.innerHTML = `<span>WhatsApp · +${cfg.whatsapp}</span>`;
    });

    document.querySelectorAll('a[href^="mailto:"], #footerEmailLink').forEach(a => {
      a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(cfg.email || 'hkerlos@gmail.com')}`;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    });

    const footerLoc = document.querySelector('footer .text-\\[11px\\].text-\\[\\#B97B2E\\]');
    if (footerLoc) footerLoc.textContent = `${cfg.location} · ${cfg.email}`;

    document.querySelectorAll('a[href*="behance.net"]').forEach(a => {
      if (!a.closest('article') && a.id !== 'pm-behance-link') a.href = cfg.behanceUrl;
    });
    document.querySelectorAll('a[href*="youtube.com/@"]').forEach(a => { a.href = cfg.youtubeUrl; });
    document.querySelectorAll('a[href*="linkedin.com"]').forEach(a => { a.href = cfg.linkedinUrl; });

    submitInquiryForm = function (e) {
      e.preventDefault();
      const name = document.getElementById('inq-name').value.trim();
      const service = document.getElementById('inq-service').value;
      const msg = document.getElementById('inq-msg').value.trim();
      const text = encodeURIComponent(`Hello Kerlos, I'm ${name}.\nService: ${service}\nBrief: ${msg}`);
      window.open(`https://wa.me/${cfg.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
      closeContactModal();
    };
    window.submitInquiryForm = submitInquiryForm;

    sendViaEmail = function () {
      const name = document.getElementById('inq-name').value.trim() || 'Client';
      const service = document.getElementById('inq-service').value;
      const msg = document.getElementById('inq-msg').value.trim();
      const subject = encodeURIComponent(`Design Inquiry (${service}) — ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nService: ${service}\n\n${msg}`);
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(cfg.email || 'hkerlos@gmail.com')}&su=${subject}&body=${body}`, '_blank', 'noopener,noreferrer');
      closeContactModal();
    };
    window.sendViaEmail = sendViaEmail;

    const isShowcaseEmpty = cfg.heroShowcaseEmpty === true || (Array.isArray(cfg.heroShowcaseItems) && cfg.heroShowcaseItems.length === 0);
    const showcaseItems = isShowcaseEmpty
      ? []
      : (Array.isArray(cfg.heroShowcaseItems) && cfg.heroShowcaseItems.length > 0
          ? cfg.heroShowcaseItems
          : [
              { type: 'video', url: cfg.revealVideo1 || './Cinematic_logo_reveal_animation_202606051512-cleaned.mp4', titleEn: '3D Reveal 01', titleAr: 'تحريك 3D — 01' },
              { type: 'video', url: cfg.revealVideo2 || './Cinematic_logo_reveal_animation_202606051517.mp4', titleEn: '3D Reveal 02', titleAr: 'تحريك 3D — 02' }
            ]);
    KHHeroShowcase.setup(showcaseItems, cfg.heroSlideSeconds || 5);
    KHTopHeroBg.setup(cfg.heroBgConfig);

    const skillsGrid = document.querySelector('#skills .lg\\:col-span-7.grid');
    if (skillsGrid && Array.isArray(cfg.skills)) {
      const badgeStyles = [
        'bg-[#0E3E3F] border border-[#A06620]/60 text-[#F5F4F0]',
        'bg-[#A06620] text-[#F5F4F0]',
        'bg-[#0E3E3F] border border-[#A06620]/60 text-[#B97B2E]',
        'bg-[#6A5639] text-[#F5F4F0]'
      ];
      skillsGrid.innerHTML = cfg.skills.map((s, idx) => `
        <div class="rounded-2xl glass-card glass-card-hover p-4 space-y-3 ${idx % 2 === 1 ? 'sm:translate-y-4' : ''}">
          <div class="w-10 h-10 rounded-xl ${badgeStyles[idx % badgeStyles.length]} flex items-center justify-center text-sm font-extrabold">${s.code}</div>
          <div>
            <div class="text-xs font-bold text-[#F5F4F0]">${s.name}</div>
            <div class="text-[10px] text-[#C2CCC8]">${s.subtitle}</div>
          </div>
          <div class="w-full h-1.5 rounded-full bg-[#021411] overflow-hidden">
            <div class="h-full bg-[#A06620] rounded-full" style="width: ${Math.min(100, Math.max(5, s.percent))}%"></div>
          </div>
        </div>
      `).join('');
    }

    const expList = document.getElementById('experience-list');
    if (expList && Array.isArray(cfg.experience)) {
      expList.innerHTML = cfg.experience.map((ex, idx) => `
        <div class="exp-row py-5 px-4 sm:px-6 rounded-2xl grid grid-cols-12 gap-3 sm:gap-4 items-center">
          <div class="col-span-2 sm:col-span-1 font-mono text-[11px] font-bold text-[#0E3E3F]">0${idx + 1}</div>
          <div class="col-span-10 sm:col-span-2">
            <span class="inline-flex px-3 py-1 rounded-full ${idx === 0 ? 'bg-[#021411] text-[#C59367]' : 'bg-[#0E3E3F] text-[#F2EADF]'} font-mono text-[10px] font-bold uppercase">${ex.period}</span>
          </div>
          <div class="col-span-12 sm:col-span-3 font-display font-bold text-sm sm:text-base uppercase text-[#12100E]">${ex.company}</div>
          <div class="col-span-12 sm:col-span-5 space-y-1">
            <div class="text-xs font-bold text-[#A06620]">${ex.role}</div>
            <p class="text-xs text-[#12100E]/75 leading-relaxed">${ex.desc}</p>
          </div>
          <div class="hidden sm:block sm:col-span-1 text-end font-mono text-sm text-[#A06620]">↗</div>
        </div>
      `).join('');
      if (typeof window.observeRevealElements === 'function') window.observeRevealElements();
    }

    const validManualProjects = (Array.isArray(cfg.projects) ? cfg.projects : []).filter(
      p => p && p.image && !isDeadStoragePath(p.image)
    );
    const mappedProjects = validManualProjects.map(p => {
      const extra = (Array.isArray(p.extraBoards) ? p.extraBoards : []).filter(b => b && !isDeadStoragePath(b));
      const projVideos = extra.map(classifyVideoUrl).filter(Boolean);
      const imageBoards = extra.filter(b => !classifyVideoUrl(b));
      const hdCoverCandidates = upgradeImageCandidates(p.image);

      const gallery = [
        {
          src: hdCoverCandidates[0] || p.image,
          srcCandidates: hdCoverCandidates,
          captionEn: `01 · ${p.titleEn}`,
          captionAr: `01 · ${p.titleAr}`
        },
        ...imageBoards.map((b, bIdx) => ({
          src: upgradeImageCandidates(b)[0] || b,
          srcCandidates: upgradeImageCandidates(b),
          captionEn: `0${bIdx + 2} · Project Presentation Board`,
          captionAr: `0${bIdx + 2} · لوحة عرض المشروع`
        }))
      ];
      return {
        ...p,
        source: 'curated',
        hasVideo: projVideos.length > 0,
        videos: projVideos,
        image: hdCoverCandidates[0] || p.image,
        imageCandidates: hdCoverCandidates,
        mediaGallery: gallery
      };
    });

    const cachedBehance = cfg.sections.behanceSync !== false ? loadBehanceCache() : [];
    cachedBehance.forEach(item => applyBehanceOverridesToProject(item, cfg));
    projectsData = [...cachedBehance, ...mappedProjects];
    renderProjects();
    if (typeof initHeroShowcaseCards === 'function') initHeroShowcaseCards();

    if (cfg.sections.behanceSync !== false) {
      syncBehanceProjects();
    }

    renderHeroFloatingCards(cfg);

    if (Array.isArray(cfg.youtubeVideos) && cfg.youtubeVideos.length > 0) {
      ytPlaylist = [...cfg.youtubeVideos];
      FlashMediaDeck.currentIndex = 0;
      renderYouTubePlaylist();
      FlashMediaDeck.loadCurrentFrame();
      FlashMediaDeck.updateUI();
    }
    if (cfg.youtubeAutoTop !== false) {
      syncTopYouTubeToPortfolio(cfg);
    }

    const revealStageBox = document.getElementById('motion-feature') || document.querySelector('#top .mb-12.rounded-3xl.glass-card');
    if (revealStageBox) {
      const shouldShow = cfg.sections.heroReveal !== false && showcaseItems.length > 0;
      revealStageBox.style.display = shouldShow ? '' : 'none';
      if (!shouldShow) {
        const vid = document.getElementById('heroRevealVideo');
        if (vid) vid.pause();
      }
    }


    // Render Transparent Animated Brand Logos Marquee
    const marqueeSec = document.getElementById('clients-marquee');
    const marqueeTrack = document.getElementById('clients-marquee-track');
    const logosList = Array.isArray(cfg.clientLogos) ? cfg.clientLogos.filter(b => b && (b.logoUrl || b.name)) : [];
    if (marqueeSec && marqueeTrack) {
      const showMarquee = cfg.sections.clientsMarquee !== false && logosList.length > 0;
      marqueeSec.style.display = showMarquee ? '' : 'none';
      if (showMarquee) {
        const speed = Math.min(90, Math.max(8, Number(cfg.marqueeSpeedSeconds) || 28));
        marqueeTrack.style.setProperty('--marquee-speed', `${speed}s`);
        const renderItem = (b) => {
          const safeName = String(b.name || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
          const imgUrl = b.logoUrl ? normalizeExternalImageUrl(b.logoUrl) : '';
          if (imgUrl) {
            return `<div class="brand-marquee-item" title="${safeName}">
              <img src="${imgUrl}" alt="${safeName}" class="brand-marquee-logo" loading="lazy" />
              ${safeName ? `<span class="font-mono text-[11px] uppercase tracking-[0.14em] text-[#C9BFB2]">${safeName}</span>` : ''}
            </div>`;
          }
          return `<div class="brand-marquee-item">
            <span class="w-1.5 h-1.5 rounded-full bg-[#C59367]/75"></span>
            <span class="font-display font-bold text-xs sm:text-sm uppercase tracking-[0.14em] text-[#F2EADF]/85">${safeName}</span>
          </div>`;
        };
        const singleSet = logosList.map(renderItem).join('');
        // Duplicate set enough times so loop is always seamless even with 2-3 logos
        const repeatCount = logosList.length < 5 ? 4 : 2;
        marqueeTrack.innerHTML = singleSet.repeat(repeatCount);
      }
    }

    const sectionIds = {
      about: 'about',
      skills: 'skills',
      work: 'work',
      cinema: 'cinema',
      experience: 'experience',
      cta: 'cta'
    };
    Object.entries(sectionIds).forEach(([key, domId]) => {
      const sec = document.getElementById(domId);
      if (sec) sec.style.display = cfg.sections[key] !== false ? '' : 'none';
    });
  }

  window.KHControlRoom = {
    getDefaultConfig,
    loadConfig,
    applyConfigToPortfolio,
    KHHeroShowcase,
    signInWithEmailPassword,
    getValidFirebaseIdToken,
    clearAuthSession,
    fetchTopYouTubeVideos,
    fetchExternalTextWithFallback,
    parseBehanceRssXml,
    loadBehanceCache,
    extractBehanceVideosAndImages
  };

  if (document.getElementById('projects-grid')) {
    installPortfolioEnhancements();
    loadConfig().then(applyConfigToPortfolio);
  }
})();