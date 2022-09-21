import { useEffect, useState } from "react";
import { InferGetStaticPropsType } from "next";

import PostList from "components/PostList";
import Container from "components/Container";
import SeachBar from "components/SeachBar";
import TopBtn from "components/TopBtn";

import { allTypes } from "contentlayer/generated";

const TypeScript = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchPosts, setSearchPosts] = useState([]);

  const onChangeSearchTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.target.value);
  };

  const getSearchPosts = () => {
    if (searchTitle !== "") {
      const tmp = [];
      allTypes.map((post) => {
        const regex = new RegExp(searchTitle, "gim");
        if (regex.test(post.title)) {
          tmp.push(post);
        }
      });
      setSearchPosts(tmp);
    } else {
      setSearchPosts([]);
    }
  };

  useEffect(() => {
    getSearchPosts();
  }, [searchTitle]);

  const type = posts.filter((post) => post.category === "type");
  return (
    <Container>
      <SeachBar
        searchTitle={searchTitle}
        onChangeSearchTitle={onChangeSearchTitle}
      />
      <PostList searchPosts={searchPosts} posts={type} />
      <TopBtn />
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allTypes.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};

export default TypeScript;
