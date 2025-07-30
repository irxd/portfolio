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
    <div className="space-y-4 text-sm md:text-base">
      <p className="text-[#cacaca] md:max-w-1/2">
        {companyDescription}
      </p>
      <div className="space-y-4 mt-8 mb-8 md:max-w-1/2">
        <p>
          {workDescription}
        </p>
        <p>{position}</p>
        <p>{stack}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        {images.map(image => (
          <div key={image.id} className="w-full md:w-1/3">
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
  );
}