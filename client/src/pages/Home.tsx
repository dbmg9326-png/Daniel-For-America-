/*
 * Design direction: Archive at Dawn — a reference-matched civic editorial campaign site.
 * This page uses a dark cinematic opening, parchment policy surfaces, Four Pillars Rose,
 * oversized Cormorant Garamond headlines, and precise field-file metadata.
 */

import { FormEvent, ReactNode, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

const HERO_IMAGE = "/media/four-pillars-hero-v2.jpg";
const EQUALITY_IMAGE = "/media/equality-editorial-v2.jpg";
const JUSTICE_IMAGE = "/media/justice-editorial-v2.jpg";
const DIGITAL_IMAGE = "/media/digital-rights-editorial-v2.jpg";
const DANIEL_LOGO_IMAGE = "/media/daniel-for-america-logo-new.png";
const REPORT_FILE = "/media/equality-in-america-report.pdf";
const ELLIS_REPORT_FILE = "/media/new-ellis-island-approach.pdf";
const JUSTICE_REPORT_FILE = "/media/federal-criminal-justice-reform.pdf";
const CRYPTO_REPORT_FILE = "/media/commercial-cryptography-report.pdf";
const MADISON_REPORT_FILE = "/media/madison-dc-complete-report.pdf";
const SECOND_TRACK_REPORT_FILE = "/media/second-track-education-report.pdf";
const DANIEL_PORTRAIT_IMAGE = "/media/daniel-message-portrait.jpg";
const SMART_POWER_IMAGE = "/media/smart-power-trust.svg";
const VENMO_PROFILE = "https://www.venmo.com/u/Daniel4America1";

const navItems = [
  { label: "Welcome", target: "welcome" },
  { label: "Mission", target: "mission" },
  { label: "Vision", target: "vision" },
  { label: "The approach", target: "approach" },
  { label: "Justice reform", target: "justice" },
  { label: "Digital rights", target: "digital" },
  { label: "Equality", target: "equality" },
  { label: "Madison, D.C.", target: "madison" },
  { label: "Smart power", target: "smart-power" },
  { label: "Second track education", target: "second-track" },
  { label: "Press", target: "press" },
  { label: "Contributions", target: "contributions" },
];

const pillars = [
  { number: "01", label: "Vision", target: "vision" },
  { number: "02", label: "The approach", target: "approach" },
  { number: "03", label: "Justice reform", target: "justice" },
  { number: "04", label: "Digital rights", target: "digital" },
  { number: "05", label: "Equality", target: "equality", accent: true },
];

function scrollToSection(target: string) {
  document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ArrowLink({
  children,
  onClick,
  href,
  download = false,
  newTab = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  download?: boolean;
  newTab?: boolean;
}) {
  if (href) {
    return (
      <a
        className="arrow-link"
        href={href}
        download={download || undefined}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noreferrer" : undefined}
      >
        <span>{children}</span>
        <ArrowUpRight size={16} strokeWidth={1.6} />
      </a>
    );
  }
  return (
    <button className="arrow-link" type="button" onClick={onClick}>
      <span>{children}</span>
      <ArrowRight size={16} strokeWidth={1.6} />
    </button>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedDonationTier, setSelectedDonationTier] = useState<string>("$1.00");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function handleNavigate(target: string) {
    scrollToSection(target);
    setMenuOpen(false);
  }

  return (
    <div className="site-shell">
      <div className="notice-bar">
        <span>Temporary campaign website.</span>
        <span className="notice-divider" />
        <span>The full site will launch at the official campaign domain once it is acquired and published.</span>
        <a href="#press">
          Official materials <ArrowUpRight size={13} />
        </a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Four Pillars USA / Daniel for America home">
          <span className="brand-logo-wrap">
            <img className="brand-logo" src={DANIEL_LOGO_IMAGE} alt="Daniel for America campaign logo" />
          </span>
          <span className="brand-copy">
            <strong>FOUR PILLARS USA</strong>
            <span>DANIEL FOR AMERICA</span>
          </span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
          {navItems.map((item, index) => (
            <button key={item.target} type="button" onClick={() => handleNavigate(item.target)}>
              <span className="nav-index">{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="header-actions">
          <a className="donate-button" href={VENMO_PROFILE} target="_blank" rel="noreferrer">
            Political Contributions <ArrowUpRight size={15} />
          </a>
          <button className="briefing-button" type="button" onClick={() => handleNavigate("briefings")}>
            Receive briefings <ArrowUpRight size={15} />
          </button>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        {/* 00 - Mission statement */}
        <section id="mission" className="mission-section ink">
          <div className="page-width mission-intro">
            <div>
              <div className="section-marker light-marker">
                <span>00 — Mission statement</span>
                <i />
              </div>
              <h1>
                The Four Pillars
                <br />
                <em>of Daniel For America.</em>
              </h1>
            </div>
            <p>
              At the heart of the Daniel For America platform are four foundational pillars that guide every policy
              proposal, structural reform, and vision for governance.
            </p>
          </div>
          <div className="page-width mission-pillars">
            <article>
              <span>01</span>
              <h2>Hope</h2>
              <p>
                Hope represents our unyielding belief in a brighter future for every American. It inspires resilience
                during difficult times and gives us the courage to confront systemic challenges together.
              </p>
            </article>
            <article>
              <span>02</span>
              <h2>Equality</h2>
              <p>
                Equality guarantees that every citizen stands fully equal under the law. True equality knows no status
                or distinction; it is the universal guarantee of fairness and civil liberty for all.
              </p>
            </article>
            <article>
              <span>03</span>
              <h2>Progress</h2>
              <p>
                Progress drives innovation, modern education, and forward-thinking solutions to 21st-century issues. It
                means rejecting the status quo and building for generations to come.
              </p>
            </article>
            <article>
              <span>04</span>
              <h2>Security</h2>
              <p>
                Security protects our citizens, borders, democratic institutions, and constitutional values. It
                provides the stability that allows families and communities to thrive without fear.
              </p>
            </article>
          </div>
          <div className="page-width mission-close">
            <p>
              Together, these pillars form a unified framework: Hope gives our mission purpose, Equality ensures
              fundamental fairness, Progress delivers structural advancement, and Security provides the protection to
              sustain it.
            </p>
          </div>
        </section>

        {/* Hero */}
        <section className="hero" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
          <div className="hero-overlay" />
          <div className="hero-inner page-width">
            <div className="hero-copy">
              <div className="file-kicker light-kicker">
                <span>2026 campaign brief</span>
                <i />
                <span>Chapter 1 is now live</span>
              </div>
              <div className="file-stamp light-stamp">
                <span>Field file · FPU / 01</span>
                <span>Public record</span>
                <span>Policy briefing</span>
              </div>
              <p className="hero-eyebrow">Hope · Equality · Security · Progress</p>
              <h1>
                A better way <em>forward.</em>
              </h1>
              <p className="hero-lede">
                Four Pillars USA / Daniel for America is a campaign for a country that can be both secure and
                compassionate—clear in its values and serious about how policy works.
              </p>
              <div className="hero-actions">
                <button className="solid-button" type="button" onClick={() => handleNavigate("approach")}>
                  Read the plan <ArrowRight size={16} />
                </button>
                <button className="outline-button" type="button" onClick={() => handleNavigate("briefings")}>
                  Receive briefings <ArrowRight size={16} />
                </button>
              </div>
            </div>
            <div className="hero-brief">
              <div className="brief-topline">
                <span>Public brief · 01</span>
                <span>FPU / 2026</span>
              </div>
              <h2>
                The New Ellis Island <em>Approach</em>
              </h2>
              <p>A campaign proposal for orderly processing, responsible public stewardship, and restored dignity.</p>
              <a className="hero-brief-link" href={ELLIS_REPORT_FILE} target="_blank" rel="noreferrer">
                Read the policy brief <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="hero-bottom page-width">
            {pillars.map((pillar) => (
              <button
                key={pillar.target}
                className={pillar.accent ? "hero-pillar accent" : "hero-pillar"}
                type="button"
                onClick={() => handleNavigate(pillar.target)}
              >
                <span>{pillar.number}</span>
                <strong>{pillar.label}</strong>
                <ArrowRight size={15} />
              </button>
            ))}
          </div>
        </section>

        {/* Welcome from Daniel */}
        <section id="welcome" className="section welcome-section ink">
          <div className="page-width welcome-grid">
            <div
              className="welcome-portrait"
              style={{ backgroundImage: `url(${DANIEL_PORTRAIT_IMAGE})` }}
              aria-label="Daniel Bernard"
            />
            <div className="welcome-content">
              <div className="section-marker light-marker">
                <span>Welcome from Daniel</span>
                <i />
              </div>
              <h2>
                To every American: <em>Welcome.</em>
              </h2>
              <p>
                Thank you to every visitor, citizen, and supporter for your participation and engagement in what is
                undeniably the most important election our nation has ever faced to date.
              </p>
              <p>
                We have so much to discuss and critical work ahead of us. But before we get to the policies, I want to
                make one thing unmistakably clear to everyone who visits this page—including those who, for whatever
                reason, hold divergent opinions:
              </p>
              <blockquote className="welcome-quote">
                “Understand that we are one nation. You do not have to like me, and you do not have to agree with me. But
                my team and myself will always serve you with every ounce of our energy. In public service, a leader
                does not get a choice in who they help — we are going to be helping everyone.”
              </blockquote>
              <span className="welcome-signature">— Daniel Bernard</span>
            </div>
          </div>
        </section>

        {/* 01 - Foundation / Vision */}
        <section id="vision" className="section parchment foundation-section">
          <div className="page-width foundation-grid">
            <div className="section-marker">
              <span>01 — Our foundation</span>
              <i />
            </div>
            <div className="foundation-title">
              <h2>
                A promise
                <br />
                built around <em>people.</em>
              </h2>
              <ArrowDownRight size={22} />
            </div>
            <div className="foundation-copy">
              <h3>
                The country does not need a choice between <em>order</em> and <em>humanity.</em>
              </h3>
              <p>
                We can build practical systems that honor taxpayers, protect communities, and meet people with dignity.
                The campaign’s policy agenda starts from that shared responsibility.
              </p>
              <ArrowLink onClick={() => handleNavigate("approach")}>See the approach</ArrowLink>
            </div>
          </div>
          <div className="page-width value-strip">
            <article>
              <span>01</span>
              <small>Value</small>
              <h3>Taxpayer value</h3>
              <p>A proposal to replace costly crisis response with an accountable, transparent processing framework.</p>
            </article>
            <article>
              <span>02</span>
              <small>Order</small>
              <h3>Bridges, not walls</h3>
              <p>A vision for lawful, humane processing that recognizes security and dignity as complementary commitments.</p>
            </article>
            <article>
              <span>03</span>
              <small>Dignity</small>
              <h3>America’s promise</h3>
              <p>A framework built around the belief that a country can be orderly, safe, and humane at the same time.</p>
            </article>
          </div>
        </section>

        {/* 02 - Approach */}
        <section id="approach" className="section ink approach-section">
          <div className="page-width">
            <div className="section-heading light-heading">
              <div className="section-marker">
                <span>02 — The approach</span>
                <i />
              </div>
              <p>Campaign proposal · 01</p>
              <h2>
                A continental framework for the <em>21st century.</em>
              </h2>
              <p className="heading-lede">
                Explore the campaign’s New Ellis Island framework. Figures and milestones below are presented as
                campaign proposals and estimates from Chapter 1, not independent forecasts.
              </p>
            </div>
            <div className="framework-grid">
              <div className="framework-nav">
                <span className="mini-label">Framework navigator</span>
                <p>Select a path to read its campaign rationale and related proposed milestones.</p>
                {["Taxpayer value", "Orderly process", "American promise"].map((label, index) => (
                  <button
                    key={label}
                    type="button"
                    className={index === 0 ? "framework-tab active" : "framework-tab"}
                  >
                    <span>0{index + 1}</span>
                    {label}
                    <ArrowRight size={16} />
                  </button>
                ))}
              </div>
              <div className="framework-detail">
                <span className="mini-label rose-label">Campaign proposal · 01</span>
                <h3>
                  Redirect the cost of <em>chaos.</em>
                </h3>
                <p>
                  The New Ellis Island approach presents a lawful processing system as a better use of public
                  resources than fragmented emergency response.
                </p>
                <div className="metric-row">
                  <div>
                    <strong>75–90%</strong>
                    <span>Projected reduction versus smuggling costs</span>
                  </div>
                  <div>
                    <strong>36 <small>mo.</small></strong>
                    <span>Campaign-estimated path to self-funding</span>
                  </div>
                  <div>
                    <strong>6</strong>
                    <span>Proposed processing campuses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 - Process */}
        <section className="section parchment process-section">
          <div className="page-width">
            <div className="section-heading split-heading">
              <div>
                <div className="section-marker">
                  <span>03 — How it works</span>
                  <i />
                </div>
                <h2>
                  One route.
                  <br />
                  <em>Four distinct steps.</em>
                </h2>
              </div>
              <p>
                This explainer turns a long-form policy document into a compact visual pathway. Choose a view to
                explore either the campaign’s proposed participant journey or its coordinating network.
              </p>
            </div>
            <div className="process-switch">
              <button className="selected" type="button">Process journey</button>
              <button type="button">Network view</button>
            </div>
            <div className="process-grid">
              {[
                ["01", "Reception", "Health care, safe shelter, orientation"],
                ["02", "Review", "Screening, records, and case assessment"],
                ["03", "Authorization", "Legal pathway and work-status review"],
                ["04", "Transition", "Transport coordination and placement support"],
              ].map(([number, title, copy]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                  <ArrowUpRight size={18} />
                </article>
              ))}
            </div>
            <p className="disclaimer">
              Illustrative campaign framework—not a live government process or a completed program.
            </p>
          </div>
        </section>

        {/* 04 - Justice reform */}
        <section id="justice" className="section justice-section image-section">
          <div className="image-section-media" style={{ backgroundImage: `url(${JUSTICE_IMAGE})` }}>
            <div className="image-caption">Working policy draft · 60-month pilot proposal</div>
          </div>
          <div className="image-section-content">
            <div className="section-marker">
              <span>04 — Chapter 2</span>
              <i />
            </div>
            <h2>
              Federal criminal
              <br />
              justice <em>reform.</em>
            </h2>
            <h3>
              Correction that keeps <em>families</em> in the picture.
            </h3>
            <p>
              This Chapter 2 draft proposes a congressionally authorized Community-Based Correction Pilot Program for
              eligible non-violent narcotics conspiracy offenders. Its stated objective is to pair public-safety
              safeguards with treatment, workforce support, family stability, and fiscal accountability.
            </p>
            <div className="feature-list">
              <div>
                <strong>Family unity</strong>
                <span>Keep eligible participants connected to treatment, work, housing, and family responsibilities.</span>
              </div>
              <div>
                <strong>Structured accountability</strong>
                <span>Use defined supervision, testing, treatment, restitution, and judicial review.</span>
              </div>
              <div>
                <strong>Measured public value</strong>
                <span>Treat every program metric, cost estimate, and outcome target as public-record material.</span>
              </div>
            </div>
            <span className="content-note">The content shown here summarizes the campaign’s supplied working draft.</span>
          </div>
        </section>

        {/* 05 - Digital rights */}
        <section id="digital" className="section parchment digital-section">
          <div className="page-width">
            <div className="section-heading split-heading">
              <div>
                <div className="section-marker">
                  <span>05 — Digital rights &amp; public safety</span>
                  <i />
                </div>
                <span className="mini-label">Chapter 3 · Working policy draft</span>
                <h2>
                  The Fourth Amendment in the <em>encryption era.</em>
                </h2>
              </div>
              <p>
                This Chapter 3 draft proposes a judicial and legislative framework for disputes involving commercially
                encrypted evidence, with meaningful privacy protections, lawful process, technical expertise, and
                accessible review.
              </p>
            </div>
            <div className="digital-content">
              <div className="digital-image" style={{ backgroundImage: `url(${DIGITAL_IMAGE})` }}>
                <span>Digital rights / public safety</span>
              </div>
              <div className="digital-points">
                <div>
                  <strong>Adversarial by default</strong>
                  <span>A defender, manufacturer, and technical voice at the table.</span>
                </div>
                <div>
                  <strong>Narrow, auditable access</strong>
                  <span>No blanket authority, permanent backdoors, or unlogged handling.</span>
                </div>
                <div>
                  <strong>Appeal must be accessible</strong>
                  <span>Expedited, zero- or low-cost constitutional review.</span>
                </div>
                <div className="digital-actions">
                  <ArrowLink onClick={() => handleNavigate("press")}>Read the chapter outline</ArrowLink>
                  <ArrowLink href={CRYPTO_REPORT_FILE} download>Download the report</ArrowLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 06 - Equality */}
        <section id="equality" className="section equality-section">
          <div className="page-width equality-grid">
            <div className="equality-intro">
              <div className="section-marker light-marker">
                <span>06 — Equality</span>
                <i />
              </div>
              <span className="mini-label rose-label">Policy research report · 17 pages</span>
              <h2>
                Equal protection.
                <br />
                <em>Religious freedom.</em>
                <br />
                One American promise.
              </h2>
              <p>
                America should not have to choose between equal treatment under law and the freedom to live according
                to conscience. This pillar examines how constitutional rights, civil-rights protections, and religious
                liberty can work together in a pluralistic democracy.
              </p>
              <div className="equality-actions">
                <a className="solid-button rose-button" href={REPORT_FILE} download>
                  <Download size={16} /> Download the report
                </a>
                <button className="text-button" type="button" onClick={() => handleNavigate("equality-framework")}>
                  Explore the framework <ArrowRight size={16} />
                </button>
              </div>
            </div>
            <div className="equality-card">
              <div className="equality-card-image" style={{ backgroundImage: `url(${EQUALITY_IMAGE})` }}>
                <span>Equality in America</span>
              </div>
              <div className="equality-card-body">
                <div className="brief-topline">
                  <span>FPU / 2026</span>
                  <span>Public record</span>
                </div>
                <h3>Balancing equal treatment under law with religious freedom</h3>
                <p>Constitutional foundations, statutory protections, recent jurisprudence, and a forward path for pluralism.</p>
                <a href={REPORT_FILE} download>
                  Download PDF <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
          <div id="equality-framework" className="page-width equality-framework">
            <div className="framework-rule">
              <span>Three commitments</span>
              <i />
            </div>
            <div className="equality-principles">
              <article>
                <span>01</span>
                <h3>Equal treatment</h3>
                <p>
                  Government and public institutions should apply neutral, generally applicable rules consistently and
                  protect people from discrimination.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Freedom of conscience</h3>
                <p>
                  People should be able to hold, express, and practice sincere religious beliefs without government
                  hostility or favoritism.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Responsible accommodation</h3>
                <p>
                  Religious accommodations should be meaningful and workable, with clear limits when an exemption would
                  impose substantial harm on other people’s equal rights.
                </p>
              </article>
            </div>
            <blockquote>
              “A durable American framework must protect both equal citizenship for every person and genuine room for
              conscience, belief, and religious practice.”
            </blockquote>
          </div>
        </section>

        {/* 07 - Madison, D.C. */}
        <section id="madison" className="section madison-section parchment">
          <div className="page-width madison-grid">
            <div>
              <div className="section-marker">
                <span>07 — Madison, D.C.</span>
                <i />
              </div>
              <span className="mini-label">Chapter 6 · Looking ahead</span>
              <h2>
                Progress and equality
                <br />
                <em>for our people.</em>
              </h2>
              <p>
                Madison, D.C. and Washington, Maryland look toward a future where representation, opportunity, and
                public life move forward together—bringing progress and equality to our people.
              </p>
              <div className="madison-actions">
                <ArrowLink href={MADISON_REPORT_FILE} newTab>Read the complete chapter</ArrowLink>
                <a className="text-button dark-text-button" href={MADISON_REPORT_FILE} download>
                  <Download size={16} /> Download the report
                </a>
              </div>
            </div>
            <div className="madison-facts">
              <div>
                <span className="mini-label">The premise</span>
                <strong>700,000+</strong>
                <p>Americans who have paid taxes without voting Senators for generations.</p>
              </div>
              <div>
                <span className="mini-label">The horizon</span>
                <strong>1793 → now</strong>
                <p>Federal architecture and representation should reflect the speed of information today.</p>
              </div>
              <div className="madison-quote">
                “Madison, D.C. and Washington, Maryland—bringing progress and equality to our people.”
              </div>
            </div>
          </div>
        </section>

        {/* 08 - Smart power */}
        <section id="smart-power" className="section smart-power-section image-section">
          <div className="image-section-media" style={{ backgroundImage: `url(${SMART_POWER_IMAGE})` }}>
            <div className="image-caption">The trust of today vs. where we need to be</div>
          </div>
          <div className="image-section-content">
            <div className="section-marker">
              <span>08 — Smart power</span>
              <i />
            </div>
            <h2>
              A constitutional check
              <br />
              on treaty <em>withdrawal.</em>
            </h2>
            <p>
              Presidents can currently withdraw the United States from treaties on their own, leaving allies and
              partners uncertain and weakening the weight of every commitment America makes. This proposal requires
              two-thirds of the Senate to affirm any presidential move to dissolve a treaty — the same threshold
              already required to ratify one.
            </p>
            <div className="feature-list">
              <div>
                <strong>Trust in contracts</strong>
                <span>Nations and markets invest in partnerships with the U.S. because they trust our word. Stable treaties mean stable alliances, trade, and security.</span>
              </div>
              <div>
                <strong>Smart power projection</strong>
                <span>Leadership depends on being seen as dependable. This amendment signals that American commitments outlast any one administration.</span>
              </div>
              <div>
                <strong>A check on impulse</strong>
                <span>It prevents abrupt withdrawals that damage long-term interests, preserving continuity in foreign policy and the value of U.S. diplomacy.</span>
              </div>
            </div>
            <blockquote className="smart-power-quote">
              Just as the Senate must approve a treaty by two-thirds, it must affirm the treaty's dissolution by the same margin.
            </blockquote>
            <span className="content-note">
              America's credibility is its most powerful asset — this amendment constitutionalizes the trust that makes our smart power possible.
            </span>
          </div>
        </section>

        {/* 09 - Second Track Education */}
        <section id="second-track" className="section parchment digital-section">
          <div className="page-width">
            <div className="section-heading split-heading">
              <div>
                <div className="section-marker">
                  <span>09 — Second track education</span>
                  <i />
                </div>
                <span className="mini-label">Workforce sovereignty &amp; opportunity · September 11, 2026</span>
                <h2>
                  A parallel path to <em>economic independence.</em>
                </h2>
              </div>
              <p>
                While traditional liberal arts education remains valuable, it is not the optimal or desired path for
                every young American. This proposal establishes a Second Track Education System — a mandatory,
                parallel pathway running alongside liberal arts, designed to build specialized mastery through
                structured, paid apprenticeships and beginning as early as grade 9 (age 14).
              </p>
            </div>

            {/* Core Pillars & Rationale */}
            <div className="digital-content">
              <div className="digital-image" style={{ backgroundImage: `url(${DIGITAL_IMAGE})` }}>
                <span>Workforce Sovereignty &amp; Opportunity</span>
              </div>
              <div className="digital-points">
                <div>
                  <strong>Parental Sovereignty</strong>
                  <span>
                    When government provides an appropriation directly to parents, that money is out of government
                    hands. A parent earning $45,000 holds the exact same 18-year executive authority as an executive
                    earning $250 million. Liquid income must never dictate educational choice.
                  </span>
                </div>
                <div>
                  <strong>Mandatory Paid Apprenticeships</strong>
                  <span>
                    A minimum 400-hour benchmark of direct, verified on-the-job training in high-demand fields. Students
                    earn competitive wages while they train, turning secondary school into early capital accumulation.
                  </span>
                </div>
                <div>
                  <strong>People Hire People</strong>
                  <span>
                    It is not the United States that hires people; people hire people. Policy must make it elegant and
                    cost-effective for enterprises to hire by offering apprenticeship corporate tax offsets,
                    national competency benchmarks, and zero new tax burdens.
                  </span>
                </div>
                <div className="digital-actions">
                  <ArrowLink href={SECOND_TRACK_REPORT_FILE} newTab>Read the full brief</ArrowLink>
                  <ArrowLink href={SECOND_TRACK_REPORT_FILE} download>Download the report (PDF)</ArrowLink>
                </div>
              </div>
            </div>

            {/* 10-Year Projections */}
            <div className="metric-row second-track-metrics">
              <div>
                <strong>95.0%</strong>
                <span>High school graduation rate (up from 88.0%)</span>
              </div>
              <div>
                <strong>6.0%</strong>
                <span>Youth unemployment ages 16–24 (halved from 12.0%)</span>
              </div>
              <div>
                <strong>$60,000</strong>
                <span>Median income ages 25–34 (+33.3% from $45,000)</span>
              </div>
              <div>
                <strong>55.0%</strong>
                <span>Under-35 home ownership (+18.0 pts from 37.0%)</span>
              </div>
              <div>
                <strong>3.2%</strong>
                <span>Annual trend GDP growth (+1.1 pts from 2.1%)</span>
              </div>
            </div>

            {/* Executive Quote */}
            <blockquote className="smart-power-quote second-track-quote">
              “A parent earning $45,000 a year is no different from an executive earning $250 million. As parents, each
              holds the definitive executive role over their child's development for eighteen years. One's lack of liquid
              financial income must never yield a lack of educational choice.”
            </blockquote>

            {/* The American Apprenticeship Highway vs German Model */}
            <div className="value-strip" style={{ marginTop: "60px" }}>
              <article>
                <span>01</span>
                <small>Multiple On-Ramps</small>
                <h3>Open Access</h3>
                <p>9th grade technical tracks, community college certs, direct employer sponsorship, and veteran cross-mobility.</p>
              </article>
              <article>
                <span>02</span>
                <small>Interstate Portability</small>
                <h3>50-State Reciprocity</h3>
                <p>Just as an interstate highway carries vehicles seamlessly across borders, credentials in Ohio hold identical validity in Texas or Arizona.</p>
              </article>
              <article>
                <span>03</span>
                <small>The Bamboo Garden</small>
                <h3>Self-Reinforcing</h3>
                <p>Once planted, its roots spread with unstoppable vigor through private employer demand—no bureaucratic bloat required.</p>
              </article>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="second-track-viewer">
              <span className="mini-label">Official Campaign Policy Document · 7 Pages</span>
              <iframe
                src={SECOND_TRACK_REPORT_FILE}
                title="Second Track Education — Official Campaign Policy Document"
                className="pdf-viewer"
              />
            </div>
          </div>
        </section>

        {/* 10 - Press & Materials */}
        <section id="press" className="section press-section parchment">
          <div className="page-width press-grid">
            <div>
              <div className="section-marker">
                <span>10 — Official materials</span>
                <i />
              </div>
              <h2>
                One clear source
                <br />
                <em>for the press.</em>
              </h2>
              <p>Press inquiries, campaign statements, and policy materials are organized here for reporters and community partners.</p>
              <div className="future-brief">
                <span className="mini-label">Featured release</span>
                <h3>
                  Second Track Education
                  <br />
                  <em>Policy Report.</em>
                </h3>
                <p>A Parallel Pathway to Economic Independence in the AI Age.</p>
                <ArrowLink href={SECOND_TRACK_REPORT_FILE} newTab>Read the full education report</ArrowLink>
              </div>
              <div className="press-downloads">
                <ArrowLink href={SECOND_TRACK_REPORT_FILE} newTab>Read Second Track Education report</ArrowLink>
                <ArrowLink href={ELLIS_REPORT_FILE} newTab>Read the Ellis Island report</ArrowLink>
                <ArrowLink href={JUSTICE_REPORT_FILE} newTab>Read the justice reform proposal</ArrowLink>
                <ArrowLink href={CRYPTO_REPORT_FILE} newTab>Read the cryptography report</ArrowLink>
                <ArrowLink href={REPORT_FILE} newTab>Read the Equality report</ArrowLink>
                <ArrowLink href={MADISON_REPORT_FILE} newTab>Read the Madison, D.C. report</ArrowLink>
              </div>
            </div>
            <div className="press-list">
              <div className="press-contact">
                <span className="mini-label">Press contact</span>
                <h3>
                  Campaign information,
                  <br />
                  without the runaround.
                </h3>
                <a href="mailto:ideas4america@usa.com">ideas4america@usa.com</a>
                <span className="after-hours-label">After Working Hours</span>
                <a href="tel:+16464931595">(646) 493-1595</a>
              </div>
              <div className="materials">
                <span className="mini-label">Available materials</span>
                <div><span>01</span>Campaign overview</div>
                <div><span>02</span>Chapter 1 framework (New Ellis Island)</div>
                <div><span>03</span>Chapter 2 (Federal Criminal Justice Reform)</div>
                <div><span>04</span>Chapter 3 (Commercial Cryptography &amp; 4th Amendment)</div>
                <div><span>05</span>Chapter 4 (Equality &amp; Religious Freedom)</div>
                <div><span>06</span>Chapter 5 (Madison, D.C. &amp; Washington, MD)</div>
                <div><span>07</span>Chapter 6 (Smart Power &amp; Treaty Affirmation)</div>
                <div><span>08</span>Second Track Education Policy Document (7 Pages)</div>
                <div><span>09</span>Official campaign brand materials</div>
              </div>
            </div>
          </div>
        </section>

        {/* 11 - Political Contributions & Micro-Fundraising */}
        <section id="contributions" className="section contributions-section parchment">
          <div className="page-width contribution-grid">
            <div className="contribution-intro">
              <div className="section-marker">
                <span>11 — Political contributions</span>
                <i />
              </div>
              <span className="mini-label">Grassroots Micro-Capital · FEC ID C00960534</span>
              <h2>
                A campaign powered by<br />
                <em>the people.</em>
              </h2>
              <p>
                The big institutional checks can wait. Elections are decided by everyday Americans who invest a dollar
                or two because they believe in the future of their country. Backing this campaign with $1.00 or $1.50
                signals that this movement belongs to the people, not special interests.
              </p>

              {/* Micro-Donation Quick Selector */}
              <div style={{ margin: "24px 0 20px" }}>
                <span className="mini-label" style={{ marginBottom: "10px", display: "block" }}>
                  Select grassroots contribution
                </span>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {["$1.00", "$1.50", "$3.00", "$5.00", "$10.00"].map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setSelectedDonationTier(tier)}
                      style={{
                        padding: "10px 18px",
                        border: selectedDonationTier === tier ? "1px solid var(--ink)" : "1px solid var(--line)",
                        background: selectedDonationTier === tier ? "var(--ink)" : "rgba(255,255,255,0.6)",
                        color: selectedDonationTier === tier ? "var(--white)" : "var(--ink)",
                        fontWeight: 700,
                        fontSize: "12px",
                        letterSpacing: ".08em",
                        cursor: "pointer",
                        transition: "all .16s ease",
                      }}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Digital Sticker Incentive */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  padding: "16px 18px",
                  background: "rgba(213,107,120,0.08)",
                  border: "1px solid rgba(213,107,120,0.3)",
                  marginBottom: "24px",
                }}
              >
                <Sparkles size={20} style={{ color: "var(--rose)", flexShrink: 0, marginTop: "2px" }} />
                <div style={{ fontSize: "12px", lineHeight: "1.6" }}>
                  <strong style={{ display: "block", color: "var(--ink)", textTransform: "uppercase", fontSize: "10px", letterSpacing: ".12em" }}>
                    Grassroots Founder Digital Sticker &amp; Tag
                  </strong>
                  <span>
                    Every micro-donor receives an instant download of the 2026 Daniel For America Digital Bumper Sticker
                    pack and social story tag to showcase support on phone lock screens and Instagram/TikTok.
                  </span>
                </div>
              </div>

              <div className="contribution-identity">
                <strong>Daniel Bernard For America</strong>
                <span>Principal campaign committee for Daniel Bernard for President</span>
                <span>FEC ID: C00960534</span>
                <span>Treasurer: To be designated</span>
              </div>
              <a
                className="solid-button rose-button contribution-button"
                href={VENMO_PROFILE}
                target="_blank"
                rel="noreferrer"
              >
                Chip in {selectedDonationTier} via Venmo <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="contribution-guardrails">
              <div className="guardrail-heading">
                <span className="mini-label">Before contributing</span>
                <h3>
                  Clear records.
                  <br />
                  <em>Clear responsibility.</em>
                </h3>
              </div>
              <div className="guardrail-list">
                <article>
                  <span>01</span>
                  <div>
                    <strong>Every contribution is recorded.</strong>
                    <p>
                      Every contribution — even $1.00 — is logged in committee records per FEC recordkeeping rules (11
                      CFR § 102.9) and deposited in the official campaign depository.
                    </p>
                  </div>
                </article>
                <article>
                  <span>02</span>
                  <div>
                    <strong>Use your own personal eligible funds.</strong>
                    <p>
                      Do not contribute with funds from a foreign national, federal government contractor, or corporate
                      treasury. Contributions must be made from personal funds without reimbursement.
                    </p>
                  </div>
                </article>
                <article>
                  <span>03</span>
                  <div>
                    <strong>Nominal value digital tokens.</strong>
                    <p>
                      Digital stickers, wallpapers, and social tags carry zero commercial resale value and zero marginal
                      cost; 100% of your gift qualifies as an allowable political contribution under FEC rules.
                    </p>
                  </div>
                </article>
                <article>
                  <span>04</span>
                  <div>
                    <strong>The $200 aggregate threshold.</strong>
                    <p>
                      Small-dollar contributions remain unitemized on public FEC filings until an individual’s aggregate
                      giving surpasses $200 in an election cycle.
                    </p>
                  </div>
                </article>
              </div>
              <div className="contribution-notice">
                <strong>Paid for by Daniel Bernard For America.</strong>
                <span>FEC ID C00960534 · Treasurer: To be designated</span>
                <p>
                  These public guardrails are operational guidance while the committee completes its treasurer
                  designation and final contribution-processing setup. The committee will update this page as the
                  approved processing and reporting workflow is finalized.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12 - Briefings */}
        <section id="briefings" className="briefings-section ink">
          <div className="page-width briefings-inner">
            <div>
              <span className="mini-label rose-label">12 — Stay in the loop</span>
              <h2>
                This is bigger than one campaign.
                <br />
                It’s a <em>promise.</em>
              </h2>
            </div>
            <div>
              <p>Sign up for campaign briefings, town-hall notices, and policy releases.</p>
              {submitted ? (
                <div className="success-message">
                  <Check size={18} /> You’re on the briefing list for future updates.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <label htmlFor="briefing-email">Email address</label>
                  <div className="email-field">
                    <input id="briefing-email" type="email" required placeholder="you@example.com" />
                    <button type="submit">
                      Receive campaign briefings <ArrowUpRight size={16} />
                    </button>
                  </div>
                </form>
              )}
              <small>
                By joining, you agree to receive campaign updates. No supporter counts or performance statistics are
                represented on this site.
              </small>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-grid">
          <a className="brand footer-brand" href="#top">
            <span className="brand-logo-wrap">
              <img className="brand-logo" src={DANIEL_LOGO_IMAGE} alt="Daniel for America campaign logo" />
            </span>
            <span className="brand-copy">
              <strong>FOUR PILLARS USA</strong>
              <span>DANIEL FOR AMERICA</span>
            </span>
          </a>
          <div className="footer-nav">
            <span className="mini-label">Navigate</span>
            {navItems.map((item) => (
              <button key={item.target} type="button" onClick={() => handleNavigate(item.target)}>
                {item.label}
              </button>
            ))}
          </div>
          <div className="footer-contact">
            <span className="mini-label">Contact</span>
            <a href="mailto:ideas4america@usa.com">ideas4america@usa.com</a>
            <span className="after-hours-label">After Working Hours</span>
            <a href="tel:+16464931595">(646) 493-1595</a>
            <span>
              12 Governors Court
              <br />
              Great Neck, NY 11023
            </span>
            <a className="footer-donate" href={VENMO_PROFILE} target="_blank" rel="noreferrer">
              Political Contributions <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="page-width footer-bottom">
          <span>Temporary campaign website</span>
          <span>Campaign public record · 2026</span>
          <span>
            © 2026 Daniel Bernard For America · FEC ID C00960534 · Paid for by Daniel Bernard For America · Treasurer:
            To be designated
          </span>
        </div>
      </footer>
    </div>
  );
}
