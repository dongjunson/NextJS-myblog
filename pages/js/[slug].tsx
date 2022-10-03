import Container from "components/Container";
import Comments from "components/Comments";
import TopBtn from "components/TopBtn";
import BlogContents from "components/BlogContents";

import { allJs } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXComponent = useMDXComponent(post.body.code);
  const customMeta = {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
  };

  return (
    <Container customMeta={customMeta} className="relative">
      <BlogContents post={post} MDXComponent={MDXComponent} />
      <TopBtn />
      <Comments />
    </Container>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: allJs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allJs.find((p) => p.slug === params.slug);
  return {
    props: {
      post,
    },
  };
};
