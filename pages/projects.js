import Head from "next/head";
import Project from "../components/sections/project";
import PageLayout from "../components/pageLayout";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Tahir Ahmad</title>
      </Head>

      <PageLayout>
        <Project />
      </PageLayout>
    </>
  );
}
