import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Abo Ameen</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Welcome to my digital home - a space where education meets technology, 
              and where continuous learning drives innovation and growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 7.5c-3.425 0-6.2 2.775-6.2 6.2s2.775 6.2 6.2 6.2 6.2-2.775 6.2-6.2-2.775-6.2-6.2-6.2zm0 10.25c-2.235 0-4.05-1.815-4.05-4.05s1.815-4.05 4.05-4.05 4.05 1.815 4.05 4.05-1.815 4.05-4.05 4.05zm7.95-10.5c0 .8-.65 1.45-1.45 1.45s-1.45-.65-1.45-1.45.65-1.45 1.45-1.45 1.45.65 1.45 1.45zm4.1 1.47c-.092-1.94-.54-3.66-1.97-5.09s-3.15-1.88-5.09-1.97c-2.006-.108-8.024-.108-10.03 0-1.94.092-3.66.54-5.09 1.97s-1.88 3.15-1.97 5.09c-.108 2.006-.108 8.024 0 10.03.092 1.94.54 3.66 1.97 5.09s3.15 1.88 5.09 1.97c2.006.108 8.024.108 10.03 0 1.94-.092 3.66-.54 5.09-1.97s1.88-3.15 1.97-5.09c.108-2.006.108-8.024 0-10.03zm-2.59 12.2c-.41 1.03-1.2 1.82-2.23 2.23-1.54.61-5.2.47-6.91.47s-5.37.14-6.91-.47c-1.03-.41-1.82-1.2-2.23-2.23-.61-1.54-.47-5.2-.47-6.91s-.14-5.37.47-6.91c.41-1.03 1.2-1.82 2.23-2.23 1.54-.61 5.2-.47 6.91-.47s5.37-.14 6.91.47c1.03.41 1.82 1.2 2.23 2.23.61 1.54.47 5.2.47 6.91s.14 5.37-.47 6.91z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/assets/cv" className="text-gray-400 hover:text-white transition-colors">Download CV</a></li>
              <li><a href="/admin" className="text-gray-400 hover:text-white transition-colors">Admin Panel</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Newsletter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Abo Ameen. Built with Next.js, TypeScript, and passion for learning.</p>
        </div>
      </div>
    </footer>
  )
}