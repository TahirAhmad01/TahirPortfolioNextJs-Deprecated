import Head from 'next/head';
import ResumeSec from '../components/sections/resume';
import PageLayout from '../components/pageLayout';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume - Tahir Ahmad</title>
      </Head>
      <PageLayout>
        <ResumeSec />
      </PageLayout>
    </>
  );
}
