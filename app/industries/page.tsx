import Link from 'next/link'
import Image from 'next/image'

export default function IndustriesPage() {
  const industries = [
    {
      id: 'financial-services',
      title: 'Financial Services',
      description: 'Secure, compliant technology solutions for banking, insurance, and fintech organizations.',
      solutions: [
        'Regulatory compliance systems',
        'Fraud detection AI',
        'High-frequency trading platforms',
        'Blockchain integration'
      ],
      icon: '💳',
      image: '/images/finance-industry.jpg'
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'HIPAA-compliant solutions that improve patient care and streamline operations.',
      solutions: [
        'Electronic health records',
        'Telemedicine platforms',
        'Medical imaging AI',
        'Patient data analytics'
      ],
      icon: '🏥',
      image: '/images/healthcare-industry.jpg'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      description: 'Industry 4.0 solutions for smart factories and supply chain optimization.',
      solutions: [
        'IoT device management',
        'Predictive maintenance',
        'Digital twins',
        'Quality control automation'
      ],
      icon: '🏭',
      image: '/images/manufacturing-industry.jpg'
    },
    {
      id: 'retail',
      title: 'Retail & E-Commerce',
      description: 'Omnichannel solutions that drive sales and enhance customer experiences.',
      solutions: [
        'Personalization engines',
        'Inventory optimization',
        'Checkout automation',
        'AR shopping experiences'
      ],
      icon: '🛒',
      image: '/images/retail-industry.jpg'
    }
  ]

  return (
    <div className="industries-page">
      {/* Hero Section */}
      <section className="industries-hero">
        <div className="hero-content">
          <h1>Industry-Specific Solutions</h1>
          <p className="hero-subtitle">
            Tailored technology that addresses your sector's unique challenges
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="industries-container">
        <div className="section-header">
          <h2>Industries We Serve</h2>
          <p className="section-subtitle">
            We understand the distinct needs of each vertical market
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry) => (
            <div key={industry.id} className="industry-card">
              <div className="industry-image-container">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  width={600}
                  height={400}
                  className="industry-image"
                />
                <div className="industry-icon">{industry.icon}</div>
              </div>
              
              <div className="industry-content">
                <h3>{industry.title}</h3>
                <p className="industry-description">{industry.description}</p>
                
                <div className="industry-solutions">
                  <h4>Key Solutions:</h4>
                  <ul>
                    {industry.solutions.map((solution, index) => (
                      <li key={index}>{solution}</li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href={`/solutions#${industry.id}`} 
                  className="industry-cta"
                >
                  View {industry.title} Solutions
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-Industry Section */}
      <section className="cross-industry">
        <div className="cross-industry-content">
          <h2>Cross-Industry Expertise</h2>
          <p>
            While each industry has unique needs, we've identified common 
            challenges that our solutions address across all sectors:
          </p>
          
          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-icon">🔒</div>
              <h3>Security & Compliance</h3>
              <p>Meeting industry-specific regulations without compromising performance</p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">📈</div>
              <h3>Data & Analytics</h3>
              <p>Transforming raw data into actionable business intelligence</p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">🤖</div>
              <h3>Automation</h3>
              <p>Reducing operational costs through intelligent automation</p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">🌐</div>
              <h3>Digital Transformation</h3>
              <p>Modernizing legacy systems for the cloud era</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="industries-cta">
        <div className="cta-content">
          <h2>Don't see your industry listed?</h2>
          <p>
            Our solutions are adaptable to virtually any sector. Contact us to 
            discuss your specific requirements.
          </p>
          <Link href="/contact" className="cta-button">
            Speak to an Industry Specialist
          </Link>
        </div>
      </section>
    </div>
  )
}