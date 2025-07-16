import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Services from '@/app/components/Services';
import IssuesAndProcess from '@/app/components/IssuesAndProcess';
import Gallery from '@/app/components/Gallery';
import Testimonial from '@/app/components/Testimonial';
import Contact from '@/app/components/CTA';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <IssuesAndProcess />
      <Gallery />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
}
