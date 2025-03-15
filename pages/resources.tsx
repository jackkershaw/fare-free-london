import Layout from "../components/layout";
import { getResourcesPageContent } from "../lib/api";
import { GetStaticProps } from "next";
import styles from "./GetInvolved.module.css";
import { useEffect } from "react";
interface Props {
  content: string;
}

const Resources: React.FC<Props> = ({ content }) => {
  useEffect(() => {
    const links = document.querySelectorAll(`.${styles.content} a`);
    links.forEach((link) => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });
  }, [content]);

  return (
    <Layout>
      <div>
        <h1 className="text-4xl lg:text-left">Resources</h1>
        <div className={`${styles.content}`}>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
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
