import { useRouter } from "next/router";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/post-layout";
import PostTitle from "../../components/post-title";
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
} from "../../lib/api";
import { useEffect } from "react";
import { PDFObject } from "react-pdfobject";

export default function Post({ post, posts }) {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    useEffect(() => {
      window.location.href = "/404";
    }, []);
    return null;
  }

  const strippedExcerpt = post?.excerpt
    ? post.excerpt.replace(/<[^>]+>/g, " ").replace(/&#[^\s;]+;/g, "")
    : "";

  return (
    <Layout>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>{`${post.title} | Fare Free London`}</title>
              <meta
                property="og:image"
                content={post.featuredImage?.node.sourceUrl}
              />
              <meta
                property="og:title"
                content={`${post.title} | Fare Free London`}
              />
              <meta
                property="og:description"
                content={
                  strippedExcerpt ||
                  "Campaign for free public transport in London"
                }
              />
              <meta
                name="twitter:card"
                content="summary_large_image"
              />
              <meta
                name="twitter:image"
                content={post.featuredImage?.node.sourceUrl}
              />
              <meta
                name="twitter:title"
                content={`${post.title} | Fare Free London`}
              />
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
              category={post.categories.edges}
            />
            <PostBody content={post.content} />
            {/* only show if pdf exists on page */}
            {post.pdf?.pdf?.node?.mediaItemUrl && (
              <div className=" mx-auto max-w-2xl pb-10">
                <div className="flex flex-row justify-end">
                  <a
                    className="text-link hover:text-hover active:text-link font-sans font-bold pb-4 text"
                    aria-label="link to view PDF full screen"
                    href={post.pdf.pdf.node.mediaItemUrl}
                    target="_blankl"
                  >
                    View Full Screen
                  </a>
                </div>
                <PDFObject
                  width="100%"
                  height="800px"
                  url={post.pdf.pdf.node.mediaItemUrl}
                />
              </div>
            )}
          </article>
          <div className="flex flex-col justify-start lg:grid lg:grid-cols-4 ">
            <h1 className="text-2xl font-bold font-sans">
              Share this article:
            </h1>
            <div className="flex justify-between lg:justify-start space-x-14 lg:space-x-5 text-4xl mx-auto lg:mx-0 pt-10 pb-5 lg:pt-0 lg:pb-0">
              <a
                href={`https://twitter.com/intent/tweet?text=${post.title}&url=https://farefreelondon.org/posts/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-[mdi--twitter] text-link hover:text-hover active:text-link"></span>
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `${post.title}: https://farefreelondon.org/posts/${post.slug}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-[mdi--whatsapp] text-link hover:text-hover active:text-link"></span>
              </a>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://farefreelondon.org/posts/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-[mdi--facebook]  text-link hover:text-hover active:text-link"></span>
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(
                  post.title
                )}&body=Check out this article: ${encodeURIComponent(
                  "https://farefreelondon.org/posts/" + post.slug
                )}`}
              >
                <span className="icon-[mdi--email] text-link hover:text-hover active:text-link"></span>
              </a>
            </div>
          </div>
          <SectionSeparator />
          <div className="lg:grid lg:grid-cols-4">
            <h1 className="pb-6 lg:py-0 text-2xl">Read Next: </h1>
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </div>
          <SectionSeparator />
        </>
      )}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getPostAndMorePosts(params?.slug);

  return {
    props: {
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths:
      allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
};

type Props = {
  params: { id: string };
};
