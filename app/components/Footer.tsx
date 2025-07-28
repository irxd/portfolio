export default function Footer() {
  return (
    <div
      className='relative h-[200px]'
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className='fixed bottom-0 h-[200px] w-full'>
        <div className="py-16 bg-black text-white">
          <div className="container mx-auto flex flex-col items-center justify-center">
            <p>© 2025 Muhammad Irsyad</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}