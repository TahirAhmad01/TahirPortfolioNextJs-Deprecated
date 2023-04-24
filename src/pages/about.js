import React from "react";
import PageLayout from "../components/pageLayout";
import AboutMe from "../components/Section/about";
import Head from "next/head";

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
