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
        <div className="py-16 bg-white text-black tracking-tight">
          <div className="container mx-auto flex items-center">
            <h1 className={
              twMerge(
                "text-6xl",
                redaction35Italic.className
              )}
            >
              Let's Connect
            </h1>
            <div className="flex-grow ml-6 h-[1px] bg-black" />
          </div>
          <div className="container mx-auto flex items-center mt-6 text-lg text-black">
            <p className="">©2025</p>
            <div className="flex-grow mx-6 h-[1px] bg-black" />
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
          </div>
        </div>
      </div>
    </div >
  );
}