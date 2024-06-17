import Layout from "../components/layout";
import Image from "next/image";
import { getAboutPageContent } from "../lib/api";
import { GetStaticProps } from "next";
import styles from "./about.module.css";

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
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 lg:min-h-[70vh] pb-10">
          <div className="relative min-w-[200px] min-h-[200px] lg:max-w-[50vw]">
            <Image
              src={featuredImage?.node.sourceUrl}
              alt={featuredImage?.node.altText}
              className="object-cover object-center pb-8 lg:pb-0"
              fill
            />
          </div>
          <div>
            <h1 className="font-sans text-2xl lg:text-4xl pb-5">
              Aims
            </h1>
            <div
              className={`font-serif text-lg prose ${styles.content}`}
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
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
