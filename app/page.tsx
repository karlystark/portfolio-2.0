'use client';

import Gallery from './components/Gallery/Gallery';
import { useEffect } from 'react';
import { useSpring } from 'framer-motion';
import styles from './page.module.css';
import Lenis from 'lenis';
// import DescriptionList from './components/DescriptionList/DescriptionList';

const projects = [
  {
    name: "1",
    handle: "1"
  },
  {
    name: "2",
    handle: "2"
  },
  {
    name: "3",
    handle: "3"
  },
];

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf)
  }, []);

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  }

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring)
  }

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2 * 0.25);
    const targetY = clientY - (window.innerWidth / 2 * 0.30);

    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  }

  return (
    <main onMouseMove={mouseMove} className={styles.main}>
      {
        projects.map(({handle}, i) => {
          return <Gallery mousePosition={mousePosition} handle={handle} key={i} />
        })
      }
    </main>

  );
}
