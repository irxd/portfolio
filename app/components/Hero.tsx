import { twMerge } from 'tailwind-merge';
import localFont from 'next/font/local';

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
  return (
    <div className="min-h-screen flex container mx-auto">
      <div className="flex flex-col flex-grow justify-center">
        <p
          className={
            twMerge(
              redaction35Italic.className,
              "text-6xl leading-16 tracking-tight"
            )}
        >
          Full Stack Engineer
        </p>
        <p
          className={
            twMerge(
              redaction20.className,
              "text-6xl leading-16 tracking-tight"
            )}
        >
          Who Cares About Design
        </p>
        <p
          className={
            twMerge(
              redaction.className,
              "text-6xl leading-16 tracking-tight"
            )}
        >
          and Meaningful User Experience
        </p>
      </div>
    </div>
  );
}
