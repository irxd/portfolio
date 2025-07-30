export default function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // @ts-expect-error
      window.lenis?.scrollTo(element, { offset: 0 });
    }
  };

  return (
    <>
      <div className="h-16"></div>
      <header className="py-6 sticky top-0 z-10 mix-blend-difference px-4 sm:px-0">
        <div className="container mx-auto flex items-center text-sm md:text-lg tracking-tight text-white">
          <p>Muhammad Irsyad</p>
          <div className="flex-grow mx-6 h-[1px] bg-foreground"></div>
          <nav className="space-x-6">
            <a className="cursor-pointer" onClick={(e) => handleScroll(e, 'works')}>
              Works
            </a>
            <a className="cursor-pointer" onClick={(e) => handleScroll(e, 'contact')}>
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
