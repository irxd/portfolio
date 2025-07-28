import localFont from 'next/font/local';
import { twMerge } from 'tailwind-merge';

const redaction = localFont({
  src: '../fonts/Redaction-Regular.woff2'
});

export default function Header() {
  return (
    <>
      <div className="h-16"></div>
      <div className="bg-background py-6 sticky top-0 z-50 transition-all duration-200">
        <div className="container mx-auto flex items-center">
          <h1 className={twMerge("text-white text-xl font-normal", redaction.className)}>Muhammad Irsyad</h1>
          <div className="flex-grow mx-2 h-[1px] bg-white"></div>
          <nav className="space-x-6">
            <a
              href="#about"
              className={twMerge("text-white text-xl hover:text-gray-300 transition-colors duration-200", redaction.className)}
            >
              About
            </a>
            <a
              href="#works"
              className={twMerge("text-white text-xl hover:text-gray-300 transition-colors duration-200", redaction.className)}
            >
              Works
            </a>
            <a
              href="#contact"
              className={twMerge("text-white text-xl hover:text-gray-300 transition-colors duration-200", redaction.className)}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
