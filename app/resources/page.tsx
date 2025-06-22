import { getResourcesPageContent } from "../../lib/api";
import styles from "./Resources.module.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description: "Resources for the Fare Free London Campaign",
};

export default async function Resources() {
  const data = await getResourcesPageContent();
  const content = data.content;

  return (
    <div>
      <h1 className="text-4xl lg:text-left">Resources</h1>
      <div className={`${styles.content}`}>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
}
