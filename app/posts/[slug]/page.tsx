import { notFound } from "next/navigation";
import Link from "next/link";
import PostBody from "../../../components/post-body";
import MoreStories from "../../../components/more-stories";
import PostHeader from "../../../components/post-header";
import SectionSeparator from "../../../components/section-separator";
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
} from "../../../lib/api";
import { Metadata } from "next";
//import { PDFObject } from "react-pdfobject";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const data = await getPostAndMorePosts(slug);
  const post = data?.post;

  const strippedExcerpt =
    post?.excerpt
      ?.replace(/<[^>]+>/g, " ")
      .replace(/&#[^\s;]+;/g, "") || "";

  const description =
    strippedExcerpt || "Campaign for free public transport in London";

  return {
    title: post?.title,
    robots: "index,follow",
    description,
    keywords: "public, transport, London, tube, train, bus",
    openGraph: {
      title: post?.title,
      description,
      type: "article",
      url: `https://www.farefreelondon.org/posts/${post?.slug}`,
      images: [
        {
          url: post?.featuredImage?.node.sourceUrl,
          width: 1200,
          height: 630,
          alt: post?.title || "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post?.title,
      description,
      images: post?.featuredImage?.node.sourceUrl,
    },
  };
}

export async function generateStaticParams() {
  const allPosts = await getAllPostsWithSlug();
  return allPosts.edges.map(({ node }: any) => ({ slug: node.slug }));
}

export default async function Page({ params }: Props) {
  const data = await getPostAndMorePosts(params.slug);
  const post = data?.post;
  const posts = data?.posts;
  const morePosts = posts?.edges || [];

  if (!post?.slug) return notFound();

  return (
    <>
      <article>
        <PostHeader
          title={post.title}
          coverImage={post.featuredImage}
        />
        <div className="post-content">
          <PostBody content={post.content} />
        </div>
        {post.pdf?.pdf?.node?.mediaItemUrl && (
          <div className="mx-auto max-w-2xl pb-10">
            <div className="flex flex-row justify-end">
              <a
                className="text-link hover:text-hover active:text-link font-sans font-bold pb-4 text"
                aria-label="link to view PDF full screen"
                href={post.pdf.pdf.node.mediaItemUrl}
                target="_blank"
              >
                View Full Screen
              </a>
            </div>
            {/* <PDFObject
              width="100%"
              height="800px"
              url={post.pdf.pdf.node.mediaItemUrl}
            /> */}
          </div>
        )}
      </article>

      <div className="flex flex-col justify-start lg:grid lg:grid-cols-4 pt-2">
        <h1 className="text-2xl font-bold font-sans">
          Share this article:
        </h1>
        <div className="flex justify-between lg:justify-start space-x-14 lg:space-x-5 text-4xl mx-auto lg:mx-0 pt-10 pb-5 lg:pt-0 lg:pb-0">
          <Link
            href={`https://twitter.com/intent/tweet?text=${post.title}&url=https://farefreelondon.org/posts/${post.slug}`}
            target="_blank"
          >
            <span className="icon-[mdi--twitter] text-link hover:text-hover active:text-link"></span>
          </Link>
          <Link
            href={`https://bsky.app/intent/compose?text=${encodeURIComponent(
              `${post.title}: https://farefreelondon.org/posts/${post.slug}`
            )}`}
            target="_blank"
          >
            <span className="icon-[ri--bluesky-fill] text-link hover:text-hover active:text-link"></span>
          </Link>
          <Link
            href={`https://wa.me/?text=${encodeURIComponent(
              `${post.title}: https://farefreelondon.org/posts/${post.slug}`
            )}`}
            target="_blank"
          >
            <span className="icon-[mdi--whatsapp] text-link hover:text-hover active:text-link"></span>
          </Link>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=https://farefreelondon.org/posts/${post.slug}`}
            target="_blank"
          >
            <span className="icon-[mdi--facebook] text-link hover:text-hover active:text-link"></span>
          </Link>
          <Link
            href={`mailto:?subject=${encodeURIComponent(
              post.title
            )}&body=Check out this article: ${encodeURIComponent(
              `https://farefreelondon.org/posts/${post.slug}`
            )}`}
            target="_blank"
          >
            <span className="icon-[mdi--email] text-link hover:text-hover active:text-link"></span>
          </Link>
        </div>
      </div>

      <SectionSeparator />
      <div className="lg:grid lg:grid-cols-5">
        <h1 className="pb-6 lg:py-0 text-2xl">Read Next: </h1>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </div>
      <SectionSeparator />
    </>
  );
}
