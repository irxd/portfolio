'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'
interface WorkTitleProps {
  company: string
  year: string
  onClick?: () => void
  isButton: boolean
}

export default function WorkTitle({
  company,
  year,
  onClick,
  isButton,
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
    <button
      onClick={onClick}
      className={twMerge(
        'flex w-full items-center text-base font-bold tracking-tight',
        isButton ? 'cursor-pointer' : '',
      )}
    >
      <h2 className="text-left">{company}</h2>
      <div
        ref={lineRef}
        className="flex-grow mx-6 h-[1px] bg-foreground origin-left"
      />
      <p>{year}</p>
    </button>
  )
}
