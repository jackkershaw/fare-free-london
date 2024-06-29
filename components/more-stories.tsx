import PostPreview from "./more-stories-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="lg:flex lg:flex-row lg:justify-between lg:gap-x-6">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
