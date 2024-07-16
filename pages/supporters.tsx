import Layout from "../components/layout";
import { getSupportersPageContent } from "../lib/api";
import { GetStaticProps } from "next";
import styles from "./WordpressText.module.css";

interface Props {
  content: string;
}

export default function Supporters({ content }: Props) {
  return (
    <div>
      <Layout>
        <div>
          <div className={`${styles.content}`}>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
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
