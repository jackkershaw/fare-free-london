import Layout from "../components/layout";
import Image from "next/image";
import { getAboutPageContent } from "../lib/api";
import { GetStaticProps } from "next";
import styles from "./AimsPage.module.css";
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

export default function About({ content, featuredImage }: Props) {
  useEffect(() => {
    const links = document.querySelectorAll(`.${styles.content} a`);
    links.forEach((link) => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });
  }, [content]);

  return (
    <div>
      <Layout>
        <div>
          <h1 className="text-4xl text-center lg:text-left">Aims</h1>
          <div className="pt-4 lg:w-[40vw] lg:h-auto lg:mx-auto">
            <Image
              width="1080"
              height="980"
              src={featuredImage.node.sourceUrl}
              alt={featuredImage.node.altText}
              className="rounded-lg object-cover lg:mx-auto"
              priority
            />
          </div>
          <div className={`${styles.content}`}>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
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
