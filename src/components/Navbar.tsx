'use client'

import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold tracking-tighter text-tech">
          Dan Cheeseman
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden space-x-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-lg font-medium text-foreground transition-colors hover:text-tech"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <button
          className="flex flex-col space-y-1.5 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-foreground transition-transform ${isOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-foreground transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-foreground transition-transform ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-black transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="absolute top-6 right-6 text-3xl"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          &times;
        </button>
        <ul className="space-y-8 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-3xl font-semibold transition-colors hover:text-tech"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
