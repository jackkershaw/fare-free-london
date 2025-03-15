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
    // Extract title and content separately
    const titleMatch = section.match(/<h2[^>]*>(.*?)<\/h2>/s);
    const title = titleMatch ? titleMatch[1] : "";
    const mainContent = section
      .replace(/<h2[^>]*>.*?<\/h2>/s, "")
      .trim();

    // Split content by words but preserve HTML tags
    const words = mainContent.match(/(<[^>]+>|[^<\s]+|\s+)/g) || [];
    const isExpanded = expandedSections.includes(index);
    const shouldTruncate = words.length > 150;

    const handleReadMore = () => {
      setExpandedSections([...expandedSections, index]);
    };

    return (
      <div key={index} className={styles.gridItem}>
        {title && <h2>{title}</h2>}
        <div
          dangerouslySetInnerHTML={{
            __html:
              isExpanded || !shouldTruncate
                ? mainContent
                : words.slice(0, 150).join("") + "...",
          }}
        />
        {shouldTruncate && !isExpanded && (
          <button
            onClick={handleReadMore}
            className={styles.readMoreButton}
          >
            Read more
          </button>
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
