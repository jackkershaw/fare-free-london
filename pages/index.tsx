import Layout from "../components/layout";
import { getFrontPageContent } from "../lib/api";
import { GetStaticProps } from "next";
import styles from "./IndexPage.module.css";
import Image from "next/image";
import Head from "next/head";

interface Props {
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

export default function Index({ content, featuredImage }: Props) {
  return (
    <Layout>
      <Head>
        <link
          rel="preload"
          href={featuredImage.node.sourceUrl}
          as="image"
        />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className={`${styles.content}`}>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
        <div>
          <Image
            width="1080"
            height="980"
            src={featuredImage.node.sourceUrl}
            alt={featuredImage.node.altText}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getFrontPageContent();
  return {
    props: {
      content: data.content,
      featuredImage: data.featuredImage,
    },
    revalidate: 10,
  };
};
