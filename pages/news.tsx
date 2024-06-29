import { useState } from "react";
import Layout from "../components/layout";
import { getAllPostsForHome, getCategories } from "../lib/api";
import PostPreview from "../components/more-stories-preview";
import { GetStaticProps } from "next";

export default function News({ allPosts: { edges }, Categories }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const Posts = edges;
  const filteredPosts = selectedCategory
    ? Posts.filter(({ node }) =>
        node.categories.nodes.some(
          (category) => category.name === selectedCategory
        )
      )
    : Posts;

  return (
    <div>
      <Layout>
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-5 lg:gap-y-5">
          {filteredPosts.map(({ node }) => (
            <PostPreview
              key={node.slug}
              title={node.title}
              coverImage={node.featuredImage}
              slug={node.slug}
              altText={node.featuredImage?.node.altText}
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
  const Categories = await getCategories();
  return {
    props: { allPosts, Categories },
    revalidate: 10,
  };
};
