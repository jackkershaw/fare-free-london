import Layout from "../components/layout";
import { getSupportersPageContent } from "../lib/api";
import { GetStaticProps } from "next";
import styles from "./SupportersPage.module.css";

interface Props {
  content: string;
}

const splitContentIntoGridItems = (content: string) => {
  const sections = content.split(/(?=<h2)/gi).map((section, index) => (
    <div key={index} className={styles.gridItem}>
      <div dangerouslySetInnerHTML={{ __html: section }} />
    </div>
  ));
  return sections;
};

export default function Supporters({ content }: Props) {
  return (
    <div>
      <Layout>
        <h1 className="text-4xl">Supporters</h1>
        <div className={styles.content}>
          {splitContentIntoGridItems(content)}
        </div>
      </Layout>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getSupportersPageContent();
  return {
    props: {
      content: data.content,
    },
    revalidate: 10,
  };
};
