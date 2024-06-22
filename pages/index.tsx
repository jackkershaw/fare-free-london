import Layout from "../components/layout";
import { getFrontPageContent } from "../lib/api";
import { GetStaticProps } from "next";
import styles from "./WordpressText.module.css";
import Image from "next/image";

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
      <div className="grid lg:grid-cols-2">
        <div className={`${styles.content}`}>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
        <Image
          src="/images/overground.jpg"
          alt="people on an overground train in London"
          className="rounded-lg"
        ></Image>
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
