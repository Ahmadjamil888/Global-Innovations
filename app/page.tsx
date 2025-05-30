import Link from 'next/link'

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Innovative Solutions for a Digital World</h1>
          <p className="hero-text">
            We deliver cutting-edge technology solutions to help your business 
            thrive in today's competitive landscape.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="cta-primary">
              Get Started
            </Link>
            <Link href="/solutions" className="cta-secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-image">
          
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="section-header">
          <h2>Our Core Solutions</h2>
          <p className="section-subtitle">
            Designed to meet your business needs
          </p>
        </div>
        
        <div className="features-grid">
          {[
            {
              title: "Cloud Services",
              description: "Scalable cloud infrastructure for your growing business needs.",
              icon: "☁️"
            },
            {
              title: "AI & Analytics",
              description: "Harness the power of data with our advanced analytics solutions.",
              icon: "🤖"
            },
            {
              title: "Cybersecurity",
              description: "Protect your business with our enterprise-grade security solutions.",
              icon: "🔒"
            }
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <Link href={`/solutions#${feature.title.toLowerCase().replace(' ', '-')}`} className="feature-link">
                Explore →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="section-header">
          <h2>Trusted by Industry Leaders</h2>
        </div>
        <div className="testimonials-grid">
          {[
            {
              quote: "Global Innovations transformed our digital infrastructure.",
              author: "Sarah Johnson, TechCorp"
            },
            {
              quote: "Their AI solutions gave us a competitive edge.",
              author: "Michael Chen, DataSystems"
            }
          ].map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <p className="testimonial-author">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Contact us today to discuss how we can help you achieve your goals.
          </p>
          <Link href="/contact" className="cta-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}