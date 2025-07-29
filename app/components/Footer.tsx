import localFont from 'next/font/local';
import { twMerge } from 'tailwind-merge';

const redaction35Italic = localFont({
  src: '../fonts/Redaction_35-Italic.woff2',
});

export default function Footer() {

  return (
    <div
      className='relative h-[240px]'
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className='fixed bottom-0 h-[240px] w-full'>
        <div className="py-20 md:py16 bg-white text-black tracking-tight">
          <div className="container mx-auto flex items-center px-4 sm:px-0">
            <h1 className={
              twMerge(
                "text-3xl md:text-6xl",
                redaction35Italic.className
              )}
            >
              Let's Connect
            </h1>
            <div className="flex-grow ml-6 h-[1px] bg-black" />
          </div>
          <div className="container mx-auto flex items-center mt-6 text-lg text-black px-4 sm:px-0">
            <div className='flex flex-row space-x-6'>
              <a href="#mail">
                Mail
              </a>
              <a href="#github">
                Github
              </a>
              <a href="#linkedin">
                LinkedIn
              </a>
            </div>
            <div className="flex-grow mx-6 h-[1px] bg-black" />
            <p className="">©2025</p>
          </div>
        </div>
      </div>
    </div >
  );
}