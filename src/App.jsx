import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoadingFallback from './LoadingFallback';

const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./components/home/ContactSection'));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />
          
          <Route path="/contact" element={<Contact />} />
          
          {/* Redirect to home if no route matches */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;