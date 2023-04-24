import React from "react";
import PageLayout from "../components/pageLayout";
import Skills from "../components/Section/skill";
import Head from "next/head";

export default function Skill() {
  return (
    <>
      <Head>
        <title>Skill - Tahir Ahmad</title>
      </Head>

      <PageLayout>
        <Skills />
      </PageLayout>
    </>
  );
}
