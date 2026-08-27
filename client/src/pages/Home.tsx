/**
 * Signal Editorial — bilingual dark portfolio for Farah Muen.
 * English uses Newsreader/JetBrains Mono; Arabic uses Noto Naskh/Sans Arabic with mirrored RTL composition.
 */
import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  ExternalLink,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Send,
  Sparkles,
  X,
} from "lucide-react";

type Language = "en" | "ar";

const projectUrl = "https://www.behance.net/gallery/251612691/Medivo-Doctor-Appointment-Booking";
const behanceUrl = "https://www.behance.net/farahmuen";
const linkedinUrl = "https://www.linkedin.com/in/farah-muen/";

const content = {
  en: {
    pageTitle: "Farah Muen — UX/UI Designer",
    nav: { work: "Work", services: "Services", process: "Process", about: "About", contact: "Let's talk" },
    hero: {
      availability: "Open for freelance projects",
      location: "Palestine · Remote worldwide",
      role: "UX/UI Designer · Computer Systems Engineering Graduate",
      title: ["Designing clarity", "for every", "digital step."],
      description: "I design simple, intuitive digital experiences that help people reach their goals—and help businesses create better outcomes.",
      workButton: "View selected work",
      talkButton: "Start a conversation",
      portraitTop: ["Based in Palestine", "working worldwide"],
      portraitBottom: "UX/UI · 2026",
      foot: "Human-centered design · Detail-led thinking · Clear digital systems",
      scroll: "Scroll to explore",
    },
    ticker: ["UX/UI Design", "User Research", "Wireframes & Prototypes", "Design Systems", "Responsive Design", "Dashboards", "Landing Pages"],
    work: {
      label: "Selected work",
      title: ["Products should feel", "clear before clever."],
      introduction: "One independent case study, designed from the user's first question to their final confirmation.",
      evidence: "Product evidence / 01",
      flow: "Patient booking flow",
      imageCaption: "Home · Search · Profile · Book",
      behance: "View on Behance",
      type: "Healthcare platform · UX/UI case study · English",
      name: "Medivo",
      lead: "Doctor appointment booking, made easier to follow.",
      description: "Medivo is an online healthcare concept that helps patients discover suitable doctors, compare profiles, check availability, and book an appointment with fewer, clearer steps.",
      facts: [["Role", "UX/UI Designer"], ["Duration", "1 week"], ["Key screens", "06 flows"]],
      highlights: ["Home page & doctor discovery", "Doctor profile & availability", "Booking, confirmation & sign in"],
      link: "Explore the full case study",
    },
    services: {
      label: "Services",
      title: ["One idea.", "A clearer way forward."],
      introduction: "I partner with startups and small teams bringing a new product, service, or idea into focus.",
      note: "User-centered design, attention to detail, and turning complex ideas into simple, intuitive experiences.",
      items: [
        ["01", "UX/UI Design", "Useful, expressive interfaces shaped around the people who rely on them.", ["Website Design", "Mobile Apps", "Dashboards", "Landing Pages"]],
        ["02", "User Research", "Finding the real friction before it becomes a polished but unhelpful screen.", ["Surveys", "User Needs", "Problem Framing"]],
        ["03", "Wireframing & Prototyping", "Turning loose ideas into clear paths worth testing before development begins.", ["User Flows", "Wireframes", "Interactive Prototypes"]],
        ["04", "Design Systems", "A practical visual language that makes product decisions consistent and scalable.", ["Components", "Responsive Design", "Developer Handoff"]],
      ],
    },
    process: {
      label: "How I work",
      title: ["Understanding comes", "before the canvas."],
      introduction: "I do not begin with a screen. I begin by understanding the problem, the goals, and the people the product needs to serve.",
      imageAlt: "Abstract representation of a UX design process",
      tools: "Tools I use",
      items: [
        ["01", "Understand", "Clarify the problem, goals, and the people behind the product."],
        ["02", "Research", "Explore user needs, context, and the friction worth solving."],
        ["03", "Define", "Shape findings into priorities, flows, and a focused direction."],
        ["04", "Wireframe", "Arrange information and interactions before visual detail arrives."],
        ["05", "Design", "Build a clear interface with an intentional visual system."],
        ["06", "Prototype & Test", "Make the flow tangible, then review it through a user lens."],
        ["07", "Handoff", "Prepare thoughtful, responsive files that developers can use with confidence."],
      ],
    },
    about: {
      label: "About Farah",
      fieldNote: "Field note / 01",
      quote: "“A good experience makes the next step feel obvious.”",
      based: "Based in",
      working: "Working",
      palestine: "Palestine",
      worldwide: "Worldwide",
      title: ["Engineer at heart.", "Designer by choice."],
      intro: "I'm Farah, a UX/UI Designer and Computer Systems Engineering graduate from Al-Azhar University.",
      paragraphOne: "I enjoy combining technical thinking, creativity, and problem-solving to create simple, intuitive digital experiences. I care about understanding people's needs, bringing structure to complex ideas, and attending to the details that make an experience feel clear and meaningful.",
      paragraphTwo: "For me, good design goes beyond appearance. It starts by understanding the problem and ends with an experience that helps people move forward with confidence.",
      principles: ["User empathy", "Problem solving", "Attention to detail"],
      education: "Education",
      university: "Al-Azhar University",
      industries: "Industries I enjoy",
      industryList: "Services · Education · Real estate · Healthcare · E-commerce",
    },
    contact: {
      label: "Contact",
      availability: "Open for freelance projects",
      title: ["Have a project", "in mind?", "Let's create", "something meaningful."],
      introduction: "I usually respond within 1–2 business days. A short note about the problem you're solving is the perfect place to start.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      projectType: "Project type",
      message: "Tell me a little about it",
      messagePlaceholder: "What would you like to make clearer?",
      options: ["UX/UI Design", "User Research", "Wireframing & Prototyping", "Design System", "Something else"],
      send: "Create email",
      formNote: "The form opens your email app—no mailing list, no follow-up sequence.",
      emailSubject: "enquiry",
    },
    footer: "Thoughtful digital experiences, made clear.",
    languageName: "العربية",
    languageLabel: "Switch site language to Arabic",
  },
  ar: {
    pageTitle: "فرح معين — مصممة UX/UI",
    nav: { work: "الأعمال", services: "الخدمات", process: "طريقة العمل", about: "عني", contact: "لنتحدث" },
    hero: {
      availability: "متاحة لمشاريع العمل الحر",
      location: "فلسطين · أعمل عن بُعد حول العالم",
      role: "مصممة UX/UI · خريجة هندسة أنظمة حاسوب",
      title: ["أصمم الوضوح", "لكل", "خطوة رقمية."],
      description: "أصمم تجارب رقمية بسيطة وسهلة الاستخدام تساعد المستخدمين على تحقيق أهدافهم، وتساعد الشركات على الوصول إلى نتائج أفضل.",
      workButton: "شاهدي أعمالي المختارة",
      talkButton: "لنبدأ محادثة",
      portraitTop: ["من فلسطين", "أعمل عالميًا"],
      portraitBottom: "UX/UI · 2026",
      foot: "تصميم يتمحور حول المستخدم · تفكير يهتم بالتفاصيل · أنظمة رقمية واضحة",
      scroll: "اكتشفي المزيد",
    },
    ticker: ["تصميم UX/UI", "بحث المستخدمين", "Wireframes & Prototypes", "أنظمة التصميم", "تصميم متجاوب", "لوحات التحكم", "Landing Pages"],
    work: {
      label: "أعمال مختارة",
      title: ["المنتجات يجب أن تبدو", "واضحة قبل أن تبدو ذكية."],
      introduction: "دراسة حالة مستقلة تبدأ من سؤال المستخدم الأول وتنتهي بتأكيد الحجز الأخير.",
      evidence: "دليل المنتج / 01",
      flow: "مسار حجز المريض",
      imageCaption: "الرئيسية · البحث · الملف · الحجز",
      behance: "عرض على Behance",
      type: "منصة صحية · دراسة حالة UX/UI · إنجليزية",
      name: "Medivo",
      lead: "حجز مواعيد الأطباء، بطريقة أسهل وأوضح.",
      description: "Medivo هو تصور لمنصة صحية إلكترونية تساعد المرضى على العثور على الطبيب المناسب، مقارنة الملفات، معرفة المواعيد المتاحة، وحجز الموعد بخطوات أقل وأكثر وضوحًا.",
      facts: [["الدور", "مصممة UX/UI"], ["المدة", "أسبوع واحد"], ["الشاشات الأساسية", "06 مسارات"]],
      highlights: ["الصفحة الرئيسية والبحث عن الأطباء", "ملف الطبيب والمواعيد المتاحة", "الحجز والتأكيد وتسجيل الدخول"],
      link: "استكشفي دراسة الحالة كاملة",
    },
    services: {
      label: "الخدمات",
      title: ["فكرة واحدة.", "وطريق أوضح للأمام."],
      introduction: "أتعاون مع الشركات الناشئة والفرق الصغيرة لتحويل منتج أو خدمة أو فكرة جديدة إلى تجربة واضحة.",
      note: "تصميم يضع المستخدم أولًا، واهتمام بالتفاصيل، وقدرة على تحويل الأفكار المعقدة إلى تجارب رقمية بسيطة وواضحة.",
      items: [
        ["01", "تصميم UX/UI", "واجهات مفيدة ومعبرة مبنية حول احتياجات الأشخاص الذين سيستخدمونها.", ["تصميم المواقع", "تطبيقات الموبايل", "لوحات التحكم", "Landing Pages"]],
        ["02", "بحث المستخدمين", "اكتشاف نقاط الاحتكاك الحقيقية قبل تحويلها إلى واجهة جميلة لكنها غير مفيدة.", ["استبيانات", "احتياجات المستخدم", "تحديد المشكلة"]],
        ["03", "Wireframing & Prototyping", "تحويل الأفكار الأولية إلى مسارات واضحة تستحق الاختبار قبل بدء التطوير.", ["User Flows", "Wireframes", "نماذج تفاعلية"]],
        ["04", "أنظمة التصميم", "لغة بصرية عملية تجعل قرارات المنتج أكثر اتساقًا وقابلية للتوسع.", ["Components", "تصميم متجاوب", "تسليم للمطورين"]],
      ],
    },
    process: {
      label: "طريقة العمل",
      title: ["الفهم يأتي", "قبل البدء بالتصميم."],
      introduction: "لا أبدأ بالشاشة، بل بفهم المشكلة والأهداف والأشخاص الذين صُمم المنتج لخدمتهم.",
      imageAlt: "تمثيل بصري مجرد لمراحل عملية تصميم تجربة المستخدم",
      tools: "الأدوات التي أستخدمها",
      items: [
        ["01", "الفهم", "توضيح المشكلة والأهداف والأشخاص الذين يقفون خلف المنتج."],
        ["02", "البحث", "استكشاف احتياجات المستخدم وسياقه ونقاط الاحتكاك التي تستحق الحل."],
        ["03", "التحديد", "تحويل النتائج إلى أولويات ومسارات واتجاه واضح."],
        ["04", "Wireframes", "ترتيب المعلومات والتفاعلات قبل إضافة التفاصيل البصرية."],
        ["05", "التصميم", "بناء واجهة واضحة بنظام بصري مقصود ومتسق."],
        ["06", "النموذج والاختبار", "تحويل المسار إلى تجربة ملموسة ثم مراجعته من منظور المستخدم."],
        ["07", "التسليم", "إعداد ملفات متجاوبة ومنظمة يستطيع المطورون استخدامها بثقة."],
      ],
    },
    about: {
      label: "عن فرح",
      fieldNote: "ملاحظة ميدانية / 01",
      quote: "«التجربة الجيدة تجعل الخطوة التالية بديهية.»",
      based: "الموقع",
      working: "نطاق العمل",
      palestine: "فلسطين",
      worldwide: "حول العالم",
      title: ["مهندسة في الأساس.", "ومصممة عن قناعة."],
      intro: "أنا فرح، مصممة UX/UI وخريجة هندسة أنظمة حاسوب من جامعة الأزهر.",
      paragraphOne: "أستمتع بالجمع بين التفكير التقني والإبداع وحل المشكلات لإنشاء تجارب رقمية بسيطة وسهلة الاستخدام. أهتم بفهم احتياجات المستخدم، وتحويل الأفكار المعقدة إلى منتجات واضحة، والاهتمام بالتفاصيل التي تجعل التجربة ذات معنى.",
      paragraphTwo: "بالنسبة لي، لا يقتصر التصميم الجيد على المظهر؛ بل يبدأ بفهم المشكلة وينتهي بتجربة تساعد المستخدم على التقدم بثقة.",
      principles: ["التعاطف مع المستخدم", "حل المشكلات", "الاهتمام بالتفاصيل"],
      education: "التعليم",
      university: "جامعة الأزهر",
      industries: "مجالات أستمتع بتصميمها",
      industryList: "الخدمات · التعليم · العقارات · الصحة · التجارة الإلكترونية",
    },
    contact: {
      label: "تواصل معي",
      availability: "متاحة لمشاريع العمل الحر",
      title: ["لديك مشروع", "في ذهنك؟", "لنصنع معًا", "شيئًا ذا معنى."],
      introduction: "أرد عادةً خلال يوم إلى يومي عمل. تكفي رسالة قصيرة عن المشكلة التي تريد حلها لنبدأ.",
      name: "الاسم",
      namePlaceholder: "اكتب اسمك",
      email: "البريد الإلكتروني",
      emailPlaceholder: "you@example.com",
      projectType: "نوع المشروع",
      message: "أخبرني قليلًا عن المشروع",
      messagePlaceholder: "ما الذي تريد جعله أوضح؟",
      options: ["تصميم UX/UI", "بحث المستخدمين", "Wireframing & Prototyping", "نظام تصميم", "شيء آخر"],
      send: "إنشاء رسالة بريد",
      formNote: "يفتح النموذج تطبيق البريد لديك؛ لا توجد قائمة بريدية أو رسائل متابعة.",
      emailSubject: "استفسار",
    },
    footer: "تجارب رقمية مدروسة، بوضوح أكبر.",
    languageName: "EN",
    languageLabel: "تغيير لغة الموقع إلى الإنجليزية",
  },
} as const;

