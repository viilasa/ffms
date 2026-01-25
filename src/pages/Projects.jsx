import { motion } from 'framer-motion';
import clientsData from '../data/clients.json';
import './Projects.css';

const Team = () => {
    const traineePrograms = [
        {
            title: 'Safety Training',
            image: 'https://res.cloudinary.com/ddhhlkyut/image/upload/v1769082564/1_jwwsge.jpg',
            category: 'Core Module'
        },
        {
            title: 'Soft Skills Development',
            image: 'https://res.cloudinary.com/ddhhlkyut/image/upload/v1769082622/2_msfsji.jpg',
            category: 'Communication'
        },
        {
            title: 'Technical proficiency',
            image: 'https://res.cloudinary.com/ddhhlkyut/image/upload/v1769082686/3_ok8uik.jpg',
            category: 'Skill Building'
        },
        {
            title: 'On-site Practical',
            image: 'https://res.cloudinary.com/ddhhlkyut/image/upload/v1769082751/4_s0rpaz.jpg',
            category: 'Field Work'
        },
        {
            title: 'Equipment Handling',
            image: 'https://res.cloudinary.com/ddhhlkyut/image/upload/v1769083200/5_iorj8j.jpg',
            category: 'Practical'
        }
    ];

    const stats = [
        { number: '2000+', label: 'Team Members' },
        { number: '21+', label: 'Years Experience' },
        { number: '300+', label: 'Happy Clients' },
        { number: '3+', label: 'States Covered' }
    ];

    return (
        <div className="projects-page">
            {/* Hero Section */}
            <section className="projects-hero">
                <div className="projects-hero-overlay"></div>
                <div className="container">
                    <motion.div
                        className="projects-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Our Team</h1>
                        <p>
                            Meet the dedicated professionals behind our success
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Stats */}
            <section className="team-stats section">
                <div className="container">
                    <div className="team-stats-grid">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="team-stat-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="projects-list section">
                <div className="container">
                    <div className="section-header scroll-reveal">
                        <span className="section-badge">Skill Development</span>
                        <h2>Our Trainee Program</h2>
                        <p className="section-description">
                            Comprehensive training initiatives to build the next generation of facility management experts
                        </p>
                    </div>

                    <div className="projects-grid">
                        {traineePrograms.map((program, index) => (
                            <motion.div
                                key={index}
                                className="project-card scroll-reveal"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="project-image">
                                    <img src={program.image} alt={program.title} />
                                    <div className="project-overlay">
                                        <span className="project-category">{program.category}</span>
                                    </div>
                                </div>

                                <div className="project-content">
                                    <h3>{program.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Regional Teams Section */}
            <section className="regional-teams-section section">
                <div className="container">
                    <div className="section-header scroll-reveal">
                        <span className="section-badge">Our Team</span>
                        <h2>Meet Our Regional Teams</h2>
                        <p className="section-description">
                            Dedicated professionals serving across multiple states
                        </p>
                    </div>

                    <div className="regional-teams-grid">
                        <motion.div
                            className="regional-team-card scroll-reveal"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="regional-team-image">
                                <img
                                    src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1769335637/GOA_rfygca.png"
                                    alt="Team Goa"
                                />
                            </div>
                            <div className="regional-team-info">
                                <h3>Team Goa</h3>
                                <p>Our dedicated team serving clients across the beautiful state of Goa</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="regional-team-card scroll-reveal"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="regional-team-image">
                                <img
                                    src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1769335636/HP_wopxuk.png"
                                    alt="Team Himachal Pradesh"
                                />
                            </div>
                            <div className="regional-team-info">
                                <h3>Team Himachal Pradesh</h3>
                                <p>Our skilled professionals providing exceptional services in Himachal Pradesh</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="clients-section section bg-gray">
                <div className="container">
                    <div className="section-header scroll-reveal">
                        <span className="section-badge">Trusted By</span>
                        <h2>Our Valued Clients</h2>
                        <p className="section-description">
                            Proud to serve leading organizations across Goa and Karnataka
                        </p>
                    </div>

                    <motion.div
                        className="clients-grid scroll-reveal"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {clientsData.clients.map((client, index) => (
                            <div key={index} className="client-card">
                                <div className="client-logo-box">
                                    {client.image ? (
                                        <img src={client.image} alt={client.name} />
                                    ) : (
                                        <span className="client-initials">
                                            {client.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                                        </span>
                                    )}
                                </div>
                                <div className="client-details">
                                    <span className="client-name">{client.name}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="testimonials-section section">
                <div className="container">
                    <div className="section-header scroll-reveal">
                        <span className="section-badge">Work Culture</span>
                        <h2>Why Work With Us</h2>
                    </div>

                    <div className="testimonials-grid">
                        <motion.div
                            className="testimonial-card scroll-reveal"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="quote-icon">🎯</div>
                            <h4>Growth Opportunities</h4>
                            <p className="testimonial-text">
                                We believe in nurturing talent and providing continuous learning opportunities for career advancement.
                            </p>
                        </motion.div>

                        <motion.div
                            className="testimonial-card scroll-reveal"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="quote-icon">🤝</div>
                            <h4>Supportive Environment</h4>
                            <p className="testimonial-text">
                                A collaborative workplace where every team member is valued and supported in their professional journey.
                            </p>
                        </motion.div>

                        <motion.div
                            className="testimonial-card scroll-reveal"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="quote-icon">🌟</div>
                            <h4>Making a Difference</h4>
                            <p className="testimonial-text">
                                Be part of a team that creates job opportunities for rural youth and contributes to community development.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
