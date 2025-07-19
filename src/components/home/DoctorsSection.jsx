import  { useEffect, useState } from 'react';

const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Emergency Medicine",
    image: "/doctor-1.png",
    experience: "15+ years experience",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Trauma Care",
    image: "/doctor-2.png",
    experience: "12+ years experience",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Critical Care",
    image: "/doctor-3.png",
    experience: "10+ years experience",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Emergency Response",
    image: "/doctor-4.png",
    experience: "14+ years experience",
  }
];

const DoctorsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById('doctors-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section 
      id="doctors-section" 
      className="py-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1e0850 0%, #4a1d96 100%)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className={`text-center mb-16 transform transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <h2 className="text-3xl font-poppins font-bold text-white sm:text-4xl">
            OUR EXPERT FACULTIES
          </h2>
          <div className="mt-4 flex justify-center">
          </div>
          <p className="mt-6 text-xl text-white">
            Leading specialists committed to Emergency medical excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctorsData.map((doctor, index) => (
            <div 
              key={doctor.id}
              className={`bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden transition-all duration-700 border border-white/20 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "/api/placeholder/300/300?text=Doctor";
                  }}
                />
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white">{doctor.name}</h3>
                <div className="flex items-center justify-center">
                  <span className={`inline-block h-px w-12 bg-white mt-2 mb-2 transition-all duration-300 ${
                    activeIndex === index ? 'w-20' : ''
                  }`}></span>
                </div>
                <p className="text-white font-medium">{doctor.specialty}</p>
                <p className="text-white/80 mt-2 text-sm">{doctor.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="w-full h-px bg-white/20"></div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default DoctorsSection;