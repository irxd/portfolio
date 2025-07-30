import localFont from 'next/font/local';
import { twMerge } from 'tailwind-merge';

const redaction35Italic = localFont({
  src: '../fonts/Redaction_35-Italic.woff2',
});

export default function Footer() {

  return (
    <div
      className='relative h-[250px] md:h-[256px]'
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <footer className="fixed bottom-0 h-[250px] md:h-[256px] w-full">
        <div className="py-22 md:py16 bg-foreground text-black tracking-tight">
          <div className="container mx-auto flex items-center px-4 sm:px-0">
            <h1 className={
              twMerge(
                "text-3xl md:text-6xl",
                redaction35Italic.className
              )}
            >
              Let's Connect
            </h1>
            <div className="flex-grow ml-6 h-[1px] bg-background" />
          </div>
          <div className="container mx-auto flex items-center mt-6 text-sm md:text-md text-black px-4 sm:px-0">
            <div className='flex flex-row space-x-6'>
              <a href="mailto:irsyart@gmail.com">
                Mail
              </a>
              <a href="https://github.com/irxd">
                Github
              </a>
              <a href="https://linkedin.com/in/irxd">
                LinkedIn
              </a>
            </div>
            <div className="flex-grow mx-6 h-[1px] bg-background" />
            <p className="">©{new Date().getFullYear()}</p>
          </div>
        </div>
      </footer >
    </div >
  );
}