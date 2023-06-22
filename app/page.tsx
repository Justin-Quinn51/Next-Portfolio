import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Footer from './Footer';
import Technology from './Technology';

export default function Home() {
  return (
    <main className='grid gap-4 bg-gray-600 text-zinc-50'>
      <Header />
      <Hero />
      <Projects />
      <Technology />
      <Footer />
    </main>
  );
}
