'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

interface WorkTitleProps {
  company: string
  year: string
  companyDescription: string
  onClick?: () => void
}

export default function WorkTitle({
  company,
  year,
  companyDescription,
  onClick,
}: WorkTitleProps) {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

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
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top bottom-=100',
            toggleActions: 'play none none none',
          },
        },
      )
    }
  }, [])
  return (
    <button onClick={onClick} className="w-full text-left cursor-pointer">
      <div className="flex items-center text-base font-bold tracking-tight">
        <h2>{company}</h2>
        <div
          ref={lineRef}
          className="flex-grow mx-6 h-[1px] bg-foreground origin-left"
        />
        <p>{year}</p>
      </div>
      <p className="text-[#cacaca] md:max-w-1/2">{companyDescription}</p>
    </button>
  )
}
