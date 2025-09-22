'use client';

import GalleryHero from './components/GalleryHero/GalleryHero';
import DescriptionList from './components/DescriptionList/DescriptionList';
import { useState, useEffect } from 'react';


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check window width
    const handleResize = () => setIsMobile(window.innerWidth < 639);

    // Run at start + on resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <DescriptionList /> : <GalleryHero />;
}
