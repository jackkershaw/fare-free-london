import Layout from "../components/layout";
import { getAllPostsForHome, getCategories } from "../lib/api";
import PostPreview from "../components/more-stories-preview";
import { GetStaticProps } from "next";

export default function News({ allPosts: { edges } }) {
  const Posts = edges;

  return (
    <div>
      <Layout>
        <h1 className="text-4xl">News</h1>
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-5 lg:gap-y-5">
          {Posts.map(({ node }) => (
            <PostPreview
              key={node.slug}
              title={node.title}
              coverImage={node.featuredImage}
              slug={node.slug}
              excerpt={node.excerpt}
            />
          ))}
        </div>
      </Layout>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({}) => {
  const allPosts = await getAllPostsForHome({ preview: false });
  return {
    props: { allPosts },
    revalidate: 10,
  };
};
