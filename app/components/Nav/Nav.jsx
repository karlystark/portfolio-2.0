"use client";

import Link from "next/link";
import Logo from "../Logo/Logo";

export default function Nav() {
  return (
    <nav className="m-10 mr-20 p-6">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Links */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <Link
            href="/about"
            className="text-black no-underline hover:text-[#b71e1e] hover:underline hover:decoration-wavy underline-offset-6"
          >
            about
          </Link>
          <Link
            href="/projects"
            className="text-black no-underline hover:text-[#b71e1e] hover:underline hover:decoration-wavy underline-offset-6"
          >
            projects
          </Link>
          <Link
            href="https://kstark.substack.com/"
            className="text-black no-underline hover:text-[#b71e1e] hover:underline hover:decoration-wavy underline-offset-6"
          >
            writing
          </Link>
        </div>
      </div>
    </nav>
  );
}

