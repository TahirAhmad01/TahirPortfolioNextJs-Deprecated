import About from "@/components/Section/about";
import Home from "@/components/Section/home";
import PageLayout from "@/components/pageLayout";
import Skill from "@/components/Section/skill";
import Project from "@/components/Section/project";
import Resume from "@/components/Section/resume";
import Blog from "@/components/Section/blog";
import Testimonial from "@/components/Section/testimonial";
import ContactMe from "@/components/Section/contactMe";
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
