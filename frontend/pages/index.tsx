import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-blue text-white">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
