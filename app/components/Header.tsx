export default function Header() {
  return (
    <>
      <div className="h-16"></div>
      <div className="py-6 sticky top-0 z-10 mix-blend-difference transition-all duration-200">
        <div className="container mx-auto flex items-center text-lg tracking-tight text-white">
          <h1 className="font-normal">Muhammad Irsyad</h1>
          <div className="flex-grow mx-6 h-[1px] bg-white"></div>
          <nav className="space-x-6">
            <a href="#works">
              Works
            </a>
            <a href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
