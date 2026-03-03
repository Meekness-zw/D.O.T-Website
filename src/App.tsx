import { useEffect, useRef, useState } from 'react';
import './App.css';

// ─── SVG Icon Components ──────────────────────────────────────────────────────
const IconBox = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
const IconMapPin = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconUsers = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconShield = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IconZap = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const IconBarChart = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);
const IconDownload = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const IconSearch = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IconClock = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconStar = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const IconApple = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.2 1.28-2.18 3.81.03 3.02 2.65 4.03 2.68 4.04l-.05.23zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);
const IconAndroid = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 15.341c-.51 0-.924-.414-.924-.924V9.11c0-.511.414-.924.924-.924.51 0 .924.413.924.924v5.307c0 .51-.414.924-.924.924zm-11.046 0c-.51 0-.924-.414-.924-.924V9.11c0-.511.414-.924.924-.924.51 0 .924.413.924.924v5.307c0 .51-.414.924-.924.924zm9.89-9.765l1.321-2.423c.073-.135.023-.305-.113-.378-.135-.073-.305-.023-.378.113l-1.338 2.453c-1.014-.465-2.148-.726-3.359-.726-1.211 0-2.345.261-3.359.726L7.803 2.888c-.073-.136-.243-.186-.378-.113-.136.073-.186.243-.113.378l1.321 2.423c-2.236 1.198-3.748 3.49-3.748 6.116h14.23c0-2.627-1.512-4.918-3.748-6.116zM9.5 7.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5zm5 0c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5zM4.5 9.25h15v8.25c0 .69-.56 1.25-1.25 1.25H14v2.5c0 .69-.56 1.25-1.25 1.25h-1.5c-.69 0-1.25-.56-1.25-1.25V18.75H5.75c-.69 0-1.25-.56-1.25-1.25V9.25z" />
  </svg>
);
const IconArrowRight = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
const IconCheck = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconShoppingCart = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);
const IconTruck = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);
const IconStore = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const IconLive = ({ size = 8 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 8 8">
    <circle cx="4" cy="4" r="4" fill="currentColor" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────

function App() {
  const headerRef = useRef<HTMLElement>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      headerRef.current?.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const features = [
    { icon: <IconBox />, title: 'Order Anything', desc: 'From meals to groceries. Delivered fast, fresh, and on time right to your door with live GPS tracking.' },
    { icon: <IconMapPin />, title: 'Live Tracking', desc: 'Watch your order move in real-time. Unmatched precision from the store directly to your hands.' },
    { icon: <IconUsers />, title: 'Flexible Roles', desc: 'Switch seamlessly between Customer, Courier, or Merchant — all in a single, powerful app.' },
    { icon: <IconShield />, title: 'Secure Payments', desc: 'Industry-standard encryption with multiple payment options. Your money and data, always protected.' },
    { icon: <IconZap />, title: 'Express Delivery', desc: 'Priority couriers, smart routing. We guarantee delivery within 60 minutes or your money back.' },
    { icon: <IconBarChart />, title: 'Merchant Dashboard', desc: 'Real-time analytics, inventory management, and customer insights — all in one powerful command center.' },
  ];

  const steps = [
    { n: '01', icon: <IconDownload size={24} />, title: 'Download the App', desc: 'Available on iOS and Android. Free to download, zero setup fees for customers.' },
    { n: '02', icon: <IconSearch size={24} />, title: 'Browse & Select', desc: 'Explore hundreds of restaurants, stores, and merchants near you in seconds.' },
    { n: '03', icon: <IconClock size={24} />, title: 'Sit Back & Track', desc: 'Real-time GPS tracking keeps you posted every step of the way until delivery.' },
    { n: '04', icon: <IconStar size={24} />, title: 'Rate & Repeat', desc: 'Share your experience, earn loyalty points, and enjoy exclusive repeat-order perks.' },
  ];

  return (
    <div className="app-container">
      {/* ── HEADER ─────────────────────────────────────── */}
      <header ref={headerRef} className={mobileNavOpen ? 'nav-open' : ''}>
        <div className="logo">
          DELIVERY<span className="logo-accent">ON</span>TIME
        </div>
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMobileNavOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav>
          <a href="#features" className="nav-link" onClick={() => setMobileNavOpen(false)}>Features</a>
          <a href="#how" className="nav-link" onClick={() => setMobileNavOpen(false)}>How It Works</a>
          <a href="#roles" className="nav-link" onClick={() => setMobileNavOpen(false)}>Join Us</a>
          <button className="btn-primary nav-cta" onClick={() => setMobileNavOpen(false)}>Get The App</button>
        </nav>
      </header>

      <main>
        {/* ── HERO ───────────────────────────────────────── */}
        <section className="hero-section">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="container">
            <div className="hero-inner">
              {/* Left text */}
              <div className="hero-text">
                <div className="hero-eyebrow hero-anim d1">
                  <span className="hero-eyebrow-dot"><IconLive /></span>
                  Now Available Nationwide
                </div>

                <h1 className="hero-title hero-anim d2">
                  Delivery That{' '}
                  <span className="highlight">Never</span>{' '}
                  Misses A Beat.
                </h1>

                <p className="hero-subtitle hero-anim d3">
                  Join the ecosystem built for precision. Whether you're ordering, delivering, or selling — experience reliability with zero compromises.
                </p>

                <div className="hero-buttons hero-anim d4">
                  <button className="btn-primary btn-pulse">
                    Order Now <IconArrowRight />
                  </button>
                  <button className="btn-outline">Learn More</button>
                </div>

                <div className="cta-buttons hero-anim d4" style={{ marginTop: '1.75rem', justifyContent: 'flex-start' }}>
                  <button className="btn-cta-light">
                    <IconApple /> Download for iOS
                  </button>
                  <button className="btn-cta-outline">
                    <IconAndroid /> Download for Android
                  </button>
                </div>

                <div className="hero-social-proof hero-anim d4">
                  <div className="proof-avatars">
                    {['A', 'B', 'C', 'D'].map((l, i) => (
                      <div className="proof-avatar" key={i}>{l}</div>
                    ))}
                  </div>
                  <p className="proof-text">
                    Trusted by <strong>50,000+</strong> users across the country
                  </p>
                </div>
              </div>

              {/* Right: 3D illustration */}
              <div className="hero-visual">
                <div className="hero-illus-wrap">
                  {/* Floating stat badges */}
                  <div className="floating-badge badge-top-right">
                    <span className="badge-icon-wrap"><IconZap size={14} /></span>
                    22 min avg delivery
                  </div>
                  <div className="floating-badge badge-bottom-left">
                    <span className="badge-icon-wrap star"><IconStar size={14} /></span>
                    4.9 rating
                  </div>

                  <img
                    src="/hero_scooter.png"
                    alt="Delivery scooter 3D illustration"
                    className="hero-3d-img float"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS / BENTO ──────────────────────────────── */}
        <section className="stats-section">
          <div className="container">
            <div className="bento-grid">
              <div className="bento-cell bento-green reveal scale-in delay-1">
                <div className="stat-number">40%</div>
                <p className="stat-desc">of consumers abandon checkout when same-day delivery isn't available</p>
              </div>
              <div className="bento-cell bento-yellow reveal scale-in delay-2">
                <div className="stat-number">80%</div>
                <p className="stat-desc">of brands that adopted rapid delivery saw stronger customer LTV</p>
              </div>
              <div className="bento-cell bento-blue reveal scale-in delay-3">
                <div className="stat-number">22<span style={{ fontSize: '2rem', fontWeight: 700 }}>min</span></div>
                <p className="stat-desc">average delivery time across our courier network</p>
              </div>
              <div className="bento-cell bento-wide reveal">
                <div>
                  <div className="stat-number" style={{ fontSize: '3.5rem' }}>50K+</div>
                  <p className="stat-desc" style={{ maxWidth: '260px' }}>Happy customers served. Growing 40% month-over-month.</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', flex: 1, maxWidth: '300px' }}>
                  {[
                    { label: 'On-time delivery rate', pct: 97, color: 'var(--color-primary)' },
                    { label: 'Customer satisfaction', pct: 94, color: '#6ECDFF' },
                    { label: 'Courier reliability', pct: 99, color: '#FFE168' },
                  ].map(s => (
                    <div key={s.label}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--color-ink)' }}>
                        <span>{s.label}</span><span>{s.pct}%</span>
                      </div>
                      <div style={{ height: '8px', background: 'var(--color-surface)', borderRadius: '9999px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${s.pct}%`, background: s.color, borderRadius: '9999px' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bento-cell bento-tall reveal from-right">
                <div className="stat-number">77%</div>
                <p className="stat-desc">of our merchants reported improved net-new sales within 30 days</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ───────────────────────────────────── */}
        <section id="features" className="features-section">
          <div className="container">
            <div className="features-layout">
              {/* Left: text + illustration */}
              <div className="features-intro reveal from-left">
                <span className="section-tag">Features</span>
                <h2 className="section-title">Built For Speed.<br />Designed For You.</h2>
                <p className="section-subtitle">A seamless platform supporting customers, couriers, and merchants through one intuitive app.</p>
                <div className="features-illus-wrap">
                  <img src="/tracking.png" alt="Live tracking 3D illustration" className="features-illus float-slow" />
                </div>
              </div>

              {/* Right: feature cards */}
              <div className="features-grid">
                {features.map((f, i) => (
                  <div key={f.title} className={`feature-card reveal delay-${(i % 3) + 1}`}>
                    <div className="feature-icon-wrap">{f.icon}</div>
                    <h3 className="feature-title">{f.title}</h3>
                    <p className="feature-desc">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ───────────────────────────────── */}
        <section id="how" className="how-section">
          <div className="container">
            <div style={{ textAlign: 'center' }}>
              <span className="section-tag">How It Works</span>
              <h2 className="section-title reveal">Ready in 4 Simple Steps</h2>
              <p className="section-subtitle reveal delay-1" style={{ margin: '0 auto' }}>Getting started is instant. No learning curve, no friction — just results.</p>
            </div>
            <div className="steps-grid">
              {steps.map((s, i) => (
                <div key={s.n} className={`step-card reveal delay-${i + 1}`} style={{ position: 'relative' }}>
                  {i < 3 && <span className="connector">→</span>}
                  <div className="step-icon-row">
                    <div className="step-icon-wrap">{s.icon}</div>
                    <div className="step-number">{s.n}</div>
                  </div>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ROLES / JOIN US ────────────────────────────── */}
        <section id="roles" className="roles-section">
          <div className="container">
            <div style={{ textAlign: 'center' }}>
              <span className="section-tag">Join Us</span>
              <h2 className="section-title reveal">A Platform Built For Everyone</h2>
              <p className="section-subtitle reveal delay-1" style={{ margin: '0 auto' }}>Whatever your role, DeliveryOnTime works for you.</p>
            </div>

            <div className="roles-grid">
              {/* Customer */}
              <div className="role-card customer reveal delay-1">
                <div className="role-icon-wrap">
                  <IconShoppingCart size={28} />
                </div>
                <h3 className="role-title">Customers</h3>
                <p className="role-desc">Get anything delivered in minutes. Browse local stores, track in real-time, and enjoy every order.</p>
                <ul className="role-perks">
                  {['Real-time tracking', 'No minimum order', 'Loyalty rewards'].map(p => (
                    <li key={p}><span className="perk-check"><IconCheck /></span>{p}</li>
                  ))}
                </ul>
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}>
                  Start Ordering <IconArrowRight />
                </button>
              </div>

              {/* Courier — with 3D illustration */}
              <div className="role-card courier reveal delay-2">
                <div className="role-illus-center">
                  <img src="/courier.png" alt="Courier character 3D illustration" className="role-illus" />
                </div>
                <div className="role-icon-wrap">
                  <IconTruck size={28} />
                </div>
                <h3 className="role-title">Couriers</h3>
                <p className="role-desc">Earn on your own schedule. Set your hours, choose your zone, and get paid fast for every delivery.</p>
                <button className="btn-outline" style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}>
                  Become a Courier <IconArrowRight />
                </button>
              </div>

              {/* Merchant — with 3D illustration */}
              <div className="role-card merchant reveal delay-3">
                <div className="role-illus-center">
                  <img src="/merchant.png" alt="Merchant store 3D illustration" className="role-illus" />
                </div>
                <div className="role-icon-wrap">
                  <IconStore size={28} />
                </div>
                <h3 className="role-title">Merchants</h3>
                <p className="role-desc">Reach more customers and grow your revenue. Plug into our delivery network in under 24 hours.</p>
                <button className="btn-outline" style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}>
                  List Your Store <IconArrowRight />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────── */}
        <section className="cta-section">
          <div className="cta-orb cta-orb-1" />
          <div className="cta-orb cta-orb-2" />
          <div className="container">
            <div className="cta-inner">
              <h2 className="cta-title reveal">
                Ready to experience<br />
                delivery <span className="c-green">on your terms?</span>
              </h2>
              <p className="cta-subtitle reveal delay-1">
                Download the app for free and join 50,000+ happy customers who've already made the switch.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo" style={{ color: '#fff', marginBottom: '0.75rem' }}>
                DELIVERY<span className="logo-accent">ON</span>TIME
              </div>
              <p className="footer-tagline">
                The fastest, most reliable delivery platform built for everyone — customers, couriers, and merchants.
              </p>
            </div>
            <div>
              <h4 className="footer-col-title">Product</h4>
              <div className="footer-links">
                {['Features', 'How It Works', 'For Merchants', 'Download App'].map(l => (
                  <a href="#" className="footer-link" key={l}>{l}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="footer-col-title">Company</h4>
              <div className="footer-links">
                {['About Us', 'Careers', 'Press', 'Blog'].map(l => (
                  <a href="#" className="footer-link" key={l}>{l}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="footer-col-title">Support</h4>
              <div className="footer-links">
                {['Help Centre', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map(l => (
                  <a href="#" className="footer-link" key={l}>{l}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Delivery On Time. All rights reserved.</span>
            <div className="footer-badge">
              <IconLive size={8} /> Live — Zero downtime
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
