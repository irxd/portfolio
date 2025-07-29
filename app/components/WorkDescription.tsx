import Image from "next/image";

interface WorkDescriptionProps {
  companyDescription: string;
  workDescription: string;
  position: string;
  stack: string;
  images: Array<{
    id: number;
    src: string;
    alt: string;
  }>
}

export default function WorkDescription({
  companyDescription, workDescription, position, stack, images
}: WorkDescriptionProps) {
  return (
    <div className="space-y-4 text-sm">
      <div className="text-[#cacaca] md:max-w-1/2">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </div>
      <div className="space-y-4 mt-8 mb-8 md:max-w-1/2">
        <div>
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
  );
}