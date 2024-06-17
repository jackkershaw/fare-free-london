import PostPreview from "./more-stories-preview";
import Link from "next/link";
export default function MoreStories({ posts }) {
  const limitedPosts = posts.slice(0, 9);

  return (
    <section>
      <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8 lg:my-5">
        {limitedPosts.map(({ node }) => (
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
      <div className="lg:grid lg:grid-cols-3 lg:space-x-5 lg:gap-y-5 lg:items-end lg:w-full lg:gap-x-8">
        <Link
          href="/news"
          className="text-lg font-bold font-sans text-primary-500 lg:col-span-1"
        >
          {" "}
          <div className="bg-customRed-800 mb-10 lg:mb-5 p-5 w-full text-neutral-50 hover:bg-customRed-950 active:bg-customRed-500">
            {" "}
            Read More
          </div>
        </Link>
      </div>
    </section>
  );
}
