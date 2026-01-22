import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import clientsData from '../data/clients.json';
import './Home.css';

const Home = () => {
    const [counts, setCounts] = useState({
        years: 0,
        clients: 0,
        projects: 0,
        team: 0
    });
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Hero background images - Corporate facility management related
    const heroImages = [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80', // Corporate building exterior
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80', // Modern office interior
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80', // Professional office cleaning
        'https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?w=1920&q=80', // Building maintenance/HVAC
        'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&q=80', // Clean office environment
        'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=80'  // Corporate building facade
    ];

    useEffect(() => {
        const duration = 2000;
        const targets = { years: 21, clients: 500, projects: 1000, team: 200 };
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            setCounts({
                years: Math.floor(targets.years * progress),
                clients: Math.floor(targets.clients * progress),
                projects: Math.floor(targets.projects * progress),
                team: Math.floor(targets.team * progress)
            });

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }, []);

    // Hero image carousel auto-rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [heroImages.length]);

    const services = [
        {
            title: 'Housekeeping Services',
            description: 'Professional cleaning and maintenance services for commercial and residential properties',
            image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80'
        },
        {
            title: 'Facade Cleaning',
            description: 'Specialized exterior building cleaning with advanced safety equipment',
            image: 'https://images.pexels.com/photos/4767875/pexels-photo-4767875.jpeg'
        },
        {
            title: 'HVAC Services',
            description: 'Complete air conditioning installation, maintenance, and AMC services',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80'
        },
        {
            title: 'Security Services',
            description: 'Trained security personnel for comprehensive premises protection',
            image: 'https://images.pexels.com/photos/18530600/pexels-photo-18530600.jpeg'
        },
        {
            title: 'Floor Polishing',
            description: 'Specialized floor polishing and restoration services for a pristine shine',
            image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&q=80'
        },
        {
            title: 'Pantry Services',
            description: 'Complete pantry management and refreshment services',
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80'
        }
    ];

    return (
        <div className="home">
            {/* Hero Section - Full Screen with Skyscraper Background */}
            <section className="hero">
                <div className="hero-background">
                    {heroImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Facility Management ${index + 1}`}
                            className={`hero-bg-image ${index === currentImageIndex ? 'active' : ''}`}
                        />
                    ))}
                    <div className="hero-overlay"></div>
                </div>

                <div className="container hero-container">
                    <motion.div
                        className="hero-content-left"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <h1 className="hero-title-large">
                            Facilities<br />
                            <span className="hero-title-highlight">Managed</span><br />
                            Perfectly
                        </h1>
                    </motion.div>

                    <motion.div
                        className="hero-content-right"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <p className="hero-tagline">
                            <strong>21+ Years Experience.</strong> <br />
                            Complete Facility Ownership across <strong>Goa & Karnataka.</strong>
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="scroll-line"></div>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <motion.div
                            className="stat-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="stat-number">{counts.years}+</div>
                            <div className="stat-label">Years of Excellence</div>
                        </motion.div>
                        <motion.div
                            className="stat-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="stat-number">{counts.clients}+</div>
                            <div className="stat-label">Satisfied Clients</div>
                        </motion.div>
                        <motion.div
                            className="stat-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="stat-number">{counts.projects}+</div>
                            <div className="stat-label">Projects Managed</div>
                        </motion.div>
                        <motion.div
                            className="stat-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="stat-number">{counts.team}+</div>
                            <div className="stat-label">Expert Professionals</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Clients Marquee Section */}
            <section className="clients-marquee-section">
                <div className="container">
                    <motion.div
                        className="section-header-small"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-badge">Trusted By</span>
                        <h3>Our Valuable Clients</h3>
                    </motion.div>
                </div>
                {/* ... (Marquee content remains same) ... */}

                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        {/* First set of logos */}
                        <div className="marquee-content">
                            {clientsData.clients.map((client, index) => (
                                <div key={index} className="client-logo-card">
                                    <div className="client-logo-placeholder">
                                        {client.logo ? (
                                            <img src={client.logo} alt={client.name} className="client-logo-img" />
                                        ) : (
                                            <span className="logo-initials">
                                                {client.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                                            </span>
                                        )}
                                    </div>
                                    <div className="client-info">
                                        <span className="client-name">{client.name}</span>
                                        {client.tagline && (
                                            <span className="client-tagline">{client.tagline}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Duplicate for seamless loop */}
                        <div className="marquee-content">
                            {clientsData.clients.map((client, index) => (
                                <div key={`dup-${index}`} className="client-logo-card">
                                    <div className="client-logo-placeholder">
                                        {client.logo ? (
                                            <img src={client.logo} alt={client.name} className="client-logo-img" />
                                        ) : (
                                            <span className="logo-initials">
                                                {client.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                                            </span>
                                        )}
                                    </div>
                                    <div className="client-info">
                                        <span className="client-name">{client.name}</span>
                                        {client.tagline && (
                                            <span className="client-tagline">{client.tagline}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section section">
                <div className="container">
                    <div className="section-header scroll-reveal">
                        <span className="section-badge">What We Do</span>
                        <h2>Comprehensive Facility Management Solutions</h2>
                        <p className="section-description">
                            End-to-end services tailored to international standards, ensuring your compliance and satisfaction.
                        </p>
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-card scroll-reveal"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className="service-image-wrapper">
                                    <img src={service.image} alt={service.title} className="service-image" />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <Link to="/services" className="service-link">
                                    Learn More
                                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-section section bg-gray">
                <div className="container">
                    <div className="why-content">
                        <motion.div
                            className="why-image"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                                alt="Professional Team"
                            />
                        </motion.div>

                        <motion.div
                            className="why-text"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="section-badge">Why Choose Us</span>
                            <h2>Strategic Facility Management Partner</h2>
                            <p>
                                <strong>21+ years of excellence.</strong> We provide cost-effective, international-standard
                                facility management, allowing you to focus purely on your core business.
                            </p>

                            <div className="features-list">
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Expert Professionals</h4>
                                        <p>Qualified multi-disciplinary team working in sync with your goals.</p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Customized Innovation</h4>
                                        <p>Tailored solutions designed specifically for your facility's needs.</p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Cost Effective</h4>
                                        <p>Premium quality services at competitive rates.</p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Global Standards</h4>
                                        <p>Strict adherence to international compliance & safety.</p>
                                    </div>
                                </div>
                            </div>

                            <Link to="/about" className="btn btn-primary">
                                Learn More About Us
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section section">
                <div className="container">
                    <motion.div
                        className="cta-card scroll-reveal"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="cta-content">
                            <h2>Ready to Transform Your Facility Management?</h2>
                            <p>Get in touch with us today for a free consultation and quote</p>
                        </div>
                        <Link to="/contact" className="btn btn-secondary btn-lg">
                            Contact Us Today
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
