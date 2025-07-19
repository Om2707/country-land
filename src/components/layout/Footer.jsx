import React, { useState, useEffect, useRef } from 'react';
import { 
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  TreePine,
  Users,
  TrendingUp,
  MapPin,
  Award,
  Mail,
  Shield,
  Sparkles
} from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Mission", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Contact", href: "#" }
      ]
    },
    {
      title: "Platform",
      links: [
        { name: "For Farmers", href: "#" },
        { name: "For Merchants", href: "#" },
        { name: "How it Works", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "API", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Guidelines", href: "#" },
        { name: "Quality Standards", href: "#" },
        { name: "Dispute Resolution", href: "#" },
        { name: "FAQ", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Refund Policy", href: "#" },
        { name: "Trade Rules", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { Icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { Icon: Twitter, href: "#", color: "hover:text-sky-500" },
    { Icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { Icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { Icon: Youtube, href: "#", color: "hover:text-red-500" }
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Active Users" },
    { icon: TrendingUp, value: "₹50Cr+", label: "Monthly Volume" },
    { icon: MapPin, value: "25+", label: "States" },
    { icon: Award, value: "500+", label: "Merchants" }
  ];

  return (
    <footer 
      ref={footerRef}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-500/10 rounded-full animate-pulse" />
        <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-500/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-500/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto pt-16 pb-8">
          
          {/* Top Section */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Brand Section */}
              <div className="lg:col-span-4">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <TreePine className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                        Country Land
                      </h3>
                      <p className="text-xs text-gray-400">Mango Trading Platform</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Connecting farmers and merchants across India's vast mango landscape. 
                    Building the future of agricultural trade with trust, transparency, and technology.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {stats.map((stat, index) => (
                    <div 
                      key={index}
                      className={`text-center p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 transform transition-all duration-700 hover:scale-105 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <stat.icon className="w-5 h-5 text-green-400 mx-auto mb-1" />
                      <div className="text-sm font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color} transform ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 50 + 400}ms` }}
                    >
                      <social.Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Links Sections */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {footerSections.map((section, sectionIndex) => (
                    <div 
                      key={sectionIndex}
                      className={`transform transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                      }`}
                      style={{ transitionDelay: `${sectionIndex * 100 + 200}ms` }}
                    >
                      <h4 className="text-lg font-semibold mb-4 text-white">
                        {section.title}
                      </h4>
                      <ul className="space-y-3">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                              href={link.href}
                              className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm hover:underline"
                            >
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className={`mt-12 pt-8 border-t border-gray-700 transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">Stay Updated</h4>
                <p className="text-gray-400">Get the latest news, market insights, and trading opportunities.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className={`mt-8 pt-8 border-t border-gray-700 transform transition-all duration-1000 delay-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span>© 2025 Country Land. All rights reserved.</span>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Secured Platform</span>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span>Made with ❤️ in India</span>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span>Quality Assured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;