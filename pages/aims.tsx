import Layout from "../components/layout";
import Image from "next/image";
import { getAboutPageContent } from "../lib/api";
import { GetStaticProps } from "next";
import styles from "./WordpressText.module.css";

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
        <div>
          <div
            className={` ${styles.content}`}
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
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
