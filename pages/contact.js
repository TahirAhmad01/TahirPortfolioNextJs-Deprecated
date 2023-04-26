import Head from 'next/head';
import ContactMe from '../components/Section/contactMe';
import PageLayout from '../components/pageLayout';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Tahir Ahmad</title>
      </Head>

      <PageLayout>
        <ContactMe />
      </PageLayout>
    </>
  );
}
