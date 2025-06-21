import { getAllPostsForHome } from "../../lib/api";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";

const PostPreview = dynamic(
  () => import("../../components/more-stories-preview"),
  {
    ssr: false,
  }
);

export default async function News() {
  const allPosts = await getAllPostsForHome({ preview: false });
  const Posts = allPosts.edges;

  return (
    <div>
      <h1 className="text-4xl text-center lg:text-left pb-3">News</h1>
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
    </div>
  );
}
