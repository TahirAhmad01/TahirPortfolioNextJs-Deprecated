import Head from "next/head";
import AboutMe from "../components/sections/about";
import PageLayout from "../components/pageLayout";

export default function About() {
  return (
    <>
      <Head>
        <title>About - {process.env.name}</title>
      </Head>

      <PageLayout>
        <AboutMe />
      </PageLayout>
    </>
  );
}
