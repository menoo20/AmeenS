'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const primaryNavItems = [
  { href: '/', label: 'Home' },
  { href: '/teaching/starfield', label: 'Teaching' },
  { href: '/blog', label: 'Blog' },
]

const upcomingNavItems = [
  { label: 'Developer' },
  { label: 'About' },
  { label: 'Experience' },
  { label: 'Gallery' },
  { label: 'Contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href.startsWith('/teaching')) return pathname.startsWith('/teaching')
    return pathname.startsWith(href)
  }

  const linkBaseClasses = 'px-3 py-2 rounded-md font-medium transition-colors'

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gradient">
              Abo Ameen
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {primaryNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${linkBaseClasses} text-sm ${
                    isActive(item.href)
                      ? 'text-purple-600'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {upcomingNavItems.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-400 cursor-not-allowed select-none"
                  aria-disabled="true"
                  title={`${item.label} section is coming soon`}
                >
                  {item.label}
                  <span className="text-[10px] uppercase tracking-wide text-purple-500 bg-purple-400/10 border border-purple-400/40 rounded-full px-1.5 py-0.5">
                    Soon
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none focus:text-purple-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {primaryNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${linkBaseClasses} block text-base ${
                    isActive(item.href)
                      ? 'text-purple-600'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-4 border-t border-gray-200/70 pt-3">
                <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Coming Soon
                </p>
                <div className="space-y-1">
                  {upcomingNavItems.map((item) => (
                    <span
                      key={item.label}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 cursor-not-allowed"
                      aria-disabled="true"
                    >
                      {item.label}
                      <span className="ml-2 text-xs uppercase tracking-wide text-purple-400">
                        (Soon)
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}