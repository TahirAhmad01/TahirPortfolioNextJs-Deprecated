import React from "react";
import PageLayout from "../components/pageLayout";
import ResumeSec from "../components/Section/resume";
import Head from "next/head";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume - Tahir Ahmad</title>
      </Head>
      <PageLayout>
        <ResumeSec />
      </PageLayout>
    </>
  );
}
