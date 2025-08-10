'use client'

import gsap from 'gsap'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { twMerge } from 'tailwind-merge'
import './WorkDescription.module.css'

interface WorkDescriptionProps {
  works: Array<{
    id: number
    title: string
    description: string
    stack: string
    images: Array<{
      id: number
      src: string
      alt: string
      type?: string
    }>
  }>
  isActive: boolean
}

export default function WorkDescription({ works, isActive }: WorkDescriptionProps) {
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
      {works.map((work, index) => (
        <div
          key={work.id}
          className={`mb-16 ${index !== works.length - 1 ? 'border-b border-dashed border-[#666666] pb-16' : ''}`}
        >
          <div className="space-y-4 mt-8">
            <div className="text-sm md:text-base">{work.title}</div>
            <div className="text-sm md:text-base whitespace-pre-line text-justify">
              {work.description}
            </div>
            <p className="text-sm text-[#cacaca]">{work.stack}</p>
          </div>
          {work.images?.length > 0 && (
            <div className="mt-16">
              {work.images.some((img) => img.type === 'app') ? (
                <div className="block md:flex md:flex-row md:gap-4">
                  <div className="md:hidden w-full">
                    <Swiper
                      modules={[Pagination]}
                      pagination={{ clickable: true }}
                      spaceBetween={20}
                      className="w-full"
                    >
                      {work.images.map((image) => (
                        <SwiperSlide key={image.id}>
                          <Image
                            width={600}
                            height={300}
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="hidden md:flex md:flex-row md:gap-4">
                    {work.images.map((image) => (
                      <div
                        key={image.id}
                        className={twMerge(
                          'w-full',
                          image.type === 'app' ? 'md:w-1/8' : 'md:w-1/3',
                        )}
                      >
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
              ) : (
                <div className="flex flex-col md:flex-row gap-4">
                  {work.images.map((image) => (
                    <div
                      key={image.id}
                      className={twMerge(
                        'w-full',
                        image.type === 'app' ? 'md:w-1/8' : 'md:w-1/3',
                      )}
                    >
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
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
