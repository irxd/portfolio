"use client";

import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function Header() {
  const lineRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // @ts-expect-error Lenis already make this global
      window.lenis?.scrollTo(element, { offset: 0 });
    }
  };

  useEffect(() => {
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'power3.inOut',
        }
      );
    }
  }, []);

  return (
    <>
      <header className="py-6 fixed top-0 z-10 mix-blend-difference px-4 sm:px-0 w-full">
        <div className="container mx-auto flex items-center text-sm md:text-lg tracking-tight text-white">
          <p>Muhammad Irsyad</p>
          <div ref={lineRef} className="flex-grow mx-6 h-[1px] bg-foreground origin-left"></div>
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
