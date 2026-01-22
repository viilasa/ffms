import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const values = [
        {
            icon: '🎯',
            title: 'Excellence',
            description: 'Committed to delivering the highest quality services in every project'
        },
        {
            icon: '🤝',
            title: 'Integrity',
            description: 'Building trust through honest and transparent business practices'
        },
        {
            icon: '💡',
            title: 'Innovation',
            description: 'Continuously improving our services with latest technologies'
        },
        {
            icon: '🌟',
            title: 'Customer Focus',
            description: 'Your satisfaction is our top priority in everything we do'
        }
    ];

    const team = [
        {
            name: 'Management Team',
            role: 'Leadership & Strategy',
            description: 'Experienced professionals guiding our vision and operations'
        },
        {
            name: 'Operations Team',
            role: 'Service Delivery',
            description: 'Skilled personnel ensuring flawless execution of services'
        },
        {
            name: 'Support Team',
            role: 'Customer Service',
            description: '24/7 dedicated support for all your facility needs'
        }
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-overlay"></div>
                <div className="container">
                    <motion.div
                        className="about-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>About Fresh Facility Management Services</h1>
                        <p>
                            Leading the way in comprehensive facility management solutions across Goa for over 21 years
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="about-story section">
                <div className="container">
                    <div className="story-content">
                        <motion.div
                            className="story-text scroll-reveal"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-badge">Our Story</span>
                            <h2>Values, expertise, and 21 years of excellence</h2>
                            <p>
                                Founded in 2005 by Mr. G. N. Singh, Fresh Facility Management Services has embarked on a
                                remarkable journey of growth. From humble beginnings, we have evolved into a trusted partner
                                for diverse industries including Pharmaceuticals, Shipbuilding, Oil Refineries, and Hospitality,
                                driven by a work ethic centered on quality, discipline, and innovation.
                            </p>
                            <p>
                                We pride ourselves on being techno-savvy and quality-conscious, delivering cost-effective
                                solutions that comply with international standards. Our expert professionals work in close
                                coordination with clients to provide tailored solutions, enabling them to focus entirely
                                on their core business performance.
                            </p>
                            <p>
                                With established offices in Goa and Karnataka, we continue to expand our knowledge horizon
                                and service capabilities, ensuring our clients receive nothing but the best-suited solutions
                                for their specific needs.
                            </p>
                        </motion.div>

                        <motion.div
                            className="story-image scroll-reveal"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                                alt="Modern Office"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="founder-section section">
                <div className="container">
                    <div className="founder-content">
                        <motion.div
                            className="founder-image scroll-reveal"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="founder-img-wrapper">
                                <img
                                    src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1769078297/GN_signh_csvido.png"
                                    alt="Mr. G N Singh - Founder"
                                />
                                <div className="founder-badge">
                                    <span className="founder-name">Mr. G N Singh</span>
                                    <span className="founder-role">Founder</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="founder-text scroll-reveal"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-badge">Visionary Leadership</span>
                            <h2>Meet Our Founder</h2>

                            <div className="founder-bio">
                                <p>
                                    His life journey is reminiscent of the "rags to riches" story. Born in 1979 in Madhupur,
                                    Jharkhand into a middle-class family, Mr. G N Singh moved to Goa at the age of 18 with
                                    dreams of making a difference.
                                </p>
                                <p>
                                    He started his humble beginnings as a Team Leader in Soft Services. Mr. Singh is one of
                                    the very few entrepreneurs who has carved a niche on his own terms and managed to build
                                    an entire empire without any family backing.
                                </p>
                                <p>
                                    Facing the storms of life with fortitude and courage, Mr. Singh is today the proud owner
                                    of Fresh Facility Management Services. His primary aim in starting this venture was to
                                    create job opportunities for unemployed youth in rural Jharkhand.
                                </p>
                                <p>
                                    Today, more than 2000 people are working in his organization across the country.
                                    Beyond his business success, he is well-known for his extensive philanthropic works
                                    and community service.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section section bg-gray">
                <div className="container">
                    <div className="section-header scroll-reveal">
                        <span className="section-badge">Our Values</span>
                        <h2>What Drives Us Forward</h2>
                        <p className="section-description">
                            Core principles that guide our every action and decision
                        </p>
                    </div>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="value-card scroll-reveal"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mission-vision section">
                <div className="container">
                    <div className="mv-grid">
                        <motion.div
                            className="mv-card scroll-reveal"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="mv-icon">
                                <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To take complete ownership of the facilities function by establishing robust policies
                                and context-driven frameworks. We are dedicated to delivering excellence through
                                strategic planning and tactical management, ensuring our services remain perfectly
                                aligned with your evolving business objectives.
                            </p>
                        </motion.div>

                        <motion.div
                            className="mv-card scroll-reveal"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="mv-icon">
                                <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3>Our Team</h3>
                            <p>
                                We take pride in our team of highly qualified professionals, each bringing years of specialized
                                experience in Facility Management Services. Prior to deployment, all our field and on-site
                                staff undergo rigorous and extensive training. Our multidisciplinary team boasts a proven
                                track record of excellence across Environmental Services, Housekeeping, Front Desk Operations,
                                Guest House Management, Technical Services, Landscaping, Pest Control, and Security.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section section bg-gray">
                <div className="container">
                    <div className="section-header scroll-reveal">
                        <span className="section-badge">Our Team</span>
                        <h2>Meet The Experts</h2>
                        <p className="section-description">
                            Dedicated professionals committed to your success
                        </p>
                    </div>

                    <div className="team-grid">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                className="team-card scroll-reveal"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="team-icon">
                                    <svg width="50" height="50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3>{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                                <p>{member.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="certifications section">
                <div className="container">
                    <div className="section-header scroll-reveal">
                        <span className="section-badge">Quality Assurance</span>
                        <h2>Certified & Trusted</h2>
                        <p className="section-description">
                            Committed to maintaining the highest industry standards
                        </p>
                    </div>

                    <motion.div
                        className="cert-content scroll-reveal"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="cert-list">
                            <div className="cert-item">
                                <div className="cert-icon">✓</div>
                                <span>ISO Certified Quality Management</span>
                            </div>
                            <div className="cert-item">
                                <div className="cert-icon">✓</div>
                                <span>Licensed and Insured Operations</span>
                            </div>
                            <div className="cert-item">
                                <div className="cert-icon">✓</div>
                                <span>Trained & Certified Staff</span>
                            </div>
                            <div className="cert-item">
                                <div className="cert-icon">✓</div>
                                <span>Safety Compliance Standards</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
