import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-[#f3f3f2] py-8 sm:py-12 px-4 z-30">
      <div className="mx-auto">

        {/* Bottom bar */}
        <div className="border-t border-[#f3f3f2] text-[#f3f3f2] pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <p className="text-xs sm:text-sm">
            &copy; 2025 k.stark
          </p>
          <div className="text-xs sm:text-sm">
            <span>
              <Link href='/about' className="hover:underline hover:decoration-wavy underline-offset-4">let's collaborate</Link></span>
          </div>
        </div>
      </div>
    </footer>
  );
}