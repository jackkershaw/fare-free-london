import Layout from "../components/layout";
import Image from "next/image";
import { getEventsPageContent } from "../lib/api";
import { GetStaticProps } from "next";
import styles from "./WordpressText.module.css";
import Form from "../components/form";

interface Props {
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

const Events: React.FC<Props> = ({ content, featuredImage }) => {
  return (
    <Layout>
      <div>
        <h1 className="font-sans text-2xl lg:text-4xl">
          Get Involved
        </h1>
        <div
          className={`font-serif text-lg prose ${styles.content}`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-10">
          <Form />
          <div className="flex items-center justify-end">
            <Image
              width={1080}
              height={980}
              src={featuredImage.node.sourceUrl}
              alt={featuredImage.node.altText}
              className="rounded-lg object-cover object-center"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

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

export default Events;
