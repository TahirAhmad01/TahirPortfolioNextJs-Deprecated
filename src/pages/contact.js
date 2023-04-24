import React from "react";
import PageLayout from "../components/pageLayout";
import ContactMe from "../components/Section/contactMe";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Tahir Ahmad</title>
      </Head>

      <PageLayout>
        <ContactMe />
      </PageLayout>
    </>
  );
}
