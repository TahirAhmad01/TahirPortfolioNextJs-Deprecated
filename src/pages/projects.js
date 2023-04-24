import React from "react";
import PageLayout from "../components/pageLayout";
import Project from "../components/Section/project";
import Head from "next/head";

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
