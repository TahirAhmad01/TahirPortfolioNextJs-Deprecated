import Head from 'next/head';
import PageLayout from '../components/pageLayout';
import Skills from '../components/sections/skill';

export default function Skill() {
  const title = `Skill - ${process.env.name}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <PageLayout>
        <Skills />
      </PageLayout>
    </>
  );
}
