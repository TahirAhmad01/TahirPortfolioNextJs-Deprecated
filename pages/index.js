import About from "@/components/sections/about";
import Blog from "@/components/sections/blog";
import ContactMe from "@/components/sections/contactMe";
import Home from "@/components/sections/home";
import Project from "@/components/sections/project";
import Resume from "@/components/sections/resume";
import Skill from "@/components/sections/skill";
import Testimonial from "@/components/sections/testimonial";
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
