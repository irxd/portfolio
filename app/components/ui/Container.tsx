export default function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-background text-white relative" id="works">
      <div className="container mx-auto pb-24 md:pb-64 pt-32 md:pt-32 px-4 sm:px-0">
        {children}
      </div>
      <div className="h-[2vw] w-[2vw] bg-foreground absolute bottom-0" />
      <div className="h-[2vw] w-[2vw] bg-foreground absolute bottom-0 left-[2vw]" />
      <div className="h-[2vw] w-[2vw] bg-foreground absolute bottom-[2vw]" />
      <div className="h-[2vw] w-[2vw] bg-foreground absolute bottom-0 right-0" />
      <div className="h-[2vw] w-[2vw] bg-foreground absolute bottom-0 right-[2vw]" />
      <div
        className="h-[2vw] w-[2vw] bg-foreground absolute bottom-[2vw] right-0"
        id="contact"
      />
    </div>
  )
}
