import { notFound } from "next/navigation";
import Head from "next/head";
import Link from "next/link";
import PostBody from "../../../components/post-body";
import MoreStories from "../../../components/more-stories";
import PostHeader from "../../../components/post-header";
import SectionSeparator from "../../../components/section-separator";
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
} from "../../../lib/api";
//import { PDFObject } from "react-pdfobject";

interface Props {
  params: {
    slug: string;
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

  const strippedExcerpt =
    post.excerpt
      ?.replace(/<[^>]+>/g, " ")
      .replace(/&#[^\s;]+;/g, "") || "";

  return (
    <>
      <article>
        <Head>
          <meta
            name="google-site-verification"
            content="NV55MkJVtFkcIEdf__HJ_cgUg0GWNaBu4ZxO5WKKyes"
          />
          <meta
            name="keywords"
            content="free, public, transport, London, tube, train, bus..."
          />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Fare Free London" />
          <title>{post.title}</title>

          <meta
            property="og:image"
            content={post.featuredImage?.node.sourceUrl}
          />

          <meta property="og:title" content={post.title} />

          <meta
            property="og:description"
            content={
              strippedExcerpt ||
              "Campaign for free public transport in London"
            }
          />

          <meta name="twitter:card" content="summary_large_image" />

          <meta
            name="twitter:image"
            content={post.featuredImage?.node.sourceUrl}
          />

          <meta name="twitter:title" content={post.title} />

          <meta
            name="twitter:description"
            content={
              strippedExcerpt ||
              "Campaign for free public transport in London"
            }
          />
        </Head>

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
