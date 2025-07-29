export default function Header() {
  return (
    <>
      <div className="h-16"></div>
      <header className="py-6 sticky top-0 z-10 mix-blend-difference px-4 sm:px-0">
        <div className="container mx-auto flex items-center text-sm md:text-md tracking-tight text-white">
          <p>Muhammad Irsyad</p>
          <div className="flex-grow mx-6 h-[1px] bg-foreground"></div>
          <nav className="space-x-6">
            <a href="#works">
              Works
            </a>
            <a href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
