import Head from 'next/head';
import ContactMe from '../components/sections/contactMe';
import PageLayout from '../components/pageLayout';

export default function Contact() {
  const title = `Contact - ${process.env.name}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <PageLayout>
        <ContactMe />
      </PageLayout>
    </>
  );
}
