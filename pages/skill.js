import Head from 'next/head';
import PageLayout from '../components/pageLayout';
import Skills from '../components/sections/skill';

export default function Skill() {
  return (
    <>
      <Head>
        <title>Skill - {process.env.name}</title>
      </Head>

      <PageLayout>
        <Skills />
      </PageLayout>
    </>
  );
}
