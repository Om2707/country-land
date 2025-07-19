import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, 
  Users, 
  TrendingUp, 
  Award, 
  Leaf, 
  Globe, 
  ArrowRight, 
  Shield, 
  CheckCircle,
  Sparkles,
  TreePine,
  Handshake
} from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const platformRef = useRef(null);
  const heritageRef = useRef(null);

  // Animated counter hook
  const useAnimatedCounter = (targetValue, duration = 2000, isVisible = false) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isVisible) return;
      
      let startTime = null;
      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        if (typeof targetValue === 'string') {
          const numPart = targetValue.match(/\d+/);
          if (numPart) {
            const num = parseInt(numPart[0]);
            const currentNum = Math.floor(progress * num);
            const suffix = targetValue.replace(/\d+/, '');
            setCount(currentNum + suffix);
          }
        } else {
          setCount(Math.floor(progress * targetValue));
        }
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [targetValue, duration, isVisible]);
    
    return count;
  };

  // Enhanced Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const sections = [sectionRef, statsRef, platformRef, heritageRef];
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { 
      value: "₹50Cr+", 
      label: "Monthly Volume", 
      icon: TrendingUp,
      gradient: "from-green-500 to-green-600"
    },
    { 
      value: "10000+", 
      label: "Active Farmers", 
      icon: Users,
      gradient: "from-blue-500 to-blue-600"
    },
    { 
      value: "500+", 
      label: "Merchants", 
      icon: Handshake,
      gradient: "from-yellow-500 to-yellow-600"
    },
    { 
      value: "25+", 
      label: "States", 
      icon: MapPin,
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  const tradingMethods = [
    {
      icon: Users,
      title: "Farmer to Merchant",
      description: "Direct connection between farmers and merchants for fresh produce",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Handshake,
      title: "Merchant to Merchant",
      description: "Seamless bulk trading between verified merchants across India",
      gradient: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 via-green-50 to-yellow-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div 
          ref={sectionRef}
          id="header"
          className={`text-center mb-16 sm:mb-20 transform transition-all duration-1000 ease-out ${
            isVisible.header ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 bg-opacity-10 border border-green-200 mb-6 transform transition-all duration-700 delay-300 ${
            isVisible.header ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}>
            <Globe className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white">Country Land Trading Platform</span>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 transform transition-all duration-1000 delay-200 ${
            isVisible.header ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Country Land
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
              Mango Heritage
            </span>
          </h2>
          
          <p className={`text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-500 ${
            isVisible.header ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            India produces 40% of the world's mangoes. We're bridging farmers and merchants 
            across this agricultural powerhouse through direct trading.
          </p>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          id="stats"
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20 transform transition-all duration-1000 delay-200 ${
            isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {stats.map((stat, index) => {
            const animatedValue = useAnimatedCounter(stat.value, 2000, isVisible.stats);
            return (
              <div
                key={index}
                className={`bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 100 + 300}ms`,
                  animationDelay: `${index * 100 + 300}ms`
                }}
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mb-4 sm:mb-6 transform transition-all duration-500 ${
                  isVisible.stats ? 'scale-100 rotate-0' : 'scale-75 rotate-12'
                }`}>
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                  {animatedValue}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Platform Section */}
        <div 
          ref={platformRef}
          id="platform"
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible.platform ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100">
            
            {/* Trading Methods */}
            <div className="mb-12 sm:mb-16">
              <div className={`text-center mb-8 sm:mb-12 transform transition-all duration-1000 delay-500 ${
                isVisible.platform ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  Direct Trading Platform
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Two powerful ways to trade premium Indian mangoes
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                {tradingMethods.map((method, index) => (
                  <div
                    key={index}
                    className={`relative group hover:shadow-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                      isVisible.platform ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 200 + 700}ms`
                    }}
                  >
                    <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-xl p-6 sm:p-8 border border-gray-100 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-green-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10">
                        <div className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                          <method.icon className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                          {method.title}
                        </h4>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                          {method.description}
                        </p>
                        <div className="flex items-center gap-2 text-green-600 font-semibold">
                          <span className="text-sm">Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Country Heritage Section */}
        <div 
          ref={heritageRef}
          id="heritage"
          className={`mt-16 sm:mt-20 transform transition-all duration-1000 delay-400 ${
            isVisible.heritage ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-700/20" />
            
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
              <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                
                {/* Left Content */}
                <div className={`transform transition-all duration-1000 delay-600 ${
                  isVisible.heritage ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                }`}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-6">
                    <TreePine className="w-5 h-5 text-white" />
                    <span className="text-sm font-semibold text-white">India's Agricultural Heritage</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                    Land of Golden Mangoes
                  </h3>
                  
                  <p className="text-lg text-green-100 leading-relaxed mb-8">
                    With 4,000+ years of cultivation heritage, India's diverse climate 
                    creates perfect conditions for 1,500+ mango varieties across 29 states.
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-white" />
                      <span className="text-sm font-medium">2.2M Hectares</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-white" />
                      <span className="text-sm font-medium">20M Tonnes/Year</span>
                    </div>
                  </div>
                </div>

                {/* Right Visual */}
                <div className={`flex justify-center transform transition-all duration-1000 delay-800 ${
                  isVisible.heritage ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-95'
                }`}>
                  <div className="relative">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 animate-pulse">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-700 hover:scale-110">
                        <img 
                          src="/mango1.png" 
                          alt="Premium Mango" 
                          className="w-20 h-20 sm:w-24 sm:h-24 object-contain transform transition-all duration-500 hover:rotate-12"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'block';
                          }}
                        />
                        <span className="text-6xl sm:text-7xl hidden">🥭</span>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className={`absolute -top-4 -right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce transform transition-all duration-700 delay-1000 ${
                      isVisible.heritage ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                    }`}>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className={`absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce transform transition-all duration-700 delay-1200 ${
                      isVisible.heritage ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                    }`} style={{ animationDelay: '1s' }}>
                      <Leaf className="w-6 h-6 text-white" />
                    </div>
                    <div className={`absolute top-1/2 -left-8 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-ping transform transition-all duration-700 delay-1400 ${
                      isVisible.heritage ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                    }`}>
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className={`absolute top-1/2 -right-8 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-ping transform transition-all duration-700 delay-1600 ${
                      isVisible.heritage ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                    }`} style={{ animationDelay: '0.5s' }}>
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;