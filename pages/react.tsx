import type { NextPage } from "next";
import BlogPost from "../components/BlogPost";
import Container from "../components/Container";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";

const React = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const react = posts.filter((post) => post.category === "react");
  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        {react.map((post) => (
          <BlogPost
            date={post.date.slice(0, 10)}
            title={post.title}
            des={post.description}
            slug={post._raw.flattenedPath}
            category={post.category}
            key={post._id}
          />
        ))}
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};

export default React;
