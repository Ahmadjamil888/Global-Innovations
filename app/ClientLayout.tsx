'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Industries', path: '/industries' },
  { name: 'About Us', path: '/about' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
]

const FOOTER_LINKS = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Sustainability', href: '/sustainability' },
  ],
  solutions: [
    { name: 'Cloud Services', href: '/solutions/cloud' },
    { name: 'AI & Analytics', href: '/solutions/ai' },
    { name: 'Cybersecurity', href: '/solutions/cybersecurity' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Webinars', href: '/webinars' },
  ],
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  if (pathname === '/404') {
    return <>{children}</>
  }

  return (
    <ClerkProvider>
      <div className="app">
        {/* Header */}
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
          <div className="header-container">
            <Link href="/" className="logo">
              <span className="logo-icon">GI</span>
              <span className="logo-text">Global Innovations</span>
            </Link>

            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
              {NAV_ITEMS.map((item) => (
                <Link 
                  key={item.name}
                  href={item.path}
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="auth-section">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="btn-signin">Log In</button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="btn-signup">Sign Up</button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>

              <button 
                className="mobile-menu-btn"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span className={`menu-icon ${isMenuOpen ? 'open' : ''}`}></span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="main-content">{children}</main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-grid">
              <div className="footer-about">
                <div className="footer-logo">
                  <span className="logo-icon">GI</span>
                  <span className="logo-text">Global Innovations</span>
                </div>
                <p>Empowering businesses worldwide since 2005</p>
                <div className="social-links">
                  <a href="#" aria-label="Twitter">Twitter</a>
                  <a href="#" aria-label="LinkedIn">LinkedIn</a>
                  <a href="#" aria-label="Facebook">Facebook</a>
                </div>
              </div>

              {Object.entries(FOOTER_LINKS).map(([title, links]) => (
                <div key={title} className="footer-column">
                  <h3>{title}</h3>
                  <ul>
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="footer-bottom">
              <p>© {new Date().getFullYear()} Global Innovations Inc.</p>
            </div>
          </div>
        </footer>
      </div>
    </ClerkProvider>
  )
}