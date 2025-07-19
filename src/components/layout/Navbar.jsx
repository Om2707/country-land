import { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  ShoppingCart,
  User,
  Search,
  Home,
  Apple,
  Grape,
  Cherry,
  Leaf,
  Settings,
  Store,
  Phone,
  Award,
  Package,
  Truck,
  Users,
  Zap
} from 'lucide-react';

const Navbar = ({ isHomePage = false, customBgColor }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const timeoutRef = useRef(null);

  const navItems = [
    {
      name: 'Home',
      path: '/',
      icon: Home,
      dropdown: null
    },
    {
      name: 'Tropical',
      icon: Apple,
      dropdown: [
        { name: 'Mango Merchants', path: '/mango-merchants', icon: Apple, description: 'Fresh tropical mangoes' },
        { name: 'Pineapple Suppliers', path: '/pineapple-suppliers', icon: Apple, description: 'Sweet pineapples' },
        { name: 'Coconut Dealers', path: '/coconut-dealers', icon: Apple, description: 'Fresh coconuts' },
        { name: 'Papaya Vendors', path: '/papaya-vendors', icon: Apple, description: 'Ripe papayas' },
        { name: 'Passion Fruit Sellers', path: '/passion-fruit', icon: Apple, description: 'Exotic passion fruits' }
      ]
    },
    {
      name: 'Citrus',
      icon: Grape,
      dropdown: [
        { name: 'Orange Merchants', path: '/orange-merchants', icon: Grape, description: 'Juicy oranges' },
        { name: 'Lemon Suppliers', path: '/lemon-suppliers', icon: Grape, description: 'Fresh lemons' },
        { name: 'Lime Dealers', path: '/lime-dealers', icon: Grape, description: 'Zesty limes' },
        { name: 'Grapefruit Vendors', path: '/grapefruit-vendors', icon: Grape, description: 'Pink grapefruits' }
      ]
    },
    {
      name: 'Seasonal',
      icon: Cherry,
      dropdown: [
        { name: 'Apple Merchants', path: '/apple-merchants', icon: Apple, description: 'Crisp apples' },
        { name: 'Banana Suppliers', path: '/banana-suppliers', icon: Apple, description: 'Ripe bananas' },
        { name: 'Grape Dealers', path: '/grape-dealers', icon: Grape, description: 'Sweet grapes' },
        { name: 'Berry Vendors', path: '/berry-vendors', icon: Cherry, description: 'Fresh berries' },
        { name: 'Stone Fruit Sellers', path: '/stone-fruits', icon: Cherry, description: 'Peaches & plums' }
      ]
    },
    {
      name: 'Exotic',
      icon: Leaf,
      dropdown: [
        { name: 'Dragon Fruit Merchants', path: '/dragon-fruit', icon: Leaf, description: 'Exotic dragon fruits' },
        { name: 'Kiwi Suppliers', path: '/kiwi-suppliers', icon: Leaf, description: 'Fresh kiwis' },
        { name: 'Avocado Dealers', path: '/avocado-dealers', icon: Leaf, description: 'Creamy avocados' },
        { name: 'Pomegranate Vendors', path: '/pomegranate-vendors', icon: Leaf, description: 'Ruby pomegranates' }
      ]
    },
    {
      name: 'Services',
      icon: Settings,
      dropdown: [
        { name: 'Quality Assurance', path: '/quality-assurance', icon: Award, description: 'Premium quality control' },
        { name: 'Bulk Orders', path: '/bulk-orders', icon: Package, description: 'Wholesale pricing' },
        { name: 'Fresh Delivery', path: '/fresh-delivery', icon: Truck, description: 'Same-day delivery' },
        { name: 'Merchant Support', path: '/merchant-support', icon: Users, description: '24/7 customer care' }
      ]
    },
    
    {
      name: 'Contact',
      path: '/',
      icon: Phone,
      isContact: true
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (activeDropdown !== null) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, activeDropdown]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index, event) => {
    event.preventDefault();
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const scrollToSection = (id, event) => {
    event.preventDefault();

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

    setActiveDropdown(null);

    if (id === 'bottom') {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleContactClick = (event) => {
    event.preventDefault();

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

    setActiveDropdown(null);

    const isOnHomePage = isHomePage || window.location.pathname === '/';

    if (isOnHomePage) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    } else {
      window.location.href = '/contact';
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const getNavbarBg = () => {
    if (customBgColor) {
      return customBgColor;
    } else {
      return scrolled
        ? 'bg-white/95 backdrop-blur-lg shadow-xl  '
        : 'bg-gradient-to-r from-emerald-50 via-green-50 to-lime-50';
    }
  };

  const getTextColor = () => {
    return scrolled ? 'text-slate-800' : 'text-slate-700';
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${getNavbarBg()}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section - Improved Layout */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-green-500 to-lime-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg flex-shrink-0">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-baseline space-x-1">
                  <h1 className={`text-2xl font-bold ${getTextColor()} bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 bg-clip-text text-transparent leading-none`}>
                    Country
                  </h1>
                  <h1 className={`text-2xl font-bold ${getTextColor()} bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent leading-none`}>
                    Land
                  </h1>
                </div>
                <p className={`text-xs ${getTextColor()} opacity-70 font-medium leading-tight mt-0.5`}>
                  Farm Fresh • Premium Quality
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => {
              return (
                <div key={index} className="relative">
                  {item.dropdown ? (
                    <button
                      className={`px-4 py-2 rounded-xl flex items-center space-x-2 text-sm font-semibold ${getTextColor()} hover:bg-gradient-to-r hover:from-emerald-100 hover:via-green-100 hover:to-lime-100 hover:text-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-md`}
                      onClick={(e) => toggleDropdown(index, e)}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <a
                      href={item.path}
                      onClick={item.isContact ? handleContactClick : (item.scrollTo ? (e) => scrollToSection(item.scrollTo, e) : null)}
                      className={`px-4 py-2 rounded-xl flex items-center space-x-2 text-sm font-semibold ${getTextColor()} hover:bg-gradient-to-r hover:from-emerald-100 hover:via-green-100 hover:to-lime-100 hover:text-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-md`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </a>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === index && (
                    <div
                      className={`
                        absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-emerald-100
                        transform transition-all duration-500 origin-top
                        opacity-100 scale-100 translate-y-0
                        z-[9999]
                        w-80 max-h-[calc(100vh-100px)] overflow-y-auto
                      `}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="p-3">
                        <div className="mb-4 p-4 bg-gradient-to-r from-emerald-50 via-green-50 to-lime-50 rounded-xl border border-emerald-100">
                          <h3 className="font-bold text-slate-800 flex items-center text-lg">
                            <item.icon className="w-5 h-5 mr-2 text-emerald-600" />
                            {item.name}
                          </h3>
                          <p className="text-sm text-slate-600 mt-1 font-medium">Premium quality • Farm fresh • Verified suppliers</p>
                        </div>
                        <div className="space-y-2">
                          {item.dropdown.map((dropdownItem, dropIndex) => (
                            <a
                              key={dropIndex}
                              href={dropdownItem.path}
                              className="flex items-center p-3 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:via-green-50 hover:to-lime-50 transition-all duration-300 group border border-transparent hover:border-emerald-200"
                            >
                              <div className="w-10 h-10 bg-gradient-to-r from-emerald-100 to-green-100 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                                <dropdownItem.icon className="w-5 h-5 text-emerald-600" />
                              </div>
                              <div className="flex-1">
                                <span className="font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors duration-300 block">
                                  {dropdownItem.name}
                                </span>
                                <p className="text-xs text-slate-500 group-hover:text-emerald-600 font-medium">
                                  {dropdownItem.description}
                                </p>
                              </div>
                              <Zap className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <button className={`p-3 rounded-xl ${getTextColor()} hover:bg-gradient-to-r hover:from-emerald-100 hover:via-green-100 hover:to-lime-100 hover:text-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-md`}>
              <Search className="w-5 h-5" />
            </button>
            <button className={`p-3 rounded-xl ${getTextColor()} hover:bg-gradient-to-r hover:from-emerald-100 hover:via-green-100 hover:to-lime-100 hover:text-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-md relative`}>
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full text-white text-xs flex items-center justify-center font-bold shadow-lg">
                3
              </span>
            </button>
            <button className={`p-3 rounded-xl ${getTextColor()} hover:bg-gradient-to-r hover:from-emerald-100 hover:via-green-100 hover:to-lime-100 hover:text-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-md`}>
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button className={`p-2 rounded-lg ${getTextColor()} hover:bg-gradient-to-r hover:from-emerald-100 hover:to-green-100 transition-all duration-300 sm:hidden`}>
              <Search className="w-5 h-5" />
            </button>
            <button className={`p-2 rounded-lg ${getTextColor()} hover:bg-gradient-to-r hover:from-emerald-100 hover:to-green-100 transition-all duration-300 relative sm:hidden`}>
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full text-white text-xs flex items-center justify-center font-bold">
                3
              </span>
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg ${getTextColor()} hover:bg-gradient-to-r hover:from-emerald-100 hover:to-green-100 transition-all duration-300`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white/95 backdrop-blur-lg border-t border-emerald-100 transition-all duration-500 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden shadow-2xl z-[90]`}
      >
        <div className="px-4 py-4 space-y-3 max-h-[70vh] overflow-y-auto">
          <div className="flex items-center space-x-2 mb-4 sm:hidden">
            <button className="flex-1 flex items-center justify-center space-x-2 p-3 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 transition-all duration-300">
              <Search className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-semibold text-slate-700">Search</span>
            </button>
            <button className="p-3 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 transition-all duration-300">
              <User className="w-5 h-5 text-emerald-600" />
            </button>
          </div>

          {navItems.map((item, index) => (
            <div key={index} className="  last:border-0 pb-3 last:pb-0">
              {item.dropdown ? (
                <>
                  <button
                    onClick={(e) => toggleDropdown(index, e)}
                    className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:via-green-50 hover:to-lime-50 transition-all duration-300 border border-transparent hover:border-emerald-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-100 to-green-100 rounded-lg flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="font-semibold text-slate-800">{item.name}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-emerald-500 transition-transform duration-300 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`ml-4 mt-2 space-y-2 transition-all duration-500 ${
                      activeDropdown === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    {item.dropdown.map((dropdownItem, dropIndex) => (
                      <a
                        key={dropIndex}
                        href={dropdownItem.path}
                        className="flex items-center p-3 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 transition-all duration-300 border border-transparent hover:border-emerald-200"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-100 to-green-100 rounded-lg flex items-center justify-center mr-3">
                          <dropdownItem.icon className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-semibold text-slate-700 block">{dropdownItem.name}</span>
                          <span className="text-xs text-slate-500 font-medium">{dropdownItem.description}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={item.path}
                  onClick={item.isContact ? handleContactClick : (item.scrollTo ? (e) => scrollToSection(item.scrollTo, e) : null)}
                  className="flex items-center p-4 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:via-green-50 hover:to-lime-50 transition-all duration-300 border border-transparent hover:border-emerald-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-100 to-green-100 rounded-lg flex items-center justify-center mr-3">
                    <item.icon className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="font-semibold text-slate-800">{item.name}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;