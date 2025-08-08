'use client'

import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

export default function Header() {
  const lineRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      // @ts-expect-error Lenis already make this global
      window.lenis?.scrollTo(element, { offset: 0 })
    }
  }

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
        },
      )
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isScrollingDown = currentScrollPos > prevScrollPos

      setIsVisible(currentScrollPos < 10 || !isScrollingDown)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    <>
      <header
        className={`py-6 fixed top-0 z-10 mix-blend-difference px-4 sm:px-0 w-full transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto flex items-center text-sm md:text-base tracking-tight text-white">
          <p>Muhammad Irsyad</p>
          <div
            ref={lineRef}
            className="flex-grow mx-6 h-[1px] bg-foreground origin-left"
          ></div>
          <nav className="space-x-6">
            <a className="cursor-pointer" onClick={(e) => handleScroll(e, 'works')}>
              Works
            </a>
            <a
              className="cursor-pointer"
              onClick={(e) => handleScroll(e, 'contact')}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
