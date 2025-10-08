'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import { 
  Mail, Phone, MapPin, Linkedin, Github, Globe,
  MessageCircle, Youtube, Calendar, Map,
  Briefcase, FileText, GraduationCap, Code, Monitor,
  Smartphone, Rocket, TrendingUp as ChartLine
} from 'lucide-react';

// Custom TikTok Icon Component
const TikTokIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function DeveloperContactPage() {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    { id: 'portfolio', icon: Briefcase, title: 'Portfolio Website',
      description: 'Stand out with a stunning, professional portfolio that showcases your work and attracts opportunities.',
      features: ['Responsive Design', 'Modern UI/UX', 'SEO Optimized', 'Fast Loading'],
      color: 'from-purple-500 to-pink-500', bgGradient: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/30', price: 'Starting from $$$' },
    { id: 'cv', icon: FileText, title: 'ATS-Killer CV',
      description: 'Get past automated screening systems with a professionally crafted CV that gets you interviews.',
      features: ['ATS-Compliant', 'Professional Design', 'Keyword Optimized', 'Multiple Formats'],
      color: 'from-blue-500 to-cyan-500', bgGradient: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/30', price: 'Starting from $$' },
    { id: 'lms', icon: GraduationCap, title: 'LMS Platform',
      description: 'Launch your online learning platform with custom features, student management, and course delivery.',
      features: ['Student Dashboard', 'Course Management', 'Progress Tracking', 'Certificates'],
      color: 'from-green-500 to-emerald-500', bgGradient: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/30', price: 'Starting from $$$' },
    { id: 'mobile', icon: Smartphone, title: 'Mobile-First Design',
      description: 'Mobile-optimized websites and progressive web apps that work seamlessly across all devices.',
      features: ['Mobile-First', 'PWA Support', 'Touch Optimized', 'App-Like Experience'],
      color: 'from-pink-500 to-rose-500', bgGradient: 'from-pink-500/10 to-rose-500/10',
      borderColor: 'border-pink-500/30', price: 'Starting from $$$' },
   
  ];

  const contactInfo = [
    { id: 'email', icon: Mail, title: 'Email', value: 'menooteaching@gmail.com',
      link: 'mailto:menooteaching@gmail.com', color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30' },
    { id: 'phone', icon: Phone, title: 'Phone', value: '+966 541 913 057',
      link: 'tel:+966541913057', color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10', borderColor: 'border-green-500/30' },
    { id: 'location', icon: MapPin, title: 'Location', value: 'Dammam, Eastern Province',
      subtitle: 'Saudi Arabia', color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30' },
    { id: 'origin', icon: Globe, title: 'Originally From', value: 'Egypt', subtitle: '🇪🇬',
      color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30' }
  ];

  const socialLinks = [
    { id: 'linkedin', icon: Linkedin, name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/devameen/', color: 'hover:bg-[#0077B5]',
      gradient: 'from-[#0077B5] to-[#00A0DC]' },
    { id: 'github', icon: Github, name: 'GitHub', url: 'https://github.com/menoo20',
      color: 'hover:bg-gray-700', gradient: 'from-gray-300 to-white' },
    { id: 'youtube', icon: Youtube, name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCvOkSv6YMLPXridRkvERcvA',
      color: 'hover:bg-[#FF0000]', gradient: 'from-[#FF0000] to-[#CC0000]' },
    { id: 'tiktok', icon: TikTokIcon, name: 'TikTok',
      url: 'https://www.tiktok.com/@learn_english_with_mr', color: 'hover:bg-gradient-to-br hover:from-[#00F2EA] hover:to-[#FF0050]',
      gradient: 'from-[#00F2EA] via-[#00F2EA] to-[#FF0050]' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <Navigation />
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-24 sm:py-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm mb-4">
            <Rocket className="text-purple-400 w-5 h-5" />
            <span className="text-purple-300 font-medium text-sm">GET IN TOUCH</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Connect</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
            Explore my services below and reach out through any of my social channels. Let's build something amazing together!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info) => {
            const Icon = info.icon;
            const isHovered = hoveredCard === info.id;
            return (
              <div 
                key={info.id} 
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                onMouseEnter={() => setHoveredCard(info.id)} 
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated gradient glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-40 blur-xl group-hover:opacity-70 transition-opacity duration-500`}></div>
                
                {/* Card content */}
                <div className={`relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border ${info.borderColor} rounded-2xl p-6 h-full`}>
                  
                  {/* Tech grid pattern */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '15px 15px'
                    }}
                  ></div>
                  
                  {/* Animated corner accent */}
                  <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${info.color} opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-500 rounded-full`}></div>
                  
                  {/* Icon with pulse animation */}
                  <div className="relative mb-4">
                    {/* Pulse ring */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-md scale-110`}></div>
                    
                    <div className={`relative inline-flex p-4 rounded-xl bg-gradient-to-br ${info.color} shadow-lg transition-all duration-500 ${isHovered ? 'rotate-12 scale-110 shadow-2xl' : 'rotate-0 scale-100'}`}>
                      <Icon className={`w-6 h-6 text-white transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`} />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-gray-400 text-sm font-medium mb-2 uppercase tracking-wider relative z-10">
                    {info.title}
                  </h3>
                  
                  {/* Value with gradient on hover */}
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className={`block text-sm md:text-base font-bold mb-1 transition-all duration-300 relative z-10 whitespace-nowrap overflow-hidden text-ellipsis ${isHovered ? 'text-transparent bg-clip-text bg-gradient-to-r ' + info.color : 'text-white'}`}
                      title={info.value}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className={`text-sm md:text-base font-bold mb-1 transition-all duration-300 relative z-10 whitespace-nowrap overflow-hidden text-ellipsis ${isHovered ? 'text-transparent bg-clip-text bg-gradient-to-r ' + info.color : 'text-white'}`}
                       title={info.value}>
                      {info.value}
                    </p>
                  )}
                  
                  {/* Subtitle */}
                  {info.subtitle && (
                    <p className="text-gray-400 text-sm relative z-10 flex items-center gap-1">
                      {info.subtitle}
                    </p>
                  )}
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${info.color} transition-all duration-500 ${isHovered ? 'w-full' : 'w-0'} rounded-full`}></div>
                  
                  {/* Scan line effect */}
                  <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-full transition-all duration-1000 ${isHovered ? 'translate-y-full' : '-translate-y-full'}`}></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">My Services</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">From concept to deployment, I offer comprehensive solutions tailored to your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              const isHovered = hoveredService === service.id;
              return (
                <div key={service.id} 
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer`}
                  onMouseEnter={() => setHoveredService(service.id)} 
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Animated gradient border */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-50 blur-xl group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Card content */}
                  <div className={`relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border ${service.borderColor} rounded-2xl p-6 h-full`}>
                    
                    {/* Tech grid pattern background */}
                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px'
                      }}
                    ></div>
                    
                    {/* Animated corner accents */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.color} opacity-10 blur-2xl group-hover:opacity-30 transition-all duration-500 group-hover:w-32 group-hover:h-32`}></div>
                    <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br ${service.color} opacity-10 blur-2xl group-hover:opacity-30 transition-all duration-500 group-hover:w-32 group-hover:h-32`}></div>
                    
                    {/* Icon with floating animation */}
                    <div className="relative mb-4 flex items-center justify-between">
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} shadow-lg transition-all duration-500 ${isHovered ? 'rotate-12 scale-110 shadow-2xl' : 'rotate-0 scale-100'}`}>
                        <Icon className={`w-8 h-8 text-white transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`} />
                      </div>
                      {/* Floating badge */}
                      <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${service.color} text-white shadow-lg transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                        HOT
                      </div>
                    </div>
                    
                    {/* Title with gradient on hover */}
                    <h3 className={`text-white text-xl font-bold mb-3 transition-all duration-300 ${isHovered ? 'text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200' : ''}`}>
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed relative z-10">
                      {service.description}
                    </p>
                    
                    {/* Features with animated checkmarks */}
                    <ul className="space-y-2 mb-4 relative z-10">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-gray-400 text-xs flex items-center gap-2 group/item">
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} transition-all duration-300 group-hover/item:w-2 group-hover/item:h-2 group-hover/item:shadow-lg`}></span>
                          <span className="group-hover/item:text-gray-200 transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Price with animated underline */}
                    <div className="mt-auto pt-4 border-t border-gray-700/50 relative">
                      <div className={`absolute top-0 left-0 h-0.5 bg-gradient-to-r ${service.color} transition-all duration-500 ${isHovered ? 'w-full' : 'w-0'}`}></div>
                      <p className={`text-sm font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent flex items-center justify-between`}>
                        <span>{service.price}</span>
                        <svg className={`w-5 h-5 transition-all duration-300 ${isHovered ? 'translate-x-1 opacity-100' : 'translate-x-0 opacity-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </p>
                    </div>
                    
                    {/* Scan line effect */}
                    <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-full transition-all duration-1000 ${isHovered ? 'translate-y-full' : '-translate-y-full'}`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Connect on Social Media</h2>
            <div className="space-y-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer"
                    className={`group block p-[2px] rounded-xl bg-gray-600 hover:bg-gradient-to-r ${social.gradient} transition-all duration-300 hover:shadow-lg relative`}>
                    {/* Inner content container */}
                    <div className="flex items-center gap-4 p-4 rounded-[10px] bg-gray-800/90 relative overflow-hidden">
                      <div className={`relative p-3 rounded-lg bg-gradient-to-br ${social.gradient} transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                        {/* Glow effect on hover */}
                        <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${social.gradient} blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300`}></div>
                        <Icon className={`w-6 h-6 relative z-10 ${social.id === 'github' ? 'text-gray-900' : 'text-white'}`} />
                      </div>
                      <div className="flex-1 relative">
                        <h3 className="text-white font-semibold group-hover:text-purple-300 transition-colors">{social.name}</h3>
                        <p className="text-gray-400 text-sm">Follow me on {social.name}</p>
                      </div>
                      <svg className="relative w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl p-6 border border-green-500/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <h3 className="text-white font-bold text-lg">Currently Available</h3>
              </div>
              <p className="text-green-300 text-sm">Open for new projects and opportunities. Let's create something amazing together!</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Calendar className="text-blue-400 w-5 h-5" />
                Schedule a Meeting
              </h2>
              <p className="text-gray-300 text-sm mb-4">Book a free consultation call to discuss your project or collaboration ideas.</p>
              <a href="mailto:menooteaching@gmail.com?subject=Meeting Request&body=Hi Abo Ameen,%0A%0AI would like to schedule a meeting to discuss:%0A%0A[Please describe your project or inquiry]%0A%0APreferred Date/Time:%0A[Your availability]%0A%0AThank you!"
                className="block w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Request a Meeting
              </a>
              <p className="text-gray-400 text-xs mt-3 text-center">Or schedule directly via WhatsApp using the chat button below</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Map className="text-red-400 w-5 h-5" />
                My Location
              </h2>
              <div className="rounded-xl overflow-hidden border border-gray-600">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113815.10609875984!2d50.01342429726561!3d26.420698799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e361182b4461717%3A0x11f3a7f6d3526f51!2sDammam%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1728377890123!5m2!1sen!2seg"
                  width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full" />
              </div>
              <p className="text-gray-400 text-sm mt-3 text-center">Dammam, Eastern Province, Saudi Arabia</p>
            </div>
          </div>
        </div>
        <a href="https://wa.me/966541913057?text=Hello%20Abo%20Ameen!%20I'd%20like%20to%20discuss%20a%20project%20with%20you."
          target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-50 group" aria-label="Chat on WhatsApp">
          <div className="relative">
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
            <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-50"></div>
            <div className="relative bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-green-500/50">
              <MessageCircle className="w-8 h-8" />
            </div>
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg shadow-xl whitespace-nowrap">
                Chat on WhatsApp
                <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </div>
        </a>
        <div className="text-center mt-16">
          <button onClick={() => router.push('/developer')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105">
            ← Back to Developer Journey
          </button>
        </div>
      </div>

      {/* Floating Personal Photo - Half Body Cutout */}
      <div className="fixed -bottom-12 right-28 lg:right-32 z-30 pointer-events-none hidden md:block animate-fadeInUp">
        <div className="animate-floatUpDown">
          <img 
            src="/assets/photos/personal/trphoto.webp" 
            alt="Abo Ameen"
            className="h-80 lg:h-96 w-auto object-contain object-bottom drop-shadow-2xl"
            style={{
              filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))'
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatUpDown {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-floatUpDown {
          animation: floatUpDown 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
