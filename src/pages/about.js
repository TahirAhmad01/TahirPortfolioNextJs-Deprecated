import React from "react";
import { Helmet } from "react-helmet";
import PageLayout from "../components/pageLayout";
import AboutMe from "../components/Section/about";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About - Tahir Ahmad</title>
      </Helmet>

      <PageLayout>
        <AboutMe />
      </PageLayout>
    </>
  );
}
