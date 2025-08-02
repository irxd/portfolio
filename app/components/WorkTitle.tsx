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
  isActive: boolean
}

export default function WorkTitle({
  company,
  year,
  onClick,
  isButton,
  isActive,
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
        'flex w-full items-center text-base tracking-tight',
        isButton ? 'cursor-pointer' : '',
      )}
    >
      <h2
        className={twMerge('text-left', isActive ? 'font-semibold' : 'font-normal')}
      >
        {company}
      </h2>
      <div
        ref={lineRef}
        className={twMerge(
          'flex-grow mx-6 h-[1px] origin-left',
          isActive ? 'bg-foreground' : 'bg-[#777777]',
        )}
      />
      <p className={isActive ? 'font-semibold' : 'font-normal'}>{year}</p>
    </button>
  )
}
