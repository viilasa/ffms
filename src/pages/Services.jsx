import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './Services.css';

const Services = () => {
    const servicePillars = [
        {
            title: 'Soft Services',
            icon: '🧹',
            items: [
                'Front Desk Management',
                'Mail Management',
                'Guest House Management',
                'Security Services'
            ]
        },
        {
            title: 'Housekeeping Services',
            icon: '✨',
            items: [
                'Housekeeping & Janitor Services',
                'Catering & Pantry Services',
                'Waste Management/Garbage disposal',
                'Pest Control',
                'Glass/window cleaning',
                'Specialized Floor Polishing'
            ]
        },
        {
            title: 'Environmental Services',
            icon: '🌱',
            items: [
                'Operation and Maintenance of ETP and STP',
                'Operation and Maintenance of Water treatment plants',
                'Rain Water Harvesting',
                'Bore-well Maintenance',
                'Gardening and horticulture'
            ]
        },
        {
            title: 'Engineering Services',
            icon: '⚙️',
            items: [
                'HVAC',
                'Electrical Maintenance',
                'Mechanical Maintenance',
                'Plumbing'
            ]
        }
    ];

    const detailedServices = [
        {
            title: 'Front Desk Management',
            description: "We believe that customer's first impression occurs at front desk - the place where they receive their first taste of service. Our employees are well qualified, well groomed, and articulate with appropriate attire.",
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
            icon: '🛎️'
        },
        {
            title: 'Office Support Management',
            description: "Every Organization needs timely and effective office and administrative support services to operate efficiently. We have well trained employees for office and administrative support.",
            image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80',
            icon: '📂'
        },
        {
            title: 'Horticulture & Flower Arrangement',
            description: "We have qualified Horticulture professionals for managing Horticulture and Landscaping. They keep themselves updated with modern development and technology in this field.",
            image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
            icon: '🌺'
        },
        {
            title: 'Guest House Services',
            description: "We have qualified hospitality professionals to provide a prominent and an extensive range of guest house services. We boast perfect team of workers keeping up with clients' requirements to serve them in the best possible way. We also provide customized services as per client's specifications, which keeps us ahead in the competitive market.",
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
            icon: '🏨'
        },
        {
            title: 'Energy/Water Conservation',
            description: "We provide valuable suggestions for energy and water conservation measures, helping you optimize resources and reduce operational costs efficiently.",
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
            icon: '💧'
        }
    ];

    return (
        <div className="services-page">
            <SEO
                title="Our Services"
                description="Comprehensive facility management services in Goa - Housekeeping, HVAC maintenance, ETP/STP operations, pest control, security services, facade cleaning, gardening, and more."
                keywords="housekeeping services, HVAC maintenance goa, pest control services, security services goa, ETP STP operations, facade cleaning, gardening horticulture, facility management services"
                path="/services"
            />
            {/* Hero Section */}
            <section className="services-hero">
                <div className="services-hero-overlay"></div>
                <div className="container">
                    <motion.div
                        className="services-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Our Services</h1>
                        <p>
                            We provide our customers with updated and world-class services to meet their specific
                            requirement. The services are offered individually or through integrated complete facility
                            management solution. Our services are tailored to meet the client's unique business
                            requirement.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Service Pillars Section */}
            <section className="pillars-section section">
                <div className="container">
                    <div className="section-header scroll-reveal">
                        <span className="section-badge">Our Expertise</span>
                        <h2>Wide Array of Services</h2>
                        <p className="section-description">
                            Delivering excellence across all aspects of facility management
                        </p>
                    </div>

                    <div className="pillars-grid">
                        {servicePillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                className="pillar-card scroll-reveal"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="pillar-icon">{pillar.icon}</div>
                                <h3>{pillar.title}</h3>
                                <ul className="pillar-list">
                                    {pillar.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Services Grid */}
            <section className="services-list section bg-gray">
                <div className="container">
                    <div className="section-header scroll-reveal">
                        <span className="section-badge">Specialized Solutions</span>
                        <h2>Comprehensive Management</h2>
                        <p className="section-description">
                            Tailored solutions to enhance your operational efficiency
                        </p>
                    </div>

                    <div className="services-detailed-grid">
                        {detailedServices.map((service, index) => (
                            <motion.div
                                key={index}
                                className={`service-detailed-card scroll-reveal ${index % 2 === 1 ? 'reverse' : ''}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <div className="service-detailed-image">
                                    <img src={service.image} alt={service.title} />
                                    <div className="service-overlay">
                                        <div className="service-overlay-icon">{service.icon}</div>
                                    </div>
                                </div>

                                <div className="service-detailed-content">
                                    <h3>{service.title}</h3>
                                    <p className="service-detailed-desc">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta section">
                <div className="container">
                    <motion.div
                        className="cta-box scroll-reveal"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2>Need a Custom Solution?</h2>
                        <p>We provide valuable suggestions for energy and water conservation measures</p>
                        <Link to="/contact" className="btn btn-secondary btn-lg">
                            Contact Us Today
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
