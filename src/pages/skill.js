import Head from 'next/head';
import Skills from '../components/Section/skill';
import PageLayout from '../components/pageLayout';

export default function Skill() {
  return (
    <>
      <Head>
        <title>Skill - Tahir Ahmad</title>
      </Head>

      <PageLayout>
        <Skills />
      </PageLayout>
    </>
  );
}
