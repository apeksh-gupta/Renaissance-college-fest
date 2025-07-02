import React from "react";
import Hero from "./Hero";
import { VideoSection } from "./videoGallery/VideoSection";
import Celebrity from "./Celebrity";
import GallerySection from "./GallerySection";

import Sponsor from "./Sponsor";



const HomeLayout = () => {
  return (

      <div className="smooth-scroll">
        <Hero />
        <Celebrity />
        <Sponsor/>
        <VideoSection />
        <GallerySection />
      </div>

  );
};

export default HomeLayout;
