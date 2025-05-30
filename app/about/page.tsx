import Link from 'next/link'
import Image from 'next/image'
import './about-styles.css'
export default function About() {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in enterprise technology',
      image: '/images/team-alex.jpg'
    },
    {
      name: 'Maria Chen',
      role: 'CTO',
      bio: 'Expert in cloud architecture and scalable systems',
      image: '/images/team-maria.jpg'
    },
    {
      name: 'James Wilson',
      role: 'Head of Product',
      bio: 'Product strategist focused on user-centric design',
      image: '/images/team-james.jpg'
    },
    {
      name: 'Sarah Williams',
      role: 'VP of Engineering',
      bio: 'Quality-driven engineering leader',
      image: '/images/team-sarah.jpg'
    }
  ]

  const milestones = [
    {
      year: '2005',
      event: 'Company Founded',
      description: 'Started in a small office with just 3 team members'
    },
    {
      year: '2010',
      event: 'First Enterprise Client',
      description: 'Landed Fortune 500 client, proving our enterprise capabilities'
    },
    {
      year: '2015',
      event: 'Global Expansion',
      description: 'Opened offices in Europe and Asia'
    },
    {
      year: '2020',
      event: 'AI Platform Launch',
      description: 'Introduced our industry-leading AI solutions suite'
    },
    {
      year: '2023',
      event: '500+ Employees',
      description: 'Grew to serve clients in 50+ countries worldwide'
    }
  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Our Story</h1>
          <p className="hero-subtitle">
            Pioneering technology solutions since 2005
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p className="mission-statement">
              To empower businesses through innovative technology that solves real-world 
              challenges, drives growth, and creates lasting value.
            </p>
            <div className="mission-values">
              <h3>Our Core Values</h3>
              <ul>
                <li>
                  <strong>Innovation</strong> - We challenge the status quo to deliver breakthrough solutions
                </li>
                <li>
                  <strong>Integrity</strong> - We do business with transparency and honesty
                </li>
                <li>
                  <strong>Impact</strong> - We measure success by the value we create for clients
                </li>
                <li>
                  <strong>Collaboration</strong> - We believe the best solutions come from teamwork
                </li>
              </ul>
            </div>
          </div>
          <div className="mission-image">
            <Image
              src="/images/about-mission.jpg"
              alt="Team collaborating in office"
              width={600}
              height={600}
              className="rounded-image"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-header">
          <h2>Meet Our Leadership</h2>
          <p className="section-subtitle">
            Experienced professionals driving our vision forward
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-card">
              <div className="team-image-container">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="team-image"
                />
              </div>
              <div className="team-details">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <Link 
                  href={`/about/leadership#${member.name.toLowerCase().replace(' ', '-')}`}
                  className="team-link"
                >
                  View Profile →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="milestones-section">
        <div className="section-header">
          <h2>Our Journey</h2>
          <p className="section-subtitle">
            Key moments in our company history
          </p>
        </div>

        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div 
              key={milestone.year} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content">
                <div className="timeline-year">{milestone.year}</div>
                <h3 className="timeline-event">{milestone.event}</h3>
                <p className="timeline-description">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Join Our Story</h2>
          <p>
            Whether you're looking for solutions or want to join our team, 
            we'd love to connect.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="cta-primary">
              Contact Us
            </Link>
            <Link href="/careers" className="cta-secondary">
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}