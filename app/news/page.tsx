import { getAllPostsForHome } from "../../lib/api";
import dynamic from "next/dynamic";

const PostPreview = dynamic(
  () => import("../../components/more-stories-preview")
);

export default async function News() {
  const allPosts = await getAllPostsForHome({ preview: false });
  const Posts = allPosts.edges;

  return (
    <div className="w-full">
      <h1 className="text-4xl text-center lg:text-left pb-3">News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