function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <div className="section-label">
      <span className="section-label__number">{number}</span>
      <i className="section-label__node" aria-hidden="true" />
      <span className="section-label__line" />
      <span>{children}</span>
    </div>
  );
}

function ArrowLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <a className="text-link" href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      <span>{children}</span>
      <ArrowUpRight size={16} strokeWidth={1.7} />
    </a>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>(() => new URLSearchParams(window.location.search).get("lang") === "ar" ? "ar" : "en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", type: "UX/UI Design", message: "" });
  const t = content[language];
  const isArabic = language === "ar";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.title = t.pageTitle;
    const url = new URL(window.location.href);
    if (isArabic) url.searchParams.set("lang", "ar");
    else url.searchParams.delete("lang");
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }, [isArabic, language, t.pageTitle]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const switchLanguage = () => {
    setLanguage((current) => current === "en" ? "ar" : "en");
    setForm((current) => ({ ...current, type: content[language === "en" ? "ar" : "en"].contact.options[0] }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`${t.contact.emailSubject}: ${form.type} — ${form.name || "portfolio visitor"}`);
    const body = encodeURIComponent(`${t.contact.name}: ${form.name}\n${t.contact.email}: ${form.email}\n${t.contact.projectType}: ${form.type}\n\n${form.message}`);
    window.location.href = `mailto:farahmuen@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={`site-shell ${isArabic ? "is-rtl" : ""}`} id="top" dir={isArabic ? "rtl" : "ltr"}>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Farah Muen home" dir="ltr">
          <img className="wordmark__mark" src="/manus-storage/farah-signal-mark_05815943.png" alt="" />
          <span>Farah</span> <em>Muen</em><i aria-hidden="true" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <button onClick={() => scrollTo("work")}>{t.nav.work}</button>
          <button onClick={() => scrollTo("services")}>{t.nav.services}</button>
          <button onClick={() => scrollTo("about")}>{t.nav.about}</button>
        </nav>

        <div className="header-actions">
          <button className="language-switch" onClick={switchLanguage} aria-label={t.languageLabel}>{t.languageName}</button>
          <button className="header-contact" onClick={() => scrollTo("contact")}>
            {t.nav.contact} <ArrowUpRight size={15} />
          </button>
          <button className="mobile-menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <button onClick={() => scrollTo("work")}>{t.nav.work} <ChevronRight size={16} /></button>
            <button onClick={() => scrollTo("services")}>{t.nav.services} <ChevronRight size={16} /></button>
            <button onClick={() => scrollTo("process")}>{t.nav.process} <ChevronRight size={16} /></button>
            <button onClick={() => scrollTo("about")}>{t.nav.about} <ChevronRight size={16} /></button>
            <button onClick={() => scrollTo("contact")}>{t.nav.contact} <ChevronRight size={16} /></button>
          </nav>
        )}
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-atmosphere" src="/manus-storage/farah-signal-hero_d4c2c56b.png" alt="" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit--two" aria-hidden="true" />

          <div className="hero-inner">
            <div className="hero-topline reveal">
              <span><i className="signal-dot" /> {t.hero.availability}</span>
              <span>{t.hero.location}</span>
            </div>

            <div className="hero-content">
              <div className="hero-copy">
                <p className="eyebrow reveal reveal--delay-1">{t.hero.role}</p>
                <h1 id="hero-title" className="reveal reveal--delay-2">
                  {t.hero.title[0]}<br />{t.hero.title[1]}<br /><em>{t.hero.title[2]}</em>
                </h1>
                <p className="hero-description reveal reveal--delay-3">{t.hero.description}</p>
                <div className="hero-ctas reveal reveal--delay-4">
                  <button className="button button--primary" onClick={() => scrollTo("work")}>{t.hero.workButton} <ArrowDownRight size={18} /></button>
                  <button className="button button--quiet" onClick={() => scrollTo("contact")}>{t.hero.talkButton} <ArrowUpRight size={17} /></button>
                </div>
              </div>

              <div className="hero-portrait-wrap reveal reveal--delay-3">
                <div className="portrait-meta portrait-meta--top">{t.hero.portraitTop[0]}<br />{t.hero.portraitTop[1]}</div>
                <div className="portrait-frame">
                  <img src="/manus-storage/farah-muen-portrait_44c29263.jpeg" alt="Farah Muen, UX/UI Designer" />
                  <div className="portrait-scan" aria-hidden="true" />
                </div>
                <div className="portrait-meta portrait-meta--bottom"><span>F.M.</span><span>{t.hero.portraitBottom}</span></div>
              </div>
            </div>

            <div className="hero-foot reveal reveal--delay-4">
              <p>{t.hero.foot}</p>
              <a href="#work" aria-label={t.hero.scroll}><span>{t.hero.scroll}</span><ArrowDownRight size={17} /></a>
            </div>
          </div>
        </section>

        <div className="ticker" aria-label={t.ticker.join(" · ")}>
          <div className="ticker__track">
            {[...t.ticker, ...t.ticker].map((item, index) => <span key={`${item}-${index}`}>{item}<b>◆</b></span>)}
          </div>
        </div>

        <section className="section work-section" id="work">
          <div className="section-rail"><SectionLabel number="01">{t.work.label}</SectionLabel></div>
          <div className="section-main">
            <div className="heading-row">
              <h2>{t.work.title[0]}<br /><em>{t.work.title[1]}</em></h2>
              <p>{t.work.introduction}</p>
            </div>

            <article className="project-card">
              <div className="project-card__image-wrap">
                <span className="project-card__index">01</span>
                <div className="project-card__grid" aria-hidden="true" />
                <span className="project-annotation project-annotation--top">{t.work.evidence}</span>
                <span className="project-annotation project-annotation--side">{t.work.flow}</span>
                <div className="project-card__product-frame">
                  <img src="/manus-storage/medivo-cover_8bc0150e.webp" alt="Medivo doctor appointment booking project screens" className="project-card__image" />
                </div>
                <span className="project-annotation project-annotation--bottom">{t.work.imageCaption}</span>
                <a href={projectUrl} target="_blank" rel="noreferrer" className="project-card__visit">{t.work.behance} <ExternalLink size={15} /></a>
              </div>
              <div className="project-card__content">
                <div>
                  <p className="project-card__type">{t.work.type}</p>
                  <h3>{t.work.name}</h3>
                  <p className="project-card__lead">{t.work.lead}</p>
                </div>
                <p className="project-card__description">{t.work.description}</p>
                <div className="project-facts">
                  {t.work.facts.map(([label, value]) => <div key={label}><span>{label}</span><b>{value}</b></div>)}
                </div>
                <div className="project-highlights">
                  {t.work.highlights.map((highlight) => <span key={highlight}><Check size={14} />{highlight}</span>)}
                </div>
                <ArrowLink href={projectUrl} external>{t.work.link}</ArrowLink>
              </div>
            </article>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-rail"><SectionLabel number="02">{t.services.label}</SectionLabel></div>
          <div className="section-main">
            <div className="heading-row heading-row--compact">
              <h2 className="services-headline">{t.services.title[0]}<br /><span>{t.services.title[1]}</span></h2>
              <p>{t.services.introduction}</p>
            </div>
            <div className="service-list">
              {t.services.items.map(([number, title, description, tags]) => (
                <article className="service-row" key={number}>
                  <span className="service-row__number">{number}</span>
                  <div className="service-row__title"><h3>{title}</h3><ArrowUpRight size={20} /></div>
                  <p>{description}</p>
                  <div className="service-row__tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              ))}
            </div>
            <p className="services-note"><Sparkles size={15} />{t.services.note}</p>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="section-rail"><SectionLabel number="03">{t.process.label}</SectionLabel></div>
          <div className="section-main">
            <div className="process-intro">
              <div>
                <h2>{t.process.title[0]}<br /><em>{t.process.title[1]}</em></h2>
                <p>{t.process.introduction}</p>
              </div>
              <img src="/manus-storage/farah-process-atlas_8ed2826f.png" alt={t.process.imageAlt} />
            </div>
            <ol className="process-list">
              {t.process.items.map(([number, title, description]) => <li key={number}><span className="process-list__number">{number}</span><h3>{title}</h3><p>{description}</p></li>)}
            </ol>
            <div className="tool-strip"><span>{t.process.tools}</span><div><b>Figma</b><b>FigJam</b><b>Google Forms</b><b>Notion</b><b>Trello</b><b>GitHub</b></div></div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-rail"><SectionLabel number="04">{t.about.label}</SectionLabel></div>
          <div className="section-main about-layout">
            <div className="about-dossier">
              <div className="about-dossier__head"><span>{t.about.fieldNote}</span><span>Farah Muen</span></div>
              <div className="about-dossier__mark" dir="ltr">FM<i>.</i></div>
              <div className="about-dossier__diagram" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /></div>
              <div className="about-dossier__quote">{t.about.quote}</div>
              <div className="about-dossier__facts"><span><b>{t.about.based}</b>{t.about.palestine}</span><span><b>{t.about.working}</b>{t.about.worldwide}</span></div>
            </div>
            <div className="about-copy">
              <h2>{t.about.title[0]}<br /><em>{t.about.title[1]}</em></h2>
              <p className="about-copy__intro">{t.about.intro}</p>
              <p>{t.about.paragraphOne}</p>
              <p>{t.about.paragraphTwo}</p>
              <div className="principles">{t.about.principles.map((principle) => <span key={principle}>{principle}</span>)}</div>
              <div className="about-metadata"><div><span>{t.about.education}</span><b>{t.about.university}</b></div><div><span>{t.about.industries}</span><b>{t.about.industryList}</b></div></div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <img className="contact-atmosphere" src="/manus-storage/farah-contact-orbit_c4e5130b.png" alt="" />
          <div className="contact-grid" aria-hidden="true" />
          <div className="contact-inner">
            <SectionLabel number="05">{t.contact.label}</SectionLabel>
            <div className="contact-layout">
              <div className="contact-copy">
                <p className="eyebrow"><i className="signal-dot" /> {t.contact.availability}</p>
                <h2>{t.contact.title[0]}<br />{t.contact.title[1]} <em>{t.contact.title[2]}<br />{t.contact.title[3]}</em></h2>
                <p>{t.contact.introduction}</p>
                <div className="contact-direct">
                  <a href="mailto:farahmuen@gmail.com"><Mail size={17} />farahmuen@gmail.com</a>
                  <a href="https://wa.me/970599587044" target="_blank" rel="noreferrer" dir="ltr"><Phone size={16} />+970 599 587 044</a>
                </div>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <label><span>{t.contact.name}</span><input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder={t.contact.namePlaceholder} /></label>
                <label><span>{t.contact.email}</span><input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder={t.contact.emailPlaceholder} /></label>
                <label><span>{t.contact.projectType}</span><select value={form.type} onChange={(event) => setForm({ ...form, type: event.target.value })}>{t.contact.options.map((option) => <option key={option}>{option}</option>)}</select></label>
                <label><span>{t.contact.message}</span><textarea required value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder={t.contact.messagePlaceholder} rows={4} /></label>
                <button className="button button--primary contact-form__button" type="submit">{t.contact.send} <Send size={17} /></button>
                <p>{t.contact.formNote}</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#top" dir="ltr"><img className="wordmark__mark" src="/manus-storage/farah-signal-mark_05815943.png" alt="" /><span>Farah</span> <em>Muen</em><i aria-hidden="true" /></a>
        <p>{t.footer}</p>
        <div className="footer-links"><a href={behanceUrl} target="_blank" rel="noreferrer">Behance <ArrowUpRight size={13} /></a><a href={linkedinUrl} target="_blank" rel="noreferrer"><Linkedin size={13} /> LinkedIn</a><a href="mailto:farahmuen@gmail.com">{t.contact.email} <Mail size={13} /></a></div>
        <span className="footer-year">© {new Date().getFullYear()} Farah Muen</span>
      </footer>
    </div>
  );
}
