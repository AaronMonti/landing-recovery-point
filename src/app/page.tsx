import dynamic from 'next/dynamic';
import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import LazySection from '@/app/components/LazySection';

// Lazy load de componentes pesados
const Services = dynamic(() => import('@/app/components/Services'), {
  loading: () => <div className="min-h-[400px] bg-gray-50 animate-pulse" />
});

const IssuesAndProcess = dynamic(() => import('@/app/components/IssuesAndProcess'), {
  loading: () => <div className="min-h-[400px] bg-gray-50 animate-pulse" />
});

const Gallery = dynamic(() => import('@/app/components/Gallery'), {
  loading: () => <div className="min-h-[400px] bg-gray-50 animate-pulse" />
});

const Testimonial = dynamic(() => import('@/app/components/Testimonial'), {
  loading: () => <div className="min-h-[400px] bg-gray-50 animate-pulse" />
});

const Contact = dynamic(() => import('@/app/components/CTA'), {
  loading: () => <div className="min-h-[400px] bg-gray-50 animate-pulse" />
});

const Footer = dynamic(() => import('@/app/components/Footer'), {
  loading: () => <div className="min-h-[200px] bg-gray-50 animate-pulse" />
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
