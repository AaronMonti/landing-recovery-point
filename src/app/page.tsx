import dynamic from 'next/dynamic';
import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import LazySection from '@/app/components/LazySection';

// Lazy load de componentes pesados
const Services = dynamic(() => import('@/app/components/Services'), {
  ssr: true
});

const IssuesAndProcess = dynamic(() => import('@/app/components/IssuesAndProcess'), {
  ssr: true
});

const Gallery = dynamic(() => import('@/app/components/Gallery'), {
  ssr: true
});

const Testimonial = dynamic(() => import('@/app/components/Testimonial'), {
  ssr: true
});

const Contact = dynamic(() => import('@/app/components/CTA'), {
  ssr: true
});

const Footer = dynamic(() => import('@/app/components/Footer'), {
  ssr: true
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      
      <LazySection>
        <Services />
      </LazySection>
      
      <LazySection>
        <IssuesAndProcess />
      </LazySection>
      
      <LazySection>
        <Gallery />
      </LazySection>
      
      <LazySection>
        <Testimonial />
      </LazySection>
      
      <LazySection>
        <Contact />
      </LazySection>
      
      <LazySection>
        <Footer />
      </LazySection>
    </main>
  );
}
