import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import HomeLayout from './page2/home/HomeLayout';
import Navbar from './components/navbar/Navbar';
import Preloader from './components/preloader/Preloader';
import { usePreloader } from './context/PreloaderContext';
import Itinerary from './page2/itinerary/Itinerary';
import Teams from './page2/teams/Teams';
import Gallery from './page2/gallery/Gallery';
import Events from './page2/events/Events';
import Particles from './motionParticles/Particles';
import Footer from './components/footer/Footer';
import Rena from './components/Rena/Rena.jsx';
import Cursor from './components/cursor/Cursor.jsx';
import AboutPage from './page2/about/AboutPage.jsx';
import ScrollTop from './components/scrollTop/ScrollTop.jsx';
import Sponsors from './page2/home/sponsors/Sponsors.jsx';
import Register from './components/registerButton/Register.jsx';

const App = () => {
  const { showHero } = usePreloader();

  return (
    <div>
      {!showHero ? (
        <Preloader /> // Preloader video will handle when to hide
      ) : (
        <>
          <div className="relative">
            <Cursor />
            <Particles />
            <Navbar />
            <ScrollTop />
            <Routes>
              <Route path="/" element={<HomeLayout />} />
              <Route path="/about" element={<AboutPage   />} />
              <Route path="/events" element={<Events />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/itinerary" element={<Itinerary />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/sponsors" element={<Sponsors/>} />
              {/* <Route path="/login" element={<Login/>} /> */}

            </Routes>
            <Footer />
            <Register/>
            <Rena />
          </div>
        </>
      )}
    </div>

  );
};

export default App;
