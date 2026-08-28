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
  const [loginOpen, setLoginOpen] = useState(false);

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
    { icon: <IconUsers />, title: 'Flexible Roles', desc: 'Switch seamlessly between Customer, Courier, or Merchant. All in a single, powerful app.' },
    { icon: <IconShield />, title: 'Secure Payments', desc: 'Industry-standard encryption with multiple payment options. Your money and data, always protected.' },
    { icon: <IconZap />, title: 'Express Delivery', desc: 'Priority couriers, smart routing. We guarantee delivery within 60 minutes or your money back.' },
    { icon: <IconBarChart />, title: 'Merchant Dashboard', desc: 'Real-time analytics, inventory management, and customer insights. All in one powerful command center.' },
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
        <a href="/" className="logo-img-wrap" aria-label="dot. – Delivery on Time">
          <img src="/dot-on-time-white.png" alt="dot. Delivery on Time" className="nav-logo-img" />
        </a>
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
          <a href="https://merchant.deliveryontime.co.zw" target="_blank" rel="noopener noreferrer" className="nav-link" onClick={() => setMobileNavOpen(false)}>Merchant Portal</a>
          <div style={{ position: 'relative' }}>
              <button
                className="btn-login"
                onClick={() => setLoginOpen((o) => !o)}
                aria-expanded={loginOpen}
              >
                Log In
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ marginLeft: '0.35rem', transition: 'transform 0.15s', transform: loginOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {loginOpen && (
                <>
                  <div
                    onClick={() => setLoginOpen(false)}
                    style={{ position: 'fixed', inset: 0, zIndex: 149 }}
                  />
                  <div style={{
                    position: 'absolute', top: 'calc(100% + 10px)', right: 0,
                    background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.10)',
                    borderRadius: '12px', padding: '0.5rem', minWidth: '200px',
                    boxShadow: '0 16px 40px rgba(0,0,0,0.5)', zIndex: 150,
                  }}>
                    <a
                      href="https://couriers.deliveryontime.co.zw/login"
                      target="_blank" rel="noopener noreferrer"
                      onClick={() => setLoginOpen(false)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.65rem',
                        padding: '0.75rem 1rem', borderRadius: '8px', color: '#fff',
                        textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600,
                        transition: 'background 0.15s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                    >
                      <span style={{ fontSize: '1.1rem' }}>🚴</span>
                      <div>
                        <div>Courier Portal</div>
                        <div style={{ fontSize: '0.72rem', opacity: 0.5, fontWeight: 400 }}>couriers.deliveryontime.co.zw</div>
                      </div>
                    </a>
                    <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', margin: '0.25rem 0.5rem' }} />
                    <a
                      href="https://merchant.deliveryontime.co.zw/login"
                      target="_blank" rel="noopener noreferrer"
                      onClick={() => setLoginOpen(false)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.65rem',
                        padding: '0.75rem 1rem', borderRadius: '8px', color: '#fff',
                        textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600,
                        transition: 'background 0.15s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                    >
                      <span style={{ fontSize: '1.1rem' }}>🏪</span>
                      <div>
                        <div>Merchant Portal</div>
                        <div style={{ fontSize: '0.72rem', opacity: 0.5, fontWeight: 400 }}>merchant.deliveryontime.co.zw</div>
                      </div>
                    </a>
                  </div>
                </>
              )}
            </div>
          <a href="#download" className="btn-primary nav-cta" onClick={() => setMobileNavOpen(false)}>Get The App</a>
        </nav>
      </header>

      <main>
        {/* ── HERO ───────────────────────────────────────── */}
        <section className="hero-section">
          {/* Left content */}
          <div className="hero-left">
            <div className="hero-eyebrow hero-anim d1">
              <span className="hero-eyebrow-dot" />
              Now Live in Zimbabwe
            </div>

            <h1 className="hero-title hero-anim d2">
              Delivery That{' '}
              <span className="highlight">Never</span>{' '}
              Misses A Beat.
            </h1>

            <p className="hero-subtitle hero-anim d3">
              Zimbabwe's fastest delivery platform for <a href="/food-delivery" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>food</a>,{' '}
              groceries, and <a href="/parcel-delivery" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>parcels</a>.
              Serving <a href="/harare" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Harare</a> and{' '}
              <a href="/bulawayo" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Bulawayo</a> with live GPS tracking and zero compromise on speed.
            </p>

            <div className="hero-buttons hero-anim d4">
              <a href="#how" className="btn-primary btn-pulse">Order Now <IconArrowRight /></a>
              <a href="#features" className="btn-outline">Learn More</a>
            </div>

            {/* Stat cards - mobile only (desktop cards live in hero-right) */}
            <div className="hero-stats-mobile hero-anim d4">
              <div className="hero-stat-card">
                <span className="hero-stat-icon"><IconClock size={20} /></span>
                <div>
                  <div className="hero-stat-value">22 min</div>
                  <div className="hero-stat-label">avg delivery</div>
                </div>
              </div>
              <div className="hero-stat-card">
                <span className="hero-stat-icon star"><IconStar size={20} /></span>
                <div>
                  <div className="hero-stat-value">4.9</div>
                  <div className="hero-stat-label">Customer rating</div>
                </div>
              </div>
            </div>

            <div id="download" className="hero-store-badges hero-anim d4">
              <a href="https://play.google.com/store/apps/details?id=co.zw.deliveryontime" className="store-badge" target="_blank" rel="noopener noreferrer" aria-label="Download dot. on Google Play">
                <IconAndroid size={22} />
                <div className="store-badge-text">
                  <span className="store-badge-sub">GET IT ON</span>
                  <span className="store-badge-name">Google Play</span>
                </div>
              </a>
              <a href="#download" className="store-badge" aria-label="dot. coming soon to iOS App Store" style={{ opacity: 0.5, cursor: 'default' }} onClick={(e) => e.preventDefault()}>
                <IconApple size={22} />
                <div className="store-badge-text">
                  <span className="store-badge-sub">Coming soon to</span>
                  <span className="store-badge-name">App Store</span>
                </div>
              </a>
            </div>

            <div className="hero-payments hero-anim d4">
              <span className="payment-chip visa">VISA</span>
              <span className="payment-chip mastercard">
                <span className="mc-circle mc-red" />
                <span className="mc-circle mc-yellow" />
              </span>
              <span className="payment-chip ecocash">EcoCash</span>
              <span className="payment-chip innbucks">Innbucks</span>
              <span className="payment-chip mukuru">mukuru</span>
              <span className="payment-chip paypal">Pay<span style={{color:'#009cde'}}>Pal</span></span>
            </div>

            <div className="hero-cashless hero-anim d4">
              <IconShield size={16} />
              <span>100% Cashless. Secure. Seamless.</span>
            </div>
          </div>

          {/* Right: hero image + floating stat cards */}
          <div className="hero-right">
            <div className="hero-img-fade" />
            <img src="/Hero.jpeg" alt="Food delivery courier on a motorbike in Harare, Zimbabwe" className="hero-bg-img" />
            <div className="hero-stat-cards">
              <div className="hero-stat-card hero-anim d2">
                <span className="hero-stat-icon"><IconClock size={20} /></span>
                <div>
                  <div className="hero-stat-value">22 min</div>
                  <div className="hero-stat-label">avg delivery</div>
                </div>
              </div>
              <div className="hero-stat-card hero-anim d3">
                <span className="hero-stat-icon"><IconShield size={20} /></span>
                <div>
                  <div className="hero-stat-value">Reliable</div>
                  <div className="hero-stat-label">Every time</div>
                </div>
              </div>
              <div className="hero-stat-card hero-anim d4">
                <span className="hero-stat-icon star"><IconStar size={20} /></span>
                <div>
                  <div className="hero-stat-value">4.9</div>
                  <div className="hero-stat-label">Customer rating</div>
                </div>
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
                  <img src="/tracking.png" alt="dot. live GPS delivery tracking map for Zimbabwe" className="features-illus float-slow" />
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
              <p className="section-subtitle reveal delay-1" style={{ margin: '0 auto' }}>Getting started is instant. No learning curve, no friction. Just results.</p>
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



        {/* ── FAQ ────────────────────────────────────────── */}
        <section className="faq-section" id="faq">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span className="section-tag">Common Questions</span>
              <h2 className="section-title reveal">Frequently Asked Questions</h2>
              <p className="section-subtitle reveal delay-1" style={{ margin: '0 auto' }}>Everything you need to know about dot. delivery in Zimbabwe.</p>
            </div>
            <div className="faq-grid">
              {[
                { q: 'Which areas does dot. deliver in?', a: 'We currently serve Harare and Bulawayo, with more Zimbabwean cities coming soon. Within covered areas, dot. delivers to homes, offices, and public locations.' },
                { q: 'What payment methods are accepted?', a: 'dot. supports EcoCash, cash on delivery, and additional payment options. We\'re continuously adding more to make ordering as seamless as possible.' },
                { q: 'How long does delivery take?', a: 'Most deliveries in Harare and Bulawayo are completed within 20–45 minutes. Exact delivery times vary by distance and restaurant preparation time, and you can track every order live on the map.' },
                { q: 'Is there a minimum order amount?', a: 'No minimum order. You can order as little or as much as you like. Delivery fees are calculated based on your distance from the merchant.' },
                { q: 'How do I become a courier on dot.?', a: 'Sign up at couriers.deliveryontime.co.zw. All you need is a smartphone, any mode of transport, and a valid ID. You set your own hours and earn per delivery.' },
                { q: 'How do I list my restaurant or shop on dot.?', a: 'Register your business at merchant.deliveryontime.co.zw. There are no upfront fees — we charge a small commission on completed orders only. Your store can be live within 24 hours.' },
              ].map((item, i) => (
                <div key={i} className={`faq-item reveal delay-${(i % 3) + 1}`}>
                  <h3 className="faq-q">{item.q}</h3>
                  <p className="faq-a">{item.a}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <a href="/help" className="btn-outline">See full Help Centre <IconArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        {/* ── REVIEWS ─────────────────────────────────────── */}
        <section className="reviews-section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span className="section-tag">Testimonials</span>
              <h2 className="section-title reveal">What People Are Saying</h2>
            </div>
            <div className="reviews-grid">
              <div className="review-card reveal delay-1">
                <div className="review-stars">{'★★★★★'}</div>
                <p className="review-body">"The fastest delivery I've experienced in Harare. My order arrived in under 25 minutes and everything was still hot. I won't go back to calling restaurants directly."</p>
                <div className="review-author"><span className="review-name">Tinashe M.</span><span className="review-loc">Borrowdale, Harare</span></div>
              </div>
              <div className="review-card reveal delay-2">
                <div className="review-stars">{'★★★★★'}</div>
                <p className="review-body">"As a courier on dot., I set my own hours and earn consistently every week. The payout process is simple and reliable — the money is there when they say it will be."</p>
                <div className="review-author"><span className="review-name">Kudakwashe N.</span><span className="review-loc">Courier, Harare</span></div>
              </div>
              <div className="review-card reveal delay-3">
                <div className="review-stars">{'★★★★★'}</div>
                <p className="review-body">"Since listing our restaurant on dot., we've seen a significant jump in orders. The merchant dashboard gives us everything we need to manage deliveries and see what's selling."</p>
                <div className="review-author"><span className="review-name">Rudo C.</span><span className="review-loc">Restaurant Owner, Bulawayo</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ROLES / JOIN US ────────────────────────────── */}
        <section id="roles" className="roles-section">
          <div className="container">
            <div style={{ textAlign: 'center' }}>
              <span className="section-tag">Join Us</span>
              <h2 className="section-title reveal">A Platform Built For Everyone</h2>
              <p className="section-subtitle reveal delay-1" style={{ margin: '0 auto' }}>Whatever your role, dot. works for you.</p>
            </div>

            <div className="roles-grid">
              {/* Customer */}
              <div className="role-card customer reveal delay-1">
                <div className="role-illus-center">
                  <img src="/customer.png" alt="Customer ordering food on the dot. app in Zimbabwe" className="role-illus" />
                </div>
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
                <a href="#download" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 'auto', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Start Ordering <IconArrowRight />
                </a>
              </div>

              {/* Courier - with 3D illustration */}
              <div className="role-card courier reveal delay-2">
                <div className="role-illus-center">
                  <img src="/courier.png" alt="dot. courier delivering an order in Harare, Zimbabwe" className="role-illus" />
                </div>
                <div className="role-icon-wrap">
                  <IconTruck size={28} />
                </div>
                <h3 className="role-title">Couriers</h3>
                <p className="role-desc">Earn on your own schedule. Set your hours, choose your zone, and get paid fast for every delivery.</p>
                <a href="https://couriers.deliveryontime.co.zw" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ width: '100%', justifyContent: 'center', marginTop: 'auto', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Become a Courier <IconArrowRight />
                </a>
              </div>

              {/* Merchant - with 3D illustration */}
              <div className="role-card merchant reveal delay-3">
                <div className="role-illus-center">
                  <img src="/merchant-new.png" alt="dot. merchant dashboard for Zimbabwean restaurants and stores" className="role-illus" />
                </div>
                <div className="role-icon-wrap">
                  <IconStore size={28} />
                </div>
                <h3 className="role-title">Merchants</h3>
                <p className="role-desc">Reach more customers and grow your revenue. Access your full merchant dashboard online.</p>
                <a href="https://merchant.deliveryontime.co.zw" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 'auto', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Open Merchant Dashboard <IconArrowRight />
                </a>
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
                Download the app for free and start ordering from restaurants, shops, and stores across Zimbabwe today.
              </p>
              <div className="cta-buttons reveal delay-2">
                <a href="https://play.google.com/store/apps/details?id=co.zw.deliveryontime" target="_blank" rel="noopener noreferrer" className="btn-cta-light">
                  <IconAndroid size={18} /> Download Free on Android
                </a>
                <a href="/help" className="btn-cta-outline">
                  Have questions? <IconArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img
                src="/dot-on-time-white.png"
                alt="dot. Delivery on Time"
                className="footer-logo-img"
              />
              <p className="footer-tagline">
                The fastest, most reliable delivery platform built for everyone: customers, couriers, and merchants.
              </p>
            </div>
            <div>
              <h4 className="footer-col-title">Services</h4>
              <div className="footer-links">
                <a href="/food-delivery" className="footer-link">Food Delivery</a>
                <a href="/parcel-delivery" className="footer-link">Parcel Delivery</a>
                <a href="https://merchant.deliveryontime.co.zw" className="footer-link" target="_blank" rel="noopener noreferrer">For Merchants</a>
                <a href="https://couriers.deliveryontime.co.zw" className="footer-link" target="_blank" rel="noopener noreferrer">Become a Courier</a>
                <a href="#download" className="footer-link">Download App</a>
              </div>
            </div>
            <div>
              <h4 className="footer-col-title">Company</h4>
              <div className="footer-links">
                <a href="/about" className="footer-link">About Us</a>
                <a href="/careers" className="footer-link">Careers</a>
                <a href="/press" className="footer-link">Press</a>
                <a href="/blog" className="footer-link">Blog</a>
              </div>
            </div>
            <div>
              <h4 className="footer-col-title">Support</h4>
              <div className="footer-links">
                <a href="/help" className="footer-link">Help Centre</a>
                <a href="tel:+263788014717" className="footer-link">+263 78 8014717</a>
                <a href="mailto:contact@deliveryontime.co.zw" className="footer-link">Contact Us</a>
                <a href="/privacy" className="footer-link">Privacy Policy</a>
                <a href="/terms" className="footer-link">Terms of Service</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Delivery On Time. All rights reserved.</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <a
                href="https://www.instagram.com/deli.veryontime"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="dot. on Instagram"
                style={{ color: 'inherit', opacity: 0.6, transition: 'opacity 0.15s', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontWeight: 600 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
                @deli.veryontime
              </a>
              <div className="footer-badge">
                <IconLive size={8} /> Live. Zero downtime
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
