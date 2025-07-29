import localFont from 'next/font/local';

const redaction = localFont({
  src: '../fonts/Redaction-Regular.woff2'
});

export default function Header() {
  return (
    <>
      <div className="h-16"></div>
      <div className="py-6 sticky top-0 z-10 mix-blend-difference transition-all duration-200">
        <div className="container mx-auto flex items-center">
          <h1 className="text-white text-xl font-normal tracking-tight">Muhammad Irsyad</h1>
          <div className="flex-grow mx-6 h-[1px] bg-white"></div>
          <nav className="space-x-6">
            <a
              href="#about"
              className="text-white text-xl hover:text-gray-300 transition-colors duration-200 tracking-tight"
            >
              About
            </a>
            <a
              href="#works"
              className="text-white text-xl hover:text-gray-300 transition-colors duration-200 tracking-tight"
            >
              Works
            </a>
            <a
              href="#contact"
              className="text-white text-xl hover:text-gray-300 transition-colors duration-200 tracking-tight"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
