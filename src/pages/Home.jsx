import { useState, lazy, Suspense, memo } from 'react';

import Navbar from '../components/layout/Navbar';
import Carousel from '../components/home/Carousel';

const InfoSection = lazy(() => 
  import('../components/home/Infosection').catch(() => ({
    default: () => <div className="text-center py-8 text-gray-500">Failed to load Info Section</div>
  }))
);

const AboutSection = lazy(() => 
  import('../components/home/AboutSection').catch(() => ({
    default: () => <div className="text-center py-8 text-gray-500">Failed to load About Section</div>
  }))
);

const ContactSection = lazy(() => 
  import('../components/home/ContactSection').catch(() => ({
    default: () => <div className="text-center py-8 text-gray-500">Failed to load Contact Section</div>
  }))
);

const Ready = lazy(() => 
  import('../components/home/Ready').catch(() => ({
    default: () => <div className="text-center py-8 text-gray-500">Failed to load Ready Section</div>
  }))
);

const Footer = lazy(() => 
  import('../components/layout/Footer').catch(() => ({
    default: () => <div className="text-center py-8 text-gray-500">Failed to load Footer</div>
  }))
);

const StudentReview = lazy(() => 
  import('../components/home/StudentReview').catch(() => ({
    default: () => <div className="text-center py-8 text-gray-500">Failed to load Student Reviews</div>
  }))
);

const LoadingPlaceholder = memo(() => (
  <div className="w-full py-12 px-4" role="status" aria-label="Loading content">
    <div className="max-w-6xl mx-auto">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded-md w-1/3 mx-auto"></div>
        
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
        
        <div className="h-10 bg-gray-200 rounded-md w-32 mx-auto mt-6"></div>
      </div>
    </div>
  </div>
));

LoadingPlaceholder.displayName = 'LoadingPlaceholder';

const LazySection = memo(({ children, fallback = <LoadingPlaceholder />, onError }) => (
  <Suspense fallback={fallback}>
    <ErrorBoundary onError={onError}>
      {children}
    </ErrorBoundary>
  </Suspense>
));

LazySection.displayName = 'LazySection';

const ErrorBoundary = ({ children, onError }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (error) => {
    setHasError(true);
    if (onError) onError(error);
  };

  if (hasError) {
    return (
      <div className="text-center py-8 text-red-500">
        <p>Something went wrong loading this section.</p>
        <button 
          onClick={() => setHasError(false)}
          className="mt-2 px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div onError={handleError}>
      {children}
    </div>
  );
};

// Main Home Component
const Home = () => {
  const [globalError, setGlobalError] = useState(false);

  const handleGlobalError = (error) => {
    console.error('Global error occurred:', error);
    setGlobalError(true);
  };

  if (globalError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Something went wrong
          </h1>
          <p className="text-gray-600 mb-4">
            We're sorry, but there was an error loading the page.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <header>
        <Navbar isHomePage={true} />
      </header>
      
      {/* Main content */}
      <main>
        {/* Hero Carousel Section */}
        <section className="w-full" aria-label="Hero carousel">
          <Carousel />
        </section>
        
       
        
        <LazySection onError={handleGlobalError}>
          <AboutSection />
        </LazySection>
        
        {/* Student Reviews Section */}
        <LazySection onError={handleGlobalError}>
          <StudentReview />
        </LazySection>
        
        {/* Call to Action Section */}
        {/* <LazySection onError={handleGlobalError}>
          <Ready />
        </LazySection> */}
        
        {/* Contact Section */}
        <LazySection onError={handleGlobalError}>
          <ContactSection />
        </LazySection>
      </main>
      
      {/* Footer Section */}
      <LazySection onError={handleGlobalError}>
        <Footer />
      </LazySection>
    </div>
  );
};

Home.displayName = 'Home';

export default memo(Home);