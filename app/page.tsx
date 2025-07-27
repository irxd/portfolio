import Header from './components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col">
        <div className="flex flex-col flex-grow">
          <div className="flex-grow flex items-center justify-center">
            <div className="container mx-auto px-4">
              hero
            </div>
          </div>
        </div>
      </div>
      {/* <div className="min-h-screen">about</div> */}
    </>
  );
}
