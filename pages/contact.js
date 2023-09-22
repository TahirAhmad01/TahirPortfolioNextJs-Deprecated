import Head from 'next/head';
import ContactMe from '../components/sections/contactMe';
import PageLayout from '../components/pageLayout';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - {process.env.name}</title>
      </Head>

      <PageLayout>
        <ContactMe />
      </PageLayout>
    </>
  );
}
