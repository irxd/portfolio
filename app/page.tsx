import Hero from './components/Hero';
import Works from './components/Works';

export default function Home() {
  return (
    <div className="bg-foreground">
      <Hero />
      <Works />
    </div>
  );
}
