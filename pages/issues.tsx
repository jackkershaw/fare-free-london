import Layout from "../components/layout";
import { getAllPDFs } from "../lib/api";
import PostPreview from "../components/more-stories-preview";
import { GetStaticProps } from "next";

export default function News({ allPosts: { edges } }) {
  const Posts = edges;

  return (
    <div>
      <Layout>
        <div className="lg:grid lg:grid-cols-4 lg:gap-x-5 lg:gap-y-5">
          {Posts.map(({ node }) => (
            <PostPreview
              key={node.slug}
              title={node.title}
              coverImage={node.featuredImage}
              slug={node.slug}
              excerpt={node.excerpt}
              category={node.categories.nodes.map(
                (category) => category.name
              )}
            />
          ))}
        </div>
      </Layout>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({}) => {
  const allPosts = await getAllPDFs();
  return {
    props: { allPosts },
    revalidate: 10,
  };
};
