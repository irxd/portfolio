'use client'

import localFont from 'next/font/local'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Container from '../components/ui/Container'
import WorkDescription from '../components/ui/WorkDescription'
import WorkTitle from '../components/ui/WorkTitle'
import { allWorks } from '../data/works'

const redaction35Italic = localFont({
  src: '../fonts/Redaction_35-Italic.woff2',
})

export default function Works() {
  const [activeWorkId, setActiveWorkId] = useState<number | null>(null)

  return (
    <Container>
      <div className="flex items-center">
        <h1 className={twMerge('text-3xl md:text-6xl', redaction35Italic.className)}>
          All Works
        </h1>
      </div>
      <div className="space-y-16 md:space-y-16 mt-16 md:mt-24">
        {allWorks.map((work) => (
          <article key={work.id}>
            <WorkTitle
              company={work.company}
              year={work.year}
              companyDescription={work.companyDescription}
              position={work.position}
              onClick={() =>
                setActiveWorkId(activeWorkId === work.id ? null : work.id)
              }
            />
            <WorkDescription
              works={work.works}
              isActive={activeWorkId === work.id}
            />
          </article>
        ))}
      </div>
    </Container>
  )
}
