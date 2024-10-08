import Layout from "../components/layout";
import { getResourcesPageContent } from "../lib/api";
import { GetStaticProps } from "next";
import styles from "./IndexPage.module.css";
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

const Resources: React.FC<Props> = ({ content, featuredImage }) => {
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
        <div
          className={`font-serif text-lg prose ${styles.content}`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getResourcesPageContent();
  return {
    props: {
      content: data.content,
      featuredImage: data.featuredImage,
    },
    revalidate: 10,
  };
};

export default Resources;
