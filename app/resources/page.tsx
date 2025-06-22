import { getResourcesPageContent } from "../../lib/api";
import styles from "./Resources.module.css";

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
