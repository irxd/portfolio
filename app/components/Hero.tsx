"use client";

import localFont from 'next/font/local';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Header from './Header';

const redaction35Italic = localFont({
  src: '../fonts/Redaction_35-Italic.woff2',
});

const redaction20 = localFont({
  src: '../fonts/Redaction_20-Regular.woff2',
});

const redaction = localFont({
  src: '../fonts/Redaction-Regular.woff2',
});

export default function Hero() {
  const [windowsWidth, setWindowsWidth] = useState(0);

  useEffect(() => {
    setWindowsWidth(window.innerWidth);
  }, [])

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.02;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
    return [...Array(nbOfBlocks).keys()].map((_, index) => {
      return (
        <div
          onMouseEnter={(e) => { colorize(e.currentTarget as HTMLDivElement) }}
          key={index}
          className="w-full h-[2vw]"
        />
      )
    })
  }

  const colorize = (el: HTMLDivElement) => {
    el.style.backgroundColor = "white";
    setTimeout(() => {
      el.style.backgroundColor = "transparent";
    }, 300)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-grow flex justify-center">
        <div className="container mx-auto mix-blend-difference text-white relative z-10 pointer-events-none flex-grow justify-center flex flex-col px-4 sm:px-0">
          <p className={twMerge(
            redaction35Italic.className,
            "text-3xl md:text-6xl leading-10 md:leading-18 tracking-tight"
          )}>
            Fullstack Engineer
          </p>
          <p className={twMerge(
            redaction20.className,
            "text-3xl md:text-6xl leading-10 md:leading-18 tracking-tight"
          )}>
            Who Cares About Design
          </p>
          <p className={twMerge(
            redaction.className,
            "text-3xl md:text-6xl leading-10 md:leading-18 tracking-tight"
          )}>
            and Meaningful User Experience
          </p>
        </div>

        <div className="flex h-full w-full overflow-hidden absolute">
          {
            windowsWidth > 0 && [...Array(50).keys()].map((_, index) => {
              return <div key={index} className="w-[2vw]">
                {
                  getBlocks()
                }
              </div>
            })
          }
        </div>
      </div>
    </div>
  );
}
