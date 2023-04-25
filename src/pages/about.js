import Head from "next/head";
import AboutMe from "../components/Section/about";
import PageLayout from "../components/pageLayout";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Tahir Ahmad</title>
      </Head>

      <PageLayout>
        <AboutMe />
      </PageLayout>
    </>
  );
}
