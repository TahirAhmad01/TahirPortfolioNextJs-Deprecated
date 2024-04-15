import Head from "next/head";
import AboutMe from "../components/sections/about";
import PageLayout from "../components/pageLayout";

export default function About() {
  const title = `About - ${process.env.name}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <PageLayout>
        <AboutMe />
      </PageLayout>
    </>
  );
}
