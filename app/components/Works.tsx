"use client";

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import localFont from "next/font/local";
import { useEffect, useRef } from 'react';
import { twMerge } from "tailwind-merge";
import { selectedWorks } from "../data/works";
import WorkDescription from "./WorkDescription";
import WorkTitle from "./WorkTitle";

const redaction35Italic = localFont({
  src: '../fonts/Redaction_35-Italic.woff2',
});

export default function Works() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-white relative" id="works">
      <div className="container mx-auto pb-24 md:pb-64 pt-16 md:pt-32 px-4 sm:px-0">
        <div className="flex items-center">
          <h1 className={
            twMerge(
              "text-3xl md:text-6xl",
              redaction35Italic.className
            )}
          >
            Selected Works
          </h1>
          <div ref={lineRef} className="flex-grow ml-6 h-[1px] bg-foreground origin-left" />
        </div>
        <div className="space-y-16 md:space-y-32 mt-16 md:mt-24">
          {selectedWorks.map((work) => (
            <article key={work.id}>
              <WorkTitle
                company={work.company}
                year={work.year}
              />
              <WorkDescription
                companyDescription={work.companyDescription}
                workDescription={work.workDescription}
                position={work.position}
                stack={work.stack}
                images={work.images}
              />
            </article>
          ))}
        </div>
      </div>
      <div className="h-[2vw] w-[2vw] bg-foreground absolute bottom-0" />
      <div className="h-[2vw] w-[2vw] bg-foreground absolute bottom-0 left-[2vw]" />
      <div className="h-[2vw] w-[2vw] bg-foreground absolute bottom-[2vw]" />
      <div className="h-[2vw] w-[2vw] bg-foreground absolute bottom-0 right-0" />
      <div className="h-[2vw] w-[2vw] bg-foreground absolute bottom-0 right-[2vw]" />
      <div className="h-[2vw] w-[2vw] bg-foreground absolute bottom-[2vw] right-0" id="contact" />
    </div>
  );
}