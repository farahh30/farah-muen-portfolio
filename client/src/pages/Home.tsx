/**
 * Signal Editorial — an asymmetric, calm, dark portfolio for Farah Muen.
 * Typography is intentionally split: Newsreader carries human stories; JetBrains Mono carries signals and structure.
 */
import { FormEvent, useState } from "react";
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

const projectUrl = "https://www.behance.net/gallery/251612691/Medivo-Doctor-Appointment-Booking";
const behanceUrl = "https://www.behance.net/farahmuen";
const linkedinUrl = "https://www.linkedin.com/in/farah-muen/";

const services = [
  {
    number: "01",
    title: "UX/UI Design",
    description: "Useful, expressive interfaces shaped around the people who rely on them.",
    tags: ["Website Design", "Mobile Apps", "Dashboards", "Landing Pages"],
  },
  {
    number: "02",
    title: "User Research",
    description: "Finding the real friction before it becomes a polished but unhelpful screen.",
    tags: ["Surveys", "User Needs", "Problem Framing"],
  },
  {
    number: "03",
    title: "Wireframing & Prototyping",
    description: "Turning loose ideas into clear paths worth testing before development begins.",
    tags: ["User Flows", "Wireframes", "Interactive Prototypes"],
  },
  {
    number: "04",
    title: "Design Systems",
    description: "A practical visual language that makes product decisions consistent and scalable.",
    tags: ["Components", "Responsive Design", "Developer Handoff"],
  },
];

