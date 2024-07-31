import { useState } from "react";
import Layout from "../components/layout";
import { getSupportersPageContent } from "../lib/api";
import { GetStaticProps } from "next";
import styles from "./SupportersPage.module.css";

interface Props {
  content: string;
}

const splitContentIntoGridItems = (
  content: string,
  expandedSections,
  setExpandedSections
) => {
  const sections = content.split(/(?=<h2)/gi).map((section, index) => {
    const words = section.split(/\s+/);
    const isExpanded = expandedSections.includes(index);
    const shouldTruncate = words.length > 120;

    const handleReadMore = () => {
      setExpandedSections([...expandedSections, index]);
    };

    return (
      <div key={index} className={styles.gridItem}>
        <div
          dangerouslySetInnerHTML={{
            __html:
              isExpanded || !shouldTruncate
                ? section
                : words.slice(0, 120).join(" ") + "...",
          }}
        />
        {shouldTruncate && !isExpanded && (
          <a
            onClick={handleReadMore}
            className={styles.readMoreButton}
          >
            Read more
          </a>
        )}
      </div>
    );
  });
  return sections;
};

export default function Supporters({ content }: Props) {
  const [expandedSections, setExpandedSections] = useState<number[]>(
    []
  );

  return (
    <div>
      <Layout>
        <h1 className="text-4xl text-center lg:text-left">
          Supporters
        </h1>
        <div className={styles.content}>
          {splitContentIntoGridItems(
            content,
            expandedSections,
            setExpandedSections
          )}
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
