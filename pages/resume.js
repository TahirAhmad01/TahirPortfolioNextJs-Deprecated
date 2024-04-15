import Head from 'next/head';
import ResumeSec from '../components/sections/resume';
import PageLayout from '../components/pageLayout';

export default function Resume() {
  const title = `Resume - ${process.env.name}`;
  
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <PageLayout>
        <ResumeSec />
      </PageLayout>
    </>
  );
}
