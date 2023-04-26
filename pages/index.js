import About from "@/components/Section/about";
import Blog from "@/components/Section/blog";
import ContactMe from "@/components/Section/contactMe";
import Home from "@/components/Section/home";
import Project from "@/components/Section/project";
import Resume from "@/components/Section/resume";
import Skill from "@/components/Section/skill";
import Testimonial from "@/components/Section/testimonial";
import PageLayout from "@/components/pageLayout";
import Head from "next/head";

export default function Index() {
  return (
    <main>
      <Head>
        <title>Tahir Ahmad - Portfolio</title>
      </Head>

      <Home />
      <PageLayout>
        <About />
        <Skill />
        <Project />
        <Resume />
        <Blog />
        <Testimonial />
        <ContactMe />
      </PageLayout>
    </main>
  );
}
