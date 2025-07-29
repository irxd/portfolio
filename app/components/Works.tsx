"use client";

import localFont from "next/font/local";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const redaction35Italic = localFont({
  src: '../fonts/Redaction_35-Italic.woff2',
});

export default function Works() {
  const [hovered, setHovered] = useState<number | null>(null);
  // const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="container mx-auto">
        <div className="flex items-center">
          <h1 className={
            twMerge(
              "text-6xl",
              redaction35Italic.className
            )}
          >
            Selected Works
          </h1>
          <div className="flex-grow ml-6 h-[1px] bg-white" />
        </div>
        <div className="space-y-12">
          <div>
            <div
              className="flex items-center mt-24 text-xl"
              onMouseEnter={() => setHovered(1)}
              onMouseLeave={() => setHovered(null)}
            // onClick={() => setSelected(1)}
            >
              <div>First Media</div>
              <div className={twMerge(
                "flex-grow mx-6 h-[1px]",
                hovered === 1 ? "bg-white" : "bg-black")} />
              <div>2025</div>
            </div>
            <div className="space-y-4">
              <div className="text-sm text-[#cacaca]">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </div>
              <div className="space-y-4 mt-8 mb-8">
                <div className="max-w-1/2">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
                </div>
                <div>Fullstack</div>
                <div>React ▪ React Native ▪ Vue.js ▪ Typescript ▪ Jest ▪ React Native Testing Library</div>
              </div>
              <div className="flex flex-row space-x-2">
                <div className="w-1/2">
                  <Image
                    width={600}
                    height={300}
                    src="/images/fm-1.png"
                    alt="First Media Project"
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-1/2">
                  <Image
                    width={600}
                    height={400}
                    src="/images/fm-2.png"
                    alt="First Media Project 2"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex items-center mt-16 text-xl"
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
          // onClick={() => setSelected(2)}
          >
            <div>Parcel Daily</div>
            <div className={twMerge(
              "flex-grow mx-6 h-[1px]",
              hovered === 2 ? "bg-white" : "bg-black")} />
            <div>2024</div>
          </div>
        </div>
      </div>
      <div className="h-[2vw] w-[2vw] bg-white absolute bottom-0" />
      <div className="h-[2vw] w-[2vw] bg-white absolute bottom-0 left-[2vw]" />
      <div className="h-[2vw] w-[2vw] bg-white absolute bottom-[2vw]" />
      <div className="h-[2vw] w-[2vw] bg-white absolute bottom-0 right-0" />
      <div className="h-[2vw] w-[2vw] bg-white absolute bottom-0 right-[2vw]" />
      <div className="h-[2vw] w-[2vw] bg-white absolute bottom-[2vw] right-0" />
    </div>
  );
}