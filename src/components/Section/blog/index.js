import React from "react";
import { Fade } from "react-reveal";
import blogList from "../../../utils/blogList.json";
import Title from "../title";
import BlogCard from "./blogCard";

export default function Blog(props) {
  return (
    <>
      <div className="containerCustom">
        <Title title="blog" />
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogList.map((blog, idx) => {
            const { img, title, description } = blog || {};
            return (
              <Fade left={idx === 0} up={idx === 1} right={idx === 2} key={idx}>
                <BlogCard img={img} title={title} description={description} />
              </Fade>
            );
          })}
        </div>
      </div>
    </>
  );
}
