'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navLinks = [
    { name: 'ADE', href: '#ade' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'CV', href: '#cv' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--glass-border)] bg-[var(--nav-bg)] backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" className="flex flex-col text-sm font-semibold text-foreground md:text-base">
          <span>Dan Cheeseman</span>
          <span className="font-mono text-[10px] font-medium uppercase text-muted md:text-xs">DexRoboKnix / ADE</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-[var(--surface-soft)] hover:text-foreground"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center space-y-1.5 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center gap-10 bg-[var(--background)] transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="flex flex-col space-y-10 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-4xl font-semibold text-foreground transition-colors hover:text-tech"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Navbar
