import { useState, useEffect } from 'react';

const Ready = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const sectionPosition = document.getElementById('cta-section').offsetTop;
      
      if (scrollPosition > sectionPosition) {
        setIsVisible(true);
      }
    };

    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="cta-section"
      className={`py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white relative overflow-hidden
        ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} 
        transition-all duration-1000 ease-out`}
    >
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div 
            key={`circle-${i}`}
            className={`absolute w-2 h-2 rounded-full bg-white opacity-20`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: isVisible ? `float ${3 + Math.random() * 4}s ease-in-out infinite` : 'none',
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
        
        {[...Array(6)].map((_, i) => (
          <div 
            key={`plus-${i}`}
            className={`absolute text-white opacity-20 font-bold text-lg`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: isVisible ? `float ${3 + Math.random() * 4}s ease-in-out infinite` : 'none',
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            +
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className={`text-3xl md:text-4xl font-bold  mb-6 
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} 
          transition-all duration-700 ease-out`}>
          Ready to Advance Your Career?
        </h2>
        
        <p className={`text-xl mb-8 max-w-3xl mx-auto
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} 
          transition-all duration-700 ease-out`}
          style={{ transitionDelay: '300ms' }}
        >
          Our team of healthcare training professionals is ready to help you reach the next level.
          Register for a course or workshop today.
        </p>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default Ready;