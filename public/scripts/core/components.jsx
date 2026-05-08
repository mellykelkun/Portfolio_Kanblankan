        // COMPOSANTS
        // ================================================================

        function Navbar({ t, theme, setTheme, lang, setLang }) {
            const [mobileOpen, setMobileOpen] = useState(false);
            const [logoGlitch, setLogoGlitch] = useState(false);

            const themes = [
                { key: 'cyber', label: '🔵', title: 'Cyber' },
                { key: 'obsidian', label: '⚫', title: 'Obsidian' },
                { key: 'quartz', label: '⚪', title: 'Quartz' }
            ];
            const langs = [
                { key: 'fr', label: '🇫🇷', title: 'Français' },
                { key: 'en', label: '🇬🇧', title: 'English' },
                { key: 'zh', label: '🇨🇳', title: '中文' },
                { key: 'ar', label: '🇸🇦', title: 'العربية' }
            ];

            const scrollTo = (id) => {
                setMobileOpen(false);
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            };

            return (
                <nav className="navbar">
                    <div className="nav-inner">
                        <div
                            className={`nav-logo ${logoGlitch ? 'glitching' : ''}`}
                            onClick={() => { window.scrollTo({top:0,behavior:'smooth'}); setLogoGlitch(true); setTimeout(() => setLogoGlitch(false), 300); }}
                            title="Retour en haut"
                        >
                            &lt;KK /&gt;
                        </div>
                        <button className="nav-hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
                            {mobileOpen ? '✕' : '☰'}
                        </button>
                        <ul className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
                            <li><a onClick={() => scrollTo('about')}>{t.nav.about}</a></li>
                            <li><a onClick={() => scrollTo('projects')}>{t.nav.projects}</a></li>
                            <li><a onClick={() => scrollTo('skills')}>{t.nav.skills}</a></li>
                            <li><a onClick={() => scrollTo('contact')}>{t.nav.contact}</a></li>
                            <li className="nav-controls">
                                {themes.map(th => (
                                    <button key={th.key} className={`nav-theme-btn ${theme === th.key ? 'active' : ''}`}
                                        onClick={() => setTheme(th.key)} title={th.title}>{th.label}</button>
                                ))}
                                {langs.map(l => (
                                    <button key={l.key} className={`nav-lang-btn ${lang === l.key ? 'active' : ''}`}
                                        onClick={() => setLang(l.key)} title={l.title}>{l.label}</button>
                                ))}
                            </li>
                        </ul>
                    </div>
                </nav>
            );
        }

        function Hero({ t, terminalTransition }) {
            const codeLines = [
                'const architect = new SystemArchitect();',
                'architect.design({',
                '  stack: "full-stack",',
                '  ai: "orchestrated",',
                '  security: "zero-trust",',
                '  scalability: "unlimited"',
                '});',
                'architect.deploy();',
                '',
                'class AIAgent extends AutonomousAgent {',
                '  constructor() {',
                '    super({ precision: "surgical" });',
                '  }',
                '}',
                '',
                'const prompt = new Prompt({',
                '  target: "optimal_performance",',
                '  context: "full_codebase",',
                '});',
            ];
            const [typedText, setTypedText] = useState('');
            const [lineIndex, setLineIndex] = useState(0);
            const [charIndex, setCharIndex] = useState(0);
            const [visible, setVisible] = useState(false);

            useEffect(() => {
                if (lineIndex < codeLines.length) {
                    if (charIndex < codeLines[lineIndex].length) {
                        const timer = setTimeout(() => {
                            setTypedText(prev => prev + codeLines[lineIndex][charIndex]);
                            setCharIndex(c => c + 1);
                        }, 12);
                        return () => clearTimeout(timer);
                    } else {
                        const timer = setTimeout(() => {
                            setTypedText(prev => prev + '\n');
                            setLineIndex(l => l + 1);
                            setCharIndex(0);
                        }, 20);
                        return () => clearTimeout(timer);
                    }
                } else {
                    setVisible(true);
                }
            }, [lineIndex, charIndex]);

            const styleHidden = visible ? {} : { opacity: 0, transform: 'translateY(20px)' };
            const styleTransition = { transition: 'opacity 0.6s ease, transform 0.6s ease' };

            return (
                <section className="hero" id="hero">
                    <div className="hero-orb hero-orb1"></div>
                    <div className="hero-orb hero-orb2"></div>
                    <div className="hero-orb hero-orb3"></div>
                    <div className="code-rain">
                        <pre>{typedText}<span style={{animation:'blink 0.7s infinite',borderRight:'2px solid var(--primary)'}}>&nbsp;</span></pre>
                    </div>
                    <div className="container">
                        <div className="hero-content">
                            <div className="hero-badge" style={{...styleHidden, ...styleTransition}}>
                                <span className="hero-badge-dot"></span>
                                {t.hero.badge}
                            </div>
                            <h1 className="hero-name" style={{...styleHidden, ...styleTransition}}>
                                <span>Kablankan</span><br/>Tiemele Israël Kévin
                            </h1>
                            <p className="hero-title" style={{...styleHidden, ...styleTransition}}>{t.hero.title}</p>
                            <p className="hero-description" style={{...styleHidden, ...styleTransition}} dangerouslySetInnerHTML={{__html: t.hero.description}}></p>
                            <div className="hero-cta" style={{...styleHidden, ...styleTransition}}>
                                <a href="#projects" className="btn btn-primary" onClick={e=>{e.preventDefault();document.getElementById('projects')?.scrollIntoView({behavior:'smooth'});terminalTransition('projects');}}>
                                    <span className="btn-content">🚀 {t.hero.cta1}</span>
                                    <span className="checklist-overlay">✓ Build OK &nbsp; ✓ Tests OK &nbsp; ✓ Ready</span>
                                </a>
                                <a href="#contact" className="btn btn-outline" onClick={e=>{e.preventDefault();document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});terminalTransition('contact');}}>
                                    <span className="btn-content">📬 {t.hero.cta2}</span>
                                    <span className="checklist-overlay">✓ Secure &nbsp; ✓ Encrypted &nbsp; ✓ Fast</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }

        function Stats({ t, isVisible }) {
            const [animated, setAnimated] = useState([false, false, false, false]);
            useEffect(() => {
                if (isVisible) {
                    const timers = [];
                    for (let i = 0; i < 4; i++) {
                        timers.push(setTimeout(() => setAnimated(prev => { const n = [...prev]; n[i] = true; return n; }), i * 200));
                    }
                    return () => timers.forEach(clearTimeout);
                }
            }, [isVisible]);

            const styleNum = (i) => ({
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '3rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, var(--primary2), var(--accent))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                opacity: animated[i] ? 1 : 0,
                transform: animated[i] ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
            });

            return (
                <div className="container">
                    <div className="stats-grid">
                        {t.stats.map((s, i) => (
                            <div className="stat-card" key={i}>
                                <div className="stat-number" style={styleNum(i)}>{s.number}</div>
                                <div className="stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        function About({ t }) {
            return (
                <section className="section" id="about">
                    <div className="container">
                        <h2 className="section-title"><span>{t.about.title.split(' ')[0]}</span> {t.about.title.split(' ').slice(1).join(' ')}</h2>
                        <p className="section-subtitle">{t.about.subtitle}</p>
                        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'32px'}}>
                            {t.about.cards.map((c, i) => (
                                <div key={i} style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'16px',padding:'32px',transition:'all 0.3s'}}
                                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary)'}
                                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                                >
                                    <div style={{fontSize:'2rem',marginBottom:'16px'}}>{c.icon}</div>
                                    <h3 style={{fontFamily:'Space Grotesk',marginBottom:'12px'}}>{c.title}</h3>
                                    <p style={{color:'var(--text2)',lineHeight:1.8}} dangerouslySetInnerHTML={{__html: c.desc}}></p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        }

        function Projects({ t }) {
            const [expanded, setExpanded] = useState(null);

            const handleMouseMove = (e, card) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -8;
                const rotateY = ((x - centerX) / centerX) * 8;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                card.style.setProperty('--mx', x + 'px');
                card.style.setProperty('--my', y + 'px');
            };

            const handleMouseLeave = (card) => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            };

            const handleClick = (p, card) => {
                card.classList.add('clicked');
                setTimeout(() => card.classList.remove('clicked'), 300);
                setExpanded(p);
            };

            return (
                <section className="section" id="projects">
                    <div className="container">
                        <h2 className="section-title"><span>{t.projects.title.split(' ')[0]}</span> {t.projects.title.split(' ').slice(1).join(' ')}</h2>
                        <p className="section-subtitle">{t.projects.subtitle}</p>
                        <div className="projects-grid">
                            {t.projects.items.map((p, i) => (
                                <div
                                    key={i}
                                    className="project-card"
                                    onClick={(e) => handleClick(p, e.currentTarget)}
                                    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                                    onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                                    style={{animation: `slideUp 0.6s ease-out ${i*0.1}s both`}}
                                >
                                    <div className="project-icon">{p.icon}</div>
                                    <h3 className="project-name">{p.name}</h3>
                                    <p className="project-desc">{p.desc}</p>
                                    <div className="project-tech">
                                        {p.tech.map((tech, j) => <span key={j}>{tech}</span>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {expanded && (
                        <div className="modal-overlay" onClick={() => setExpanded(null)}>
                            <div className="modal-content" onClick={e => e.stopPropagation()}>
                                <button className="modal-close" onClick={() => setExpanded(null)}>✕</button>
                                <div style={{fontSize:'3rem',marginBottom:'16px'}}>{expanded.icon}</div>
                                <h2 style={{fontFamily:'Space Grotesk',fontSize:'1.8rem',marginBottom:'12px'}}>{expanded.name}</h2>
                                <p style={{color:'var(--text2)',lineHeight:1.8,marginBottom:'20px'}}>{expanded.detail}</p>
                                <div className="project-tech">
                                    {expanded.tech.map((tech, j) => <span key={j} style={{fontSize:'0.85rem',padding:'6px 14px'}}>{tech}</span>)}
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            );
        }

        function Skills({ t }) {
            return (
                <section className="section" id="skills">
                    <div className="container">
                        <h2 className="section-title"><span>{t.skills.title.split(' ')[0]}</span> {t.skills.title.split(' ').slice(1).join(' ')}</h2>
                        <p className="section-subtitle">{t.skills.subtitle}</p>
                        {t.skills.categories.map((cat, i) => (
                            <div key={i} style={{marginBottom:'40px'}}>
                                <h3 style={{fontFamily:'Space Grotesk',fontSize:'1.2rem',marginBottom:'16px'}}>{cat.title}</h3>
                                <div className="skills-container">
                                    {cat.skills.map((s, j) => (
                                        <span key={j} className="skill-tag"
                                            style={{animation: `scaleIn 0.3s ease-out ${i*0.1 + j*0.05}s both`}}
                                        >{s}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            );
        }

        function Experience({ t }) {
            return (
                <section className="section" id="experience" style={{background:'var(--bg-alt)'}}>
                    <div className="container">
                        <h2 className="section-title"><span>{t.experience.title.split(' ')[0]}</span> {t.experience.title.split(' ').slice(1).join(' ')}</h2>
                        <p className="section-subtitle">{t.experience.subtitle}</p>
                        <div className="timeline">
                            {t.experience.items.map((exp, i) => (
                                <div key={i} className="timeline-item" style={{animation:`slideRight 0.6s ease-out ${i*0.2}s both`}}>
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-date">{exp.date}</div>
                                    <div className="timeline-title">{exp.title}</div>
                                    <div className="timeline-desc">{exp.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        }

        function Education({ t }) {
            return (
                <section className="section" id="education">
                    <div className="container">
                        <h2 className="section-title"><span>{t.education.title.split(' ')[0]}</span> {t.education.title.split(' ').slice(1).join(' ')}</h2>
                        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'24px'}}>
                            {t.education.items.map((item, i) => (
                                <div key={i} style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'16px',padding:'32px',transition:'all 0.3s'}}
                                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary)'}
                                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                                >
                                    <div style={{fontSize:'1.5rem',marginBottom:'12px'}}>{item.icon}</div>
                                    <h3 style={{fontFamily:'Space Grotesk',marginBottom:'8px'}}>{item.title}</h3>
                                    <p style={{color:'var(--accent)',marginBottom:'8px',fontWeight:500}}>{item.subtitle}</p>
                                    <p style={{color:'var(--text2)'}}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        }

        function Contact({ t }) {
            const [copied, setCopied] = useState('');
            const copyToClipboard = (text, label) => {
                navigator.clipboard.writeText(text);
                setCopied(label);
                setTimeout(() => setCopied(''), 2000);
            };
            return (
                <section className="section" id="contact" style={{background:'var(--bg-alt)'}}>
                    <div className="container" style={{textAlign:'center'}}>
                        <h2 className="section-title"><span>{t.contact.title.split('-')[0]}</span>{t.contact.title.includes('-') ? '-' + t.contact.title.split('-')[1] : ' ' + t.contact.title.split(' ').slice(1).join(' ')}</h2>
                        <p className="section-subtitle" style={{margin:'0 auto 40px'}}>{t.contact.subtitle}</p>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'20px',maxWidth:'500px',margin:'0 auto'}}>
                            <div className="contact-copy-item" onClick={() => copyToClipboard('kablankankevinisrael@gmail.com', 'email')}>
                                <span style={{fontSize:'1.5rem'}}>✉️</span>
                                <span style={{color:'var(--text2)'}}>kablankankevinisrael@gmail.com</span>
                                <span style={{marginLeft:'auto',color:'var(--accent)',fontSize:'0.8rem'}}>{copied === 'email' ? t.contact.copied : t.contact.copy}</span>
                            </div>
                            <div className="contact-copy-item" onClick={() => copyToClipboard('+2250703063570', 'tel1')}>
                                <span style={{fontSize:'1.5rem'}}>📱</span>
                                <span style={{color:'var(--text2)'}}>+225 07 03 06 35 70</span>
                                <span style={{marginLeft:'auto',color:'var(--accent)',fontSize:'0.8rem'}}>{copied === 'tel1' ? t.contact.copied : t.contact.copy}</span>
                            </div>
                            <div className="contact-copy-item" onClick={() => copyToClipboard('+2250503265984', 'tel2')}>
                                <span style={{fontSize:'1.5rem'}}>📞</span>
                                <span style={{color:'var(--text2)'}}>+225 05 03 26 59 84</span>
                                <span style={{marginLeft:'auto',color:'var(--accent)',fontSize:'0.8rem'}}>{copied === 'tel2' ? t.contact.copied : t.contact.copy}</span>
                            </div>
                            <a href="https://github.com/Mellykelkun" target="_blank" rel="noopener noreferrer"
                                className="btn btn-outline" style={{width:'100%',justifyContent:'center',textDecoration:'none'}}>
                                <span>🔗</span> {t.contact.github}
                            </a>
                        </div>
                    </div>
                </section>
            );
        }

        function MiniConsole({ t, entityWave, entityBackflip, botMood, cinematicEnabled, onToggleCinematic }) {
            const [isOpen, setIsOpen] = useState(false);
            const [output, setOutput] = useState(t.console.welcome);
            const inputRef = useRef(null);
            const moodIcons = {
                curious: '🔎',
                excited: '⚡',
                tired: '💤',
                focused: '🎯'
            };
            const botUi = t.footer.bot || {};
            const moodMap = botUi.moods || {};
            const moodLabel = moodMap[botMood] || botMood || 'curious';

            const handleCommand = (cmd) => {
                const trimmed = cmd.trim().toLowerCase();
                let response = '';
                switch (trimmed) {
                    case 'help': response = t.console.help; break;
                    case 'skills': response = t.console.skills; break;
                    case 'contact': response = t.console.contact; break;
                    case 'easteregg':
                        response = t.console.easteregg;
                        entityWave();
                        setTimeout(() => entityBackflip(), 1500);
                        break;
                    case 'clear': setOutput(''); return;
                    case 'exit': setIsOpen(false); setOutput(t.console.welcome); return;
                    default: response = t.console.unknown;
                }
                setOutput(prev => prev + '\n❯ ' + cmd + '\n' + response + '\n');
            };

            const handleKeyDown = (e) => {
                if (e.key === 'Enter' && inputRef.current) {
                    handleCommand(inputRef.current.value);
                    inputRef.current.value = '';
                }
            };

            useEffect(() => {
                if (isOpen && inputRef.current) inputRef.current.focus();
            }, [isOpen]);

            return (
                <>
                    <div className="footer-tools">
                        <button className="footer-console-trigger" onClick={() => setIsOpen(!isOpen)} title="Console développeur">
                            {t.footer.consoleTrigger}
                        </button>
                        <span className="footer-mood-chip" title={botUi.mood || 'Mood'}>
                            <span>{moodIcons[botMood] || '🤖'}</span>
                            <span>{botUi.mood || 'Mood'}: {moodLabel}</span>
                        </span>
                        <button
                            className={`footer-console-trigger footer-cinematic-btn ${cinematicEnabled ? 'active' : ''}`}
                            onClick={onToggleCinematic}
                            title={botUi.toggleTitle || 'Toggle cinematic mode'}
                        >
                            {cinematicEnabled ? (botUi.cinematicOn || 'Cinematic ON') : (botUi.cinematicOff || 'Cinematic OFF')}
                        </button>
                    </div>
                    <div id="mini-console" className={isOpen ? 'open' : ''}>
                        <div className="console-header">
                            <span>⬛ mini-console ~ zsh</span>
                            <button className="console-close-btn" onClick={() => setIsOpen(false)}
                                style={{background:'none',border:'none',color:'var(--text2)',cursor:'pointer',fontSize:'0.8rem'}}>✕</button>
                        </div>
                        <div className="console-output">{output}</div>
                        <div className="console-input-row">
                            <span className="console-prompt">❯</span>
                            <input type="text" className="console-input" ref={inputRef}
                                onKeyDown={handleKeyDown} placeholder="commande..."
                            />
                        </div>
                    </div>
                </>
            );
        }

        function Footer({ t, entityWave, entityBackflip, botMood, cinematicEnabled, onToggleCinematic }) {
            return (
                <footer className="footer">
                    <p className="footer-text">
                        {t.footer.text.replace('{year}', new Date().getFullYear())}
                    </p>
                    <MiniConsole
                        t={t}
                        entityWave={entityWave}
                        entityBackflip={entityBackflip}
                        botMood={botMood}
                        cinematicEnabled={cinematicEnabled}
                        onToggleCinematic={onToggleCinematic}
                    />
                </footer>
            );
        }

