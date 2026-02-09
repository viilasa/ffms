import { motion } from 'framer-motion';
import { useState } from 'react';
import SEO from '../components/SEO';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({ submitted: false, message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formsubmit.co/ajax/info@ffmsindia.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Contact Form Submission from ${formData.name}`,
                    _template: 'table'
                })
            });

            if (response.ok) {
                setFormStatus({
                    submitted: true,
                    message: 'Thank you! We will get back to you soon.'
                });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    service: '',
                    message: ''
                });
            } else {
                setFormStatus({
                    submitted: false,
                    message: 'Something went wrong. Please try again.'
                });
            }
        } catch (error) {
            setFormStatus({
                submitted: false,
                message: 'Error submitting form. Please try again later.'
            });
        }
    };

    const contactInfo = [
        {
            icon: (
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Visit Us',
            details: 'K17, Near Navhind Times,\nVerna Industrial Estate,\nVerna, Goa-403722'
        },
        {
            icon: (
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: 'Call Us',
            details: '+91 98222 16719\n+91 62000 67522\n0832-2782350 / 7038882005'
        },
        {
            icon: (
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Email Us',
            details: 'info@ffmsindia.com\nffmsgoa@gmail.com\nfreshfacilitymanagement@gmail.com'
        },
        {
            icon: (
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Working Hours',
            details: 'Monday - Saturday:\n9:00 AM - 6:00 PM\n24/7 Support Available'
        }
    ];

    return (
        <div className="contact-page">
            <SEO
                title="Contact Us"
                description="Get in touch with Fresh Facility Management Services. Request a quote for housekeeping, HVAC, security, pest control, and other facility management services in Goa."
                keywords="contact ffms, facility management quote, ffms goa contact, hire facility management, facility services enquiry"
                path="/contact"
            />
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-overlay"></div>
                <div className="container">
                    <motion.div
                        className="contact-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Get In Touch</h1>
                        <p>
                            Let's discuss how we can help manage your facility needs
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="contact-info-section section">
                <div className="container">
                    <div className="contact-info-grid">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                className="contact-info-card scroll-reveal"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="contact-info-icon">{info.icon}</div>
                                <h3>{info.title}</h3>
                                <p>{info.details}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-form-section section bg-gray">
                <div className="container">
                    <div className="contact-form-wrapper">
                        <motion.div
                            className="contact-form-text scroll-reveal"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-badge">Send us a message</span>
                            <h2>Let's Start a Conversation</h2>
                            <p>
                                Fill out the form and our team will get back to you within 24 hours.
                                We're here to answer any questions you may have about our services.
                            </p>

                            <div className="contact-features">
                                <div className="contact-feature">
                                    <div className="contact-feature-icon">✓</div>
                                    <div>
                                        <h4>Quick Response</h4>
                                        <p>We respond to all inquiries within 24 hours</p>
                                    </div>
                                </div>

                                <div className="contact-feature">
                                    <div className="contact-feature-icon">✓</div>
                                    <div>
                                        <h4>Free Consultation</h4>
                                        <p>Get expert advice at no cost</p>
                                    </div>
                                </div>

                                <div className="contact-feature">
                                    <div className="contact-feature-icon">✓</div>
                                    <div>
                                        <h4>Custom Solutions</h4>
                                        <p>Tailored services for your specific needs</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="contact-form-container scroll-reveal"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-input"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone" className="form-label">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="form-input"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="company" className="form-label">Company Name</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            className="form-input"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Your Company"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="service" className="form-label">Service Interested In *</label>
                                        <select
                                            id="service"
                                            name="service"
                                            className="form-input"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select a service</option>
                                            <option value="housekeeping">Housekeeping Services</option>
                                            <option value="facade">Facade Cleaning</option>
                                            <option value="hvac">HVAC Services</option>
                                            <option value="security">Security Services</option>
                                            <option value="pest">Pest Control</option>
                                            <option value="pantry">Pantry Services</option>
                                            <option value="soft">Soft Services</option>
                                            <option value="manpower">Manpower Supply</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="form-textarea"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tell us about your requirements..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg form-submit">
                                    Send Message
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>

                                {formStatus.message && (
                                    <div className={`form-message ${formStatus.submitted ? 'success' : 'error'}`}>
                                        {formStatus.message}
                                    </div>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.0123456789!2d73.9876543!3d15.3456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDIwJzQ0LjQiTiA3M8KwNTknMTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="FFMS Location"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default Contact;