const process = [
  ["01", "Understand", "Clarify the problem, goals, and the people behind the product."],
  ["02", "Research", "Explore user needs, context, and the friction worth solving."],
  ["03", "Define", "Shape findings into priorities, flows, and a focused direction."],
  ["04", "Wireframe", "Arrange information and interactions before visual detail arrives."],
  ["05", "Design", "Build a clear interface with an intentional visual system."],
  ["06", "Prototype & Test", "Make the flow tangible, then review it through a user lens."],
  ["07", "Handoff", "Prepare thoughtful, responsive files that developers can use with confidence."],
];

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", type: "UX/UI Design", message: "" });

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`${form.type} enquiry from ${form.name || "a portfolio visitor"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.type}\n\n${form.message}`);
    window.location.href = `mailto:farahmuen@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Farah Muen home">
          <img className="wordmark__mark" src="/manus-storage/farah-signal-mark_05815943.png" alt="" />
          <span>Farah</span> <em>Muen</em><i aria-hidden="true" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <button onClick={() => scrollTo("work")}>Work</button>
          <button onClick={() => scrollTo("services")}>Services</button>
          <button onClick={() => scrollTo("about")}>About</button>
        </nav>

        <div className="header-actions">
          <button className="header-contact" onClick={() => scrollTo("contact")}>
            Let&apos;s talk <ArrowUpRight size={15} />
          </button>
          <button className="mobile-menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <button onClick={() => scrollTo("work")}>Work <ChevronRight size={16} /></button>
            <button onClick={() => scrollTo("services")}>Services <ChevronRight size={16} /></button>
            <button onClick={() => scrollTo("process")}>Process <ChevronRight size={16} /></button>
            <button onClick={() => scrollTo("about")}>About <ChevronRight size={16} /></button>
            <button onClick={() => scrollTo("contact")}>Contact <ChevronRight size={16} /></button>
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
              <span><i className="signal-dot" /> Open for freelance projects</span>
              <span>Palestine · Remote worldwide</span>
            </div>

            <div className="hero-content">
              <div className="hero-copy">
                <p className="eyebrow reveal reveal--delay-1">UX/UI Designer · Computer Systems Engineering Graduate</p>
                <h1 id="hero-title" className="reveal reveal--delay-2">
                  Designing clarity<br />for every<br /><em>digital step.</em>
                </h1>
                <p className="hero-description reveal reveal--delay-3">
                  I design simple, intuitive digital experiences that help people reach their goals—and help businesses create better outcomes.
                </p>
                <div className="hero-ctas reveal reveal--delay-4">
                  <button className="button button--primary" onClick={() => scrollTo("work")}>View selected work <ArrowDownRight size={18} /></button>
                  <button className="button button--quiet" onClick={() => scrollTo("contact")}>Start a conversation <ArrowUpRight size={17} /></button>
                </div>
              </div>

              <div className="hero-portrait-wrap reveal reveal--delay-3">
                <div className="portrait-meta portrait-meta--top">Based in Palestine<br />working worldwide</div>
                <div className="portrait-frame">
                  <img src="/manus-storage/farah-muen-portrait_44c29263.jpeg" alt="Farah Muen, UX/UI Designer" />
                  <div className="portrait-scan" aria-hidden="true" />
                </div>
                <div className="portrait-meta portrait-meta--bottom"><span>F.M.</span><span>UX/UI · 2026</span></div>
              </div>
            </div>

            <div className="hero-foot reveal reveal--delay-4">
              <p>Human-centered design · Detail-led thinking · Clear digital systems</p>
              <a href="#work" aria-label="Scroll to selected work"><span>Scroll to explore</span><ArrowDownRight size={17} /></a>
            </div>
          </div>
        </section>

        <div className="ticker" aria-label="Selected capabilities">
          <div className="ticker__track">
            {["UX/UI DESIGN", "USER RESEARCH", "WIREFRAMES & PROTOTYPES", "DESIGN SYSTEMS", "RESPONSIVE DESIGN", "DASHBOARDS", "LANDING PAGES", "UX/UI DESIGN", "USER RESEARCH", "WIREFRAMES & PROTOTYPES", "DESIGN SYSTEMS", "RESPONSIVE DESIGN", "DASHBOARDS", "LANDING PAGES"].map((item, index) => (
              <span key={`${item}-${index}`}>{item}<b>◆</b></span>
            ))}
          </div>
        </div>

        <section className="section work-section" id="work">
          <div className="section-rail"><SectionLabel number="01" >Selected work</SectionLabel></div>
          <div className="section-main">
            <div className="heading-row">
              <h2>Products should feel<br /><em>clear before clever.</em></h2>
              <p>One independent case study, designed from the user&apos;s first question to their final confirmation.</p>
            </div>

            <article className="project-card">
              <div className="project-card__image-wrap">
                <span className="project-card__index">01</span>
                <div className="project-card__grid" aria-hidden="true" />
                <span className="project-annotation project-annotation--top">Product evidence / 01</span>
                <span className="project-annotation project-annotation--side">Patient booking flow</span>
                <div className="project-card__product-frame">
                  <img src="/manus-storage/medivo-cover_8bc0150e.webp" alt="Medivo doctor appointment booking project screens" className="project-card__image" />
                </div>
                <span className="project-annotation project-annotation--bottom">Home · Search · Profile · Book</span>
                <a href={projectUrl} target="_blank" rel="noreferrer" className="project-card__visit">View on Behance <ExternalLink size={15} /></a>
              </div>
              <div className="project-card__content">
                <div>
                  <p className="project-card__type">Healthcare platform · UX/UI case study · English</p>
                  <h3>Medivo</h3>
                  <p className="project-card__lead">Doctor appointment booking, made easier to follow.</p>
                </div>
                <p className="project-card__description">
                  Medivo is an online healthcare concept that helps patients discover suitable doctors, compare profiles, check availability, and book an appointment with fewer, clearer steps.
                </p>
                <div className="project-facts">
                  <div><span>Role</span><b>UX/UI Designer</b></div>
                  <div><span>Duration</span><b>1 week</b></div>
                  <div><span>Key screens</span><b>06 flows</b></div>
                </div>
                <div className="project-highlights">
                  {[
                    "Home page & doctor discovery",
                    "Doctor profile & availability",
                    "Booking, confirmation & sign in",
                  ].map((highlight) => <span key={highlight}><Check size={14} />{highlight}</span>)}
                </div>
                <ArrowLink href={projectUrl} external>Explore the full case study</ArrowLink>
              </div>
            </article>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-rail"><SectionLabel number="02">Services</SectionLabel></div>
          <div className="section-main">
            <div className="heading-row heading-row--compact">
              <h2 className="services-headline">One idea.<br /><span>A clearer way forward.</span></h2>
              <p>I partner with startups and small teams bringing a new product, service, or idea into focus.</p>
            </div>
            <div className="service-list">
              {services.map((service) => (
                <article className="service-row" key={service.number}>
                  <span className="service-row__number">{service.number}</span>
                  <div className="service-row__title"><h3>{service.title}</h3><ArrowUpRight size={20} /></div>
                  <p>{service.description}</p>
                  <div className="service-row__tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              ))}
            </div>
            <p className="services-note"><Sparkles size={15} /> User-centered design, attention to detail, and turning complex ideas into simple, intuitive experiences.</p>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="section-rail"><SectionLabel number="03">How I work</SectionLabel></div>
          <div className="section-main">
            <div className="process-intro">
              <div>
                <h2>Understanding comes<br /><em>before the canvas.</em></h2>
                <p>I do not begin with a screen. I begin by understanding the problem, the goals, and the people the product needs to serve.</p>
              </div>
              <img src="/manus-storage/farah-process-atlas_8ed2826f.png" alt="Abstract representation of a UX design process" />
            </div>
            <ol className="process-list">
              {process.map(([number, title, description]) => (
                <li key={number}>
                  <span className="process-list__number">{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ol>
            <div className="tool-strip">
              <span>Tools I use</span>
              <div><b>Figma</b><b>FigJam</b><b>Google Forms</b><b>Notion</b><b>Trello</b><b>GitHub</b></div>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-rail"><SectionLabel number="04">About Farah</SectionLabel></div>
          <div className="section-main about-layout">
            <div className="about-dossier">
              <div className="about-dossier__head"><span>Field note / 01</span><span>Farah Muen</span></div>
              <div className="about-dossier__mark">FM<i>.</i></div>
              <div className="about-dossier__diagram" aria-hidden="true">
                <span /><span /><span /><span /><span /><span /><span />
              </div>
              <div className="about-dossier__quote">“A good experience makes the next step feel obvious.”</div>
              <div className="about-dossier__facts">
                <span><b>Based in</b> Palestine</span>
                <span><b>Working</b> Worldwide</span>
              </div>
            </div>
            <div className="about-copy">
              <h2>Engineer at heart.<br /><em>Designer by choice.</em></h2>
              <p className="about-copy__intro">I&apos;m Farah, a UX/UI Designer and Computer Systems Engineering graduate from Al-Azhar University.</p>
              <p>I enjoy combining technical thinking, creativity, and problem-solving to create simple, intuitive digital experiences. I care about understanding people&apos;s needs, bringing structure to complex ideas, and attending to the details that make an experience feel clear and meaningful.</p>
              <p>For me, good design goes beyond appearance. It starts by understanding the problem and ends with an experience that helps people move forward with confidence.</p>
              <div className="principles">
                <span>User empathy</span><span>Problem solving</span><span>Attention to detail</span>
              </div>
              <div className="about-metadata">
                <div><span>Education</span><b>Al-Azhar University</b></div>
                <div><span>Industries I enjoy</span><b>Services · Education · Real estate · Healthcare · E-commerce</b></div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <img className="contact-atmosphere" src="/manus-storage/farah-contact-orbit_c4e5130b.png" alt="" />
          <div className="contact-grid" aria-hidden="true" />
          <div className="contact-inner">
            <SectionLabel number="05">Contact</SectionLabel>
            <div className="contact-layout">
              <div className="contact-copy">
                <p className="eyebrow"><i className="signal-dot" /> Open for freelance projects</p>
                <h2>Have a project<br />in mind? <em>Let&apos;s create<br />something meaningful.</em></h2>
                <p>I usually respond within 1–2 business days. A short note about the problem you&apos;re solving is the perfect place to start.</p>
                <div className="contact-direct">
                  <a href="mailto:farahmuen@gmail.com"><Mail size={17} />farahmuen@gmail.com</a>
                  <a href="https://wa.me/970599587044" target="_blank" rel="noreferrer"><Phone size={16} />+970 599 587 044</a>
                </div>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                  <span>Name</span>
                  <input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Your name" />
                </label>
                <label>
                  <span>Email</span>
                  <input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@example.com" />
                </label>
                <label>
                  <span>Project type</span>
                  <select value={form.type} onChange={(event) => setForm({ ...form, type: event.target.value })}>
                    <option>UX/UI Design</option>
                    <option>User Research</option>
                    <option>Wireframing & Prototyping</option>
                    <option>Design System</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label>
                  <span>Tell me a little about it</span>
                  <textarea required value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="What would you like to make clearer?" rows={4} />
                </label>
                <button className="button button--primary contact-form__button" type="submit">Create email <Send size={17} /></button>
                <p>The form opens your email app—no mailing list, no follow-up sequence.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#top"><img className="wordmark__mark" src="/manus-storage/farah-signal-mark_05815943.png" alt="" /><span>Farah</span> <em>Muen</em><i aria-hidden="true" /></a>
        <p>Thoughtful digital experiences, made clear.</p>
        <div className="footer-links">
          <a href={behanceUrl} target="_blank" rel="noreferrer">Behance <ArrowUpRight size={13} /></a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer"><Linkedin size={13} /> LinkedIn</a>
          <a href="mailto:farahmuen@gmail.com">Email <Mail size={13} /></a>
        </div>
        <span className="footer-year">© {new Date().getFullYear()} Farah Muen</span>
      </footer>
    </div>
  );
}
