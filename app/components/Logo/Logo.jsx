"use client";

import { useState } from "react";
import Link from "next/link";
import { Circle, CircleDot } from "lucide-react";

/**
 * Logo renders the logo element of the Nav.
 */
export default function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center">
      <Link
        href="/"
        aria-label="visit home page"
        role="button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center m-8"
      >
       <i className={`bi ${isHovered ? `bi-circle-fill text-[#b71e1e]` : `bi-circle`} text-3xl pr-2`}></i>
        <h1 className="text-3xl font-semibold">k.stark</h1>
      </Link>
    </div>
  );
}
