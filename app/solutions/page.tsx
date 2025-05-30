import Link from 'next/link'
import Image from 'next/image'

export default function SolutionsPage() {
  const services = [
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      description: 'Fully managed cloud solutions tailored to your business requirements with 24/7 support and enterprise-grade security.',
      features: [
        'Hybrid cloud deployments',
        'Serverless architecture',
        'Disaster recovery',
        'Cost optimization'
      ],
      icon: '☁️',
      image: '/images/cloud-services.jpg'
    },
    {
      id: 'ai-analytics',
      title: 'AI & Analytics',
      description: 'Transform your data into actionable insights with our cutting-edge AI and machine learning solutions.',
      features: [
        'Predictive analytics',
        'Natural language processing',
        'Computer vision',
        'Real-time data processing'
      ],
      icon: '🤖',
      image: '/images/ai-analytics.jpg'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Comprehensive protection for your digital assets with our multi-layered security approach.',
      features: [
        'Threat detection & response',
        'Compliance management',
        'Penetration testing',
        'Security awareness training'
      ],
      icon: '🔒',
      image: '/images/cybersecurity.jpg'
    }
  ]

  return (
    <div className="solutions-page">
      {/* Hero Section */}
      <section className="solutions-hero">
        <div className="solutions-hero-content">
          <h1>Enterprise Solutions</h1>
          <p className="hero-subtitle">
            Scalable technology solutions designed to drive your business forward
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="solutions-container">
        <div className="section-header">
          <h2>Our Solutions</h2>
          <p className="section-subtitle">
            Tailored to meet your specific business challenges
          </p>
        </div>

        <div className="solutions-grid">
          {services.map((service) => (
            <div key={service.id} id={service.id} className="solution-card">
              <div className="solution-content">
                <div className="solution-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="solution-description">{service.description}</p>
                
                <div className="solution-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact" className="solution-cta">
                  Request Consultation
                </Link>
              </div>
              
              <div className="solution-image">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-image"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="enterprise-section">
        <div className="enterprise-content">
          <h2>Enterprise-Grade Infrastructure</h2>
          <p>
            Our solutions are built on world-class infrastructure with:
          </p>
          <div className="enterprise-features">
            <div className="enterprise-feature">
              <span className="feature-icon">🔄</span>
              <h4>99.99% Uptime</h4>
              <p>Guaranteed reliability with SLA-backed performance</p>
            </div>
            <div className="enterprise-feature">
              <span className="feature-icon">🌐</span>
              <h4>Global Reach</h4>
              <p>Deployed across multiple regions worldwide</p>
            </div>
            <div className="enterprise-feature">
              <span className="feature-icon">🔐</span>
              <h4>Military-Grade Security</h4>
              <p>End-to-end encryption and compliance certifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="solutions-cta">
        <div className="cta-content">
          <h2>Ready to discuss your project?</h2>
          <p>
            Our solution architects are standing by to design the perfect 
            technology stack for your business needs.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="cta-primary">
              Contact Sales
            </Link>
            <Link href="/case-studies" className="cta-secondary">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}