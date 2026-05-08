        // APP PRINCIPALE
        // ================================================================
        function App() {
            const [theme, setTheme] = useTheme();
            const [lang, setLang, t] = useLanguage();
            const scrollProgress = useScrollProgress();
            const terminalTransition = useTerminalTransition();
            const {
                wave: entityWave,
                backflip: entityBackflip,
                mood: botMood,
                cinematicEnabled,
                toggleCinematic
            } = useEntityCode();

            useParticles();
            useCursorGlow();
            useAmbientParticles();
            useScreenSaver();

            const [showScrollTop, setShowScrollTop] = useState(false);
            const [statsVisible, setStatsVisible] = useState(false);

            useEffect(() => {
                const handleScroll = () => {
                    setShowScrollTop(window.scrollY > 500);
                };
                window.addEventListener('scroll', handleScroll, { passive: true });

                const observer = new IntersectionObserver(
                    ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
                    { threshold: 0.3 }
                );
                const statsEl = document.querySelector('.stats-grid');
                if (statsEl) observer.observe(statsEl);

                return () => {
                    window.removeEventListener('scroll', handleScroll);
                    observer.disconnect();
                };
            }, []);

            useEffect(() => {
                const bar = document.querySelector('#scroll-progress .bar');
                const text = document.querySelector('#scroll-progress .text');
                if (bar) bar.style.width = scrollProgress + '%';
                if (text) text.textContent = `// Lecture à ${Math.round(scrollProgress)}%...`;
            }, [scrollProgress]);

            return (
                <div>
                    <Navbar t={t} theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
                    <main>
                        <Hero t={t} terminalTransition={terminalTransition} />
                        <Stats t={t} isVisible={statsVisible} />
                        <About t={t} />
                        <Projects t={t} />
                        <Skills t={t} />
                        <Experience t={t} />
                        <Education t={t} />
                        <Contact t={t} />
                    </main>
                    <Footer
                        t={t}
                        entityWave={entityWave}
                        entityBackflip={entityBackflip}
                        botMood={botMood}
                        cinematicEnabled={cinematicEnabled}
                        onToggleCinematic={toggleCinematic}
                    />
                    {showScrollTop && (
                        <button
                            onClick={() => window.scrollTo({top:0,behavior:'smooth'})}
                            style={{
                                position:'fixed',bottom:'30px',right:'30px',zIndex:1000,
                                width:'50px',height:'50px',borderRadius:'50%',
                                background:'var(--primary)',color:'white',border:'none',
                                fontSize:'1.2rem',cursor:'pointer',
                                boxShadow:'0 4px 20px rgba(108,92,231,0.5)',
                                transition:'all 0.3s',
                                display:'flex',alignItems:'center',justifyContent:'center'
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                            aria-label="Retour en haut"
                        >
                            ↑
                        </button>
                    )}
                </div>
            );
        }

        ReactDOM.createRoot(document.getElementById('root')).render(<App />);
