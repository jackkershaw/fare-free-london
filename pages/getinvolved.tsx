import Layout from "../components/layout";
import Image from "next/image";
import { getEventsPageContent } from "../lib/api";
import { GetStaticProps } from "next";
import styles from "./GetInvolved.module.css";
import Form from "../components/form";
import { useEffect } from "react";
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
  useEffect(() => {
    const links = document.querySelectorAll(`.${styles.content} a`);
    links.forEach((link) => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });
  }, [content]);

  return (
    <Layout>
      <div className="w-full min-h-screen">
        <h1 className="text-4xl">Get Involved</h1>
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
