        // HOOKS PERSONNALISÉS
        // ================================================================

        // Particules au clic
        const useParticles = () => {
            useEffect(() => {
                const handleClick = (e) => {
                    const colors = ['var(--primary)', 'var(--primary2)', 'var(--accent)', 'var(--gold)', 'var(--red)'];
                    for (let i = 0; i < 8; i++) {
                        const particle = document.createElement('div');
                        particle.className = 'particle';
                        particle.style.left = e.clientX + 'px';
                        particle.style.top = e.clientY + 'px';
                        particle.style.width = (4 + Math.random() * 8) + 'px';
                        particle.style.height = particle.style.width;
                        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                        particle.style.animationDuration = (1 + Math.random() * 1.5) + 's';
                        const angle = Math.random() * Math.PI * 2;
                        const distance = 30 + Math.random() * 80;
                        particle.style.setProperty('--dx', Math.cos(angle) * distance + 'px');
                        particle.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance - 200}px) scale(0)`;
                        document.body.appendChild(particle);
                        setTimeout(() => particle.remove(), 2000);
                    }
                };
                document.addEventListener('click', handleClick);
                return () => document.removeEventListener('click', handleClick);
            }, []);
        };

        // Curseur glow
        const useCursorGlow = () => {
            useEffect(() => {
                const glow = document.createElement('div');
                glow.className = 'cursor-glow';
                document.body.appendChild(glow);
                const handleMove = (e) => {
                    glow.style.left = e.clientX + 'px';
                    glow.style.top = e.clientY + 'px';
                    glow.style.opacity = '1';
                };
                const handleLeave = () => { glow.style.opacity = '0'; };
                document.addEventListener('mousemove', handleMove);
                document.addEventListener('mouseleave', handleLeave);
                return () => {
                    document.removeEventListener('mousemove', handleMove);
                    document.removeEventListener('mouseleave', handleLeave);
                    glow.remove();
                };
            }, []);
        };

        // Particules ambiantes
        const useAmbientParticles = () => {
            useEffect(() => {
                const container = document.body;
                const particles = [];
                const colors = ['var(--primary)', 'var(--primary2)', 'var(--accent)'];
                for (let i = 0; i < 15; i++) {
                    const p = document.createElement('div');
                    p.className = 'ambient-particle';
                    p.style.left = Math.random() * 100 + '%';
                    p.style.top = (100 + Math.random() * 50) + '%';
                    p.style.width = (2 + Math.random() * 4) + 'px';
                    p.style.height = p.style.width;
                    p.style.background = colors[Math.floor(Math.random() * colors.length)];
                    p.style.animationDuration = (5 + Math.random() * 10) + 's';
                    p.style.animationDelay = Math.random() * 5 + 's';
                    p.style.opacity = (0.3 + Math.random() * 0.4);
                    container.appendChild(p);
                    particles.push(p);
                }
                return () => particles.forEach(p => p.remove());
            }, []);
        };

        // Scroll progress
        const useScrollProgress = () => {
            const [progress, setProgress] = useState(0);
            useEffect(() => {
                const handleScroll = () => {
                    const scrollTop = window.scrollY;
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const p = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
                    setProgress(p);
                };
                window.addEventListener('scroll', handleScroll, { passive: true });
                return () => window.removeEventListener('scroll', handleScroll);
            }, []);
            return progress;
        };

        // Theme
        const useTheme = () => {
            const [theme, setTheme] = useState(() => {
                const saved = localStorage.getItem('portfolio-theme');
                if (saved) return saved;
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'obsidian';
                if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'quartz';
                return 'cyber';
            });
            useEffect(() => {
                document.documentElement.setAttribute('data-theme', theme);
                localStorage.setItem('portfolio-theme', theme);
            }, [theme]);
            return [theme, setTheme];
        };

        // Language
        const useLanguage = () => {
            const [lang, setLang] = useState(() => {
                const saved = localStorage.getItem('portfolio-lang');
                if (saved) return saved;
                const nav = navigator.language?.split('-')[0];
                if (['fr','en','zh','ar'].includes(nav)) return nav;
                return 'fr';
            });
            useEffect(() => {
                document.documentElement.lang = lang;
                document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
                localStorage.setItem('portfolio-lang', lang);
            }, [lang]);
            const t = translations[lang] || translations.fr;
            return [lang, setLang, t];
        };

        // Terminal overlay
        const useTerminalTransition = () => {
            const trigger = useCallback((sectionName) => {
                const overlay = document.getElementById('terminal-overlay');
                if (!overlay) return;
                const cmd = overlay.querySelector('.cmd');
                if (cmd) cmd.textContent = `$ cd /${sectionName}`;
                overlay.classList.add('active');
                setTimeout(() => overlay.classList.remove('active'), 250);
            }, []);
            return trigger;
        };

        // Screen saver
        const useScreenSaver = () => {
            useEffect(() => {
                let timeout;
                const saver = document.getElementById('screen-saver');
                const codeChars = 'const deploy = () => { return await system.orchestrate({ nodes: Infinity, security: "paranoid" }); }; // ' + '01101000 01100101 01101100 01101100 01101111 ';
                const generateCode = () => {
                    let result = '';
                    for (let i = 0; i < 200; i++) {
                        result += codeChars[Math.floor(Math.random() * codeChars.length)];
                        if (Math.random() > 0.7) result += '\n';
                    }
                    return result;
                };
                const resetTimer = () => {
                    saver.classList.remove('active');
                    saver.textContent = '';
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        saver.textContent = generateCode();
                        saver.classList.add('active');
                    }, 30000);
                };
                resetTimer();
                window.addEventListener('mousemove', resetTimer);
                window.addEventListener('keydown', resetTimer);
                window.addEventListener('scroll', resetTimer);
                window.addEventListener('click', resetTimer);
                return () => {
                    clearTimeout(timeout);
                    window.removeEventListener('mousemove', resetTimer);
                    window.removeEventListener('keydown', resetTimer);
                    window.removeEventListener('scroll', resetTimer);
                    window.removeEventListener('click', resetTimer);
                };
            }, []);
        };

        // ================================================================
        // ENTITY CODE — Robot animé interactif (VERSION AMÉLIORÉE)
        // ================================================================
        const useEntityCode = () => {
            const BOT_TARGET_SELECTOR = '.project-card, .skill-tag, .btn, .contact-copy-item, .stat-card, .timeline-item, .section-title, .nav-logo';
            const BOT_PROFILE_KEY = 'portfolio-bot-profile-v2';
            const BOT_CINEMATIC_KEY = 'portfolio-bot-cinematic-v1';
            const SECTION_CONFIG = {
                hero: {
                    selectors: ['#hero .btn', '#hero .hero-name', '#hero .hero-badge'],
                    contextualAction: 'sprint',
                    moodHint: 'excited'
                },
                about: {
                    selectors: ['#about [style*="padding:"]', '#about .section-title'],
                    contextualAction: 'roam',
                    moodHint: 'focused'
                },
                projects: {
                    selectors: ['#projects .project-card', '#projects .project-tech span'],
                    contextualAction: 'inspect',
                    moodHint: 'curious'
                },
                skills: {
                    selectors: ['#skills .skill-tag'],
                    contextualAction: 'focus',
                    moodHint: 'focused'
                },
                experience: {
                    selectors: ['#experience .timeline-item'],
                    contextualAction: 'roam',
                    moodHint: 'focused'
                },
                education: {
                    selectors: ['#education [style*="padding:"]'],
                    contextualAction: 'roam',
                    moodHint: 'focused'
                },
                contact: {
                    selectors: ['#contact .contact-copy-item', '#contact .btn'],
                    contextualAction: 'salute',
                    moodHint: 'excited'
                }
            };
            const MOOD_LABELS = {
                curious: '🔎 curious',
                excited: '⚡ excited',
                tired: '💤 tired',
                focused: '🎯 focus'
            };
            const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
            const safeParse = (value, fallback) => {
                try {
                    if (!value) return fallback;
                    const parsed = JSON.parse(value);
                    return parsed && typeof parsed === 'object' ? parsed : fallback;
                } catch {
                    return fallback;
                }
            };
            const expressionFromMood = (botMood) => {
                if (botMood === 'curious') return 'curious';
                if (botMood === 'excited') return 'happy';
                if (botMood === 'tired') return 'tired';
                return 'neutral';
            };

            const [mood, setMood] = useState(() => {
                const persisted = safeParse(localStorage.getItem(BOT_PROFILE_KEY), {});
                return persisted.mood || 'curious';
            });
            const [cinematicEnabled, setCinematicEnabled] = useState(() => {
                const persisted = localStorage.getItem(BOT_CINEMATIC_KEY);
                if (persisted === null) return true;
                return persisted !== '0';
            });

            const moodRef = useRef(mood);
            const cinematicRef = useRef(cinematicEnabled);
            const rafRef = useRef(null);
            const idleTimerRef = useRef(null);
            const moodCooldownRef = useRef(0);

            const persistedProfile = useMemo(() => {
                return safeParse(localStorage.getItem(BOT_PROFILE_KEY), {});
            }, []);

            const stateRef = useRef({
                visible: false,
                x: -80,
                y: 0,
                direction: 1,
                anim: 'idle',
                expression: expressionFromMood(mood),
                travel: null,
                previousX: -80,
                scrollSpeed: 0,
                scrollDirection: 1,
                lastScrollY: window.scrollY,
                lastActionAt: 0,
                lastScrollReactAt: 0,
                lastInteractionAt: performance.now(),
                nextAutoAt: performance.now() + 1200,
                profile: {
                    totalScroll: persistedProfile.totalScroll || 0,
                    totalClicks: persistedProfile.totalClicks || 0,
                    interactionBurst: persistedProfile.interactionBurst || 0,
                    lastSection: persistedProfile.lastSection || 'hero',
                    lastSectionEnteredAt: performance.now(),
                    sectionVisits: persistedProfile.sectionVisits || { hero: 1 },
                    sectionDwellMs: persistedProfile.sectionDwellMs || {},
                    clicksBySection: persistedProfile.clicksBySection || {},
                    mood: persistedProfile.mood || mood
                }
            });

            useEffect(() => {
                moodRef.current = mood;
            }, [mood]);

            useEffect(() => {
                cinematicRef.current = cinematicEnabled;
                localStorage.setItem(BOT_CINEMATIC_KEY, cinematicEnabled ? '1' : '0');
            }, [cinematicEnabled]);

            const persistProfile = useCallback(() => {
                const profile = stateRef.current.profile;
                const payload = {
                    ...profile,
                    mood: moodRef.current,
                    cinematicEnabled: cinematicRef.current,
                    updatedAt: Date.now()
                };
                localStorage.setItem(BOT_PROFILE_KEY, JSON.stringify(payload));
            }, []);

            const getEntityMetrics = useCallback(() => {
                const entity = document.getElementById('entity-code');
                const width = entity?.offsetWidth || 55;
                const height = entity?.offsetHeight || 65;
                return { entity, width, height };
            }, []);

            const updateMoodUi = useCallback(() => {
                const entity = document.getElementById('entity-code');
                if (!entity) return;
                entity.dataset.moodLabel = MOOD_LABELS[moodRef.current] || MOOD_LABELS.curious;
                entity.dataset.cinematic = cinematicRef.current ? 'on' : 'off';
            }, []);

            const setMoodState = useCallback((nextMood, force = false) => {
                if (!nextMood || nextMood === moodRef.current) return;
                const now = performance.now();
                if (!force && now - moodCooldownRef.current < 1200) return;
                moodCooldownRef.current = now;
                moodRef.current = nextMood;
                stateRef.current.profile.mood = nextMood;
                stateRef.current.expression = expressionFromMood(nextMood);
                setMood(nextMood);
                persistProfile();
                updateMoodUi();
            }, [persistProfile, updateMoodUi]);

            const getGroundY = useCallback((height) => {
                const baseOffset = window.innerWidth <= 480 ? 42 : window.innerWidth <= 768 ? 52 : 62;
                return Math.max(30, window.innerHeight - height - baseOffset);
            }, []);

            const updateRope = useCallback((active, from, to) => {
                const ropeLayer = document.getElementById('entity-rope-layer');
                const ropeLine = document.getElementById('entity-rope-line');
                const ropeAnchor = document.getElementById('entity-rope-anchor');
                if (!ropeLayer || !ropeLine || !ropeAnchor) return;

                if (!active || !from || !to || !cinematicRef.current) {
                    ropeLayer.classList.remove('active');
                    ropeLine.setAttribute('x1', '0');
                    ropeLine.setAttribute('y1', '0');
                    ropeLine.setAttribute('x2', '0');
                    ropeLine.setAttribute('y2', '0');
                    ropeAnchor.setAttribute('cx', '0');
                    ropeAnchor.setAttribute('cy', '0');
                    return;
                }

                ropeLayer.classList.add('active');
                ropeLine.setAttribute('x1', String(from.x));
                ropeLine.setAttribute('y1', String(from.y));
                ropeLine.setAttribute('x2', String(to.x));
                ropeLine.setAttribute('y2', String(to.y));
                ropeAnchor.setAttribute('cx', String(to.x));
                ropeAnchor.setAttribute('cy', String(to.y));
            }, []);

            const getBotCenter = useCallback((x, y, width, height) => {
                return { x: x + width * 0.52, y: y + height * 0.72 };
            }, []);

            const getSectionContext = useCallback(() => {
                const centerY = window.innerHeight * 0.45;
                const sectionIds = Object.keys(SECTION_CONFIG);
                let winner = null;
                let bestDistance = Number.POSITIVE_INFINITY;

                sectionIds.forEach((id) => {
                    const element = document.getElementById(id);
                    if (!element) return;
                    const rect = element.getBoundingClientRect();
                    const visible = rect.bottom > 0 && rect.top < window.innerHeight;
                    if (!visible) return;
                    const sectionCenter = rect.top + rect.height / 2;
                    const containsCenter = rect.top <= centerY && rect.bottom >= centerY;
                    const distance = containsCenter ? 0 : Math.abs(sectionCenter - centerY);
                    if (distance < bestDistance) {
                        bestDistance = distance;
                        winner = { id, element, rect, config: SECTION_CONFIG[id] };
                    }
                });

                return winner || { id: 'hero', element: document.getElementById('hero'), rect: null, config: SECTION_CONFIG.hero };
            }, []);

            const trackSection = useCallback(() => {
                const context = getSectionContext();
                if (!context) return null;
                const profile = stateRef.current.profile;
                const now = performance.now();
                const previousSection = profile.lastSection;

                if (previousSection !== context.id) {
                    const elapsed = Math.max(0, now - (profile.lastSectionEnteredAt || now));
                    profile.sectionDwellMs[previousSection] = (profile.sectionDwellMs[previousSection] || 0) + elapsed;
                    profile.lastSection = context.id;
                    profile.lastSectionEnteredAt = now;
                    profile.sectionVisits[context.id] = (profile.sectionVisits[context.id] || 0) + 1;
                    persistProfile();
                }

                return context;
            }, [getSectionContext, persistProfile]);

            const evaluateMoodFromParcours = useCallback(() => {
                const profile = stateRef.current.profile;
                const currentSection = profile.lastSection || 'hero';
                const inactiveFor = performance.now() - stateRef.current.lastInteractionAt;

                if (inactiveFor > 12000) {
                    setMoodState('tired');
                    return;
                }

                if (profile.interactionBurst >= 5 || Math.abs(stateRef.current.scrollSpeed) > 95) {
                    setMoodState('excited');
                    return;
                }

                const curiosityScore = (profile.clicksBySection.projects || 0) + (profile.sectionVisits.projects || 0);
                if ((currentSection === 'projects' || currentSection === 'skills') && curiosityScore >= 3) {
                    setMoodState('curious');
                    return;
                }

                const focusedDwell = profile.sectionDwellMs[currentSection] || 0;
                if (focusedDwell > 14000) {
                    setMoodState('focused');
                    return;
                }

                if (currentSection === 'hero') {
                    setMoodState('excited');
                    return;
                }

                if (currentSection === 'contact') {
                    setMoodState('focused');
                }
            }, [setMoodState]);

            const getTargetsFromSelectors = useCallback((selectors) => {
                const nodes = [];
                selectors.forEach((selector) => {
                    document.querySelectorAll(selector).forEach((node) => nodes.push(node));
                });

                const seen = new Set();
                return nodes
                    .filter((node) => {
                        if (seen.has(node)) return false;
                        seen.add(node);
                        return true;
                    })
                    .map((element) => {
                        const rect = element.getBoundingClientRect();
                        if (rect.width < 14 || rect.height < 14) return null;
                        if (rect.bottom < 0 || rect.top > window.innerHeight) return null;
                        if (rect.right < 0 || rect.left > window.innerWidth) return null;
                        return {
                            element,
                            x: rect.left + rect.width / 2,
                            y: rect.top + Math.min(rect.height * 0.45, 84),
                            rect
                        };
                    })
                    .filter(Boolean);
            }, []);

            const getVisibleTargets = useCallback(() => {
                return getTargetsFromSelectors([BOT_TARGET_SELECTOR]);
            }, [getTargetsFromSelectors]);

            const pickTarget = useCallback((reason, sectionId = null) => {
                const profileSection = sectionId || stateRef.current.profile.lastSection || 'hero';
                const sectionConfig = SECTION_CONFIG[profileSection] || SECTION_CONFIG.hero;
                let targets = getTargetsFromSelectors(sectionConfig.selectors);

                if (!targets.length) {
                    targets = getVisibleTargets();
                }

                if (!targets.length) {
                    const { width, height } = getEntityMetrics();
                    const groundY = getGroundY(height);
                    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
                    const scrollRatio = window.scrollY / maxScroll;
                    return {
                        element: null,
                        x: clamp(20 + scrollRatio * (window.innerWidth - width - 40), 20, window.innerWidth - 20),
                        y: groundY,
                        rect: null
                    };
                }

                if (reason === 'scroll-down') {
                    const forward = targets.filter((target) => target.y > stateRef.current.y + 24);
                    if (forward.length) targets = forward;
                }
                if (reason === 'scroll-up') {
                    const backward = targets.filter((target) => target.y < stateRef.current.y + 36);
                    if (backward.length) targets = backward;
                }

                return targets[Math.floor(Math.random() * targets.length)];
            }, [getEntityMetrics, getGroundY, getTargetsFromSelectors, getVisibleTargets]);

            const computeTravel = useCallback((state, target, preferredType = 'auto', options = {}) => {
                const { width, height } = getEntityMetrics();
                const groundY = getGroundY(height);
                const endX = clamp(target.x - width / 2, 10, Math.max(10, window.innerWidth - width - 10));
                const endY = clamp(target.y - height * 0.68, 40, groundY);
                const dx = endX - state.x;
                const dy = endY - state.y;
                const distance = Math.hypot(dx, dy);

                let type = preferredType;
                if (type === 'auto') {
                    if (distance > 320) type = 'grapple';
                    else if (distance > 170) type = 'jump';
                    else type = 'run';
                }
                if (!cinematicRef.current && type === 'grapple') {
                    type = 'jump';
                }

                const speedMultiplier = options.speedMultiplier || 1;
                const baseDuration = type === 'grapple' ? 360 : type === 'jump' ? 560 : 460;
                let duration = clamp((baseDuration + distance * (type === 'run' ? 1.25 : 0.72)) / speedMultiplier, 220, 1100);

                let arcHeight = type === 'run' ? 0 : clamp(distance * 0.24, 24, type === 'grapple' ? 145 : 110);
                if (!cinematicRef.current) {
                    arcHeight *= 0.45;
                    duration *= 0.84;
                }

                const anticipationMs = cinematicRef.current ? (type === 'run' ? 90 : 120) : 0;
                return {
                    type,
                    startX: state.x,
                    startY: state.y,
                    endX,
                    endY,
                    startAt: performance.now(),
                    duration,
                    anticipationMs,
                    arcHeight,
                    anchor: { x: target.x, y: target.y },
                    contextual: options.contextualAction || null,
                    forceExpression: options.forceExpression || null,
                    sectionId: options.sectionId || state.profile.lastSection,
                    cinematic: cinematicRef.current
                };
            }, [getEntityMetrics, getGroundY]);

            const updateEntityAppearance = useCallback((timeStamp = performance.now()) => {
                const { entity } = getEntityMetrics();
                if (!entity) return;
                const state = stateRef.current;

                entity.style.opacity = state.visible ? '1' : '0';
                entity.style.left = `${state.x}px`;
                entity.style.top = `${state.y}px`;

                updateMoodUi();

                const moveX = state.x - state.previousX;
                state.previousX = state.x;
                const tilt = clamp(moveX * 0.34, -12, 12);
                const jumpTilt = state.anim === 'jumping' || state.anim === 'grappling' ? -8 : 0;
                const runScale = state.anim === 'running' ? 1.03 : 1;
                const microBounce = state.anim === 'running' ? Math.sin(timeStamp / 70) * 1.2 : 0;
                const cinematicPitch = cinematicRef.current && (state.anim === 'jumping' || state.anim === 'grappling') ? 8 : 0;

                entity.style.transform = `translate3d(0, ${microBounce}px, 0) rotateX(${cinematicPitch}deg) rotateZ(${tilt + jumpTilt}deg) scale(${runScale})`;

                entity.classList.toggle('visible', state.visible);
                entity.classList.toggle('idle-float', state.anim === 'idle');
                entity.classList.toggle('running', state.anim === 'running');
                entity.classList.toggle('jumping', state.anim === 'jumping');
                entity.classList.toggle('grappling', state.anim === 'grappling');

                const bodyGroup = entity.querySelector('#entity-body-group');
                if (bodyGroup) {
                    bodyGroup.style.transform = state.direction === -1 ? 'scaleX(-1)' : 'scaleX(1)';
                    bodyGroup.style.transition = 'transform 0.22s ease';
                }

                const armSwingLeft = entity.querySelector('.arm-swing-left');
                const armSwingRight = entity.querySelector('.arm-swing-right');
                const legSwingLeft = entity.querySelector('.leg-swing-left');
                const legSwingRight = entity.querySelector('.leg-swing-right');
                const dust = entity.querySelector('.entity-dust');
                const jetpack = entity.querySelector('.entity-jetpack');
                const moving = state.anim === 'running' || state.anim === 'jumping' || state.anim === 'grappling';
                const animDuration = state.anim === 'running' ? '0.34s' : state.anim === 'grappling' ? '0.42s' : state.anim === 'jumping' ? '0.5s' : '0.8s';

                [armSwingLeft, armSwingRight, legSwingLeft, legSwingRight].forEach((el) => {
                    if (el) el.setAttribute('dur', moving ? animDuration : '0.8s');
                });
                if (dust) dust.style.opacity = state.anim === 'running' ? '1' : state.anim === 'jumping' ? '0.45' : '0';
                if (jetpack) jetpack.style.opacity = state.anim === 'grappling' ? '1' : state.anim === 'running' ? '0.35' : '0';

                const mouthNeutral = entity.querySelector('.mouth-neutral');
                const mouthHappy = entity.querySelector('.mouth-happy');
                const mouthSurprised = entity.querySelector('.mouth-surprised');
                const waveHand = entity.querySelector('.entity-wave-hand');
                const loupe = entity.querySelector('.entity-loupe');
                const thumbsUp = entity.querySelector('.entity-thumbs-up');

                [mouthNeutral, mouthHappy, mouthSurprised, waveHand, loupe, thumbsUp].forEach((el) => {
                    if (el) el.style.opacity = '0';
                });

                if (mouthSurprised) mouthSurprised.setAttribute('ry', '6');

                switch (state.expression) {
                    case 'happy':
                        if (mouthHappy) mouthHappy.style.opacity = '1';
                        if (thumbsUp) thumbsUp.style.opacity = '1';
                        break;
                    case 'surprised':
                        if (mouthSurprised) mouthSurprised.style.opacity = '1';
                        break;
                    case 'curious':
                        if (loupe) loupe.style.opacity = '1';
                        if (mouthSurprised) mouthSurprised.style.opacity = '1';
                        break;
                    case 'tired':
                        if (mouthSurprised) {
                            mouthSurprised.style.opacity = '1';
                            mouthSurprised.setAttribute('ry', '4');
                        }
                        break;
                    default:
                        if (mouthNeutral) mouthNeutral.style.opacity = '1';
                }

                if (state.anim === 'waving') {
                    if (waveHand) waveHand.style.opacity = '1';
                    if (mouthHappy) mouthHappy.style.opacity = '1';
                    if (thumbsUp) thumbsUp.style.opacity = '0';
                }
            }, [getEntityMetrics, updateMoodUi]);

            const scheduleTiredState = useCallback(() => {
                clearTimeout(idleTimerRef.current);
                idleTimerRef.current = setTimeout(() => {
                    const state = stateRef.current;
                    const inactiveFor = performance.now() - state.lastInteractionAt;
                    if (!state.travel && inactiveFor > 12000) {
                        setMoodState('tired');
                        state.anim = 'idle';
                        state.expression = 'tired';
                        updateEntityAppearance();
                    }
                }, 12500);
            }, [setMoodState, updateEntityAppearance]);

            const applyArrivalAction = useCallback((travel) => {
                const state = stateRef.current;
                if (!travel || !travel.contextual) {
                    state.expression = expressionFromMood(moodRef.current);
                    return;
                }

                if (travel.contextual === 'inspect') {
                    state.expression = 'curious';
                    setTimeout(() => {
                        if (!state.travel) state.expression = expressionFromMood(moodRef.current);
                    }, 950);
                    return;
                }

                if (travel.contextual === 'salute') {
                    state.anim = 'waving';
                    state.expression = 'happy';
                    setTimeout(() => {
                        if (!state.travel) {
                            state.anim = 'idle';
                            state.expression = expressionFromMood(moodRef.current);
                        }
                    }, 1300);
                    return;
                }

                if (travel.contextual === 'sprint') {
                    state.anim = 'running';
                    state.expression = 'happy';
                    setTimeout(() => {
                        if (!state.travel) {
                            state.anim = 'idle';
                            state.expression = expressionFromMood(moodRef.current);
                        }
                    }, 380);
                    return;
                }

                if (travel.contextual === 'focus') {
                    state.expression = 'neutral';
                    return;
                }

                state.expression = expressionFromMood(moodRef.current);
            }, []);

            const triggerAction = useCallback((reason, forcedTarget = null, preferredType = 'auto', options = {}) => {
                const state = stateRef.current;
                if (!state.visible) return;
                const now = performance.now();
                if (now - state.lastActionAt < 170 && reason !== 'click') return;

                const sectionId = options.sectionId || state.profile.lastSection;
                const target = forcedTarget || pickTarget(reason, sectionId);
                if (!target) return;

                const travel = computeTravel(state, target, preferredType, options);
                state.travel = travel;
                state.direction = travel.endX >= state.x ? 1 : -1;
                state.anim = travel.type === 'run' ? 'running' : travel.type === 'jump' ? 'jumping' : 'grappling';
                state.expression = travel.forceExpression || (reason === 'click' ? 'surprised' : expressionFromMood(moodRef.current));
                state.lastActionAt = now;
                state.lastInteractionAt = now;
                state.nextAutoAt = now + 900 + Math.random() * 1600;
                state.profile.interactionBurst = Math.min(8, (state.profile.interactionBurst || 0) + 1);

                const { width, height } = getEntityMetrics();
                if (travel.type === 'grapple' && cinematicRef.current) {
                    updateRope(true, getBotCenter(state.x, state.y, width, height), travel.anchor);
                } else {
                    updateRope(false);
                }

                evaluateMoodFromParcours();
                persistProfile();
            }, [computeTravel, evaluateMoodFromParcours, getBotCenter, getEntityMetrics, persistProfile, pickTarget, updateRope]);

            useEffect(() => {
                const animate = (timeStamp) => {
                    const state = stateRef.current;

                    if (state.visible && state.travel) {
                        const travel = state.travel;
                        const elapsed = timeStamp - travel.startAt;

                        if (elapsed < travel.anticipationMs) {
                            const anticipationProgress = clamp(elapsed / travel.anticipationMs, 0, 1);
                            const anticipationOffset = (1 - anticipationProgress) * (travel.type === 'run' ? 8 : 12) * (state.direction === 1 ? -1 : 1);
                            state.x = travel.startX + anticipationOffset;
                            state.y = travel.startY + Math.sin(anticipationProgress * Math.PI) * 1.5;
                        } else {
                            const moveElapsed = elapsed - travel.anticipationMs;
                            const progress = clamp(moveElapsed / travel.duration, 0, 1);
                            const eased = travel.cinematic
                                ? (progress < 0.5
                                    ? 4 * progress * progress * progress
                                    : 1 - Math.pow(-2 * progress + 2, 3) / 2)
                                : 1 - Math.pow(1 - progress, 2);

                            const x = travel.startX + (travel.endX - travel.startX) * eased;
                            let y = travel.startY + (travel.endY - travel.startY) * eased;
                            if (travel.type !== 'run') {
                                y -= Math.sin(Math.PI * eased) * travel.arcHeight;
                            }

                            state.x = x;
                            state.y = y;
                            state.direction = x >= state.previousX ? 1 : -1;

                            if (travel.type === 'grapple' && cinematicRef.current) {
                                const { width, height } = getEntityMetrics();
                                const from = getBotCenter(state.x, state.y, width, height);
                                const sway = Math.sin(timeStamp / 80) * 6;
                                updateRope(true, from, { x: travel.anchor.x + sway, y: travel.anchor.y });
                            }

                            if (progress >= 1) {
                                state.x = travel.endX;
                                state.y = travel.endY;
                                state.travel = null;
                                state.anim = 'idle';
                                applyArrivalAction(travel);
                                updateRope(false);
                                scheduleTiredState();
                                persistProfile();
                            }
                        }
                    } else if (state.visible && timeStamp >= state.nextAutoAt) {
                        const context = trackSection();
                        const contextId = context?.id || state.profile.lastSection || 'hero';
                        const contextualAction = SECTION_CONFIG[contextId]?.contextualAction || 'roam';

                        if (contextId === 'hero') {
                            triggerAction('section-hero', null, 'run', {
                                sectionId: contextId,
                                contextualAction: 'sprint',
                                speedMultiplier: cinematicRef.current ? 1.36 : 1.14,
                                forceExpression: 'happy'
                            });
                        } else if (contextId === 'projects') {
                            triggerAction('section-projects', null, cinematicRef.current ? 'grapple' : 'jump', {
                                sectionId: contextId,
                                contextualAction: 'inspect',
                                forceExpression: 'curious'
                            });
                        } else if (contextId === 'contact') {
                            triggerAction('section-contact', null, 'run', {
                                sectionId: contextId,
                                contextualAction: 'salute',
                                speedMultiplier: 1.18,
                                forceExpression: 'happy'
                            });
                        } else if (contextId === 'skills') {
                            triggerAction('section-skills', null, 'jump', {
                                sectionId: contextId,
                                contextualAction: 'focus',
                                forceExpression: 'neutral'
                            });
                        } else {
                            triggerAction('section-default', null, 'auto', {
                                sectionId: contextId,
                                contextualAction
                            });
                        }

                        evaluateMoodFromParcours();
                    }

                    updateEntityAppearance(timeStamp);
                    rafRef.current = requestAnimationFrame(animate);
                };

                rafRef.current = requestAnimationFrame(animate);
                return () => {
                    if (rafRef.current) cancelAnimationFrame(rafRef.current);
                };
            }, [applyArrivalAction, evaluateMoodFromParcours, getBotCenter, getEntityMetrics, persistProfile, scheduleTiredState, trackSection, triggerAction, updateEntityAppearance, updateRope]);

            useEffect(() => {
                const timer = setTimeout(() => {
                    const state = stateRef.current;
                    const { entity, width, height } = getEntityMetrics();
                    state.visible = true;
                    state.x = -width;
                    state.y = getGroundY(height);
                    state.previousX = state.x;
                    state.lastScrollY = window.scrollY;
                    state.lastInteractionAt = performance.now();
                    state.nextAutoAt = performance.now() + 700;

                    if (entity) {
                        entity.classList.add('bouncing');
                        setTimeout(() => entity.classList.remove('bouncing'), 800);
                    }

                    trackSection();
                    triggerAction('spawn', { x: Math.max(90, window.innerWidth * 0.26), y: state.y + height * 0.75, element: null }, 'run', {
                        sectionId: 'hero',
                        contextualAction: 'sprint',
                        speedMultiplier: 1.2,
                        forceExpression: 'happy'
                    });

                    evaluateMoodFromParcours();
                    scheduleTiredState();
                    updateMoodUi();
                }, 1100);

                return () => clearTimeout(timer);
            }, [evaluateMoodFromParcours, getEntityMetrics, getGroundY, scheduleTiredState, trackSection, triggerAction, updateMoodUi]);

            useEffect(() => {
                const handleScroll = () => {
                    const state = stateRef.current;
                    const now = performance.now();
                    const currentScroll = window.scrollY;
                    const delta = currentScroll - state.lastScrollY;
                    state.lastScrollY = currentScroll;
                    state.scrollSpeed = delta;
                    state.scrollDirection = delta >= 0 ? 1 : -1;
                    state.lastInteractionAt = now;
                    state.profile.totalScroll += Math.abs(delta);
                    state.profile.interactionBurst = Math.min(8, (state.profile.interactionBurst || 0) + (Math.abs(delta) > 20 ? 1 : 0));

                    const context = trackSection();
                    const contextId = context?.id || state.profile.lastSection;

                    if (Math.abs(delta) < 8 || now - state.lastScrollReactAt < 180) {
                        evaluateMoodFromParcours();
                        scheduleTiredState();
                        return;
                    }
                    state.lastScrollReactAt = now;

                    const intent = delta > 0 ? 'scroll-down' : 'scroll-up';
                    let type = Math.abs(delta) > 95 ? 'grapple' : Math.abs(delta) > 28 ? 'jump' : 'run';
                    if (!cinematicRef.current && type === 'grapple') {
                        type = 'jump';
                    }

                    triggerAction(intent, null, type, {
                        sectionId: contextId,
                        contextualAction: SECTION_CONFIG[contextId]?.contextualAction
                    });

                    evaluateMoodFromParcours();
                    scheduleTiredState();
                    persistProfile();
                };

                window.addEventListener('scroll', handleScroll, { passive: true });
                return () => window.removeEventListener('scroll', handleScroll);
            }, [evaluateMoodFromParcours, persistProfile, scheduleTiredState, trackSection, triggerAction]);

            useEffect(() => {
                const handleClick = (event) => {
                    if (!(event.target instanceof Element)) return;
                    const state = stateRef.current;
                    const target = event.target.closest(BOT_TARGET_SELECTOR);
                    if (!target) return;
                    if (target.closest('#entity-code') || target.closest('#mini-console')) return;

                    const sectionElement = target.closest('section');
                    const sectionId = sectionElement?.id || (target.closest('.hero') ? 'hero' : state.profile.lastSection || 'hero');
                    const contextualAction = SECTION_CONFIG[sectionId]?.contextualAction || 'roam';

                    const rect = target.getBoundingClientRect();
                    const point = {
                        x: rect.left + rect.width / 2,
                        y: rect.top + Math.min(rect.height * 0.42, 75),
                        element: target,
                        rect
                    };

                    let type = 'jump';
                    if (sectionId === 'projects') type = cinematicRef.current ? 'grapple' : 'jump';
                    if (sectionId === 'hero') type = 'run';
                    if (sectionId === 'contact') type = 'run';

                    state.profile.totalClicks += 1;
                    state.profile.clicksBySection[sectionId] = (state.profile.clicksBySection[sectionId] || 0) + 1;
                    state.profile.interactionBurst = Math.min(8, (state.profile.interactionBurst || 0) + 2);
                    state.lastInteractionAt = performance.now();

                    triggerAction('click', point, type, {
                        sectionId,
                        contextualAction,
                        speedMultiplier: sectionId === 'hero' ? 1.2 : 1,
                        forceExpression: sectionId === 'projects' ? 'curious' : sectionId === 'contact' ? 'happy' : 'surprised'
                    });

                    evaluateMoodFromParcours();
                    scheduleTiredState();
                    persistProfile();
                };

                document.addEventListener('click', handleClick, true);
                return () => document.removeEventListener('click', handleClick, true);
            }, [evaluateMoodFromParcours, persistProfile, scheduleTiredState, triggerAction]);

            useEffect(() => {
                const handleMouseOver = (event) => {
                    if (!(event.target instanceof Element)) return;
                    const state = stateRef.current;
                    const target = event.target.closest(BOT_TARGET_SELECTOR);
                    if (!target) return;
                    if (target.closest('.project-card')) state.expression = 'curious';
                    else if (target.closest('.skill-tag')) state.expression = 'happy';
                    else if (target.closest('.contact-copy-item')) state.expression = 'surprised';
                    else state.expression = expressionFromMood(moodRef.current);
                    state.lastInteractionAt = performance.now();
                };

                const handleMouseOut = (event) => {
                    if (!(event.target instanceof Element)) return;
                    const state = stateRef.current;
                    if (event.target.closest(BOT_TARGET_SELECTOR) && !state.travel && state.anim !== 'waving') {
                        state.expression = expressionFromMood(moodRef.current);
                    }
                };

                document.addEventListener('mouseover', handleMouseOver);
                document.addEventListener('mouseout', handleMouseOut);
                return () => {
                    document.removeEventListener('mouseover', handleMouseOver);
                    document.removeEventListener('mouseout', handleMouseOut);
                };
            }, []);

            useEffect(() => {
                const handleResize = () => {
                    const state = stateRef.current;
                    const { width, height } = getEntityMetrics();
                    const groundY = getGroundY(height);
                    state.x = clamp(state.x, 8, Math.max(8, window.innerWidth - width - 8));
                    state.y = clamp(state.y, 30, groundY);
                };
                window.addEventListener('resize', handleResize);
                return () => window.removeEventListener('resize', handleResize);
            }, [getEntityMetrics, getGroundY]);

            const setCinematicMode = useCallback((enabled) => {
                const value = Boolean(enabled);
                setCinematicEnabled(value);
                cinematicRef.current = value;
                const state = stateRef.current;
                state.nextAutoAt = performance.now() + 220;
                if (!value) {
                    updateRope(false);
                }
                updateMoodUi();
            }, [updateMoodUi, updateRope]);

            const toggleCinematic = useCallback(() => {
                setCinematicMode(!cinematicRef.current);
            }, [setCinematicMode]);

            const wave = useCallback(() => {
                const state = stateRef.current;
                state.travel = null;
                state.anim = 'waving';
                state.expression = 'happy';
                state.lastInteractionAt = performance.now();
                setMoodState('excited');
                setTimeout(() => {
                    state.anim = 'idle';
                    state.expression = expressionFromMood(moodRef.current);
                    scheduleTiredState();
                }, 1700);
            }, [scheduleTiredState, setMoodState]);

            const backflip = useCallback(() => {
                const entity = document.getElementById('entity-code');
                if (!entity) return;
                const state = stateRef.current;
                state.travel = null;
                state.anim = 'jumping';
                state.expression = 'surprised';
                state.lastInteractionAt = performance.now();
                setMoodState('excited');
                const bodyGroup = entity.querySelector('#entity-body-group');
                if (bodyGroup) {
                    bodyGroup.style.transition = 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                    bodyGroup.style.transform = 'rotate(360deg)';
                    setTimeout(() => {
                        bodyGroup.style.transition = 'transform 0.3s ease';
                        bodyGroup.style.transform = state.direction === -1 ? 'scaleX(-1)' : 'scaleX(1)';
                        state.anim = 'idle';
                        state.expression = expressionFromMood(moodRef.current);
                        scheduleTiredState();
                    }, 600);
                }
            }, [scheduleTiredState, setMoodState]);

            useEffect(() => {
                return () => {
                    clearTimeout(idleTimerRef.current);
                    updateRope(false);
                    if (rafRef.current) cancelAnimationFrame(rafRef.current);
                    persistProfile();
                };
            }, [persistProfile, updateRope]);

            return { wave, backflip, mood, cinematicEnabled, toggleCinematic, setCinematicMode };
        };

