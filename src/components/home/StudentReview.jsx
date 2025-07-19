import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, 
  User, 
  MapPin, 
  Quote,
  Users,
  Handshake,
  Leaf,
  TrendingUp,
  Heart,
  CheckCircle,
  Award
} from 'lucide-react';

const ReviewsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Reviews data
  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      type: "Farmer",
      location: "Uttar Pradesh",
      rating: 5,
      review: "Country Land has transformed my farming business! I can now sell my mangoes directly to merchants at fair prices. The platform is so easy to use and payments are always on time.",
      icon: "👨‍🌾",
      crop: "Alphonso Mangoes",
      experience: "3 years",
      gradient: "from-green-400 to-green-600"
    },
    {
      id: 2,
      name: "Priya Merchants Ltd",
      type: "Merchant",
      location: "Maharashtra",
      rating: 5,
      review: "Amazing platform for bulk trading! The quality verification system gives us confidence in every purchase. We've increased our sourcing efficiency by 40% since joining.",
      icon: "🏢",
      volume: "50+ Tonnes/Month",
      experience: "2 years",
      gradient: "from-yellow-400 to-yellow-600"
    },
    {
      id: 3,
      name: "Suresh Patel",
      type: "Farmer",
      location: "Gujarat",
      rating: 5,
      review: "No more middlemen! I get better prices for my produce and can plan my farming better. The merchant network is excellent and payments are transparent.",
      icon: "👨‍🌾",
      crop: "Kesar Mangoes",
      experience: "4 years",
      gradient: "from-green-500 to-green-600"
    },
    {
      id: 4,
      name: "Fresh Fruits Co.",
      type: "Merchant",
      location: "Delhi",
      rating: 5,
      review: "The quality of mangoes we get through Country Land is exceptional. Direct farmer connection ensures freshness and the pricing is competitive. Highly recommend!",
      icon: "🏪",
      volume: "100+ Tonnes/Month",
      experience: "1 year",
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      id: 5,
      name: "Lakshmi Devi",
      type: "Farmer",
      location: "Tamil Nadu",
      rating: 5,
      review: "As a woman farmer, this platform has empowered me to sell directly without depending on local traders. The support team is very helpful and understanding.",
      icon: "👩‍🌾",
      crop: "Banganapalli Mangoes",
      experience: "2 years",
      gradient: "from-green-400 to-green-500"
    },
    {
      id: 6,
      name: "Mango Masters",
      type: "Merchant",
      location: "Karnataka",
      rating: 5,
      review: "Country Land has streamlined our procurement process. We can now source premium mangoes directly from farmers across India. The platform's reliability is outstanding.",
      icon: "🥭",
      volume: "200+ Tonnes/Month",
      experience: "3 years",
      gradient: "from-yellow-400 to-yellow-500"
    },
    {
      id: 7,
      name: "Anil Singh",
      type: "Farmer",
      location: "Rajasthan",
      rating: 5,
      review: "Excellent platform! I've been able to expand my reach beyond local markets. The real-time pricing helps me make informed decisions about when to sell.",
      icon: "👨‍🌾",
      crop: "Totapuri Mangoes",
      experience: "5 years",
      gradient: "from-green-500 to-green-600"
    },
    {
      id: 8,
      name: "Golden Harvest",
      type: "Merchant",
      location: "West Bengal",
      rating: 5,
      review: "The merchant-to-merchant trading feature is fantastic! We can now redistribute excess inventory efficiently. Great platform for B2B mango trading.",
      icon: "🏬",
      volume: "75+ Tonnes/Month",
      experience: "2 years",
      gradient: "from-yellow-500 to-yellow-600"
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000); // Change review every 4 seconds

    return () => clearInterval(interval);
  }, [isVisible, reviews.length]);

  // Smooth scroll animation
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const reviewWidth = 400; // Width of each review card
      const gap = 32; // Gap between cards
      const scrollPosition = currentReview * (reviewWidth + gap);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentReview]);

  const handleReviewClick = (index) => {
    setCurrentReview(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getTypeIcon = (type) => {
    return type === 'Farmer' ? <Users className="w-5 h-5" /> : <Handshake className="w-5 h-5" />;
  };

  const getTypeColor = (type) => {
    return type === 'Farmer' ? 'text-green-600 bg-green-50' : 'text-yellow-600 bg-yellow-50';
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 via-green-50 to-yellow-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div 
          ref={sectionRef}
          className={`text-center mb-16 sm:mb-20 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 bg-opacity-10 border border-green-200 mb-6">
            <Heart className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white">Trusted by Thousands</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              What Our Community
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
              Says About Us
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from farmers and merchants who are transforming agriculture through our platform
          </p>
        </div>

        {/* Reviews Container */}
        <div className={`relative transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          
          {/* Scrolling Reviews */}
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide pb-4"
              style={{ 
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className={`flex-shrink-0 w-96 bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                    index === currentReview ? 'ring-2 ring-green-500 ring-opacity-50' : ''
                  }`}
                  onClick={() => handleReviewClick(index)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${review.gradient} opacity-5`} />
                  
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-20">
                    <Quote className="w-8 h-8 text-gray-400" />
                  </div>
                  
                  <div className="relative z-10">
                    {/* User Info */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-2xl shadow-lg">
                        {review.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800">{review.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(review.type)}`}>
                            {getTypeIcon(review.type)}
                            {review.type}
                          </span>
                          <div className="flex items-center gap-1 text-gray-500">
                            <MapPin className="w-3 h-3" />
                            <span className="text-sm">{review.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex gap-1">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">
                        {review.rating}.0 out of 5
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                      "{review.review}"
                    </p>

                    {/* Additional Info */}
                    <div className="border-t border-gray-100 pt-4">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Verified {review.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-yellow-500" />
                          <span>{review.experience} experience</span>
                        </div>
                      </div>
                      
                      {review.type === 'Farmer' ? (
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                          <Leaf className="w-4 h-4 text-green-500" />
                          <span>Grows {review.crop}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                          <TrendingUp className="w-4 h-4 text-yellow-500" />
                          <span>Trades {review.volume}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className={`flex items-center justify-center gap-2 mt-8 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => handleReviewClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview
                    ? 'bg-green-500 scale-125 shadow-lg'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          {[
            { value: '4.9', label: 'Average Rating', icon: Star, color: 'text-yellow-500' },
            { value: '10K+', label: 'Happy Farmers', icon: Users, color: 'text-green-500' },
            { value: '500+', label: 'Trusted Merchants', icon: Handshake, color: 'text-yellow-600' },
            { value: '99%', label: 'Success Rate', icon: CheckCircle, color: 'text-green-600' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;