'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import './contact-styles.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="contact-icon" />,
      title: 'Email',
      detail: 'hello@yourcompany.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone className="contact-icon" />,
      title: 'Phone',
      detail: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: <MapPin className="contact-icon" />,
      title: 'Office',
      detail: '123 Business Street, New York, NY 10001',
      description: 'Visit our headquarters'
    },
    {
      icon: <Clock className="contact-icon" />,
      title: 'Hours',
      detail: 'Mon-Fri: 9AM-6PM',
      description: 'Weekend support available'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get In Touch</h1>
          <p className="hero-subtitle">
            Ready to start your next project? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="section-header">
          <h2>Contact Information</h2>
          <p className="section-subtitle">
            Multiple ways to reach our team
          </p>
        </div>

        <div className="contact-info-grid">
          {contactInfo.map((info) => (
            <div key={info.title} className="contact-info-card">
              <div className="contact-icon-container">
                {info.icon}
              </div>
              <div className="contact-details">
                <h3>{info.title}</h3>
                <p className="contact-detail">{info.detail}</p>
                <p className="contact-description">{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="form-container">
          <div className="form-content">
            <div className="form-header">
              <h2>Send Us a Message</h2>
              <p className="form-subtitle">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="success-message">
                <CheckCircle className="success-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <div className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Tell us more about your project or inquiry..."
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="form-submit"
                >
                  <Send className="submit-icon" />
                  Send Message
                </button>
              </div>
            )}
          </div>

          <div className="form-sidebar">
            <div className="sidebar-content">
              <h3>Why Choose Us?</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">&lt; 2h</div>
                  <div className="stat-label">Response</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Satisfaction</div>
                </div>
              </div>
              
              <div className="sidebar-info">
                <h4>Frequently Asked Questions</h4>
                <ul className="faq-list">
                  <li>What's your typical project timeline?</li>
                  <li>Do you offer ongoing support?</li>
                  <li>Can you work with our existing systems?</li>
                  <li>What industries do you serve?</li>
                </ul>
                <Link href="/faq" className="faq-link">
                  View All FAQs →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>
            Let's discuss how we can help bring your vision to life with our 
            innovative technology solutions.
          </p>
          <div className="cta-buttons">
            <Link href="/about" className="cta-primary">
              Learn More About Us
            </Link>
            <Link href="/services" className="cta-secondary">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}