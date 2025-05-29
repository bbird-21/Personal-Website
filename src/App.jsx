// src/App.jsx
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import FixedHeader from './components/FixedHeader';
import Projects from './sections/Projects/Projects';
import Home from './sections/Home/Home';
import Footer from "./sections/Footer/Footer";
import LoadingScreen from './components/LoadingScreen'; // Import your LoadingScreen component

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResourcesLoaded = () => {
      // You could add a small artificial delay here if Three.js needs a fraction more time
      // for its internal setup post-window.onload, e.g., setTimeout(() => setIsLoading(false), 200);
      setTimeout(() => setIsLoading(false), 200);
    };

    // Check if the document is already loaded (e.g., fast cache)
    if (document.readyState === 'complete') {
      handleResourcesLoaded();
    } else {
      // Listen for the window 'load' event
      window.addEventListener('load', handleResourcesLoaded);
    }

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', handleResourcesLoaded);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <FixedHeader />
      <Home />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
