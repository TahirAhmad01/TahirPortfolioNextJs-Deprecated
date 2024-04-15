import Head from "next/head";
import Project from "../components/sections/project";
import PageLayout from "../components/pageLayout";

export default function Projects() {
  const title = `Projects - ${process.env.name}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <PageLayout>
        <Project />
      </PageLayout>
    </>
  );
}
