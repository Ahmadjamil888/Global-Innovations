import Link from 'next/link'
import Image from 'next/image'
import './careers.css'
export default function CareersPage() {
  const jobOpenings = [
    {
      id: 'senior-frontend-engineer',
      title: 'Senior Frontend Engineer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Engineering',
      description: 'Lead the development of our customer-facing applications using React and Next.js',
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      type: 'Full-time',
      location: 'Hybrid (SF/NY)',
      department: 'Engineering',
      description: 'Build and maintain our cloud infrastructure on AWS with Kubernetes',
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      type: 'Full-time',
      location: 'Remote',
      department: 'Product',
      description: 'Define product strategy and work with engineering to deliver features',
    }
  ]

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Salary + equity packages',
      icon: '💰'
    },
    {
      title: 'Flexible Work',
      description: 'Remote or hybrid options',
      icon: '🏡'
    },
    {
      title: 'Health Coverage',
      description: 'Medical, dental, and vision',
      icon: '🏥'
    },
    {
      title: 'Learning Budget',
      description: '$2,000/year for professional development',
      icon: '📚'
    },
    {
      title: 'Unlimited PTO',
      description: 'Take time when you need it',
      icon: '🌴'
    },
    {
      title: 'Team Retreats',
      description: 'Annual company gatherings',
      icon: '✈️'
    }
  ]

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="hero-content">
          <h1>Build the Future With Us</h1>
          <p className="hero-subtitle">
            Join our team of innovators solving complex challenges with cutting-edge technology
          </p>
          <Link href="#open-positions" className="cta-button">
            View Open Positions
          </Link>
        </div>
        <div className="hero-image">
          <Image
            src="/images/careers-team.jpg"
            alt="Team collaborating"
            width={800}
            height={600}
            priority
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="careers-values">
        <div className="section-header">
          <h2>Our Culture</h2>
          <p className="section-subtitle">
            We believe in creating an environment where great work happens
          </p>
        </div>
        <div className="values-grid">
          {[
            { title: 'Collaboration', icon: '🤝' },
            { title: 'Innovation', icon: '💡' },
            { title: 'Ownership', icon: '🛠️' },
            { title: 'Growth', icon: '🌱' }
          ].map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="careers-benefits">
        <div className="section-header">
          <h2>Employee Benefits</h2>
          <p className="section-subtitle">
            We take care of our team with comprehensive benefits
          </p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Openings */}
      <section id="open-positions" className="careers-jobs">
        <div className="section-header">
          <h2>Current Openings</h2>
          <p className="section-subtitle">
            Explore opportunities to join our team
          </p>
        </div>
        <div className="jobs-list">
          {jobOpenings.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-info">
                <h3>{job.title}</h3>
                <div className="job-meta">
                  <span>{job.type}</span>
                  <span>{job.location}</span>
                  <span>{job.department}</span>
                </div>
                <p className="job-description">{job.description}</p>
              </div>
              <Link href={`/careers/${job.id}`} className="apply-button">
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Hiring Process */}
      <section className="careers-process">
        <div className="section-header">
          <h2>Our Hiring Process</h2>
        </div>
        <div className="process-steps">
          {[
            { step: '1', title: 'Application Review', description: 'We review your submission within 5 business days' },
            { step: '2', title: 'Initial Screen', description: '30-minute call with our talent team' },
            { step: '3', title: 'Technical Assessment', description: 'Role-specific evaluation' },
            { step: '4', title: 'Team Interviews', description: 'Meet potential colleagues' },
            { step: '5', title: 'Offer', description: 'Welcome to the team!' }
          ].map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.step}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="careers-cta">
        <div className="cta-content">
          <h2>Don't See Your Perfect Role?</h2>
          <p>
            We're always looking for talented individuals. Send us your resume and 
            we'll contact you when a matching position opens.
          </p>
          <Link href="/careers/apply" className="cta-button">
            Submit General Application
          </Link>
        </div>
      </section>
    </div>
  )
}