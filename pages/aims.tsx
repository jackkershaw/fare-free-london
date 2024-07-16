import Layout from "../components/layout";
import Image from "next/image";
import Head from "next/head";
import { getAboutPageContent } from "../lib/api";
import { GetStaticProps } from "next";
import styles from "./aims.module.css";

interface Props {
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

export default function About({ content, featuredImage }: Props) {
  return (
    <div>
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
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAboutPageContent();
  return {
    props: {
      content: data.content,
      featuredImage: data.featuredImage,
    },
    revalidate: 10,
  };
};
