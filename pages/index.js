import PageLayout from '@/components/pageLayout';
import About from '@/components/sections/about';
import Blog from '@/components/sections/blog';
import ContactMe from '@/components/sections/contactMe';
import Home from '@/components/sections/home';
import Project from '@/components/sections/project';
import Resume from '@/components/sections/resume';
import Skill from '@/components/sections/skill';
import Testimonial from '@/components/sections/testimonial';
import dynamic from 'next/dynamic';
import Head from 'next/head';

export default function Index() {
  const DynamicFiverrWidget = dynamic(() => import('@/components/Fiverr'), {
    ssr: false, // Avoids server-side rendering for this component
  });

  return (
    <main>
      <Head>
        <title>{process.env.name} - Portfolio</title>
      </Head>

      <Home />
      <PageLayout>
        <About />
        <Skill />
        <Project />
        <Resume />
        <Blog />
        <DynamicFiverrWidget />
        <Testimonial />
        <ContactMe />
      </PageLayout>
    </main>
  );
}
