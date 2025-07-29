interface WorkTitleProps {
  company: string;
  year: string;
}

export default function WorkTitle({ company, year }: WorkTitleProps) {
  return (
    <div
      className="flex items-center text-md"
    >
      <h2>{company}</h2>
      <div className="flex-grow mx-6 h-[1px] bg-foreground" />
      <p>{year}</p>
    </div>
  );
}