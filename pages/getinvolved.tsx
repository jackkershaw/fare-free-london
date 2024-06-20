import Layout from "../components/layout";
import Image from "next/image";
import { getEventsPageContent } from "../lib/api";
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

export default function Events({ content, featuredImage }: Props) {
  return (
    <div>
      <Layout>
        <div>
          <h1 className="font-sans text-2xl lg:text-4xl pb-5">
            Get Involved
          </h1>
          <div
            className={`font-serif text-lg prose ${styles.content}`}
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </Layout>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getEventsPageContent();
  return {
    props: {
      content: data.content,
      featuredImage: data.featuredImage,
    },
    revalidate: 10,
  };
};
