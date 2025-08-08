import gsap from 'gsap'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

interface WorkDescriptionProps {
  workDescription: string
  position: string
  stack: string
  images: Array<{
    id: number
    src: string
    alt: string
  }>
  isActive: boolean
}

export default function WorkDescription({
  workDescription,
  position,
  stack,
  images,
  isActive,
}: WorkDescriptionProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      if (isActive) {
        gsap.fromTo(
          contentRef.current,
          {
            height: 0,
            opacity: 0,
            y: -20,
          },
          {
            height: 'auto',
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
          },
        )
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: 'power3.in',
        })
      }
    }
  }, [isActive])

  return (
    <div ref={contentRef} className="overflow-hidden h-0" style={{ opacity: 0 }}>
      <div className="space-y-4 mt-8 mb-8 md:max-w-1/2">
        <p className="text-sm md:text-base">{workDescription}</p>
        <p className="text-sm">{position}</p>
        <p className="text-sm">{stack}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-full md:w-1/3">
            <Image
              width={600}
              height={300}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
