import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';

export default function Home() {
  return (
    <div className="bg-foreground">
      <Header />
      <Hero />
      <Works />
      <Footer />
    </div>
  );
}
