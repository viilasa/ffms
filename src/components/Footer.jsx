import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/services', label: 'Services' },
        { path: '/team', label: 'Team' }
    ];

    const services = [
        'Housekeeping Services',
        'Facade Cleaning',
        'HVAC Services',
        'Pest Control',
        'Security Services',
        'Pantry Services'
    ];

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-grid">
                        <motion.div
                            className="footer-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="footer-logo">
                                <img
                                    src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1769081479/logo.pdf_w86b50.png"
                                    alt="FFMS Logo"
                                    className="footer-logo-image"
                                />
                                <div className="footer-logo-text">
                                    <span className="footer-logo-name">Fresh Facility</span>
                                    <span className="footer-logo-tagline">Management Services</span>
                                </div>
                            </div>
                            <p className="footer-desc">
                                Your trusted partner for comprehensive facility management solutions.
                                Excellence in service, commitment to quality.
                            </p>
                        </motion.div>

                        <motion.div
                            className="footer-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h4 className="footer-title">Quick Links</h4>
                            <ul className="footer-links">
                                {quickLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className="footer-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h4 className="footer-title">Our Services</h4>
                            <ul className="footer-links">
                                {services.map((service) => (
                                    <li key={service}>
                                        <Link to="/services">{service}</Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className="footer-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h4 className="footer-title">Contact Info</h4>
                            <ul className="footer-contact">
                                <li>
                                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>K17, Near Navhind Times,<br />Verna Industrial Estate,<br />Verna, Goa-403722</span>
                                </li>
                                <li>
                                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>+91 98222 16719 / +91 62000 67522</span>
                                </li>
                                <li>
                                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>info@ffmsindia.com</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p>&copy; {currentYear} Fresh Facility Management Services. All rights reserved.</p>
                        <div className="footer-bottom-links">
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/terms">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
