import localFont from "next/font/local";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const redaction35Italic = localFont({
  src: '../fonts/Redaction_35-Italic.woff2',
});

export default function Works() {

  return (
    <div className="min-h-screen bg-black text-white relative">
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
          <div className="flex-grow ml-6 h-[1px] bg-white" />
        </div>
        <div className="space-y-16 md:space-y-32 mt-16 md:mt-24">
          <div>
            <div
              className="flex items-center text-md"
            >
              <div>First Media</div>
              <div className="flex-grow mx-6 h-[1px] bg-white" />
              <div>2025</div>
            </div>
            <div className="space-y-4 text-sm">
              <div className="text-[#cacaca]">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </div>
              <div className="space-y-4 mt-8 mb-8">
                <div className="md:max-w-1/2">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
                </div>
                <div>Fullstack</div>
                <div>React ▪ React Native ▪ Vue.js ▪ Typescript ▪ Jest ▪ React Native Testing Library</div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/3">
                  <Image
                    width={600}
                    height={300}
                    src="/images/fm-1.png"
                    alt="First Media Project"
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-full md:w-1/3">
                  <Image
                    width={600}
                    height={400}
                    src="/images/fm-2.png"
                    alt="First Media Project 2"
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-full md:w-1/3">
                  <Image
                    width={600}
                    height={400}
                    src="/images/fm-3.png"
                    alt="First Media Project 3"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              className="flex items-center text-md"
            >
              <div>Parcel Daily</div>
              <div className="flex-grow mx-6 h-[1px] bg-white" />
              <div>2024</div>
            </div>
            <div className="space-y-4 text-sm">
              <div className="text-[#cacaca]">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </div>
              <div className="space-y-4 mt-8 mb-8">
                <div className="md:max-w-1/2">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
                </div>
                <div>Fullstack</div>
                <div>React ▪ React Native ▪ Vue.js ▪ Typescript ▪ Jest ▪ React Native Testing Library</div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/3">
                  <Image
                    width={600}
                    height={300}
                    src="/images/pd-1.png"
                    alt="First Media Project"
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-full md:w-1/3">
                  <Image
                    width={600}
                    height={400}
                    src="/images/pd-2.png"
                    alt="First Media Project 2"
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-full md:w-1/3">
                  <Image
                    width={600}
                    height={400}
                    src="/images/pd-3.png"
                    alt="First Media Project 3"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
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