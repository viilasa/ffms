import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clientsData from '../data/clients.json';
import './OurClients.css';

const SLIDE_DURATION = 6000;

const serviceIcons = {
    'Housekeeping & Janitor Services': '🧹',
    'Housekeeping Services': '🧹',
    'HVAC Maintenance': '❄️',
    'ETP & STP Operations': '🔬',
    'Pest Control': '🛡️',
    'Waste Management': '♻️',
    'Front Desk Management': '🛎️',
    'Security Services': '🔒',
    'Gardening & Horticulture': '🌿',
    'Electrical Maintenance': '⚡',
    'Mechanical Maintenance': '⚙️',
    'Water Treatment Plant Maintenance': '💧',
    'Plumbing': '🔧',
    'Catering & Pantry Services': '🍽️',
};

const OurClients = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);
    const thumbnailRef = useRef(null);
    const progressRef = useRef(null);
    const startTimeRef = useRef(Date.now());
    const clients = clientsData.clients;

    const goToSlide = useCallback((index) => {
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
        setProgress(0);
        startTimeRef.current = Date.now();
    }, [activeIndex]);

    const goNext = useCallback(() => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % clients.length);
        setProgress(0);
        startTimeRef.current = Date.now();
    }, [clients.length]);

    const goPrev = useCallback(() => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + clients.length) % clients.length);
        setProgress(0);
        startTimeRef.current = Date.now();
    }, [clients.length]);

    // Auto-slide
    useEffect(() => {
        if (isPaused) return;

        const animate = () => {
            const elapsed = Date.now() - startTimeRef.current;
            const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
            setProgress(pct);

            if (pct >= 100) {
                goNext();
                return;
            }
            progressRef.current = requestAnimationFrame(animate);
        };

        progressRef.current = requestAnimationFrame(animate);
        return () => {
            if (progressRef.current) cancelAnimationFrame(progressRef.current);
        };
    }, [isPaused, activeIndex, goNext]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
            if (e.key === ' ') { e.preventDefault(); setIsPaused(p => !p); }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [goNext, goPrev]);

    // Scroll thumbnail into view
    useEffect(() => {
        if (thumbnailRef.current) {
            const activeThumb = thumbnailRef.current.querySelector('.thumb-active');
            if (activeThumb) {
                activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }, [activeIndex]);

    const slideVariants = {
        enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.97 }),
        center: { x: 0, opacity: 1, scale: 1 },
        exit: (dir) => ({ x: dir < 0 ? 60 : -60, opacity: 0, scale: 0.97 }),
    };

    const activeClient = clients[activeIndex];

    return (
        <div
            className="clients-page"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => { setIsPaused(false); startTimeRef.current = Date.now() - (progress / 100) * SLIDE_DURATION; }}
        >
            {/* PPT-style Full Presentation */}
            <section className="ppt-presentation">
                {/* Top Bar */}
                <div className="ppt-topbar">
                    <div className="ppt-topbar-left">
                        <span className="ppt-brand-dot"></span>
                        <span className="ppt-brand-sub">Our Clients</span>
                    </div>
                    <div className="ppt-topbar-center">
                        <span className="ppt-counter">{String(activeIndex + 1).padStart(2, '0')}</span>
                        <span className="ppt-counter-sep">/</span>
                        <span className="ppt-counter-total">{String(clients.length).padStart(2, '0')}</span>
                    </div>
                    <div className="ppt-topbar-right">
                        <button
                            className={`ppt-playpause ${isPaused ? 'paused' : ''}`}
                            onClick={() => { setIsPaused(p => !p); if (isPaused) startTimeRef.current = Date.now() - (progress / 100) * SLIDE_DURATION; }}
                            aria-label={isPaused ? 'Play' : 'Pause'}
                        >
                            {isPaused ? (
                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            ) : (
                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="ppt-progress-track">
                    <motion.div
                        className="ppt-progress-fill"
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0 }}
                    />
                </div>

                {/* Slide Area */}
                <div className="ppt-slide-area">
                    {/* Arrows */}
                    <button className="ppt-arrow ppt-arrow-left" onClick={goPrev} aria-label="Previous">
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    <button className="ppt-arrow ppt-arrow-right" onClick={goNext} aria-label="Next">
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>

                    {/* Slide */}
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={activeIndex}
                            className="ppt-slide"
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                        >
                            {/* Decorative elements */}
                            <div className="ppt-slide-accent"></div>
                            <div className="ppt-slide-grid-bg"></div>

                            <div className="ppt-slide-inner">
                                {/* Left - Client Identity */}
                                <div className="ppt-left">
                                    <div className="ppt-logo-card">
                                        <img
                                            src={activeClient.image}
                                            alt={activeClient.name}
                                            className="ppt-logo-img"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <div className="ppt-logo-fallback" style={{ display: 'none' }}>
                                            {activeClient.name.charAt(0)}
                                        </div>
                                    </div>
                                    <motion.h2
                                        className="ppt-client-name"
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.15, duration: 0.4 }}
                                    >
                                        {activeClient.name}
                                    </motion.h2>
                                    <motion.div
                                        className="ppt-client-location"
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.25, duration: 0.4 }}
                                    >
                                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                        <span>{activeClient.location}</span>
                                    </motion.div>
                                    <motion.div
                                        className="ppt-client-index"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.06 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        {String(activeIndex + 1).padStart(2, '0')}
                                    </motion.div>
                                </div>

                                {/* Divider */}
                                <div className="ppt-divider">
                                    <div className="ppt-divider-line"></div>
                                    <div className="ppt-divider-dot"></div>
                                    <div className="ppt-divider-line"></div>
                                </div>

                                {/* Right - Services */}
                                <div className="ppt-right">
                                    <motion.div
                                        className="ppt-services-label"
                                        initial={{ opacity: 0, x: 15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1, duration: 0.35 }}
                                    >
                                        <span className="ppt-services-tag">Services Provided</span>
                                    </motion.div>
                                    <motion.h3
                                        className="ppt-services-title"
                                        initial={{ opacity: 0, x: 15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2, duration: 0.35 }}
                                    >
                                        Facility Solutions
                                    </motion.h3>
                                    <div className="ppt-services-list">
                                        {activeClient.services && activeClient.services.map((service, idx) => (
                                            <motion.div
                                                key={service}
                                                className="ppt-service-row"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.25 + idx * 0.07, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                                            >
                                                <span className="ppt-service-num">{String(idx + 1).padStart(2, '0')}</span>
                                                <span className="ppt-service-icon">{serviceIcons[service] || '✦'}</span>
                                                <span className="ppt-service-name">{service}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom Thumbnail Strip */}
                <div className="ppt-thumbs" ref={thumbnailRef}>
                    <div className="ppt-thumbs-track">
                        {clients.map((client, index) => (
                            <button
                                key={index}
                                className={`ppt-thumb ${index === activeIndex ? 'thumb-active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to ${client.name}`}
                            >
                                <div className="ppt-thumb-img-wrap">
                                    <img
                                        src={client.image}
                                        alt={client.name}
                                        className="ppt-thumb-img"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    <div className="ppt-thumb-fallback" style={{ display: 'none' }}>
                                        {client.name.charAt(0)}
                                    </div>
                                </div>
                                <span className="ppt-thumb-name">{client.name}</span>
                                {index === activeIndex && (
                                    <motion.div
                                        className="ppt-thumb-bar"
                                        layoutId="pptThumbBar"
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurClients;
