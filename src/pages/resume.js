import React from "react";
import { Helmet } from "react-helmet";
import PageLayout from "../components/pageLayout";
import ResumeSec from "../components/Section/resume";

export default function Resume() {
  return (
    <>
      <Helmet>
        <title>Resume - Tahir Ahmad</title>
      </Helmet>
      <PageLayout>
        <ResumeSec />
      </PageLayout>
    </>
  );
}
