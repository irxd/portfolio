'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import localFont from 'next/font/local'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { selectedWorks } from '../data/works'
import Container from './Container'
import WorkDescription from './WorkDescription'
import WorkTitle from './WorkTitle'

const redaction35Italic = localFont({
  src: '../fonts/Redaction_35-Italic.woff2',
})

const redaction20 = localFont({
  src: '../fonts/Redaction_20-Regular.woff2',
})

export default function SelectedWorks() {
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
    <Container>
      <div className="flex items-center">
        <h1 className={twMerge('text-3xl md:text-6xl', redaction35Italic.className)}>
          Selected Works
        </h1>
        <div
          ref={lineRef}
          className="flex-grow ml-6 h-[1px] bg-foreground origin-left"
        />
      </div>
      <div className="space-y-16 md:space-y-32 mt-16 md:mt-24">
        {selectedWorks.map((work) => (
          <article key={work.id}>
            <WorkTitle
              company={work.company}
              year={work.year}
              companyDescription={work.companyDescription}
            />
            <WorkDescription
              workDescription={work.workDescription}
              position={work.position}
              stack={work.stack}
              images={work.images}
              isActive={true}
            />
          </article>
        ))}

        <Link href="/works">
          <div className={twMerge('text-3xl', redaction35Italic.className)}>
            View All Works
          </div>
        </Link>
      </div>
    </Container>
  )
}
