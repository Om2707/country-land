import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award,  Heart, Stethoscope, GraduationCap, Star, MapPin } from 'lucide-react';

const _ = motion;

const InfoSection = () => {
  const imageControls = useAnimation();
  const contentControls = useAnimation();
  
  const [imageRef, imageInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [contentRef, contentInView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (imageInView) {
      imageControls.start('visible');
    }
    if (contentInView) {
      contentControls.start('visible');
    }
  }, [imageInView, contentInView, imageControls, contentControls]);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-violet-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-100 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            <motion.div 
              className="order-2 lg:order-1"
              ref={imageRef}
              initial="hidden"
              animate={imageControls}
              variants={imageVariants}
            >
              <div className="relative max-w-md mx-auto lg:max-w-lg">
                <div className="relative">
                  <motion.div 
                    className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-white p-2"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-purple-50 to-violet-100">
                      <img 
                        src="/doctor.png" 
                        alt="Dr. Mrugesh Suthar" 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 border-2 border-purple-100"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">Active Instructor</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="absolute -top-6 -left-6 w-12 h-12 bg-purple-500/20 rounded-full"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                  <motion.div 
                    className="absolute -bottom-6 -left-8 w-8 h-8 bg-violet-500/20 rounded-full"
                    animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="order-1 lg:order-2"
              ref={contentRef}
              initial="hidden"
              animate={contentControls}
              variants={contentVariants}
            >
              <motion.div className="mb-8" variants={textItemVariants}>
                <motion.h2 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent"
                  variants={textItemVariants}
                >
                  DR. MRUGESH SUTHAR
                </motion.h2>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 text-white text-sm font-medium rounded-full">
                    <Heart size={14} />
                    Emergency Room Consultant
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-600 text-white text-sm font-medium rounded-full">
                    <Stethoscope size={14} />
                    Clinical Simulation Instructor
                  </span>
                </div>

                <motion.div 
                  className="flex items-center gap-2 text-gray-600 mb-6"
                  variants={textItemVariants}
                >
                  <MapPin size={16} />
                  <span className="text-sm">Vadodara, Gujarat</span>
                </motion.div>
              </motion.div>

              <motion.div className="space-y-8" variants={textItemVariants}>
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300"
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="flex items-center gap-3 mb-6 pb-4 border-b border-purple-100"
                    variants={textItemVariants}
                  >
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <Award className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Professional Credentials</h3>
                      <p className="text-gray-600">Certifications, Leadership & Expertise</p>
                    </div>
                  </motion.div>

                  <div className="mb-8">
                    <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      AHA/ACS Instructor Certifications
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <Heart className="text-red-600" size={18} />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">ACLS</div>
                          <div className="text-xs text-gray-600">Advanced Cardiac Life Support</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Stethoscope className="text-blue-600" size={18} />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">BLS</div>
                          <div className="text-xs text-gray-600">Basic Life Support</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <Award className="text-green-600" size={18} />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">ATLS</div>
                          <div className="text-xs text-gray-600">Advanced Trauma Life Support</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      Additional Instructor Credentials
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Star className="text-orange-600" size={18} />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">ECG</div>
                          <div className="text-xs text-gray-600">Electrocardiogram</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                          <Heart className="text-teal-600" size={18} />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">First Aid</div>
                          <div className="text-xs text-gray-600">Emergency Response</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Stethoscope className="text-orange-600" size={18} />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">CSI</div>
                          <div className="text-xs text-gray-600">Clinical Simulation Instructor</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      Leadership Positions
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="text-purple-600" size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 mb-1">Centre Head & Lead Faculty</div>
                          <div className="text-gray-600 text-sm">Pragya - The Advanced Skills & Simulation</div>
                          <div className="text-gray-500 text-xs mt-1">Parul University, Vadodara</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                        <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Award className="text-violet-600" size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 mb-1">Director & Lead Faculty</div>
                          <div className="text-gray-600 text-sm">Academy of Emergency Medicine</div>
                          <div className="text-gray-500 text-xs mt-1">Vadodara, Gujarat</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;