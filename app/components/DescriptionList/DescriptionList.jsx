"use client";

import Link from 'next/link';
import projects from '../../projects';
import { useState, useEffect } from 'react';

export default function DescriptionList() {
    const [activeIndex, setActiveIndex] = useState(0);

    const descriptions = projects.map(project => project.shortDescription);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % descriptions.length);
        }, 2000); // 2 seconds
        return () => clearInterval(interval);
    }, [descriptions.length]);

    return (
        <div className="DescriptionList md:px-12 px-10 py-10 md:pt-10 md:pb-20 leading-8">
            {descriptions.map((description, index) => (
                <span key={index} className={`text-2xl md:text-6xl transition-colors duration-500 ${
            index === activeIndex ? 'text-[#b71e1e]' : 'text-black'
          }`}>{description} // </span>
            ))}
        </div>
    );
}