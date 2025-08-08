'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import localFont from 'next/font/local'
import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Container from '../components/Container'
import WorkDescription from '../components/WorkDescription'
import WorkTitle from '../components/WorkTitle'
import { allWorks } from '../data/works'

const redaction35Italic = localFont({
  src: '../fonts/Redaction_35-Italic.woff2',
})

export default function Works() {
  const lineRef = useRef<HTMLDivElement>(null)
  const [activeWorkId, setActiveWorkId] = useState<number | null>(null)

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
          All Works
        </h1>
        <div
          ref={lineRef}
          className="flex-grow ml-6 h-[1px] bg-foreground origin-left"
        />
      </div>
      <div className="space-y-16 md:space-y-16 mt-16 md:mt-24">
        {allWorks.map((work) => (
          <article key={work.id}>
            <WorkTitle
              company={work.company}
              year={work.year}
              companyDescription={work.companyDescription}
              onClick={() =>
                setActiveWorkId(activeWorkId === work.id ? null : work.id)
              }
            />
            <WorkDescription
              workDescription={work.workDescription}
              position={work.position}
              stack={work.stack}
              images={work.images}
              isActive={activeWorkId === work.id}
            />
          </article>
        ))}
      </div>
    </Container>
  )
}
