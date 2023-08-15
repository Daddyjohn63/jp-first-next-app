import BlogLatest from '@/components/home-page/Blog';
import Feature from '@/components/home-page/Feature';
import Hero from '@/components/home-page/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Feature />
      <BlogLatest />
    </main>
  );
}
