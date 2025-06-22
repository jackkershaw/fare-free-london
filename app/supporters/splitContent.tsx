"use client";

import { useState } from "react";
import styles from "./SupportersPage.module.css";

interface Props {
  content: string;
}

export default function SplitContent({ content }: Props) {
  const [expandedSections, setExpandedSections] = useState<number[]>(
    []
  );

  const splitContentIntoGridItems = () => {
    return content.split(/(?=<h2)/gi).map((section, index) => {
      const words = section.split(/\s+/);
      const isExpanded = expandedSections.includes(index);
      const shouldTruncate = words.length > 120;

      const handleReadMore = () => {
        setExpandedSections((prev) => [...prev, index]);
      };

      return (
        <div key={index} className={styles.gridItem}>
          <div
            dangerouslySetInnerHTML={{
              __html:
                isExpanded || !shouldTruncate
                  ? section
                  : words.slice(0, 80).join(" ") + "...",
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
  };

  return (
    <div className={styles.content}>{splitContentIntoGridItems()}</div>
  );
}
