import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  Shield, 
  ArrowRight, 
  Leaf, 
  Award, 
  Truck, 
  Users, 
  TrendingUp, 
  Globe,
  Star,
  Sparkles
} from 'lucide-react';

const MangoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "Your Mango, Your Market",
      subtitle: "Direct from Orchard to Merchant",
      description: "Connect with verified merchants & farmers. List, discover, and trade premium Indian mangoes with complete transparency and trust.",
      features: ["Verified Farmers", "Trusted Merchants", "Direct Trade"],
      gradient: "from-green-600 via-green-500 to-green-400",
      bgGradient: "from-green-50 to-green-100",
      cardGradient: "from-green-100 to-green-200",
      borderColor: "border-green-200",
      hoverBorder: "hover:border-green-400",
      hoverBg: "hover:bg-green-50",
      textColor: "text-green-700",
      icon: Leaf,
      stats: { value: "10,000+", label: "Active Farmers" }
    },
    {
      title: "Premium Quality, Guaranteed",
      subtitle: "Farm Fresh Mangoes",
      description: "Experience the finest selection of mangoes directly from certified organic farms across India with quality assurance at every step.",
      features: ["Organic Certified", "Quality Assured", "Fresh Delivery"],
      gradient: "from-green-600 via-green-500 to-green-400",
      bgGradient: "from-green-50 to-green-100",
      cardGradient: "from-green-100 to-green-200",
      borderColor: "border-green-200",
      hoverBorder: "hover:border-green-400",
      hoverBg: "hover:bg-green-50",
      textColor: "text-green-700",
      icon: Award,
      stats: { value: "99.9%", label: "Quality Rating" }
    },
    {
      title: "Seamless Trading Platform",
      subtitle: "Connect. Trade. Grow.",
      description: "Join thousands of farmers and merchants in India's largest mango trading marketplace with advanced analytics and secure payments.",
      features: ["Easy Listing", "Secure Payments", "Growth Analytics"],
      gradient: "from-green-600 via-green-500 to-green-400",
      bgGradient: "from-green-50 to-green-100",
      cardGradient: "from-green-100 to-green-200",
      borderColor: "border-green-200",
      hoverBorder: "hover:border-green-400",
      hoverBg: "hover:bg-green-50",
      textColor: "text-green-700",
      icon: TrendingUp,
      stats: { value: "₹50Cr+", label: "Monthly Volume" }
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
   <div className="w-full bg-gradient-to-br from-gray-50 to-green-50 pt-16 sm:pt-6 md:pt-8 lg:pt-12 pb-0 sm:pb-6 lg:pb-8 px-2 sm:px-4 lg:px-6 xl:px-8">
      <div className="relative w-full max-w-full mx-auto bg-white rounded-lg sm:rounded-xl lg:rounded-2xl xl:rounded-3xl overflow-hidden shadow-lg border border-gray-100">
        {/* Main Carousel Container */}
        <div className="relative min-h-[680px] sm:h-[380px] md:h-[420px] lg:h-[440px] xl:h-[460px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                index === currentSlide
                  ? 'translate-x-0 opacity-100'
                  : index < currentSlide
                  ? '-translate-x-full opacity-0'
                  : 'translate-x-full opacity-0'
              }`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} opacity-30`} />
              
              <div className="relative flex flex-col lg:flex-row h-full min-h-[680px] sm:min-h-[380px] lg:min-h-0">
                {/* Right Visual - Mobile First */}
                <div className="flex-1 relative overflow-hidden min-h-[260px] sm:min-h-[240px] lg:min-h-0 order-2 lg:order-2">
                  <div className={`transform transition-all duration-1000 delay-400 ${
                    index === currentSlide && isVisible
                      ? 'translate-x-0 opacity-100 scale-100'
                      : 'translate-x-8 opacity-0 scale-95'
                  }`}>
                    <div className="relative h-full flex items-center justify-center p-3 sm:p-4 lg:p-6 pt-6 sm:pt-4">
                      {/* Main Visual Card */}
                      <div className={`relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-sm h-full min-h-[200px] sm:min-h-[220px] bg-gradient-to-br ${slide.cardGradient} rounded-xl sm:rounded-2xl shadow-xl border ${slide.borderColor}`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-xl sm:rounded-2xl" />
                        
                        <div className="relative h-full flex flex-col items-center justify-center p-2 sm:p-4 lg:p-6">
                          {/* Icon */}
                          <div className={`w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${slide.gradient} rounded-xl shadow-lg flex items-center justify-center mb-2 sm:mb-4 transform hover:scale-105 transition-all duration-300`}>
                            <slide.icon className="w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                          </div>
                          
                          {/* Mango Image */}
                          <div className={`w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${slide.cardGradient} rounded-full flex items-center justify-center mb-2 sm:mb-4 shadow-md overflow-hidden border-2 ${slide.borderColor}`}>
                            <img 
                              src="/mango.png" 
                              alt="Fresh Mango" 
                              className="w-full h-full object-cover rounded-full scale-110"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                              }}
                            />
                            <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center hidden">
                              <span className="text-white font-bold text-sm sm:text-xl">🥭</span>
                            </div>
                          </div>
                          
                          {/* Text */}
                          <h3 className="text-xs sm:text-base lg:text-lg font-bold text-gray-800 text-center mb-1 sm:mb-2">
                            Premium Mango Collection
                          </h3>
                          <p className="text-gray-600 text-center text-xs sm:text-sm mb-2 sm:mb-3">
                            Farm Fresh • Quality Assured
                          </p>
                          
                          {/* Rating */}
                          <div className="flex items-center gap-1 mb-2 sm:mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="text-xs sm:text-sm font-semibold text-gray-600 ml-1">4.9/5</span>
                          </div>
                          
                          {/* Organic Badge */}
                          <div className={`px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r ${slide.gradient} text-white text-xs sm:text-sm font-semibold rounded-full shadow-md`}>
                            100% ORGANIC
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Left Content */}
                <div className="flex-1 p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 flex flex-col justify-center order-1 lg:order-1 min-h-[400px] sm:min-h-[140px] lg:min-h-0">
                  <div className={`transform transition-all duration-1000 delay-300 ${
                    index === currentSlide && isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  }`}>
                    {/* Stats Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 sm:px-3 sm:py-1.5 rounded-full bg-gradient-to-r ${slide.gradient} bg-opacity-10 border ${slide.borderColor} mb-2 sm:mb-3 lg:mb-4`}>
                      <slide.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        {slide.stats.value} {slide.stats.label}
                      </span>
                    </div>

                    <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-1 sm:mb-2 lg:mb-3 leading-tight">
                      {slide.title === "Your Mango, Your Market" ? (
                        <>
                          <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                            Your Mango
                          </span>
                          ,{" "}
                          <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent block">
                            Your Market
                          </span>
                        </>
                      ) : (
                        <>
                          {slide.title.split(',')[0]},
                          <span className={`bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent block`}>
                            {slide.title.split(',')[1]}
                          </span>
                        </>
                      )}
                    </h1>
                  </div>
                  
                  <div className={`transform transition-all duration-1000 delay-500 ${
                    index === currentSlide && isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  }`}>
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-700 mb-1 sm:mb-2 lg:mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                      {slide.subtitle}
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 lg:mb-6 max-w-md leading-relaxed">
                      {slide.description}
                    </p>
                  </div>

                  <div className={`transform transition-all duration-1000 delay-700 ${
                    index === currentSlide && isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  }`}>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-6">
                      <button className={`bg-gradient-to-r ${slide.gradient} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group text-xs sm:text-sm`}>
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                      <button className={`border-2 ${slide.borderColor} ${slide.textColor} px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold ${slide.hoverBg} ${slide.hoverBorder} transition-all duration-300 text-xs sm:text-sm`}>
                        Learn More
                      </button>
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3 lg:gap-4">
                      {slide.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className={`flex items-center gap-2 transform transition-all duration-700 ${
                            index === currentSlide && isVisible
                              ? 'translate-x-0 opacity-100'
                              : 'translate-x-4 opacity-0'
                          }`}
                          style={{ transitionDelay: `${900 + featureIndex * 200}ms` }}
                        >
                          <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-r ${slide.gradient} flex items-center justify-center flex-shrink-0`}>
                            <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Hidden on mobile */}
        <button
          onClick={prevSlide}
          className="hidden sm:block absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-green-50 text-green-700 p-2 sm:p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 border border-green-200 z-10"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden sm:block absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-green-50 text-green-700 p-2 sm:p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 border border-green-200 z-10"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-green-500 scale-125'
                  : 'bg-gray-300 hover:bg-green-400'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-green-600 transition-all duration-1000 ease-out z-10"
             style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default MangoCarousel;